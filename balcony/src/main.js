
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

const q = new URLSearchParams(location.search);
const SHOT = q.get('shot') || '';
const canvas = document.getElementById('c');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, preserveDrawingBuffer: !!SHOT });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.setSize(innerWidth, innerHeight, false);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.95;
renderer.outputColorSpace = THREE.SRGBColorSpace;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xdbe3ea);
scene.fog = new THREE.Fog(0xdbe3ea, 45, 120);
const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
scene.environmentIntensity = 0.55;

// ---------- textures ----------
function canvasTex(w, h, draw) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
  return t;
}
function rep(t, x, y) { const c = t.clone(); c.needsUpdate = true; c.repeat.set(x, y); return c; }

// weatherboards: 1 m tile, boards ~180 mm
const weatherTex = canvasTex(64, 256, (g, w, h) => {
  const n = 6, bh = h / n;
  for (let i = 0; i < n; i++) {
    const y = i * bh;
    const gr = g.createLinearGradient(0, y, 0, y + bh);
    gr.addColorStop(0, '#d9dbd8'); gr.addColorStop(0.12, '#f1f1ee'); gr.addColorStop(1, '#fbfbf9');
    g.fillStyle = gr; g.fillRect(0, y, w, bh);
    g.fillStyle = '#b9bcb9'; g.fillRect(0, y, w, 2);
  }
});
// corrugated roof: 1 m tile, ribs at 76 mm
const roofTex = canvasTex(256, 16, (g, w, h) => {
  const n = 13, rw = w / n;
  for (let i = 0; i < n; i++) {
    const gr = g.createLinearGradient(i * rw, 0, (i + 1) * rw, 0);
    gr.addColorStop(0, '#9aa1a6'); gr.addColorStop(0.5, '#d2d7da'); gr.addColorStop(1, '#9aa1a6');
    g.fillStyle = gr; g.fillRect(i * rw, 0, rw, h);
  }
});
// composite decking: 1 m tile, boards 137 mm with 5 mm gaps
const deckTex = canvasTex(512, 512, (g, w, h) => {
  g.fillStyle = '#3a2c22'; g.fillRect(0, 0, w, h);
  const n = 7, bh = h / n;
  for (let i = 0; i < n; i++) {
    const base = [138, 104, 78].map(v => v + (Math.random() * 14 - 7));
    g.fillStyle = `rgb(${base.join(',')})`;
    g.fillRect(0, i * bh + 2, w, bh - 4);
    for (let k = 0; k < 40; k++) {
      g.strokeStyle = `rgba(60,40,28,${0.05 + Math.random() * 0.08})`;
      g.lineWidth = 1 + Math.random() * 1.5;
      const yy = i * bh + 4 + Math.random() * (bh - 8);
      g.beginPath(); g.moveTo(0, yy); g.bezierCurveTo(w * 0.3, yy + 3, w * 0.6, yy - 3, w, yy + 1); g.stroke();
    }
  }
});
const grassTex = canvasTex(256, 256, (g, w, h) => {
  g.fillStyle = '#6e8f47'; g.fillRect(0, 0, w, h);
  for (let i = 0; i < 4000; i++) {
    const s = Math.random();
    g.fillStyle = s < 0.5 ? 'rgba(90,120,55,0.6)' : 'rgba(130,160,85,0.5)';
    g.fillRect(Math.random() * w, Math.random() * h, 2, 3);
  }
});
const paveTex = canvasTex(256, 256, (g, w, h) => {
  g.fillStyle = '#d9d1c3'; g.fillRect(0, 0, w, h);
  for (let i = 0; i < 1500; i++) { g.fillStyle = `rgba(150,140,120,${Math.random() * 0.15})`; g.fillRect(Math.random() * w, Math.random() * h, 3, 3); }
  g.strokeStyle = '#bdb4a4'; g.lineWidth = 3; g.strokeRect(0, 0, w, h); g.beginPath(); g.moveTo(w / 2, 0); g.lineTo(w / 2, h); g.stroke();
});

// ---------- materials ----------
const M = {
  white: new THREE.MeshStandardMaterial({ color: 0xf5f5f2, roughness: 0.85 }),
  black: new THREE.MeshStandardMaterial({ color: 0x1c1e21, roughness: 0.45, metalness: 0.3 }),
  roof: new THREE.MeshStandardMaterial({ color: 0xffffff, map: roofTex, roughness: 0.45, metalness: 0.35, side: THREE.DoubleSide }),
  roofPlain: new THREE.MeshStandardMaterial({ color: 0xb7bdc1, roughness: 0.5, metalness: 0.3, side: THREE.DoubleSide }),
  gutter: new THREE.MeshStandardMaterial({ color: 0xa9b0b4, roughness: 0.4, metalness: 0.4 }),
  ceiling: new THREE.MeshStandardMaterial({ color: 0xf7f7f4, roughness: 0.9, side: THREE.DoubleSide }),
  fascia: new THREE.MeshStandardMaterial({ color: 0x6b5140, roughness: 0.7 }),
  tread: new THREE.MeshStandardMaterial({ color: 0x3c3e41, roughness: 0.7 }),
  concrete: new THREE.MeshStandardMaterial({ color: 0xb8b4ab, roughness: 0.95 }),
  stump: new THREE.MeshStandardMaterial({ color: 0xa7a299, roughness: 0.95 }),
  under: new THREE.MeshStandardMaterial({ color: 0x5b4b3d, roughness: 0.9 }),
  dark: new THREE.MeshStandardMaterial({ color: 0x8a837b, roughness: 0.95 }),
  glass: new THREE.MeshStandardMaterial({ color: 0x4e6672, roughness: 0.04, metalness: 0.1 }),
  obscure: new THREE.MeshStandardMaterial({ color: 0x9fb0b8, roughness: 0.35, metalness: 0.2 }),
  fenceGlass: new THREE.MeshStandardMaterial({ color: 0xcfe7e2, roughness: 0.05, metalness: 0.1, transparent: true, opacity: 0.22, depthWrite: false }),
  water: new THREE.MeshStandardMaterial({ color: 0x3fa6cf, roughness: 0.1, metalness: 0.15 }),
  coping: new THREE.MeshStandardMaterial({ color: 0xc9c2b4, roughness: 0.9 }),
  leaf: new THREE.MeshStandardMaterial({ color: 0x4f7a3c, roughness: 0.95, flatShading: true }),
  leaf2: new THREE.MeshStandardMaterial({ color: 0x3f6633, roughness: 0.95, flatShading: true }),
  trunk: new THREE.MeshStandardMaterial({ color: 0x6d5a48, roughness: 0.95 }),
  wicker: new THREE.MeshStandardMaterial({ color: 0x8a7f72, roughness: 0.9 }),
  tabletop: new THREE.MeshStandardMaterial({ color: 0x9a7655, roughness: 0.6 }),
};
const wb = (w, h) => new THREE.MeshStandardMaterial({ color: 0xffffff, map: rep(weatherTex, w, h), roughness: 0.85 });
const deckMat = (w, d) => new THREE.MeshStandardMaterial({ color: 0xffffff, map: rep(deckTex, w, d), roughness: 0.75 });

// ---------- helpers ----------
let G = scene; // where new pieces go (the French doors and the plain window each get their own group, to switch between)
function add(m, cast = true, recv = true) { m.castShadow = cast; m.receiveShadow = recv; G.add(m); return m; }
function boxMM(x0, y0, z0, x1, y1, z1, mat) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(Math.abs(x1 - x0), Math.abs(y1 - y0), Math.abs(z1 - z0)), mat);
  m.position.set((x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2);
  return add(m);
}
function poly(pts, mat, uDir, scale = 1) {
  const P = pts.map(p => new THREE.Vector3(...p));
  const n = new THREE.Vector3().subVectors(P[1], P[0]).cross(new THREE.Vector3().subVectors(P[2], P[0])).normalize();
  const u = (uDir ? new THREE.Vector3(...uDir) : new THREE.Vector3().subVectors(P[1], P[0])).normalize();
  const v = new THREE.Vector3().crossVectors(n, u).normalize();
  const pos = [], uv = [];
  for (let i = 1; i < P.length - 1; i++) for (const p of [P[0], P[i], P[i + 1]]) { pos.push(p.x, p.y, p.z); uv.push(p.dot(u) / scale, p.dot(v) / scale); }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.computeVertexNormals();
  return add(new THREE.Mesh(g, mat));
}
// a beam between two points with a square/rect section
function beam(a, b, w, h, mat) {
  const A = new THREE.Vector3(...a), B = new THREE.Vector3(...b);
  const len = A.distanceTo(B);
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, len), mat);
  m.position.copy(A).add(B).multiplyScalar(0.5);
  m.lookAt(B);
  return add(m);
}
function instanced(geo, mat, matrices) {
  const im = new THREE.InstancedMesh(geo, mat, matrices.length);
  matrices.forEach((mx, i) => im.setMatrixAt(i, mx));
  im.castShadow = true; im.receiveShadow = true; G.add(im); return im;
}

