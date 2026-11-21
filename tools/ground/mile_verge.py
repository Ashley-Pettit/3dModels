"""A footpath along Ipswich Road where a car yard's or car park's asphalt ran straight into the road (Ash, 21 November 2026: "On the
magic mile the business still stretches out onto the main road. The main road needs a few fixes").

  python3 mile_verge.py <town.json> <surface dir> [--write]

Along both carriageways of Ipswich Road through the Magic Mile, on each one's outer side (not the median), the first 2.4 m past the kerb
is a concrete footpath wherever the ground there is asphalt or bare: a yard or car park that reached the road now stops at the footpath,
and its driveways cross it as concrete crossovers do. Side streets (any other road's carriageway) and roofs are left alone.
"""
import base64, json, sys
from collections import defaultdict
import numpy as np
from PIL import Image
from scipy import ndimage as ndi
from matplotlib.path import Path

TOWN, SURF = sys.argv[1:3]
WRITE = '--write' in sys.argv
t = json.load(open(TOWN)); SX, SZ = t['meta']['size']
RES = 1024; MX, MZ = SX / 16 / RES, SZ / 16 / RES; MPP = (MX + MZ) / 2
OTHER, LAWN, ASPH, CONC = 0, 1, 2, 3
BOX = (-1110, -800, -440, 80)   # the Magic Mile: x0, z0, x1, z1

blocks = {}
def block(br, bc):
    if (br, bc) not in blocks:
        try:
            a = np.array(Image.open(f'{SURF}/{br}_{bc}.webp')).astype(np.int16)
            k = (a.argmax(2) + 1).astype(np.uint8); k[a.max(2) <= 128] = OTHER
            blocks[br, bc] = [k, k.copy()]
        except FileNotFoundError:
            blocks[br, bc] = None
    return blocks[br, bc]
def cell(x, z):
    c, r = int((x + SX / 2) / MX), int((z + SZ / 2) / MZ)
    return r // RES, c // RES, r % RES, c % RES

# every road's carriageway, in a 20 m grid
segs = defaultdict(list)
nid = t['names'].index('Ipswich Road')
for ri, rd in enumerate(t['roads']):
    p = np.array(rd[5], float).reshape(-1, 2) / 10; w = rd[3] / 10
    for a, b in zip(p[:-1], p[1:]):
        for gx in range(int(min(a[0], b[0]) // 20) - 1, int(max(a[0], b[0]) // 20) + 2):
            for gz in range(int(min(a[1], b[1]) // 20) - 1, int(max(a[1], b[1]) // 20) + 2):
                segs[gx, gz].append((a, b, w, rd[4] == nid, ri))
def on_road(x, z, skip=None, ipswich=None):
    for a, b, w, ip, ri in segs.get((int(x // 20), int(z // 20)), []):
        if ri == skip or (ipswich is not None and ip != ipswich): continue
        d = b - a; L2 = float(d @ d) or 1; k = max(0, min(1, ((x - a[0]) * d[0] + (z - a[1]) * d[1]) / L2))
        if np.hypot(x - a[0] - d[0] * k, z - a[1] - d[1] * k) < w / 2 + 0.3: return True
    return False

bb = np.frombuffer(base64.b64decode(t['buildings']), dtype='<i2').astype(float)
roofs = defaultdict(list); i = 0
while i < len(bb):
    k = int(bb[i]); p = bb[i + 7:i + 7 + 2 * k].reshape(-1, 2) / 10; i += 7 + 2 * k
    x0, z0 = p.min(0); x1, z1 = p.max(0); P = Path(p)
    for gx in range(int(x0 // 20), int(x1 // 20) + 1):
        for gz in range(int(z0 // 20), int(z1 // 20) + 1): roofs[gx, gz].append(P)
def under_roof(x, z):
    return any(P.contains_point((x, z)) for P in roofs.get((int(x // 20), int(z // 20)), []))

n = 0
for ri, rd in enumerate(t['roads']):
    if rd[4] != nid: continue
    p = np.array(rd[5], float).reshape(-1, 2) / 10; w = rd[3] / 10
    for a, b in zip(p[:-1], p[1:]):
        L = np.hypot(*(b - a)); d = (b - a) / L
        for side in (1, -1):
            nn = side * np.array([d[1], -d[0]])
            for s in np.arange(0, L, MPP * 0.7):
                c = a + d * s
                if not (BOX[0] < c[0] < BOX[2] and BOX[1] < c[1] < BOX[3]): continue
                # the median side: the other carriageway within 14 m
                if any(on_road(*(c + nn * (w / 2 + o)), skip=ri, ipswich=True) for o in (3, 7, 11, 14)): continue
                for o in np.arange(0.15, 2.4, MPP * 0.7):
                    x, z = c + nn * (w / 2 + o)
                    br, bc, r, cc = cell(x, z)
                    bl = block(br, bc)
                    if bl is None or bl[1][r, cc] not in (ASPH, OTHER): continue
                    if on_road(x, z) or under_roof(x, z): continue
                    bl[1][r, cc] = CONC; n += 1

def encode(K):
    out = np.zeros(K.shape + (3,), np.uint8)
    for ch, kind_ in enumerate((LAWN, ASPH, CONC)):
        m = K == kind_
        inside = ndi.distance_transform_edt(m); outside = ndi.distance_transform_edt(~m)
        dd = np.where(m, (inside - 0.5) * MPP, -(outside - 0.5) * MPP).astype(np.float32)
        dd = ndi.gaussian_filter(dd, 1.4)
        out[..., ch] = np.clip(np.round(128 + dd * 80), 0, 255).astype(np.uint8)
    return out

written = []
for (br, bc), bl in list(blocks.items()):
    if bl is None: continue
    ch = bl[0] != bl[1]
    if not ch.any(): continue
    pad = 64; K = np.full((RES + 2 * pad, RES + 2 * pad), LAWN, np.uint8); K[pad:-pad, pad:-pad] = bl[1]
    for dr in (-1, 0, 1):
        for dc in (-1, 0, 1):
            if dr == dc == 0 or not (0 <= br + dr < 16 and 0 <= bc + dc < 16): continue
            nb = block(br + dr, bc + dc)
            if nb is None: continue
            ys = slice(pad + dr * RES, pad + dr * RES + RES); xs = slice(pad + dc * RES, pad + dc * RES + RES)
            y0, y1 = max(0, ys.start), min(K.shape[0], ys.stop); x0, x1 = max(0, xs.start), min(K.shape[1], xs.stop)
            K[y0:y1, x0:x1] = nb[1][y0 - ys.start:y1 - ys.start, x0 - xs.start:x1 - xs.start]
    F = encode(K)[pad:-pad, pad:-pad]
    near = ndi.binary_dilation(ch, iterations=4)
    fn = f'{SURF}/{br}_{bc}.webp'; old = np.array(Image.open(fn)); new = old.copy(); new[near] = F[near]
    written.append(f'{br}_{bc}')
    if WRITE: Image.fromarray(new).save(fn, lossless=True, method=4)
print(json.dumps({'pixels': n, 'm2': round(n * MX * MZ), 'blocks': written}))
