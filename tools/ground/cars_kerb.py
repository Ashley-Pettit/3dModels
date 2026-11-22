"""Parked cars that stand out in the traffic lane, moved in to the kerb (22 November 2026, a spot check).

  python3 cars_kerb.py /path/to/town.json [--write]

town.json's `cars` is base64 Int16: x, z (quarter metres), heading (tenths of a degree, 0 along +z), colour. A car on a street stands
about 1.1 m in from the street's edge (its width in `roads`, field 3, decimetres). One whose middle is more than 1.5 m in is in the
lane. It is moved square across to 1.1 m from the edge; if another car is within 5.4 m of that spot it is tried 6 and 12 m either way
along the street; if there is still no room it is left where it is. Only streets of class 0 to 4 count, and not the first or last 2% of a
street (the corners). Run twice, the second run finds nothing to do.
"""
import sys, json, base64, collections
import numpy as np
path = sys.argv[1]; write = '--write' in sys.argv
raw = open(path, encoding='utf-8').read(); T = json.loads(raw)
A = np.frombuffer(base64.b64decode(T['cars']), dtype='<i2').reshape(-1, 4).copy()
x, z = A[:, 0] / 4.0, A[:, 1] / 4.0
segs = []
for r in T['roads']:
    if r[0] > 4: continue
    p = np.array(r[5], float).reshape(-1, 2) / 10
    for a, b in zip(p[:-1], p[1:]): segs.append((a[0], a[1], b[0], b[1], r[3] / 10))
S = np.array(segs); CELL = 60; grid = collections.defaultdict(list)
for i, s in enumerate(S):
    for gx in range(int(min(s[0], s[2]) // CELL) - 1, int(max(s[0], s[2]) // CELL) + 2):
        for gz in range(int(min(s[1], s[3]) // CELL) - 1, int(max(s[1], s[3]) // CELL) + 2): grid[(gx, gz)].append(i)
def nearest(px, pz):
    ids = grid.get((int(px // CELL), int(pz // CELL)), [])
    if not ids: return None
    s = S[ids]; dx, dz = s[:, 2] - s[:, 0], s[:, 3] - s[:, 1]; L = np.hypot(dx, dz) + 1e-9
    t = np.clip(((px - s[:, 0]) * dx + (pz - s[:, 1]) * dz) / (L * L), 0, 1); qx, qz = s[:, 0] + dx * t, s[:, 1] + dz * t; d = np.hypot(px - qx, pz - qz); k = int(d.argmin())
    return d[k], s[k, 4], t[k], qx[k], qz[k], dx[k] / L[k], dz[k] / L[k]
IN, WANT, ROOM = 1.5, 1.1, 5.4
moved, gone = [], []
keep = np.ones(len(A), bool)
for i in range(len(A)):
    n = nearest(x[i], z[i])
    if not n: continue
    d, w, t, qx, qz, ux, uz = n
    if d > w / 2 + 0.5 or w / 2 - d <= IN or t < 0.02 or t > 0.98: continue
    ox, oz = (x[i] - qx) / max(d, 1e-6), (z[i] - qz) / max(d, 1e-6)          # out from the street's line, the side the car is on
    done = False
    for slide in (0, 6, -6, 12, -12):
        nx, nz = qx + ux * slide + ox * (w / 2 - WANT), qz + uz * slide + oz * (w / 2 - WANT)
        m = nearest(nx, nz)
        if not m or abs(m[1] / 2 - m[0] - WANT) > 0.35: continue               # (slid round a bend or onto another street: not there)
        others = np.hypot(x - nx, z - nz); others[i] = 99
        if (others[keep] < ROOM).any(): continue
        x[i], z[i] = nx, nz; A[i, 0], A[i, 1] = int(round(nx * 4)), int(round(nz * 4)); moved.append((i, round(float(w / 2 - d), 2), slide)); done = True; break
    if not done: gone.append(i)                                              # no room at the kerb: left where it is
print(len(A), 'cars;', len(moved), 'moved in to the kerb (', sum(1 for m in moved if m[2]), 'of them along the street too );', len(gone), 'left (no room at the kerb)')
if moved: print('  they stood', min(m[1] for m in moved), 'to', max(m[1] for m in moved), 'm in from the edge')
if write and moved:
    B = A[keep]; new = base64.b64encode(B.astype('<i2').tobytes()).decode()
    assert raw.count('"cars":"' + T['cars'] + '"') + raw.count('"cars": "' + T['cars'] + '"') == 1
    out = raw.replace(T['cars'], new, 1)
    open(path, 'w', encoding='utf-8').write(out); print('written')