// ---------- key levels (metres) ----------
const FL = 2.6;          // house floor / new deck level
const WALL_TOP = 5.5;
const HOUSE = { x0: 0, x1: 12, z0: -11, z1: 0 };

// ---------- ground ----------
const grass = new THREE.Mesh(new THREE.PlaneGeometry(140, 140), new THREE.MeshStandardMaterial({ map: rep(grassTex, 40, 40), roughness: 1 }));
grass.rotation.x = -Math.PI / 2; grass.position.set(6, -0.02, -4); add(grass, false, true);
// pool area paving
const pave = new THREE.Mesh(new THREE.PlaneGeometry(16, 10), new THREE.MeshStandardMaterial({ map: rep(paveTex, 16, 10), roughness: 0.95 }));
pave.rotation.x = -Math.PI / 2; pave.position.set(5, 0.005, 7); add(pave, false, true);
// slab under house and strip to the fence
boxMM(-0.5, -0.02, -11, 13, 0.01, 2.0, M.concrete).castShadow = false;
// pool
boxMM(0.6, 0.0, 6.0, 8.6, 0.06, 10.4, M.coping);
boxMM(0.9, 0.0, 6.3, 8.3, 0.07, 10.1, M.water).castShadow = false;

// ---------- house ----------
// body (bottom face dark = underfloor)
const bodyMats = [M.white, M.white, M.white, M.under, M.white, M.white];
const body = new THREE.Mesh(new THREE.BoxGeometry(12, WALL_TOP - 2.3, 11), bodyMats);
body.position.set(6, (WALL_TOP + 2.3) / 2, -5.5); add(body);
// weatherboard skins
const rearSkin = new THREE.Mesh(new THREE.PlaneGeometry(12, WALL_TOP - 2.3), wb(12, (WALL_TOP - 2.3)));
rearSkin.position.set(6, (WALL_TOP + 2.3) / 2, 0.006); add(rearSkin, false, true);
const sideSkin = new THREE.Mesh(new THREE.PlaneGeometry(11, WALL_TOP - 2.3), wb(11, (WALL_TOP - 2.3)));
sideSkin.rotation.y = Math.PI / 2; sideSkin.position.set(12.006, (WALL_TOP + 2.3) / 2, -5.5); add(sideSkin, false, true);
// corner boards and base band
boxMM(11.9, 2.3, -0.08, 12.06, WALL_TOP, 0.06, M.white);
boxMM(-0.04, 2.25, -0.04, 12.06, 2.4, 0.06, M.white);
boxMM(12.0, 2.25, -11, 12.07, 2.4, 0.06, M.white);
// stumps
for (const x of [0.25, 3.2, 6.1, 9.0, 11.75]) for (const z of [-0.25, -3.6, -7.0, -10.75]) boxMM(x - 0.15, 0, z - 0.15, x + 0.15, 2.3, z + 0.15, M.stump);
// undercroft back wall and some shadowy enclosure
boxMM(0, 0, -10.9, 12, 2.3, -10.8, M.dark);
boxMM(0, 0, -6, 0.05, 2.3, -0.3, M.dark);
// bearers under house
for (const z of [-0.25, -3.6, -7.0, -10.75]) boxMM(0, 2.12, z - 0.08, 12, 2.3, z + 0.08, M.under);

// windows and doors on the rear wall (z = 0) and right wall (x = 12)
function rearOpening(x0, x1, y0, y1, cols, rows, glassMat, opts = {}) {
  const t = 0.06, d = 0.09, z = opts.z ?? 0.02;
  boxMM(x0 - t, y0 - t, z, x1 + t, y0, z + d, M.white);
  boxMM(x0 - t, y1, z, x1 + t, y1 + t, z + d, M.white);
  boxMM(x0 - t, y0, z, x0, y1, z + d, M.white);
  boxMM(x1, y0, z, x1 + t, y1, z + d, M.white);
  const g = new THREE.Mesh(new THREE.PlaneGeometry(x1 - x0, y1 - y0), glassMat);
  g.position.set((x0 + x1) / 2, (y0 + y1) / 2, z + 0.01); add(g, false, true);
  const bw = 0.022;
  for (let i = 1; i < cols; i++) { const x = x0 + (x1 - x0) * i / cols; boxMM(x - bw, y0, z, x + bw, y1, z + d * 0.7, M.white); }
  for (let j = 1; j < rows; j++) { const y = y0 + (y1 - y0) * j / rows; boxMM(x0, y - bw, z, x1, y + bw, z + d * 0.7, M.white); }
  if (opts.sill) boxMM(x0 - 0.1, y0 - 0.1, z, x1 + 0.1, y0 - 0.04, z + 0.14, opts.sillMat || M.white);
}
function sideWindow(z0, z1, y0, y1, hood = true) {
  const t = 0.06, x = 12.02, d = 0.09;
  boxMM(x, y0 - t, z0 - t, x + d, y0, z1 + t, M.white);
  boxMM(x, y1, z0 - t, x + d, y1 + t, z1 + t, M.white);
  boxMM(x, y0, z0 - t, x + d, y1, z0, M.white);
  boxMM(x, y0, z1, x + d, y1, z1 + t, M.white);
  const g = new THREE.Mesh(new THREE.PlaneGeometry(Math.abs(z1 - z0), y1 - y0), M.obscure);
  g.rotation.y = Math.PI / 2; g.position.set(x + 0.01, (y0 + y1) / 2, (z0 + z1) / 2); add(g, false, true);
  for (let j = 1; j < 4; j++) { const y = y0 + (y1 - y0) * j / 4; boxMM(x, y - 0.02, Math.min(z0, z1), x + d * 0.7, y + 0.02, Math.max(z0, z1), M.white); }
  boxMM(x, y0, (z0 + z1) / 2 - 0.03, x + d * 0.7, y1, (z0 + z1) / 2 + 0.03, M.white);
  if (!hood) return;
  poly([[x, y1 + 0.55, z0 + 0.25], [x, y1 + 0.55, z1 - 0.25], [x + 0.75, y1 + 0.15, z1 - 0.25], [x + 0.75, y1 + 0.15, z0 + 0.25]], M.roof, [0, 0, 1], 1);
  beam([x, y1 - 0.25, z0 + 0.2], [x + 0.72, y1 + 0.15, z0 + 0.2], 0.05, 0.05, M.white);
  beam([x, y1 - 0.25, z1 - 0.2], [x + 0.72, y1 + 0.15, z1 - 0.2], 0.05, 0.05, M.white);
}
const blueTrim = new THREE.MeshStandardMaterial({ color: 0x8fb4cf, roughness: 0.8 });
// left enclosed section: small window with blue sill
rearOpening(0.5, 1.45, 3.6, 4.4, 1, 1, M.glass, { sill: true, sillMat: blueTrim });
// back porch (recessed) with back door
boxMM(2.05, 2.4, -1.2, 3.35, 5.2, -1.15, M.white);
boxMM(2.0, 2.4, -1.2, 2.06, 5.3, 0.02, M.white); boxMM(3.34, 2.4, -1.2, 3.4, 5.3, 0.02, M.white);
boxMM(2.0, 5.2, -1.2, 3.4, 5.3, 0.05, M.white);
boxMM(2.0, FL - 0.02, -1.2, 3.4, FL, 0, M.fascia);
rearOpening(2.3, 3.1, FL, 4.7, 3, 4, M.glass, { z: -1.14 });
boxMM(2.3, FL, -1.12, 3.1, 3.55, -1.08, M.white);
boxMM(1.9, 2.4, -0.05, 2.0, 5.3, 0.08, blueTrim);
// narrow window
rearOpening(4.5, 5.1, 3.3, 4.85, 1, 1, M.obscure, { sill: true });

