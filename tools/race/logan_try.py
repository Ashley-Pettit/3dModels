from logan_net import *
import sys,json
from PIL import Image, ImageDraw
WP=json.loads(sys.argv[1]); out=sys.argv[2]
ok=lambda j:any(e[3]<=5 for e in adj[j])
W=[nearest(w[0],w[1],(lambda j,n=w[2]:n in names_at[j]) if len(w)>2 else ok) for w in WP]; used=set(); path=[]
for a,b in zip(W,W[1:]):
    p=shortest(a,b,used)
    for u,v in zip(p,p[1:]): used.add((u,v))
    path+=p if not path else p[1:]
L=sum(math.hypot(X[path[i+1]]-X[path[i]],Z[path[i+1]]-Z[path[i]]) for i in range(len(path)-1))
seq=[]
for u,v in zip(path,path[1:]):
    nm=next((e[2] for e in adj[u] if e[0]==v),'?')
    if not seq or seq[-1][0]!=nm: seq.append([nm,0])
    seq[-1][1]+=math.hypot(X[v]-X[u],Z[v]-Z[u])
print(round(L),'m'); print(' > '.join(f"{n or '-'} {round(d)}" for n,d in seq))
cx,cz,R,S=5815,-13250,1300,0.45; Wd=int(2*R*S); im=Image.open('/tmp/claude-0/-home-claude/9e6ad34e-1c15-5977-8b6f-12ce5cc5525e/scratchpad/lg/map.png'); d=ImageDraw.Draw(im)
P=lambda x,z:((x-cx+R)*S,(z-cz+R)*S)
d.line([P(X[i],Z[i]) for i in path],fill=(255,0,200),width=4)
for i,w in enumerate(WP): d.text(P(w[0],w[1]),str(i),fill=(255,0,0))
im.save(out)
json.dump([[round(X[i]*10),round(Z[i]*10)] for i in path],open(out+'.json','w'))
