"""Trees, parked cars, backyard things and fences off the stairs, pads and garage aprons of the houses set on their slope
(Ash, 22 November 2026: "Once done you'll need to fix any paths, fences, trees and cars so that they make sense inside the app").

The model says where each rebuilt house's landing, stairs and pads ("door") and the apron in front of its garage door ("gar") stand
(window.anSetRec, see set_on_slope.py): open Moorooka's Explore with
  window.__rec = []; window.anSetRec = (M, p, kind, q) => __rec.push([M, p, kind, q]);
set before the model loads, and save __rec as rec.json. Then:
  python3 clear_fronts.py <town.json> <yards.bin> <surface dir> <rec.json> [--write]
- a tree on the stairs or a pad (within 1 m), or on a garage apron, moves to the nearest lawn within 4 m that is clear of buildings,
  paving, other trees and every stairs and apron; with none, it goes;
- a parked car on the stairs or a pad goes (one on a garage apron stays: that is where it would be);
- a backyard thing (not a pool) on the stairs, a pad or an apron goes;
- a fence run through the stairs or a pad goes.
The paths themselves need nothing: each house's pad is drawn from the foot of its stairs back to where its path meets the house.
"""
import sys, json, base64, math, functools
import numpy as np
from PIL import Image
town_fn, yards_fn, SD, rec_fn = sys.argv[1:5]; WRITE = '--write' in sys.argv
T = json.load(open(town_fn)); SX, SZ = T['meta']['size']
SEP = (', ', ': ') if '": ' in open(town_fn).read(400) else (',', ':')   # (written back the way it was)
rec = [r for r in json.load(open(rec_fn)) if r[2] in ('door', 'gar')]
class Rect:
    def __init__(s, q, kind):
        s.kind = kind; s.o = np.array(q[0:2]); a = np.array(q[2:4]) - s.o; b = np.array(q[6:8]) - s.o
        s.w = float(np.hypot(*a)); s.d = float(np.hypot(*b)); s.u = a / (s.w or 1); s.v = b / (s.d or 1); s.c = s.o + a / 2 + b / 2; s.r = math.hypot(s.w, s.d) / 2
    def has(s, x, z, m=0.0):
        if abs(x - s.c[0]) > s.r + m or abs(z - s.c[1]) > s.r + m: return False
        p = np.array([x, z]) - s.o; a = float(p @ s.u); b = float(p @ s.v)
        return -m <= a <= s.w + m and -m <= b <= s.d + m
