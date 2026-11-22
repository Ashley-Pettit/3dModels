"""Which Moorooka houses stand in the ground, worst first, and where each one's drive meets it.

A house is sunk by how far the ground along its walls stands above its lowest floor with windows, worked out the way the model draws it
(moorooka-model.js $_: the floor is the ground at the building's middle; a house 4.4 to 6.6 m to the eave is high-set, its floor 2.75 m
under the eave). Houses already in MOO_SET, anything with a MOO_STYLE entry, sheds (under 60 m2) and big blocks (over 420 m2) are left out.
Houses inside Moorooka come first.

  python3 pick_sunk.py <repo> <how many> <out.json> [--min 0.5]
Writes [{i, x, z, sunk, drive: [x, z] or null, box: [x0, z0, x1, z1], inside}], and prints how many are left.
"""
import sys, json, base64, re, math, functools
import numpy as np
from PIL import Image
repo, want, out = sys.argv[1], int(sys.argv[2]), sys.argv[3]
MIN = float(sys.argv[sys.argv.index('--min') + 1]) if '--min' in sys.argv else 0.5
T = json.load(open(f'{repo}/town3d/moorooka/town.json')); META = T['meta']
im = np.asarray(Image.open(f'{repo}/town3d/moorooka/height.png')).astype(np.int32)
H = ((im[:, :, 0] << 8) | im[:, :, 1]) / META['heightScale'] - META['heightOffset']
NZ, NX = H.shape; SX, SZ = META['size']; CX, CZ = SX / NX, SZ / NZ; XMIN, ZMIN = -SX / 2 + CX / 2, -SZ / 2 + CZ / 2
def y_at(x, z):
    n = min(max((x - XMIN) / CX, 0), NX - 1.0001); s = min(max((z - ZMIN) / CZ, 0), NZ - 1.0001); r, a = int(n), int(s); o, l = n - r, s - a
    h, f, u, d = H[a, r], H[a, r + 1], H[a + 1, r], H[a + 1, r + 1]
    return h + (f - h) * o + (u - h) * l if o + l <= 1 else d + (u - d) * (1 - o) + (f - d) * (1 - l)
# the ground plan: 0 lawn, 1 asphalt, 2 concrete
SD = f'{repo}/town3d/moorooka/surface'; GRID = json.load(open(f'{SD}/index.json'))['grid']; BX, BZ = SX / GRID, SZ / GRID
@functools.lru_cache(maxsize=48)
def block(r, c):
    try: return np.asarray(Image.open(f'{SD}/{r}_{c}.webp').convert('RGB'))
    except FileNotFoundError: return None
def kind(x, z):
    c = int((x + SX / 2) / BX); r = int((z + SZ / 2) / BZ)
    if not (0 <= c < GRID and 0 <= r < GRID): return -1
    b = block(r, c)
    if b is None: return -1
    n = b.shape[0]; v = b[min(n - 1, int(((z + SZ / 2) - r * BZ) / BZ * n)), min(n - 1, int(((x + SX / 2) - c * BX) / BX * n))]; k = int(np.argmax(v))
    return k if v[k] > 128 else -1
paved = lambda x, z: kind(x, z) in (1, 2)
# road points, for which way is the street
RP = np.array([q for r in T['roads'] if r[0] <= 5 for q in np.array(r[5], float).reshape(-1, 2) / 10])
app = open(f'{repo}/app.html', encoding='utf-8').read()
def table(name):
    i = app.index(f'  const {name} = ['); return app[i:app.index('\n  ];', i)]
styled = [tuple(map(float, m)) for m in re.findall(r'\{ at: \[(-?[\d.]+), (-?[\d.]+)\]', table('MOO_STYLE'))]
done = [tuple(map(float, m)) for m in re.findall(r'\[(-?[\d.]+), ?(-?[\d.]+)', table('MOO_SET'))] if '  const MOO_SET = [' in app else []
near = lambda L, x, z, d: any(abs(a - x) < d and abs(b - z) < d for a, b in L)
b = np.frombuffer(base64.b64decode(T['buildings']), dtype='<i2'); i = 0; idx = 0; rows = []
while i < len(b):
    n = int(b[i]); p = (b[i + 7:i + 7 + 2 * n] / 10.0).reshape(-1, 2); fl = int(b[i + 6]); eave = b[i + 1] / 10; i += 7 + 2 * n; idx += 1
    if fl & 3: continue
    M = sum(q[0] for q in p) / n; P = sum(q[1] for q in p) / n   # (added up in order, as the model does)
    area = abs(sum(p[k][0] * p[(k + 1) % n][1] - p[(k + 1) % n][0] * p[k][1] for k in range(n))) / 2
    if not 60 <= area <= 420 or near(styled, M, P, 0.6) or near(done, M, P, 0.5): continue
    ys = [y_at(x, z) for x, z in p]; d, m = min(ys), max(ys); g = min(m, max(d, y_at(M, P))) + .1
    hi = max(ys + [y_at(*((p[k] + p[(k + 1) % n]) / 2)) for k in range(n)])
    S = max(eave, g + 2.4, m + 1.5) - g; F = S - 2.75 if 4.4 <= S < 6.6 else 0; sunk = hi - g - F
    if sunk < MIN: continue
    rows.append(dict(i=idx - 1, x=round(M, 2), z=round(P, 2), sunk=round(sunk, 2), inside=bool(fl & 4), p=p))
rows.sort(key=lambda r: (not r['inside'], -r['sunk']))
print(len(rows), 'houses sunk', MIN, 'm or more and not yet rebuilt;', sum(r['inside'] for r in rows), 'inside Moorooka')
picks = rows[:want]
for r in picks:
    p = r.pop('p'); n = len(p); M, P = r['x'], r['z']; best = None
    for k in range(n):
        a, c = p[k], p[(k + 1) % n]; L = math.hypot(*(c - a))
        if L < 3.4: continue
        ux, uz = (c - a) / L; nx, nz = -uz, ux
        if nx * ((a[0] + c[0]) / 2 - M) + nz * ((a[1] + c[1]) / 2 - P) < 0: nx, nz = -nx, -nz
        t = 0.25; run = None; runs = []
        while t < L:
            if paved(a[0] + ux * t + nx * .9, a[1] + uz * t + nz * .9): run = [t, t] if run is None else [run[0], t]
            elif run: runs.append(run); run = None
            t += .5
        if run: runs.append(run)
        for t0, t1 in runs:
            if not 2.0 <= t1 - t0 <= 7: continue
            tm = (t0 + t1) / 2; hx, hz = a[0] + ux * tm, a[1] + uz * tm
            if not all(paved(hx + nx * o, hz + nz * o) for o in (2.5, 4.5)): continue
            dr = float(np.min(np.hypot(RP[:, 0] - (hx + nx * 4), RP[:, 1] - (hz + nz * 4))))
            if best is None or dr < best[0]: best = (dr, round(hx, 1), round(hz, 1))
    r['drive'] = [best[1], best[2]] if best else None
    r['box'] = [round(float(v), 1) for v in (p[:, 0].min(), p[:, 1].min(), p[:, 0].max(), p[:, 1].max())]
json.dump(picks, open(out, 'w')); print('picked', len(picks), '; with a drive at the house:', sum(1 for r in picks if r['drive']), '; sunk', picks[0]['sunk'], 'to', picks[-1]['sunk'])
