"""Fit Inverloch's packed residential shells to locally verified source outlines.

Requires Shapely 2.x for repeatable metric geometry operations. Source GeoJSON
is an authoring input. The viewer still reads its existing packed house schema.
"""

import argparse
import base64
import hashlib
import json
import math
from collections import Counter
from pathlib import Path
import struct

from shapely import affinity, make_valid
from shapely.geometry import LineString, Point, Polygon, box, shape
from shapely.ops import unary_union
from shapely.strtree import STRtree


HOUSE = struct.Struct("<10h")
CABIN = struct.Struct("<5h")
CAR = struct.Struct("<4h")
TREE = struct.Struct("<3h")
MAP_CENTRE_CLEARANCE = 0.5
FRONTAGE_REACH = 65
TREE_MOVE_LIMIT = 6.0
TREE_EDGE_MARGIN = 0.35
TREE_CROWN_BY_KIND = (0.78, 0.36, 0.45, 0.20)
PROTECTED_STREETS = {"abeckettstreet", "normanroad"}
# This also covers the host's A'Beckett retail/library block and hotel flank.
AB_EAST_PRECINCT = box(-280, -485, -65, -252)
# Enclose the renderer's additional Norman Road parcel substitution bounds.
NORMAN_DESIGNED_CONTEXT = box(-1791, 269, -1354, 536)


def read(path):
    return json.loads(path.read_text(encoding="utf-8"))


def rows(data, schema):
    return list(schema.iter_unpack(base64.b64decode(data, validate=True)))


def pack(records, schema):
    return base64.b64encode(b"".join(schema.pack(*record) for record in records)).decode("ascii")


def oriented(x, z, width, depth, heading):
    local = box(-width / 2, -depth / 2, width / 2, depth / 2)
    return affinity.translate(affinity.rotate(local, -heading, origin=(0, 0)), x, z)


def house_area(row):
    return oriented(row[0] / 4, row[1] / 4, row[2] / 10, row[3] / 10, row[4] / 10)


def street_geometry(town):
    roads = []
    for street_class, _, _, width, name_index, points in town["roads"]:
        name = town["names"][name_index] if name_index >= 0 else ""
        line = LineString([(x / 10, z / 10) for x, z in zip(points[::2], points[1::2])])
        if line.length:
            roads.append((line, street_class, width / 10, name))
    return roads


def model_polygon(feature, meta):
    lon0, lat0 = meta["origin"]
    sx, sz = meta["metresPerDegree"]
    geom = shape(feature["geometry"])
    if geom.geom_type == "MultiPolygon":
        # Detached parts are independent buildings. Use the dominant principal roof only.
        geom = max(geom.geoms, key=lambda p: p.area)
    if geom.geom_type != "Polygon" or geom.is_empty:
        return None
    geom = affinity.affine_transform(geom, [sx, 0, 0, -sz, -lon0 * sx, lat0 * sz])
    if not geom.is_valid:
        geom = make_valid(geom)
    return geom if geom.geom_type == "Polygon" and not geom.is_empty else None


def fit_rectangle(polygon, target_heading):
    fit = polygon.minimum_rotated_rectangle
    if fit.geom_type != "Polygon":
        return None
    if polygon.area / fit.area < 0.76:
        return None
    origin = fit.centroid
    edges = list(fit.exterior.coords)
    orientations = []
    for i, (a, b) in enumerate(zip(edges, edges[1:])):
        dx, dz = b[0] - a[0], b[1] - a[1]
        heading = -math.degrees(math.atan2(dz, dx)) % 360
        delta = abs((heading - target_heading + 180) % 360 - 180)
        depth = math.dist(edges[i + 1], edges[(i + 2) % 4])
        orientations.append((delta, heading, math.hypot(dx, dz), depth))
    _, heading, width, depth = min(orientations)
    if min(width, depth) < 3 or max(width, depth) > 31:
        return None
    return (round(origin.x * 4), round(origin.y * 4), round(width * 10),
            round(depth * 10), round(heading * 10) % 3600)


