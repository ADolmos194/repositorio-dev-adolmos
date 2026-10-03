<script setup lang="ts">
import * as THREE from 'three'

/* Sitewide "boxes hover" background — a flat grid of tiles that lift and
   light up near the cursor, inspired by the Spline "Boxes Hover" template.
   One InstancedMesh instead of N meshes: this runs behind the whole page,
   continuously, so per-instance Vue reactivity would be wasteful — matrices
   and colors are written straight to the instanced buffers every frame. */
/* square, not rectangular — a non-square grid rotated 45° under the
   isometric camera projects as a lopsided parallelogram (content banding
   from one corner to the opposite one, two corners left empty); square
   COLS×ROWS is what actually reads as a centered, even rhombus. */
const COLS = 26
const ROWS_N = 26
const SPACING = 100
const TILE_W = 70
const TILE_H = 68
const LIFT = 50
const RADIUS = 260
/* always exactly this many cubes raised while the cursor is near the grid
   — the nearest N to the pointer, not a fixed-radius threshold (which lets
   the count drift up/down depending on where on the grid you are) */
const ACTIVE_COUNT = 11

/* resting tiles aren't one flat color — a diamond-shaped zone around the
   center reads as "more present" (closer in value to the resting-tile
   base), fading toward the outer edges, so only "a certain part, like a
   rhombus" stands out at rest. In dark mode that zone is LIGHTER than
   its surroundings (closer to black → away from black reads as more
   visible); in light mode it's the opposite — DARKER/more saturated than
   the near-white surroundings is what reads as "more visible" there. */
const PALETTES = {
  dark: {
    bg: '#000000',
    restDim: '#211b14',
    restVisible: '#2b2419',
    accent: '#c9a15a',
    floor: '#000000', // matches bg — no visible floor plane change here
    ambient: '#d8d4cc',
    key: '#f5f3ee',
    fill: '#8a6a2e',
    ambientIntensity: 0.38,
    keyIntensity: 1,
    fillIntensity: 0.15,
    glow: '201,161,90',
    glowBlending: THREE.AdditiveBlending,
    glowOpacity: 0.75,
  },
  light: {
    // no visible diamond zone at rest at all — resting tiles are set to
    // the exact same color as the background, so the page reads as flat
    // white until the pointer actually raises a cluster (only the box's
    // own light/shadow shading gives the grid any texture at rest, same
    // as an embossed-paper look, not a colored pattern). Risen cubes are
    // light gray/white (not gold); the warm gold is reserved for the
    // ground glow pooling under the cluster — "su piso" — instead.
    bg: '#ffffff',
    restDim: '#ffffff',
    restVisible: '#ffffff',
    accent: '#9d9b96',
    // the gaps between tiles (and under a raised cluster) showed plain
    // canvas-white through them — reads as a blank "floor". A solid plane
    // under the whole grid fills every one of those gaps reliably, instead
    // of depending on the cursor-glow's blending to show through. Black,
    // not gold — tried gold first, user didn't like it.
    floor: '#000000',
    // flooding the scene with ambient and almost killing the directional
    // lights keeps resting faces nearly shade-free — same color on every
    // face, not just same color on the top face — which is what actually
    // reads as "flat white" instead of a visible white-on-white honeycomb
    ambient: '#ffffff',
    key: '#ffffff',
    fill: '#ffffff',
    ambientIntensity: 3,
    keyIntensity: 0.3,
    fillIntensity: 0.1,
    glow: '201,161,90',
    glowBlending: THREE.NormalBlending,
    glowOpacity: 0.8,
  },
} as const
const { theme } = useTheme()
function currentPalette() {
  return theme.value === 'dark' ? PALETTES.dark : PALETTES.light
}
const REST_DIM = new THREE.Color(currentPalette().restDim)
const REST_VISIBLE = new THREE.Color(currentPalette().restVisible)
const ACCENT_COLOR = new THREE.Color(currentPalette().accent)
const VISIBLE_ZONE = (COLS / 2) * SPACING * 1.05

