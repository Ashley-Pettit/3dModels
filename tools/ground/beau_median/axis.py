"""Beaudesert Road's two mapped carriageways (town.json has the road as two one-way halves), each chained end to end: chain(south, ...) runs
from the Ipswich Road end south, chain(north, ...) from the south end north.   python3 axis.py   prints the two chains."""
import os, sys; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__))); import common as K
import json, numpy as np
t = json.load(open(K.TOWN))
nid = t['names'].index('Beaudesert Road')
W = {i: np.array(rd[5], float).reshape(-1, 2) / 10 for i, rd in enumerate(t['roads']) if rd[4] == nid and rd[0] == 0 and rd[2] & 4}
def heading(p): d = p[-1] - p[0]; return d / np.hypot(*d)
south = {i: p for i, p in W.items() if heading(p)[1] > 0.3}
north = {i: p for i, p in W.items() if heading(p)[1] < -0.3}
def chain(ways, start_z):
    # start at the way whose first point is nearest the north end, then follow end -> start joins
    rest = dict(ways); cur = min(rest, key=lambda i: abs(rest[i][0][1] - start_z)); out = [cur]; pts = [rest.pop(cur)]
    while True:
        e = pts[-1][-1]; nx = [i for i, p in rest.items() if np.hypot(*(p[0] - e)) < 1.0]
        if not nx: break
        # if it forks, take the one that carries straight on
        d0 = pts[-1][-1] - pts[-1][-2]; d0 /= np.hypot(*d0)
        nx.sort(key=lambda i: -((rest[i][1] - rest[i][0]) / np.hypot(*(rest[i][1] - rest[i][0]))) @ d0)
        out.append(nx[0]); pts.append(rest.pop(nx[0]))
    return out, pts
if __name__ == '__main__':
    ids, pts = chain(south, -1125)
    print('south chain', ids)
    P = np.vstack([pts[0]] + [p[1:] for p in pts]); print('from', P[0], 'to', P[-1], 'len', np.hypot(*np.diff(P, axis=0).T).sum())
    ids2, pts2 = chain(north, 1650)
    print('north chain', ids2)
    P2 = np.vstack([pts2[0]] + [p[1:] for p in pts2]); print('from', P2[0], 'to', P2[-1], 'len', np.hypot(*np.diff(P2, axis=0).T).sum())
    print('south unused', sorted(set(south) - set(ids)), 'north unused', sorted(set(north) - set(ids2)))