def get_metadata(feature):
    props = feature.get("properties", {})
    tags = props.get("tags") or props
    return tags.get("building", ""), tags.get("building:levels"), tags.get("roof:shape")


def eligible_outline(feature, geom):
    kind, _, _ = get_metadata(feature)
    if kind in {"demolished", "construction", "ruins", "roof", "canopy", "greenhouse", "ruin"}:
        return False
    return 14 <= geom.area <= 630


def parcel_areas(features, meta):
    if features is None:
        return []
    parcels = []
    for feature in features["features"]:
        props = feature.get("properties", {})
        if str(props.get("parcel_road", "")).lower() in {"y", "yes", "true", "1"}:
            continue
        if str(props.get("parcel_status", "A")).lower() not in {"a", "active"}:
            continue
        geom = model_polygon(feature, meta)
        if geom is not None and 65 <= geom.area <= 6000:
            parcels.append(geom)
    return parcels


def parcel_member(polygon, index, parcels):
    centre = polygon.centroid
    candidates = [(parcels[i].area, int(i)) for i in index.query(centre, predicate="intersects")
                  if polygon.intersection(parcels[i]).area >= polygon.area * 0.62]
    return min(candidates)[1] if candidates else None


def choose_nearby(polygon, index, originals, records):
    overlaps = []
    for j in index.query(polygon.buffer(4)):
        j = int(j)
        old = originals[j]
        intersection = polygon.intersection(old).area
        fraction = intersection / min(polygon.area, old.area)
        proximity = old.centroid.distance(polygon.centroid)
        ratio = min(polygon.area, old.area) / max(polygon.area, old.area)
        is_shed = records[j][5] == 1
        size_compatible = polygon.area < 54 if is_shed else polygon.area >= 43
        if size_compatible and ratio >= 0.37 and fraction >= 0.34 and proximity <= 7.5:
            iou = intersection / (polygon.area + old.area - intersection)
            overlaps.append((iou, -proximity, j))
    return max(overlaps, default=None)


def choose_in_parcel(polygon, parcel, by_parcel, originals, records):
    matches = []
    for slot in by_parcel.get(parcel, ()):
        legacy = originals[slot]
        offset = legacy.centroid.distance(polygon.centroid)
        ratio = min(legacy.area, polygon.area) / max(legacy.area, polygon.area)
        kind_matches = polygon.area < 54 if records[slot][5] else polygon.area >= 43
        if offset <= 13 and ratio >= 0.39 and kind_matches:
            matches.append((ratio * 0.44 + 0.4 * (1 - offset / 13), -offset, slot))
    best = sorted(matches, reverse=True)
    if len(best) > 1 and best[0][0] - best[1][0] < 0.11:
        return None
    return best[0] if best else None


def find_overlap(candidate, index, obstacles, ignore=None):
    return bool(overlap_indices(candidate, index, obstacles, ignore))


def overlap_indices(candidate, index, obstacles, ignore=None):
    return {int(j) for j in index.query(candidate, predicate="intersects")
            if j != ignore and candidate.intersection(obstacles[j]).area > MAP_CENTRE_CLEARANCE}


def synth_attrs(feature, area, key):
    kind, osm_levels, osm_roof = get_metadata(feature)
    seed = hashlib.sha256(key.encode()).digest()
    shed = area < 43 and kind not in {"house", "residential", "detached"}
    levels = 1
    try:
        if int(float(osm_levels)) >= 2:
            levels = 2
    except (TypeError, ValueError, OverflowError):
        estimate = feature.get("properties", {}).get("heightEstimateM")
        if isinstance(estimate, (float, int)) and 6.0 <= estimate <= 10.0 and not shed:
            levels = 2
    roof = {"gabled": 0, "hipped": 1, "skillion": 2, "flat": 3}.get(osm_roof, seed[0] % 3)
    return (int(shed), levels, roof, seed[1] % 12, seed[2] % 10)


