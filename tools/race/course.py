# The race around Moorooka's lap (townRace, MOO_RACE in app.html): from the start on Beaudesert Road's southbound carriageway just
# past Mayfield Road, by the shortest way that keeps to one-way carriageways and prefers the main roads (side streets cost three times
# as much), through Evans Road at Tarragindi Road, Tarragindi Road at Mayfield Road, and back. Prints the streets and lengths and
# the points to paste into MOO_RACE (x, z in decimetres).  python3 tools/race/course.py
from net import *
import json,sys
S=nearest(-64,-117)
W=[S,nearest(452,1132),nearest(596,-90),nearest(-71.3,-154.2),S]
path=[]
for a,b in zip(W,W[1:]):
    p=shortest(a,b,True,3.0); assert p,(a,b)
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
