"""Centre each divider point on the strip the photograph shows, and read its width and whether it is planted.
Across the line (+-3 m, 10 cm), averaged 8 m along: not road = planted (green, or mulch brown), concrete (light grey, not paint white).
The strip nearest the line, 0.4 to 4 m across, sets the centre (at most 2.5 m away, smoothed along) and the width; planted when most of it
is green or brown.  python3 refine.py runs.json out.json"""
import json, sys
import numpy as np
from scipy import ndimage as ndi
sys.path.insert(0, '/tmp/claude-0/-home-claude/9e6ad34e-1c15-5977-8b6f-12ce5cc5525e/scratchpad/beau')
import aerial as A
R = json.load(open(sys.argv[1])); out = []
u = np.arange(-3, 3.001, 0.1); al = np.arange(-4, 4.001, 1.0)
for run in R:
    a = np.array(run, float); n = len(a)
    d = np.gradient(a[:, :2], axis=0); d /= np.hypot(*d.T)[:, None] + 1e-9; nr = np.stack([-d[:, 1], d[:, 0]], 1)
    shift = np.full(n, np.nan); wid = np.full(n, np.nan); plant = np.zeros(n)
    for i in range(n):
        X = a[i, 0] + nr[i, 0] * u[None, :] + d[i, 0] * al[:, None]; Z = a[i, 1] + nr[i, 1] * u[None, :] + d[i, 1] * al[:, None]
        rgb = A.sample(X, Z)
        if np.isnan(rgb).any(): continue
        Rr, G, B = rgb[..., 0], rgb[..., 1], rgb[..., 2]; V = rgb.mean(-1); sat = rgb.max(-1) - rgb.min(-1)
        green = (G - np.maximum(Rr, B) >= 5) & (V < 190)
        brown = (Rr > B + 12) & (G > B + 6) & (V < 170)
        conc = (V >= 145) & (V < 195) & (sat < 22)
        road = (V < 145) & (sat < 16) & ~green
        nrd = (green | brown | conc).mean(0); rd = road.mean(0); pl = (green | brown).mean(0)
        m = (nrd > 0.45) & (rd < 0.4)
        m = ndi.binary_closing(m, np.ones(3))
        lab, k = ndi.label(m); best = None
        for sl in ndi.find_objects(lab):
            s0, s1 = sl[0].start, sl[0].stop; w = (s1 - s0) * 0.1
            if not 0.4 <= w <= 4: continue
            c = u[(s0 + s1 - 1) // 2]
            if abs(c) > 2.5: continue
            if best is None or abs(c) < abs(best[0]): best = (c, w, pl[s0:s1].mean())
        if best: shift[i], wid[i], plant[i] = best
    # smooth along; fill where nothing was read
    idx = np.arange(n); ok = ~np.isnan(shift)
    if ok.sum() >= 3:
        sh = np.interp(idx, idx[ok], ndi.median_filter(shift[ok], min(7, ok.sum() | 1), mode='nearest'))
        wd = np.interp(idx, idx[ok], ndi.median_filter(wid[ok], min(9, ok.sum() | 1), mode='nearest'))
        pl = ndi.uniform_filter1d(plant, 5, mode='nearest')
    else:
        sh = np.zeros(n); wd = a[:, 2]; pl = np.zeros(n)
    sh = ndi.uniform_filter1d(sh, 3, mode='nearest')
    q = a[:, :2] + nr * sh[:, None]
    out.append([[round(float(q[i, 0]), 2), round(float(q[i, 1]), 2), round(float(np.clip(wd[i], 0.6, 3.5)), 2), round(float(pl[i]), 2)] for i in range(n)])
json.dump(out, open(sys.argv[2], 'w'))
W = np.concatenate([np.array(r)[:, 2] for r in out]); P = np.concatenate([np.array(r)[:, 3] for r in out])
print(len(out), 'runs; width median', np.median(W), 'planted share', round(float((P > 0.5).mean()), 2))