R = [Rect(q, k) for _, _, k, q in rec]
cells = {}
for r in R:
    for cx in range(int((r.c[0] - r.r - 2) // 16), int((r.c[0] + r.r + 2) // 16) + 1):
        for cz in range(int((r.c[1] - r.r - 2) // 16), int((r.c[1] + r.r + 2) // 16) + 1): cells.setdefault((cx, cz), []).append(r)
def hit(x, z, md=0.0, mg=0.0, kinds=('door', 'gar')):
    for r in cells.get((int(x // 16), int(z // 16)), ()):
        if r.kind in kinds and r.has(x, z, md if r.kind == 'door' else mg): return r
    return None
GRID = json.load(open(f'{SD}/index.json'))['grid']; BX, BZ = SX / GRID, SZ / GRID
@functools.lru_cache(maxsize=48)
def block(r, c):
    try: return np.asarray(Image.open(f'{SD}/{r}_{c}.webp').convert('RGB'))
    except FileNotFoundError: return None
def lawn(x, z):
    c = int((x + SX / 2) / BX); r = int((z + SZ / 2) / BZ)
    if not (0 <= c < GRID and 0 <= r < GRID): return False
    b = block(r, c)
    if b is None: return False
    n = b.shape[0]; v = b[min(n - 1, int(((z + SZ / 2) - r * BZ) / BZ * n)), min(n - 1, int(((x + SX / 2) - c * BX) / BX * n))]
    return int(np.argmax(v)) == 0 and v[0] > 128 + 40      # lawn, and half a metre inside it
# buildings near the rebuilt houses, as outlines
bb = np.frombuffer(base64.b64decode(T['buildings']), '<i2'); i = 0; polys = {}
while i < len(bb):
    n = int(bb[i]); p = (bb[i + 7:i + 7 + 2 * n] / 10.0).reshape(-1, 2); i += 7 + 2 * n; c = p.mean(0)
    if (int(c[0] // 16), int(c[1] // 16)) in cells or any((int(c[0] // 16) + a, int(c[1] // 16) + b) in cells for a in (-1, 0, 1) for b in (-1, 0, 1)):
        polys.setdefault((int(c[0] // 32), int(c[1] // 32)), []).append(p)
def near_building(x, z, m=1.2):
    for a in (-1, 0, 1):
        for b in (-1, 0, 1):
            for p in polys.get((int(x // 32) + a, int(z // 32) + b), ()):
                if x < p[:, 0].min() - m or x > p[:, 0].max() + m or z < p[:, 1].min() - m or z > p[:, 1].max() + m: continue
                ins = False; n = len(p)
                for k in range(n):
                    (x0, z0), (x1, z1) = p[k], p[(k + 1) % n]
                    if (z0 > z) != (z1 > z) and x < x0 + (z - z0) * (x1 - x0) / (z1 - z0): ins = not ins
                    dx, dz = x1 - x0, z1 - z0; t = max(0, min(1, ((x - x0) * dx + (z - z0) * dz) / (dx * dx + dz * dz or 1)))
                    if math.hypot(x - x0 - dx * t, z - z0 - dz * t) < m: return True
                if ins: return True
    return False
# trees
tr = np.frombuffer(base64.b64decode(T['trees']), '<i2').reshape(-1, 3).copy(); tg = {}
for k, (x, z, _) in enumerate(tr): tg.setdefault((int(x / 4 // 4), int(z / 4 // 4)), []).append(k)
def tree_near(x, z, me, m=1.6):
    for a in (-1, 0, 1):
        for b in (-1, 0, 1):
            for k in tg.get((int(x // 4) + a, int(z // 4) + b), ()):
                if k != me and keep[k] and math.hypot(tr[k][0] / 4 - x, tr[k][1] / 4 - z) < m: return True
    return False
keep = np.ones(len(tr), bool); moved = gone = 0
for k in range(len(tr)):
    x, z = tr[k][0] / 4, tr[k][1] / 4
    if not hit(x, z, 1.0, 0.2): continue
    best = None
    for rad in (1.5, 2, 2.5, 3, 3.5, 4):
        for a in range(16):
            px, pz = x + rad * math.cos(a * math.pi / 8), z + rad * math.sin(a * math.pi / 8)
            if lawn(px, pz) and not hit(px, pz, 1.2, 0.5) and not near_building(px, pz) and not tree_near(px, pz, k): best = (px, pz); break
        if best: break
    if best: tr[k][0], tr[k][1] = int(round(best[0] * 4)), int(round(best[1] * 4)); tg.setdefault((int(best[0] // 4), int(best[1] // 4)), []).append(k); moved += 1
    else: keep[k] = False; gone += 1
# cars
cars = np.frombuffer(base64.b64decode(T['cars']), '<i2').reshape(-1, 4); ck = np.array([not hit(c[0] / 4, c[1] / 4, 1.2, 0, ('door',)) for c in cars])
# fences: [x0, z0, x1, z1] in decimetres; a run with any point on the stairs or a pad goes
fe = np.frombuffer(base64.b64decode(T['fences']), '<i2').reshape(-1, 4)
def fence_hit(f):
    x0, z0, x1, z1 = f / 10.0; n = max(1, int(math.hypot(x1 - x0, z1 - z0) / 0.4))
    return any(hit(x0 + (x1 - x0) * j / n, z0 + (z1 - z0) * j / n, 0.1, 0, ('door',)) for j in range(n + 1))
fk = np.array([not fence_hit(f) for f in fe])
# backyard things
ya = np.fromfile(yards_fn, '<i2').reshape(-1, 6); yk = np.array([y[0] in (1, 2) or not hit(y[1] / 10, y[2] / 10, 0.6, 0.2) for y in ya])
print(f'{len(R)} stairs, pads and aprons on {len(set((r[0], r[1]) for r in rec))} houses: trees moved {moved}, trees gone {gone}, cars gone {int((~ck).sum())}, '
      f'fence runs gone {int((~fk).sum())}, backyard things gone {int((~yk).sum())}')
if WRITE:
    T['trees'] = base64.b64encode(tr[keep].astype('<i2').tobytes()).decode(); T['cars'] = base64.b64encode(cars[ck].astype('<i2').tobytes()).decode()
    T['fences'] = base64.b64encode(fe[fk].astype('<i2').tobytes()).decode()
    T['counts']['trees'] = int(keep.sum()); T['counts']['cars'] = int(ck.sum())
    json.dump(T, open(town_fn, 'w'), separators=SEP); ya[yk].astype('<i2').tofile(yards_fn); print('written')