// rear big window stays as is (no hood)
rearOpening(6.7, 8.9, 3.5, 4.85, 8, 4, M.obscure, { sill: true });
for (const x of [6.25, 9.35]) boxMM(x - 0.07, 4.2, 0.02, x + 0.07, 4.45, 0.14, M.black);
// French doors on the side wall, opening onto the hexagon deck
function sideOpening(za, zb, y0, y1, cols, rows, glassMat) {
  const t = 0.06, d = 0.09, x = 12.02;
  boxMM(x, y0 - t, za - t, x + d, y0, zb + t, M.white);
  boxMM(x, y1, za - t, x + d, y1 + t, zb + t, M.white);
  boxMM(x, y0, za - t, x + d, y1, za, M.white);
  boxMM(x, y0, zb, x + d, y1, zb + t, M.white);
  const g = new THREE.Mesh(new THREE.PlaneGeometry(zb - za, y1 - y0), glassMat);
  g.rotation.y = Math.PI / 2; g.position.set(x + 0.01, (y0 + y1) / 2, (za + zb) / 2); add(g, false, true);
  const bw = 0.022;
  for (let i = 1; i < cols; i++) { const z = za + (zb - za) * i / cols; boxMM(x, y0, z - bw, x + d * 0.7, y1, z + bw, M.white); }
  for (let j = 1; j < rows; j++) { const y = y0 + (y1 - y0) * j / rows; boxMM(x, y - bw, za, x + d * 0.7, y + bw, zb, M.white); }
}
const SDZ0 = -6.05, SDZ1 = -3.85; // French doors, 2.5 m along from the corner window (its edge is at -1.35)
const doorsG = new THREE.Group(), windowG = new THREE.Group(); scene.add(doorsG, windowG); windowG.visible = false;
G = doorsG;
{
  const leaf = (SDZ1 - SDZ0) / 4;
  for (let i = 0; i < 4; i++) {
    const a = SDZ0 + i * leaf + 0.03, b = SDZ0 + (i + 1) * leaf - 0.03;
    sideOpening(a, b, FL + 0.42, 4.72, 2, 5, M.glass);
    boxMM(12.02, FL, a - 0.06, 12.1, FL + 0.42, b + 0.06, M.white);
  }
  for (let i = 1; i < 4; i++) { const z = SDZ0 + i * leaf; boxMM(12.02, FL, z - 0.05, 12.12, 4.76, z + 0.05, M.white); }
  boxMM(12.0, 4.72, SDZ0 - 0.12, 12.14, 4.86, SDZ1 + 0.12, M.white);
  boxMM(12.0, FL, SDZ0 - 0.12, 12.14, 4.86, SDZ0 - 0.02, M.white);
  boxMM(12.0, FL, SDZ1 + 0.02, 12.14, 4.86, SDZ1 + 0.12, M.white);
  const mid = (SDZ0 + SDZ1) / 2;
  boxMM(12.12, 3.55, mid - 0.12, 12.15, 3.75, mid - 0.09, M.black);
  boxMM(12.12, 3.55, mid + 0.09, 12.15, 3.75, mid + 0.12, M.black);
}
G = windowG; sideWindow(-4.35, -5.55, 3.55, 4.8, false); G = scene;
sideWindow(-0.45, -1.35, 3.55, 4.8, false);   // window nearest the corner stays
for (const z of [(SDZ1 - 1.35) / 2, SDZ0 - 0.22]) boxMM(12.02, 4.2, z - 0.07, 12.14, 4.45, z + 0.07, M.black); // wall lights either side of the doors
// little window with the round pane, above the stairs
{
  const zc = -8.8, yc = 4.25, h = 0.31, x = 12.02;
  boxMM(x, yc - h - 0.06, zc - h - 0.06, x + 0.09, yc - h, zc + h + 0.06, M.white);
  boxMM(x, yc + h, zc - h - 0.06, x + 0.09, yc + h + 0.06, zc + h + 0.06, M.white);
  boxMM(x, yc - h, zc - h - 0.06, x + 0.09, yc + h, zc - h, M.white);
  boxMM(x, yc - h, zc + h, x + 0.09, yc + h, zc + h + 0.06, M.white);
  const p = new THREE.Mesh(new THREE.PlaneGeometry(2 * h, 2 * h), M.white); p.rotation.y = Math.PI / 2; p.position.set(x + 0.02, yc, zc); add(p, false, true);
  const c = new THREE.Mesh(new THREE.CircleGeometry(h * 0.78, 40), M.obscure); c.rotation.y = Math.PI / 2; c.position.set(x + 0.03, yc, zc); add(c, false, true);
  boxMM(x, yc - h - 0.1, zc - h - 0.1, x + 0.13, yc - h - 0.05, zc + h + 0.1, M.white);
}

// ---------- main roof (hip) with solar ----------
{
  const o = 0.45, E = 5.55, X0 = -o, X1 = 12 + o, Z0 = -11 - o, Z1 = o, hw = (Z1 - Z0) / 2, R = E + hw * 0.5, zr = (Z0 + Z1) / 2;
  const rx0 = X0 + hw, rx1 = X1 - hw;
  poly([[X0, E, Z1], [X1, E, Z1], [rx1, R, zr], [rx0, R, zr]], M.roof, [1, 0, 0]);
  poly([[X1, E, Z0], [X0, E, Z0], [rx0, R, zr], [rx1, R, zr]], M.roof, [-1, 0, 0]);
  poly([[X0, E, Z0], [X0, E, Z1], [rx0, R, zr]], M.roof, [0, 0, 1]);
  poly([[X1, E, Z1], [X1, E, Z0], [rx1, R, zr]], M.roof, [0, 0, -1]);
  poly([[X0, E - 0.01, Z1], [X1, E - 0.01, Z1], [X1, E - 0.01, Z0], [X0, E - 0.01, Z0]], M.ceiling);
  boxMM(X0, E - 0.14, Z1, X1, E + 0.02, Z1 + 0.12, M.gutter);
  boxMM(X1, E - 0.14, Z0, X1 + 0.12, E + 0.02, Z1 + 0.12, M.gutter);
  boxMM(X0 - 0.12, E - 0.14, Z0, X0, E + 0.02, Z1 + 0.12, M.gutter);
  beam([rx0, R + 0.02, zr], [rx1, R + 0.02, zr], 0.2, 0.05, M.gutter);
  const pv = new THREE.MeshStandardMaterial({ color: 0x1d2a3c, roughness: 0.25, metalness: 0.4 });
  const tilt = Math.atan(0.5);
  const panel = (x, zc) => { const m = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.04, 1.65), pv); m.rotation.x = tilt; m.position.set(x, E + (Z1 - zc) * 0.5 + 0.07, zc); add(m); };
  for (let i = 0; i < 6; i++) panel(3.4 + i * 1.04, -1.25);
  for (let i = 0; i < 4; i++) panel(4.44 + i * 1.04, -3.0);
}

// ---------- new balcony (owner's design: narrow rear balcony + hexagon covered deck) ----------
const FRONT = 1.51;
const HX = { cx: 12.9, cz: 1.511 - 3.7 * Math.sin(Math.PI / 3), r: 3.7 };
const hexV = (r, i) => [HX.cx + r * Math.cos(i * Math.PI / 3), HX.cz + r * Math.sin(i * Math.PI / 3)];
const VE = 5.1;
function deckBox(x0, x1, z0, z1) {
  const w = x1 - x0, d = z1 - z0;
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, 0.32, d), [M.white, M.white, deckMat(w, d), M.under, M.white, M.white]);
  m.position.set((x0 + x1) / 2, FL - 0.16, (z0 + z1) / 2); add(m);
}
function deckPoly(pts) {
  const shape = new THREE.Shape(pts.map(([x, z]) => new THREE.Vector2(x, -z)));
  const geo = new THREE.ExtrudeGeometry(shape, { depth: 0.32, bevelEnabled: false });
  const m = new THREE.Mesh(geo, [deckMat(1, 1), M.white]);
  m.rotation.x = -Math.PI / 2; m.position.y = FL - 0.32; add(m);
  poly(pts.map(([x, z]) => [x, FL - 0.325, z]), M.under);
}
deckBox(2.0, 12.0, 0, FRONT);                                   // rear balcony
deckPoly([[12.0, FRONT], hexV(HX.r, 1), hexV(HX.r, 0), hexV(HX.r, 5), [12.0, hexV(HX.r, 5)[1]]]); // hexagon deck
const WK = { x0: 12.0, x1: 13.2, z0: -7.6, z1: hexV(HX.r, 5)[1] }; // stairs start further towards the front  // side walkway to the stairs
deckBox(WK.x0, WK.x1, WK.z0, WK.z1);

// posts: square under the open decks, round Queenslander posts on the hexagon
for (const [x, z] of [[2.05, 1.45], [5.0, 1.45], [8.0, 1.45], [13.12, (WK.z0 + WK.z1) / 2], [13.12, WK.z0 + 0.08]]) {
  boxMM(x - 0.06, 0, z - 0.06, x + 0.06, FL - 0.32, z + 0.06, M.white);
  boxMM(x - 0.2, -0.01, z - 0.2, x + 0.2, 0.05, z + 0.2, M.concrete);
}
const roundPost = new THREE.CylinderGeometry(0.07, 0.07, 1, 20);
const HZ = HX.cz, HB = hexV(3.4, 5)[1];
const V0 = hexV(HX.r, 0), V1 = hexV(HX.r, 1), V2 = hexV(HX.r, 2);
const hexPosts = [[V2[0] + 0.1, 1.45], [V1[0] - 0.05, 1.45], [V0[0] - 0.08, HZ], [V1[0] - 0.05, HB + 0.06], [12.12, HB + 0.06]];
for (const [x, z] of hexPosts) {
  const top = VE - 0.05;
  const m = new THREE.Mesh(roundPost, M.white); m.scale.y = top; m.position.set(x, top / 2, z); add(m);
  boxMM(x - 0.11, FL, z - 0.11, x + 0.11, FL + 0.12, z + 0.11, M.white);
  boxMM(x - 0.2, -0.01, z - 0.2, x + 0.2, 0.05, z + 0.2, M.concrete);
}
for (let i = 0; i < hexPosts.length - 1; i++) {
  const [x0, z0] = hexPosts[i], [x1, z1] = hexPosts[i + 1];
  beam([x0, VE - 0.16, z0], [x1, VE - 0.16, z1], 0.1, 0.22, M.white);
}

