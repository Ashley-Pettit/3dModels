"""Houses set on their slope (Ash, 22 November 2026: "a lot of the houses are in the ground. If they are I want you to rebuild them in
low res ... make the houses like the real thing but in low res").

A building's floor is the ground at its middle, so on a slope the uphill walls stand in the dirt. Lifting every house on to its highest
ground was tried and taken back (it left tall blank bases, huge stairs and doors in the air). This is per house instead: only the houses
listed in MOO_SET (app.html, handed over by window.anSet) are rebuilt, the way Brisbane's hillside houses are really built:

- the roof stays where the survey has it (the eave height in town.json), or just high enough for one storey above the uphill ground;
- the main floor is one storey (2.75 m) under the eave and never below the uphill ground, so no wall, window or door is in the dirt;
- what is under the floor, down the slope, is drawn as what it is: a closed-in lower level (masonry, small windows, a garage door where
  the drive meets the house) when it stands 2.15 m or more out of the ground, otherwise stumps behind dark battens;
- the front door is at the main floor with a landing and stairs: straight out to the path for a rise up to 1.75 m, along the front wall
  above that, and at the lower level when the floor is more than 3.1 m up; a concrete pad joins the foot of the stairs to the path;
- a second storey is drawn when the survey's eave is two storeys above the uphill ground.

Kept light: seen from far off (the plain pieces the model swaps in) a rebuilt house is the same single ring of walls as before; close up
it is about 70 more triangles (open treads, one rail bar and two posts a side, windows without frames under the floor).

MOO_SET entry: [x, z, roof, driveX, driveZ, more]: the middle of the building's outline (as the model works it out), the roof seen on
the aerial photo (0 as the data has it, 1 hip, 2 gable, 3 flat or a low skillion), where the drive meets the house (or nothing), and what Street View shows
once it is checked ({ w: wall colour, b: colour under the floor, e: 1 closed in or 0 on stumps, d: 0 the front door is at the
lower level or 1 up the stairs, g: 0 no garage door }).

window.anSetRec, when set, is told where each house's stairs, pads and garage apron stand (so tools can move trees and cars off them).

  python3 set_on_slope.py <moorooka-model.js>
"""
import sys
fn = sys.argv[1]; s = open(fn, encoding='utf-8').read()
def rep(old, new):
    global s
    assert s.count(old) == 1, (s.count(old), old[:80])
    s = s.replace(old, new)

# 1. the floor, the eave and the storeys of a listed house
rep('const RQ=[],g=Math.min(m,Math.max(d,t.yAt(M,p)))+.1,v=', 'let RQ=[],g=Math.min(m,Math.max(d,t.yAt(M,p)))+.1,v=')
rep('b=Math.min(E.w,E.d)/2,[R,w,L]=r;let C=ru(R,w,L);',
    'b=Math.min(E.w,E.d)/2,[R,w,L]=r;'
    'const ST=a===H_&&!(AO&&AO.canopy)&&typeof window<"u"&&window.anSet?window.anSet(M,p):null;let SF=0,SN=1;'
    'if(ST){let hi=m;for(let z=0;z<u;z++){const W=(z+1)%u,V=t.yAt((e[z*2]+e[W*2])/2,(e[z*2+1]+e[W*2+1])/2);V>hi&&(hi=V)}'
    'const r0=_,v2=Math.max(n,hi+2.3);SN=Math.max(1,Math.min(3,Math.floor((v2-hi+.15)/2.7+.1)));'
    'SF=Math.max(hi-.15,v2-SN*2.75)-g;SF<.35&&(SF=0);S=v2-g;_=ST[2]===3?0:r0;ST[2]&&ST[2]<3&&(c=ST[2])}'
    'let C=ru(R,w,L);')
