"""People walk the footpaths as a network, never onto a road (Ash, 21 November 2026: "Fix up footpaths throughout moorooka. They make
sure people walk around them properly. Right now they walk onto roads and disappear").

The model's strollers (class G1 in moorooka-model.js) each walked one side of one road, end to end and back, along a line offset from
the road's centre. At the road's ends that line runs out across the street it meets, and every frame anyone within 1.7 m of a road's
edge (or in a building) was simply not drawn: so people walked off the footpath at each corner and vanished, and came back on the
way back.

Now, a little at a time (only the footpaths within about 200 m of the view, nearest first, about 40 checks of the ground a frame):
  - each footpath line is sampled every 1.5 m; where it is in a building (shops built to the footpath), it is drawn in towards the
    kerb, half a metre at a time, to the first clear place no nearer than 1.1 m from the kerb; it is cut where it still meets a road
    (its own road's edge plus 0.5 m, any other road's plus 0.8 m), a building, water or the edge of the model: what is left are
    pieces of real footpath, at least 10 m long;
  - a piece's end is joined to the (nearest four) ends of other pieces within 14 m, round the corner (through the point where the two footpath lines
    meet, or straight) when the join stays 0.7 m clear of every road and out of buildings: so a footpath carries on round the block,
    never across a street;
  - a person walks a piece to its end and takes one of its joins at random, or turns back where there is none (a dead end, or not
    joined yet); people are only put on pieces already cut.
A main road's side with no footpath band in the ground plan (the shops, paved to the wall) gets a walk too, 1.6 m from the kerb.
Nobody is hidden for being near a road any more (no piece or join is), which also saves that check every frame.
`walkNet()` on the model hands the network to the page, whose own walkers on the busy streets use it too.
  python3 footpath_net_patch.py <moorooka-model.js>
"""
import sys
fn = sys.argv[1]; s = open(fn).read()

def rep(old, new):
    global s
    assert s.count(old) == 1, (s.count(old), old[:70])
    s = s.replace(old, new)

rep('class G1{constructor(t,e,n,s,r=()=>!1){', 'class G1{constructor(t,e,n,s,r=()=>!1,nsk=null){')
rep('this.hf=n,this.skip=r,', 'this.hf=n,this.skip=r,this.nsk=nsk,this.anNet={pieces:new Map,work:new Map,grid:new Map,ends:new Map,budget:0},')
# a main road's side the ground plan gives no footpath band (shops paved to the wall, say) still gets a walk, 1.6 m out from the kerb (or
# nearer, out of the shops); on a divided road the inner side's walk falls on the other carriageway and is cut away with it
rep('const g=e[String(p.index)],v=g?[[1,g[0]/10],[-1,g[1]/10]]:p.cls<=2?[[1,3.2],[-1,3.2]]:[];',
    'const g=e[String(p.index)],v=g?[[1,g[0]>0?g[0]/10:p.cls<=2?.5:-1],[-1,g[1]>0?g[1]/10:p.cls<=2?.5:-1]]:p.cls<=2?[[1,3.2],[-1,3.2]]:[];')
rep('this.walks.push({pts:E,at:x,length:x[y-1]})', 'this.walks.push({pts:E,at:x,length:x[y-1],nm:p.nameIdx,hw:p.width/2,rc:Float32Array.from({length:y*2},(q,k)=>p.pts[(k>>1)*3+(k&1?2:0)])})')

