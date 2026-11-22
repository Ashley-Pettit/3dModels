"""Add a batch of rebuilt houses to MOO_SET in app.html (see set_on_slope.py).
  python3 add_set.py <app.html> <picks.json from pick_sunk.py> <roofs: one digit a house, 0 as the data, 1 hip, 2 gable, 3 flat> "<what this batch is>"
"""
import sys, json
fn, picks, roofs, note = sys.argv[1], json.load(open(sys.argv[2])), sys.argv[3], sys.argv[4]
assert len(roofs) == len(picks), (len(roofs), len(picks))
s = open(fn, encoding='utf-8').read()
HEAD = '''  // ---- houses set on their slope (Ash, 22 November 2026: "a lot of the houses are in the ground. If they are I want you to rebuild them in
  // low res ... make the houses like the real thing but in low res"). A house's floor is the ground at its middle, so on a slope its
  // uphill walls stood in the dirt. Each house listed here is rebuilt by the model (moorooka-model.js ?v=62, tools/houses/set_on_slope.py)
  // the way Brisbane's hillside houses are built: the roof where the survey has it, the floor a storey under it and never below the
  // uphill ground, and under the floor a closed-in lower level (with a garage door where the drive meets the house) or stumps behind
  // battens, with a landing and stairs at the front door and a pad joining them to the path. No memory to speak of: about 30 bytes a
  // house here and some 150 more triangles in the suburb's own building pieces (no new draw calls).
  // [x, z of the building's middle, the roof on the Queensland aerial photo (0 as the data has it, 1 hip, 2 gable, 3 flat or a low
  // skillion), then where the drive meets the house (from the ground plan) if it does, then what Street View shows once it is checked:
  // { w: wall colour, b: the colour under the floor, e: 1 closed in or 0 on stumps }]. Picked by tools/houses/pick_sunk.py, worst first.
  const MOO_SET = [
  ];
  { const cells = new Map(); for (const q of MOO_SET) { const k = Math.floor(q[0] / 4) + "_" + Math.floor(q[1] / 4); let l = cells.get(k); if (!l) cells.set(k, l = []); l.push(q); }
    window.anSet = (x, z) => { const cx = Math.floor(x / 4), cz = Math.floor(z / 4);
      for (let a = -1; a <= 1; a++) for (let b = -1; b <= 1; b++) { const l = cells.get((cx + a) + "_" + (cz + b)); if (l) for (const q of l) if (Math.abs(q[0] - x) < 0.5 && Math.abs(q[1] - z) < 0.5) return q; }
      return null; }; }
'''
if '  const MOO_SET = [' not in s:
    anchor = '  window.anStyle = (x, z) =>'; assert s.count(anchor) == 1
    i = s.index(anchor); s = s[:i] + HEAD + s[i:]
i = s.index('  const MOO_SET = ['); j = s.index('\n  ];', i)
rows = [f'    // {note}']
line = '   '
for r, k in zip(picks, roofs):
    e = [r['x'], r['z'], int(k)] + (r['drive'] or [])
    while len(e) > 2 and e[-1] == 0 and len(e) == 3: e.pop()
    t = ' [' + ','.join(('%g' % v) for v in e) + '],'
    if len(line) + len(t) > 150: rows.append(line); line = '   '
    line += t
rows.append(line)
s = s[:j] + '\n' + '\n'.join(rows) + s[j:]
open(fn, 'w', encoding='utf-8').write(s); print('added', len(picks))