// hexagonal hip roof with radiating rafters (as per the owner's mockup)
{
  const o = 0.35, Re = HX.r + o, pitch = 0.42;
  const apexY = VE + Re * Math.cos(Math.PI / 6) * pitch;
  const A = [HX.cx, apexY, HX.cz];
  const E = (i, dy = 0) => { const [x, z] = hexV(Re, ((i % 6) + 6) % 6); return [x, VE + dy, z]; };
  for (let i = 0; i < 6; i++) {
    poly([E(i), E(i + 1), A], M.roof);
    poly([E(i, -0.07), E(i + 1, -0.07), [A[0], A[1] - 0.07, A[2]]], M.ceiling);
    beam([...E(i, -0.12)].map((v, k) => k === 1 ? v : v + (A[k] - v) * 0.1), [A[0], A[1] - 0.16, A[2]], 0.08, 0.14, M.white);
    beam([E(i)[0], VE + 0.03, E(i)[2]], [A[0], A[1] + 0.03, A[2]], 0.14, 0.04, M.gutter);
  }
  for (const i of [5, 0, 1, 2, 4]) beam(E(i, -0.06), E(i + 1, -0.06), 0.12, 0.14, M.gutter);
  const dp = E(0); boxMM(dp[0] - 0.12, 0.05, dp[2] - 0.04, dp[0] - 0.04, VE - 0.1, dp[2] + 0.04, M.gutter);
}

// back roof extended over the rear balcony (Ash, 21 November 2026: "The back roof should cover the balcony"),
// its front edge lining up with the hexagon's eaves
{
  const x0 = 1.85, x1 = 11.6, zW = 0, zE = 1.85, yW = 5.45, yE = VE;
  poly([[x0, yW, zW], [x1, yW, zW], [x1, yE, zE], [x0, yE, zE]], M.roof, [1, 0, 0]);
  poly([[x0, yW - 0.06, zW + 0.01], [x1, yW - 0.06, zW + 0.01], [x1, yE - 0.06, zE - 0.04], [x0, yE - 0.06, zE - 0.04]], M.ceiling);
  boxMM(x0, yE - 0.15, zE - 0.02, x1, yE + 0.02, zE + 0.1, M.gutter);
  boxMM(x0 - 0.06, yE - 0.12, zW, x0, yW, zE, M.white);
  beam([2.05, VE - 0.16, 1.45], [V2[0] + 0.1, VE - 0.16, 1.45], 0.1, 0.22, M.white);
  for (const x of [2.05, 5.0, 8.0]) {
    const m = new THREE.Mesh(roundPost, M.white); m.scale.y = VE - 0.05 - FL; m.position.set(x, (FL + VE - 0.05) / 2, 1.45); add(m);
    boxMM(x - 0.11, FL, 1.34, x + 0.11, FL + 0.12, 1.56, M.white);
  }
  boxMM(x0 - 0.05, 0.05, zE - 0.02, x0 + 0.04, yE - 0.1, zE + 0.07, M.gutter); // downpipe
}

// ---------- balustrade: black aluminium frame with glass infill ----------
function glassBal(x0, z0, x1, z1) {
  const yB = FL, yT = FL + 1.05;
  const A = new THREE.Vector3(x0, 0, z0), B = new THREE.Vector3(x1, 0, z1), len = A.distanceTo(B);
  beam([x0, yT, z0], [x1, yT, z1], 0.06, 0.05, M.black);
  beam([x0, yB + 0.08, z0], [x1, yB + 0.08, z1], 0.04, 0.04, M.black);
  const n = Math.max(1, Math.ceil(len / 1.6));
  for (let i = 0; i <= n; i++) { const p = A.clone().lerp(B, i / n); boxMM(p.x - 0.03, yB, p.z - 0.03, p.x + 0.03, yT, p.z + 0.03, M.black); }
  for (let i = 0; i < n; i++) {
    const p = A.clone().lerp(B, (i + 0.5) / n), seg = len / n - 0.1;
    const g = new THREE.Mesh(new THREE.BoxGeometry(seg, yT - yB - 0.16, 0.012), M.fenceGlass);
    g.position.set(p.x, (yB + 0.1 + yT - 0.03) / 2, p.z); g.rotation.y = -Math.atan2(z1 - z0, x1 - x0); G.add(g);
  }
}
glassBal(2.04, 0.03, 2.04, 1.46);
glassBal(2.04, 1.46, V1[0] - 0.03, 1.46);
glassBal(V1[0] - 0.03, 1.46, V0[0] - 0.06, HZ);
glassBal(V0[0] - 0.06, HZ, V1[0] - 0.03, HB + 0.05);
glassBal(V1[0] - 0.03, HB + 0.05, 13.2, HB + 0.05);
glassBal(13.16, HB + 0.01, 13.16, WK.z0 + 0.04);

// ---------- stairs: further forward, at the end of the side walkway, heading towards the street ----------
const S = { x0: 12.12, x1: 13.22, risers: 14, going: 0.25, z: WK.z0 };
const rise = FL / S.risers, run = (S.risers - 1) * S.going;
for (let i = 1; i < S.risers; i++) {
  const y = FL - i * rise;
  boxMM(S.x0 + 0.06, y - 0.04, S.z - (i - 1) * S.going + 0.01, S.x1 - 0.06, y, S.z - i * S.going - 0.02, M.tread);
}
for (const x of [S.x0 + 0.03, S.x1 - 0.03]) beam([x, FL - 0.12, S.z + 0.05], [x, -0.05, S.z - run - 0.2], 0.05, 0.26, M.black);
const railM = [];
const stairRail = (x) => {
  beam([x, FL + 1.0, S.z], [x, rise + 0.9, S.z - run + 0.1], 0.05, 0.05, M.black);
  beam([x, FL + 0.08, S.z], [x, rise + 0.02, S.z - run + 0.1], 0.04, 0.04, M.black);
  boxMM(x - 0.03, rise, S.z - run + 0.07, x + 0.03, rise + 0.92, S.z - run + 0.13, M.black);
  for (let i = 1; i < 30; i++) {
    const t = i / 30, z = S.z + (-run + 0.1) * t;
    const yb = FL + 0.08 + (rise + 0.02 - FL - 0.08) * t, yt = FL + 1.0 + (rise + 0.9 - FL - 1.0) * t;
    railM.push(new THREE.Matrix4().compose(new THREE.Vector3(x, (yb + yt) / 2, z), new THREE.Quaternion(), new THREE.Vector3(1, yt - yb, 1)));
  }
};
stairRail(S.x0 + 0.03); stairRail(S.x1 - 0.03);
instanced(new THREE.BoxGeometry(0.02, 1, 0.02), M.black, railM);
boxMM(S.x0 - 0.15, -0.01, S.z - run - 0.05, S.x1 + 0.15, 0.08, S.z - run - 1.15, M.concrete);

// ---------- pool fencing ----------
for (let x = -0.4; x <= 11.4; x += 1.25) {
  const g = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.2, 0.012), M.fenceGlass);
  g.position.set(x + 0.6, 0.65, 2.0); scene.add(g);
  boxMM(x + 0.15, 0, 1.97, x + 0.2, 0.15, 2.03, M.black);
  boxMM(x + 1.0, 0, 1.97, x + 1.05, 0.15, 2.03, M.black);
}
{
  const fm = [];
  beam([12.6, 1.15, 2.0], [12.6, 1.15, 11], 0.04, 0.04, M.black);
  beam([12.6, 0.12, 2.0], [12.6, 0.12, 11], 0.04, 0.04, M.black);
  for (let z = 2.0; z <= 11; z += 2.4) boxMM(12.57, 0, z - 0.03, 12.63, 1.2, z + 0.03, M.black);
  for (let z = 2.1; z < 11; z += 0.11) fm.push(new THREE.Matrix4().compose(new THREE.Vector3(12.6, 0.64, z), new THREE.Quaternion(), new THREE.Vector3(1, 1.04, 1)));
  boxMM(12.05, 0.05, 1.97, 12.6, 1.2, 2.03, M.black); // pool gate
  instanced(new THREE.BoxGeometry(0.018, 1, 0.018), M.black, fm);
}

