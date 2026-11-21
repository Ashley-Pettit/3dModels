"""Beaudesert Road's centre line: midway between its two mapped carriageways, every metre, smoothed (5 m). Saved as mid.npy in the work
folder: [x, z, direction x, direction z, offset of the southbound carriageway's line, offset of the northbound one's] per metre of
station, station 0 at the Ipswich Road end. Offsets are across the road, + to the west (the right, heading south).   python3 mid.py"""
import os, sys; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__))); import common as K
import numpy as np
from scipy.spatial import cKDTree
from scipy.ndimage import gaussian_filter1d
import axis as A
def resample(P, step=1.0):
    seg = np.hypot(*np.diff(P, axis=0).T); P = P[np.r_[True, seg > 1e-6]]; seg = np.hypot(*np.diff(P, axis=0).T)
    cum = np.r_[0, np.cumsum(seg)]; s = np.arange(0, cum[-1], step)
    return np.c_[np.interp(s, cum, P[:, 0]), np.interp(s, cum, P[:, 1])]
def build(s0=225, s1=2790, sigma=5.0):
    ids, pts = A.chain(A.south, -1125); S = np.vstack([pts[0]] + [p[1:] for p in pts])
    ids2, pts2 = A.chain(A.north, 1650); N = np.vstack([pts2[0]] + [p[1:] for p in pts2])[::-1]
    Sp = resample(S, 0.5); Np = resample(N, 0.25); tn = cKDTree(Np)
    Sp = Sp[int(s0 * 2):int(s1 * 2)]
    d, j = tn.query(Sp); mid = (Sp + Np[j]) / 2
    # even stations along the midline itself, then smooth
    m = resample(mid, 1.0)
    ms = np.c_[gaussian_filter1d(m[:, 0], sigma, mode='nearest'), gaussian_filter1d(m[:, 1], sigma, mode='nearest')]
    ms = resample(ms, 1.0)
    dd = np.gradient(ms, axis=0); dd /= np.hypot(*dd.T)[:, None]
    ts = cKDTree(Sp); tN = cKDTree(Np)
    n = np.c_[-dd[:, 1], dd[:, 0]]
    # the two carriageways' centre lines as offsets from the smoothed line (+ = to the right heading south = west)
    _, a = ts.query(ms); _, b = tN.query(ms)
    oS = np.einsum('ij,ij->i', Sp[a] - ms, n); oN = np.einsum('ij,ij->i', Np[b] - ms, n)
    return np.c_[ms, dd, oS, oN]
if __name__ == '__main__':
    M = build(); np.save(K.work('mid.npy'), M)
    print(len(M), 'm; from', M[0, :2].round(1), 'to', M[-1, :2].round(1))
