"""Summarise Inverloch's road-side footprint coverage without changing either town asset."""

import argparse
import base64
import hashlib
import json
import math
import os
import struct
import tempfile
import unicodedata
from collections import Counter, defaultdict
from pathlib import Path
from typing import NamedTuple


HOUSE_ROW = struct.Struct("<10h")
VEHICLE_RADIUS = 45.0
PATH_RADIUS = 18.0
PATH_DISTANCE_PENALTY = 8.0
CELL_SIZE = 64.0
CENTRELINE_EPSILON = 0.05
EXCLUDED = {"abeckettstreet": "A’Beckett Street", "normanroad": "Norman Road"}
PLACEMENT_KINDS = (
    "generated_fallback",
    "source_footprint_packed_replacement",
    "source_footprint_packed_addition",
    "existing_native_mapped_footprint",
    "source_footprint_mapped_addition",
)


class Segment(NamedTuple):
    road: int
    index: int
    x: float
    z: float
    dx: float
    dz: float
    length: float
    path: bool


def packed_houses(town):
    buf = base64.b64decode(town["houses"], validate=True)
    if len(buf) % HOUSE_ROW.size:
        raise ValueError("Packed houses must contain complete little-endian 10-word records")
    rows = list(HOUSE_ROW.iter_unpack(buf))
    validate_count(town, "houses", len(rows))
    return rows


def validate_count(town, kind, actual):
    expected = town.get("counts", {}).get(kind, actual)
    if expected != actual:
        raise ValueError(f"Town {kind} count is {expected}, but it contains {actual} records")


def to_points(flat):
    if len(flat) % 2:
        raise ValueError("Coordinate lists must contain complete East/South pairs")
    return [(x / 10, z / 10) for x, z in zip(flat[::2], flat[1::2])]


def polygon_centre(row):
    ring = to_points(row["p"])
    if len(ring) < 3:
        raise ValueError("A mapped building footprint needs at least three vertices")
    # Translate to the first point to avoid losing precision on small, distant sheds.
    ox, oz = ring[0]
    local = [(x - ox, z - oz) for x, z in ring]
    terms = [(x, z, u, v, x * v - u * z) for (x, z), (u, v) in zip(local, local[1:] + local[:1])]
    area_twice = math.fsum(cross for _, _, _, _, cross in terms)
    if abs(area_twice) < 1e-8:
        raise ValueError("A mapped building footprint has zero area")
    return (
        ox + math.fsum((x + u) * cross for x, _, u, _, cross in terms) / (3 * area_twice),
        oz + math.fsum((z + v) * cross for _, z, _, v, cross in terms) / (3 * area_twice),
    )


def excluded_name(name):
    plain = unicodedata.normalize("NFKD", name or "").casefold()
    return EXCLUDED.get("".join(ch for ch in plain if ch.isalnum()))


def cell(value):
    return math.floor(value / CELL_SIZE)


