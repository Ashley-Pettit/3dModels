"""Sheets of the straightened photograph to read the median off by eye: three rows of 130 m of station to a sheet, 11 m either side of
the centre line, with the station along the top, the offset down the side and a lattice of dots (every 5 m along, every metre across;
cyan on the centre line). With an overlay (overlay.py) the lines in it are drawn over the photograph, to check a reading or a design.
  python3 sheets.py OUT_PREFIX [overlay.json]"""
import os, sys; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__))); import common as K
import json, numpy as np
from PIL import Image, ImageDraw, ImageFont
S = np.load(K.work('strip.npy')); RES, HALF = 0.1, 16.0
LEN, ROWS, CROP = 130, 3, 11.0   # metres a row, rows a sheet, metres shown either side of the centre line
ov = json.load(open(sys.argv[2])) if len(sys.argv) > 2 else {}
r0 = int((HALF - CROP) / RES); r1 = S.shape[0] - r0; H = r1 - r0; SC = 2
try: font = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 15)
except Exception: font = ImageFont.load_default()
total = S.shape[1] * RES; n = int(np.ceil(total / (LEN * ROWS)))
for sh in range(n):
    W = int(LEN / RES); im = Image.new('RGB', (W + 60, ROWS * (H * SC // 1 + 34)), (20, 20, 20)); dr = ImageDraw.Draw(im)
    for r in range(ROWS):
        s0 = (sh * ROWS + r) * LEN; c0 = int(s0 / RES); c1 = min(S.shape[1], c0 + W)
        if c0 >= S.shape[1]: break
        y0 = r * (H * SC + 34) + 24
        piece = Image.fromarray(S[r0:r1, c0:c1]).resize((c1 - c0, H * SC), Image.BILINEAR); im.paste(piece, (50, y0))
        Y = lambda lat: y0 + (lat + CROP) / RES * SC; X = lambda s: 50 + (s - s0) / RES
        for s in range(int(s0), int(s0 + LEN) + 1, 10):
            if s > total: break
            dr.line([X(s), y0 - 6, X(s), y0], fill=(255, 255, 0)); dr.text((X(s) - 12, y0 - 23), str(s), fill=(255, 255, 0), font=font)
        for lat in (-10, -5, 0, 5, 10):
            dr.line([44, Y(lat), 50, Y(lat)], fill=(255, 255, 0)); dr.text((4, Y(lat) - 8), '%+d' % lat, fill=(255, 255, 0), font=font)
            dr.line([50 + (c1 - c0), Y(lat), 56 + (c1 - c0), Y(lat)], fill=(255, 255, 0))
        for s in range(int(s0), int(s0 + LEN) + 1, 5):   # a lattice of dots to read offsets by: every 5 m along, every metre across (cyan at 0)
            if s > total: break
            for lat in range(-7, 8): dr.rectangle([X(s) - 1, Y(lat) - 1, X(s), Y(lat)], fill=(0, 255, 255) if lat == 0 else (255, 60, 255) if lat % 5 == 0 else (255, 255, 0))
        for name, o in ov.items():
            col = tuple(o.get('col', [255, 0, 0]))
            for line in o['lines']:
                pts = [(X(s), Y(l)) for s, l in line if s0 - 1 <= s <= s0 + LEN + 1]
                if len(pts) > 1: dr.line(pts, fill=col, width=o.get('w', 2))
    im.save(f'{sys.argv[1]}_{sh}.jpg', quality=88)
print(n, 'sheets')
