const SCALE = .9649;
const THETA = -.22557;
const COS = Math.cos(THETA), SIN = Math.sin(THETA);
const SOURCE_SHELL = [9.348, 12.882];
const WORLD_SHELL = [18.6, -178.55];
const STAIRS_TOP = [14.28, -222.51];
const STAIRS_FOOT = [14.9, -212.12];
const NATIVE_PATH = [2.7, -184.9];
const identity = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

// Town.json's named Glade roof and the Esplanade survey line register the traced blockout.
// The upper path junction [14.2,-223.8] independently sets the stair landing.
export const clearings = [{ lat: -38.6353916, lon: 145.7302136, r: 2 }];
export function gladeWorld(x, z) {
  const u = (x - SOURCE_SHELL[0]) * SCALE;
  const v = (z - SOURCE_SHELL[1]) * SCALE;
  return [WORLD_SHELL[0] + COS * u - SIN * v, WORLD_SHELL[1] + SIN * u + COS * v];
}

const START = [13.9, -198.8];
const access = [NATIVE_PATH, [8.7, -188.7], [17.03, -190.32], [28.16, -190.51], [39.01, -191.42]];
const lowerTrail = [STAIRS_FOOT, [17.2, -208.4], [17.6, -204.4], START, [17.03, -191]];
const apronLink = [[17.03, -189.65], [16.59, -187.36]];
const shellShape = { anchor: SOURCE_SHELL, yaw: -.015, floor: .207 };
const stone = { anchor: [-27.816, -13.566], yaw: -.15, floor: .08 };
const timber = { anchor: [52.725, 7.068], yaw: -.49, floor: .08 };
const shelterWalk = 4.8;

function planar({ anchor, yaw }, x, z) {
  const c = Math.cos(yaw), s = Math.sin(yaw);
  return gladeWorld(anchor[0] + x * c + z * s, anchor[1] - x * s + z * c);
}

const frontEdge = s => [7.06 * s, -3.13 - 2.04 * Math.sqrt(1 - s * s)];
const shellOutline = [
  ...Array.from({ length: 25 }, (_, i) => frontEdge(Math.cos(i / 24 * Math.PI))),
  [-6.45, 5.2], [6.45, 5.2],
].map(([x, z]) => planar(shellShape, x, z));

function rectangle(shape, x, z, w, d) {
  return [[-1, -1], [1, -1], [1, 1], [-1, 1]]
    .map(([i, j]) => planar(shape, x + i * w / 2, z + j * d / 2));
}

function toBytes(encoded) {
  return Uint8Array.from(atob(encoded), c => c.charCodeAt(0));
}

function unpack16(encoded, signed) {
  const bytes = toBytes(encoded), view = new DataView(bytes.buffer);
  return signed
    ? Float32Array.from({ length: bytes.length / 2 }, (_, i) => view.getInt16(i * 2, true) * .002)
    : Uint16Array.from({ length: bytes.length / 2 }, (_, i) => view.getUint16(i * 2, true));
}

export async function loadGlade(assets) {
  const url = new URL("glade-soundshell-mesh.json", assets);
  const response = await fetch(url);
  if (!response.ok) throw new Error("Soundshell mesh request failed (" + response.status + ")");
  const data = await response.json();
  const decode = name => data[name].map(({ positions, normals, indices, colors, ...material }) => ({
    ...material,
    positions: unpack16(positions, true),
    indices: unpack16(indices, false),
    normals: Float32Array.from(toBytes(normals), n => (n > 127 ? n - 256 : n) / 127),
    ...(colors ? { colors: Float32Array.from(toBytes(colors), n => n / 255) } : {}),
  }));
  return { shell: decode("shell"), stone: decode("stone"), timber: decode("timber") };
}

function polygonContains(points, x, z) {
  let inside = false;
  for (let i = 0, j = points.length - 1; i < points.length; j = i++) {
    const [ax, az] = points[i], [bx, bz] = points[j];
    if ((az > z) !== (bz > z) && x < ax + (bx - ax) * (z - az) / (bz - az)) inside = !inside;
  }
  return inside;
}

