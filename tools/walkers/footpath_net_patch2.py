"""People off the traffic islands and spread out (Ash, 22 November 2026: "The people need new logic, the they are stuck on traffic
islands all together near 6 Beaudesert"). Applies to moorooka-model.js after footpath_net_patch.py.

What went wrong: a main road's side with no footpath band got a walk (for the shops), and on a divided road the inner side's walk
lands in the median; where the median is wide (the planted island at the Ipswich Road end) a piece of it survived. At the start
the network is built nearest first, so that piece was the first one there was, and every person was put on it at once; it joins
nothing, so they paced up and down it together for good.

Now:
  - a piece of footpath with a road on its far side too (looked for 2 to 10 m out from it, away from its own road, every 6 m along
    it; half or more of the looks) is a traffic island or a median, not a footpath, and is dropped;
  - a piece shorter than about 10 m (eight samples) is dropped too (it was four: bits of kerb corner);
  - round a wide corner (a big junction's kerb return) a join can be up to 20 m across and 30 m long, still clear of every road;
  - people are only put on a piece that joins another footpath at one end at least (or is 40 m or longer and known to join
    nothing, a dead-end street's), and no more than one person for each 25 m of it: so they appear round you over the first few
    seconds, spread out, instead of all at once on the first piece built;
  - anyone who still finds themselves on a short piece joined to nothing is put somewhere else at its end.
  python3 footpath_net_patch2.py <moorooka-model.js>
"""
import sys
fn = sys.argv[1]; s = open(fn).read()

def rep(old, new):
    global s
    assert s.count(old) == 1, (s.count(old), old[:70])
    s = s.replace(old, new)

# the ground check gets a third mode: roads only, just their carriageway (0.2 m past the edge)
rep('(A,F,nm,strict)=>{if(D(A,F))return!0;let q=!1;return p.index.near(A,F,16,(g,c,y,w)=>{c<=3&&g<w/2+(strict?.7:y===nm?.5:.8)&&(q=!0)}),q}',
    '(A,F,nm,strict)=>{if(strict!==2&&D(A,F))return!0;let q=!1;return p.index.near(A,F,16,(g,c,y,w)=>{c<=3&&g<w/2+(strict===2?.2:strict?.7:y===nm?.5:.8)&&(q=!0)}),q}')
# keep each sample's road point, to look outward from it
rep('st={d:0,run:[],out:[]}', 'st={d:0,run:[],rr:[],out:[]}')
rep('st.run.push(x,z)}', 'st.run.push(x,z),st.rr.push(q[2],q[3])}')
rep('const flush=()=>{const run=st.run;if(run.length>=8){',
    'const flush=()=>{const run=st.run,rr=st.rr;let isl=0,tot=0;for(let k=0;k<run.length/2;k+=4){const px=run[k*2],pz=run[k*2+1],ux=px-rr[k*2],uz=pz-rr[k*2+1],ul=Math.hypot(ux,uz)||1;tot++;for(let d=2;d<=10;d+=2){N.budget--;if(sk(px+ux/ul*d,pz+uz/ul*d,-2,2)){isl++;break}}}st.rr=[];if(run.length>=16&&!(tot&&isl*2>=tot)){')
# put people only where the footpath goes somewhere, and spread out
rep('placeNear(t,e,n,R){const N=this.anNet,s=[];for(const[i,ps]of N.pieces)ps.length&&Math.hypot(this.centres[i*2]-e,this.centres[i*2+1]-n)<R&&s.push(ps);if(!s.length)return!1;const ps=s[Math.floor(this.rand()*s.length)],pc=ps[Math.floor(this.rand()*ps.length)];return t.walk=pc,t.s=this.rand()*pc.length,t.dir=this.rand()<.5?1:-1,!0}',
    'placeNear(t,e,n,R){const N=this.anNet,s=[],occ=new Map;for(const c of this.people)c.s>=0&&occ.set(c.walk,(occ.get(c.walk)||0)+1);for(const x of N.extra||[])occ.set(x,(occ.get(x)||0)+1);for(const[i,ps]of N.pieces){if(!ps.length||Math.hypot(this.centres[i*2]-e,this.centres[i*2+1]-n)>=R)continue;for(const pc of ps){const ok=pc.ends.some(q=>q.links&&q.links.length)||pc.length>=40&&pc.ends.every(q=>q.links);ok&&(occ.get(pc)||0)<Math.max(1,Math.floor(pc.length/25))&&s.push(pc)}}if(!s.length)return!1;const pc=s[Math.floor(this.rand()*s.length)];return t.walk=pc,t.s=this.rand()*pc.length,t.dir=this.rand()<.5?1:-1,!0}')
# round a wide corner (a big junction's kerb return): joins up to 20 m apart, 30 m long, still clear of every road
rep('m.piece!==q.piece&&d<=14&&cand.push([d,m])', 'm.piece!==q.piece&&d<=20&&cand.push([d,m])')
rep('for(let a=-1;a<=1;a++)for(let b=-1;b<=1;b++){const l=N.ends.get(Math.floor(q.x/16+a)', 'for(let a=-2;a<=2;a++)for(let b=-2;b<=2;b++){const l=N.ends.get(Math.floor(q.x/16+a)')
rep('if(len>22){ok=!1;break}', 'if(len>30){ok=!1;break}')
rep('t>.3&&t<14&&u>.3&&u<14', 't>.3&&t<20&&u>.3&&u<20')
# a short piece joined to nothing: put them somewhere else
rep('else c.dir=-c.dir,c.s=Math.min(P.length,Math.max(0,c.s))}',
    'else{c.dir=-c.dir,c.s=Math.min(P.length,Math.max(0,c.s));P.ends&&P.length<40&&P.ends.every(q=>q.links&&!q.links.length)&&(c.s=-1)}}')
open(fn, 'w').write(s)
print('ok')