/* Orthographic, not perspective: with a perspective camera, tiles near the
   bottom of the viewport (closer to the camera) blow up to several times
   the size of tiles further away — hovering near the bottom of the screen
   made a single tile balloon to cover half the hero. Ortho keeps every
   tile's on-screen size constant regardless of where the pointer lands. */
const ORTHO_HALF_HEIGHT = 480

interface Tile { x: number; z: number; height: number; rest: THREE.Color; speed: number; centerFactor: number }
const tiles: Tile[] = []
for (let r = 0; r < ROWS_N; r++) {
  for (let c = 0; c < COLS; c++) {
    const x = (c - (COLS - 1) / 2) * SPACING
    const z = (r - (ROWS_N - 1) / 2) * SPACING
    // Manhattan distance from center — thresholding it is what makes the
    // visible zone a diamond instead of a circle (a rhombus, as asked).
    const manhattan = Math.abs(x) + Math.abs(z)
    const centerFalloff = Math.max(0, 1 - manhattan / VISIBLE_ZONE)
    const smoothCenter = centerFalloff * centerFalloff * (3 - 2 * centerFalloff)
    // each tile eases at its own fixed rate — when the pointer jumps to a
    // new spot, the whole old cluster lerping at one shared speed drops in
    // perfect lockstep and reads as "everything falls at once"; a per-tile
    // speed desynchronizes it so cubes rise/fall individually, staggered.
    // centerFactor is kept (not just baked into `rest`) so the palette can
    // recompute every tile's resting color on a theme switch.
    tiles.push({ x, z, height: 0, rest: REST_DIM.clone().lerp(REST_VISIBLE, smoothCenter), speed: 0.045 + Math.random() * 0.055, centerFactor: smoothCenter })
  }
}

const geometry = new THREE.BoxGeometry(TILE_W, TILE_H, TILE_W)
const material = new THREE.MeshStandardMaterial({ roughness: 0.5, metalness: 0.25 })
const instancedMesh = new THREE.InstancedMesh(geometry, material, tiles.length)

const dummy = new THREE.Object3D()
const tmpColor = new THREE.Color()
/* distValues stays index-aligned with tiles (never reordered); order is the
   array actually sorted each frame to rank by distance — sorting distScratch
   itself would scramble which entry belongs to which tile come next frame */
const distValues = new Float32Array(tiles.length)
const order = tiles.map((_, i) => i)
const targetSmooth = new Float32Array(tiles.length)
tiles.forEach((t, i) => {
  dummy.position.set(t.x, 0, t.z)
  dummy.updateMatrix()
  instancedMesh.setMatrixAt(i, dummy.matrix)
  instancedMesh.setColorAt(i, t.rest)
})

/* a soft radial glow that follows the cursor along the ground, sitting
   just below the resting cube tops — reads as light pooling in the gaps
   ("calles") between cubes as they rise, the way the reference's floor
   glows under the cluster. A small canvas gradient, not a shader.
   rgb is a "r,g,b" string (palette.glow) baked into the gradient stops —
   regenerated per theme rather than tinted via material.color, since the
   two themes also need different alpha stops (see blending note below). */
function makeGlowTexture(rgb: string) {
  // document doesn't exist during SSR — this component renders its
  // TresCanvas client-only, but the script itself still runs on the server
  if (!import.meta.client) return new THREE.Texture()
  const size = 128
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')!
  const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
  grad.addColorStop(0, `rgba(${rgb},0.7)`)
  grad.addColorStop(0.5, `rgba(${rgb},0.3)`)
  grad.addColorStop(1, `rgba(${rgb},0)`)
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, size, size)
  return new THREE.CanvasTexture(canvas)
}
/* AdditiveBlending reads as a warm light pooling on a near-black floor,
   but adding color on top of an already-near-white floor just clips back
   to white — invisible. Light theme switches to NormalBlending instead,
   where the gradient's own alpha paints a visible soft warm patch. */
const glowMaterial = new THREE.MeshBasicMaterial({
  map: makeGlowTexture(currentPalette().glow),
  transparent: true,
  depthWrite: false,
  blending: currentPalette().glowBlending,
  opacity: 0,
})
/* a flat disc lying ON the ground (rotated, not a camera-facing sprite) so
   it reads as light pooling on the floor under this isometric angle, same
   as a diamond tile top would */