// ---------- round outdoor setting and fan in the hexagon ----------
const wickerDark = new THREE.MeshStandardMaterial({ color: 0x34302c, roughness: 0.9 });
{
  const T = [14.6, HZ];
  const top = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, 0.04, 32), M.tabletop); top.position.set(T[0], FL + 0.74, T[1]); add(top);
  boxMM(T[0] - 0.04, FL, T[1] - 0.04, T[0] + 0.04, FL + 0.72, T[1] + 0.04, M.black);
  for (let k = 0; k < 6; k++) {
    const th = k * Math.PI / 3 + Math.PI / 6;
    const g = new THREE.Group();
    const part = (w, h, d, x, y, z, mat) => { const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat); m.position.set(x, y, z); m.castShadow = m.receiveShadow = true; g.add(m); };
    part(0.5, 0.05, 0.5, 0, 0.45, 0, wickerDark);
    part(0.5, 0.52, 0.06, 0, 0.73, 0.24, wickerDark);
    for (const [dx, dz] of [[-0.22, -0.22], [0.22, -0.22], [-0.22, 0.22], [0.22, 0.22]]) part(0.03, 0.43, 0.03, dx, 0.215, dz, M.black);
    g.position.set(T[0] + Math.cos(th) * 0.95, FL, T[1] + Math.sin(th) * 0.95);
    g.rotation.y = Math.PI / 2 - th; G.add(g);
  }
  boxMM(13.68, 5.35, HZ - 0.02, 13.72, 6.1, HZ + 0.02, M.black);
  boxMM(13.6, 5.25, HZ - 0.1, 13.8, 5.37, HZ + 0.1, M.black);
  for (let i = 0; i < 4; i++) { const a = i * Math.PI / 2 + 0.4; beam([13.7, 5.31, HZ], [13.7 + Math.cos(a) * 0.6, 5.31, HZ + Math.sin(a) * 0.6], 0.13, 0.015, M.trunk); }
}

