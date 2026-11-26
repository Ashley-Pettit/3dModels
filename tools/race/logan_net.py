# Logan's streets (town3d/logan/roads.bin, names from map.json) joined into a network, as net.py does for Moorooka and Inverloch:
# points within half a metre joined, loose ends within 20 m bridged. For working out Logan's race lap ahead of time.
import json,math,heapq,collections,os,struct
HERE=os.path.dirname(os.path.abspath(__file__)); L=os.path.join(HERE,'..','..','town3d','logan')
M=json.load(open(os.path.join(L,'map.json'))); NM=M['roadNames']
buf=open(os.path.join(L,'roads.bin'),'rb').read(); assert struct.unpack_from('<I',buf,0)[0]==0x3152474c
n=struct.unpack_from('<I',buf,4)[0]; p=8; roads=[]
for i in range(n):
    cls,flags,name,count,x,z=struct.unpack_from('<BBHHii',buf,p); p+=14; pts=[x/4,z/4]
    for k in range(1,count): dx,dz=struct.unpack_from('<hh',buf,p); p+=4; x+=dx; z+=dz; pts+=[x/4,z/4]
    roads.append(dict(cls=cls,flags=flags,name=NM[name] if name<len(NM) else '',pts=pts))
key=lambda x,z:(round(x*2),round(z*2)); ids={};X=[];Z=[];adj=[];names_at=collections.defaultdict(set)
def node(x,z):
    k=key(x,z)
    if k not in ids: ids[k]=len(X);X.append(x);Z.append(z);adj.append([])
    return ids[k]
ends=[]
for r in roads:
    if r['flags']&6: continue  # not slip lanes or roundabouts (as the app)
    q=r['pts'];a=node(q[0],q[1]);ends.append(a);names_at[a].add(r['name'])
    for k in range(2,len(q),2):
        b=node(q[k],q[k+1]);w=math.hypot(X[b]-X[a],Z[b]-Z[a]);names_at[b].add(r['name'])
        if w>0: adj[a].append((b,w,r['name'],r['cls']));adj[b].append((a,w,r['name'],r['cls']))
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
                    d=math.hypot(X[j]-X[i],Z[j]-Z[i])
                    if d<bd: bd=d;best=j
        if best>=0: adj[i].append((best,bd,'',9));adj[best].append((i,bd,'',9))
def nearest(x,z,pred=None):
    return min((i for i in range(len(X)) if pred is None or pred(i)),key=lambda i:(X[i]-x)**2+(Z[i]-z)**2)
def shortest(a,b,avoid=()):
    D={a:0};P={};h=[(0,a)]
    while h:
        d,u=heapq.heappop(h)
        if u==b: break
        if d>D.get(u,1e18): continue
        for v,w,nm,c in adj[u]:
            w2=w*(3 if (u,v) in avoid or (v,u) in avoid else 1)*(1.5 if c>=6 else 1)
            if d+w2<D.get(v,1e18): D[v]=d+w2;P[v]=u;heapq.heappush(h,(d+w2,v))
    if b not in D: return None
    out=[b]
    while out[-1]!=a: out.append(P[out[-1]])
    return out[::-1]
