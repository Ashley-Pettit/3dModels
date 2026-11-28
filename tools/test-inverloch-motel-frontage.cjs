const assert = require('node:assert/strict');
const {readFileSync} = require('node:fs');
const path = require('node:path');
const {test} = require('node:test');
const vm = require('node:vm');

const app = readFileSync(path.join(__dirname, '../app.html'), 'utf8');
const host = app.slice(app.indexOf('  function invCivicCollision('), app.indexOf('  // Things made for the model\'s town centre alone.'));
const text = [];
const context = {
  bsLerp: (a, b, t) => a + (b - a) * t,
  document: {createElement() { return {getContext() {
    return {fillText(value) { text.push(value); }, fillRect() {}, strokeRect() {}};
  }}; }},
};
const addFrontage = vm.runInNewContext(host + ';invMotelFrontage', context);
const THREE = {
  Color: class { constructor(hex) { this.r = (hex >> 16) / 255; this.g = (hex >> 8 & 255) / 255; this.b = (hex & 255) / 255; } },
  Matrix4: class { constructor() { this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]; } },
};

function fixture() {
  const town = {}, batches = [];
  addFrontage(town, {addParts(parts) { batches.push(parts); }}, THREE);
  return {batches, grid: town.invStatic};
}

// Vicmap Parcel 5287818 boundary in Explore metres, with sub-decimetre rounding.
const parcel = [[-774.79,-1017.75],[-809.30,-1062.87],[-768.44,-1072.62],
  [-727.84,-1060.18],[-721.05,-1055.99],[-773.40,-1015.94]];
function inParcel(x, z) {
  let inside = false;
  for (let i = 0, j = parcel.length - 1; i < parcel.length; j = i++) {
    const [xi, zi] = parcel[i], [xj, zj] = parcel[j];
    if ((zi > z) !== (zj > z) && x < (xj - xi) * (z - zi) / (zj - zi) + xi) inside = !inside;
  }
  return inside;
}

test('The frontage is one ground-draped structure with only a local sign face', () => {
  const {batches} = fixture();
  assert.equal(batches.length, 1);
  const [structure] = batches[0];
  assert.equal(batches[0].length, 1);
  assert.equal(structure.onGround, true);
  assert.equal(structure.positions.length, structure.colors.length);
  assert.ok(structure.positions.length > 1000 && structure.positions.length / 9 < 3600);
  assert.equal(structure.uvs.length, structure.positions.length / 3 * 2);
  assert.equal(structure.map.width, 256);
  assert.equal(structure.map.height, 80);
  assert.ok(text.includes('INVERLOCH MOTEL'));
  assert.ok(structure.positions.every(Number.isFinite));
  for (let i = 0; i < structure.positions.length; i += 3) {
    assert.ok(inParcel(structure.positions[i], structure.positions[i + 2]), `${structure.positions[i]}, ${structure.positions[i + 2]} outside parcel`);
  }
});

test('Fence and hedge are solid while the motel driveway and outer road stay open', () => {
  const {grid} = fixture();
  const hit = ([x, z]) => grid.depth(x, z, 0, 0, 0.35);
  const west = [-800.60,-1062.98], dx = 34, dz = -8.25, length = Math.hypot(dx, dz);
  const at = (s, v = 0) => [west[0] + (dx * s - dz * v) / length, west[1] + (dz * s + dx * v) / length];
  assert.ok(hit(at(3)) > 0);
  assert.ok(hit(at(10, 0.5)) > 0);
  assert.ok(hit(at(15, 1.45)) > 0);
  for (const p of [at(3, -1), [-812.52,-1086.11], [-809.13,-1074.78], [-805.9,-1067.19], [-801,-1055.7], [-741,-1088]]) {
    assert.equal(hit(p), 0, `Unexpected street or driveway blocker at ${p}`);
  }
});
