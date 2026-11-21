"""A divider is built along a smooth line: resample each run every 3 m and smooth it (Savitzky-Golay over 33 m, second order, so a bend
keeps its curve and a jog of a metre or two goes), twice, dropping points more than 1.2 m off the first pass.
  python3 smooth.py in.json out.json"""
import json, sys
import numpy as np
from scipy.signal import savgol_filter
from scipy import ndimage as ndi
R = json.load(open(sys.argv[1])); out = []
for r in R:
    a = np.array(r, float)
    s = np.r_[0, np.cumsum(np.hypot(*np.diff(a[:, :2], axis=0).T))]
    keep = np.r_[True, np.diff(s) > 0.05]; a, s = a[keep], s[keep]
    if s[-1] < 9: continue
    S = np.linspace(0, s[-1], max(4, int(round(s[-1] / 3)) + 1))
    X = np.interp(S, s, a[:, 0]); Z = np.interp(S, s, a[:, 1]); W = np.interp(S, s, a[:, 2]); P = np.interp(S, s, a[:, 3])
    win = min(11, len(S) - (1 - len(S) % 2))
    if win >= 5:
        for it in range(2):
            Xs = savgol_filter(X, win, 2, mode='interp'); Zs = savgol_filter(Z, win, 2, mode='interp')
            if it == 0:
                off = np.hypot(X - Xs, Z - Zs) > 1.2
                if off.any() and (~off).sum() >= 5:
                    X = np.interp(S, S[~off], X[~off]); Z = np.interp(S, S[~off], Z[~off])
        X, Z = Xs, Zs
        W = ndi.median_filter(W, min(7, len(W)), mode='nearest')
    P = (ndi.uniform_filter1d(P, 3, mode='nearest') > 0.5).astype(int)
    out.append([[round(float(x), 1), round(float(z), 1), round(float(w), 1), int(p)] for x, z, w, p in zip(X, Z, W, P)])
json.dump(out, open(sys.argv[2], 'w'), separators=(',', ':'))
def kinks(R, th=10):
    n = 0
    for r in R:
        a = np.array(r)[:, :2]; d = np.diff(a, axis=0); ang = np.degrees(np.arctan2(d[:, 1], d[:, 0])); n += (np.abs((np.diff(ang) + 180) % 360 - 180) > th).sum()
    return n
print(len(out), 'runs,', sum(len(r) for r in out), 'points, kinks over 10 deg:', kinks(out), ', over 5:', kinks(out, 5))
