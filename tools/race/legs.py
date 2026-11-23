# The race's possum and plane legs (townRace, RACE_POSSUM and RACE_PLANE in app.html). Since 24 November 2026, third version (Ash: "In the
# race the car section should be about 75% longer and end at giant low res possum house. I should need to get out of my car and walk
# into the possum house. And I become a possum ... The possums quest should initially start straight and then be a fun mini game that
# takes me further away from the starting point. At the end of the possums missions end at a parked plane ... The plane should have to
# fly lowish over moorooka initially straight. Covering a backwards direction to what I drove and played as the possum for"):
# - the car drives the lap (course.py) as far as the giant possum house on Goodwin Terrace, about 2.4 km;
# - the possum runs from its door straight along Goodwin Terrace, then down Homestead and Harlock Streets, along Fegen Drive past the
#   possum's own house, up Kingwell Street and along Mayfield Road to a plane parked facing back west;
# - the plane takes off straight back along Mayfield Road, turns up Weir Street and flies the lap backwards to the line (the lap part
#   is added in app.html, from MOO_RACE).
# Prints the house's place on the lap and the points to paste into RACE_POSSUM and RACE_PLANE (x, z in decimetres).
# python3 tools/race/legs.py
from net import *
import json,re,os
app=open(os.path.join(HERE,'..','..','app.html'),encoding='utf-8').read(); c=json.loads(re.search(r'MOO_RACE = (\[[^\]]*\])',app).group(1))
P=[(c[i]/10,c[i+1]/10) for i in range(0,len(c),2)]
LX=[];LZ=[];LA=[];L=0
for i in range(len(P)):
    a=P[i];b=P[(i+1)%len(P)];d=math.hypot(b[0]-a[0],b[1]-a[1]);k=max(1,math.ceil(d/4))
    for q in range(k): LX.append(a[0]+(b[0]-a[0])*q/k);LZ.append(a[1]+(b[1]-a[1])*q/k);LA.append(L+d*q/k)
    L+=d
def lap_near(x,z): j=min(range(len(LX)),key=lambda i:(LX[i]-x)**2+(LZ[i]-z)**2); return LA[j],LX[j],LZ[j]
def on(name,x,z):
    A=nid(name); cc=[i for i,s in names_at.items() if A in s]; return min(cc,key=lambda j:(X[j]-x)**2+(Z[j]-z)**2)
def route(W):
    path=[]
    for a,b in zip(W,W[1:]):
        p=shortest(a,b,False,1.0); assert p,(a,b); path+=p if not path else p[1:]
    return path
def show(title,path):
    seq=[];D=0
    for a,b in zip(path,path[1:]):
        e=[x for x in adj[a] if x[0]==b]; nm=NM[e[0][2]] if e and e[0][2]>=0 else '(link)'; w=math.hypot(X[b]-X[a],Z[b]-Z[a]); D+=w
        if seq and seq[-1][0]==nm: seq[-1][1]+=w
        else: seq.append([nm,w])
    print(title,round(D),'m'); [print(f'  {n:24s} {w:6.0f}') for n,w in seq]
pts=lambda path:json.dumps([round(v*10) for i in path for v in (X[i],Z[i])],separators=(',',':'))
sH,hx,hz=lap_near(24,-285); print('the possum house: lap',round(sH),'m of',round(L),'at',round(hx),round(hz))
pos=route([nearest(hx,hz),on("Goodwin Terrace",200,-250),on("Homestead Street",320,-190),on("Harlock Street",301,24),on("Fegen Drive",381,61),on("Kingwell Street",413,-115),on("Mayfield Road",470,-104)])
show('the possum',pos)
lead=route([on("Mayfield Road",494,-101),on("Weir Street",101,-262)])
show('the plane, before the lap',lead)
sJ,_,_=lap_near(X[lead[-1]],Z[lead[-1]]); print('  then the lap backwards from',round(sJ),'m to the line')
print('RACE_POSSUM =',pts(pos)); print('RACE_PLANE =',pts(lead))