// ---------- trees and context ----------
function tree(x, z, h, r, mat = M.leaf) {
  boxMM(x - 0.12, 0, z - 0.12, x + 0.12, h * 0.55, z + 0.12, M.trunk);
  const f = new THREE.Mesh(new THREE.IcosahedronGeometry(r, 1), mat); f.position.set(x, h * 0.55 + r * 0.7, z); f.scale.y = 0.85; add(f);
}
function palm(x, z, h) {
  beam([x, 0, z], [x + 0.3, h, z + 0.2], 0.18, 0.18, M.trunk);
  for (let i = 0; i < 9; i++) {
    const a = i / 9 * Math.PI * 2;
    beam([x + 0.3, h, z + 0.2], [x + 0.3 + Math.cos(a) * 2.0, h - 0.9, z + 0.2 + Math.sin(a) * 2.0], 0.5, 0.04, M.leaf);
  }
}
// ---------- the neighbours, from the Moorooka model ----------
// Ash, 21 November 2026: "Using the moorooka model at 6 Beaudesert add the neighbours". Houses (survey outlines, eave and ridge
// heights, roof colours), the lots' fences (from the cadastre), the next-door pool and tank, trees and the streets, in this
// model's metres: the real north wall lined up with x = 12 and the back wall with z = 0 (town3d/moorooka, see balcony/README.md).
// No stairs on the neighbours' houses: Ash says the Moorooka model's stairs on the house next to the balcony aren't right.
const NB = {"houses":[{"id":"near-6-1rp130916","pts":[[-15.6,-5.74],[-11.0,-5.5],[-11.02,-3.77],[-4.28,-3.48],[-3.45,-18.53],[-14.91,-19.14]],"eave":5.56,"ridge":7.86,"roof":"#af7f75","walls":"#efeee8","trim":"#f6f4ee"},{"id":"near-6-1rp65197","pts":[[28.21,-3.84],[29.02,-17.16],[18.67,-17.86],[17.75,-4.53]],"eave":4.96,"ridge":6.46,"roof":"#cdcfd0","walls":"#e6dbbf","trim":"#7a2c27"},{"id":"near-6-2rp130916","pts":[[-16.11,25.77],[-16.07,39.96],[-6.05,39.9],[-6.21,14.69],[-19.57,14.79],[-19.57,25.74]],"eave":3.08,"ridge":4.58,"roof":"#7a6b5e","walls":"#d9dfe6","trim":"#f7f7f3"},{"id":"near-6-2rp65197","pts":[[15.82,17.9],[18.41,34.6],[28.69,32.98],[26.1,16.28]],"eave":3.21,"ridge":6.71,"roof":"#8e7a71","walls":"#e9d9c4","trim":"#f6f1e6"},{"id":"near-6-1rp57597","pts":[[-50.83,-31.49],[-50.33,-13.93],[-45.38,-14.05],[-45.47,-16.37],[-38.1,-16.58],[-38.44,-28.29],[-43.98,-28.07],[-44.08,-31.7]],"eave":3.54,"ridge":5.84,"roof":"#c9cbcb","walls":"#cfd8cf","trim":"#f4f2ea"}],"fences":[{"kind":"paling","h":1.0,"pts":[[15.17,-27.69],[15.14,-13.54]]},{"kind":"paling","h":1.6,"pts":[[15.14,-13.54],[15.04,46.78]]},{"kind":"paling","h":1.6,"pts":[[-2.25,-9.04],[-1.73,47.15]]},{"kind":"paling","h":1.7,"pts":[[15.04,46.78],[-1.73,47.15]]},{"kind":"paling","h":1.0,"pts":[[-20.11,-34.29],[-20.12,-18.01]]},{"kind":"paling","h":1.6,"pts":[[-20.12,-18.01],[-20.14,1.89]]},{"kind":"paling","h":1.7,"pts":[[-2.64,1.9],[-20.14,1.89]]},{"kind":"picket","h":1.05,"pts":[[32.76,9.41],[32.74,-25.39]]},{"kind":"paling","h":1.0,"pts":[[33.01,9.41],[25.03,9.35]]},{"kind":"paling","h":1.6,"pts":[[25.03,9.35],[15.29,9.27]]},{"kind":"paling","h":1.6,"pts":[[-2.06,47.55],[-20.18,47.4]]},{"kind":"paling","h":1.7,"pts":[[-20.18,47.4],[-20.14,1.89]]},{"kind":"picket","h":1.05,"pts":[[32.79,47.85],[32.76,9.41]]},{"kind":"paling","h":1.0,"pts":[[33.05,47.85],[24.92,47.78]]},{"kind":"paling","h":1.6,"pts":[[24.92,47.78],[15.01,47.69]]},{"kind":"picket","h":1.05,"pts":[[-36.95,-36.86],[-52.95,-39.54]]},{"kind":"paling","h":1.0,"pts":[[-36.94,-37.11],[-36.97,-27.16]]},{"kind":"paling","h":1.6,"pts":[[-36.97,-27.16],[-37.04,2.06]]},{"kind":"paling","h":1.0,"pts":[[-52.94,-39.8],[-52.9,-30.23]]},{"kind":"paling","h":1.6,"pts":[[-52.9,-30.23],[-52.76,2.01]]},{"kind":"paling","h":1.7,"pts":[[-37.04,2.06],[-52.76,2.01]]}],"pools":[{"x":-11.09,"z":43.69,"a":-3.117,"p1":828,"p2":393,"round":false}],"sheds":[],"tanks":[{"x":22.12,"z":-19.05,"a":1.405,"p1":90,"p2":160}],"lines":[],"trees":[[63.4,-37.8,344],[23.2,-29.3,337],[16.1,-19.2,303],[62.5,-14.5,92],[32.1,-5.4,80],[50.5,-7.0,1586],[31.2,-1.2,1565],[51.1,1.0,1407],[20.3,6.2,1103],[31.9,13.4,335],[50.1,14.4,1569],[65.8,14.3,81],[32.4,25.5,1564],[49.7,25.9,345],[30.8,35.6,1155],[54.8,45.6,352],[51.8,47.3,353],[31.0,51.8,339],[54.0,51.3,188],[26.5,58.4,124],[65.4,55.9,1164],[-45.6,-38.0,144],[-8.2,-37.2,589],[-39.2,-31.3,329],[7.1,-38.0,369],[-20.7,-28.5,319],[-35.8,-26.0,572],[-8.6,-29.0,329],[-40.6,-0.6,117],[-2.6,1.2,1141],[-22.8,11.9,313],[-2.9,10.1,80],[-26.5,29.7,1095],[-33.5,31.7,80],[-3.1,28.1,1118],[-21.1,37.7,308],[-31.0,46.7,356],[-43.3,54.9,368],[-43.9,57.0,365],[-15.8,52.8,356],[6.5,51.1,380],[-3.9,56.9,345],[-12.7,59.1,118],[17.0,57.4,169]],"roads":[{"name":"Beaudesert Road","w":9.6,"pts":[[139.69,-23.5],[126.36,-26.24],[95.0,-44.01],[82.76,-48.66],[62.89,-50.5]]},{"name":"Bohain Street","w":4.6,"pts":[[62.89,-50.5],[53.23,-42.2],[46.59,-30.95],[44.79,-16.86]]},{"name":"Beaudesert Road","w":9.6,"pts":[[62.89,-50.5],[2.47,-51.05]]},{"name":"Bohain Street","w":4.6,"pts":[[44.79,-16.86],[36.03,-32.83],[25.28,-39.55],[2.47,-51.05]]},{"name":"Bohain Street","w":10.4,"pts":[[44.79,-16.86],[41.9,56.83]]},{"name":"Beaudesert Road","w":9.6,"pts":[[-161.37,-59.54],[-137.9,-61.64],[24.74,-59.13],[35.59,-60.94],[44.78,-64.2],[57.9,-70.05]]},{"name":"Beaudesert Road","w":9.6,"pts":[[2.47,-51.05],[-141.82,-52.97],[-161.17,-51.67]]},{"name":"Bohain Street","w":10.1,"pts":[[41.9,56.83],[40.02,106.21]]}],"lot6":[[15.56,-28.31],[15.01,47.69],[-2.06,47.55],[-2.61,-31.31]]};
const NB_SEGS = [], NB_SOLID = [];
{
  const tint = (hex, base) => { const m = base.clone(); m.color = new THREE.Color(hex); return m; };
  const wallBase = new THREE.MeshStandardMaterial({ color: 0xffffff, map: rep(weatherTex, 1, 1), roughness: 0.85 });
  const roofBase = new THREE.MeshStandardMaterial({ color: 0xffffff, map: roofTex, roughness: 0.5, metalness: 0.3, side: THREE.DoubleSide });
  const brick = new THREE.MeshStandardMaterial({ color: 0x9a5c47, roughness: 0.95 });
  const extrudeUp = (pts, y0, y1, mats) => {
    const shape = new THREE.Shape(pts.map(([x, z]) => new THREE.Vector2(x, -z)));
    const m = new THREE.Mesh(new THREE.ExtrudeGeometry(shape, { depth: y1 - y0, bevelEnabled: false }), mats);
    m.rotation.x = -Math.PI / 2; m.position.y = y0; return add(m);
  };
  const inPoly = (x, z, P) => { let o = false; for (let i = 0, j = P.length - 1; i < P.length; j = i++) { const [xi, zi] = P[i], [xj, zj] = P[j]; if ((zi > z) !== (zj > z) && x < (xj - xi) * (z - zi) / (zj - zi) + xi) o = !o; } return o; };
  for (const h of NB.houses) {
    const P = h.pts, walls = tint(h.walls, wallBase), trim = new THREE.MeshStandardMaterial({ color: new THREE.Color(h.trim), roughness: 0.8 });
    const high = h.eave > 4.2, base = high ? 2.3 : 0.35, eave = Math.max(base + 2.5, Math.min(h.eave, base + 3.2));
    extrudeUp(P, base, eave, [walls, walls]);
    NB_SOLID.push(P);
    // under the house: stumps, or number 10's brick ground floor
    if (high) {
      if (h.id === 'near-6-1rp130916') extrudeUp(P, 0, base, [brick, brick]);
      else {
        const xs = P.map((p) => p[0]), zs = P.map((p) => p[1]);
        for (let x = Math.min(...xs) + 0.4; x < Math.max(...xs); x += 2.8) for (let z = Math.min(...zs) + 0.4; z < Math.max(...zs); z += 2.8)
          if (inPoly(x, z, P)) boxMM(x - 0.13, 0, z - 0.13, x + 0.13, base, z + 0.13, M.stump);
        extrudeUp(P, base - 0.15, base, [M.under, M.under]);
      }
    }
    // oriented box from the longest edge, for the roof
    let best = 0, ax = [1, 0];
    for (let i = 0; i < P.length; i++) { const a = P[i], b = P[(i + 1) % P.length], l = Math.hypot(b[0] - a[0], b[1] - a[1]); if (l > best) { best = l; ax = [(b[0] - a[0]) / l, (b[1] - a[1]) / l]; } }
    const nv = [-ax[1], ax[0]];
    const us = P.map((p) => p[0] * ax[0] + p[1] * ax[1]), vs = P.map((p) => p[0] * nv[0] + p[1] * nv[1]);
    const o = 0.45, u0 = Math.min(...us) - o, u1 = Math.max(...us) + o, v0 = Math.min(...vs) - o, v1 = Math.max(...vs) + o;
    const L = u1 - u0, W = v1 - v0, along = L >= W;
    const rise = Math.max(1.3, Math.min(2.6, h.ridge - h.eave + 0.6));
    const pt = (u, v, y) => [ax[0] * u + nv[0] * v, y, ax[1] * u + nv[1] * v];
    const roofM = tint(h.roof, roofBase);
    if (along) {
      const hw = W / 2, vm = (v0 + v1) / 2, ra = u0 + Math.min(hw, L / 2), rb = u1 - Math.min(hw, L / 2), R = eave + rise;
      poly([pt(u0, v0, eave), pt(u1, v0, eave), pt(rb, vm, R), pt(ra, vm, R)], roofM, [ax[0], 0, ax[1]]);
      poly([pt(u1, v1, eave), pt(u0, v1, eave), pt(ra, vm, R), pt(rb, vm, R)], roofM, [-ax[0], 0, -ax[1]]);
      poly([pt(u0, v1, eave), pt(u0, v0, eave), pt(ra, vm, R)], roofM, [nv[0], 0, nv[1]]);
      poly([pt(u1, v0, eave), pt(u1, v1, eave), pt(rb, vm, R)], roofM, [-nv[0], 0, -nv[1]]);
    } else {
      const hl = L / 2, um = (u0 + u1) / 2, va = v0 + Math.min(hl, W / 2), vb = v1 - Math.min(hl, W / 2), R = eave + rise;
      poly([pt(u0, v1, eave), pt(u0, v0, eave), pt(um, va, R), pt(um, vb, R)], roofM, [nv[0], 0, nv[1]]);
      poly([pt(u1, v0, eave), pt(u1, v1, eave), pt(um, vb, R), pt(um, va, R)], roofM, [-nv[0], 0, -nv[1]]);
      poly([pt(u0, v0, eave), pt(u1, v0, eave), pt(um, va, R)], roofM, [ax[0], 0, ax[1]]);
      poly([pt(u1, v1, eave), pt(u0, v1, eave), pt(um, vb, R)], roofM, [-ax[0], 0, -ax[1]]);
    }
    poly([pt(u0, v0, eave - 0.02), pt(u1, v0, eave - 0.02), pt(u1, v1, eave - 0.02), pt(u0, v1, eave - 0.02)], M.ceiling);
    // windows along each wall longer than 3 m (trim-coloured frames)
    let area = 0; for (let i = 0; i < P.length; i++) { const a = P[i], b = P[(i + 1) % P.length]; area += a[0] * b[1] - b[0] * a[1]; }
    const sgn = area > 0 ? 1 : -1;
    for (let i = 0; i < P.length; i++) {
      const a = P[i], b = P[(i + 1) % P.length], l = Math.hypot(b[0] - a[0], b[1] - a[1]); if (l < 3) continue;
      const dx = (b[0] - a[0]) / l, dz = (b[1] - a[1]) / l, nx = dz * sgn, nz = -dx * sgn, n = Math.floor((l - 0.6) / 3.2);
      for (let k = 0; k < n; k++) {
        const s = (l - (n - 1) * 3.2) / 2 + k * 3.2, cx = a[0] + dx * s + nx * 0.04, cz = a[1] + dz * s + nz * 0.04, cy = base + (eave - base) * 0.52;
        const fr = new THREE.Mesh(new THREE.BoxGeometry(1.25, 1.35, 0.05), trim); fr.position.set(cx, cy, cz); fr.rotation.y = Math.atan2(dx, dz) + Math.PI / 2; add(fr, false, true);
        const gl = new THREE.Mesh(new THREE.BoxGeometry(1.05, 1.15, 0.05), M.glass); gl.position.set(cx + nx * 0.02, cy, cz + nz * 0.02); gl.rotation.y = fr.rotation.y; add(gl, false, true);
      }
    }
  }
  // fences on the lot lines
  const paling = new THREE.MeshStandardMaterial({ color: 0x8c7d69, roughness: 0.95 }), picket = new THREE.MeshStandardMaterial({ color: 0xf1f0ea, roughness: 0.85 });
  for (const f of NB.fences) for (let i = 0; i + 1 < f.pts.length; i++) {
    const [x0, z0] = f.pts[i], [x1, z1] = f.pts[i + 1];
    beam([x0, f.h / 2, z0], [x1, f.h / 2, z1], 0.05, f.h, f.kind === 'picket' ? picket : paling);
    NB_SEGS.push([x0, z0, x1, z1]);
  }
  // the next-door pool and tank
  for (const p of NB.pools) {
    const g = new THREE.Group(); g.position.set(p.x, 0, p.z); g.rotation.y = -p.a;
    const c = new THREE.Mesh(new THREE.BoxGeometry(p.p1 / 100 + 0.8, 0.06, p.p2 / 100 + 0.8), M.coping); c.position.y = 0.03; c.receiveShadow = true; g.add(c);
    const w = new THREE.Mesh(new THREE.BoxGeometry(p.p1 / 100, 0.07, p.p2 / 100), M.water); w.position.y = 0.04; g.add(w); G.add(g);
    NB_SOLID.push([[p.x - 2, p.z - 2], [p.x + 2, p.z - 2], [p.x + 2, p.z + 2], [p.x - 2, p.z + 2]]);
  }
  const tankM = new THREE.MeshStandardMaterial({ color: 0x55704a, roughness: 0.7 });
  for (const tk of NB.tanks) { const m = new THREE.Mesh(new THREE.CylinderGeometry(0.75, 0.75, 1.9, 24), tankM); m.position.set(tk.x, 0.95, tk.z); add(m); }
  // trees, sized from the model's numbers
  for (const [x, z, s] of NB.trees) { const ht = Math.max(3.5, Math.min(11, s / 32)); tree(x, z, ht, ht * 0.33, s % 2 ? M.leaf : M.leaf2); }
  // the streets: Beaudesert Road out the front and Bohain Street on the corner
  const asphalt = new THREE.MeshStandardMaterial({ color: 0x4b4d51, roughness: 0.95 });
  for (const r of NB.roads) for (let i = 0; i + 1 < r.pts.length; i++) {
    const [x0, z0] = r.pts[i], [x1, z1] = r.pts[i + 1], l = Math.hypot(x1 - x0, z1 - z0); if (l < 0.05) continue;
    const m = new THREE.Mesh(new THREE.BoxGeometry(r.w, 0.02, l + r.w * 0.5), asphalt);
    m.position.set((x0 + x1) / 2, 0.01, (z0 + z1) / 2); m.rotation.y = Math.atan2(x1 - x0, z1 - z0); m.receiveShadow = true; G.add(m);
  }
}

