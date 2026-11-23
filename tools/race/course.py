# The race around Moorooka's lap (townRace, MOO_RACE in app.html). Since 23 November 2026, second version (Ash: "I want the race to start
# down Beaudesert rd from the shops past 6 Beaudesert Rd, then turn right, then turn around those streets. The start will be easy and
# straight"): from the line on Beaudesert Road's northbound carriageway by the shops, 100 m north of Mayfield Road, straight up Beaudesert
# Road past number 6 to Ipswich Road, right along Ipswich Road and Longueval Street, down Dickebusch and Mathilda Streets, across Wharton
# Street and Vendale Avenue to Weir Street, back west along Goodwin Terrace, Giardini Lane and Wall Street, and round by Mayfield Road to
# the line. Each leg by the shortest way that keeps to one-way carriageways. Prints the streets and lengths and the points to paste into
# MOO_RACE (x, z in decimetres).  python3 tools/race/course.py
# (Before: 2.8 km south and east of Mayfield Road, from Beaudesert Road's southbound carriageway: Sherley, Blomfield, Southwell, Medina,
# Bracken, Corsica, Weir, Koala, Homestead, Goodwin, Giardini, Wall; and before that, 4.4 km of main roads.)
from net import *
import json,sys
def on(name,x,z):
    A=nid(name); c=[i for i,s in names_at.items() if A in s]
    return min(c,key=lambda j:(X[j]-x)**2+(Z[j]-z)**2)
S=nearest(-170,-296)  # the line: Beaudesert Road's northbound carriageway, by the shops
WP=[("Beaudesert Road",-291,-1052),("Longueval Street",100,-1150),("Dickebusch Street",100,-1000),("Mathilda Street",65,-800),("Vendale Avenue",0,-600),
    ("Goodwin Terrace",24,-285),("Wall Street",-91,-282),("Wall Street",-69,-202)]
W=[S]+[on(*w) for w in WP]+[S]
path=[]
for a,b in zip(W,W[1:]):
    p=shortest(a,b,True,1.0); assert p,(a,b)
    path+=p if not path else p[1:]
seq=[];L=0
for a,b in zip(path,path[1:]):
    e=[x for x in adj[a] if x[0]==b and not x[3]]; nm=e[0][2] if e else -2; w=math.hypot(X[b]-X[a],Z[b]-Z[a]); L+=w
    n=NM[nm] if nm>=0 else '(link)'
    if seq and seq[-1][0]==n: seq[-1][1]+=w
    else: seq.append([n,w])
print(round(L),'m'); [print(f'  {n:24s} {w:6.0f}') for n,w in seq]
Q=[[X[path[0]],Z[path[0]]]]
for i in path[1:]:
    if math.hypot(X[i]-Q[-1][0],Z[i]-Q[-1][1])>0.5: Q.append([X[i],Z[i]])
if math.hypot(Q[-1][0]-Q[0][0],Q[-1][1]-Q[0][1])<0.5: Q=Q[:-1]
print('MOO_RACE =',json.dumps([round(v*10) for p in Q for v in p],separators=(',',':')))
