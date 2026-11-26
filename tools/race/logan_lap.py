# Logan's race lap (RACE_LOGAN in app.html): from the car park behind the council, out round the streets about the council and back,
# about 5 km, cars only. The way round goes through points on a ring about the council (one every 45 degrees, clockwise from the
# east), each the nearest point on a street; no street is driven twice where another way exists. Ash, 26 November 2026: "Add race to
# Logan. It should start in the council carpark and race around the council building for a total of roughly 5km. Car only. Go a
# little away from council but make the race a fair bit around that area". Prints the lap (x, z in decimetres) and its length.
#   python3 tools/race/logan_lap.py [radius m]
from logan_net import *
import sys
CX,CZ=5815,-13250; START=(5790,-13192)
def ring(R,k=8,a0=0):
    pts=[]
    for i in range(k):
        a=a0+i*2*math.pi/k; x,z=CX+R*math.cos(a),CZ+R*math.sin(a)
        pts.append(nearest(x,z,lambda j:any(e[3]<=4 for e in adj[j])))
    return pts
def lap(R,a0=0):
    S=nearest(*START,lambda j:any(e[3]<=5 for e in adj[j])); W=[S]+ring(R,8,a0)+[S]; used=set(); path=[]
    for a,b in zip(W,W[1:]):
        p=shortest(a,b,used)
        if not p: return None,0
        for u,v in zip(p,p[1:]): used.add((u,v))
        path+=p if not path else p[1:]
    L=sum(math.hypot(X[path[i+1]]-X[path[i]],Z[path[i+1]]-Z[path[i]]) for i in range(len(path)-1))
    return path,L
if __name__=='__main__':
    R=float(sys.argv[1]) if len(sys.argv)>1 else 650; a0=float(sys.argv[2]) if len(sys.argv)>2 else 0
    path,L=lap(R,a0); print(round(L),'m',len(path),'points')
