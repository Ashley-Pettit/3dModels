"""The line down the middle of a divided road, where an island stands between its two carriageways (22 November 2026).

  python3 medians.py /path/to/town.json "Fairfield Road" ["Evans Road" ...] [--json out.json]

A divided road is two one-way ways with the same name in town.json's roads (flag 4 in field 2). One carriageway is walked every STEP
metres; at each step the nearest point of a carriageway going the other way gives the middle between them and their spacing. The
island is left out (an opening) near any place another street meets either carriageway, and where the two are too close or too far
apart to be one road. What is left, in runs, is what app.html's MOO_MEDIAN holds: [x, z, spacing], the spacing set for a carriageway
7.4 m wide, which is what the app takes off it to get the island's width (a narrower carriageway has the difference taken off its
spacing here, so the island still fills what is between the two).
"""
import sys, json, collections
import numpy as np
argv = sys.argv[1:]; save = argv[argv.index('--json') + 1] if '--json' in argv else None
args = [a for a in argv if a not in ('--json', '--paint') and a != save]; path, names = args[0], args[1:]
T = json.load(open(path)); R = T['roads']; N = T['names']
STEP, OPEN, MINRUN, NEAR, FAR = 5.0, 9.0, 14.0, 5.6, 26.0      # metres: step; clear of a side street's end, plus half its width; shortest island; spacing limits
def pts(r): return np.array(r[5], float).reshape(-1, 2) / 10
def walk(p, step):
    seg = np.hypot(*np.diff(p, axis=0).T); cum = np.r_[0, np.cumsum(seg)]; out = []
    for s in np.arange(0, cum[-1] + 1e-6, step):
        i = min(len(p) - 2, max(0, int(np.searchsorted(cum, s, side='right')) - 1)); t = (s - cum[i]) / max(seg[i], 1e-6); out.append((*(p[i] + (p[i + 1] - p[i]) * t), *((p[i + 1] - p[i]) / max(seg[i], 1e-6))))
    return np.array(out)
def nearest_on(p, q):
    best = (1e9, None, None)
    for a, b in zip(p[:-1], p[1:]):
        d = b - a; L2 = d @ d + 1e-9; t = np.clip(((q - a) @ d) / L2, 0, 1); c = a + d * t; dist = float(np.hypot(*(q - c)))
        if dist < best[0]: best = (dist, c, d / np.sqrt(L2))
    return best
out = {}
for name in names:
    ways = [(i, r, pts(r)) for i, r in enumerate(R) if N[r[4]] == name and r[0] <= 3 and (r[2] & 4)]
    ends = collections.defaultdict(list)                       # every other street's vertices, for the openings
    others = [(pts(r), r[3] / 10) for i, r in enumerate(R) if r[0] <= 4 and not (N[r[4]] == name and (r[2] & 4))]
    own = np.vstack([p for _, _, p in ways]) if ways else np.zeros((0, 2))
    meets = []                                                 # where another street touches a carriageway: its end vertex within 1 m of one of ours
    for p, w in others:
        for e in (p[0], p[-1]):
            if len(own) and np.hypot(own[:, 0] - e[0], own[:, 1] - e[1]).min() < 1.0: meets.append((e[0], e[1], w))
        # a street that crosses without ending there shares a vertex too
        for v in p[1:-1]:
            if len(own) and np.hypot(own[:, 0] - v[0], own[:, 1] - v[1]).min() < 0.3: meets.append((v[0], v[1], w))
    M = np.array(meets) if meets else np.zeros((0, 3))
    runs = []; seen = []
    for wi, r, p in ways:
        W = walk(p, STEP); cur = []
        for x, z, dx, dz in W:
            q = np.array([x, z]); best = (1e9, None, None, None)
            for wj, r2, p2 in ways:
                if wj == wi: continue
                d, c, dirn = nearest_on(p2, q)
                if c is None or d > FAR or dirn @ np.array([dx, dz]) > -0.6: continue       # the other way's traffic runs against ours
                if d < best[0]: best = (d, c, r2[3] / 10, wj)
            ok = best[1] is not None and best[0] >= NEAR
            if ok:
                mid = (q + best[1]) / 2; left = np.array([dz, -dx])                       # the island is on our right (we keep left), so the other carriageway is to the right
                ok = (best[1] - q) @ left < 0                                            # (it would be to the left only where the map has the two crossed over)
                wide = (r[3] / 10 + best[2]) / 2; spacing = best[0] - (wide - 7.4)       # as if both carriageways were 7.4 m wide
                if ok and len(M): ok = not ((np.hypot(M[:, 0] - mid[0], M[:, 1] - mid[1]) < OPEN + M[:, 2] / 2 + best[0] / 2).any())
                if ok and best[0] - wide < 0.9: ok = False                               # no room for an island between the two strips of asphalt
            if ok and any(np.hypot(mid[0] - sx, mid[1] - sz) < STEP * 0.7 for sx, sz in seen): ok = None   # the other carriageway has been here already
            if ok: cur.append([round(float(mid[0]), 1), round(float(mid[1]), 1), round(float(spacing), 1)])
            elif ok is False or ok is None:
                if len(cur) >= 2 and np.hypot(cur[-1][0] - cur[0][0], cur[-1][1] - cur[0][1]) >= MINRUN: runs.append(cur)
                cur = []
        if len(cur) >= 2 and np.hypot(cur[-1][0] - cur[0][0], cur[-1][1] - cur[0][1]) >= MINRUN: runs.append(cur)
        for run in runs: seen.extend((q[0], q[1]) for q in run)
    L = sum(float(np.hypot(*np.diff(np.array(run)[:, :2], axis=0).T).sum()) for run in runs)
    print('%s: %d carriageway pieces, %d places another street meets it, %d islands, %.0f m of island, widths %.1f to %.1f m' % (name, len(ways), len(M), len(runs), L, min((min(q[2] for q in run) for run in runs), default=0) - 7.4, max((max(q[2] for q in run) for run in runs), default=0) - 7.4))
    out[name] = runs
