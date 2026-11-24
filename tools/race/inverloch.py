# The race around Inverloch's lap (townRace, INV_RACE in app.html). Since 24 November 2026 (Ash: "Add a car race with similar rules to
# Inverloch. Just car only. It should start by speaking with ash who is opposite 11 Norman Rd"): from the line on Norman Road, a little
# west of Ash (who stands across the road from number 11, by the front of the grid), straight along Norman Road to Florida Avenue, up Florida Avenue, east along
# Victoria Street, up Evergreen Avenue, east along Toorak Road, down Abbott Street, south-west along Ramsey Boulevard and Surf Parade,
# west along Veronica Street, up Ebor Avenue and west along Norman Road, past Ash, to the line. Inverloch's main roads don't share points with the
# streets that meet them, so the lap is each street's own line, cut where the next one meets it (not the network's shortest ways).
# Prints the streets, their lengths, the gaps where they meet, and the points to paste into INV_RACE (x, z in decimetres).
#   python3 tools/race/inverloch.py
import json,math,os
HERE=os.path.dirname(os.path.abspath(__file__))
t=json.load(open(os.path.join(HERE,'..','..','town3d','town.json')));NM=t['names']
def lines(name):  # the street's pieces, joined end to end where they meet
    A=NM.index(name); P=[[(r[5][k]/10,r[5][k+1]/10) for k in range(0,len(r[5]),2)] for r in t['roads'] if r[4]==A and r[0]<=5]
    near=lambda p,q:math.hypot(p[0]-q[0],p[1]-q[1])<0.6
    while True:
        for i in range(len(P)):
            for j in range(len(P)):
                if i==j: continue
                a,b=P[i],P[j]
                for x,y in ((a,b),(a,b[::-1]),(a[::-1],b),(a[::-1],b[::-1])):
                    if near(x[-1],y[0]): P[i]=x+y[1:]; del P[j]; break
                else: continue
                break
            else: continue
            break
        else: return P
def proj(pl,p):  # where on a line p is nearest: (distance off, index of the segment, fraction along it, the point)
    best=None
    for i in range(len(pl)-1):
        (ax,az),(bx,bz)=pl[i],pl[i+1];dx,dz=bx-ax,bz-az;L2=dx*dx+dz*dz or 1;f=max(0,min(1,((p[0]-ax)*dx+(p[1]-az)*dz)/L2));q=(ax+dx*f,az+dz*f);d=math.hypot(q[0]-p[0],q[1]-p[1])
        if not best or d<best[0]: best=(d,i,f,q)
    return best
def cut(name,a,b):  # the street's line from nearest a to nearest b (the one of its pieces that comes closest to both)
    pl=min(lines(name),key=lambda pl:proj(pl,a)[0]+proj(pl,b)[0]); A=proj(pl,a);B=proj(pl,b)
    if (A[1],A[2])<=(B[1],B[2]): return [A[3]]+pl[A[1]+1:B[1]+1]+[B[3]],A[0],B[0]
    return [A[3]]+pl[B[1]+1:A[1]+1][::-1]+[B[3]],A[0],B[0]
LINE=(-1594,388)  # 12 m west of Ash, so he stands by the front of the grid
# each street, from where the last one left it to where the next one is met
legs=[("Norman Road",LINE,(-1744,318)),("Florida Avenue",(-1744,318),(-1714,85)),("Victoria Street",(-1714,85),(-1352,132)),
      ("Evergreen Avenue",(-1352,132),(-1338,5)),("Toorak Road",(-1338,5),(-988,37)),("Abbott Street",(-988,37),(-1019,285)),
      ("Ramsey Boulevard",(-1019,285),(-1168,323)),("Surf Parade",(-1168,323),(-1457,664)),("Veronica Street",(-1457,664),(-1566,654)),
      ("Ebor Avenue",(-1566,654),(-1495,439)),("Norman Road",(-1495,439),LINE)]
Q=[];tot=0
for nm,a,b in legs:
    pts,da,db=cut(nm,a,b); L=sum(math.hypot(pts[i+1][0]-pts[i][0],pts[i+1][1]-pts[i][1]) for i in range(len(pts)-1))
    gap=math.hypot(pts[0][0]-Q[-1][0],pts[0][1]-Q[-1][1]) if Q else 0
    print(f'  {nm:18s} {L:6.0f} m   (off its line by {da:4.1f} / {db:4.1f} m; gap from the last {gap:4.1f} m)'); tot+=L+gap
    for p in pts:
        if not Q or math.hypot(p[0]-Q[-1][0],p[1]-Q[-1][1])>0.5: Q.append(p)
if math.hypot(Q[-1][0]-Q[0][0],Q[-1][1]-Q[0][1])<0.5: Q=Q[:-1]
print(round(tot),'m,',len(Q),'points')
print('INV_RACE =',json.dumps([round(v*10) for p in Q for v in p],separators=(',',':')))
