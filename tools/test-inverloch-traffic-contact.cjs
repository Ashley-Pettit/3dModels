const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const path = require("node:path");
const {test} = require("node:test");
const app = fs.readFileSync(path.join(__dirname, "..", "app.html"), "utf8");
const between = (start, end) => app.slice(app.indexOf(start), app.indexOf(end, app.indexOf(start)));
const mechanics = between("  const townTrafficBodies", "  function townCritter(");
const walkCode = between("  function bsFlyTick(", "  function bsStrike(");
const normalDrive = between("        const trafficTravel = ", "        if (bump > 1.5)");
const at = (x,z,h=0,y=0) => ({x,z,h,y});
class MatrixStub {
  constructor() { this.elements = [1]; }
  makeScale() { return this; } set() { return this; } identity() { return this; }
  compose() { return this; } setFromEuler() { return this; }
}
async function world(place="inv") {
  let now=5000, startup;
  const F={pos: at(0,0,0,2), keys:new Set(), stick:{x:0,y:0}, lookStick:{x:0,y:0}, vert:0, yaw:0, pitch:0, eye:2, walk:()=>2};
  const T={cfg:{place}, walk:true};
  const B={THREE:Object.fromEntries(["Matrix4","Quaternion","Euler","Vector3"].map(k=>[k,MatrixStub]))};
  const BS={B,town:T,fly:F};
  const ctx=vm.createContext({BS, setTimeout: f=>{startup=f;}, performance:{now:()=>now}, matchMedia:()=>({matches:false}), townLaneOf:()=>0,
    bsClamp:(x,lo,hi)=>Math.max(lo,Math.min(x,hi)), bsBlock:()=>{}, bsUnstick:()=>{throw Error("unexpected sidestep into traffic");},
    townPlaneParts:()=>[], townStreetData:async()=>({names:[],roads:[-100,0,100].map(x=>({cls:0,pts:[x,-100,x,100]}))})});
  vm.runInContext(mechanics+walkCode+"; globalThis.sweep=townTrafficSweep; globalThis.shape=townTrafficBodies;",ctx);
  const parts=()=>({setMatrix(){},remove(){}});
  const P=ctx.townTraffic(T,{addParts:parts},F,()=>0,T.cfg);
  T.traffic=P; await startup(); P.cars.length=0;
  const tick=()=>{now+=100; P.frame();};
  function npc(x,z,v=0) {
    const road={p:[x,-100,x,100],n:2,one:false,lane:0};
    const C={x,z,y:0,h:0,r:road,i:0,d:1,s:z+100,v,top:14,ln:0,still:0,p:0,rl:0,parts:parts()};
    P.cars.push(C); return C;
  }
  function drive(car, v, dt=.1) {
    const locals={T,car,v,dt,bump:0,mine:true,slide:false,st:dt,gc:false,R:{carTurn:100},C:{starTil:0},
      SHAPE:[],inside:()=>true,fits:()=>true,wrap:n=>Math.atan2(Math.sin(n),Math.cos(n)),snd:{thud(){}}};
    Object.assign(ctx,locals); vm.runInContext("{"+normalDrive+"}",ctx); return car;
  }
  return {ctx,T,F,P,tick,npc,drive};
}
test("sweeps cover fast opposed travel and a rotating corner while separated paths stay clear", async()=>{
  const {ctx:{sweep,shape}}=await world();
  const s=(a,A,ka,b,B,kb)=>sweep(a,A,shape[ka],b,B,shape[kb]);
  const headOn=s(at(0,-10),at(0,10),"car",at(0,10),at(0,-10),"car");
  assert.ok(Math.abs(headOn-(20-4.44)/40)<0.001, headOn);
  assert.equal(s(at(0,-10),at(0,10),"walk",at(2,-10),at(2,10),"car"),1);
  assert.ok(s(at(0,0),at(0,0,Math.PI/2),"car",at(1.65,1.65),at(1.65,1.65),"walk")<1);
  assert.equal(s(at(-5,0,0,2),at(5,0,0,2),"walk",at(0,0),at(0,0),"car"),1);
  assert.equal(s(at(0,0),at(0,-1),"car",at(0,0),at(0,0),"car"),1);
  assert.equal(s(at(1.1,0),at(2,0),"walk",at(0,0),at(0,0),"car"),1);
  assert.equal(s(at(1.1,0),at(0,0),"walk",at(0,0),at(0,0),"car"),0);
});
test("the live registry ignores hidden and uninitialised cars, then releases the exact taken car", async()=>{
  const {P,npc}=await world(); const c=npc(0,0), other=npc(20,0);
  assert.ok(P.occupied("walk",0,0)); assert.equal(P.occupied("walk",0,0,0,5),false);
  c.away=true; assert.equal(P.occupied("walk",0,0),false); c.away=false;
  c.h=null; assert.equal(P.occupied("walk",0,0),false); c.h=0;
  assert.equal(P.take(c).parts,c.parts); assert.equal(P.occupied("walk",0,0),false);
  assert.ok(P.cars.includes(other)); P.dispose(); assert.equal(P.cars.length,0);
  const otherTown=await world("logan"); assert.equal(otherTown.P.travel,undefined);
});
test("normal walk input cannot penetrate or trigger the stuck side-step, and reverses away", async()=>{
  const {F,P,ctx,tick,npc}=await world(); const c=npc(0,0); c.top=0;
  F.pos.x=2.1; F.stick.x=-1;
  for(let i=0;i<25;i++){ ctx.bsFlyTick(.1); tick(); assert.equal(P.occupied("walk",F.pos.x,F.pos.z),false); }
  assert.ok(F.pos.x>=1.3-0.001);
  F.stick.x=1; ctx.bsFlyTick(.1); assert.ok(F.pos.x>2);
  assert.ok(P.cars.includes(c));
});
test("normal driving stops within its existing substeps, and can back clear", async()=>{
  const {T,drive,P,npc}=await world(); npc(0,0);
  const car={...at(0,-6),dir:0,v:80,steer:0};
  T.car={in:true,pose:()=>({...car,k:"car"})};
  drive(car,80); assert.equal(car.v,0); assert.ok(Math.abs(car.z+4.44)<0.002,car.z);
  assert.equal(P.occupied("car",car.x,car.z,car.h,car.y),false);
  car.v=-3; drive(car,-3); assert.ok(car.z< -4.7);
});
test("an NPC holds its lane and cursor for more than ten seconds with a stationary player, then resumes", async()=>{
  const {F,tick,npc,P}=await world(); const c=npc(0,-2.8,14), road=c.r;
  const start=c.s; for(let i=0;i<130;i++) tick();
  assert.ok(P.cars.includes(c)); assert.equal(c.r,road); assert.ok(Math.abs(c.z+2.8)<1e-8); assert.equal(c.s,start); assert.equal(c.v,0);
  F.pos.x=8; for(let i=0;i<10;i++)tick(); assert.ok(c.s>start+1);
});
test("side-on driving and a turning route cannot advance the NPC cursor into the player", async()=>{
  const {T,tick,npc}=await world(); const c=npc(0,-3.5,14);
  T.car={in:true,pose:()=>({...at(0.05,0,Math.PI/2),k:"car"})};
  const s=c.s; tick(); assert.equal(c.s,s); assert.equal(c.v,0);
  // Just before a junction, the outgoing route turns left into the side of the car.
  const r={p:[0,-5,0,0,-15,0],n:3,one:false,lane:0};
  Object.assign(c,{r,i:0,d:1,s:4.95,x:0,z:-0.05,h:0,v:14,ln:0});
  T.car.pose=()=>({...at(-2.7,0,0),k:"car"});
  tick(); assert.equal(c.r,r); assert.equal(c.i,0); assert.equal(c.s,4.95); assert.equal(c.h,0);
});

test("simultaneous perpendicular travel catches a crossing wholly between each endpoint", async()=>{
  const {P,F,tick,npc}=await world(); const c=npc(0,0,14); F.pos.x=-5; F.pos.z=2.8;
  assert.equal(P.travel("walk",-5,2.8,0,5,2.8,0,0),1); // at its old pose the NPC clears this path
  F.pos.x=5; const before=c.s; tick();
  assert.equal(c.s,before); assert.equal(c.v,0); // at its new pose the walker also clears the end of the NPC route
  tick(); assert.ok(c.s>before);
});
