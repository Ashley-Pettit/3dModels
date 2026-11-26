# Logan's race lap from waypoints: [x, z, street?, "direct"?]. Between waypoints the shortest way along the streets (the streets
# driven already cost three times as much, so it finds another way), or with "direct" a straight line (across a car park).
# Prints the length, the streets in order, any street stretch driven twice, and the lap in decimetres for app.html.
from logan_net import *
import sys,json
from PIL import Image, ImageDraw
WP=json.loads(sys.argv[1]); out=sys.argv[2]
ok=lambda j:any(e[3]<=5 for e in adj[j])
pts=[]; used=set(); names=[]
prev=None
for w in WP:
    if len(w)>3 and w[3]=='direct':
        pts.append((w[0],w[1])); names.append(('(across)',0)); prev=None; continue
    n=nearest(w[0],w[1],(lambda j,nm=w[2]:nm in names_at[j]) if len(w)>2 and w[2] is not None else ok)
    if prev is None:
        if pts: 
            # from a direct point onto the street: straight to the node
            pass
        pts.append((X[n],Z[n])); prev=n; continue
    p=shortest(prev,n,used)
    for u,v in zip(p,p[1:]):
        used.add((u,v)); pts.append((X[v],Z[v]))
        nm=next((e[2] for e in adj[u] if e[0]==v),'?'); names.append((nm,math.hypot(X[v]-X[u],Z[v]-Z[u])))
    prev=n
L=sum(math.hypot(pts[i+1][0]-pts[i][0],pts[i+1][1]-pts[i][1]) for i in range(len(pts)-1))
seq=[]
for nm,d in names:
    if not seq or seq[-1][0]!=nm: seq.append([nm,0])
    seq[-1][1]+=d
print(round(L),'m'); print(' > '.join(f"{n or '-'} {round(d)}" for n,d in seq))
# stretches driven twice (either way): segments within 6 m of an earlier non-adjacent segment, running parallel
def segd(p,a,b):
    dx,dz=b[0]-a[0],b[1]-a[1]; L2=dx*dx+dz*dz or 1; t=max(0,min(1,((p[0]-a[0])*dx+(p[1]-a[1])*dz)/L2)); return math.hypot(p[0]-a[0]-dx*t,p[1]-a[1]-dz*t)
rep=0
for i in range(len(pts)-1):
    m=((pts[i][0]+pts[i+1][0])/2,(pts[i][1]+pts[i+1][1])/2); l=math.hypot(pts[i+1][0]-pts[i][0],pts[i+1][1]-pts[i][1])
    for j in range(len(pts)-1):
        if abs(i-j)<4: continue
        if segd(m,pts[j],pts[j+1])<5: rep+=l; break
print('twice', round(rep),'m')
cx,cz,R,S=5815,-13250,1300,0.45; im=Image.open('/tmp/claude-0/-home-claude/9e6ad34e-1c15-5977-8b6f-12ce5cc5525e/scratchpad/lg/map.png'); d=ImageDraw.Draw(im)
P=lambda x,z:((x-cx+R)*S,(z-cz+R)*S)
d.line([P(x,z) for x,z in pts],fill=(255,0,200),width=3)
for i,w in enumerate(WP): d.text(P(w[0],w[1]),str(i),fill=(255,0,0))
im.save(out)
json.dump([[round(x*10),round(z*10)] for x,z in pts],open(out+'.json','w'))
