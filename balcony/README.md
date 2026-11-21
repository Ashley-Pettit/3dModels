# Balcony concept

A walk-through 3D model of a concept design for a new elevated balcony on a high-set Queenslander: a narrow open balcony across
the back, a hexagon-shaped covered deck on the right-hand rear corner, French doors (optional) on the side wall, and stairs at the
end of a short side walkway. Ash asked for it on 21 November 2026: "I want to be able to walk around the 3d model. Put it into my
other 3d models. I want to be able to walk up the stairs".

It is its own page at `/balcony/explore/` (with `/balcony/` sending you there) and a card on the 3D models picker. It shares nothing
with the towns' Explore in `app.html`: no sticks, no loading changes there.

| File | What it is |
| --- | --- |
| `src/main.js` | The source: the model (house, decks, hexagon roof, stairs, pool) and the walking (surfaces, collisions, stick, keys) |
| `explore/balcony.js` | `src/main.js` bundled with three.js, what the page loads |
| `explore/index.html` | The page. `build.py` puts the commit it was built from in place of `__COMMIT__` |
| `explore/explore-icon-*.png` | The picker card's picture and the home-screen icon |

To change the model: edit `src/main.js`, then in this folder `npm install` and `npm run build`, and commit `explore/balcony.js` with it.

How walking works: your eyes are 1.65 m above whatever you stand on. There are three kinds of surface: the ground, the decks (2.6 m
up) and the stairs (a ramp between them). Each step you take goes only to a surface within 0.5 m of where you are, so you can't step
off a deck except by the stairs, and you can walk under the decks but not into the low end of the stairs. Fences, the pool, posts
and stumps block you on the ground. The touch stick follows the towns' rules: passive listeners, each finger tracked by its own id.

## The neighbours (21 November 2026)

Ash: "Using the moorooka model at 6 Beaudesert add the neighbours". The five houses next to and behind number 6, the lots' fences, the
rear neighbour's pool and tank, the trees within 60 m and Beaudesert Road and Bohain Street come from `town3d/moorooka`: house outlines,
eave and ridge heights and roof colours from `town.json` (buildings), wall and trim colours and the lot fences from the number 6
properties in `moorooka-model.js` (the cadastre's lots), the pool and tank from `yards.bin`, heights above ground from `height.png`.
They are turned into this model's metres with number 6's lot as the frame: the real north wall lines up with x = 12 and the back
wall with z = 0 (the walk-through's house is 12 m wide; the survey's is 10.6 m, so its south side is about 1.4 m out). The numbers
sit in `NB` in `src/main.js`. The neighbours have no stairs (Ash: the Moorooka model's stairs on the house next to the balcony
aren't right) and their walls are a fixed height band, not modelled in detail. Fences and the houses stop you walking.

Where the north fence is: the survey data puts it about 3.1 m from the house's north wall, but Ash says it is 4.5 m (21 November
2026: "from the current house there is 4.5m before the fence. move the fence and their property away"). The model goes with Ash:
everything in `NB` beyond the fence line (the fence, the corner and rear-corner neighbours, their trees and tank, Bohain Street) is
moved out by `NB_DX` so the fence sits at x = 16.5 (`NORTH_FENCE` in `src/main.js`).

The hexagon (Ash: "then go back to the hex style"): a hexagon with its point outwards, 60 degree faces and a hip roof rising to a
short ridge, stretched along the side wall (`HEX`, `DECK` in `src/main.js`). It reaches 3.5 m out from the wall (eaves about 3.85 m,
about 0.65 m clear of the fence; Ash: "a tiny bit shorter, little bit back from neighbour"), and runs from the rear balcony back past the French doors, so they open straight onto it. A short landing behind
it leads to the stairs. It holds a round table for six with room to walk around it. It is inside the usual 1.5 to 2 m side boundary
clearance, which the brief flags.

## Two ways up (21 November 2026)

Ash: "now one more without those new stairs. Review the moorooka model to view the front of house stairs. Up those stairs is an
entrance way that should connect to this balcony. Make this a diff version so I can switch". The **Stairs** button on the page
switches between them, and `?access=front` opens the second one (the page keeps the choice in its address).

- **Stairs: side** (`accA` in `src/main.js`): the new stairs down the side, off a short landing behind the hexagon.
- **Stairs: front** (`accB`): no new stairs. You go up the house's own front stairs to the entrance landing, which is carried
  round the north-front corner into a 1.2 m walkway along the side wall to the hexagon, with the same glass balustrade.
- **The front of the house** (both versions) follows the Moorooka model's detailed builder for number 6 (`vu` in
  `town3d/moorooka/moorooka-model.js`): with the house facing Beaudesert Road, the entrance landing is at the north end of the
  front wall (0.15 to 1.85 m in from the north corner, 1.25 m deep) under a small porch roof on two posts, the front door is
  1 m in from the corner, and the stairs (1 m wide, 0.27 m goings) run down from the landing along the front wall towards the
  south. Two front windows with hoods at 48% and 80% of the way along, as the model has them. This is the model's standard
  layout for a high-set house, so it is worth checking against the real front.

Sizes are approximate (a concept, not drawings).
