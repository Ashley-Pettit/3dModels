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

Sizes are approximate (a concept, not drawings).