# 2. its colours, and what is under its floor
rep('i.frame(0,g,0,0);const F=a===H_&&S>=4.4&&S<6.6?S-2.75:0;',
    'i.frame(0,g,0,0);const SO=ST&&ST[5]||null;SO&&SO.w&&(A=ru(SO.w[0],SO.w[1],SO.w[2]));'
    'const F=ST?SF:a===H_&&S>=4.4&&S<6.6?S-2.75:0,SE=ST?(SO&&SO.e!=null?!!SO.e:F-(d-g)>=2.15):!1,'
    'SB=ST&&F?(SO&&SO.b?ru(SO.b[0],SO.b[1],SO.b[2]):SE?anBase(A,Math.abs(Math.sin(M*12.9898+p*78.233)*43758.5453)%1):ts(Ut(A,.42),ru(40,36,32),.5)):null;')
rep(':F?(i.walls(e,d-g-.3,F-.22,', ':ST&&F?(f?i.walls(e,d-g-.3,S,A):(i.walls(e,d-g-.3,F-.2,SB),i.walls(e,F-.2,F,iu),i.walls(e,F,S,A))):F?(i.walls(e,d-g-.3,F-.22,')
# 3. its storeys of windows, and each wall under the floor
rep('if(a!==Os&&y<2500&&!f){const z=F?1:', 'if(ST)try{window.anSetRec&&window.anSetRec(M,p,"house",[F,S,SN,SE?1:0,FE,d-g,g])}catch{}if(a!==Os&&y<2500&&!f){const z=F?1:')
rep('const z=F?1:Math.min(12,Math.max(1,Math.round(S/3))),W=a===zs?4.4:3.4;', 'const z=ST?SN:F?1:Math.min(12,Math.max(1,Math.round(S/3))),W=a===zs?4.4:3.4;')
rep('anG=q=>t.yAt(anGx+q*Math.cos(dt)+.5*Math.sin(dt),anGz-q*Math.sin(dt)+.5*Math.cos(dt))-g;',
    'anG=(q,o=.5)=>t.yAt(anGx+q*Math.cos(dt)+o*Math.sin(dt),anGz-q*Math.sin(dt)+o*Math.cos(dt))-g,'
    'SG=ST&&F?anWall(i,ct,F,SE,anG,V===FE,Yt,ST,anGx,anGz,dt,M,p):null;')
