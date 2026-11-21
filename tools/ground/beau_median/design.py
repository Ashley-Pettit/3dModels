"""Beaudesert Road's median as the model draws it: the real one (real.py, read off the photograph), kept clear of where the model's own
traffic runs, with gentle edges.

The model's cars on a one-way carriageway run 1.7 m either side of its mapped centre line (moorooka-model.js ?v=58, addTraffic:
two lanes about the dashed line) and are 0.88 m either side of that, so each side of the median has a line it must not cross. Where the
real island is wider than the room, it is cut back to the room; where it lies wholly outside it (a turn pocket has pushed it over), a
narrow strip is kept against that side.
The paint beside it (real.py's arrows and turn lane lines) is kept to the same room.
  python3 design.py design.json       -> islands and paint as stations (for overlay.py) and as model metres (for app.html)"""
import os, sys; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__))); import common as K
import json, numpy as np
from scipy.ndimage import gaussian_filter1d
import real
M = np.load(K.work('mid.npy')); L = len(M)
CAR_IN, MARGIN, WMIN, HUG = 1.7 + 0.88, 0.3, 0.6, 1.2
oS = gaussian_filter1d(np.abs(M[:, 4]), 3, mode='nearest'); oN = gaussian_filter1d(np.abs(M[:, 5]), 3, mode='nearest')
envS = oS - CAR_IN - MARGIN; envN = oN - CAR_IN - MARGIN            # room on the east (southbound) and west (northbound) side of the centre line
def world(s, o):
    k = int(np.clip(np.floor(s), 0, L - 2)); f = s - k
    c = M[k, :2] * (1 - f) + M[k + 1, :2] * f; d = M[k, 2:4] * (1 - f) + M[k + 1, 2:4] * f; d = d / np.hypot(*d); n = np.array([-d[1], d[0]])
    return c + n * o
out = dict(islands=[], env=[[int(s), round(float(envS[s]), 2), round(float(envN[s]), 2)] for s in range(0, L, 2)], trees=[], arrows=[], lines=[], marks=dict(arrows=[], lines=[]))
KIND = {'c': 0, 'p': 1, 'g': 2, 's': 3}
for isl in real.ISLANDS:
    n = np.array(isl['nodes'], float); s0, s1 = n[0, 0], n[-1, 0]
    if s1 > L - 2: s1 = L - 2
    S = np.arange(s0, s1 + 1e-6, 0.5); t = np.interp(S, n[:, 0], n[:, 1]); b = np.interp(S, n[:, 0], n[:, 2])
    a = -np.interp(S, np.arange(L), envS); c = np.interp(S, np.arange(L), envN)        # allowed: a .. c
    room = c - a
    t2 = np.maximum(t, a); b2 = np.minimum(b, c)
    thin = (b2 - t2) < WMIN
    w = np.clip(np.minimum(np.maximum(b - t, WMIN), HUG), 0.45, np.maximum(room, 0.45))   # a strip against the nearer side
    mid_real = (t + b) / 2; mid_room = (a + c) / 2
    lo = np.where(mid_real > mid_room, c - w, a); hi = lo + w
    tiny = room < 0.45; lo = np.where(tiny, mid_room - 0.225, lo); hi = np.where(tiny, mid_room + 0.225, hi)
    t2 = np.where(thin, lo, t2); b2 = np.where(thin, hi, b2)
    # gentle: smooth both edges, then back inside the room, and never thinner than the least
    sg = 2.0 / 0.5
    t3 = gaussian_filter1d(t2, sg, mode='nearest'); b3 = gaussian_filter1d(b2, sg, mode='nearest')
    t3 = np.where(tiny, t3, np.maximum(t3, a)); b3 = np.where(tiny, b3, np.minimum(b3, c))
    short = (b3 - t3) < 0.45; m3 = (t3 + b3) / 2; t3 = np.where(short, m3 - 0.225, t3); b3 = np.where(short, m3 + 0.225, b3)
    # ends: the nose is a rounded cap drawn past the last point, so stop short by its radius
    r0 = min((b3[0] - t3[0]) / 2, 0.9); r1 = min((b3[-1] - t3[-1]) / 2, 0.9)
    keep = (S >= s0 + r0) & (S <= s1 - r1); S, t3, b3 = S[keep], t3[keep], b3[keep]
    if len(S) < 4: continue
    kinds = isl['kinds']; kind = np.array([KIND[[k for q, k in kinds if q <= s + 1e-6][-1] if s >= kinds[0][0] else kinds[0][1]] for s in S])
    # fewer points where it runs straight: keep a point if dropping it would move either edge 4 cm, the kind changes, or it is 5 m on
    idx = [0]
    for i in range(1, len(S) - 1):
        j = idx[-1]; f = (S[i] - S[j]) / (S[i + 1] - S[j])
        # world positions: the centre line bends too
        ok = True
        for q in range(j + 1, i + 1):
            g = (S[q] - S[j]) / (S[i + 1] - S[j])
            for e in (t3, b3):
                p = world(S[q], e[q]); u = world(S[j], e[j]) * (1 - g) + world(S[i + 1], e[i + 1]) * g
                if np.hypot(*(p - u)) > 0.04: ok = False
        if not ok or kind[i] != kind[i - 1] or kind[i + 1] != kind[i] or S[i + 1] - S[j] > 5.0: idx.append(i)
    idx.append(len(S) - 1)
    pts = [[round(float(S[i]), 1), round(float(t3[i]), 2), round(float(b3[i]), 2), int(kind[i])] for i in idx]
    xz = []
    for i in idx:
        e = world(S[i], t3[i]); w_ = world(S[i], b3[i]); xz.append([round(float(e[0]), 2), round(float(e[1]), 2), round(float(w_[0]), 2), round(float(w_[1]), 2), int(kind[i])])
    out['islands'].append(dict(pts=pts, xz=xz))
