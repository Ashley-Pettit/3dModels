"""Where a business's sign goes: the wall of its building that faces its street (22 November 2026). numpy only: tools/ground/shops.py
does the same from the lot survey with shapely, for when that can be installed.

  python3 shop_wall.py /path/to/town.json LAT LON "Street Name" [--wall K]

The building is the one the point (the business's place on Google Maps) is in, or else the nearest within 30 m. Its wall is the
edge that faces the street squarely (0.6 or better), is 3 m or longer and is nearest the street, long walls favoured (--wall K picks
the Kth best instead). Prints what a MOO_FRONTS "sign" needs: a and b the wall's ends, left to right as you face it; n the way it
faces; kerb and across, how far the near and far kerbs are; eave, the building's eave height (m AHD).
"""
import sys, json, base64, math
import numpy as np
argv = sys.argv[1:]; pick = int(argv[argv.index('--wall') + 1]) if '--wall' in argv else 0
T = json.load(open(argv[0])); la, lo, street = float(argv[1]), float(argv[2]), argv[3]
o, mpd = T['meta']['origin'], T['meta']['metresPerDegree']; px, pz = (lo - o[0]) * mpd[0], -(la - o[1]) * mpd[1]
bb = np.frombuffer(base64.b64decode(T['buildings']), np.int16).astype(np.int64); blds = []; i = 0
while i < len(bb):
    k = int(bb[i]); hdr = bb[i:i + 7]; p = bb[i + 7:i + 7 + 2 * k].reshape(-1, 2) / 10; i += 7 + 2 * k
    if k >= 3: blds.append((p, hdr[1] / 10, hdr[2] / 10))
def inside(P, x, z):
    c = False
    for a, b in zip(P, np.roll(P, -1, axis=0)):
        if (a[1] > z) != (b[1] > z) and x < (b[0] - a[0]) * (z - a[1]) / (b[1] - a[1]) + a[0]: c = not c
    return c
def seg_d(q, a, b):
    d = b - a; t = np.clip(((q - a) @ d) / (d @ d + 1e-9), 0, 1); c = a + d * t; return float(np.hypot(*(q - c))), c
def area(P): return abs(sum(a[0] * b[1] - b[0] * a[1] for a, b in zip(P, np.roll(P, -1, axis=0)))) / 2
q = np.array([px, pz]); best = None
for P, eave, ridge in blds:
    if abs(P[:, 0].mean() - px) > 80 or abs(P[:, 1].mean() - pz) > 80 or area(P) < 40: continue
    d = 0.0 if inside(P, px, pz) else min(seg_d(q, a, b)[0] for a, b in zip(P, np.roll(P, -1, axis=0)))
    if d < 30 and (best is None or d < best[0]): best = (d, P, eave, ridge)
if best is None: sys.exit('no building within 30 m of %.1f, %.1f' % (px, pz))
d0, P, eave, ridge = best
roads = [(np.array(r[5], float).reshape(-1, 2) / 10, r[3] / 10) for r in T['roads'] if T['names'][r[4]] == street and r[0] <= 5]
def street_near(m):
    out = (1e9, None, 0)
    for p, w in roads:
        for a, b in zip(p[:-1], p[1:]):
            d, c = seg_d(m, a, b)
            if d < out[0]: out = (d, c, w)
    return out
walls = []
for a, c in zip(P, np.roll(P, -1, axis=0)):
    L = math.hypot(*(c - a))
    if L < 3: continue
    m = (a + c) / 2; n = np.array([-(c[1] - a[1]) / L, (c[0] - a[0]) / L])
    if inside(P, *(m + n * 0.3)): n = -n
    d, s, w = street_near(m)
    if s is None or d > 60: continue
    face = float((s - m) @ n) / max(d, 1e-6)
    if face < 0.6: continue
    walls.append((d - 0.3 * min(L, 20), a, c, n, d, w, L))
walls.sort(key=lambda v: v[0])
if not walls: sys.exit('no wall of that building faces %s' % street)
_, a, c, n, d, w, L = walls[min(pick, len(walls) - 1)]
if (c - a) @ np.array([n[1], -n[0]]) < 0: a, c = c, a           # left to right as you face it: a is on your left
print('point %.1f, %.1f; building %s, %.0f m2, eave %.1f, ridge %.1f; %d walls face the street' % (px, pz, 'holds it' if d0 == 0 else '%.1f m away' % d0, area(P), eave, ridge, len(walls)))
print('a: [%.1f, %.1f], b: [%.1f, %.1f], n: [%.4f, %.4f], kerb: %.1f, across: %.1f, eave: %.1f   (wall %.1f m long)' % (a[0], a[1], c[0], c[1], n[0], n[1], d - w / 2, d + w / 2, eave, L))
