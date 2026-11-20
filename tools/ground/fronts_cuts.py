"""Write fronts_ground.py's fence cuts into MOO_LITE in app.html: each house front (not a business with a forecourt)
loses its own gate gap and drive slab (`gap`, `d`; the ground draws the paving now) and gets `c`, the places its fence
opens where the ground's paving crosses it.

  python3 fronts_cuts.py <app.html> <work dir>/cuts.json
"""
import json, re, sys

APP, CUTS = sys.argv[1:3]
cuts = json.load(open(CUTS))
src = open(APP).read()
i0 = src.index('  const MOO_LITE = [\n'); i1 = src.index('\n  ];', i0)
out, n = [], 0
for ln in src[i0:i1].split('\n'):
    m = re.match(r'(\s*\{)(.*)(\}\s*,?\s*//\s*)(.+?)\s*$', ln)
    if not m or re.search(r'\bp: \[', ln):
        out.append(ln); continue
    body, name = m.group(2), m.group(4)
    new = re.sub(r',\s*gap:\s*\[[^\]]*\]', '', body)
    new = re.sub(r',\s*d:\s*\[[^\]]*\]', '', new).rstrip()
    new = re.sub(r',\s*c:\s*\[\[[^\n]*?\]\](?=\s*$|,\s*[a-z]+:)', '', new).rstrip()  # (a run again replaces c, not adds another)
    c = cuts.get(name)
    if c:
        new += ', c: ' + json.dumps(c)
    new = new + ' '
    if new != body:
        n += 1
    out.append(m.group(1) + new + m.group(3) + name)
src = src[:i0] + '\n'.join(out) + src[i1:]
open(APP, 'w').write(src)
print(json.dumps({'fronts rewritten': n}))
