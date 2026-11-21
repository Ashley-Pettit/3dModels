"""The Moorooka ground plan (surface blocks) as one array for a box of model metres, and writing a changed box back.
  P = Plan(x0, z0, x1, z1)      P.K is kinds (0 other, 1 lawn, 2 asphalt, 3 concrete) at the blocks' own pixels; P.X, P.Z their centres
  P.write(surface_dir)          re-encodes each changed block as the other tools do (128 + 80 x signed distance per kind, smoothed, with its
                                neighbours for the edges; only within 4 pixels of a change) and saves it lossless"""
import json, os, numpy as np
from PIL import Image
from scipy import ndimage as ndi
HERE = os.path.dirname(os.path.abspath(__file__)); REPO = os.path.abspath(os.path.join(HERE, '..', '..', '..'))
TOWN = os.path.join(REPO, 'town3d', 'moorooka', 'town.json'); SURF = os.path.join(REPO, 'town3d', 'moorooka', 'surface')
t = json.load(open(TOWN)); SX, SZ = t['meta']['size']; RES = 1024; MX, MZ = SX / 16 / RES, SZ / 16 / RES; MPP = (MX + MZ) / 2
OTHER, LAWN, ASPH, CONC = 0, 1, 2, 3
def load(surf, r, c):
    a = np.array(Image.open(f'{surf}/{r}_{c}.webp')).astype(np.int16); k = (a.argmax(2) + 1).astype(np.uint8); k[a.max(2) <= 128] = OTHER; return k
class Plan:
    def __init__(s, x0, z0, x1, z1, surf=None):
        surf = surf or SURF; s.surf = surf; s.c0 = int(np.floor((x0 + SX / 2) / MX)); s.c1 = int(np.ceil((x1 + SX / 2) / MX)); s.r0 = int(np.floor((z0 + SZ / 2) / MZ)); s.r1 = int(np.ceil((z1 + SZ / 2) / MZ))
        s.bl = {}; s.K = np.zeros((s.r1 - s.r0, s.c1 - s.c0), np.uint8)
        for br in range(s.r0 // RES, (s.r1 - 1) // RES + 1):
            for bc in range(s.c0 // RES, (s.c1 - 1) // RES + 1):
                k = load(surf, br, bc); s.bl[br, bc] = k
                ra, rb = max(s.r0, br * RES), min(s.r1, br * RES + RES); ca, cb = max(s.c0, bc * RES), min(s.c1, bc * RES + RES)
                s.K[ra - s.r0:rb - s.r0, ca - s.c0:cb - s.c0] = k[ra - br * RES:rb - br * RES, ca - bc * RES:cb - bc * RES]
        s.K0 = s.K.copy()
        s.X, s.Z = np.meshgrid((np.arange(s.c0, s.c1) + 0.5) * MX - SX / 2, (np.arange(s.r0, s.r1) + 0.5) * MZ - SZ / 2)
    def write(s, out=None, dry=False):
        out = out or s.surf; done = []
        for (br, bc), k in s.bl.items():
            new = k.copy(); ra, rb = max(s.r0, br * RES), min(s.r1, br * RES + RES); ca, cb = max(s.c0, bc * RES), min(s.c1, bc * RES + RES)
            new[ra - br * RES:rb - br * RES, ca - bc * RES:cb - bc * RES] = s.K[ra - s.r0:rb - s.r0, ca - s.c0:cb - s.c0]
            ch = new != k
            if not ch.any(): continue
            pad = 64; K = np.full((RES + 2 * pad, RES + 2 * pad), LAWN, np.uint8); K[pad:-pad, pad:-pad] = new
            for dr in (-1, 0, 1):
                for dc in (-1, 0, 1):
                    if dr == dc == 0 or not (0 <= br + dr < 16 and 0 <= bc + dc < 16): continue
                    nb = s.bl.get((br + dr, bc + dc))
                    if nb is None: nb = load(s.surf, br + dr, bc + dc)
                    else:   # a neighbour in the box: its new content
                        nb = nb.copy(); r_a, r_b = max(s.r0, (br + dr) * RES), min(s.r1, (br + dr) * RES + RES); c_a, c_b = max(s.c0, (bc + dc) * RES), min(s.c1, (bc + dc) * RES + RES)
                        nb[r_a - (br + dr) * RES:r_b - (br + dr) * RES, c_a - (bc + dc) * RES:c_b - (bc + dc) * RES] = s.K[r_a - s.r0:r_b - s.r0, c_a - s.c0:c_b - s.c0]
                    ys = slice(pad + dr * RES, pad + dr * RES + RES); xs = slice(pad + dc * RES, pad + dc * RES + RES)
                    y0, y1 = max(0, ys.start), min(K.shape[0], ys.stop); x0, x1 = max(0, xs.start), min(K.shape[1], xs.stop)
                    K[y0:y1, x0:x1] = nb[y0 - ys.start:y1 - ys.start, x0 - xs.start:x1 - xs.start]
            F = np.zeros(K.shape + (3,), np.uint8)
            for chn, kind in enumerate((LAWN, ASPH, CONC)):
                m = K == kind; ins = ndi.distance_transform_edt(m); outs = ndi.distance_transform_edt(~m)
                dd = ndi.gaussian_filter(np.where(m, (ins - 0.5) * MPP, -(outs - 0.5) * MPP).astype(np.float32), 1.4)
                F[..., chn] = np.clip(np.round(128 + dd * 80), 0, 255).astype(np.uint8)
            F = F[pad:-pad, pad:-pad]; near = ndi.binary_dilation(ch, iterations=4)
            fn = f'{out}/{br}_{bc}.webp'; old = np.array(Image.open(f'{s.surf}/{br}_{bc}.webp')); img = old.copy(); img[near] = F[near]
            # check: what the block now decodes to
            a = img.astype(np.int16); kk = (a.argmax(2) + 1).astype(np.uint8); kk[a.max(2) <= 128] = OTHER
            done.append((f'{br}_{bc}', int(ch.sum()), round(float(ch.sum() * MX * MZ)), int((kk != new).sum())))
            if not dry: Image.fromarray(img).save(fn, lossless=True, method=4)
        return done
def inside(poly, X, Z):
    from matplotlib.path import Path
    return Path(np.asarray(poly, float)).contains_points(np.c_[X.ravel(), Z.ravel()]).reshape(X.shape)
def dist_to_line(pts, X, Z):
    """Distance from each cell to a polyline, and the signed side (+ to the left of its direction)."""
    pts = np.asarray(pts, float); best = np.full(X.shape, 1e9); side = np.zeros(X.shape); along = np.zeros(X.shape); acc = 0.0
    for a, b in zip(pts[:-1], pts[1:]):
        d = b - a; L = np.hypot(*d) or 1e-9; u = d / L; px = X - a[0]; pz = Z - a[1]; tt = np.clip(px * u[0] + pz * u[1], 0, L)
        qx = px - u[0] * tt; qz = pz - u[1] * tt; dd = np.hypot(qx, qz); m = dd < best
        best[m] = dd[m]; side[m] = np.sign(u[0] * pz - u[1] * px)[m]; along[m] = (acc + tt)[m]; acc += L
    return best, side, along