# 4. its front door, landing and stairs
rep('V===FE&&anFront(i,ct,F,S,C,Yt,iu,anNH)', 'V===FE&&(ST&&F?anDoor(i,ct,F,S,C,Yt,iu,anG,SE,anNH,SG,M,p,ST):anFront(i,ct,F,S,C,Yt,iu,anNH))')
# 5. the builders
rep('function anFront(b,L,F,S,C,n,W,NH){', r'''const anPost=[.5,.49,.46],anTread=[.42,.4,.36],anRail=[.035,.035,.04],anPad=[.44,.43,.4],anGarC=[.52,.53,.53];
function anBase(A,r){return r<.3?Ut(A,.8):r<.5?ru(152,92,70):r<.65?ru(128,96,78):r<.82?ru(198,176,144):ru(160,160,156)}
function anRec(i,M,p,kind,x0,z0,x1,z1){try{typeof window<"u"&&window.anSetRec&&window.anSetRec(M,p,kind,[i.wx(x0,z0),i.wz(x0,z0),i.wx(x1,z0),i.wz(x1,z0),i.wx(x1,z1),i.wz(x1,z1),i.wx(x0,z1),i.wz(x0,z1)])}catch{}}
function anWall(i,L,F,enc,G,front,n,ST,ox,oz,h,M,p){const top=F-.2,u=n?((n>>1)+.5)/n*L:L/2;let gx=null;
if(ST[3]!=null&&L>=3.4&&!(ST[5]&&ST[5].g===0)){const dx=ST[3]-ox,dz=ST[4]-oz,o=dx*Math.sin(h)+dz*Math.cos(h);let x=dx*Math.cos(h)-dz*Math.sin(h);
if(o>-1.2&&o<2.6&&x>.4&&x<L-.4){x=Math.min(L-1.5,Math.max(1.5,x));front&&Math.abs(x-u)<2.15&&(x=x<u?u-2.15:u+2.15);
const gy=Math.max(G(x-1.25),G(x+1.25));if(x>=1.5&&x<=L-1.5&&top-gy>=2.15){gx=x;
i.quad(x-1.4,gy-.05,.03,x+1.4,gy-.05,.03,x+1.4,gy+2.25,.03,x-1.4,gy+2.25,.03,iu);i.quad(x-1.25,gy,.06,x+1.25,gy,.06,x+1.25,gy+2.12,.06,x-1.25,gy+2.12,.06,anGarC);
anRec(i,M,p,"gar",x-1.4,0,x+1.4,5)}}}
if(!enc){const q=Math.max(1,Math.round(L/3.6));for(let k=0;k<=q;k++){const x=Math.min(L-.13,Math.max(.13,k/q*L)),gy=G(x);top-gy>.45&&i.quad(x-.11,gy-.2,.04,x+.11,gy-.2,.04,x+.11,top,.04,x-.11,top,.04,anPost)}return gx}
const q=Math.floor(L/3.4);for(let k=0;k<q;k++){const x=(k+.5)/q*L;if(gx!=null&&Math.abs(x-gx)<2.3||front&&Math.abs(x-u)<1.5)continue;const gy=Math.max(G(x-.6),G(x+.6));if(top-gy<2.3)continue;const y0=top-1.6;
i.quad(x-.6,y0,.04,x+.6,y0,.04,x+.6,y0+.9,.04,x-.6,y0+.9,.04,B_,0)}return gx}
function anDoor(i,L,F,S,C,n,W,G,enc,NH,gx,M,p,ST){const u=n?((n>>1)+.5)/n*L:L/2,D=[.147,.069,.031],
door=y=>{i.quad(u-.58,y,.03,u+.58,y,.03,u+.58,y+2.2,.03,u-.58,y+2.2,.03,W);i.quad(u-.46,y,.06,u+.46,y,.06,u+.46,y+2.08,.06,u-.46,y+2.08,.06,D);
const ah=Math.min(S-.12,y+2.75);NH||i.quad(u+1.05,ah,0,u-1.05,ah,0,u-1.05,ah-.3,1.2,u+1.05,ah-.3,1.2,C)},
pad=(x0,z0,x1,z1)=>{const a=Math.min(x0,x1),b=Math.max(x0,x1),k=Math.max(1,Math.ceil((b-a)/2.5));for(let j=0;j<k;j++){const xa=a+(b-a)*j/k,xb=a+(b-a)*(j+1)/k;
i.quad(xa,G(xa,z1)+.05,z1,xb,G(xb,z1)+.05,z1,xb,G(xb,z0)+.05,z0,xa,G(xa,z0)+.05,z0,anPad)}},
g0=Math.max(G(u-.5,.6),G(u+.5,.6)),r0=F-g0;
if(r0<=.4){door(F);i.box(u-.7,Math.min(F-.45,g0-.25),0,u+.7,F-.02,.9,anTread);return}
const dl=ST[5]?ST[5].d:null;if((dl===0?r0>=1.9:dl!==1&&r0>3.1)&&enc&&(gx==null||Math.abs(gx-u)>=2.1)){const y=g0+.08;door(y);i.box(u-.7,g0-.35,0,u+.7,y-.02,.9,anTread);return}
door(F);const lw=.72,ld=1.1,
post=(x,z,y)=>{const gy=G(x,z)-.25;i.quad(x-.05,gy,z,x+.05,gy,z,x+.05,y,z,x-.05,y,z,anPost);i.quad(x,gy,z-.1,x,gy,z,x,y,z,x,y,z-.1,anPost)},
bar=(xa,ya,za,xb,yb,zb)=>i.quad(xa,ya+.9,za,xb,yb+.9,zb,xb,yb+.97,zb,xa,ya+.97,za,anRail),
pin=(x,y,z,ax)=>ax?i.quad(x-.03,y,z,x+.03,y,z,x+.03,y+.95,z,x-.03,y+.95,z,anRail):i.quad(x,y,z-.03,x,y,z+.03,x,y+.95,z+.03,x,y+.95,z-.03,anRail);
i.box(u-lw,F-.12,0,u+lw,F,ld,anTread);post(u-lw+.05,ld,F-.12);post(u+lw-.05,ld,F-.12);
if(r0<=1.75){let rise=r0,run=r0*1.5;for(let k=0;k<3;k++)rise=Math.max(.2,F-G(u,ld+run)),run=rise*1.5;
const N=Math.max(2,Math.ceil(rise/.21)),hh=rise/N,tr=.3,zf=ld+(N-1)*tr;
for(let k=0;k<N-1;k++){const y=F-(k+1)*hh,z0=ld+k*tr;i.quad(u-.55,y,z0+tr+.04,u+.55,y,z0+tr+.04,u+.55,y,z0,u-.55,y,z0,anTread)}
for(const x of[u-.57,u+.57]){i.quad(x,F,ld,x,F-rise+hh,zf+.04,x,F-rise-.1,zf+.04,x,F-.3,ld,Ut(anTread,.7));bar(x,F,ld,x,F-rise,zf);bar(x,F,.06,x,F,ld);pin(x,F,ld,0);pin(x,F-rise,zf,0)}
pad(u-.6,zf,u+.6,zf+.9);anRec(i,M,p,"door",u-.8,0,u+.8,zf+.9);return}
let s=gx!=null?(gx>u?-1:1):G(u+3.5,.6)>=G(u-3.5,.6)?1:-1;
const tryS=q=>{let rise=r0,run=r0*1.5;for(let k=0;k<4;k++)rise=Math.max(.2,F-G(u+q*(lw+run),.6)),run=rise*1.5;return[rise,run]};
let[rise,run]=tryS(s);if(gx==null){const o=tryS(-s);(u+s*(lw+run)<-1.5||u+s*(lw+run)>L+1.5)&&u-s*(lw+o[1])>=-1.5&&u-s*(lw+o[1])<=L+1.5&&(s=-s,rise=o[0],run=o[1])}
const N=Math.max(2,Math.ceil(rise/.21)),hh=rise/N,tr=.3,z0=.12,z1=1.06,xe=u+s*lw,xf=xe+s*(N-1)*tr;
for(let k=0;k<N-1;k++){const y=F-(k+1)*hh,x=xe+s*k*tr,xa=Math.min(x,x+s*(tr+.04)),xb=Math.max(x,x+s*(tr+.04));i.quad(xa,y,z1,xb,y,z1,xb,y,z0,xa,y,z0,anTread)}
i.quad(xe,F,z1,xf,F-rise+hh,z1,xf,F-rise-.1,z1,xe,F-.3,z1,Ut(anTread,.7));bar(xe,F,z1,xf,F-rise,z1);pin(xf,F-rise,z1,1);pin(xe,F,z1,1);
bar(u-s*lw,F,ld,xe,F,ld);bar(u-s*lw,F,.06,u-s*lw,F,ld);pin(u-s*lw,F,ld,1);
pad(xf,z0,xf+s*1.1,1.2);pad(Math.min(u-.6,xf+s*1.1),1.2,Math.max(u+.6,xf+s*1.1),2.2);
anRec(i,M,p,"door",Math.min(u-.8,xf+s*1.1),0,Math.max(u+.8,xf+s*1.1),2.2)}
function anFront(b,L,F,S,C,n,W,NH){''')
open(fn, 'w', encoding='utf-8').write(s); print('ok', len(s))
