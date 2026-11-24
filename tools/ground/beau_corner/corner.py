"""The Bohain Street corner of Beaudesert Road, made from shapes.py (Ash, 21 November 2026, a picture of the corner: "Fix this up").

What it makes:
- the island between Bohain Street's two arms and the planted north end of the median as meshes for app.html (MOO_CORNER): tops (a
  kerb edge 0.22 m wide, concrete, garden bed) as triangles on shared points, the walls round them, shrubs for the beds, the white lines
  painted round the island and the give way line. Every point is lifted onto the ground by the app, so points are at most 2 m apart;
- the ground plan round the island (surface blocks): asphalt up to its kerb, the island itself as bed and concrete;
- kerbOff in town.json: the model's own kerbs along the island's sides (they follow the mapped streets, up to 2 m from the real kerb);
- edits.json: the 16 strokes that painted the island by hand on 15 November 2026, which this replaces;
- the junction's outer sides, east of the island (shapes.py JN_*; Ash, 25 November 2026: "Note broken footpath, grass and road issue"):
  the ground plan's road edge along the park side's kerb line and along the house side's, the footpath carried round the house side's
  corner behind that kerb, the park side's kerb as a strip for MOO_CORNER (k: drawn only where the model draws kerbs), and the model's
  own kerb points along it added to kerbOff.

  python3 corner.py APP_HTML [--kerbs KERB_DUMP.json] [--write]      without --write it only reports, and saves corner.json for check.py
KERB_DUMP.json is every kerb point the model draws (window.anKerbDump = [] before it loads, saved after)."""
import os, sys, json, re, base64
import numpy as np
from scipy.spatial import Delaunay, cKDTree
from matplotlib.path import Path
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import shapes as S, plan
APP = sys.argv[1]; WRITE = '--write' in sys.argv; KERBS = sys.argv[sys.argv.index('--kerbs') + 1] if '--kerbs' in sys.argv else None
EDGE_W, LINE_OFF, RNG = 0.22, 0.31, np.random.default_rng(4105)      # (the painted lines 0.31 m out from the kerb, as the median's are)

def densify(pts, step, closed=True):
    pts = [np.array(p, float) for p in pts]; out = []
    for a, b in zip(pts, pts[1:] + (pts[:1] if closed else [])):
        n = max(1, int(np.ceil(np.hypot(*(b - a)) / step)))
        out += [a + (b - a) * j / n for j in range(n)]
    if not closed: out.append(pts[-1])
    return np.array(out)
def area(P): return 0.5 * float(np.sum(P[:, 0] * np.roll(P[:, 1], -1) - np.roll(P[:, 0], -1) * P[:, 1]))
def normals(P, closed=True):
    """Unit normals at each point of a line, to the left of its direction (mitred, at most 2.2 times as long at a sharp corner)."""
    d = (np.roll(P, -1, 0) - P) if closed else np.vstack([np.diff(P, axis=0), P[-1:] - P[-2:-1]]); d /= np.maximum(np.hypot(*d.T), 1e-9)[:, None]
    dp = np.roll(d, 1, 0) if closed else np.vstack([d[:1], d[:-1]]); nl = np.c_[d[:, 1], -d[:, 0]]; npv = np.c_[dp[:, 1], -dp[:, 0]]
    m = nl + npv; ln = np.maximum(np.hypot(*m.T), 1e-9); m /= ln[:, None]; k = np.minimum(2.2, 1 / np.maximum(0.2, np.einsum('ij,ij->i', m, nl)))
    return m * k[:, None]
def inward(P):
    n = normals(P); c = P.mean(0); test = Path(P).contains_points(P + n * 0.05)
    return n if test.mean() > 0.5 else -n

V, TOPS, SIDES, LINES, SHRUBS = [], {0: [], 1: [], 2: []}, [], [], []     # tops: 0 concrete, 1 garden bed, 2 kerb edge
def vid(p):
    V.append((round(float(p[0]), 2), round(float(p[1]), 2))); return len(V) - 1