// the blue shed: in the yard next to the pool, just outside the black pool fence, doors facing the house
const SHED = { x0: 12.85, x1: 15.0, z0: 7.6, z1: 9.8 }; // inside the north fence
{
  const navy = new THREE.MeshStandardMaterial({ color: 0x2f3e78, roughness: 0.8 });
  const { x0, x1, z0, z1 } = SHED, zm = (z0 + z1) / 2;
  boxMM(x0, 0, z0, x1, 2.2, z1, navy);
  boxMM(x0 - 0.05, -0.01, z0 - 0.05, x1 + 0.05, 0.12, z1 + 0.05, M.dark);                  // base
  poly([[x0 - 0.15, 2.2, z0 - 0.15], [x1 + 0.15, 2.2, z0 - 0.15], [x1 + 0.15, 2.85, zm], [x0 - 0.15, 2.85, zm]], M.roofPlain, [1, 0, 0]);
  poly([[x0 - 0.15, 2.2, z1 + 0.15], [x1 + 0.15, 2.2, z1 + 0.15], [x1 + 0.15, 2.85, zm], [x0 - 0.15, 2.85, zm]], M.roofPlain, [1, 0, 0]);
  for (const x of [x0, x1]) poly([[x, 2.2, z0], [x, 2.2, z1], [x, 2.8, zm]], navy);              // gable ends
  poly([[x0 + 0.1, 2.2, z0 - 0.005], [x1 - 0.1, 2.2, z0 - 0.005], [(x0 + x1) / 2, 2.75, z0 - 0.005]], M.white); // white gable
  // white double doors with small windows, facing the house
  const dx0 = x0 + 0.45, dx1 = x1 - 0.45, dm = (dx0 + dx1) / 2;
  boxMM(dx0, 0.12, z0 - 0.04, dx1, 1.95, z0, M.white);
  boxMM(dm - 0.015, 0.12, z0 - 0.06, dm + 0.015, 1.95, z0 - 0.04, M.trunk);
  for (const c of [(dx0 + dm) / 2, (dm + dx1) / 2]) boxMM(c - 0.22, 1.35, z0 - 0.06, c + 0.22, 1.75, z0 - 0.04, M.glass);
  for (const x of [x0, x1]) boxMM(x - 0.04, 0, z0 - 0.04, x + 0.04, 2.2, z0 + 0.04, M.white); // corner trims
}

// ---------- lights ----------
scene.add(new THREE.HemisphereLight(0xe6eef5, 0xb8b2a4, 0.8));
const sun = new THREE.DirectionalLight(0xfff6ea, 1.9);
sun.position.set(20, 30, 24); sun.target.position.set(7, 0, -2);
sun.castShadow = true; sun.shadow.mapSize.set(4096, 4096);
Object.assign(sun.shadow.camera, { left: -26, right: 26, top: 26, bottom: -26, near: 1, far: 90 });
sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.02;
scene.add(sun, sun.target);


// =====================================================================================
// Walking: first person, eyes 1.65 m above whatever you're standing on.
// Surfaces: the ground, the decks (2.6 m up) and the stairs (a ramp between the two).
// You can't step off a deck except by the stairs, and you can't walk through fences,
// the pool, posts or the low end of the stairs.
// =====================================================================================
const EYE = 1.65, STEP = 0.5, R = 0.25;
const camera = new THREE.PerspectiveCamera(70, innerWidth / innerHeight, 0.05, 300);
camera.rotation.order = 'YXZ';

const HEXR = HX.r - 0.35; // walkable hexagon, kept clear of the balustrade
function inHex(x, z) {
  const dx = Math.abs(x - HX.cx), dz = Math.abs(z - HX.cz);
  return dz <= HEXR * Math.sqrt(3) / 2 && Math.sqrt(3) * dx + dz <= Math.sqrt(3) * HEXR;
}
const TABLE = { x: 14.6, z: HZ, r: 1.25 };
function onDeck(x, z) {
  if (Math.hypot(x - TABLE.x, z - TABLE.z) < TABLE.r) return false;          // table and chairs
  if (x >= 2.3 && x <= 12.3 && z >= 0.25 && z <= 1.25) return true;          // rear balcony
  if (x >= 2.3 && x <= 3.15 && z >= -0.95 && z <= 0.3) return true;          // back door porch
  if (inHex(x, z) && !(x < 12.25 && z < 0.25)) return true;                  // hexagon deck
  if (x >= 12.3 && x <= 12.95 && z >= WK.z0 - 0.05 && z <= HB + 0.4) return true; // side walkway
  return false;
}
const ST = { x0: 12.32, x1: 13.02, zTop: WK.z0, zBot: WK.z0 - run };     // between the stair rails
const onStairs = (x, z) => x >= ST.x0 && x <= ST.x1 && z <= ST.zTop + 0.02 && z >= ST.zBot - 0.1;
const stairH = (z) => Math.max(0, Math.min(FL, FL * (z - ST.zBot) / (ST.zTop - ST.zBot)));

// things on the ground you can't walk through
const segs = [
  [-0.4, 2.0, 12.6, 2.0],      // glass pool fence and gate
  [12.6, 2.0, 12.6, 11.0],     // black pool fence
  [0.0, -6.0, 0.0, -0.3],      // under-house wall
  [0.0, -10.85, 12.0, -10.85], // back of the undercroft
];
const circles = [];
for (const x of [0.25, 3.2, 6.1, 9.0, 11.75]) for (const z of [-0.25, -3.6, -7.0, -10.75]) circles.push([x, z, 0.2]);
for (const [x, z] of [[2.05, 1.45], [5.0, 1.45], [8.0, 1.45], [13.12, (WK.z0 + WK.z1) / 2], [13.12, WK.z0 + 0.08]]) circles.push([x, z, 0.12]);
for (const [x, z] of hexPosts) circles.push([x, z, 0.12]);
segs.push(...NB_SEGS); // the lots' fences
function segDist(px, pz, [ax, az, bx, bz]) {
  const vx = bx - ax, vz = bz - az, t = Math.max(0, Math.min(1, ((px - ax) * vx + (pz - az) * vz) / (vx * vx + vz * vz)));
  return Math.hypot(px - (ax + vx * t), pz - (az + vz * t));
}
function inPolyW(x, z, P) { let o = false; for (let i = 0, j = P.length - 1; i < P.length; j = i++) { const [xi, zi] = P[i], [xj, zj] = P[j]; if ((zi > z) !== (zj > z) && x < (xj - xi) * (z - zi) / (zj - zi) + xi) o = !o; } return o; }
function groundOK(x, z) {
  if (x > 0.6 - R && x < 8.6 + R && z > 6.0 - R && z < 10.4 + R) return false;   // the pool
  if (x > SHED.x0 - R && x < SHED.x1 + R && z > SHED.z0 - R && z < SHED.z1 + R) return false; // the shed
  if (x >= S.x0 - R && x <= S.x1 + R && z <= ST.zTop && z >= ST.zBot) {           // under the stairs: only where there's headroom
    const h = stairH(z); if (h > 0.15 && h < 1.95) return false;
  }
  for (const s of segs) if (segDist(x, z, s) < R) return false;
  for (const [cx, cz, r] of circles) if (Math.hypot(x - cx, z - cz) < r + R) return false;
  for (const P of NB_SOLID) if (inPolyW(x, z, P)) return false; // the neighbours' houses and pool
  return Math.abs(x) < 60 && Math.abs(z) < 60;
}
// the height you'd stand at in (x, z), coming from height y, or null if you can't go there
function standAt(x, z, y) {
  let best = null;
  const offer = (h) => { if (Math.abs(h - y) <= STEP && (best === null || Math.abs(h - y) < Math.abs(best - y))) best = h; };
  if (onDeck(x, z)) offer(FL);
  if (onStairs(x, z)) offer(stairH(z));
  if (groundOK(x, z)) offer(0);
  return best;
}

