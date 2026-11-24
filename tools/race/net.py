# The town's street lines joined into a network, as the GPS does in app.html (points within half a metre joined, loose ends within
# 20 m bridged, one-way carriageways only the way they run), for working out the race's lap ahead of time.
import json,math,heapq,collections,os
HERE=os.path.dirname(os.path.abspath(__file__))
# Moorooka's by default; RACE_TOWN=inverloch for Inverloch's (town3d/town.json)
TOWN=os.environ.get('RACE_TOWN','moorooka')
t=json.load(open(os.path.join(HERE,'..','..','town3d',*(['town.json'] if TOWN=='inverloch' else [TOWN,'town.json']))));NM=t['names']
roads=[dict(cls=r[0],name=r[4],one=bool(r[2]&4),pts=[v/10 for v in r[5]]) for r in t['roads']]
key=lambda x,z:(round(x*2),round(z*2)); ids={};X=[];Z=[];adj=[];names_at=collections.defaultdict(set)
def node(x,z):
    k=key(x,z)
    if k not in ids: ids[k]=len(X);X.append(x);Z.append(z);adj.append([])
    return ids[k]
ends=[]
for ri,r in enumerate(roads):
    p=r['pts'];a=node(p[0],p[1]);ends.append(a);names_at[a].add(r['name'])
    for k in range(2,len(p),2):
        b=node(p[k],p[k+1]);w=math.hypot(X[b]-X[a],Z[b]-Z[a]);names_at[b].add(r['name'])
        if w>0: adj[a].append((b,w,r['name'],0,r['cls']));adj[b].append((a,w,r['name'],1 if r['one'] else 0,r['cls']))
        a=b
    ends.append(a)
cell=collections.defaultdict(list)
for i in range(len(X)): cell[(math.floor(X[i]/25),math.floor(Z[i]/25))].append(i)
for i in ends:
    if len(adj[i])<=1:
        best=-1;bd=20
        for a in (-1,0,1):
            for b in (-1,0,1):
                for j in cell[(math.floor(X[i]/25)+a,math.floor(Z[i]/25)+b)]:
                    if j==i or any(e[0]==j for e in adj[i]): continue
                    dd=math.hypot(X[j]-X[i],Z[j]-Z[i])
                    if 0.6<dd<bd: bd=dd;best=j
        if best>=0: adj[i].append((best,bd,-1,0,9));adj[best].append((i,bd,-1,0,9))
def nearest(x,z):
    return min(range(len(X)),key=lambda j:(X[j]-x)**2+(Z[j]-z)**2)
def shortest(s,t,oneWay=True,minorCost=1.0):
    dist={s:0};prev={s:-1};pn={s:-1};h=[(0,s)]
    while h:
        d,i=heapq.heappop(h)
        if d>dist.get(i,1e18): continue
        if i==t: break
        for j,w,nm,back,cls in adj[i]:
            if oneWay and back: continue
            nd=d+w*(minorCost if cls>=3 else 1)
            if nd<dist.get(j,1e18): dist[j]=nd;prev[j]=i;pn[j]=nm;heapq.heappush(h,(nd,j))
    if t not in dist: return None
    path=[];i=t
    while i>=0: path.append(i);i=prev[i]
    return path[::-1]
def nid(name): return NM.index(name)
def junction(a,b):
    A,B=nid(a),nid(b); return [i for i,s in names_at.items() if A in s and B in s]