def island(outline, concrete, shrub_gap=1.55, open_from=None, bare=lambda x, z: False):
    """An island's mesh. concrete(x, z) says where its top is concrete; the rest is bed. open_from: (i, j) points of the outline between
    which there is no wall or kerb edge (where it runs on into the median)."""
    O = densify(outline, 1.0); n = len(O); nin = inward(O); I = O + nin * EDGE_W
    assert area(O) > 0, 'outlines go clockwise on the map (the island on the right): the app faces the walls by that'
    oi = [vid(p) for p in O]; ii = [vid(p) for p in I]
    # which of the densified outline's stretches are open
    orig = [np.array(p, float) for p in outline]; openseg = np.zeros(n, bool)
    if open_from:
        a, b = orig[open_from[0]], orig[open_from[1]]
        for k in range(n):
            p, q = O[k], O[(k + 1) % n]
            if min(np.hypot(*(p - a)), np.hypot(*(p - b))) < 1e-6 or min(np.hypot(*(q - a)), np.hypot(*(q - b))) < 1e-6:
                on = lambda r: abs((b - a)[0] * (r - a)[1] - (b - a)[1] * (r - a)[0]) / np.hypot(*(b - a)) < 1e-6 and -1e-6 <= (r - a) @ (b - a) / ((b - a) @ (b - a)) <= 1 + 1e-6
                openseg[k] = on(p) and on(q)
    for k in range(n):
        j = (k + 1) % n; kind = 0 if openseg[k] else 2
        TOPS[kind] += [oi[k], oi[j], ii[j], oi[k], ii[j], ii[k]]
    run = []
    for k in range(n + 1):                                   # walls: runs of outline points, the island on their right as they go
        kk = k % n
        if k < n and not openseg[kk]: run.append(oi[kk]); continue
        if k < n: run.append(oi[kk])
        if len(run) > 1: SIDES.append(run)
        run = []
    if len(SIDES) and not openseg.any(): SIDES[-1].append(oi[0])
    # inside the kerb edge: the inner line, the lines where concrete meets bed, and a scatter of points, triangulated together
    PI = Path(I); x0, z0 = I.min(0); x1, z1 = I.max(0)
    g = np.array([(x, z) for x in np.arange(x0, x1, 0.25) for z in np.arange(z0, z1, 0.25)]); g = g[PI.contains_points(g)]
    cg = np.array([concrete(x, z) for x, z in g]); tg = cKDTree(g)
    border = np.array([p for p, c in zip(g, cg) if any(cg[q] != c for q in tg.query_ball_point(p, 0.26))])     # cells where concrete meets bed
    pts = [I]; tI = cKDTree(I)
    if len(border):
        keep = []; 
        for p in border[np.argsort(border[:, 0] * 7 + border[:, 1])]:
            if tI.query(p)[0] > 0.45 and all(np.hypot(*(p - q)) > 0.7 for q in keep): keep.append(p)
        if keep: pts.append(np.array(keep))
    have = cKDTree(np.vstack(pts)); inner = []
    for x in np.arange(x0, x1, 1.9):
        for z in np.arange(z0 + (0.95 if int(round((x - x0) / 1.9)) % 2 else 0), z1, 1.9):
            p = np.array([x, z])
            if PI.contains_point(p) and have.query(p)[0] > 0.8: inner.append(p)
    if inner: pts.append(np.array(inner))
    Pn = np.vstack(pts); ids = ii + [vid(p) for p in Pn[len(I):]]; tri = Delaunay(Pn); got = 0.0
    for a, b, c in tri.simplices:
        A, B, C = Pn[a], Pn[b], Pn[c]; ar = 0.5 * abs((B - A)[0] * (C - A)[1] - (B - A)[1] * (C - A)[0]); m = (A + B + C) / 3
        if ar < 1e-4 or not PI.contains_point(m): continue
        got += ar; TOPS[0 if concrete(*m) else 1] += [ids[a], ids[b], ids[c]]
    assert abs(got - abs(area(I))) < 0.02 * abs(area(I)), ('top does not fill the island', got, abs(area(I)))
    # shrubs in the beds: a jittered grid, clear of the kerb edge and of concrete
    bed = g[~cg]; tb = cKDTree(g[cg]) if cg.any() else None; n0 = len(SHRUBS)
    for x in np.arange(x0, x1, shrub_gap):
        for z in np.arange(z0, z1, shrub_gap):
            p = np.array([x, z]) + RNG.uniform(-0.38, 0.38, 2)
            if not PI.contains_point(p) or concrete(*p) or bare(*p): continue
            room = min(tI.query(p)[0], tb.query(p)[0] if tb is not None else 9)
            if room < 0.5: continue
            r = float(min(room - 0.08, RNG.uniform(0.42, 0.72))); SHRUBS.append([round(float(p[0]), 2), round(float(p[1]), 2), round(r, 2), round(float(RNG.uniform(0.4, 0.85)), 2), int(RNG.integers(0, 6))])
    return dict(outline=O, inner=I, area=abs(area(O)), bed=float(len(bed) * 0.0625), shrubs=len(SHRUBS) - n0)