def tree_destination(trunk, crown, parcel, parcel_index, protected, occupancy, tree_index, moved):
    interior = parcel.buffer(-0.5)
    possible = set()
    for radius_step in range(3, round(TREE_MOVE_LIMIT * 2) + 1):
        radius = radius_step / 2
        for direction in range(16):
            angle = direction * math.tau / 16
            possible.add((round((trunk.x + radius * math.cos(angle)) * 4),
                          round((trunk.y + radius * math.sin(angle)) * 4)))

    def move_distance(coords):
        return math.hypot(coords[0] / 4 - trunk.x, coords[1] / 4 - trunk.y)

    for x, z in sorted(possible, key=lambda coords: (move_distance(coords), coords)):
        point = Point(x / 4, z / 4)
        distance = move_distance((x, z))
        if not (1.5 <= distance <= TREE_MOVE_LIMIT) or not interior.contains(point):
            continue
        if len(parcel_index.query(point, predicate="intersects")) != 1:
            continue
        if protected.distance(point) <= crown:
            continue
        if len(occupancy.query(point, predicate="dwithin", distance=max(1.5, crown))):
            continue
        spacing = max(2.0, crown)
        if len(tree_index.query(point, predicate="dwithin", distance=spacing)):
            continue
        if any(point.distance(other) <= spacing for other in moved):
            continue
        return x, z, point, distance
    return None


