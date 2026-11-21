"""The 2022 Queensland 10 cm aerial photograph, by model metres. Blocks are the 16 x 16 grid of the model, each fetched with a 32 pixel
margin (as build_surface.py does), cached in scratchpad/aer/.
  from aerial import sample, ensure
"""
import os, sys, time
import numpy as np
from PIL import Image
sys.path.insert(0, '/home/claude/ai-forge/scripts/moorooka')
import build_data as B
import fetch_data as F

GRID, PX, PAD = 16, 2048, 32
CACHE = '/tmp/claude-0/-home-claude/9e6ad34e-1c15-5977-8b6f-12ce5cc5525e/scratchpad/aer'
SRC = ['/home/claude/ai-forge/scripts/moorooka/raw', CACHE]

def box(r, c, pad=0):
    w = B.W + (B.E - B.W) * c / GRID; e = B.W + (B.E - B.W) * (c + 1) / GRID
    n = B.N - (B.N - B.S) * r / GRID; s = B.N - (B.N - B.S) * (r + 1) / GRID
    mx, my = (e - w) * pad / PX, (n - s) * pad / PX
    return w - mx, s - my, e + mx, n + my

def path(r, c):
    for d in SRC:
        p = f'{d}/sharp_{r}_{c}.jpg'
        if os.path.exists(p): return p
    return None

def fetch(r, c):
    w, s, e, n = box(r, c, PAD); width = PX + 2 * PAD; height = int(round(width * (n - s) / (e - w)))
    params = {"bbox": "%.8f,%.8f,%.8f,%.8f" % (w, s, e, n), "bboxSR": 4326, "imageSR": 4326, "size": "%d,%d" % (width, height),
              "format": "jpgpng", "f": "json", "interpolation": "RSP_BilinearInterpolation", "compressionQuality": 90}
    info = F.get(F.IMG + "/Basemaps/LatestStateProgram_AllUsers/ImageServer/exportImage", params)
    data = F.get(info["href"], binary=True)
    os.makedirs(CACHE, exist_ok=True)
    open(f'{CACHE}/sharp_{r}_{c}.jpg', 'wb').write(data); time.sleep(0.3)

def to_ll(x, z):
    return x / B.MX + B.LON0, B.LAT0 - z / B.MY

def block_of(x, z):
    lon, lat = to_ll(x, z)
    return int((B.N - lat) / (B.N - B.S) * GRID), int((lon - B.W) / (B.E - B.W) * GRID)

def ensure(points):
    need = {block_of(x, z) for x, z in points}
    for r, c in sorted(need):
        if 0 <= r < GRID and 0 <= c < GRID and not path(r, c): print('fetch', r, c); fetch(r, c)

_im = {}
def img(r, c):
    if (r, c) not in _im:
        p = path(r, c); _im[r, c] = np.asarray(Image.open(p).convert('RGB')) if p else None
    return _im[r, c]

def sample(xs, zs):
    """RGB at model points (arrays), nearest pixel; NaN where there is no photograph."""
    xs, zs = np.asarray(xs, float), np.asarray(zs, float)
    out = np.full(xs.shape + (3,), np.nan)
    lon, lat = to_ll(xs, zs)
    rr = ((B.N - lat) / (B.N - B.S) * GRID).astype(int); cc = ((lon - B.W) / (B.E - B.W) * GRID).astype(int)
    for (r, c) in set(zip(rr.ravel().tolist(), cc.ravel().tolist())):
        a = img(r, c)
        if a is None: continue
        m = (rr == r) & (cc == c); w, s, e, n = box(r, c, PAD); H, W = a.shape[:2]
        u = np.clip(((lon[m] - w) / (e - w) * W).astype(int), 0, W - 1); v = np.clip(((n - lat[m]) / (n - s) * H).astype(int), 0, H - 1)
        out[m] = a[v, u]
    return out
