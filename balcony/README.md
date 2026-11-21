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

What the survey shows: the north fence is only about 3.1 to 3.4 m from the house's north wall. The hexagon (4.6 m out) reached past
it, so (Ash: "the hex needs to not come out quite so far as that's my neighbours property") it is now stretched along the side
instead: a covered side deck 2.25 m out from the wall with 60 degree corners and a hipped roof (`SD`, `DECK` in `src/main.js`), long
enough that the French doors open straight onto it and the stairs start off its back edge. It is still inside the usual 1.5 m side
boundary clearance, which the brief flags. At 2.25 m wide it fits a table for two in the corner, not a dining setting, if you are
to walk past.

Sizes are approximate (a concept, not drawings).
