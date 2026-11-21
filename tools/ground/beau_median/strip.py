"""Straighten the aerial photograph along Beaudesert Road's centre line (mid.npy): strip.npy in the work folder is [across the road (rows,
-16 to 16 m, + the west side), station (columns), rgb] at 0.1 m a pixel. Fetches the photograph in 200 m blocks.   python3 strip.py"""
import os, sys; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__))); import common as K
import numpy as np
import aer
M = np.load(K.work('mid.npy')); RES, HALF, T = 0.1, 16.0, 200
tiles = {}
def tile(i, j):
    if (i, j) not in tiles:
        im = aer.fetch(i * T, j * T, (i + 1) * T, (j + 1) * T, RES); tiles[(i, j)] = None if im is None else np.asarray(im, np.float32)
    return tiles[(i, j)]
def sample(x, z):
    out = np.zeros(x.shape + (3,), np.float32); i = np.floor(x / T).astype(int); j = np.floor(z / T).astype(int)
    for (a, b) in set(zip(i.ravel().tolist(), j.ravel().tolist())):
        t = tile(a, b); m = (i == a) & (j == b)
        if t is None: continue
        px = np.clip(((x[m] - a * T) / RES).astype(int), 0, t.shape[1] - 1); pz = np.clip(((z[m] - b * T) / RES).astype(int), 0, t.shape[0] - 1)
        out[m] = t[pz, px]
    return out
if __name__ == '__main__':
    s = np.arange(0, len(M) - 1, RES); k = np.floor(s).astype(int); f = (s - k)[:, None]
    c = M[k, :2] * (1 - f) + M[k + 1, :2] * f; d = M[k, 2:4] * (1 - f) + M[k + 1, 2:4] * f; d /= np.hypot(*d.T)[:, None]; n = np.c_[-d[:, 1], d[:, 0]]
    lat = np.arange(-HALF, HALF + 1e-6, RES)
    X = c[None, :, 0] + n[None, :, 0] * lat[:, None]; Z = c[None, :, 1] + n[None, :, 1] * lat[:, None]
    S = sample(X, Z).astype(np.uint8); np.save(K.work('strip.npy'), S); print(S.shape, len(tiles), 'tiles')