def offset_line(pts, d, poly):
    """A line d metres outside a polygon, along some of its points."""
    P = densify(pts, 1.5, closed=False); n = normals(P, closed=False); out = Path(np.array(poly)).contains_points(P + n * 0.05)
    return P + (n if out.mean() < 0.5 else -n) * d

# ---- the island between Bohain Street's two arms
path, pad = Path(np.array(S.PATH)), Path(np.array(S.PAD))
tri_conc = lambda x, z: z < S.NOSE_Z or bool(path.contains_point((x, z))) or bool(pad.contains_point((x, z)))
T = island(S.TRI, tri_conc, bare=lambda x, z: z > -1014.2)
tri = [np.array(p, float) for p in S.TRI]
side = {k: [S.TRI[i % len(S.TRI)] for i in range(a, b + 1)] for k, (a, b) in S.TRI_SIDES.items()}
w_line = offset_line(side['w'], LINE_OFF, S.TRI); ne_line = offset_line(side['ne'], LINE_OFF, S.TRI); se_line = offset_line(side['se'], LINE_OFF, S.TRI)
LINES.append([0.12] + [list(S.TIP_S)] + w_line.tolist() + [list(S.TIP_N)])
LINES.append([0.12] + [list(S.TIP_N)] + ne_line.tolist() + [[-250.0, -1030.35], list(S.TIP_E)])
LINES.append([0.12] + [list(S.TIP_E), [-250.0, -1030.1]] + se_line.tolist() + [list(S.TIP_S)])
ga, gb = np.array(S.GIVE_WAY[0]), np.array(S.GIVE_WAY[1]); gl = np.hypot(*(gb - ga)); gd = (gb - ga) / gl
for s0 in np.arange(0.15, gl - 0.5, 1.05): LINES.append([0.32, (ga + gd * s0).tolist(), (ga + gd * (s0 + 0.6)).tolist()])

# ---- the planted north end of the median: its outline runs on into MOO_BEAU's first island
app = open(APP, encoding='utf-8').read()
first = json.loads(re.search(r'const MOO_BEAU = \[\[(\[[^\]]*\])', app).group(1))
E0, W0 = (first[0], first[1]), (first[2], first[3])
nose = S.NOSE_E + [E0, W0] + S.NOSE_W; nbed = Path(np.array(S.NOSE_BED))
N = island(nose, lambda x, z: not nbed.contains_point((x, z)), open_from=(len(S.NOSE_E), len(S.NOSE_E) + 1))
LINES.append([0.12] + offset_line(S.NOSE_E + [E0], LINE_OFF, nose).tolist())
LINES.append([0.12] + offset_line([W0] + S.NOSE_W[:11], LINE_OFF, nose).tolist())
JOIN = [round((E0[0] + W0[0]) / 2, 2), round((E0[1] + W0[1]) / 2, 2)]

for ln in LINES:        # a point every 1.5 m at most along each line, so it follows the ground
    P = densify(ln[1:], 1.5, closed=False); ln[1:] = [[round(float(a), 2), round(float(b), 2)] for a, b in P]
# ---- the park side's kerb east of the island (shapes.JN_KERB_N): a strip EDGE_W wide behind the road's edge, its top and the walls round it,
# kept apart from the islands' (k in MOO_CORNER) because the app draws it only where the model draws kerbs
KN = densify(S.JN_KERB_N, 2.0, closed=False); nk = normals(KN, closed=False)
if (nk[:, 1] > 0).mean() > 0.5: nk = -nk                      # behind the kerb line is north here (the park)
kf = [vid(p) for p in KN]; kb = [vid(p) for p in KN + nk * EDGE_W]; KTOP = []
for i in range(len(KN) - 1): KTOP += [kf[i], kf[i + 1], kb[i + 1], kf[i], kb[i + 1], kb[i]]
KSIDES = [kf[::-1] + kb + [kf[-1]]]                           # one run right round it, the strip on its right
assert area(np.array([V[i] for i in KSIDES[0][:-1]])) > 0
ntri = sum(len(v) for v in TOPS.values()) // 3
print('island: %.0f m2, bed %.0f m2, %d shrubs | median end: %.0f m2, bed %.0f m2, %d shrubs' % (T['area'], T['bed'], T['shrubs'], N['area'], N['bed'], N['shrubs']))
print(len(V), 'points,', ntri, 'top triangles,', sum(len(s) - 1 for s in SIDES), 'wall pieces,', len(LINES), 'lines')

