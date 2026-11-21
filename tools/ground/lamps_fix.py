"""Street light poles off the footpaths, crossovers and paths (Ash, 20 November 2026: "Also light poles on paths").

The model places a pole every so far along each street, 1.4 m from the carriageway's edge (moorooka-model.js, patched:
`lampOff` moves it to the grass between the kerb and the footpath, or behind the footpath, from the footpath sides in
town.json). The ground's own paths don't always sit where town.json says (paths joined up, crossovers, paths carried round
corners), so this works from the ground itself: every pole, as the patched model places it (a list read out of the model
in a browser: x, y, z and heading per pole), that stands on concrete or within 0.35 m of it, or on the street, is moved to
the nearest spot along the kerb (up to 8 m either way) and across the verge (0.5 to 4.5 m from the carriageway) that is
clear of both, not in a building. Where there is none (a paved shopfront verge), it stands 0.6 m behind the kerb.
Writes the moves into town.json as `lampFix`, which the model reads: {"x,z" (where it would stand, decimetres, as the
model rounds them): [x, z]}.

  python3 lamps_fix.py <town.json> <surface dir> <spots.json> [--write]
"""
import json, math, sys
from collections import defaultdict
import base64
import numpy as np
from PIL import Image
from shapely.geometry import Point, Polygon

TOWN, SURF, SPOTS = sys.argv[1:4]
WRITE = '--write' in sys.argv
t = json.load(open(TOWN)); SX, SZ = t['meta']['size']
RES = 1024; TX, TZ = SX / 16, SZ / 16; MX, MZ = TX / RES, TZ / RES
OTHER, LAWN, ASPH, CONC = 0, 1, 2, 3
blk = {}


def kind(x, z):
    bc, br = int((x + SX / 2) / TX), int((z + SZ / 2) / TZ)
    if not (0 <= br < 16 and 0 <= bc < 16):
        return LAWN
    if (br, bc) not in blk:
        a = np.array(Image.open(f'{SURF}/{br}_{bc}.webp')).astype(np.int16)
        k = (a.argmax(2) + 1).astype(np.uint8); k[a.max(2) <= 128] = OTHER; blk[(br, bc)] = k
    r = int((z + SZ / 2 - br * TZ) / MZ); c = int((x + SX / 2 - bc * TX) / MX)
    return int(blk[(br, bc)][min(max(r, 0), RES - 1), min(max(c, 0), RES - 1)])


SEG = []
for r in t['roads']:
    if r[0] > 5 or r[2] & 2:                       # every road the model lights (bridges too), service roads and lanes
        continue
    p = np.array(r[5], float).reshape(-1, 2) / 10
    for q0, q1 in zip(p[:-1], p[1:]):
        SEG.append([q0[0], q0[1], q1[0], q1[1], r[3] / 20])
SEG = np.array(SEG)


_edge = {}


def plan_edge(j, s, side, hw):
    """Where the ground plan's asphalt ends, out from segment j's centre line at s on that side (the street data's half width
    if the plan's carriageway is narrower). Streets whose asphalt in the plan is wider than their width in the data (junction
    flares, a service lane alongside) had their poles placed in the road (Ash, 21 November 2026: "some ... light posts on roads")."""
    key = (j, round(float(s), 1), side)
    if key not in _edge:
        ax, az, bx, bz = SEG[j, :4]; L = math.hypot(bx - ax, bz - az) or 1; ux, uz = (bx - ax) / L, (bz - az) / L
        px, pz = ax + (bx - ax) * s, az + (bz - az) * s; nx, nz = -uz * side, ux * side
        e = hw
        for d in np.arange(0.2, hw + 8, 0.2):
            if kind(px + nx * d, pz + nz * d) != ASPH and kind(px + nx * (d + 0.2), pz + nz * (d + 0.2)) != ASPH:
                e = max(hw, d); break
        else:
            e = hw + 8
        _edge[key] = e
    return _edge[key]


def kerb_dist(x, z):
    """How far (x, z) is outside the nearest carriageway's edge (negative: on it), the edge being where the ground plan's
    asphalt ends, if that is further out than the street data says."""
    ax, az, bx, bz, hw = SEG.T
    dx, dz = bx - ax, bz - az; l2 = np.maximum(dx * dx + dz * dz, 1e-9)
    s = np.clip(((x - ax) * dx + (z - az) * dz) / l2, 0, 1)
    d = np.hypot(x - ax - s * dx, z - az - s * dz)
    best = float('inf')
    for j in np.argsort(d - hw)[:3]:
        side = 1 if (x - ax[j]) * -dz[j] + (z - az[j]) * dx[j] >= 0 else -1
        best = min(best, float(d[j] - plan_edge(int(j), s[j], side, hw[j])))
    return best


bb = np.frombuffer(base64.b64decode(t['buildings']), np.int16).astype(np.int64)
B = defaultdict(list); i = 0
while i < len(bb):
    k = int(bb[i]); p = bb[i + 7:i + 7 + 2 * k].reshape(-1, 2) / 10; i += 7 + 2 * k
    if k >= 3:
        poly = Polygon(p)
        x0, z0, x1, z1 = poly.bounds
        for cx in range(int(x0 // 50), int(x1 // 50) + 1):
            for cz in range(int(z0 // 50), int(z1 // 50) + 1):
                B[(cx, cz)].append(poly)


def in_building(x, z):
    q = Point(x, z)
    return any(pl.contains(q) for pl in B.get((int(x // 50), int(z // 50)), []))


ring = [(0.35 * math.cos(a), 0.35 * math.sin(a)) for a in np.linspace(0, 2 * math.pi, 8, endpoint=False)]


def clear(x, z):
    return kind(x, z) not in (CONC, ASPH) and all(kind(x + a, z + b) not in (CONC, ASPH) for a, b in ring)


spots = json.load(open(SPOTS))['s']
fix, st = {}, defaultdict(int)
cand = sorted([(s, q) for s in np.arange(-8, 8.01, 0.5) for q in np.arange(-1.5, 9.01, 0.25)], key=lambda c: abs(c[0]) + 2 * abs(c[1]))
for x, y, z, hd, key in spots:
    if clear(x, z) and kerb_dist(x, z) > 0.4:
        st['clear already'] += 1; continue
    rx, rz = math.sin(hd), math.cos(hd)            # towards the road
    tx, tz = rz, -rx                               # along it
    best = None
    for s, q in cand:
        cx, cz = x + tx * s - rx * q, z + tz * s - rz * q
        kd = kerb_dist(cx, cz)
        if not (0.5 <= kd <= 4.5) or not clear(cx, cz) or in_building(cx, cz):
            continue
        best = (cx, cz); break
    if best is None:                               # a paved verge: 0.6 m behind the kerb, where it stands along the street
        kd = kerb_dist(x, z)
        if kd > 3.1 or 0.6 - kd > 9:               # not beside a kerb at all (a car park, under a bridge): left as it is
            st['left, no kerb near'] += 1; continue
        best = (x - rx * (0.6 - kd), z - rz * (0.6 - kd))
        st['to the kerb on paving'] += 1
    else:
        st['moved clear'] += 1
    fix[key] = [round(best[0], 2), round(best[1], 2)]
D = [math.hypot(v[0] - x, v[1] - z) for (x, y, z, hd, key) in spots for v in [fix.get(key)] if v]
st["moved m (median, 90%, max)"] = [round(float(np.percentile(D, q)), 1) for q in (50, 90, 100)] if D else []
print(json.dumps(dict(poles=len(spots), **st)))
if WRITE:
    t['lampFix'] = fix
    json.dump(t, open(TOWN, 'w'), separators=(',', ':'))
