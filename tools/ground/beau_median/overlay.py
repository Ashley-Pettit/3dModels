"""An overlay for sheets.py: the median as read (real.py; east edge red, west edge blue, trees white crosses) and, given design.json, as
the model draws it (green) with the room the traffic leaves it (orange).   python3 overlay.py out.json [design.json]"""
import os, sys; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__))); import common as K
import json
import real
ov = {'east': {'col': [255, 60, 60], 'w': 2, 'lines': []}, 'west': {'col': [60, 160, 255], 'w': 2, 'lines': []}, 'trees': {'col': [255, 255, 255], 'w': 2, 'lines': []}}
for isl in real.ISLANDS:
    n = isl['nodes']; ov['east']['lines'].append([[p[0], p[1]] for p in n]); ov['west']['lines'].append([[p[0], p[2]] for p in n])
    ov['east']['lines'].append([[n[0][0], n[0][1]], [n[0][0], n[0][2]]]); ov['east']['lines'].append([[n[-1][0], n[-1][1]], [n[-1][0], n[-1][2]]])
for s, o, k in real.TREES: ov['trees']['lines'].append([[s - 0.6, o], [s + 0.6, o]]); ov['trees']['lines'].append([[s, o - 0.3], [s, o + 0.3]])
if len(sys.argv) > 2:
    D = json.load(open(sys.argv[2])); ov['dE'] = {'col': [0, 255, 0], 'w': 2, 'lines': []}; ov['dW'] = {'col': [0, 255, 0], 'w': 2, 'lines': []}
    for isl in D['islands']: ov['dE']['lines'].append([[p[0], p[1]] for p in isl['pts']]); ov['dW']['lines'].append([[p[0], p[2]] for p in isl['pts']])
    if 'env' in D:
        ov['env'] = {'col': [255, 160, 0], 'w': 1, 'lines': [[[s, -a] for s, a, b in D['env']], [[s, b] for s, a, b in D['env']]]}
json.dump(ov, open(sys.argv[1], 'w'))