def make_roads(town):
    names = town["names"]
    lon0, lat0 = town["meta"]["origin"]
    scale_east, scale_north = town["meta"]["metresPerDegree"]
    if scale_east <= 0 or scale_north <= 0:
        raise ValueError("Town projection scales must be positive")
    grid = defaultdict(list)
    ids = Counter()
    features = []
    validate_count(town, "roads", len(town["roads"]))
    for index, row in enumerate(town["roads"]):
        road_class, surface, flags, width_dm, name_index, flat = row
        if name_index < -1 or name_index >= len(names):
            raise ValueError(f"Invalid name index on baseline road record {index}")
        name = names[name_index] if name_index >= 0 else None
        points = to_points(flat)
        if len(points) < 2:
            raise ValueError(f"Road {index} has fewer than two vertices")
        geometry = [[round(lon0 + x / scale_east, 8), round(lat0 - z / scale_north, 8)] for x, z in points]
        row_hash = hashlib.sha256(json.dumps(row, separators=(",", ":"), ensure_ascii=False).encode()).hexdigest()[:20]
        ids[row_hash] += 1
        road_id = f"inverloch-road-{row_hash}"
        if ids[row_hash] > 1:
            road_id += f"-{ids[row_hash]}"
        lengths = []
        path = road_class >= 5
        radius = PATH_RADIUS if path else VEHICLE_RADIUS
        for leg, ((x, z), (ex, ez)) in enumerate(zip(points, points[1:])):
            dx, dz = ex - x, ez - z
            length = math.hypot(dx, dz)
            lengths.append(length)
            if length == 0:
                continue
            segment = Segment(index, leg, x, z, dx, dz, length, path)
            for ix in range(cell(min(x, ex) - radius), cell(max(x, ex) + radius) + 1):
                for iz in range(cell(min(z, ez) - radius), cell(max(z, ez) + radius) + 1):
                    grid[ix, iz].append(segment)
        features.append({
            "type": "Feature",
            "id": road_id,
            "geometry": {"type": "LineString", "coordinates": geometry},
            "properties": {
                "base_road_index": index,
                "name": name,
                "road_class": road_class,
                "surface_code": surface,
                "flags": flags,
                "width_m": width_dm / 10,
                "length_m": math.fsum(lengths),
                "exclusion": excluded_name(name),
                "sides": [
                    {"id": f"{road_id}-{side}", "side": side, "placement_counts": dict.fromkeys(PLACEMENT_KINDS, 0)}
                    for side in ("left", "right")
                ],
            },
        })
    return features, grid


def nearest_frontage(grid, x, z):
    best = None
    for segment in grid.get((cell(x), cell(z)), ()):
        ax, az = x - segment.x, z - segment.z
        t = (ax * segment.dx + az * segment.dz) / (segment.length ** 2)
        t = max(0, min(1, t))
        distance = math.hypot(ax - t * segment.dx, az - t * segment.dz)
        limit = PATH_RADIUS if segment.path else VEHICLE_RADIUS
        if distance > limit:
            continue
        rank = (distance + PATH_DISTANCE_PENALTY * segment.path, distance, segment.road, segment.index)
        if best is None or rank < best[0]:
            # South is positive in Explore, so a negative cross product is map-left.
            signed_cross = (segment.dx * az - segment.dz * ax) / segment.length
            best = rank, segment.road, signed_cross
    if best is None:
        return None, "outside_catchment"
    _, road, lateral = best
    if abs(lateral) < CENTRELINE_EPSILON:
        return None, "centreline_ambiguous"
    return road, "left" if lateral < 0 else "right"


