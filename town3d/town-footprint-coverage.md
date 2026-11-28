# Inverloch building-footprint coverage

The footprint pass uses mapped roof outlines for the existing Explore model, whose WGS84 bounds are `[145.684, -38.668, 145.776, -38.606]`. The A’Beckett Street and Norman Road corridors and their authored scenes are excluded. The pass preserves 181 protected packed buildings, all 311 original mapped buildings and the order and style fields of the original packed entries.

| Placement | Count |
| --- | ---: |
| Existing procedural envelopes fitted to an outline | 481 |
| New envelopes where a distinct building was missing | 548 |
| Total packed envelopes after the pass | 6,260 |

All added or revised shells use the existing packed geometry and renderer. The importer fits rectangular envelopes, preserves local building orientation where possible and rejects conflicts with roads, mapped buildings, trees, protected areas and neighbouring shells. An existing house moves only if the source overlap or surveyed parcel supports the match and the new shape still covers most of its old ground pad. Heights from the source are estimates. Roof style, materials and facades still use the existing procedural approximation.

## Sources

| Input | Snapshot and licence |
| --- | --- |
| [Microsoft Global ML Building Footprints](https://github.com/microsoft/GlobalMLBuildingFootprints) | 5,067 machine-derived outlines from the [12 November 2026 Australia release, quadkey 311223133](https://bfppub.z5.web.core.windows.net/2026-11-12/global-buildings.geojsonl/RegionName=Australia/quadkey=311223133/part-00193-4b4e6876-7466-49a9-940f-834dab87ccde.c000.csv.gz). The licensing terms are in the [CDLA-Permissive-2.0 agreement](https://cdla.dev/permissive-2-0/). Local aerial capture dates are unknown. |
| [OpenStreetMap](https://www.openstreetmap.org/copyright) | 313 polygon and multipolygon outlines from the 28 November 2026 04:03 UTC Overpass snapshot, © OpenStreetMap contributors, ODbL. Prefer the mapped outline where it passes the placement checks. |
| [Vicmap Property Parcel](https://discover.data.vic.gov.au/en_AU/dataset/vicmap-property-parcel-polygon-with-parcel-detail) | Qualifying active lot polygons from the 28 November 2026 retrieval. The layer revision was 16 November 2026. © State of Victoria, CC BY 4.0. Parcel boundaries support matches without providing a building outline or a frontage appearance. |

Source datasets, the placement report and the map inventory are offline authoring inputs or outputs. The Explore download only changes the existing `town.json` request. At the measured gzip setting this file grows from 366,678 to 374,250 bytes (+7,572).

## Bayview Avenue school frontage

Two one-storey volumes at Inverloch Primary School, 17 Bayview Avenue, fill the missing street-facing frontage. The two [Microsoft outlines](https://github.com/microsoft/GlobalMLBuildingFootprints) are `microsoft-311223133-27ebed64238c5e58` and `microsoft-311223133-2f5bf9bdd90a9947` from the November 2026 data release. Their edges are supported by the [Vicmap Features of Interest building polygon](https://discover.data.vic.gov.au/en_AU/dataset/vicmap-features-building-polygon) PFI `964962`, © State of Victoria, CC BY 4.0. The feature version in that layer was recorded in November 2025. The [school's 2024 event map](https://inverlochps.vic.edu.au/wp-content/uploads/2024/03/2024-03-12-Fete-Site-Map-PUBLIC-VERSION.pdf) and [VicRoads photograph from January 2014](https://www.mapillary.com/app/?pKey=183516683641439) identify the low frontage. The roof heights and materials use the existing renderer's one-storey approximation.

Eleven seeded tree trunks inside the two new footprints are hidden by the existing Explore clearance controls. Tree slots, the gap between the roofs, nearby roads, and the two excluded streets are preserved. No reference image ships with the model.

## Inventory and reproduction

The inventory assigns each footprint centre to its nearest suitable model road or path. The 881 original road/path records contain 1,762 sides, of which six are excluded. The eligible sides include 378 with a new or refitted outline, 90 with original mapped footprints, 289 with a source outline to review, 129 with generated buildings and no nearby source outline, and 870 with no assigned building or outline. Some latter records are paths or open land. These counts describe proximity to a model centreline. Street-level confirmation of building appearance, land use and every access remains separate.

Use Python with Shapely 2.x for placement. Retain the original `town.json` at `a4efe3872765158fa6d89b4602f469de5c065a50` and supply the source layers as WGS84 GeoJSON. The Microsoft input may include a `heightEstimateM` property. The parcel input needs active lot status and a flag indicating road polygons. The inventory script itself only uses the Python standard library.

```sh
python tools/streetscapes/place_inverloch_buildings.py baseline.json candidate.json --osm osm.geojson --microsoft microsoft.geojson --parcels parcels.geojson --report placements.json
python tools/streetscapes/coverage_inventory.py baseline.json candidate.json coverage.geojson --placements placements.json
```

The placement report records source identifiers, accepted slots and reasons for rejected proposals. The coverage GeoJSON preserves both sides of every original road and checks that the map projection, original road data, original mapped buildings and original packed style fields stayed intact.

## Optional tree relocation pass

Reproduce the second pass from the same original baseline and the three source snapshots above by adding `--relocate-blocking-trees` to the placement command. The importer completes the first pass before reconsidering tree-blocked outlines. It moves only a single packed, procedurally seeded trunk per accepted outline, with a margin inside both the source outline and the fitted shell. The new trunk needs a clear position within six metres on the same unambiguous active Vicmap parcel. Building and road offsets, neighbouring trunks and the two protected corridors constrain the destination. The report records each original and revised position and the reason when a move is declined.

This pass retains the 1,029 accepted first-pass placements and moves 67 of the 46,704 packed trunks while retaining their indices, species and heights. It adds 21 refits and 46 new envelopes. The resulting packed map has 6,306 envelopes and measures 374,829 bytes at gzip level 6, 579 bytes above the first-pass map. The tree slots come from the procedural vegetation generator in the canonical Inverloch source. The relocated positions are model adjustments guided by the sourced building outlines and parcel boundaries.

## Four refits with local ground detail

Ripple Drive (slot 2262), High Street (1461), Toorak Road (258) and Abbott Street (3600) use revised outlines from the same Microsoft snapshot. The High Street refit meets the original driveway, and the other three have no original driveway endpoint linked to their slabs. The original driveway positions and full-precision pads can be reproduced from the [first Inverloch painter](https://github.com/Ashley-Pettit/ai-forge/tree/edf393c01c49317a284c5d0df04bbb5d8a6607c0/scripts/inverloch), the OSM snapshot from 11 November 2026 at 06:30 UTC and the two elevation layer requests in its download script.

To reproduce the crops, keep every original driveway and substitute the four current packed outlines in the painter's slab pass. Apply the resulting RGB differences over the decoded base textures. The eight lossless WebP files include full and low-resolution variants, with 15,428 bytes of full crops and 4,548 bytes of low crops. They use the existing two-slot detail stream and its 25 m edge blend, with a single extra crop at each sampled site. At distant aerial heights the base atlas supplies the ground. The local High Street check confirmed the prior occupied point cleared, the refitted point gained collision, and the original A’Beckett and Norman detail remained available.

## Mountain Ash Close vacant lots

Ray White Inverloch listed [1](https://raywhiteinverloch.com.au/properties/residential-for-sale/vic/inverloch-3996/land/3044762), [12](https://raywhiteinverloch.com.au/properties/residential-for-sale/vic/inverloch-3996/land/3317560), [16](https://raywhiteinverloch.com.au/properties/residential-for-sale/vic/inverloch-3996/land/2939788) and [17 Mountain Ash Close](https://raywhiteinverloch.com.au/properties/residential-for-sale/vic/inverloch-3996/land/3317562) as build-ready land when checked on 28 November 2026. Their linked property price statements were prepared on 1 October 2026. The [Vicmap Address](https://discover.data.vic.gov.au/en_AU/dataset/vicmap-address-address-point) points match four active [Vicmap Property](https://discover.data.vic.gov.au/en_AU/dataset/vicmap-property-parcel-polygon-with-parcel-detail) parcels, with PFIs 451967110, 451967101, 451967099 and 451967094 respectively. © State of Victoria, CC BY 4.0. Each parcel fully contains one selected unchanged procedural shell and has no intersecting source footprint of 4 m² or more in the town's outline sources.

Both Explore hosts use small centre masks to hide slots 4941, 5623, 5626 and 5628 and their collision blockers while retaining the packed indices. The original painter reproduced the colour change for the existing slabs and contact shadows, including the seeded driveways owned by the two removed shells at 12 and 16. The 13,116-byte full and 4,352-byte low-resolution crops group the four edits into one streamed detail area. The broad atlas supplies the ground beyond the detail stream's range.

## Indoor facilities at BIG4 Inverloch Holiday Park

Three missing building envelopes on the west side of the modeled Action Court service lane at 2 Cuttriss Street use the [operator's November 2026 park map](https://cdn.sanity.io/files/06scyj92/production/5c4e72ee117cdbda3ed2bef6424a52634ede85ca.pdf) for identification and the 23 February 2025 aerial for independent location checks. The pool and amenities/camp kitchen use the [Microsoft Global ML Building Footprints](https://github.com/microsoft/GlobalMLBuildingFootprints) outlines `microsoft-311223133-bc89fc9e4e43337a` and `microsoft-311223133-707125922151e271`. The splash building uses [four manually captured eaves points](../tools/streetscapes/ingenia-inverloch-splash-park-2025-02-23.geojson) from Esri/Vantor scene 6072276, 0.31 m image samples and 5 m reported positional accuracy. The attributed source vector records the [Esri digitizing terms](https://www.arcgis.com/sharing/rest/content/items/8e90a00a0a6845a49262e0b756f57a10/data) and stays outside the runtime build.

The native one-storey walls are inset from the eaves by approximately 0.55 m for the splash park and amenities, and 1.05 m for the pool to retain clearance to the neighbouring cabin. All three sit inside active Vicmap Property parcel PFI 135716645 (© State of Victoria, CC BY 4.0). The modeled service lane, cabins, trees and ground are retained. Roof styles, façades and entrances remain approximate.
