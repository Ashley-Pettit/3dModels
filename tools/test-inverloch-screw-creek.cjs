const assert = require('node:assert/strict');
const {readFileSync} = require('node:fs');
const path = require('node:path');
const {test} = require('node:test');
const vm = require('node:vm');

const host = readFileSync(path.join(__dirname, '../app.html'), 'utf8');
const source = host.slice(host.indexOf('  const INV_SCREW_CREEK ='), host.indexOf('  function townModelOn('));
const {frame, makeBridge, mask} = vm.runInNewContext(source + `
  ({frame: INV_SCREW_CREEK, makeBridge: invScrewCreekBridge, mask: invScrewCreekMask});`, {
  bsClamp: (x, a, b) => Math.max(a, Math.min(b, x)),
  bsLerp: (a, b, t) => a + (b - a) * t,
});
assert.ok(makeBridge && frame && mask);

function scene(west, east) {
  const parts = [], {length, local} = frame;
  const model = {
    groundAt(x, z) {
      const [s] = local(x, z);
      return west + (east - west) * s / length;
    },
    addParts(group) { parts.push(...group); },
  };
  const THREE = {
    Color: class { constructor() { this.r = this.g = this.b = 0.5; } },
    Matrix4: class { constructor() { this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]; } },
  };
  return {bridge: makeBridge(model, THREE), parts};
}

const close = (value, expected, epsilon = 0.001) => assert.ok(Math.abs(value - expected) < epsilon, `${value} != ${expected}`);
const world = (s, v) => { const [x, z] = frame.point(s, v); return {x, z}; };
function mockSlide(bridge, s0, v0, s1, v1, foot) {
  const from = world(s0, v0), next = world(s1, v1);
  bridge.slideRail(next, from.x, from.z, foot);
  return frame.local(next.x, next.z);
}

function inConvex(points, x, z) {
  const signs = points.map(([ax, az], i) => {
    const [bx, bz] = points[(i + 1) % points.length];
    return Math.sign((bx - ax) * (z - az) - (bz - az) * (x - ax));
  }).filter(Boolean);
  return signs.every(sign => sign === signs[0]);
}

test('Only the mapped bridge span is cut out of the native model', () => {
  const {roads, meta} = JSON.parse(readFileSync(path.join(__dirname, '../town3d/town.json'), 'utf8'));
  const native = roads.find(row => row[2] & 1 && row[5].join() === '20629,-4070,21022,-3948');
  assert.ok(native);
  assert.equal(native[3] / 10, frame.half * 2);
  const [[ax, az], [bx, bz]] = [frame.point(0), frame.point(frame.length)];
  close(ax, 2062.9); close(az, -407); close(bx, 2102.2); close(bz, -394.8);
  const split = mask().map(([lat, lon]) => [(lon - meta.origin[0]) * meta.metresPerDegree[0],
    (meta.origin[1] - lat) * meta.metresPerDegree[1]]);
  assert.ok(inConvex(split, ax, az) && inConvex(split, bx, bz));
  assert.ok(!inConvex(split, ...frame.point(-0.02)) && !inConvex(split, ...frame.point(frame.length + 0.02)));
  assert.ok(!inConvex(split, ...frame.point(20, 1.02)));
});

test('Single finite batch and walking surface follow both terrain profiles', () => {
  for (const [west, east] of [[2.8, 1.05], [1.97, 1.52]]) {
    const {bridge, parts} = scene(west, east);
    assert.equal(parts.length, 1);
    const {positions, colors} = parts[0];
    assert.equal(positions.length, colors.length);
    assert.ok(positions.length < 20_000 && positions.every(Number.isFinite));
    close(bridge.floorAt(...frame.point(0)), west + 0.11);
    close(bridge.floorAt(...frame.point(frame.length)), east + 0.11);
    close(bridge.floorAt(...frame.point(20, 0.5)), 2.65);
    assert.equal(bridge.floorAt(...frame.point(20, 1)), null);
    assert.equal(bridge.floorAt(...frame.point(frame.length + 0.02)), null);
  }
});

test('Either rail slides the pedestrian at deck height and leaves the ends and creek open', () => {
  const {bridge} = scene(2.8, 1.05);
  for (const side of [-1, 1]) {
    const outbound = mockSlide(bridge, 10, 0, 11, side, 2.65);
    close(outbound[0], 11); close(outbound[1], side * 0.425);
    const inbound = mockSlide(bridge, 10, side * 1.25, 11, side * 0.6, 2.65);
    close(inbound[0], 11); close(inbound[1], side * 1.195);
  }
  close(mockSlide(bridge, 10, 0, 11, 1, 0.9)[1], 1);
  close(mockSlide(bridge, 10, 0, 11, 1, 4.1)[1], 1);
  close(mockSlide(bridge, -0.4, 0, -0.3, 1, 2.65)[1], 1);
  close(mockSlide(bridge, -0.4, 0, 0.5, 0, 2.8)[0], 0.5);
});