def compile_inventory(baseline, candidate, baseline_sha256, candidate_sha256, source_centres=None):
    if baseline["roads"] != candidate["roads"] or baseline["names"] != candidate["names"]:
        raise ValueError("Candidate changed the baseline road rows or their name lookup")
    for key in ("origin", "metresPerDegree"):
        if baseline["meta"][key] != candidate["meta"][key]:
            raise ValueError(f"Candidate changed the baseline map projection field {key}")

    base_packed, new_packed = packed_houses(baseline), packed_houses(candidate)
    if len(new_packed) < len(base_packed):
        raise ValueError("Candidate removed packed slots; original indices must stay stable")
    for index, (old, new) in enumerate(zip(base_packed, new_packed)):
        if old[5:] != new[5:]:
            raise ValueError(f"Candidate changed the non-geometric attributes of packed slot {index}")

    base_mapped, new_mapped = baseline["buildings"], candidate["buildings"]
    validate_count(baseline, "buildings", len(base_mapped))
    validate_count(candidate, "buildings", len(new_mapped))
    if new_mapped[:len(base_mapped)] != base_mapped:
        raise ValueError("Candidate altered or removed existing native mapped rows")

    features, grid = make_roads(baseline)
    assigned = Counter()
    excluded = Counter()
    unassigned = defaultdict(Counter)
    protected_base_slots_changed = []

    def add(kind, x, z):
        road, side = nearest_frontage(grid, x, z)
        if road is None:
            unassigned[side][kind] += 1
            return
        props = features[road]["properties"]
        side_record = props["sides"][0 if side == "left" else 1]
        side_record["placement_counts"][kind] += 1
        assigned[kind] += 1
        if props["exclusion"]:
            excluded[kind] += 1

    for index, row in enumerate(new_packed):
        if row[2] <= 0 or row[3] <= 0:
            raise ValueError(f"Packed slot {index} has a non-positive width/depth")
        if index >= len(base_packed):
            kind = "source_footprint_packed_addition"
        elif row == base_packed[index]:
            kind = "generated_fallback"
        else:
            kind = "source_footprint_packed_replacement"
            ox, oz = base_packed[index][:2]
            road, _ = nearest_frontage(grid, ox / 4, oz / 4)
            if road is not None and features[road]["properties"]["exclusion"]:
                protected_base_slots_changed.append(index)
        add(kind, row[0] / 4, row[1] / 4)

    for index, row in enumerate(new_mapped):
        kind = "existing_native_mapped_footprint" if index < len(base_mapped) else "source_footprint_mapped_addition"
        add(kind, *polygon_centre(row))

    sides = [side for feature in features for side in feature["properties"]["sides"]]
    excluded_roads = [feature for feature in features if feature["properties"]["exclusion"]]
    eligible_sides = [side for feature in features if not feature["properties"]["exclusion"]
                      for side in feature["properties"]["sides"]]
    frontage_states = Counter()
    if source_centres is not None:
        for side in sides:
            side["source_observations"] = {"osm": 0, "microsoft": 0}
        for observation in source_centres:
            road, side = nearest_frontage(grid, observation["x"], observation["z"])
            if road is not None:
                record = features[road]["properties"]["sides"][0 if side == "left" else 1]
                record["source_observations"][observation["source"]] += 1
        for side in eligible_sides:
            counts = side["placement_counts"]
            if any(count and kind.startswith("source_footprint_") for kind, count in counts.items()):
                state = "updated"
            elif counts["existing_native_mapped_footprint"]:
                state = "already_mapped"
            elif any(side["source_observations"].values()):
                state = "outline_available_for_review"
            elif counts["generated_fallback"]:
                state = "generated_fallback"
            else:
                state = "no_assigned_building_or_outline"
            side["frontage_state"] = state
            frontage_states[state] += 1
    unassigned_total = Counter()
    for counts in unassigned.values():
        unassigned_total.update(counts)
    total = assigned + unassigned_total
    expected = len(new_packed) + len(new_mapped)
    if (
        len(features) != len(baseline["roads"])
        or len({feature["id"] for feature in features}) != len(features)
        or len({side["id"] for side in sides}) != 2 * len(features)
        or sum(total.values()) != expected
        or sum(sum(side["placement_counts"].values()) for side in sides) != sum(assigned.values())
    ):
        raise ValueError("Inventory did not account for every road, side and candidate placement")

    def complete(counts):
        return {kind: counts.get(kind, 0) for kind in PLACEMENT_KINDS}

    return {
        "type": "FeatureCollection",
        "properties": {
            "baseline_sha256": baseline_sha256,
            "candidate_sha256": candidate_sha256,
            "road_records_unchanged": True,
            "existing_mapped_rows_unchanged": True,
            "packed_non_geometric_attributes_unchanged": True,
            "road_records": len(features),
            "road_length_m": math.fsum(feature["properties"]["length_m"] for feature in features),
            "side_records": len(sides),
            "excluded_road_records": len(excluded_roads),
            "excluded_road_length_m": math.fsum(feature["properties"]["length_m"] for feature in excluded_roads),
            "eligible_side_records": len(eligible_sides),
            **({"eligible_frontage_states": dict(frontage_states)} if source_centres is not None else {}),
            "eligible_sides_with_applied_source_footprints": sum(
                any(count and kind.startswith("source_footprint_") for kind, count in side["placement_counts"].items())
                for side in eligible_sides
            ),
            "baseline_packed_slots": len(base_packed),
            "candidate_packed_slots": len(new_packed),
            "candidate_placement_counts": complete(total),
            "frontage_assigned_counts": complete(assigned),
            "excluded_catchment_counts": complete(excluded),
            "changed_original_slots_in_excluded_frontage_catchments": protected_base_slots_changed,
            "unassigned_counts": {reason: complete(unassigned[reason])
                                  for reason in ("outside_catchment", "centreline_ambiguous")},
            "method": {
                "side_direction": "Left and right follow the listed order of each road's LineString.",
                "length": "Sum of planar lengths of the original Explore model-centreline segments in metres.",
                "frontage": "One nearest eligible centreline segment per footprint centre, with a modest path penalty and deterministic tie-breaking.",
                "vehicle_catchment_m": VEHICLE_RADIUS,
                "path_catchment_m": PATH_RADIUS,
                "path_distance_penalty_m": PATH_DISTANCE_PENALTY,
                "centreline_epsilon_m": CENTRELINE_EPSILON,
                "source_footprint": "Packed slots whose geometry changed, appended packed slots and appended mapped rows under the importer contract. These are footprint-supported approximations, with no claim about photographs, facade verification or visible coverage after host clear masks.",
                "exclusions": "Road-name markers with approximate frontage catchments. The importer owns parcel-level exclusion masks.",
                "source_observations": "Provider counts are undeduplicated and include outlines that did not pass the placement checks. No assigned outline can also indicate open land, a setback or a nearest-road tie.",
            },
        },
        "features": features,
    }