# ---- the ground plan: the island as bed and concrete, and asphalt for 3 m round it (the arms are 5.5 m wide or more)
P = plan.Plan(-282, -1050, -246, -1002); X, Z = P.X, P.Z; isl = plan.inside(S.TRI, X, Z)
dist = np.full(X.shape, 9.0); O = T['outline']
for a, b in zip(O, np.roll(O, -1, 0)):
    d = b - a; L = np.hypot(*d) or 1e-9; u = d / L; tt = np.clip((X - a[0]) * u[0] + (Z - a[1]) * u[1], 0, L); dist = np.minimum(dist, np.hypot(X - a[0] - u[0] * tt, Z - a[1] - u[1] * tt))
conc = isl & ((Z < S.NOSE_Z) | plan.inside(S.PATH, X, Z) | plan.inside(S.PAD, X, Z))      # (the kerb's edge is too thin for the plan: the mesh has it)
P.K[isl & ~conc] = plan.OTHER; P.K[conc] = plan.CONC; P.K[~isl & (dist < 3.0)] = plan.ASPH
changed = int((P.K != P.K0).sum()); print('ground plan: %d cells change (%.0f m2)' % (changed, changed * plan.MX * plan.MZ), {k: int(((P.K == k) & (P.K0 != k)).sum()) for k in range(4)})

# ---- the junction's outer sides: the road's edge along each kerb line, and the footpath round the house side's corner
def junction(P2):
    X2, Z2 = P2.X, P2.Z; K = P2.K; soft = (K == plan.LAWN) | (K == plan.OTHER)
    dn, sn, _ = plan.dist_to_line(S.JN_KERB_N, X2, Z2); n0, n1 = S.JN_KERB_N[0][0], S.JN_KERB_N[-1][0]       # + is south of a line that runs east
    along = (X2 > n0) & (X2 < n1) & (dn < 2.6)
    K[along & (sn > 0) & soft] = plan.ASPH; K[along & (sn < 0) & ((K == plan.ASPH) | (K == plan.OTHER))] = plan.LAWN      # (and the specks of bare ground left along the old edge)
    ds, ss, _ = plan.dist_to_line(S.JN_KERB_S, X2, Z2); s0, s1 = S.JN_KERB_S[0][0] + 0.4, S.JN_KERB_S[-1][0] - 0.4
    along = (X2 > s0) & (X2 < s1) & (ds < 2.6); soft = (K == plan.LAWN) | (K == plan.OTHER)
    K[along & (ss < 0) & soft] = plan.ASPH; K[along & (ss > 0) & ((K == plan.ASPH) | (K == plan.OTHER))] = plan.LAWN
    # the footpath: one band behind the kerb from where the south arm's path is right to where the street's is; what lay elsewhere on that verge goes
    c0, c1 = -250.6, -237.4; verge = (X2 > c0) & (X2 < c1) & (ss > 0) & (ds < 4.3)
    band = verge & (ds >= S.JN_PATH[0]) & (ds <= S.JN_PATH[1])
    K[verge & (K == plan.CONC) & ~band] = plan.LAWN; K[band & (K != plan.ASPH)] = plan.CONC
    return K
P2 = plan.Plan(-256, -1042, -205, -1012)
if WRITE: P.write(); P2 = plan.Plan(-256, -1042, -205, -1012)      # (the island's own change first: the two boxes share blocks)
junction(P2); ch2 = P2.K != P2.K0
print('junction: %d cells change (%.0f m2)' % (ch2.sum(), ch2.sum() * plan.MX * plan.MZ), {('other', 'lawn', 'asphalt', 'concrete')[k]: int((ch2 & (P2.K == k)).sum()) for k in range(4)})

# ---- the model's kerbs to leave out: its kerb points on or within 2.6 m of the island
t = json.load(open(plan.TOWN)); ko = np.frombuffer(base64.b64decode(t['kerbOff']), dtype='<i2').reshape(-1, 2); cells = {(int(a), int(b)) for a, b in ko}; new = set()
if KERBS:
    PT = Path(np.array(S.TRI)); to = cKDTree(O)
    for q in json.load(open(KERBS)):
        x, z = q[1], q[2]
        if -282 < x < -246 and -1050 < z < -1002 and (PT.contains_point((x, z)) or to.query((x, z))[0] < 2.6):
            c = (int(np.floor(x)), int(np.floor(z)))
            if c not in cells: new.add(c)
    kn = np.array(S.JN_KERB_N)
    for q in json.load(open(KERBS)):                              # the park side: the model's kerb points along JN_KERB_N, between its ends
        x, z = q[1], q[2]
        if kn[0, 0] + 0.5 < x < kn[-1, 0] - 0.5 and plan.dist_to_line(S.JN_KERB_N, np.array([[x]]), np.array([[z]]))[0][0, 0] < 2.2:
            c = (int(np.floor(x)), int(np.floor(z)))
            if c not in cells: new.add(c)
    print('kerbs:', len(new), 'new cells to leave out', sorted(new))
