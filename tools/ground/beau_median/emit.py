"""Write the median into app.html: MOO_BEAU (each island as points of [east edge x, z, west edge x, z, kind]), MOO_BEAU_TREES
([x, z, size]) and MOO_BEAU_MARKS (the turn lane arrows and lines) from design.json.   python3 emit.py design.json /path/to/app.html"""
import sys, json, re
D = json.load(open(sys.argv[1])); p = sys.argv[2]; s = open(p, encoding='utf-8').read()
num = lambda v: ('%.2f' % v).rstrip('0').rstrip('.') if isinstance(v, float) else str(v)
beau = '[' + ','.join('[' + ','.join('[' + ','.join(num(v) for v in q) + ']' for q in isl['xz']) + ']' for isl in D['islands']) + ']'
trees = '[' + ','.join('[' + ','.join(num(v) for v in q) + ']' for q in D['trees']) + ']'
marks = '{arrows:[' + ','.join('[' + ','.join(num(v) for v in q) + ']' for q in D['arrows']) + '],lines:[' + ','.join('[%d,[' % d + ','.join(num(v) for v in xz) + ']]' for d, xz in D['lines']) + ']}'
a = s.index("  const MOO_BEAU = "); b = s.index("\n", a)
for name in ("  const MOO_BEAU_TREES = ", "  const MOO_BEAU_MARKS = "):
    if s[b + 1:].startswith(name): b = s.index("\n", b + 1)
s = s[:a] + "  const MOO_BEAU = " + beau + ";\n  const MOO_BEAU_TREES = " + trees + ";\n  const MOO_BEAU_MARKS = " + marks + ";" + s[b:]
open(p, 'w', encoding='utf-8').write(s)
print(len(beau) + len(trees), 'bytes of median,', len(marks), 'of paint')
