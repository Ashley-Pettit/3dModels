// Run with node tools/test-inverloch-civic-collision.mjs. No renderer or network required.
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';

const source = readFileSync(new URL('../app.html', import.meta.url), 'utf8');
const start = source.indexOf('  function invCivicCollision(');
const end = source.indexOf('  function townModelExtras(', start);
const make = runInNewContext(source.slice(start, end) + '\ninvCivicCollision');
const identity = (x,z) => [x,z];
const makeIndex = () => make(identity,(x,z) => Math.abs(x) <= 100 && Math.abs(z) <= 100);
const radius = .35;

// A narrow post between all five original car probes. A fast step crosses two grid cells.
const fixtures = makeIndex();
fixtures.post(-16,.8,.06);
assert.ok(fixtures.depth(-16,0,0,2.1,.8) > 0);
assert.equal(fixtures.canDrive(-19,0,0,-13,0,0,2.1,.8),false);
assert.equal(fixtures.canDrive(-19,0,0,-19,5,0,2.1,.8),true);
assert.equal(fixtures.depth(1000,1000,0,2.1,.8),0);

// Both endpoint rectangles clear the post, but the nose sweeps it during a turn.
const turn = makeIndex();
turn.post(1.42,1.42,.05);
assert.equal(turn.depth(0,0,0,2.1,.8),0);
assert.equal(turn.depth(0,0,Math.PI/2,2.1,.8),0);
assert.equal(turn.canDrive(0,0,0,0,0,Math.PI/2,2.1,.8),false);

const wall = makeIndex();
wall.box(0,0,0,2,30);
assert.ok(wall.canDrive(1.6,0,0,1.72,0,0,2.1,.8));
assert.equal(wall.canDrive(1.6,0,0,1.5,0,0,2.1,.8),false);
assert.equal(wall.canDrive(1.6,0,0,1.6,1,0,2.1,.8),false);
const walk = { x: -.95, z: 3 };
wall.slide(walk, -1.45, -3);
assert.ok(walk.x < -1.34 && walk.z > 2.95, 'walk alongside wall');
walk.x = 4;
wall.slide(walk,-3,3);
assert.ok(walk.x < -1.34, 'walk cannot cross a wall in a single tick');

// The mapped library wing projects in front of its glazed doors. The canopy and landing
// are open at walking height, with the path rail on one side and the building behind.
const D = JSON.parse(source.match(/^\s*const INV_TOWN = (.*);$/m)[1]);
const lib = makeIndex(), [ex,ez,,,nx,nz] = D.lib;
for (const [,kind,f] of D.b) if (kind === 1) lib.polygon(Array.from({length:f.length/2},(_,i) => [f[2*i],f[2*i+1]]));
const entry = (along,out) => [ex+nz*along+nx*out, ez-nx*along+nz*out];
lib.box(...entry(-.98,4.8),Math.atan2(nx,nz),.084,5.44);
for (const out of [.5,1.7,3,6,8]) assert.equal(lib.depth(...entry(-2.1,out),0,0,radius),0);
assert.ok(lib.depth(...entry(-2.1,-1),0,0,radius) > 0);
assert.ok(lib.depth(...entry(-.98,4.8),0,0,radius) > 0);

const cars = makeIndex(), id = [-8,5];
cars.addCars([{x:id[0],z:id[1],heading:Math.PI/4}]);
assert.ok(cars.depth(...id,0,0,radius) > 0);
cars.take(id);
assert.equal(cars.depth(...id,0,0,radius),0,'driving clears the original bay');
cars.park(id,12,13,Math.PI/2,3,.01,.02);
const restored = [];
cars.restoreCars({driveCar: (...pose) => restored.push(pose)});
assert.deepEqual(restored,[[...id,12,3,13,Math.PI/2,.01,.02]]);
assert.ok(cars.depth(13.9,13,0,0,radius) > 0);
assert.equal(cars.depth(...id,0,0,radius),0);
cars.hideCars([id]);
assert.equal(cars.depth(12,13,0,0,radius),0);
cars.hideCars([]);
assert.ok(cars.depth(12,13,0,0,radius) > 0);
cars.take(id);
cars.park(id,200,300,0);
assert.equal(cars.depth(200,300,0,0,radius),0,'pilot stays local');
console.log('A\'Beckett static collision fixtures passed');
