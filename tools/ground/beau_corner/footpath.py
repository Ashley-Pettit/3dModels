"""Beaudesert Road's footpath where the ground plan had it in pieces (Ash, 21 November 2026, a picture of the east side north of Wharton
Street: "Also this on Beaudesert rd"). The photograph has that stretch under trees, so the plan had found the path as three blobs with
lawn between, wavy, and the ends rounded off.

Each stretch in STRETCHES is redrawn as one even strip a fixed distance from the road's centre line (beau_median/mid.py: mid.npy, the
smooth line midway between the two carriageways), which is where the pieces on either side of the gap already lie, so it meets what is
there at both ends: concrete in the strip, lawn where the old pieces lay outside it. Asphalt (the road, a driveway) is never changed.
  python3 footpath.py [--write]        (python3 ../beau_median/mid.py first)"""
import os, sys, json
import numpy as np
from scipy.spatial import cKDTree
HERE = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, HERE); sys.path.insert(0, os.path.join(HERE, '..', 'beau_median'))
import plan, common as K
WRITE = '--write' in sys.argv
M = np.load(K.work('mid.npy'))
# side: -1 east, +1 west. From station s0 to s1 the strip lies inner to outer metres from the centre line; from `join` on its inner edge
# runs in to the road's edge, to meet the concrete that stands against the kerb from s1. Old concrete out to `clear` goes to lawn.
STRETCHES = [dict(side=-1, s0=196, s1=244, inner=10.45, outer=11.85, join=237, clear=12.7),       # east, north of Wharton Street (Ash's picture)
             dict(side=1, s0=591, s1=606, inner=12.45, outer=13.75, join=602, clear=14.4)]        # west, north of Durack Street: a 6 m gap of the same kind (from past the driveway)

for st in STRETCHES:
    a, b = M[st['s0'] - 4, :2], M[st['s1'] + 4, :2]; pad = 22
    P = plan.Plan(min(a[0], b[0]) - pad, min(a[1], b[1]) - 4, max(a[0], b[0]) + pad, max(a[1], b[1]) + 4)
    # every cell as (station, metres out from the centre line on this side)
    sub = np.linspace(0, len(M) - 1, (len(M) - 1) * 10 + 1); k = np.floor(sub).astype(int).clip(0, len(M) - 2); f = (sub - k)[:, None]
    C = M[k, :2] * (1 - f) + M[k + 1, :2] * f; D = M[k, 2:4] * (1 - f) + M[k + 1, 2:4] * f; D /= np.hypot(*D.T)[:, None]
    _, j = cKDTree(C).query(np.c_[P.X.ravel(), P.Z.ravel()]); j = j.reshape(P.X.shape)
    S = sub[j]; off = ((P.X - C[j, 0]) * -D[j, 1] + (P.Z - C[j, 1]) * D[j, 0]) * st['side']      # + is out from the road on this side
    # the road's edge at each station: the first cell out from the centre that is not asphalt (past the first 2 m)
    edge = {}
    for s in np.arange(st['s0'] - 2, st['s1'] + 3):
        m = (np.abs(S - s) < 0.5) & (off > 2) & (P.K0 != plan.ASPH); edge[int(s)] = float(off[m].min()) if m.any() else np.nan
    e = np.interp(S, sorted(edge), [edge[q] for q in sorted(edge)])
    w = np.clip((S - st['join']) / max(1e-6, st['s1'] - st['join']), 0, 1); w = w * w * (3 - 2 * w)
    inner = st['inner'] + (e - st['inner']) * w
    on = (S >= st['s0']) & (S <= st['s1']) & (off > 2)
    strip = on & (off >= inner) & (off <= st['outer']) & (P.K0 != plan.ASPH)
    old = on & (off >= e - 0.3) & (off <= st['clear']) & ((P.K0 == plan.CONC) | (P.K0 == plan.OTHER)) & ~strip      # (and specks of bare ground along the kerb)
    P.K[old] = plan.LAWN; P.K[strip] = plan.CONC
    ch = P.K != P.K0
    print('stations %d to %d, %s side: strip %.2f to %.2f m; %d cells change (%.0f m2): %d to concrete, %d to lawn' % (
        st['s0'], st['s1'], 'east' if st['side'] < 0 else 'west', st['inner'], st['outer'], ch.sum(), ch.sum() * plan.MX * plan.MZ, (ch & (P.K == plan.CONC)).sum(), (ch & (P.K == plan.LAWN)).sum()))
    print('surface blocks:', P.write(dry=not WRITE))
