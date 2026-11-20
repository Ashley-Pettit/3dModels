"""Moorooka's ground plan made to agree with the house fronts from Street View (MOO_LITE in app.html), and the trees,
parked cars and front-yard things moved to suit (Ash, 20 November 2026: "With the new houses, once your done, you'll need
to reconnect paths, fix driveways and fences", and "now houses are good, just need to fix paths, then remove trees and move
trees slightly off paths").

  python3 fronts_ground.py <app.html> <town.json> <surface dir> <yards.bin> <work dir> [--write]

For each house front, along its front line (N to S) with v metres in from the street:
1. The ground's own drives and paths are found where paving crosses the front line (just inside it): 2.2 m or wider is a
   drive, 0.6 to 2.2 m a path; a paved front wider than 7 m (a yard, a car park) is neither.
2. A drive seen in Street View (`d`) more than 3.5 m from the ground's wins over a drive the ground planner placed by rule (outside the designed square
   round the shops, where the ground was designed from the plan alone): the rule drive goes back to lawn, kerb to its
   end, keeping the footpath, and the Street View one is laid from the kerb to the house (or on 6 m past its front).
   Inside the designed square the ground's drives were read off the aerial photograph, so they stay and the Street View
   drive gives way. Where the ground has no drive at all, the Street View one is laid in both.
3. A gate seen in Street View (`gap`) gets a path from it to the house (a rule path elsewhere goes back to lawn, outside
   the designed square). Every front path is carried across the verge to the footpath (or the kerb), and every drive
   gets its crossover to the kerb if it had none.
4. The fence is then cut wherever paving crosses it (`c` in MOO_LITE, replacing `gap` and `d`): the ground draws the
   paving now, so the fronts no longer draw a slab of their own.
5. Trees whose trunk stands on concrete (a footpath, drive, path or patio) or within 0.6 m of it, or on a street, move to
   the nearest open ground within 4 m, not under a roof and not on a street; if there is none, they go. Trees in a car
   park's asphalt stay (the plan draws no tree islands). Parked cars on a drive that went back to lawn, or across a new crossover, go (a
   car on a moved drive moves with it). Front-yard things from suburb_yards.py on new paving go, and its low front
   fences go wherever Street View saw the real front.
Only the blocks that change are written, and in them only the pixels within 2 m of a change are re-encoded.
"""
import base64, json, math, os, re, sys
from collections import defaultdict
import numpy as np
from PIL import Image, ImageDraw
from scipy import ndimage as ndi

args = sys.argv[1:]
APP, TOWN, SURF, YARDS, WORK = args[:5]
WRITE = '--write' in args
os.makedirs(WORK, exist_ok=True)

t = json.load(open(TOWN))
meta = t['meta']; SX, SZ = meta['size']
RES = 1024; TX, TZ = SX / 16, SZ / 16
MX, MZ = TX / RES, TZ / RES; MPP = (MX + MZ) / 2
MARGIN = 256; NN = 4 * RES + 2 * MARGIN
OTHER, LAWN, ASPH, CONC = 0, 1, 2, 3
PAVED = (ASPH, CONC)
PILOT = range(4, 8)
STEP = 0.1

# ---------------------------------------------------------------- the house fronts
src = open(APP).read()
i0 = src.index('  const MOO_LITE = [\n'); i1 = src.index('\n  ];', i0)
H = []
for ln in src[i0:i1].splitlines()[1:]:
    m = re.match(r'\s*(\{.*\}),?\s*//\s*(.+?)\s*$', ln)
    if not m:
        continue
    h = json.loads(re.sub(r'([{,]\s*)([A-Za-z_]\w*)\s*:', r'\1"\2":', m.group(1)))
    h['name'] = m.group(2)
    N = np.array(h['N'], float); S = np.array(h['S'], float); L = float(np.linalg.norm(S - N))
    if L < 2:
        continue
    u = (S - N) / L
    h.update(_N=N, _u=u, _n=np.array([u[1], -u[0]]), _L=L)
    mid = N + u * L / 2
    h['_bc'] = (int((mid[0] + SX / 2) / TX), int((mid[1] + SZ / 2) / TZ))     # block column, row
    h['_designed'] = h['_bc'][0] in PILOT and h['_bc'][1] in PILOT
    H.append(h)
print(json.dumps({'fronts': len(H), 'in the designed square': sum(h['_designed'] for h in H)}), flush=True)

