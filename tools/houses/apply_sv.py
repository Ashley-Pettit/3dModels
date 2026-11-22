"""What Street View shows of the houses set on their slope, written into MOO_SET (Ash, 22 November 2026: "no point without google
images ... start with redo of the 100 you already do").

streetview.json: one record a house, keyed "x,z" (the house's MOO_SET middle): { w: walls, b: under the floor (letters from PAL below),
e: 1 closed in or 0 on stumps, d: 0 front door at the lower level or 1 up stairs, g: 0 no garage door, n: what was seen }. Houses Street
View doesn't show (trees, a long drive, Google's own blur) have no record and stay as the rule built them.
How each was looked at: https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=<the nearest point of the street>&heading=<towards
the house>, in Chrome, ten seconds for the picture to draw.
  python3 apply_sv.py <app.html> <streetview.json>
"""
import sys, json, re
PAL = dict(W=[240, 238, 232], C=[232, 222, 196], G=[190, 192, 190], D=[96, 100, 104], K=[60, 62, 66], B=[130, 150, 165], P=[188, 204, 214],
           R=[150, 84, 62], O=[181, 101, 63], T=[140, 104, 80], M=[206, 186, 150], Y=[214, 190, 120], N=[130, 150, 120])
fn, sv = sys.argv[1], json.load(open(sys.argv[2])); s = open(fn, encoding='utf-8').read()
i = s.index('  const MOO_SET = ['); j = s.index('\n  ];', i); body = s[i:j]; n = 0
def one(m):
    global n
    parts = [p.strip() for p in re.split(r',(?![^{]*\})', m.group(1))]; key = f'{parts[0]},{parts[1]}'; r = sv.get(key)
    if not r: return m.group(0)
    parts = [p for p in parts if not p.startswith('{')]
    while len(parts) < 5: parts.append('0' if len(parts) == 2 else 'null')
    o = []
    if r.get('w'): o.append('w:[%d,%d,%d]' % tuple(PAL[r['w']]))
    if r.get('b'): o.append('b:[%d,%d,%d]' % tuple(PAL[r['b']]))
    for k in 'edg':
        if r.get(k) is not None: o.append(f'{k}:{int(r[k])}')
    n += 1; return '[' + ','.join(parts) + ',{' + ','.join(o) + '}]'
body = re.sub(r'\[([^\[\]]+)\]', one, body)
open(fn, 'w', encoding='utf-8').write(s[:i] + body + s[j:]); print('houses with Street View written:', n, 'of', len(sv))