NET = r'''anCell(x,z,c){return Math.floor(x/c)+","+Math.floor(z/c)}
anGridInit(){const N=this.anNet;if(N.ready)return;N.ready=!0;this.walks.forEach((w,i)=>{const P=w.pts;for(let k=0;k<P.length;k+=2){const key=this.anCell(P[k],P[k+1],32);let l=N.grid.get(key);l||N.grid.set(key,l=new Set),l.add(i)}})}
anAt(w,e){const n=w.at,s=w.pts,R=w.rc;let r=0,a=n.length-1;for(;a-r>1;){const f=r+a>>1;n[f]<e?r=f:a=f}const o=n[a]-n[r]||1,l=Math.min(1,Math.max(0,(e-n[r])/o));return[s[r*2]+(s[a*2]-s[r*2])*l,s[r*2+1]+(s[a*2+1]-s[r*2+1])*l,R[r*2]+(R[a*2]-R[r*2])*l,R[r*2+1]+(R[a*2+1]-R[r*2+1])*l]}
anMake(pts,at){return{pts,at,length:at[at.length-1]}}
anEnds(pc){const N=this.anNet,P=pc.pts,n=P.length/2,a=Math.min(2,n-1);pc.ends=[{x:P[0],z:P[1],dx:P[0]-P[a*2],dz:P[1]-P[a*2+1],piece:pc,end:0,links:null},{x:P[n*2-2],z:P[n*2-1],dx:P[n*2-2]-P[(n-1-a)*2],dz:P[n*2-1]-P[(n-1-a)*2+1],piece:pc,end:1,links:null}];for(const q of pc.ends){const L=Math.hypot(q.dx,q.dz)||1;q.dx/=L,q.dz/=L;const key=this.anCell(q.x,q.z,16);let l=N.ends.get(key);l||N.ends.set(key,l=[]),l.push(q)}}
anCut(i){const N=this.anNet;if(N.pieces.has(i))return!0;const w=this.walks[i],sk=this.nsk;let st=N.work.get(i);st||N.work.set(i,st={d:0,run:[],out:[]});
const flush=()=>{const run=st.run;if(run.length>=8){const pts=new Float32Array(run),at=new Float32Array(run.length/2);for(let k=1;k<at.length;k++)at[k]=at[k-1]+Math.hypot(pts[k*2]-pts[k*2-2],pts[k*2+1]-pts[k*2-1]);const pc=this.anMake(pts,at);st.out.push(pc),this.anEnds(pc)}st.run=[]};
for(;st.d<=w.length+1e-6;st.d+=1.5){if(N.budget<=0)return!1;N.budget--;const q=this.anAt(w,Math.min(st.d,w.length));let x=q[0],z=q[1];if(sk(x,z,w.nm,!1)){const A=Math.hypot(x-q[2],z-q[3])||1;let ok=!1;for(let o=A-.5;o>=w.hw+1.1&&!ok;o-=.5){N.budget--;const f=o/A,px=q[2]+(x-q[2])*f,pz=q[3]+(z-q[3])*f;sk(px,pz,w.nm,!1)||(x=px,z=pz,ok=!0)}if(!ok){flush();continue}}st.run.push(x,z)}
return flush(),N.pieces.set(i,st.out),N.work.delete(i),!0}
anLinks(q){if(q.links)return q.links;this.anGridInit();const N=this.anNet,sk=this.nsk;if(!sk)return q.links=[];for(let a=-1;a<=1;a++)for(let b=-1;b<=1;b++){const g=N.grid.get(Math.floor(q.x/32+a)+","+Math.floor(q.z/32+b));if(g)for(const i of g)if(!this.anCut(i))return null}if(N.budget<=0)return null;const links=[];
const cand=[];for(let a=-1;a<=1;a++)for(let b=-1;b<=1;b++){const l=N.ends.get(Math.floor(q.x/16+a)+","+Math.floor(q.z/16+b));if(l)for(const m of l){const d=Math.hypot(m.x-q.x,m.z-q.z);m.piece!==q.piece&&d<=14&&cand.push([d,m])}}cand.sort((a,b)=>a[0]-b[0]);for(const[,m]of cand.slice(0,4)){{let path=[q.x,q.z,m.x,m.z];const den=q.dx*m.dz-q.dz*m.dx;if(Math.abs(den)>.2){const rx=m.x-q.x,rz=m.z-q.z,t=(rx*m.dz-rz*m.dx)/den,u=(rx*q.dz-rz*q.dx)/den;t>.3&&t<14&&u>.3&&u<14&&(path=[q.x,q.z,q.x+q.dx*t,q.z+q.dz*t,m.x,m.z])}let ok=!0,len=0;for(let k=0;k+3<path.length&&ok;k+=2){const L=Math.hypot(path[k+2]-path[k],path[k+3]-path[k+1]);len+=L;if(len>22){ok=!1;break}for(let d=.5;d<L&&ok;d+=1){N.budget--;const f=d/L;sk(path[k]+(path[k+2]-path[k])*f,path[k+1]+(path[k+3]-path[k+1])*f,-2,!0)&&(ok=!1)}}if(!ok)continue;const pts=new Float32Array(path),at=new Float32Array(path.length/2);for(let k=1;k<at.length;k++)at[k]=at[k-1]+Math.hypot(pts[k*2]-pts[k*2-2],pts[k*2+1]-pts[k*2-1]);const pc=this.anMake(pts,at);pc.conn=!0,pc.to=m,links.push(pc)}}return q.links=links}
anWarm(x,z){const N=this.anNet;this.anGridInit();if(!N.order||Math.hypot(x-N.ox,z-N.oz)>40){N.ox=x,N.oz=z;const o=[];for(let r=0;r<this.walks.length;r++){const d=Math.hypot(this.centres[r*2]-x,this.centres[r*2+1]-z)-this.walks[r].length/2;d<200&&o.push([d,r])}o.sort((a,b)=>a[0]-b[0]),N.order=o.map(a=>a[1]),N.oc=0,N.ol=0}
for(;N.oc<N.order.length;N.oc++)if(!this.anCut(N.order[N.oc]))return;for(;N.ol<N.order.length;N.ol++){const ps=N.pieces.get(N.order[N.ol]);for(const pc of ps)for(const q of pc.ends)if(!q.links&&this.anLinks(q)===null)return}}
anStep(c,ds){const P=c.walk;c.s+=c.dir*ds;if(c.s<=P.length&&c.s>=0)return;const over=c.s>P.length?c.s-P.length:-c.s;if(P.conn){const m=P.to,Q=m.piece;c.walk=Q,m.end===0?(c.s=Math.min(over,Q.length),c.dir=1):(c.s=Math.max(0,Q.length-over),c.dir=-1);return}const q=P.ends?(c.dir>0?P.ends[1]:P.ends[0]):null,L=q?this.anLinks(q):null;if(L&&L.length){const l=L[Math.floor(this.rand()*L.length)];c.walk=l,c.s=Math.min(over,l.length),c.dir=1}else c.dir=-c.dir,c.s=Math.min(P.length,Math.max(0,c.s))}
placeNear(t,e,n,R){const N=this.anNet,s=[];for(const[i,ps]of N.pieces)ps.length&&Math.hypot(this.centres[i*2]-e,this.centres[i*2+1]-n)<R&&s.push(ps);if(!s.length)return!1;const ps=s[Math.floor(this.rand()*s.length)],pc=ps[Math.floor(this.rand()*ps.length)];return t.walk=pc,t.s=this.rand()*pc.length,t.dir=this.rand()<.5?1:-1,!0}
'''
rep('place(t,e,n){const s=[];for(let r=0;r<this.walks.length;r++)Math.hypot(this.centres[r*2]-e,this.centres[r*2+1]-n)<Ku*.8&&s.push(r);return s.length?(t.walk=this.walks[s[Math.floor(this.rand()*s.length)]],t.s=this.rand()*t.walk.length,t.dir=this.rand()<.5?1:-1,!0):!1}',
    'place(t,e,n){return this.placeNear(t,e,n,Ku*.8)}' + NET)
