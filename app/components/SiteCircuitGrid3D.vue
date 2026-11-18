<script setup lang="ts">
import * as THREE from 'three'

/* Site background: traces between scattered points on a dark board, isometric angle. Connections
   constantly form and dissolve — etching in leg by leg, holding fully drawn for a while, fading out,
   then probing a new neighbor — like a neural net searching for links, drawn as right-angle PCB-style
   traces. Small pulses of "signal" travel the traces that are currently alive. Plain three.js on one
   canvas (one dynamic LineSegments + two static InstancedMeshes, no wrapper library). It only runs
   with a fine pointer, a wide screen and no "reduce motion" preference. */
const GRID = 18
const CELL = 140
const FILL = 0.42
const CHIP_W = 52
const CHIP_D = 34
const CHIP_H = 9
const PULSE_SIZE = 9
const PULSE_COUNT = 22
const PULSE_SPEED = 0.3 // progress per second
const CONN_COUNT = 110
const CONN_MIN_DUR = 5.5
const CONN_MAX_DUR = 10.5
const HALF_H = 480
const BG = '#050806'
const TRACE_COLOR = new THREE.Color('#d4a64a')
const BG_COLOR = new THREE.Color(BG)
const ACTIVE = '#4ade80' // pulse color: same green as the site's live accent

const canvasEl = ref<HTMLCanvasElement | null>(null)
const enabled = ref(false)
let stop = () => {}

onMounted(() => {
  const ok = !matchMedia('(prefers-reduced-motion: reduce)').matches && matchMedia('(pointer: fine)').matches && innerWidth >= 960
  if (!ok) return
  enabled.value = true
  nextTick(() => {
    try { stop = start(canvasEl.value!) } catch { enabled.value = false } // no WebGL: plain dark background
  })
})
onBeforeUnmount(() => stop())

type Node = { x: number; z: number; gx: number; gy: number; idx: number }

