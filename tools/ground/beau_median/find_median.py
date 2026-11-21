"""Where Beaudesert Road's divider is, read off the 2022 aerial photograph (Ash, 21 November 2026: "Can you fix Beaudesert rd. It's 4 lanes
of traffic with a divider in the middle").

Evidence, per metre of each mapped carriageway: a cross-section of the photograph +-13 m, sorted into road (dark grey, or white paint) and
not road (light concrete, green). A divider is a strip of not-road 0.4 to 7 m across with at least 5.5 m of road on both sides (two lanes
each way). Design: runs of at least 12 m where that holds with a steady offset, smoothed, one per divider (the two mapped carriageways of
a divided section both see the same one), as a centre line with a width and what its top is (concrete or grass).
  python3 find_median.py out.json
"""
import json, sys
import numpy as np
from scipy import ndimage as ndi
sys.path.insert(0, '/tmp/claude-0/-home-claude/9e6ad34e-1c15-5977-8b6f-12ce5cc5525e/scratchpad/beau')
import aerial as A

t = json.load(open('/home/claude/3dmodels/town3d/moorooka/town.json'))
nid = t['names'].index('Beaudesert Road')
STEP, REACH, DS = 0.1, 13.0, 1.0
offs = np.arange(-REACH, REACH + 1e-6, STEP)

def classify(rgb):
    R, G, B = rgb[..., 0], rgb[..., 1], rgb[..., 2]
    V = (R + G + B) / 3; sat = np.max(rgb, -1) - np.min(rgb, -1); green = G - np.maximum(R, B)
    road = (V < 140) & (green < 6)                           # asphalt or its shade (paint and a narrow divider are both light)
    veg = (green >= 6) & (V < 200)
    conc = ~road & ~veg
    k = np.where(road, 0, np.where(veg, 2, 1))              # 0 road, 1 concrete, 2 green
    k[np.isnan(V)] = -1
    return k

def runs(mask):
    lab, n = ndi.label(mask); return [s[0] for s in ndi.find_objects(lab)]

found = []   # per station: x, z, way, station distance, median centre offset, width, green share, direction
for wi, rd in enumerate(t['roads']):
    if rd[4] != nid: continue
    p = np.array(rd[5], float).reshape(-1, 2) / 10
    seg = np.hypot(*np.diff(p, axis=0).T); L = seg.sum(); cum = np.r_[0, np.cumsum(seg)]
    S = np.arange(0.5, L - 0.5, DS)
    if len(S) < 5: continue
    C, D = [], []
    NR, GR, OK = [], [], []
    for s in S:
        i = min(np.searchsorted(cum, s, 'right') - 1, len(seg) - 1); f = (s - cum[i]) / seg[i]
        c = p[i] + (p[i + 1] - p[i]) * f; d = (p[i + 1] - p[i]) / seg[i]; nrm = np.array([-d[1], d[0]])
        k = classify(A.sample(c[0] + nrm[0] * offs, c[1] + nrm[1] * offs))
        C.append(c); D.append(d); OK.append((k >= 0).all()); NR.append(k > 0); GR.append(k == 2)
    C, D = np.array(C), np.array(D); NR = np.array(NR, float); GR = np.array(GR, float); OK = np.array(OK)
    # along the road a divider is continuous and a dashed lane line is not: average over 7 m
    NRs = ndi.uniform_filter1d(NR, 7, axis=0, mode='nearest'); GRs = ndi.uniform_filter1d(GR, 7, axis=0, mode='nearest')
    CAND = []
    for j in range(len(S)):
        if not OK[j]: CAND.append([]); continue
        notroad = NRs[j] > 0.6; road = NRs[j] < 0.45
        notroad = ndi.binary_closing(notroad, np.ones(3))
        cands = []
        for sl in runs(notroad):
            a, b = sl.start, sl.stop; w = (b - a) * STEP
            if not 0.3 <= w <= 7: continue
            left, right = road[max(0, a - 55):a], road[b:b + 55]
            if len(left) < 55 or len(right) < 55 or left.mean() < 0.75 or right.mean() < 0.75: continue
            cands.append((float(offs[(a + b - 1) // 2]), w, float(GRs[j, a:b].mean())))
        CAND.append(cands)
    # Viterbi: the divider is one steady line along the carriageway; "none" costs a little per metre, a jump of offset costs a lot
    NONE, SW = 0.5, 2.5
    J = len(S); cost = [None] * J; back = [None] * J
    prev = [(NONE, None)] + [(0.0, None) for _ in CAND[0]]   # state 0 = none
    cost[0] = [c for c, _ in prev]; back[0] = [None] * len(prev)
    for j in range(1, J):
        cj, bj = [], []
        states = [None] + CAND[j]; pstates = [None] + CAND[j - 1]
        for st in states:
            best = (1e9, 0)
            for pi, ps in enumerate(pstates):
                if st is None and ps is None: tr = 0
                elif st is None or ps is None: tr = SW
                else:
                    do = abs(st[0] - ps[0]); tr = 0 if do <= 0.25 else (do / 0.25) ** 2
                c = cost[j - 1][pi] + tr
                if c < best[0]: best = (c, pi)
            cj.append(best[0] + (NONE if st is None else 0.0)); bj.append(best[1])
        cost[j] = cj; back[j] = bj
    path = [int(np.argmin(cost[J - 1]))]
    for j in range(J - 1, 0, -1): path.append(back[j][path[-1]])
    path = path[::-1]
    for j, si in enumerate(path):
        if si == 0: continue
        o, w, g = CAND[j][si - 1]; nrm = np.array([-D[j][1], D[j][0]]); m = C[j] + nrm * o
        found.append([round(m[0], 2), round(m[1], 2), wi, round(float(S[j]), 1), round(o, 2), round(w, 2), round(g, 2), D[j].tolist()])

json.dump(found, open(sys.argv[1], 'w'))
print(len(found), 'stations with a divider')