function groundHeight(model, [x, z]) {
  return model.groundAt(x, z);
}

function highestGround(model, outline, centre) {
  let y = groundHeight(model, centre);
  for (let i = 0; i < outline.length; i++) {
    const a = outline[i], b = outline[(i + 1) % outline.length];
    for (let j = 0; j <= 4; j++) {
      const t = j / 4;
      const p = a.map((v, axis) => v + (b[axis] - v) * t);
      y = Math.max(y, groundHeight(model, p), groundHeight(model, p.map((v, axis) => (v + centre[axis]) / 2)));
    }
  }
  return y;
}

// Only the top of each walkable panel is indexed for standing height.
function supportIndex() {
  const grid = new Map(), cell = v => Math.floor(v / 3);
  function add(p) {
    const [ax, , az, bx, , bz, cx, , cz] = p;
    const area = (bx - ax) * (cz - az) - (bz - az) * (cx - ax);
    if (Math.abs(area) < 1e-8) return;
    for (let x = cell(Math.min(ax, bx, cx)); x <= cell(Math.max(ax, bx, cx)); x++) {
      for (let z = cell(Math.min(az, bz, cz)); z <= cell(Math.max(az, bz, cz)); z++) {
        const key = x * 65536 + z;
        if (!grid.has(key)) grid.set(key, []);
        grid.get(key).push([p, area]);
      }
    }
  }
  function at(x, z, base) {
    for (const [p, area] of grid.get(cell(x) * 65536 + cell(z)) || []) {
      const [ax, ay, az, bx, by, bz, cx, cy, cz] = p;
      const u = ((x - ax) * (cz - az) - (z - az) * (cx - ax)) / area;
      const v = ((bx - ax) * (z - az) - (bz - az) * (x - ax)) / area;
      if (u >= -1e-6 && v >= -1e-6 && u + v <= 1.000001) base = Math.max(base, ay + u * (by - ay) + v * (cy - ay));
    }
    return base;
  }
  return { add, at };
}

function part(vertices, color, onGround = false) {
  return { positions: Float32Array.from(vertices), color, roughness: .94, matrix: identity, onGround, doubleSide: true };
}

function panels(pos, support) {
  const tri = (a, b, c) => {
    const p = [...a, ...b, ...c];
    pos?.push(...p);
    support?.add(p);
  };
  return (a, b, c, d) => { tri(a, b, c); tri(a, c, d); };
}

function skirt(model, outline, top, positions) {
  const quad = panels(positions);
  for (let i = 0; i < outline.length; i++) {
    const a = outline[i], b = outline[(i + 1) % outline.length];
    const n = Math.ceil(Math.hypot(b[0] - a[0], b[1] - a[1]));
    const at = j => a.map((v, k) => v + (b[k] - v) * j / n);
    for (let j = 0; j < n; j++) {
      const p = at(j), q = at(j + 1);
      quad([p[0], top, p[1]], [q[0], top, q[1]], [q[0], groundHeight(model, q) - .08, q[1]], [p[0], groundHeight(model, p) - .08, p[1]]);
    }
  }
}

function shapeHeight(x, z) {
  const clamp = q => Math.min(1, Math.max(0, q));
  const smooth = t => clamp(t) ** 2 * (3 - 2 * clamp(t));
  return .19 * Math.cos((x + 25) / 37) + .09 * Math.sin(x * .16 + z * .11) + .06 * Math.sin(z * .27)
    + 2.35 * (1 - smooth((z + 34 - 3 * Math.sin(x * .036)) / (14 + 2 * Math.sin(x * .06) - 3 * Math.sin(x * .036))))
    - .5 * smooth((z - 28) / 20) - 1.48 * smooth((z - 42) / 26);
}