function start(canvas: HTMLCanvasElement) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2))
  renderer.setClearColor(BG)

  const scene = new THREE.Scene()
  scene.fog = new THREE.Fog(BG, 1100, 2900)
  scene.add(new THREE.AmbientLight('#cdd9d2', 0.6))
  const key = new THREE.DirectionalLight('#ffffff', 0.85); key.position.set(300, 500, 200); scene.add(key)
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 1, 4000)
  camera.position.set(920, 900, 920); camera.lookAt(0, 0, 0)

  const boardSize = GRID * CELL + 60
  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(boardSize, boardSize).rotateX(-Math.PI / 2),
    new THREE.MeshLambertMaterial({ color: BG }),
  )
  floor.position.y = -1
  scene.add(floor)

  // Sparse grid of candidate nodes — never a dense uniform mesh.
  const grid: (Node | null)[][] = Array.from({ length: GRID }, () => Array(GRID).fill(null))
  const nodes: Node[] = []
  for (let gy = 0; gy < GRID; gy++) {
    for (let gx = 0; gx < GRID; gx++) {
      if (Math.random() >= FILL) continue
      const node = { x: (gx - (GRID - 1) / 2) * CELL, z: (gy - (GRID - 1) / 2) * CELL, gx, gy, idx: nodes.length }
      grid[gy][gx] = node
      nodes.push(node)
    }
  }
  const neighborsOf = (n: Node): Node[] => {
    const out: Node[] = []
    for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [-1, -1], [1, -1], [-1, 1]]) {
      for (let d = 1; d <= 3; d++) { const m = grid[n.gy + dy * d]?.[n.gx + dx * d]; if (m) { out.push(m); break } }
    }
    return out
  }

  // A connection is a probe between two nodes: it etches in slowly (right-angle leg by leg), holds
  // fully drawn for a while — the "mark" — then fades out and a fresh probe starts elsewhere.
  type Conn = { a: Node; b: Node; cx: number; cz: number; leg1: number; leg2: number; total: number; t: number; dur: number }
  const DRAW_FRAC = 0.4, HOLD_FRAC = 0.75 // phase boundaries as a fraction of c.dur (draw 0-.4, hold .4-.75, fade .75-1)
  const makeConn = (): Conn => {
    const a = nodes[(Math.random() * nodes.length) | 0]
    const near = neighborsOf(a)
    const b = near.length ? near[(Math.random() * near.length) | 0] : nodes[(Math.random() * nodes.length) | 0]
    const bendHorizontalFirst = (a.gx + a.gy) % 2 === 0
    const cx = bendHorizontalFirst ? b.x : a.x, cz = bendHorizontalFirst ? a.z : b.z
    const leg1 = Math.hypot(cx - a.x, cz - a.z), leg2 = Math.hypot(b.x - cx, b.z - cz)
    return { a, b, cx, cz, leg1, leg2, total: leg1 + leg2, t: 0, dur: CONN_MIN_DUR + Math.random() * (CONN_MAX_DUR - CONN_MIN_DUR) }
  }
  const conns: Conn[] = Array.from({ length: CONN_COUNT }, () => { const c = makeConn(); c.t = Math.random() * c.dur; return c })

  // Fixed-size buffer: 2 right-angle sub-segments (4 vertices) per connection, position + color updated every frame.
  const VPC = 4
  const tracePos = new Float32Array(CONN_COUNT * VPC * 3)
  const traceCol = new Float32Array(CONN_COUNT * VPC * 3)
  const traceGeo = new THREE.BufferGeometry()
  traceGeo.setAttribute('position', new THREE.BufferAttribute(tracePos, 3))
  traceGeo.setAttribute('color', new THREE.BufferAttribute(traceCol, 3))
  // Build an index so 4 vertices per connection draw exactly 2 line segments: (0-1) and (2-3).
  const indices: number[] = []
  for (let i = 0; i < CONN_COUNT; i++) { const b = i * VPC; indices.push(b, b + 1, b + 2, b + 3) }
  traceGeo.setIndex(indices)
  const traces = new THREE.LineSegments(traceGeo, new THREE.LineBasicMaterial({ vertexColors: true }))
  scene.add(traces)

  function writeConn(i: number, c: Conn) {
    const frac = c.t / c.dur
    let reveal: number, colorT: number
    if (frac < DRAW_FRAC) { reveal = frac / DRAW_FRAC; colorT = reveal }
    else if (frac < HOLD_FRAC) { reveal = 1; colorT = 1 }
    else { reveal = 1; colorT = 1 - (frac - HOLD_FRAC) / (1 - HOLD_FRAC) }
    const revealLen = reveal * c.total
    let p1x: number, p1z: number, p2x: number, p2z: number
    if (revealLen <= c.leg1) {
      const t1 = c.leg1 > 0 ? revealLen / c.leg1 : 1
      p1x = c.a.x + (c.cx - c.a.x) * t1; p1z = c.a.z + (c.cz - c.a.z) * t1
      p2x = c.cx; p2z = c.cz // second leg hasn't started: collapsed at the bend
    } else {
      p1x = c.cx; p1z = c.cz // first leg fully etched
      const t2 = c.leg2 > 0 ? (revealLen - c.leg1) / c.leg2 : 1
      p2x = c.cx + (c.b.x - c.cx) * t2; p2z = c.cz + (c.b.z - c.cz) * t2
    }
    const col = BG_COLOR.clone().lerp(TRACE_COLOR, Math.max(0, colorT))
    const pts = [c.a.x, c.a.z, p1x, p1z, c.cx, c.cz, p2x, p2z]
    const base = i * VPC * 3
    for (let v = 0; v < VPC; v++) {
      tracePos[base + v * 3] = pts[v * 2]; tracePos[base + v * 3 + 1] = 1; tracePos[base + v * 3 + 2] = pts[v * 2 + 1]
      traceCol[base + v * 3] = col.r; traceCol[base + v * 3 + 1] = col.g; traceCol[base + v * 3 + 2] = col.b
    }
  }
  conns.forEach((c, i) => writeConn(i, c))

  // A sparse subset of nodes gets a flat, static IC footprint.
  const chipIdx = nodes.map((_, i) => i).filter((_, i) => i % 7 === 3)
  const chipMesh = new THREE.InstancedMesh(new THREE.BoxGeometry(CHIP_W, CHIP_H, CHIP_D), new THREE.MeshLambertMaterial({ color: '#0c0e0c' }), chipIdx.length)
  const chipDummy = new THREE.Object3D()
  chipIdx.forEach((idx, k) => {
    const n = nodes[idx]
    chipDummy.position.set(n.x, CHIP_H / 2, n.z); chipDummy.rotation.y = (idx % 4) * (Math.PI / 2); chipDummy.updateMatrix()
    chipMesh.setMatrixAt(k, chipDummy.matrix)
  })
  scene.add(chipMesh)

  // Pulses: small glowing markers riding whichever connections are currently lit.
  const pulseMesh = new THREE.InstancedMesh(new THREE.BoxGeometry(PULSE_SIZE, 3, PULSE_SIZE), new THREE.MeshBasicMaterial({ color: ACTIVE }), PULSE_COUNT)
  const pulses = Array.from({ length: PULSE_COUNT }, () => ({ conn: (Math.random() * CONN_COUNT) | 0, t: Math.random() }))
  const pulseDummy = new THREE.Object3D()

  function resize() {
    const w = innerWidth, h = innerHeight, a = w / h
    renderer.setSize(w, h, false)
    camera.left = -HALF_H * a; camera.right = HALF_H * a; camera.top = HALF_H; camera.bottom = -HALF_H
    camera.updateProjectionMatrix()
  }
  resize(); addEventListener('resize', resize)

  let raf = 0, last = performance.now()
  function frame() {
    raf = requestAnimationFrame(frame)
    const now = performance.now(), dt = Math.min(0.05, (now - last) / 1000); last = now

    conns.forEach((c, i) => {
      c.t += dt
      if (c.t >= c.dur) conns[i] = makeConn()
      writeConn(i, conns[i])
    })
    traceGeo.attributes.position.needsUpdate = true
    traceGeo.attributes.color.needsUpdate = true

    pulses.forEach((p, i) => {
      const c = conns[p.conn]
      const cFrac = c.t / c.dur
      p.t += (dt * PULSE_SPEED * 140) / Math.max(40, c.total)
      if (p.t >= 1 || cFrac < DRAW_FRAC || cFrac > HOLD_FRAC) { p.conn = (Math.random() * CONN_COUNT) | 0; p.t = 0 }
      const live = conns[p.conn]
      const d = live.total * p.t
      const x = d <= live.leg1 ? live.a.x + (live.cx - live.a.x) * (d / (live.leg1 || 1)) : live.cx + (live.b.x - live.cx) * ((d - live.leg1) / (live.leg2 || 1))
      const z = d <= live.leg1 ? live.a.z + (live.cz - live.a.z) * (d / (live.leg1 || 1)) : live.cz + (live.b.z - live.cz) * ((d - live.leg1) / (live.leg2 || 1))
      pulseDummy.position.set(x, 3, z); pulseDummy.updateMatrix(); pulseMesh.setMatrixAt(i, pulseDummy.matrix)
    })
    pulseMesh.instanceMatrix.needsUpdate = true

    renderer.render(scene, camera)
  }
  const visibility = () => { cancelAnimationFrame(raf); if (document.visibilityState === 'visible') { last = performance.now(); frame() } }
  document.addEventListener('visibilitychange', visibility)
  frame()

  return () => {
    cancelAnimationFrame(raf)
    removeEventListener('resize', resize)
    document.removeEventListener('visibilitychange', visibility)
    traceGeo.dispose(); (traces.material as THREE.Material).dispose()
    chipMesh.geometry.dispose(); (chipMesh.material as THREE.Material).dispose()
    pulseMesh.geometry.dispose(); (pulseMesh.material as THREE.Material).dispose()
    floor.geometry.dispose(); (floor.material as THREE.Material).dispose()
    renderer.dispose()
  }
}
</script>

<template>
  <canvas v-if="enabled" ref="canvasEl" class="fixed inset-0 z-0 w-full h-full pointer-events-none" aria-hidden="true" />
</template>
