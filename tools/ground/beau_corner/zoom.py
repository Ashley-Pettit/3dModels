"""An enlargement of the aerial photograph for reading outlines off (and checking them): a dot every metre, a cyan square every 5 m with
its model metres along the top and down the side, and optional lines over it. SC 4 is 2.5 cm a pixel.
  python3 zoom.py OUT.jpg x0 z0 x1 z1 [SC]        or        from zoom import zoom; zoom(out, x0, z0, x1, z1, 4, [(colour, [[x, z], ...], closed)])"""
import os, sys
HERE = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, HERE); sys.path.insert(0, os.path.join(HERE, '..', 'beau_median'))
import math, aer
from PIL import Image, ImageDraw, ImageFont
def zoom(out, x0, z0, x1, z1, SC=4, lines=None, dots=True):
    mpp = 0.1; im = aer.fetch(x0, z0, x1, z1, mpp).convert('RGB'); im = im.resize((im.width * SC, im.height * SC), Image.BICUBIC); dr = ImageDraw.Draw(im)
    font = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 14); PPM = SC / mpp; PX = lambda x: (x - x0) * PPM; PZ = lambda z: (z - z0) * PPM
    for gx in range(math.ceil(x0), int(x1) + 1):
        for gz in range(math.ceil(z0), int(z1) + 1):
            big = gx % 5 == 0 and gz % 5 == 0
            if big: dr.rectangle([PX(gx) - 3, PZ(gz) - 3, PX(gx) + 3, PZ(gz) + 3], outline=(0, 255, 255))
            elif dots: dr.rectangle([PX(gx) - 1, PZ(gz) - 1, PX(gx), PZ(gz)], fill=(255, 255, 0))
    for gx in range(math.ceil(x0 / 5) * 5, int(x1) + 1, 5): dr.text((PX(gx) + 4, 2), str(gx), fill=(255, 255, 0), font=font)
    for gz in range(math.ceil(z0 / 5) * 5, int(z1) + 1, 5): dr.text((2, PZ(gz) + 4), str(gz), fill=(255, 255, 0), font=font)
    for col, pts, closed in (lines or []):
        q = [(PX(a), PZ(b)) for a, b in pts]
        if closed: q.append(q[0])
        dr.line(q, fill=col, width=2)
    im.save(out, quality=90); return im.size
if __name__ == '__main__':
    print(zoom(sys.argv[1], *map(float, sys.argv[2:6]), SC=int(sys.argv[6]) if len(sys.argv) > 6 else 4))