def place(town, layers, parcel_geojson=None, *, relocate_blocking_trees=False):
    roads = street_geometry(town)
    normalized_name = lambda name: "".join(ch for ch in name.lower() if ch.isalnum())
    protected = unary_union([
        AB_EAST_PRECINCT, NORMAN_DESIGNED_CONTEXT,
        *[line.buffer(46) for line, _, _, name in roads if normalized_name(name) in PROTECTED_STREETS],
    ])
    road_areas = [line.buffer(width / 2 + 0.45) for line, _, width, _ in roads]
    frontage = STRtree([line for line, cls, _, _ in roads if cls <= 4])
    houses = rows(town["houses"], HOUSE)
    original = [house_area(row) for row in houses]
    existing_index = STRtree(original)
    protected_indices = {i for i, poly in enumerate(original) if protected.intersects(poly)}
    parcels = parcel_areas(parcel_geojson, town["meta"])
    parcel_index = STRtree(parcels)
    legacy_parcels = [parcel_member(poly, parcel_index, parcels) for poly in original]
    by_parcel = {}
    for i, parcel in enumerate(legacy_parcels):
        if parcel is not None:
            by_parcel.setdefault(parcel, []).append(i)
    native_buildings = [
        make_valid(Polygon([(x / 10, z / 10) for x, z in zip(b["p"][::2], b["p"][1::2])]))
        for b in town["buildings"] if len(b["p"]) >= 6
    ]
    fixed = [
        *native_buildings, *road_areas,
        *[Point(x / 4, z / 4).buffer(5.0) for x, z, *_ in rows(town["cabins"], CABIN)],
        *[oriented(x / 4, z / 4, 2.35, 5.3, heading / 10) for x, z, heading, _ in rows(town["cars"], CAR)],
    ]
    fixed_index = STRtree(fixed)
    reason = Counter()
    proposals = []
    source_centres = []
    for provider, source in layers:
        assert source["type"] == "FeatureCollection"
        for feature in source["features"]:
            geometry = model_polygon(feature, town["meta"])
            if geometry is None:
                reason["invalid_source_shape"] += 1
                continue
            source_id = str(feature.get("id") or feature.get("properties", {}).get("sourceId") or geometry.wkb_hex)
            source_centres.append({"source": provider, "sourceId": source_id,
                                   "x": round(geometry.centroid.x, 2), "z": round(geometry.centroid.y, 2)})
            if not eligible_outline(feature, geometry):
                reason["outside_building_class_or_size"] += 1
                continue
            if protected.intersects(geometry):
                reason["protected_source_outline"] += 1
                continue
            if not len(frontage.query(geometry, predicate="dwithin", distance=FRONTAGE_REACH)):
                reason["outside_frontage_reach"] += 1
                continue
            parcel = parcel_member(geometry, parcel_index, parcels)
            hit = choose_nearby(geometry, existing_index, original, houses)
            match_method = "outline_overlap" if hit else "new_footprint"
            if hit and parcel is not None and legacy_parcels[hit[2]] not in {parcel, None}:
                hit = None
                match_method = "new_footprint"
            if hit is None and parcel is not None:
                hit = choose_in_parcel(geometry, parcel, by_parcel, original, houses)
                if hit:
                    match_method = "same_vicmap_parcel"
            if hit:
                score, _, index = hit
                if index in protected_indices:
                    reason["protected_existing_shell"] += 1
                    continue
                heading = houses[index][4] / 10
            else:
                score, index = 0, None
                # A nearby legacy shell may represent this property but fail the match tests.
                nearby = existing_index.query(geometry, predicate="dwithin", distance=6)
                if any(parcel is None or legacy_parcels[j] in {parcel, None} for j in nearby):
                    reason["ambiguous_existing_shell"] += 1
                    continue
                nearest = frontage.geometries[frontage.nearest(geometry)]
                a = nearest.interpolate(nearest.project(geometry.centroid))
                heading = math.degrees(math.atan2(a.x - geometry.centroid.x, a.y - geometry.centroid.y))
            encoded = fit_rectangle(geometry, heading)
            if encoded is None:
                reason["outline_not_supported_by_packed_geometry"] += 1
                continue
            rectangle = house_area(encoded)
            if parcel is not None and parcels[parcel].intersection(rectangle).area < rectangle.area * 0.77:
                reason["crosses_parcel_boundary"] += 1
                continue
            if protected.intersects(rectangle) or find_overlap(rectangle, fixed_index, fixed):
                reason["clearance_or_protected_geometry"] += 1
                continue
            blocking_legacy = overlap_indices(rectangle, existing_index, original, ignore=index)
            if blocking_legacy & protected_indices:
                reason["conflicting_protected_shell"] += 1
                continue
            if hit and rectangle.intersection(original[index]).area < original[index].area * 0.49:
                # The base atlas contains legacy house pads. Avoid revealing most of a pad at once.
                reason["legacy_ground_pad_alignment"] += 1
                continue
            proposals.append((provider, score, source_id, index, encoded, rectangle, feature, match_method,
                              blocking_legacy, geometry, parcel))

    final_rows = houses.copy()
    placed = []
    occupied_slots = set()
    used_cells = {}
    packed_trees = rows(town["trees"], TREE)
    trunks = [Point(x / 4, z / 4) for x, z, _ in packed_trees]
    tree_index = STRtree(trunks)
    tree_blocked = []

    def cell_keys(rectangle):
        minx, minz, maxx, maxz = rectangle.bounds
        return [(x, z) for x in range(math.floor(minx / 20), math.floor(maxx / 20) + 1)
                for z in range(math.floor(minz / 20), math.floor(maxz / 20) + 1)]

    def overlaps_placed(rectangle, keys):
        neighbours = {j for key in keys for j in used_cells.get(key, ())}
        return any(rectangle.intersection(placed[j]["polygon"]).area > MAP_CENTRE_CLEARANCE for j in neighbours)

    def accept(proposal, keys):
        provider, _, identifier, index, encoded, rectangle, feature, match_method, *_ = proposal
        if index is None:
            slot = len(final_rows)
            final_rows.append((*encoded, *synth_attrs(feature, rectangle.area, identifier)))
            status = "placed_missing_shell"
        else:
            slot = index
            final_rows[index] = (*encoded, *houses[index][5:])
            occupied_slots.add(index)
            status = "fitted_existing_shell"
        for key in keys:
            used_cells.setdefault(key, []).append(len(placed))
        placed.append(dict(source=provider, sourceId=identifier, slot=slot, status=status, method=match_method,
                           polygon=rectangle, x=encoded[0] / 4, z=encoded[1] / 4))
        return slot

    # Keep packet indices stable for the original building variants, trees and route props.
    pending = sorted(proposals, key=lambda r: (r[0] != "osm", r[3] is None, -r[1], r[2]))
    while pending:
        before = len(placed)
        deferred = []
        for proposal in pending:
            _, _, _, index, encoded, rectangle, _, _, blocking_legacy, _, _ = proposal
            if index is not None and index in occupied_slots:
                reason["source_duplicate_or_lower_ranked"] += 1
                continue
            if not blocking_legacy.issubset(occupied_slots):
                # Retry only after a neighbour's legacy shell has moved to a checked position.
                deferred.append(proposal)
                continue
            keys = cell_keys(rectangle)
            if overlaps_placed(rectangle, keys):
                reason["conflicting_source_outline"] += 1
                continue
            tree_hits = tree_index.query(rectangle, predicate="contains")
            if any(index is None or not original[index].covers(trunks[j]) for j in tree_hits):
                reason["existing_tree_in_new_shell"] += 1
                if relocate_blocking_trees:
                    tree_blocked.append((proposal, tree_hits))
                continue
            if index is not None and encoded == houses[index][:5]:
                reason["already_matches_packed_envelope"] += 1
                continue
            accept(proposal, keys)
        if len(placed) == before:
            reason["conflicting_existing_shell"] += len(deferred)
            break
        pending = deferred

    tree_report = None
    if relocate_blocking_trees:
        stage_one_rows = final_rows.copy()
        stage_one_placement_count = len(placed)
        stage_one_slots = {row["slot"] for row in placed}
        # Keep open destinations outside all staged geometry and plausible source outlines.
        occupancy = STRtree([*fixed, *map(house_area, final_rows), *[p[5] for p in proposals], *[p[9] for p in proposals]])
        moved_trees = {}
        moves = []
        rejected = Counter()
        for proposal, tree_hits in tree_blocked:
            provider, _, identifier, index, encoded, rectangle, _, _, blocking_legacy, source, parcel_id = proposal
            keys = cell_keys(rectangle)
            if (index in occupied_slots or not blocking_legacy.issubset(occupied_slots)
                    or overlaps_placed(rectangle, keys)):
                rejected["conflicts_with_staged_shell"] += 1
                continue
            if index is not None and encoded == houses[index][:5]:
                rejected["already_matches_packed_envelope"] += 1
                continue
            if len(tree_hits) != 1:
                rejected["multiple_blocking_trunks"] += 1
                continue
            tree = int(tree_hits[0])
            trunk = trunks[tree]
            if tree in moved_trees:
                rejected["trunk_already_used"] += 1
                continue
            if not source.buffer(-TREE_EDGE_MARGIN).contains(trunk) or not rectangle.buffer(-TREE_EDGE_MARGIN).contains(trunk):
                rejected["trunk_outside_certain_outline_interior"] += 1
                continue
            if parcel_id is None:
                rejected["no_active_parcel"] += 1
                continue
            parcel = parcels[parcel_id]
            if (not parcel.covers(source) or not parcel.covers(rectangle)
                    or len(parcel_index.query(trunk, predicate="intersects")) != 1):
                rejected["ambiguous_or_crossing_parcel"] += 1
                continue
            _, _, kind_and_height = packed_trees[tree]
            crown = TREE_CROWN_BY_KIND[kind_and_height >> 8] * ((kind_and_height & 255) / 10)
            destination = tree_destination(trunk, crown, parcel, parcel_index, protected, occupancy,
                                           tree_index, moved_trees.values())
            if destination is None:
                rejected["no_clear_position_on_same_parcel"] += 1
                continue
            x, z, point, distance = destination
            slot = accept(proposal, keys)
            moved_trees[tree] = point
            packed_trees[tree] = (x, z, kind_and_height)
            reason["existing_tree_in_new_shell"] -= 1
            moves.append(dict(source=provider, sourceId=identifier, houseSlot=slot, treeSlot=tree,
                              fromXZ=[trunk.x, trunk.y], toXZ=[point.x, point.y], distanceM=round(distance, 3),
                              treeKind=kind_and_height >> 8, treeHeightM=(kind_and_height & 255) / 10))

        assert all(stage_one_rows[i] == final_rows[i] for i in stage_one_slots)
        tree_report = dict(stageOnePlacements=stage_one_placement_count, proposalsReviewed=len(tree_blocked),
                           additionalPlacements=len(moves), rejected=dict(rejected.most_common()), moves=moves)
        if moves:
            town["trees"] = pack(packed_trees, TREE)

    assert all(final_rows[i] == houses[i] for i in protected_indices)
    assert all(houses[i][5:] == final_rows[i][5:] for i in range(len(houses)))
    assert all(not protected.intersects(row["polygon"]) for row in placed)
    report = {
        "baseHouseSlots": len(houses),
        "protectedUnchangedSlots": len(protected_indices),
        "fitCount": len(occupied_slots),
        "missingShellsPlaced": len(final_rows) - len(houses),
        "finalHouseSlots": len(final_rows),
        "placementsBySource": dict(Counter(row["source"] for row in placed)),
        "placementsByMethod": dict(Counter(row["method"] for row in placed)),
        "eligibleReferenceParcels": len(parcels),
        "reviewReasons": dict(reason.most_common()),
        "placements": [{k: v for k, v in row.items() if k != "polygon"} for row in placed],
        "sourceCentres": source_centres,
    }
    if tree_report is not None:
        report["treeRelocation"] = tree_report
    town["houses"] = pack(final_rows, HOUSE)
    town["counts"]["houses"] = len(final_rows)
    credit = "Additional outline estimates: Microsoft Global ML Building Footprints (CDLA-Permissive-2.0)."
    if credit not in town["meta"]["sources"] and report["placementsBySource"].get("microsoft"):
        town["meta"]["sources"] += " " + credit
    parcel_credit = "Placement checks: Vicmap Parcel © State of Victoria (CC BY 4.0)."
    if parcel_geojson and parcel_credit not in town["meta"]["sources"]:
        town["meta"]["sources"] += " " + parcel_credit
    return report


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("baseline", type=Path)
    parser.add_argument("output", type=Path)
    parser.add_argument("--osm", type=Path, required=True)
    parser.add_argument("--microsoft", type=Path, required=True)
    parser.add_argument("--parcels", type=Path)
    parser.add_argument("--relocate-blocking-trees", action="store_true",
                        help="Second pass for unambiguously tree-blocked shells with safe same-parcel relocations")
    parser.add_argument("--report", type=Path, required=True)
    args = parser.parse_args()
    if args.relocate_blocking_trees and not args.parcels:
        parser.error("--relocate-blocking-trees requires --parcels")
    inputs = {path.resolve() for path in (args.baseline, args.osm, args.microsoft, args.parcels) if path is not None}
    outputs = {args.output.resolve(), args.report.resolve()}
    if len(outputs) != 2 or inputs & outputs:
        parser.error("Write the candidate and report to separate paths outside the input files.")
    town = read(args.baseline)
    report = place(town, [("osm", read(args.osm)), ("microsoft", read(args.microsoft))],
                   read(args.parcels) if args.parcels else None, relocate_blocking_trees=args.relocate_blocking_trees)
    candidate = json.dumps(town, ensure_ascii=False, separators=(",", ":")).encode("utf-8")
    report["candidateSha256"] = hashlib.sha256(candidate).hexdigest()
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_bytes(candidate)
    args.report.parent.mkdir(parents=True, exist_ok=True)
    args.report.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    summary = {k: v for k, v in report.items() if k not in {"placements", "sourceCentres"}}
    if "treeRelocation" in summary:
        summary["treeRelocation"] = {k: v for k, v in report["treeRelocation"].items() if k != "moves"}
    print(json.dumps(summary, indent=2))


if __name__ == "__main__":
    main()