const glowGeometry = new THREE.CircleGeometry(RADIUS * 1.3, 32)
glowGeometry.rotateX(-Math.PI / 2)
const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial)
glowMesh.position.y = -TILE_H / 2 + 1

/* a solid, static plane under the whole grid — fills every gap between
   tiles (and under a raised cluster) with one flat color, instead of
   relying on the cursor-following glow's transparency to reliably show
   through there. Unlit (MeshBasicMaterial) so it renders at its exact
   set color regardless of the scene lights tuned for the cube faces. */
const floorGeometry = new THREE.PlaneGeometry(COLS * SPACING + 40, ROWS_N * SPACING + 40)
floorGeometry.rotateX(-Math.PI / 2)
const floorMaterial = new THREE.MeshBasicMaterial({ color: currentPalette().floor })
const floorMesh = new THREE.Mesh(floorGeometry, floorMaterial)
floorMesh.position.y = -TILE_H / 2 - 1

/* re-applies every theme-dependent color/material setting — called once
   up front (nothing to "switch" yet, just sets initial state cleanly)
   and again on every theme toggle via the watcher below. */
function applyPalette() {
  const p = currentPalette()
  REST_DIM.set(p.restDim)
  REST_VISIBLE.set(p.restVisible)
  ACCENT_COLOR.set(p.accent)
  for (const t of tiles) t.rest.copy(REST_DIM).lerp(REST_VISIBLE, t.centerFactor)
  glowMaterial.map?.dispose()
  glowMaterial.map = makeGlowTexture(p.glow)
  glowMaterial.blending = p.glowBlending
  floorMaterial.color.set(p.floor)
}
watch(theme, applyPalette)

let motionAllowed = true
let pointerFine = false
let raf = 0
let mqlDesktop: MediaQueryList | null = null
const wrapperEl = ref<HTMLElement | null>(null)
const desktopEnough = ref(false)
const tabVisible = ref(true)

const active = computed(() => desktopEnough.value && pointerFine && motionAllowed)
const mounted = computed(() => active.value && tabVisible.value)
// plain reactive props (canvas clear color, fog, lights) — Tres updates
// the underlying three.js objects when these change, no manual code needed
const canvasBg = computed(() => currentPalette().bg)
const fogArgs = computed<[string, number, number]>(() => [currentPalette().bg, 1100, 2900])
const ambientColor = computed(() => currentPalette().ambient)
const ambientIntensity = computed(() => currentPalette().ambientIntensity)
const keyColor = computed(() => currentPalette().key)
const keyIntensity = computed(() => currentPalette().keyIntensity)
const fillColor = computed(() => currentPalette().fill)
const fillIntensity = computed(() => currentPalette().fillIntensity)

const camera = ref<THREE.OrthographicCamera>()
const groundPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0)
const raycaster = new THREE.Raycaster()
const pointerNdc = new THREE.Vector2(10, 10) // start off-screen → no tile lit at rest
const pointerWorld = new THREE.Vector3(9999, 0, 9999)

const aspect = ref(16 / 9)
const orthoArgs = computed(() => {
  const w = ORTHO_HALF_HEIGHT * aspect.value
  return [-w, w, ORTHO_HALF_HEIGHT, -ORTHO_HALF_HEIGHT, 1, 4000]
})
function onResize() {
  aspect.value = window.innerWidth / window.innerHeight
}

function onPointerMove(e: PointerEvent) {
  pointerNdc.x = (e.clientX / window.innerWidth) * 2 - 1
  pointerNdc.y = -(e.clientY / window.innerHeight) * 2 + 1
}

function onVisibilityChange() {
  tabVisible.value = document.visibilityState === 'visible'
}

function onMqlChange(e: MediaQueryListEvent) {
  desktopEnough.value = e.matches
}

