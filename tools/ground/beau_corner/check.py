"""A place checked against the photograph: the aerial photograph of a box of model metres with the ground plan's edges over it (asphalt
blue, concrete white, bare ground brown), the mapped streets' centre lines (red), and the model's kerb points (yellow, corner joins
orange; KERBS.json is window.anKerbDump saved, or - for none).
  python3 check.py OUT.jpg x0 z0 x1 z1 KERBS.json [SURFACE_DIR or -] [outlines.json]"""
import os, sys
HERE = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, HERE); sys.path.insert(0, os.path.join(HERE, '..', 'beau_median'))
import json, math, numpy as np, aer, plan
from PIL import Image, ImageDraw, ImageFont
from scipy import ndimage as ndi
out = sys.argv[1]; x0, z0, x1, z1 = map(float, sys.argv[2:6]); kerbs = json.load(open(sys.argv[6])) if sys.argv[6] != '-' else []
surf = sys.argv[7] if len(sys.argv) > 7 and sys.argv[7] != '-' else plan.SURF
SC = 2; mpp = 0.1; PPM = SC / mpp
im = aer.fetch(x0, z0, x1, z1, mpp).convert('RGB'); im = im.resize((im.width * SC, im.height * SC), Image.LANCZOS); A = np.asarray(im).copy()
W, H = im.size; X, Z = np.meshgrid(x0 + (np.arange(W) + 0.5) / PPM, z0 + (np.arange(H) + 0.5) / PPM)
P = plan.Plan(x0 - 1, z0 - 1, x1 + 1, z1 + 1, surf)
C = np.clip(np.floor((X + plan.SX / 2) / plan.MX).astype(int) - P.c0, 0, P.K.shape[1] - 1); R = np.clip(np.floor((Z + plan.SZ / 2) / plan.MZ).astype(int) - P.r0, 0, P.K.shape[0] - 1); K = P.K[R, C]
for kind, col in ((2, (60, 140, 255)), (3, (255, 255, 255)), (0, (200, 120, 40))):
    m = K == kind; edge = m & ~ndi.binary_erosion(m, iterations=1); A[edge] = col
im = Image.fromarray(A); dr = ImageDraw.Draw(im); font = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 14)
PX = lambda x: (x - x0) * PPM; PZ = lambda z: (z - z0) * PPM
for q in kerbs:
    if x0 <= q[1] <= x1 and z0 <= q[2] <= z1: dr.ellipse([PX(q[1]) - 2, PZ(q[2]) - 2, PX(q[1]) + 2, PZ(q[2]) + 2], fill=(255, 255, 0) if q[0] == 0 else (255, 150, 0)); dr.line([PX(q[1]), PZ(q[2]), PX(q[1] + q[3] * 0.5), PZ(q[2] + q[4] * 0.5)], fill=(255, 255, 0))
for i, rd in enumerate(plan.t['roads']):
    p = np.array(rd[5], float).reshape(-1, 2) / 10
    if p[:, 0].max() < x0 or p[:, 0].min() > x1 or p[:, 1].max() < z0 or p[:, 1].min() > z1 or rd[0] > 5: continue
    dr.line([(PX(a), PZ(b)) for a, b in p], fill=(255, 60, 60), width=1)
for g in range(math.ceil(x0 / 5) * 5, int(x1) + 1, 5): dr.line([PX(g), 0, PX(g), 7], fill=(255, 255, 0)); dr.text((PX(g) + 2, 7), str(g), fill=(255, 255, 0), font=font)
for g in range(math.ceil(z0 / 5) * 5, int(z1) + 1, 5): dr.line([0, PZ(g), 7, PZ(g)], fill=(255, 255, 0)); dr.text((9, PZ(g) - 7), str(g), fill=(255, 255, 0), font=font)
if len(sys.argv) > 8:
    O = json.load(open(sys.argv[8]))
    for name, o in O.items():
        pts = [(PX(p[0]), PZ(p[1])) for p in o['pts']]
        if o.get('closed'): pts.append(pts[0])
        dr.line(pts, fill=tuple(o.get('col', [255, 0, 255])), width=o.get('w', 2))
im.save(out, quality=90); print(im.size)
