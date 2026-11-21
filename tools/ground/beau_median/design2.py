"""Beaudesert Road's divider as design. The map has the road as two one-way carriageways for most of its length; the divider runs between
them. So: along each carriageway, find its partner (the other carriageway, running the other way, 4 to 16 m across), take the line midway,
and move it by what the photograph shows (find_median.py's per-metre evidence, a moving median of the difference, at most 1.5 m). Where a
side street meets the road the divider opens, unless the photograph shows it carrying on. Where there is no partner, the evidence alone
places it (as a steady offset), and only where it is seen.
  python3 design2.py raw.json runs.json
Each run is [[x, z, width, green], ...] every 3 m."""
import json, sys
import numpy as np
from scipy.spatial import cKDTree

raw = json.load(open(sys.argv[1]))
t = json.load(open('/home/claude/3dmodels/town3d/moorooka/town.json')); nid = t['names'].index('Beaudesert Road')
ways = {i: np.array(rd[5], float).reshape(-1, 2) / 10 for i, rd in enumerate(t['roads']) if rd[4] == nid and rd[0] <= 1}
oneway = {i: bool(t['roads'][i][2] & 4) for i in ways}
sys.path.insert(0, '/tmp/claude-0/-home-claude/9e6ad34e-1c15-5977-8b6f-12ce5cc5525e/scratchpad/beau'); import aerial as A
other = []
for rd in t['roads']:
    if rd[4] == nid or rd[0] > 5: continue
    p = np.array(rd[5], float).reshape(-1, 2) / 10; other += [p[0], p[-1]]
other = cKDTree(np.array(other))
ev = np.array([[r[0], r[1], r[5], r[6]] for r in raw]); evt = cKDTree(ev[:, :2])

def stations(p, step):
    seg = np.hypot(*np.diff(p, axis=0).T); cum = np.r_[0, np.cumsum(seg)]
    S = np.arange(0, cum[-1] + 1e-6, step)
    out = []
    for s in S:
        i = min(np.searchsorted(cum, s, 'right') - 1, len(seg) - 1); f = (s - cum[i]) / seg[i]
        out.append((p[i] + (p[i + 1] - p[i]) * f, (p[i + 1] - p[i]) / seg[i]))
    return out

# every carriageway's points, with direction, to find partners
allp = []; alld = []; allw = []
for wi, p in ways.items():
    for c, d in stations(p, 1.0): allp.append(c); alld.append(d); allw.append(wi)
allp, alld, allw = np.array(allp), np.array(alld), np.array(allw); allt = cKDTree(allp)

def partner(c, d, wi):
    n = np.array([-d[1], d[0]]); best = None
    for j in allt.query_ball_point(c, 16):
        if allw[j] == wi or alld[j] @ d > -0.85: continue
        v = allp[j] - c; along = v @ d; lat = v @ n
        if abs(along) > 2.5 or not 4 <= abs(lat) <= 16: continue
        if best is None or abs(lat) < abs(best[1]): best = (allp[j], lat)
    return best

runs = []
for wi, p in ways.items():
    pts = []
    for c, d in stations(p, 3.0):
        n = np.array([-d[1], d[0]]); pr = partner(c, d, wi)
        near = evt.query_ball_point(c, 16)
        if pr is not None:
            mid = (c + pr[0]) / 2
            # the photograph's divider within 12 m along: how far across from the midway line
            e = [k for k in near if abs((ev[k, :2] - mid) @ d) < 12 and abs((ev[k, :2] - mid) @ n) < 3]
            shift = float(np.clip(np.median([(ev[k, :2] - mid) @ n for k in e]), -1.5, 1.5)) if len(e) >= 3 else 0.0
            q = mid + n * shift; seen = len(e) >= 3
            w = float(np.median(ev[e, 2])) if seen else 0.6; g = float(np.mean(ev[e, 3])) if seen else 0.0
            pts.append((q, w, g, seen, abs(pr[1])))
        elif oneway[wi]: pts.append(None)   # one way with no partner close by: the divider is the wide ground between, already there
        else:
            e = [k for k in near if abs((ev[k, :2] - c) @ d) < 6]
            if len(e) >= 3:
                q = np.median(ev[e, :2], axis=0); pts.append((q, float(np.median(ev[e, 2])), float(np.mean(ev[e, 3])), True, 0))
            else: pts.append(None)
    # open at side streets unless seen there; a partnerless stretch only where seen
    cur = []
    for item in pts + [None]:
        ok = item is not None and (item[3] or not other.query_ball_point(item[0], 12))
        if ok:
            q = item[0]; u = np.linspace(-1.5, 1.5, 13); X, Z = np.meshgrid(q[0] + u, q[1] + u); rgb = A.sample(X, Z)
            gr = float(((rgb[..., 1] - np.maximum(rgb[..., 0], rgb[..., 2])) >= 6).mean()) if not np.isnan(rgb).any() else 0.0
            sep = item[4]; cap = max(0.6, sep - 13) if sep else 4
            w = 2.4 if gr >= 0.3 else float(np.clip(item[1], 0.6, 1.5)); w = min(w, cap)
            cur.append([round(float(q[0]), 2), round(float(q[1]), 2), round(w, 2), round(gr, 2)])
        else:
            if len(cur) >= 4: runs.append(cur)
            cur = []

# the two carriageways of a pair give the same divider: keep the first, drop what lies within 2 m of a kept one
runs.sort(key=lambda r: -len(r)); out = []; acc = np.zeros((0, 2))
for run in runs:
    a = np.array(run)[:, :2]
    fresh = cKDTree(acc).query(a)[0] > 2.0 if len(acc) else np.ones(len(a), bool)
    cur = []
    for q, f in zip(run, fresh):
        if f: cur.append(q)
        else:
            if len(cur) >= 4: out.append(cur)
            cur = []
    if len(cur) >= 4: out.append(cur)
    acc = np.vstack([acc, a])
json.dump(out, open(sys.argv[2], 'w'))
print(len(out), 'runs,', round(sum(np.hypot(*np.diff(np.array(r)[:, :2], axis=0).T).sum() for r in out)), 'm')