# ---- the possum's gum leaves (24 November 2026; Ash: "I want the gum leaves to be more obvious and at the tops of trees houses and light
# poles and occasionally on the ground"): one about every 24 m along the possum's way once its straight is done, each on the nearest free
# thing of the kind its turn asks for, within 16 m of the way: Kingwell Street's five street lights (the ones the possum climbs) first,
# then by turns a house's roof (its middle; houses of 40 to 400 m2, within 28 m), a tree of 4 m or more, and now and then the ground
# beside the way. None within
# 12 m of another. Printed as RACE_LEAVES: x, z (decimetres), kind (0 ground, 1 tree, 2 roof, 3 street light), and a tree's height (dm)
import base64,struct
town=json.load(open(os.path.join(HERE,'..','..','town3d','moorooka','town.json')))
raw=base64.b64decode(town['trees']); A=struct.unpack('<%dh'%(len(raw)//2),raw[:len(raw)//2*2])
TREES=[(A[i]/4,A[i+1]/4,(A[i+2]&255)/10) for i in range(0,len(A)-2,3) if (A[i+2]&255)/10>=4]
raw=base64.b64decode(town['buildings']); B=struct.unpack('<%dh'%(len(raw)//2),raw[:len(raw)//2*2]); HOUSES=[]; i=0
while i<len(B):
    k=B[i]; p=[(B[i+7+2*q]/10,B[i+8+2*q]/10) for q in range(k)]; i+=7+2*k
    if k<3: continue
    ar=0;cx=0;cz=0
    for (ax,az),(bx,bz) in zip(p,p[1:]+p[:1]): c=ax*bz-bx*az; ar+=c; cx+=(ax+bx)*c; cz+=(az+bz)*c
    if abs(ar)<1e-6: continue
    cx/=3*ar; cz/=3*ar; ar=abs(ar)/2
    if 40<=ar<=400: HOUSES.append((cx,cz))
POLES=[tuple(map(float,q)) for q in re.findall(r'\[(-?[\d.]+), (-?[\d.]+)\]',re.search(r'poles: (\[\[.*?\]\])',app).group(1))]
PX=[X[i] for i in pos]; PZ=[Z[i] for i in pos]; PA=[0]
for a,b in zip(range(len(PX)),range(1,len(PX))): PA.append(PA[-1]+math.hypot(PX[b]-PX[a],PZ[b]-PZ[a]))
def pat(d):
    for j in range(1,len(PA)):
        if PA[j]>=d: t=(d-PA[j-1])/max(1e-9,PA[j]-PA[j-1]); return PX[j-1]+(PX[j]-PX[j-1])*t,PZ[j-1]+(PZ[j]-PZ[j-1])*t,math.atan2(PX[j]-PX[j-1],PZ[j]-PZ[j-1])
    return PX[-1],PZ[-1],0
def near_way(x,z):
    return min(math.hypot(x-pat(d)[0],z-pat(d)[1]) for d in range(0,int(PA[-1]),4))
chosen=[]; order=['roof','tree','roof','tree','ground','tree','roof']; turn=0; counts=collections.Counter()
free=lambda x,z: all(math.hypot(x-a,z-b)>=12 for a,b,_,_ in chosen)
for d in range(320,int(PA[-1])-20,24):
    px,pz,h=pat(d); pick=None
    for (x,z) in POLES:
        if math.hypot(x-px,z-pz)<16 and free(x,z): pick=(x,z,3,0); break
    tries=0
    while not pick and tries<len(order):
        want=order[turn%len(order)]; turn+=1; tries+=1
        if want=='tree':
            c=[(math.hypot(x-px,z-pz),x,z,ht) for x,z,ht in TREES if math.hypot(x-px,z-pz)<16 and free(x,z)]
            if c: _,x,z,ht=min(c); pick=(x,z,1,ht)
        elif want=='roof':
            c=[(math.hypot(x-px,z-pz),x,z) for x,z in HOUSES if math.hypot(x-px,z-pz)<28 and free(x,z)]
            if c: _,x,z=min(c); pick=(x,z,2,0)
        else:
            s=1 if len(chosen)%2 else -1; x=px+math.cos(h)*2.5*s; z=pz-math.sin(h)*2.5*s
            if free(x,z): pick=(x,z,0,0)
    if pick: chosen.append(pick); counts[pick[2]]+=1
print('the leaves:',len(chosen),'(ground, tree, roof, street light):',[counts[k] for k in range(4)])
print('RACE_LEAVES =',json.dumps([v for x,z,k,ht in chosen for v in (round(x*10),round(z*10),k,round(ht*10))],separators=(',',':')))