def digest(content):
    return hashlib.sha256(content).hexdigest()


def build(baseline_path, candidate_path, output, report_path=None):
    output = output.resolve()
    for source in (baseline_path, candidate_path, report_path):
        if source is None:
            continue
        if output == source.resolve() or (output.exists() and os.path.samefile(output, source)):
            raise ValueError("Inventory output must be separate from its inputs")
    baseline_bytes, candidate_bytes = baseline_path.read_bytes(), candidate_path.read_bytes()
    baseline_sha256, candidate_sha256 = digest(baseline_bytes), digest(candidate_bytes)
    source_centres = None
    if report_path is not None:
        report = json.loads(report_path.read_bytes())
        if report["candidateSha256"] != candidate_sha256:
            raise ValueError("Placement report comes from a different candidate")
        source_centres = report["sourceCentres"]
    result = compile_inventory(json.loads(baseline_bytes), json.loads(candidate_bytes),
                               baseline_sha256, candidate_sha256, source_centres)
    output.parent.mkdir(parents=True, exist_ok=True)
    pending = None
    try:
        with tempfile.NamedTemporaryFile(mode="w", encoding="utf-8", newline="\n", dir=output.parent,
                                         prefix=output.name + ".", suffix=".tmp", delete=False) as handle:
            pending = Path(handle.name)
            json.dump(result, handle, ensure_ascii=False, allow_nan=False, indent=2)
            handle.write("\n")
        if baseline_path.read_bytes() != baseline_bytes or candidate_path.read_bytes() != candidate_bytes:
            raise ValueError("An input town asset changed during inventory generation")
        pending.replace(output)
    finally:
        if pending is not None and pending.exists():
            pending.unlink()
    return result["properties"]


def main():
    cli = argparse.ArgumentParser(description=__doc__)
    cli.add_argument("baseline", type=Path, help="unchanged Explore town.json")
    cli.add_argument("candidate", type=Path, help="town.json exported by the footprint importer")
    cli.add_argument("output", type=Path, help="destination for the GeoJSON coverage inventory")
    cli.add_argument("--placements", type=Path, help="matching placement report for source-availability counts")
    args = cli.parse_args()
    try:
        readings = build(args.baseline, args.candidate, args.output, args.placements)
    except (OSError, ValueError, KeyError, TypeError) as error:
        cli.exit(1, f"Inventory failed: {error}\n")
    print(f"Inventoried {readings['road_records']} roads and {readings['side_records']} street sides in {args.output}")


if __name__ == "__main__":
    main()
