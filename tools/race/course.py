# The race around Moorooka's lap (townRace, MOO_RACE in app.html). Since 23 November 2026 (Ash: "With the race navigate a bit more
# through the polished parts and backstreets of moorooka"): from the start on Beaudesert Road's southbound carriageway just past
# Mayfield Road, down past the school to Sherley Street, east through the back streets south of Mayfield Road (Blomfield, Southwell,
# Medina, Bracken, Corsica), across Mayfield Road and up Weir Street, along Koala Road past the bowls club, Homestead Street, back west
# along Goodwin Terrace, Giardini Lane and Wall Street to Mayfield Road and the line. Each leg by the shortest way that keeps to one-way
# carriageways, side streets no dearer than main roads. Prints the streets and lengths and the points to paste into MOO_RACE (x, z in
# decimetres).  python3 tools/race/course.py
# (Until then the lap was 4.4 km of main roads: Beaudesert, Evans, Tarragindi and Mayfield Roads, through these waypoints with side
# streets costing three times as much: nearest(452,1132), nearest(596,-90), nearest(-71.3,-154.2).)
from net import *
import json,sys
def on(name,x,z):
    A=nid(name); c=[i for i,s in names_at.items() if A in s]
    return min(c,key=lambda j:(X[j]-x)**2+(Z[j]-z)**2)
S=nearest(-64,-117)
WP=[("Sherley Street",-48,131),("Patricia Street",26,292),("Southwell Street",80,290),("Medina Street",130,257),("Medina Street",153,65),
    ("Corsica Street",196,71),("Corsica Street",237,-147),("Weir Street",105,-279),("Koala Road",109,-368),("Koala Road",354,-353),
    ("Goodwin Terrace",340,-230),("Goodwin Terrace",24,-285),("Wall Street",-91,-282),("Wall Street",-69,-202)]
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