rep('c.s+=c.dir*c.pace*t,(c.s>c.walk.length||c.s<0)&&(c.dir=-c.dir,c.s=Math.min(c.walk.length,Math.max(0,c.s)));',
    'this.anStep(c,c.pace*t);')
rep('this.skip(h,f)||this.noGo.some(', 'this.noGo.some(')
# the frame's budget: about 40 checks of the ground for cutting and joining the footpaths round the view, nearest first (anWarm), and a
# dozen more for anyone reaching an end not joined yet (who turns back meanwhile); so nothing heavy lands mid-game
rep('update(t,e,n,s){const r=s<k1&&this.walks.length>0;', 'update(t,e,n,s){const r=s<k1&&this.walks.length>0;this.anNet.budget=r?40:0,r&&this.anWarm(e,n),this.anNet.budget=Math.max(this.anNet.budget,12);')
rep('this.strollers=new G1(p.paths,a.footpaths??{},u,n==="high"?30:14,(A,F)=>{if(D(A,F))return!0;let q=!1;return p.index.near(A,F,16,(g,c,y,w)=>{c<=3&&g<w/2+1.7&&(q=!0)}),q})',
    'this.strollers=new G1(p.paths,a.footpaths??{},u,n==="high"?30:14,(A,F)=>{if(D(A,F))return!0;let q=!1;return p.index.near(A,F,16,(g,c,y,w)=>{c<=3&&g<w/2+1.7&&(q=!0)}),q},(A,F,nm,strict)=>{if(D(A,F))return!0;let q=!1;return p.index.near(A,F,16,(g,c,y,w)=>{c<=3&&g<w/2+(strict?.7:y===nm?.5:.8)&&(q=!0)}),q})')
rep('solidAt(e,n){var s;return', 'walkNet(){return this.strollers??null}solidAt(e,n){var s;return')
rep('solidAt:(a,o)=>n.solidAt(a,o),', 'walkNet:()=>n.walkNet(),solidAt:(a,o)=>n.solidAt(a,o),')
open(fn, 'w').write(s)
print('ok')