if save: json.dump(out, open(save, 'w'))

# --paint: for a road whose divider is paint, not an island (look at the aerial photograph first: Evans Road and Fairfield Road are
# these): the two solid lines down its middle, as runs of x, z, h (h: each line's distance from the middle: half of what is between
# the two strips of asphalt, 0.25 to 1.5 m), thinned to a point every 12 m at most where the road runs straight. Printed as MOO_CENTRE.
if '--paint' in argv:
    runs = []
    for name in names:
        for run, pieces in ((r, None) for r in out[name]):
            cur = []
            for x, z, sp in run:
                gap = sp - 7.4                                  # what is between the two strips of asphalt
                if gap > 7.5:                                   # too far apart to be one road with a painted middle
                    if len(cur) >= 2: runs.append(cur)
                    cur = []; continue
                cur.append((x, z, round(min(1.5, max(0.25, gap / 2)), 2)))
            if len(cur) >= 2: runs.append(cur)
    joined = True                                               # two runs that meet end to end (each came from a different way) are one line
    while joined:
        joined = False
        for i in range(len(runs)):
            for j in range(len(runs)):
                if i == j: continue
                A, B = runs[i], runs[j]; d = lambda p, q: np.hypot(p[0] - q[0], p[1] - q[1])
                if d(A[-1], B[0]) < 6.5: new = A + B
                elif d(A[-1], B[-1]) < 6.5: new = A + B[::-1]
                elif d(A[0], B[0]) < 6.5: new = A[::-1] + B
                else: continue
                runs = [r for k, r in enumerate(runs) if k not in (i, j)] + [new]; joined = True; break
            if joined: break
    thin = []
    for n, run in enumerate(runs):                              # h eased along the run (a mean over 30 m), so a line does not jog where a way starts
        h = np.array([q[2] for q in run]); k = 3; pad = np.r_[[h[0]] * k, h, [h[-1]] * k]; sm = np.convolve(pad, np.ones(2 * k + 1) / (2 * k + 1), 'valid')
        runs[n] = [(q[0], q[1], round(float(v), 2)) for q, v in zip(run, sm)]
    for run in runs:
        keep = [run[0]]; last = 0
        for i in range(1, len(run) - 1):
            a, b, c = np.array(keep[-1][:2]), np.array(run[i][:2]), np.array(run[i + 1][:2]); d = c - a; off = abs((b - a)[0] * d[1] - (b - a)[1] * d[0]) / (np.hypot(*d) + 1e-9)
            if off > 0.12 or abs(run[i][2] - keep[-1][2]) > 0.12 or np.hypot(*(c - a)) > 12: keep.append(run[i])
        keep.append(run[-1])
        if np.hypot(keep[-1][0] - keep[0][0], keep[-1][1] - keep[0][1]) >= MINRUN: thin.append(keep)
    L = sum(float(np.hypot(*np.diff(np.array(r)[:, :2], axis=0).T).sum()) for r in thin)
    print('paint: %d runs, %d points, %.0f m' % (len(thin), sum(map(len, thin)), L), file=sys.stderr)
    print('  const MOO_CENTRE = [' + ','.join('[' + ','.join('%g,%g,%g' % q for q in r) + ']' for r in thin) + '];')