function rigidParts(kit, shape, floor) {
  const sourceFloor = shapeHeight(...shape.anchor) + shape.floor;
  const [ox, oz] = gladeWorld(0, 0);
  const m = [COS * SCALE, 0, SIN * SCALE, 0, 0, SCALE, 0, 0,
    -SIN * SCALE, 0, COS * SCALE, 0, ox, floor - sourceFloor * SCALE, oz, 1];
  return kit.map(pr => ({ ...pr, matrix: m }));
}

function apron(model, top, heights) {
  const vertices = [], quad = panels(vertices, heights), rows = 12, cols = 24;
  const edge = (i, j) => {
    const t = i / rows, s = j * 2 / cols - 1, [x, z] = frontEdge(s);
    const p = planar(shellShape, s * 8.4 * (1 - t) + x * t, -9.355 * (1 - t) + z * t);
    const y = groundHeight(model, p) + .045;
    const blend = t * t * (3 - 2 * t);
    return [p[0], y + (top - .012 - y) * blend, p[1]];
  };
  for (let i = 0; i < rows; i++) for (let j = 0; j < cols; j++) quad(edge(i, j), edge(i + 1, j), edge(i + 1, j + 1), edge(i, j + 1));
  return { ...part(vertices, [.134, .236, .070]), opacity: .65 };
}

// Use a shorter connector where the handoff leaves the existing mapped gravel spine.
function pathParts(model, points, width, heights, color) {
  const mesh = [], draw = panels(mesh), support = panels(null, heights), station = [];
  for (let i = 0; i < points.length; i++) {
    const a = points[Math.max(0, i - 1)], b = points[Math.min(points.length - 1, i + 1)];
    const dx = b[0] - a[0], dz = b[1] - a[1], l = Math.hypot(dx, dz);
    station.push([-dz / l, dx / l]);
  }
  for (let i = 1; i < points.length; i++) {
    const a = points[i - 1], b = points[i], dx = b[0] - a[0], dz = b[1] - a[1];
    const n = Math.ceil(Math.hypot(dx, dz) / .65);
    const at = (j, side) => {
      const t = j / n, nx = station[i - 1][0] * (1 - t) + station[i][0] * t, nz = station[i - 1][1] * (1 - t) + station[i][1] * t;
      return [a[0] + dx * t + nx * side * width / 2, .045, a[1] + dz * t + nz * side * width / 2];
    };
    const lifted = ([x, y, z]) => [x, model.groundAt(x, z) + y, z];
    for (let j = 0; j < n; j++) {
      const corners = [at(j, 1), at(j + 1, 1), at(j + 1, -1), at(j, -1)];
      draw(...corners);
      support(...corners.map(lifted));
    }
  }
  return part(mesh, color, true);
}

