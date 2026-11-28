// Run with node tools/test-inverloch-recovery.cjs.
const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const path = require("node:path");
const { test } = require("node:test");
const { runInNewContext } = require("node:vm");

const app = readFileSync(path.join(__dirname, "..", "beta", "app.html"), "utf8");
const start = app.indexOf("    C.canUnstickWalk =");
const end = app.indexOf("    const unPlace =", start);
assert.ok(start >= 0 && end > start);

function fixture({ cars = [], driver = null, solid = () => false, walk = true } = {}) {
  const position = { x: 0, z: 0, set(x, y, z) { Object.assign(this, { x, y, z }); } };
  const F = { pos: position, eye: 2, yaw: 0, wv: [1, 2], jumpH: 1, goTo: {} };
  const C = {}, T = { walk, traffic: { cars: [] } };
  const classes = new Set();
  const unBtn = { hidden: true, classList: {
    contains: key => classes.has(key), add: key => classes.add(key), remove: key => classes.delete(key)
  } };
  const parked = (x, z, reach) => cars.map(car => ({ ...car, d: Math.hypot(x - car.x, z - car.z) }))
    .filter(car => car.d <= reach).sort((a, b) => a.d - b.d)[0];
  const query = runInNewContext(app.slice(start, end) + "\n({ walkClear, vacant, rememberWalk, recoverWalk })", {
    C, T, F, unBtn, car: driver, veh: driver ? "car" : null, place: "inv", owns: [], parked, solid,
    inside: () => true, ground: () => 0, m: { groundAt: () => 0, waterAt: () => -1 },
    toast() {}, performance: { now: () => 100 }
  });
  return { C, F, T, unBtn, ...query };
}

test("walk recovery rechecks the trail when a sedan has entered it", () => {
  const f = fixture();
  for (const z of [0, 3, 5]) { f.F.pos.z = z; f.rememberWalk(100); }
  f.T.traffic.cars.push({ x: 0, z: 3, h: Math.PI / 2 });
  f.recoverWalk();
  assert.equal(f.F.pos.z, 0);
  assert.equal(f.F.goTo, null);
  assert.equal(f.F.jumpH, 0);
});

test("a shallow overlap clears automatically; a sealed exit keeps the prompt and position", () => {
  const shallow = fixture({ solid: (x, z) => z < 0.8 });
  shallow.C.walkStuck();
  assert.ok(shallow.F.pos.z >= 1.15);
  const sealed = fixture({ solid: () => true });
  sealed.C.walkStuck();
  assert.equal(sealed.unBtn.hidden, false);
  sealed.recoverWalk();
  assert.equal(sealed.F.pos.x, 0);
  assert.equal(sealed.F.pos.z, 0);
  assert.equal(fixture({ walk: false }).C.canUnstickWalk(), false);
});

test("a native car can use its own space without masking another parked car", () => {
  const driver = { id: [10, 10], x: 0, z: 0, h: 0 };
  const alone = fixture({ driver, cars: [driver] });
  assert.ok(alone.vacant(0, 0, 0, 2.25, 0.95));
  assert.equal(alone.walkClear(0, 0), false);
  assert.ok(alone.walkClear(-1.8, 0));
  const second = { id: [11, 10], x: 1.8, z: 0, h: 0 };
  const crowded = fixture({ driver, cars: [driver, second] });
  assert.equal(crowded.vacant(0, 0, 0, 2.25, 0.95), false);
});

test("the town-wide index keeps a pedestrian clear of the borrowed car on exit", () => {
  const driver = { id: [10, 10], x: 0, z: 0, h: 0 };
  const f = fixture({ driver });
  f.T.invStatic = { wholeTown: true, depth: () => 0 };
  assert.equal(f.walkClear(0, 1.8), false);
  assert.ok(f.walkClear(-1.8, 0));
  assert.ok(f.vacant(0, 0, 0, 2.25, 0.95));
});
