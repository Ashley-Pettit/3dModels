"""The Queensland aerial photograph (the State's latest imagery service, 2022 over Moorooka) for a box of model metres, cached in the work
folder. fetch(x0, z0, x1, z1, metres a pixel) -> PIL image, north up. The service widens a box that is not square in degrees, so the
picture is asked for square in degrees and stretched to metres here. Boxes over about 2,000 pixels a side are refused."""
import os, sys; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__))); import common as K
import subprocess
from PIL import Image
LON0, LAT0 = 153.02584000000002, -27.53461; MX, MY = 98781.17895721617, 110811.97014871675
URL = "https://spatial-img.information.qld.gov.au/arcgis/rest/services/Basemaps/LatestStateProgram_AllUsers/ImageServer/exportImage"
CACHE = K.work('aer'); os.makedirs(CACHE, exist_ok=True)
def ll(x, z): return x / MX + LON0, LAT0 - z / MY
def fetch(x0, z0, x1, z1, mpp=0.1):
    name = f'{CACHE}/a_{x0:.0f}_{z0:.0f}_{x1:.0f}_{z1:.0f}_{mpp}.jpg'
    if not os.path.exists(name):
        w, n = ll(x0, z0); e, s = ll(x1, z1); W = int(round((x1 - x0) / mpp)); H = int(round(W * (n - s) / (e - w)))   # square in degrees, or the service widens the box
        q = f"{URL}?bbox={w:.8f},{s:.8f},{e:.8f},{n:.8f}&bboxSR=4326&imageSR=4326&size={W},{H}&format=jpg&f=image&interpolation=RSP_BilinearInterpolation&compressionQuality=85"
        r = subprocess.run(['curl', '-sS', '-m', '90', '-o', name, q], capture_output=True, text=True)
        if r.returncode or os.path.getsize(name) < 5000: print('fetch failed', r.stderr[:200], open(name, 'rb').read()[:200]); os.remove(name); return None
    return Image.open(name).convert('RGB').resize((int(round((x1 - x0) / mpp)), int(round((z1 - z0) / mpp))), Image.BILINEAR)
if __name__ == '__main__':
    x0, z0, x1, z1 = map(float, sys.argv[1:5]); im = fetch(x0, z0, x1, z1, float(sys.argv[5]) if len(sys.argv) > 5 else 0.1); print(im.size if im else None)