const P = { x: 14.5, z: -15.5, y: 0, ys: 0, yaw: 0, pitch: 0.12 };
function face(dx, dz) { P.yaw = Math.atan2(-dx, -dz); }
const PLACES = {
  yard:   { label: 'Side yard',          x: 14.5, z: -15.5, y: 0,  look: [12.7, -7.5],  pitch: 0.14 },
  street: { label: 'Out the front',      x: 6.0,  z: -36.5, y: 0,  look: [6, -10],      pitch: 0.08 },
  stairs: { label: 'Bottom of the stairs', x: 12.67, z: WK.z0 - run - 1.0, y: 0, look: [12.67, -5], pitch: 0.28 },
  hex:    { label: 'Hexagon deck',       x: 14.3, z: 0.7,   y: FL, look: [12.0, -3.0], pitch: -0.05 },
  rear:   { label: 'Rear balcony',       x: 3.0,  z: 0.75,  y: FL, look: [14, 0.75],   pitch: -0.02 },
  pool:   { label: 'By the pool',        x: 9.0,  z: 12.5,  y: 0,  look: [10, 0],      pitch: 0.12 },
};
function goTo(k) {
  const p = PLACES[k]; P.x = p.x; P.z = p.z; P.y = P.ys = p.y; P.pitch = p.pitch; face(p.look[0] - p.x, p.look[1] - p.z);
}
goTo('yard');

// ---------- input ----------
const keys = new Set();
addEventListener('keydown', (e) => { if (e.target.closest && e.target.closest('button')) return; keys.add(e.code); if (e.code.startsWith('Arrow') || e.code === 'Space') e.preventDefault(); hideHint(); });
addEventListener('keyup', (e) => keys.delete(e.code));
addEventListener('blur', () => keys.clear());

// mouse: drag to look
let drag = null;
canvas.addEventListener('mousedown', (e) => { drag = { x: e.clientX, y: e.clientY }; hideHint(); });
addEventListener('mousemove', (e) => {
  if (!drag) return;
  P.yaw -= (e.clientX - drag.x) * 0.0045; P.pitch -= (e.clientY - drag.y) * 0.0045; drag = { x: e.clientX, y: e.clientY };
});
addEventListener('mouseup', () => { drag = null; });

// touch: the stick (bottom left) walks, a finger anywhere else on the view looks. Each finger is tracked by its own id,
// and the listeners are passive so iOS never waits on the page (the lessons from the towns' sticks).
const joy = document.getElementById('joy'), knob = document.getElementById('knob');
const stick = { id: null, cx: 0, cy: 0, vx: 0, vy: 0 };
const lookers = new Map();
const JR = 46;
function setKnob() { knob.style.transform = `translate(${stick.vx * JR}px, ${stick.vy * JR}px)`; }
function stickMove(t) {
  let dx = t.clientX - stick.cx, dy = t.clientY - stick.cy; const d = Math.hypot(dx, dy);
  if (d > JR) { dx *= JR / d; dy *= JR / d; }
  stick.vx = dx / JR; stick.vy = dy / JR; setKnob();
}
joy.addEventListener('touchstart', (e) => {
  hideHint();
  for (const t of e.changedTouches) {
    if (stick.id === null && joy.contains(t.target)) {
      const r = joy.getBoundingClientRect(); stick.id = t.identifier; stick.cx = r.left + r.width / 2; stick.cy = r.top + r.height / 2; stickMove(t);
    }
  }
}, { passive: true });
canvas.addEventListener('touchstart', (e) => {
  hideHint();
  for (const t of e.changedTouches) if (t.identifier !== stick.id) lookers.set(t.identifier, { x: t.clientX, y: t.clientY });
}, { passive: true });
addEventListener('touchmove', (e) => {
  for (const t of e.changedTouches) {
    if (t.identifier === stick.id) stickMove(t);
    else if (lookers.has(t.identifier)) {
      const l = lookers.get(t.identifier);
      P.yaw -= (t.clientX - l.x) * 0.006; P.pitch -= (t.clientY - l.y) * 0.006; l.x = t.clientX; l.y = t.clientY;
    }
  }
}, { passive: true });
const touchEnd = (e) => {
  for (const t of e.changedTouches) {
    if (t.identifier === stick.id) { stick.id = null; stick.vx = stick.vy = 0; setKnob(); }
    lookers.delete(t.identifier);
  }
};
addEventListener('touchend', touchEnd, { passive: true });
addEventListener('touchcancel', touchEnd, { passive: true });

// ---------- buttons ----------
const hint = document.getElementById('hint');
let hintGone = false;
function hideHint() { if (hintGone) return; hintGone = true; hint.classList.add('gone'); }
const doorBtn = document.getElementById('doors');
doorBtn.addEventListener('click', () => {
  const on = !doorsG.visible; doorsG.visible = on; windowG.visible = !on;
  doorBtn.setAttribute('aria-pressed', String(on));
  doorBtn.setAttribute('aria-label', 'French doors: ' + (on ? 'on' : 'off'));
  document.getElementById('doorsState').textContent = on ? 'on' : 'off';
});
const menu = document.getElementById('places'), jumpBtn = document.getElementById('jump');
menu.innerHTML = Object.entries(PLACES).map(([k, p]) => `<button type="button" data-k="${k}">${p.label}</button>`).join('');
jumpBtn.addEventListener('click', () => { const open = menu.hidden; menu.hidden = !open; jumpBtn.setAttribute('aria-expanded', String(open)); });
menu.addEventListener('click', (e) => {
  const b = e.target.closest('button[data-k]'); if (!b) return;
  goTo(b.dataset.k); menu.hidden = true; jumpBtn.setAttribute('aria-expanded', 'false'); hideHint();
});
addEventListener('keydown', (e) => { if (e.key === 'Escape') { menu.hidden = true; jumpBtn.setAttribute('aria-expanded', 'false'); } });

// ---------- loop ----------
function resize() {
  renderer.setSize(innerWidth, innerHeight, false);
  camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix();
}
addEventListener('resize', resize);
resize();

function tryMove(nx, nz) {
  const h = standAt(nx, nz, P.y);
  if (h === null) return false;
  P.x = nx; P.z = nz; P.y = h; return true;
}
function moveBy(fw, sd, dt, fast) {
  const mag = Math.hypot(fw, sd);
  if (mag <= 0.05) return;
  const sp = (fast ? 3.2 : 1.7) * Math.min(1, mag) * dt / mag;
  const fx = -Math.sin(P.yaw), fz = -Math.cos(P.yaw), rx = Math.cos(P.yaw), rz = -Math.sin(P.yaw);
  const mx = (fx * fw + rx * sd) * sp, mz = (fz * fw + rz * sd) * sp;
  // move in small steps so you can't skip past an edge; slide along walls
  const n = Math.ceil(Math.hypot(mx, mz) / 0.1) || 1;
  for (let i = 0; i < n; i++) if (!tryMove(P.x + mx / n, P.z + mz / n)) { if (!tryMove(P.x + mx / n, P.z)) tryMove(P.x, P.z + mz / n); }
}
let last = performance.now();
function frame(now) {
  const dt = Math.min(0.1, (now - last) / 1000); last = now;
  // input: forward/back and sideways, from keys or the stick
  let fw = 0, sd = 0, turn = 0;
  if (keys.has('KeyW') || keys.has('ArrowUp')) fw += 1;
  if (keys.has('KeyS') || keys.has('ArrowDown')) fw -= 1;
  if (keys.has('KeyA')) sd -= 1;
  if (keys.has('KeyD')) sd += 1;
  if (keys.has('ArrowLeft')) turn += 1;
  if (keys.has('ArrowRight')) turn -= 1;
  if (stick.id !== null) { fw -= stick.vy; sd += stick.vx; }
  P.yaw += turn * 1.8 * dt;
  P.pitch = Math.max(-1.35, Math.min(1.35, P.pitch));
  moveBy(fw, sd, dt, keys.has("ShiftLeft") || keys.has("ShiftRight") || (stick.id !== null && Math.hypot(fw, sd) > 0.95));
  P.ys += (P.y - P.ys) * Math.min(1, dt * 12);
  camera.position.set(P.x, P.ys + EYE, P.z);
  camera.rotation.set(P.pitch, P.yaw, 0);
  renderer.render(scene, camera);
  if (!SHOT) requestAnimationFrame(frame);
}

// still pictures for the site's picker card (?shot=icon) and testing
if (SHOT) {
  document.body.classList.add('shot');
  const shots = { icon: [[23.5, 6.2, 9.5], [12.2, 2.7, -2.6], 44] };
  const [p, l, fov] = shots[SHOT] || shots.icon;
  camera.fov = fov; camera.position.set(...p); camera.lookAt(...l); camera.updateProjectionMatrix();
  renderer.render(scene, camera); window.__ready = true;
} else {
  requestAnimationFrame(frame);
  window.__ready = true;
}
window.__balcony = { P, goTo, standAt, moveBy, stick, face };