# ---- the hand-painted strokes this replaces
ed_path = os.path.join(plan.REPO, 'town3d', 'moorooka', 'edits.json'); ed = json.load(open(ed_path)); PT3 = Path(np.array(S.TRI)); keep = []
for st in ed['paint']:
    q = np.array(st['p'], float).reshape(-1, 2); near = cKDTree(O).query(q)[0]
    old = st['w'] in (2.0, 0.8, 1.5) and all(PT3.contains_point(tuple(p)) or dd < 3.2 for p, dd in zip(q, near))
    if not old: keep.append(st)
print('edits.json:', len(ed['paint']) - len(keep), 'strokes go,', len(keep), 'stay')

for k, ix in list(TOPS.items()) + [(9, KTOP)]:            # every top triangle wound the same way (anticlockwise from above: the app lights a face by its winding)
    for i in range(0, len(ix), 3):
        A, B, C = (np.array(V[ix[i + j]]) for j in range(3))
        if (B[1] - A[1]) * (C[0] - A[0]) - (B[0] - A[0]) * (C[1] - A[1]) < 0: ix[i + 1], ix[i + 2] = ix[i + 2], ix[i + 1]
out = dict(v=[c for p in V for c in p], t=[[k] + TOPS[k] for k in (0, 1, 2)], s=SIDES, b=[c for sh in SHRUBS for c in sh], l=LINES, j=JOIN, k=dict(t=KTOP, s=KSIDES))
json.dump(dict(corner=out, tri=S.TRI, nose=nose, kerb_n=S.JN_KERB_N, kerb_s=S.JN_KERB_S), open(os.path.join(os.environ.get('BEAU_WORK', '/tmp'), 'corner.json'), 'w'))
if WRITE:
    num = lambda v: ('%.2f' % v).rstrip('0').rstrip('.') if isinstance(v, float) else str(v)
    arr = lambda a: '[' + ','.join(arr(x) if isinstance(x, list) else num(x) for x in a) + ']'
    js = '{v:' + arr(out['v']) + ',t:' + arr(out['t']) + ',s:' + arr(out['s']) + ',b:' + arr(out['b']) + ',l:' + arr(out['l']) + ',j:' + arr(out['j']) + ',k:{t:' + arr(KTOP) + ',s:' + arr(KSIDES) + '}}'
    a = app.index('  const MOO_CORNER = '); b = app.index('\n', a); app = app[:a] + '  const MOO_CORNER = ' + js + ';' + app[b:]; open(APP, 'w', encoding='utf-8').write(app)
    print('app.html: MOO_CORNER,', len(js), 'bytes'); print('surface blocks:', P2.write())
    if new:        # town.json is one line: only the kerbOff string is changed
        allc = np.array(sorted(cells | new), dtype='<i2'); raw = open(plan.TOWN, encoding='utf-8').read(); m = re.search(r'"kerbOff":"[^"]*"', raw); assert m
        open(plan.TOWN, 'w', encoding='utf-8').write(raw[:m.start()] + '"kerbOff":"' + base64.b64encode(allc.tobytes()).decode() + '"' + raw[m.end():])
    gone = [json.dumps(st, separators=(',', ':')) for st in ed['paint'] if st not in keep]      # edits.json has a stroke to a line: take those lines out
    lines = open(ed_path, encoding='utf-8').read().split('\n'); kept = [ln for ln in lines if ln.strip().rstrip(',') not in gone]
    assert len(lines) - len(kept) == len(gone), (len(lines) - len(kept), len(gone))
    for i, ln in enumerate(kept):                                    # the last stroke has no comma after it
        if ln.strip().startswith('{"k"') and kept[i + 1].strip().startswith(']'): kept[i] = ln.rstrip().rstrip(',')
    open(ed_path, 'w', encoding='utf-8').write('\n'.join(kept)); json.load(open(ed_path))
