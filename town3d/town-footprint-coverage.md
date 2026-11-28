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

## Ullathornes Road access dwelling

One existing detached home on lot 2 PS520456 is now represented off Ullathornes Road. The [existing-conditions survey](https://hdp-au-prod-app-bass-engage-files.s3.ap-southeast-2.amazonaws.com/8417/5938/5866/Appendix_A1_-_Existing_Conditions_-_With_Buildings.pdf) and the [2026 public planning report](https://hdp-au-prod-app-bass-engage-files.s3.ap-southeast-2.amazonaws.com/8617/5938/5807/Planning_Report.pdf) corroborate the dwelling on the lot. The outline comes from [Microsoft's November 2026 release](https://github.com/microsoft/GlobalMLBuildingFootprints), `microsoft-311223133-7812012c7a4750ae`. [Vicmap Features of Interest](https://services-ap1.arcgis.com/P744lA0wf4LlBZ84/arcgis/rest/services/Vicmap_Features_of_Interest/FeatureServer/6) building point PFI `1260790` lies inside the outline and Vicmap Parcel PFI `123366884` contains it. © State of Victoria, CC BY 4.0. The existing one-storey residential renderer supplies approximate materials and roof form.

Two procedural trunks inside the house are hidden using the existing clearance control. This leaves the packed tree indices, the service access and the future subdivision layout outside the change.

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

## Chelsea Square house and shed

The Vicmap address point for 12 Chelsea Square links directly to parcel PFI 52557406, Lot 63 PS331050. Vicmap Address and Vicmap Property are © State of Victoria, CC BY 4.0. The [selling agent's October 2024 listing](https://www.realestate.com.au/sold/property-house-vic-inverloch-146258816) describes a dwelling and substantial shedding served by side access. The two [Microsoft roof outlines](https://github.com/microsoft/GlobalMLBuildingFootprints) from the November 2026 snapshot define their placement. The main house uses `microsoft-311223133-166eb29fd182cec2` and the detached shed uses `microsoft-311223133-066e716fa6ec442b`. The [property record](https://www.realestate.com.au/property/12-chelsea-sq-inverloch-vic-3996/) supplies the one-storey count. The native roof profile and walls approximate the roof-outline evidence. Exact door and driveway locations remain unverified.

The existing centre masks suppress generated house slot 1937 and the single procedural trunk within the sourced main roof. Shed slot 1938 retains its appearance settings. A local 121.25 m terrain detail replaces the old pads and ground shadow using the recovered painter, with pixel changes kept within the lot. The current detail stream loads one variant nearby, 4,486 bytes standard or 1,358 bytes low resolution.

This change shares the `town.json` and `detail.json` manifests with other Inverloch footprint edits. When combining independent patches, retain both sets of new records and regenerate each wrapper's tokens from the first eight hexadecimal digits of the SHA-256 of each final file. The exact standalone `town.json` SHA-256 is `c64811345498f5c0bd63ec65aeaab38c24e7cb073c7537a7dacdcceef1d73c1a` and `detail.json` SHA-256 is `efacfe60d78b7539b1de7f07bd3da6a5f3058e7d69529a2c7772ed5b244078a2`.

## Broadbeach Inverloch Health Club

The [operator](https://www.inverlochhealthclub.com.au/contact) identifies the club at 5 Lindsey Close. The [August 2023 Broadbeach Design Guidelines](https://static1.squarespace.com/static/67ad262158155458e2511938/t/67b7d2cf204bd662b2aeacdd/1740100389523/Broadbeach%2BDesigm%2BGuidelines%2BAugust%2B2023.pdf#page=11) show the existing gym and restaurant adjoining the pool, shared access and tennis court. The approved address entrance (Vicmap UFI 868731600) is at the west roof edge. The 1,363 m² outline uses Microsoft detection `microsoft-311223133-cda4d690c92bb510` from the November 2026 snapshot. Vicmap Features of Interest building PFI 1206751 covers 91% of that outline, and active Vicmap Property parcel PFI 459456009 contains it. Vicmap data © State of Victoria, CC BY 4.0. The native commercial shell approximates the building massing.

Centre masks suppress three generated shells and six seeded trees at the footprint. The recovered painter removes the three obsolete slabs and their contact shadows in one local terrain detail. The edit preserves the existing driveway paint and confines colour changes to the parcel outside the mapped access surfaces. One variant streams nearby, 6,000 bytes in full resolution or 1,864 bytes in low resolution.

## Inverloch Coast Care Community exterior

The one-storey building at 119 Cashin Street uses Microsoft outline `microsoft-311223133-809760cf5a0b4feb` from the November 2026 snapshot. Vicmap Features of Interest building PFI `967352` corroborates 5,222.72 m² of the outline. The operator shows a low brick exterior with green roof forms and an open-sided covered arrival area. The native shell uses a solid exterior ring and a flat parapet. The arrival corridor is open to the sky, and the native roof spans the internal courtyards. [Microsoft Global ML Building Footprints](https://github.com/microsoft/GlobalMLBuildingFootprints) · [Vicmap Features of Interest, CC BY 4.0](https://discover.data.vic.gov.au/en_AU/dataset/vicmap-features-building-polygon) · [Opal HealthCare's public exterior imagery](https://www.opalhealthcare.com.au/residential-aged-care/inverloch-coast)

The 6,116.96 m² mapped row adds coverage on side `inverloch-road-52541e43900eefa82ede-left`. Clipping and decimetre packing leave at least 1.125 m between the shell and the existing driveway surface. The existing driveway surface and its two-way route stay clear. The approximate floor meets the arrival grade, with up to about 2 m of terrain variation across the rest of the footprint. Twenty-two 0.16 m masks hide only procedural trunks inside both source outlines and preserve their seeded indices. [Mapped driveway](https://www.openstreetmap.org/way/563756116)