# buildings, for "not under a roof"
bb = np.frombuffer(base64.b64decode(t['buildings']), np.int16).astype(np.int64)
blds = []; i = 0
while i < len(bb):
    k = int(bb[i]); p = bb[i + 7:i + 7 + 2 * k].reshape(-1, 2) / 10; i += 7 + 2 * k
    if k >= 3:
        blds.append(p)
bld_bb = np.array([[p[:, 0].min(), p[:, 1].min(), p[:, 0].max(), p[:, 1].max()] for p in blds])


def square_of(x, z):
    return int((z + SZ / 2) / (4 * TZ)), int((x + SX / 2) / (4 * TX))


def origin(R, C):
    return -SX / 2 + C * 4 * TX - MARGIN * MX, -SZ / 2 + R * 4 * TZ - MARGIN * MZ


def load_square(R, C):
    K = np.full((NN, NN), LAWN, np.uint8)
    r0, c0 = R * 4 * RES - MARGIN, C * 4 * RES - MARGIN
    for br in range(max(0, r0 // RES), min(16, (r0 + NN - 1) // RES + 1)):
        for bc in range(max(0, c0 // RES), min(16, (c0 + NN - 1) // RES + 1)):
            a = np.array(Image.open(f'{SURF}/{br}_{bc}.webp')).astype(np.int16)
            k = (a.argmax(2) + 1).astype(np.uint8); k[a.max(2) <= 128] = OTHER
            y0, x0 = br * RES - r0, bc * RES - c0
            ys, xs = slice(max(0, y0), min(NN, y0 + RES)), slice(max(0, x0), min(NN, x0 + RES))
            K[ys, xs] = k[ys.start - y0:ys.stop - y0, xs.start - x0:xs.stop - x0]
    return K


def roof_square(R, C):
    X0, Z0 = origin(R, C); X1, Z1 = X0 + NN * MX, Z0 + NN * MZ
    im = Image.new('1', (NN, NN)); d = ImageDraw.Draw(im)
    sel = np.where((bld_bb[:, 2] > X0) & (bld_bb[:, 0] < X1) & (bld_bb[:, 3] > Z0) & (bld_bb[:, 1] < Z1))[0]
    for j in sel:
        d.polygon([((x - X0) / MX, (z - Z0) / MZ) for x, z in blds[j]], fill=1)
    return np.array(im)


class Sq:
    """A 4 x 4 block square with its margin: kinds and roofs, and points in a front's frame read off it."""
    cache = {}

    @classmethod
    def get(cls, R, C):
        if (R, C) not in cls.cache:
            if len(cls.cache) > 3:
                cls.cache.pop(next(iter(cls.cache)))
            s = cls(); s.R, s.C = R, C; s.X0, s.Z0 = origin(R, C); s.K = load_square(R, C); s.roof = roof_square(R, C)
            cls.cache[(R, C)] = s
        return cls.cache[(R, C)]

    def ij(self, x, z):
        return np.clip(((z - self.Z0) / MZ).astype(int), 0, NN - 1), np.clip(((x - self.X0) / MX).astype(int), 0, NN - 1)

    def at(self, h, a, v):
        """Kind at points (a along the front, v in from it)."""
        a = np.asarray(a, float); v = np.asarray(v, float)
        x = h['_N'][0] + h['_u'][0] * a + h['_n'][0] * v; z = h['_N'][1] + h['_u'][1] * a + h['_n'][1] * v
        r, c = self.ij(x, z)
        return self.K[r, c], self.roof[r, c]


def runs(mask, a):
    """Runs of True in mask along a (step STEP): [(a0, a1)]."""
    out = []; s = None
    for j, m in enumerate(mask):
        if m and s is None:
            s = j
        if not m and s is not None:
            out.append((a[s] - STEP / 2, a[j - 1] + STEP / 2)); s = None
    if s is not None:
        out.append((a[s] - STEP / 2, a[-1] + STEP / 2))
    return out


def crossings(sq, h):
    """The ground's drives and paths across the front: (drives, paths, wide) as [(a0, a1)]."""
    a = np.arange(STEP / 2, h['_L'], STEP)
    k1, _ = sq.at(h, a, 0.5); k2, _ = sq.at(h, a, 1.6)
    pav = np.isin(k1, PAVED) & np.isin(k2, PAVED)
    dr, pa, wide = [], [], []
    for r in runs(pav, a):
        w = r[1] - r[0]
        (wide if w > 7 else dr if w >= 2.2 else pa if w >= 0.6 else []).append(r)
    return dr, pa, wide


def depth_in(sq, h, ac, w, vmax=35):
    """How far the paving at ac (width w) runs in from the front, and where a roof first stands across it."""
    v = np.arange(0.3, vmax, STEP)
    k, rf = sq.at(h, np.full_like(v, ac), v)
    pav = np.isin(k, PAVED)
    end = 0.3
    gap = 0
    for j, p in enumerate(pav):
        if p:
            end = v[j]; gap = 0
        else:
            gap += 1
            if gap > 6:
                break
    hit = None
    for dx in (-w / 2 + 0.2, 0, w / 2 - 0.2):
        k2, rf2 = sq.at(h, np.full_like(v, ac + dx), v)
        j = np.argmax(rf2) if rf2.any() else None
        if j is not None and (hit is None or v[j] < hit):
            hit = v[j]
    return end, hit


def house_front_v(sq, h):
    """The front of the main building on the lot: v of the nearest roof in the front's span, and that roof's span along a."""
    a = np.arange(0.2, h['_L'] - 0.1, 0.4); v = np.arange(0.5, 40, 0.4)
    A, V = np.meshgrid(a, v)
    _, rf = sq.at(h, A.ravel(), V.ravel()); rf = rf.reshape(A.shape)
    if not rf.any():
        return None, None
    j = np.argmax(rf.any(1)); hv0 = float(v[j])
    band = rf[j:j + 8].any(0)
    return hv0, (float(a[band].min()), float(a[band].max())) if band.any() else None


def to_road(sq, h, ac, vmax=14):
    """Distance from the front line out to the carriageway (first asphalt) at ac, and to the first paving."""
    v = -np.arange(0.2, vmax, STEP)
    k, _ = sq.at(h, np.full_like(v, ac), v)
    road = next((float(-v[j]) for j in range(len(v)) if k[j] == ASPH), None)
    pave = next((float(-v[j]) for j in range(len(v)) if k[j] in PAVED), None)
    return road, pave


def tidy_after(K0, K):
    """After the changes: slivers of concrete under 0.6 m left beside a drive or path that went back to lawn go to lawn,
    and slivers of lawn under 0.6 m between new paving and old take the paving."""
    er = (K0 != K) & (K == LAWN); pa = (K0 != K) & (K == CONC)
    if er.any():
        c = K == CONC
        thin = c & ~ndi.binary_opening(c, structure=np.ones((3, 3), bool))
        K[thin & ndi.binary_dilation(er, iterations=5)] = LAWN
    if pa.any():
        l = K == LAWN
        thin = l & ~ndi.binary_opening(l, structure=np.ones((3, 3), bool))
        K[thin & ndi.binary_dilation(pa, iterations=3)] = CONC
    return K


# ---------------------------------------------------------------- 1. decide, front by front, against the ground as it is
OPS = []          # (kind, N, u, n, a0, a1, v0, v1, from-kinds) in model metres, applied in order to every square they touch
st = defaultdict(int)
DEC = {}
moved_cars = []   # (old drive rectangle, new drive centre) for parked cars on a drive that moved
gone_cross = []   # new crossovers: (N, u, n, a0, a1, v0) - parked cars across them go


WHO = []


def op(kind, h, a0, a1, v0, v1, frm):
    WHO.append(h['name'])
    OPS.append((kind, h['_N'].tolist(), h['_u'].tolist(), h['_n'].tolist(), float(a0), float(a1), float(v0), float(v1), tuple(frm)))


def erase_crossing(sq, h, r0, r1, end):
    """A drive or path that goes back to lawn: in the lot to `end`, and its crossover out to the kerb, keeping the footpath."""
    op(LAWN, h, r0 - 0.5, r1 + 0.5, 0.0, end + 0.2, (CONC, ASPH))
    road, _ = to_road(sq, h, (r0 + r1) / 2)
    if road is None:
        return
    v = -np.arange(0.1, road, STEP)
    side = [sq.at(h, np.full_like(v, aa), v)[0] for aa in (r0 - 1.5, r0 - 3.0, r1 + 1.5, r1 + 3.0)]
    footpath = ((side[0] == CONC) & (side[1] == CONC)) | ((side[2] == CONC) & (side[3] == CONC))
    for s0, s1 in runs(~footpath, -v):
        op(LAWN, h, r0 - 0.5, r1 + 0.5, -s1, -s0 + 0.05, (CONC,))


def lay_drive(sq, h, a0, a1, end):
    op(CONC, h, a0, a1, 0.0, end, (LAWN, OTHER))
    road, _ = to_road(sq, h, (a0 + a1) / 2)
    if road is not None:
        op(CONC, h, a0, a1, -road - 0.05, 0.05, (LAWN, OTHER))
        gone_cross.append((h['_N'].tolist(), h['_u'].tolist(), h['_n'].tolist(), a0, a1, -road))


def link_path(sq, h, ac):
    """A front path carried across the verge to the footpath (or the kerb)."""
    _, pave = to_road(sq, h, ac, 9)
    if pave is not None and pave > 0.35:
        op(CONC, h, ac - 0.55, ac + 0.55, -pave - 0.05, 0.05, (LAWN, OTHER))
        st['paths linked to the footpath'] += 1


for h in sorted(H, key=lambda h: square_of(*(h['_N'] + h['_u'] * h['_L'] / 2))):
    if h is not H[0] and '_prev' in DEC:
        pn, pb = DEC.pop('_prev'); DEC[pn] = {k: v - pb.get(k, 0) for k, v in st.items() if v - pb.get(k, 0)}
    DEC['_prev'] = (h['name'], dict(st))
    sq = Sq.get(*square_of(*(h['_N'] + h['_u'] * h['_L'] / 2)))
    L = h['_L']
    dr, pa, wide = crossings(sq, h)
    h['_ground0'] = dict(drives=dr, paths=pa, wide=wide)
    if h.get('p'):                      # a business with its forecourt: left as it is
        continue
    d = h.get('d'); sv = (max(0.0, d[0]), min(L, d[1])) if d and d[1] - d[0] >= 1.2 else None
    if sv and any(r[0] <= sv[0] + 0.5 and r[1] >= sv[1] - 0.5 for r in wide):
        sv = None                       # inside a paved front: nothing to lay
    if sv:
        w = sv[1] - sv[0]
        if w < 2.8 or w > 6:            # a drive is 2.8 to 6 m wide; keep the middle Street View saw
            c = (sv[0] + sv[1]) / 2; w = min(6.0, max(2.8, w)); sv = (max(0.1, c - w / 2), min(L - 0.1, c + w / 2))
        hit = [r for r in dr if min(r[1], sv[1]) - max(r[0], sv[0]) >= -3.5]   # the same drive, near enough (Street View's place is a guess to a few metres)
        if hit:
            st['drives already right'] += 1
        elif dr and h['_designed']:
            st['drives kept (aerial)'] += 1
        else:
            old_end = None
            for r in dr:
                end, _ = depth_in(sq, h, (r[0] + r[1]) / 2, r[1] - r[0])
                erase_crossing(sq, h, r[0], r[1], end)
                moved_cars.append((h['_N'].tolist(), h['_u'].tolist(), h['_n'].tolist(), r[0], r[1], end, (sv[0] + sv[1]) / 2))
                old_end = max(old_end or 0, end); st['rule drives moved'] += 1
            c = (sv[0] + sv[1]) / 2
            _, hit_v = depth_in(sq, h, c, sv[1] - sv[0])
            hv0, _ = house_front_v(sq, h)
            if hit_v is not None and hit_v <= 30:
                end = hit_v                                   # up to the garage or the house
            elif hv0 is not None:
                end = min(30.0, hv0 + 6.0)                    # on beside the house
            else:
                end = old_end or 8.0
            lay_drive(sq, h, sv[0], sv[1], max(3.0, end))
            st['drives laid' if not dr else 'drives laid in place of a rule drive'] += 1
    # a drive the ground has (kept) with no crossover: give it one
    for r in (dr if not sv or any(min(r[1], sv[1]) - max(r[0], sv[0]) > 0.5 for r in dr) else []):
        k, _ = sq.at(h, (r[0] + r[1]) / 2, -0.6)
        if k not in PAVED:
            road, _ = to_road(sq, h, (r[0] + r[1]) / 2)
            if road is not None and road < 12:
                op(CONC, h, r[0], r[1], -road - 0.05, 0.05, (LAWN, OTHER)); st['crossovers added'] += 1
    # the gate and its path
    gap = h.get('gap')
    if gap and h.get('f'):
        gc = (gap[0] + gap[1]) / 2
        near = [r for r in pa if r[0] - 2.0 <= gc <= r[1] + 2.0]
        drv = [r for r in dr if r[0] - 0.5 <= gc <= r[1] + 0.5] or (sv and sv[0] - 0.5 <= gc <= sv[1] + 0.5)
        if near:
            for r in near:
                link_path(sq, h, (r[0] + r[1]) / 2)
            st['gates on a path already'] += 1
        elif not drv:
            if not h['_designed']:
                for r in pa:
                    end, _ = depth_in(sq, h, (r[0] + r[1]) / 2, r[1] - r[0])
                    erase_crossing(sq, h, r[0], r[1], end); st['rule paths moved'] += 1
            _, hit_v = depth_in(sq, h, gc, 1.1)
            hv0, span = house_front_v(sq, h)
            if hit_v is not None and hit_v <= 25:
                op(CONC, h, gc - 0.55, gc + 0.55, 0.0, hit_v + 0.1, (LAWN, OTHER))
            elif hv0 is not None and hv0 <= 25 and span:
                op(CONC, h, gc - 0.55, gc + 0.55, 0.0, hv0 - 0.4, (LAWN, OTHER))
                ae = min(max(gc, span[0] + 0.6), span[1] - 0.6)
                op(CONC, h, min(gc, ae) - 0.55, max(gc, ae) + 0.55, hv0 - 1.5, hv0 + 0.1, (LAWN, OTHER))
            else:
                op(CONC, h, gc - 0.55, gc + 0.55, 0.0, 6.0, (LAWN, OTHER))
            link_path(sq, h, gc); st['paths laid from a gate'] += 1
    else:
        for r in pa:                     # the ground's own front paths, carried to the footpath
            if r[1] - r[0] <= 2.2:
                end, _ = depth_in(sq, h, (r[0] + r[1]) / 2, r[1] - r[0])
                if end >= 2.0:
                    link_path(sq, h, (r[0] + r[1]) / 2)
if '_prev' in DEC:
    pn, pb = DEC.pop('_prev'); DEC[pn] = {k: v - pb.get(k, 0) for k, v in st.items() if v - pb.get(k, 0)}
json.dump(DEC, open(f'{WORK}/decisions.json', 'w'))
print(json.dumps({'ops': len(OPS), **st}), flush=True)
json.dump(dict(ops=OPS, who=WHO), open(f'{WORK}/ops.json', 'w'))

# ---------------------------------------------------------------- 2. apply, square by square, and write the blocks that change
Sq.cache.clear()


def op_mask(o, X0, Z0):
    kind, N, u, n, a0, a1, v0, v1, frm = o
    N, u, n = np.array(N), np.array(u), np.array(n)
    P = [N + u * a + n * v for a in (a0, a1) for v in (v0, v1)]
    xs = [p[0] for p in P]; zs = [p[1] for p in P]
    c0 = max(0, int((min(xs) - X0) / MX) - 1); c1 = min(NN, int((max(xs) - X0) / MX) + 2)
    r0 = max(0, int((min(zs) - Z0) / MZ) - 1); r1 = min(NN, int((max(zs) - Z0) / MZ) + 2)
    if c1 <= c0 or r1 <= r0:
        return None
    cc, rr = np.meshgrid(np.arange(c0, c1), np.arange(r0, r1))
    dx = X0 + (cc + 0.5) * MX - N[0]; dz = Z0 + (rr + 0.5) * MZ - N[1]
    A = dx * u[0] + dz * u[1]; V = dx * n[0] + dz * n[1]
    m = (A >= a0) & (A <= a1) & (V >= v0) & (V <= v1)
    return rr[m], cc[m]


def encode(K):
    out = np.zeros(K.shape + (3,), np.uint8)
    for ch, kind_ in enumerate((LAWN, ASPH, CONC)):
        m = K == kind_
        inside = ndi.distance_transform_edt(m); outside = ndi.distance_transform_edt(~m)
        dd = np.where(m, (inside - 0.5) * MPP, -(outside - 0.5) * MPP).astype(np.float32)
        dd = ndi.gaussian_filter(dd, 1.4)
        out[..., ch] = np.clip(np.round(128 + dd * 80), 0, 255).astype(np.uint8)
    return out


ops_box = []
for o in OPS:
    N, u, n = np.array(o[1]), np.array(o[2]), np.array(o[3])
    P = [N + u * a + n * v for a in (o[4], o[5]) for v in (o[6], o[7])]
    ops_box.append((min(p[0] for p in P), min(p[1] for p in P), max(p[0] for p in P), max(p[1] for p in P)))
ops_box = np.array(ops_box) if ops_box else np.zeros((0, 4))
KF = {}            # final kinds per square core, for the trees, cars and yards
changed_m2 = 0
written = []
for R in range(4):
    for C in range(4):
        X0, Z0 = origin(R, C); X1, Z1 = X0 + NN * MX, Z0 + NN * MZ
        sel = np.where((ops_box[:, 2] > X0) & (ops_box[:, 0] < X1) & (ops_box[:, 3] > Z0) & (ops_box[:, 1] < Z1))[0] if len(ops_box) else []
        K0 = load_square(R, C); K = K0.copy()
        if len(sel):
            roof = roof_square(R, C)
            for j in sel:
                o = OPS[j]; mm = op_mask(o, X0, Z0)
                if mm is None:
                    continue
                rr, cc = mm
                ok = np.isin(K[rr, cc], o[8]) & ~roof[rr, cc]
                K[rr[ok], cc[ok]] = o[0]
            K = tidy_after(K0, K)
        core = (slice(MARGIN, -MARGIN), slice(MARGIN, -MARGIN))
        ch = (K != K0)
        KF[(R, C)] = (K[core].copy(), K0[core].copy())
        if not ch[core].any():
            continue
        changed_m2 += float(ch[core].sum()) * MX * MZ
        near = ndi.binary_dilation(ch, iterations=10)
        F = encode(K)
        for r in range(4):
            for c in range(4):
                br, bc = R * 4 + r, C * 4 + c
                ys, xs = slice(MARGIN + r * RES, MARGIN + (r + 1) * RES), slice(MARGIN + c * RES, MARGIN + (c + 1) * RES)
                nb = near[ys, xs]
                if not ch[ys, xs].any():
                    continue
                fn = f'{SURF}/{br}_{bc}.webp'
                old = np.array(Image.open(fn))
                new = old.copy(); new[nb] = F[ys, xs][nb]
                written.append(f'{br}_{bc}')
                if WRITE:
                    Image.fromarray(new).save(fn, lossless=True, method=4)
        print(json.dumps({'square': [R, C], 'changed m2': round(float(ch[core].sum()) * MX * MZ)}), flush=True)
print(json.dumps({'ground changed m2': round(changed_m2), 'blocks written': len(written)}), flush=True)


def kind_final(x, z, before=False):
    R, C = square_of(x, z)
    if not (0 <= R < 4 and 0 <= C < 4):
        return LAWN
    K = KF[(R, C)][1 if before else 0]
    X0, Z0 = origin(R, C)
    r = int((z - Z0) / MZ) - MARGIN; c = int((x - X0) / MX) - MARGIN
    return int(K[min(max(r, 0), K.shape[0] - 1), min(max(c, 0), K.shape[1] - 1)])


# ---------------------------------------------------------------- 3. the fences: cut where the paving crosses them
Sq.cache.clear()
for (R, C), (Kc, _) in KF.items():
    pass


class SqF(Sq):
    pass


def load_final(R, C):
    s = Sq(); s.R, s.C = R, C; s.X0, s.Z0 = origin(R, C)
    K = load_square(R, C)               # margins from the blocks; the core from what was just worked out
    K[MARGIN:-MARGIN, MARGIN:-MARGIN] = KF[(R, C)][0]
    s.K = K; s.roof = roof_square(R, C)
    return s


cuts = {}
cache = {}
for h in H:
    key = square_of(*(h['_N'] + h['_u'] * h['_L'] / 2))
    if key not in cache:
        if len(cache) > 2:
            cache.pop(next(iter(cache)))
        cache[key] = load_final(*key)
    sq = cache[key]
    f = h.get('f')
    if not f:
        continue
    A = h.get('from', 0.0); B = h.get('to', h['_L'])
    dr, pa, wide = crossings(sq, h)
    cs = [(r[0] - 0.1, r[1] + 0.1) for r in dr + pa]
    d = h.get('d')
    for r in wide:                       # a paved front: the fence opens only where Street View saw the drive or gate
        for q in [d, h.get('gap')]:
            if q and min(q[1], r[1]) - max(q[0], r[0]) > 0.5:
                cs.append((max(q[0], r[0]), min(q[1], r[1])))
    cs = sorted((max(A, a0), min(B, a1)) for a0, a1 in cs if min(B, a1) - max(A, a0) >= 0.5)
    merged = []
    for a0, a1 in cs:
        if merged and a0 <= merged[-1][1] + 0.3:
            merged[-1][1] = max(merged[-1][1], a1)
        else:
            merged.append([a0, a1])
    cuts[h['name']] = [[round(a0, 1), round(a1, 1)] for a0, a1 in merged]
    st['fences cut'] += bool(merged)
json.dump(cuts, open(f'{WORK}/cuts.json', 'w'))
print(json.dumps({'fronts with cuts': sum(1 for v in cuts.values() if v), 'cuts': sum(len(v) for v in cuts.values())}), flush=True)

# ---------------------------------------------------------------- 4. trees off the paving
tr = np.frombuffer(base64.b64decode(t['trees']), np.int16).reshape(-1, 3).astype(np.int64)
keep, moved, gone = [], 0, 0
offs = sorted([(dx, dz) for dx in np.arange(-4, 4.01, 0.2) for dz in np.arange(-4, 4.01, 0.2) if 0 < math.hypot(dx, dz) <= 4],
              key=lambda p: math.hypot(*p))
ring = [(0.6 * math.cos(a), 0.6 * math.sin(a)) for a in np.linspace(0, 2 * math.pi, 8, endpoint=False)]
roofs_at = {}


def under_roof(x, z):
    R, C = square_of(x, z)
    if (R, C) not in roofs_at:
        if len(roofs_at) > 2:
            roofs_at.pop(next(iter(roofs_at)))
        roofs_at[(R, C)] = roof_square(R, C)
    X0, Z0 = origin(R, C)
    rf = roofs_at[(R, C)]
    return bool(rf[min(max(int((z - Z0) / MZ), 0), NN - 1), min(max(int((x - X0) / MX), 0), NN - 1)])


# the streets' carriageways, as segments with half their width: asphalt counts as paving for a tree only on a street (a
# tree in a car park's asphalt, where the plan draws no islands, stays)
SEG = []
for r in t['roads']:
    if r[0] > 3 or r[2] & 1:
        continue
    p = np.array(r[5], float).reshape(-1, 2) / 10
    for q0, q1 in zip(p[:-1], p[1:]):
        SEG.append([q0[0], q0[1], q1[0], q1[1], r[3] / 20])
SEG = np.array(SEG)
SEG_AT = defaultdict(list)                 # segments by 40 m cell (any cell their box touches, 15 m round it)
for j, (ax, az, bx, bz, hw) in enumerate(SEG):
    for cx in range(int((min(ax, bx) - 15) // 40), int((max(ax, bx) + 15) // 40) + 1):
        for cz in range(int((min(az, bz) - 15) // 40), int((max(az, bz) + 15) // 40) + 1):
            SEG_AT[(cx, cz)].append(j)
SEG_AT = {k: np.array(v) for k, v in SEG_AT.items()}


def on_street(x, z, pad=0.6):
    j = SEG_AT.get((int(x // 40), int(z // 40)))
    if j is None:
        return False
    ax, az, bx, bz, hw = SEG[j].T
    dx, dz = bx - ax, bz - az; l2 = np.maximum(dx * dx + dz * dz, 1e-9)
    s = np.clip(((x - ax) * dx + (z - az) * dz) / l2, 0, 1)
    return bool((np.hypot(x - ax - s * dx, z - az - s * dz) < hw + pad).any())


def bad(x, z):
    k = kind_final(x, z)
    return k == CONC or (k == ASPH and on_street(x, z, 0.0))


def clear(x, z):
    return not bad(x, z) and all(kind_final(x + a, z + b) != CONC for a, b in ring) and not on_street(x, z) and not under_roof(x, z)


order = np.lexsort((tr[:, 0], tr[:, 1] // 400))
for idx in order:
    qx, qz, qs = tr[idx]
    x, z = qx / 4, qz / 4
    if not (-SX / 2 < x < SX / 2 and -SZ / 2 < z < SZ / 2) or under_roof(x, z) or not (bad(x, z) or any(kind_final(x + a, z + b) == CONC for a, b in ring)):
        keep.append([qx, qz, qs]); continue
    to = next(((x + dx, z + dz) for dx, dz in offs if clear(x + dx, z + dz)), None)
    if to:
        keep.append([int(round(to[0] * 4)), int(round(to[1] * 4)), qs]); moved += 1
    else:
        gone += 1
print(json.dumps({'trees': len(tr), 'moved off paving': moved, 'removed': gone}), flush=True)
t['trees'] = base64.b64encode(np.array(keep, np.int16).tobytes()).decode()
t['counts']['trees'] = len(keep)

# ---------------------------------------------------------------- 5. parked cars and front-yard things
CL, CW = 4.5, 1.8
cars = np.frombuffer(base64.b64decode(t['cars']), '<i2').reshape(-1, 4).astype(np.int64)


def in_rect(x, z, N, u, n, a0, a1, v0, v1, pad=0.0):
    dx, dz = x - N[0], z - N[1]; A = dx * u[0] + dz * u[1]; V = dx * n[0] + dz * n[1]
    return a0 - pad <= A <= a1 + pad and v0 - pad <= V <= v1 + pad, A, V


out = []; cst = defaultdict(int)
for qx, qz, qa, qc in cars:
    x, z = qx / 4, qz / 4
    done = False
    for N, u, n, a0, a1, end, cnew in moved_cars:     # a car on a drive that moved goes with it
        ins, A, V = in_rect(x, z, N, u, n, a0, a1, 0, end, 0.5)
        if ins:
            nx, nz = N[0] + u[0] * cnew + n[0] * V, N[1] + u[1] * cnew + n[1] * V
            if kind_final(nx, nz) in PAVED and not under_roof(nx, nz):
                out.append([int(round(nx * 4)), int(round(nz * 4)), qa, qc]); cst['cars moved with their drive'] += 1
            else:
                cst['cars gone with their drive'] += 1
            done = True; break
    if done:
        continue
    blocked = False
    for N, u, n, a0, a1, v0 in gone_cross:              # nobody parks across a crossover
        ins, A, V = in_rect(x, z, N, u, n, a0, a1, v0 - 3.0, 0, 1.2)
        if ins:
            blocked = True; break
    if blocked:
        cst['cars across a new crossover gone'] += 1; continue
    out.append([qx, qz, qa, qc])
t['cars'] = base64.b64encode(np.array(out, '<i2').tobytes()).decode()
t['counts']['cars'] = len(out)
print(json.dumps(dict(cars=len(cars), **cst)), flush=True)

Y = np.fromfile(YARDS, '<i2').reshape(-1, 6).astype(np.int64)
fronts = [(h['_N'], h['_u'], h['_n'], h['_L']) for h in H if h.get('f')]
fr_box = np.array([[min(N[0], N[0] + u[0] * L), min(N[1], N[1] + u[1] * L), max(N[0], N[0] + u[0] * L), max(N[1], N[1] + u[1] * L)] for N, u, n, L in fronts])
yo = []; yst = defaultdict(int)
for row in Y:
    kd, x, z = int(row[0]), row[1] / 10, row[2] / 10
    if kd == 13:                       # a low front fence where Street View saw the real front: gone
        mx, mz = (x + row[4] / 10) / 2, (z + row[5] / 10) / 2
        sel = np.where((fr_box[:, 0] - 3 < mx) & (fr_box[:, 2] + 3 > mx) & (fr_box[:, 1] - 3 < mz) & (fr_box[:, 3] + 3 > mz))[0]
        if any(in_rect(mx, mz, fronts[j][0], fronts[j][1], fronts[j][2], 0, fronts[j][3], -2.0, 2.5)[0] for j in sel):
            yst['front fences gone (the real one is drawn)'] += 1; continue
    elif kd in (1, 2):
        pass                           # pools stay
    elif kind_final(x, z) in PAVED and kind_final(x, z, before=True) not in PAVED:
        yst['yard things on new paving gone'] += 1; continue
    yo.append(row)
print(json.dumps(dict(yards=len(Y), **yst)), flush=True)

if WRITE:
    json.dump(t, open(TOWN, 'w'), separators=(',', ':'))
    np.array(yo, '<i2').tofile(YARDS)
