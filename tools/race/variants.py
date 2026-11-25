# More ways round Moorooka's race (RACE_MOO_LAPS in app.html): each starts as the lap does (the line, straight up Beaudesert Road),
# then takes a different run of side streets through the north-east before coming down Vendale Avenue and Weir Street to the giant
# possum on Goodwin Terrace, and back round to the line as before. The car part is 2.7 to 3.2 km (a bit longer than the 2.4 km lap),
# no street is driven twice, and the course goes straight across roundabouts (as MOO_RACE). Ash, 26 November 2026: "Can you randomise
# the course a bit? Also a bit longer in the car". Prints the laps to paste into RACE_MOO_LAPS (x, z in decimetres).
#   python3 tools/race/variants.py [count] [seed]
from net import *
import json,sys,random
N=int(sys.argv[1]) if len(sys.argv)>1 else 6; rnd=random.Random(int(sys.argv[2]) if len(sys.argv)>2 else 7)
def on(name,x,z):
    A=nid(name); c=[i for i,s in names_at.items() if A in s]; return min(c,key=lambda j:(X[j]-x)**2+(Z[j]-z)**2)
S=nearest(-170,-296)
HEAD=[on("Beaudesert Road",-291,-1052)]
TAIL=[on("Vendale Avenue",0,-600),on("Goodwin Terrace",24,-285),on("Wall Street",-91,-282),on("Wall Street",-69,-202)]
POSSUM=(23.7,-285.4); PLANE_END=(101.3,-257.9)
# roundabouts: the streets marked as one, gathered into circles
ring=[]
for r in t['roads']:
    if r[2]&2: ring+=[(r[5][i]/10,r[5][i+1]/10) for i in range(0,len(r[5]),2)]
RB=[]
for x,z in ring:
    for c in RB:
        if math.hypot(c[0]/c[2]-x,c[1]/c[2]-z)<30: c[0]+=x;c[1]+=z;c[2]+=1;c[3].append((x,z));break
    else: RB.append([x,z,1,[(x,z)]])
RB=[(c[0]/c[2],c[1]/c[2],max(math.hypot(x-c[0]/c[2],z-c[1]/c[2]) for x,z in c[3])) for c in RB]
# side streets to pass through: points on the smaller streets of the north-east, between Ipswich Road and Vendale Avenue
pool=[i for i in range(len(X)) if -260<X[i]<320 and -1130<Z[i]<-640 and any(e[4]>=3 and e[2]>=0 for e in adj[i])]
def build(W):
    path=[]
    for a,b in zip(W,W[1:]):
        p=shortest(a,b,True,1.0)
        if not p: return None
        path+=p if not path else p[1:]
    return path
def length(path,a=0,b=None):
    b=len(path)-1 if b is None else b
    return sum(math.hypot(X[path[i+1]]-X[path[i]],Z[path[i+1]]-Z[path[i]]) for i in range(a,b))
def chords(Q):
    out=[];i=0
    while i<len(Q):
        hit=next((c for c in RB if math.hypot(Q[i][0]-c[0],Q[i][1]-c[1])<c[2]+8),None)
        if hit:
            j=i
            while j+1<len(Q) and math.hypot(Q[j+1][0]-hit[0],Q[j+1][1]-hit[1])<hit[2]+8: j+=1
            out.append(Q[i])
            if j>i: out.append(Q[j])
            i=j+1
        else: out.append(Q[i]); i+=1
    return out
laps=[];tries=0
while len(laps)<N and tries<6000:
    tries+=1; k=rnd.choice([2,3,3,4]); mid=rnd.sample(pool,k)
    mid.sort(key=lambda j:math.atan2(X[j]-20,-(Z[j]+880)))  # round the north-east clockwise, as the lap goes
    W=[S]+HEAD+mid+TAIL+[S]; path=build(W)
    if not path: continue
    edges=set(); again=0
    for a,b in zip(path,path[1:]):
        e=(min(a,b),max(a,b))
        if e in edges: again+=math.hypot(X[b]-X[a],Z[b]-Z[a])
        edges.add(e)
    if again>30: continue  # (no street driven twice, beyond a few metres at a junction)
    ip=min(range(len(path)),key=lambda i:(X[path[i]]-POSSUM[0])**2+(Z[path[i]]-POSSUM[1])**2)
    car=length(path,0,ip)
    if not 2700<car<3200: continue
    Q=[[X[path[0]],Z[path[0]]]]
    for i in path[1:]:
        if math.hypot(X[i]-Q[-1][0],Z[i]-Q[-1][1])>0.5: Q.append([X[i],Z[i]])
    if math.hypot(Q[-1][0]-Q[0][0],Q[-1][1]-Q[0][1])<0.5: Q=Q[:-1]
    Q=chords(Q)
    tot=sum(math.hypot(Q[(i+1)%len(Q)][0]-Q[i][0],Q[(i+1)%len(Q)][1]-Q[i][1]) for i in range(len(Q)))
    # (the plane's way joins the lap where Weir Street meets it, and the house is found in the last 40% of the lap: both have to hold)
    def along(pt):
        best=(1e9,0);L=0
        for i in range(len(Q)):
            a=Q[i];b=Q[(i+1)%len(Q)];d=math.hypot(b[0]-a[0],b[1]-a[1])
            for q in range(max(1,int(d/2))):
                x=a[0]+(b[0]-a[0])*q/max(1,int(d/2));z=a[1]+(b[1]-a[1])*q/max(1,int(d/2));dd=math.hypot(x-pt[0],z-pt[1])
                if dd<best[0]: best=(dd,L+d*q/max(1,int(d/2)))
            L+=d
        return best
    dp,sp=along(POSSUM);de,se=along(PLANE_END)
    if dp>3 or de>20 or sp<0.6*tot or se<0.6*tot: continue
    names=[]
    for a,b in zip(path,path[1:]):
        e=[x for x in adj[a] if x[0]==b and not x[3]]; nm=NM[e[0][2]] if e and e[0][2]>=0 else None
        if nm and (not names or names[-1]!=nm): names.append(nm)
    if any(names[:-1].count(n)>1 for n in ("Ipswich Road","Beaudesert Road","Longueval Street")): continue  # (no going in and back out again)
    key_=tuple(names)
    if any(l['names']==key_ for l in laps): continue
    laps.append(dict(names=key_,car=round(car),tot=round(tot),pts=[round(v*10) for p in Q for v in p]))
    print('lap %d: car %d m, lap %d m: %s'%(len(laps),car,tot,', '.join(names)),file=sys.stderr)
print('RACE_MOO_LAPS =',json.dumps([l['pts'] for l in laps],separators=(',',':')))
