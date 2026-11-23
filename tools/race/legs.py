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