function stairs(model, heights, THREE) {
  const a = STAIRS_TOP, b = STAIRS_FOOT;
  const dx = b[0] - a[0], dz = b[1] - a[1], length = Math.hypot(dx, dz), ux = dx / length, uz = dz / length;
  const width = 1.63 * SCALE, steps = 12, tread = length / steps;
  const at = (s, x = 0) => [a[0] + ux * s + uz * x, a[1] + uz * s - ux * x];
  const concrete = [], draw = panels(concrete, heights);
  const high = Math.max(model.roadSurfaceAt?.(...a) ?? -Infinity, groundHeight(model, a) + .06);
  const low = groundHeight(model, b) + .05;
  const levels = Array.from({ length: steps }, (_, i) => {
    const start = i * tread;
    return Math.max(high + (low - high) * i / steps, ...[-width / 2, 0, width / 2]
      .flatMap(x => [start, start + tread / 2, start + tread].map(s => groundHeight(model, at(s, x)) + .025)));
  });
  for (let i = levels.length - 2; i >= 0; i--) levels[i] = Math.max(levels[i], levels[i + 1]);
  for (let i = 0; i < steps; i++) {
    const top = levels[i], from = i * tread, to = from + tread;
    const outline = [at(from, -width / 2), at(to, -width / 2), at(to, width / 2), at(from, width / 2)];
    draw(...outline.map(([x, z]) => [x, top, z]));
    const wall = panels(concrete);
    for (const [a, b] of [[outline[0], outline[1]], [outline[2], outline[3]]]) {
      wall([a[0], top, a[1]], [b[0], top, b[1]], [b[0], groundHeight(model, b) - .05, b[1]], [a[0], groundHeight(model, a) - .05, a[1]]);
    }
    const edge = [outline[1], outline[2]], next = levels[i + 1];
    wall(...edge.map(([x, z]) => [x, top, z]), ...edge.slice().reverse().map(p => [p[0], next ?? groundHeight(model, p), p[1]]));
  }
  const railParts = [];
  for (const side of [-1, 1]) {
    const offset = side * .88 * SCALE, [x, z] = at(length / 2, offset);
    const rise = levels.at(-1) - levels[0], h = .86;
    const railing = new THREE.BoxGeometry(.047, .047, Math.hypot(length, rise));
    const transform = new THREE.Matrix4().compose(new THREE.Vector3(x, (levels[0] + levels.at(-1)) / 2 + h, z),
      new THREE.Quaternion().setFromEuler(new THREE.Euler(-Math.atan2(rise, length), Math.atan2(ux, uz), 0, "YXZ")), new THREE.Vector3(1, 1, 1));
    railing.applyMatrix4(transform);
    railParts.push({ ...part(railing.attributes.position.array, [.319, .342, .328]), indices: railing.index.array });
    railing.dispose();
    for (let i = 0; i <= 4; i++) {
      const [px, pz] = at(length * i / 4, offset), y = levels[Math.min(steps - 1, Math.floor(steps * i / 4))];
      const post = new THREE.BoxGeometry(.047, h, .047).translate(px, y + h / 2, pz);
      railParts.push({ ...part(post.attributes.position.array, [.319, .342, .328]), indices: post.index.array });
      post.dispose();
    }
  }
  return [part(concrete, [.386, .402, .356]), ...railParts];
}

function shelterEntry(model, heights, shape, floor, edge, z) {
  const mesh = [], sides = [], quad = panels(mesh, heights), wall = panels(sides), rows = 12;
  const at = (i, side) => {
    const t = i / rows, p = planar(shape, edge + Math.sign(edge) * shelterWalk * t, z + .70 * side);
    const terrain = groundHeight(model, p) + .045;
    return [p[0], floor + (terrain - floor) * t, p[1]];
  };
  const down = p => [p[0], model.groundAt(p[0], p[2]) - .035, p[2]];
  for (let i = 0; i < rows; i++) {
    const a = at(i, -1), b = at(i + 1, -1), c = at(i + 1, 1), d = at(i, 1);
    quad(a, b, c, d);
    wall(a, b, down(b), down(a));
    wall(c, d, down(d), down(c));
  }
  return [part(mesh, [.365, .355, .308]), part(sides, [.249, .254, .199])];
}