function tick() {
  raf = requestAnimationFrame(tick)
  if (!camera.value) return

  raycaster.setFromCamera(pointerNdc, camera.value)
  raycaster.ray.intersectPlane(groundPlane, pointerWorld)

  // the ACTIVE_COUNT nearest tiles to the pointer — always that many, as
  // the cursor moves some drop out and others join so the count holds
  for (let i = 0; i < tiles.length; i++) {
    const t = tiles[i]
    distValues[i] = Math.hypot(t.x - pointerWorld.x, t.z - pointerWorld.z)
  }
  order.sort((a, b) => distValues[a] - distValues[b])
  const withinGrid = distValues[order[0]] < RADIUS * 1.6

  // all ACTIVE_COUNT tiles sit at the SAME level, full color — same height
  // means neighboring raised cubes' side faces sit flush/touching, so the
  // whole connected cluster reads as one uniform-colored block
  targetSmooth.fill(0)
  if (withinGrid) {
    for (let k = 0; k < ACTIVE_COUNT; k++) {
      targetSmooth[order[k]] = 1
    }
  }

  for (let i = 0; i < tiles.length; i++) {
    const t = tiles[i]
    const smooth = targetSmooth[i]
    const target = smooth * LIFT
    t.height += (target - t.height) * t.speed

    dummy.position.set(t.x, t.height, t.z)
    dummy.updateMatrix()
    instancedMesh.setMatrixAt(i, dummy.matrix)
    tmpColor.copy(t.rest).lerp(ACCENT_COLOR, smooth)
    instancedMesh.setColorAt(i, tmpColor)
  }
  instancedMesh.instanceMatrix.needsUpdate = true
  if (instancedMesh.instanceColor) instancedMesh.instanceColor.needsUpdate = true

  glowMesh.position.x = pointerWorld.x
  glowMesh.position.z = pointerWorld.z
  glowMaterial.opacity = motionAllowed ? currentPalette().glowOpacity : 0
}

function stopLoop() {
  if (raf) cancelAnimationFrame(raf)
  raf = 0
}

function startLoop() {
  if (raf) return
  tick()
}

onMounted(() => {
  motionAllowed = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  pointerFine = window.matchMedia('(pointer: fine)').matches

  mqlDesktop = window.matchMedia('(min-width: 960px)')
  desktopEnough.value = mqlDesktop.matches
  mqlDesktop.addEventListener('change', onMqlChange)

  document.addEventListener('visibilitychange', onVisibilityChange)
  window.addEventListener('pointermove', onPointerMove)
  onResize()
  window.addEventListener('resize', onResize)

  watch(mounted, (on) => { if (on) startLoop(); else stopLoop() }, { immediate: true })
})

onBeforeUnmount(() => {
  stopLoop()
  mqlDesktop?.removeEventListener('change', onMqlChange)
  document.removeEventListener('visibilitychange', onVisibilityChange)
  window.removeEventListener('pointermove', onPointerMove)
  window.removeEventListener('resize', onResize)
  geometry.dispose()
  material.dispose()
  glowGeometry.dispose()
  glowMaterial.dispose()
  glowMaterial.map?.dispose()
  floorGeometry.dispose()
  floorMaterial.dispose()
})
</script>

<template>
  <div v-if="active" ref="wrapperEl" class="site-box-grid" aria-hidden="true">
    <ClientOnly>
      <TresCanvas v-if="mounted" :clear-color="canvasBg" :dpr="[1, 2]">
        <TresOrthographicCamera ref="camera" :position="[920, 900, 920]" :look-at="[0, 0, 0]" :args="orthoArgs" />
        <TresFog :args="fogArgs" />
        <TresAmbientLight :intensity="ambientIntensity" :color="ambientColor" />
        <TresDirectionalLight :position="[300, 500, 200]" :intensity="keyIntensity" :color="keyColor" />
        <TresDirectionalLight :position="[-260, 100, -180]" :intensity="fillIntensity" :color="fillColor" />
        <primitive :object="floorMesh" />
        <primitive :object="glowMesh" />
        <primitive :object="instancedMesh" />
      </TresCanvas>
    </ClientOnly>
  </div>
</template>

<style scoped>
.site-box-grid {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}
</style>
