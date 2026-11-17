<script setup lang="ts">
import * as THREE from 'three'

/* Site background: a grid of dark cubes seen from an isometric angle. The cubes nearest the pointer
   rise and take the accent color. Plain three.js on one canvas (one InstancedMesh, no extra wrapper
   library). It only runs with a fine pointer, a wide screen and no "reduce motion" preference. */
const COLS = 26
const SPACING = 100
const TILE = 70
const TILE_H = 68
const LIFT = 56
const ACTIVE_COUNT = 11
const HALF_H = 480
const BG = '#050505'
const REST = '#101013'
const REST_NEAR = '#17171c'
const ACCENT = '#1b6b45' // dark green: the raised cubes stay calm behind the text

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

function start(canvas: HTMLCanvasElement) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2))
  renderer.setClearColor(BG)

  const scene = new THREE.Scene()
  scene.fog = new THREE.Fog(BG, 1100, 2900)
  scene.add(new THREE.AmbientLight('#d9d9de', 0.55))
  const key = new THREE.DirectionalLight('#ffffff', 0.9); key.position.set(300, 500, 200); scene.add(key)
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 1, 4000)
  camera.position.set(920, 900, 920); camera.lookAt(0, 0, 0)

  const n = COLS * COLS
  const mesh = new THREE.InstancedMesh(new THREE.BoxGeometry(TILE, TILE_H, TILE), new THREE.MeshLambertMaterial(), n)
  const tiles = Array.from({ length: n }, (_, i) => {
    const x = ((i % COLS) - (COLS - 1) / 2) * SPACING
    const z = (Math.floor(i / COLS) - (COLS - 1) / 2) * SPACING
    const near = Math.max(0, 1 - (Math.abs(x) + Math.abs(z)) / ((COLS / 2) * SPACING * 1.05)) // brighter diamond at the center
    return { x, z, h: 0, speed: 0.045 + Math.random() * 0.055, rest: new THREE.Color(REST).lerp(new THREE.Color(REST_NEAR), near) }
  })
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(COLS * SPACING + 40, COLS * SPACING + 40).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: BG }))
  floor.position.y = -TILE_H / 2 - 1
  scene.add(floor, mesh)

  const dummy = new THREE.Object3D(), tmp = new THREE.Color(), accent = new THREE.Color(ACCENT)
  const ground = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0), ray = new THREE.Raycaster()
  const ndc = new THREE.Vector2(10, 10), hit = new THREE.Vector3(9999, 0, 9999)
  const dist = new Float32Array(n), order = tiles.map((_, i) => i)

  function resize() {
    const w = innerWidth, h = innerHeight, a = w / h
    renderer.setSize(w, h, false)
    camera.left = -HALF_H * a; camera.right = HALF_H * a; camera.top = HALF_H; camera.bottom = -HALF_H
    camera.updateProjectionMatrix()
  }
  const move = (e: PointerEvent) => { ndc.set((e.clientX / innerWidth) * 2 - 1, -(e.clientY / innerHeight) * 2 + 1) }
  resize(); addEventListener('resize', resize); addEventListener('pointermove', move)

  let raf = 0
  function frame() {
    raf = requestAnimationFrame(frame)
    ray.setFromCamera(ndc, camera); ray.ray.intersectPlane(ground, hit)
    tiles.forEach((t, i) => { dist[i] = Math.hypot(t.x - hit.x, t.z - hit.z) })
    order.sort((a, b) => dist[a] - dist[b]) // the ACTIVE_COUNT nearest tiles rise together
    const up = dist[order[0]] < 420
    tiles.forEach((t, i) => {
      const on = up && order.indexOf(i) < ACTIVE_COUNT ? 1 : 0
      t.h += (on * LIFT - t.h) * t.speed
      dummy.position.set(t.x, t.h, t.z); dummy.updateMatrix(); mesh.setMatrixAt(i, dummy.matrix)
      mesh.setColorAt(i, tmp.copy(t.rest).lerp(accent, t.h / LIFT))
    })
    mesh.instanceMatrix.needsUpdate = true
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true
    renderer.render(scene, camera)
  }
  const visibility = () => { cancelAnimationFrame(raf); if (document.visibilityState === 'visible') frame() }
  document.addEventListener('visibilitychange', visibility)
  frame()

  return () => {
    cancelAnimationFrame(raf)
    removeEventListener('resize', resize); removeEventListener('pointermove', move)
    document.removeEventListener('visibilitychange', visibility)
    mesh.geometry.dispose(); (mesh.material as THREE.Material).dispose(); floor.geometry.dispose(); (floor.material as THREE.Material).dispose()
    renderer.dispose()
  }
}
</script>

<template>
  <canvas v-if="enabled" ref="canvasEl" class="fixed inset-0 z-0 w-full h-full pointer-events-none" aria-hidden="true" />
</template>