export function installGlade(THREE, kit, collision) {
  const levels = new WeakMap();
  const solid = (shape, x, z, w, d) => collision.polygon(rectangle(shape, x, z, w, d));
  solid(shellShape, 0, 4.68, 9.05, .34);
  for (const side of [-1, 1]) {
    solid(shellShape, 6.58 * side, .3, .24, 9);
    for (const z of [-3.85, 3.8]) solid(shellShape, 6.56 * side, z, .59, .66);
    for (const z of [-4.09, -1.37, 1.37, 4.09]) solid(stone, 2.632 * side, z, .50, .52);
    for (const z of [-3.124, 0, 3.124]) solid(timber, 3.698 * side, z, .19, .19);
  }
  for (const z of [-4.09, 4.09]) solid(stone, 0, z, 5.324, .35);
  solid(stone, -2.632, 0, .36, 8.175);
  solid(stone, 2.632, 2.88, .36, 2.415);
  solid(stone, .43, -2.694, .87, .71);
  solid(timber, .83, -2.98, 2.3, .21);
  for (const [shape, w, d] of [[stone, 6.05, 9.29], [timber, 8.6, 7.1]]) {
    for (const side of [-1, 1]) solid(shape, 0, side * d / 4, w * .46, 1.42);
  }
  const shelters = [
    { shape: stone, geometry: kit.stone, w: 6.27, d: 9.53, edgeSide: 1, entryZ: -2.71, tie: [-16.2, -185.65] },
    { shape: timber, geometry: kit.timber, w: 8.82, d: 7.34, edgeSide: -1, entryZ: -1.4, tie: access.at(-1) },
  ];
  // The raised platform edges are solid, with an opening at each graded entry.
  for (const { shape, w, d, edgeSide, entryZ } of shelters) {
    const edge = w / 2 * edgeSide;
    solid(shape, -edge, 0, .10, d);
    for (const side of [-1, 1]) solid(shape, 0, side * d / 2, w, .10);
    for (const [a, b] of [[-d / 2, entryZ - .7], [entryZ + .7, d / 2]]) {
      solid(shape, edge, (a + b) / 2, .10, b - a);
    }
  }
  const dx = STAIRS_FOOT[0] - STAIRS_TOP[0], dz = STAIRS_FOOT[1] - STAIRS_TOP[1], l = Math.hypot(dx, dz);
  for (const side of [-1, 1]) collision.worldBox((STAIRS_TOP[0] + STAIRS_FOOT[0]) / 2 + side * dz / l * .85,
    (STAIRS_TOP[1] + STAIRS_FOOT[1]) / 2 - side * dx / l * .85, Math.atan2(dx, dz), .08, l);

  function install(model) {
    if (levels.has(model)) return;
    const heights = supportIndex(), bases = [], solids = [];
    const deck = highestGround(model, shellOutline, WORLD_SHELL) + .10;
    skirt(model, shellOutline, deck - .012, bases);
    solids.push({ outline: shellOutline, y: deck });
    const parts = [...rigidParts(kit.shell, shellShape, deck), apron(model, deck, heights),
      ...stairs(model, heights, THREE), pathParts(model, access, 1.35, heights, [.344, .30, .224]),
      pathParts(model, lowerTrail, 1.6, heights, [.391, .363, .292]),
      pathParts(model, apronLink, 1.36, heights, [.344, .30, .224])];
    for (const { shape, geometry, w, d, edgeSide, entryZ, tie } of shelters) {
      const outline = rectangle(shape, 0, 0, w, d);
      const floor = highestGround(model, outline, planar(shape, 0, 0)) + .035;
      const edge = w / 2 * edgeSide;
      const approach = planar(shape, edge + shelterWalk * edgeSide, entryZ);
      parts.push(...rigidParts(geometry, shape, floor), ...shelterEntry(model, heights, shape, floor, edge, entryZ),
        pathParts(model, [approach, tie], 1.4, heights, [.344, .30, .224]));
      skirt(model, outline, floor - .03, bases);
      solids.push({ outline, y: floor });
    }
    parts.push(part(bases, [.335, .354, .317]));
    model.addParts(parts);
    levels.set(model, { heights, solids });
  }
  function heightAt(model, x, z, base) {
    if (x < -42 || x > 74 || z < -226 || z > -167) return base;
    const data = levels.get(model);
    if (!data) return base;
    for (const { outline, y } of data.solids) if (polygonContains(outline, x, z)) base = Math.max(base, y);
    return data.heights.at(x, z, base);
  }
  const jump = (name, stand, target) => ({
    name, target, walk: { x: stand[0], z: stand[1], yaw: Math.atan2(stand[0] - target[0], stand[1] - target[1]), pitch: -.05 },
  });
  return { install, heightAt, jumps: [
    jump("Inverloch Soundshell", START, WORLD_SHELL),
    jump("The Glade · Esplanade steps", [12.5, -223.45], STAIRS_FOOT),
  ] };
}