# trees: only where the island as drawn has room for the trunk (0.5 m in from each edge)
for s, o, size in real.TREES:
    for isl in out['islands']:
        p = np.array(isl['pts'])
        if p[0, 0] <= s <= p[-1, 0]:
            t = np.interp(s, p[:, 0], p[:, 1]); b = np.interp(s, p[:, 0], p[:, 2])
            if b - t >= 1.2:
                o2 = float(np.clip(o, t + 0.5, b - 0.5)); q = world(s, o2); out['trees'].append([round(float(q[0]), 1), round(float(q[1]), 1), size])
# the paint beside it. An arrow is kept only where the cars leave room for it (0.9 m either side of its middle); a line is held to the
# room's edge. Arrows as [x, z, the way it travels (unit x, z), the side its head points to (unit x, z)]; lines as [dashed, [x, z, ...]],
# a point every metre (dashed) or two (solid) so they follow the road and the ground.
room = lambda s: (-float(np.interp(s, np.arange(L), envS)) - MARGIN, float(np.interp(s, np.arange(L), envN)) + MARGIN)   # to the cars' sides
for s, o, hd, bend in real.ARROWS:
    lo, hi = room(s)
    if o - 0.9 < lo or o + 0.9 > hi: print('  arrow at %.0f left out: the traffic runs there' % s); continue
    c = world(s, o); d = world(s + 0.5, o) - world(s - 0.5, o); d /= np.hypot(*d); n = world(s, o + 1) - world(s, o); n /= np.hypot(*n)
    out['arrows'].append([round(float(c[0]), 2), round(float(c[1]), 2), round(float(d[0] * hd), 3), round(float(d[1] * hd), 3), round(float(n[0] * bend), 3), round(float(n[1] * bend), 3)])
    out['marks']['arrows'].append([s, o, hd, bend])
for dash, pts in real.LINES:
    p = np.array(pts, float); step = 1.0 if dash else 2.0; S = np.arange(p[0, 0], p[-1, 0] + 1e-6, step)
    if S[-1] < p[-1, 0] - 0.3: S = np.r_[S, p[-1, 0]]
    o = np.interp(S, p[:, 0], p[:, 1]); xz = []; kept = []
    for s, q in zip(S, o):
        lo, hi = room(s); q = float(np.clip(q, lo + 0.1, hi - 0.1)); w_ = world(s, q); xz += [round(float(w_[0]), 2), round(float(w_[1]), 2)]; kept.append([float(s), q])
    out['lines'].append([int(dash), xz]); out['marks']['lines'].append(dict(dash=int(dash), pts=kept))
json.dump(out, open(sys.argv[1], 'w'))
n = sum(len(i['xz']) for i in out['islands']); print(len(out['islands']), 'islands,', n, 'points,', len(out['trees']), 'trees,', len(out['arrows']), 'arrows,', len(out['lines']), 'lines')
tot = sum(i['pts'][-1][0] - i['pts'][0][0] for i in out['islands']); print('length', round(tot), 'm')
for i in out['islands']:
    p = np.array(i['pts']); w = p[:, 2] - p[:, 1]; print('  %6.1f-%6.1f  width %.2f..%.2f  pts %d' % (p[0, 0], p[-1, 0], w.min(), w.max(), len(p)))
