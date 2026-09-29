<script setup lang="ts">
/* small accent ring that follows the pointer and grows over interactive
   targets — desktop-only (pointer: fine) and skipped entirely under
   reduced-motion; the native cursor is never hidden, so this is purely
   an added detail, never a required affordance. */
const enabled = ref(false)
const x = ref(0)
const y = ref(0)
const hover = ref(false)

let raf = 0
let tx = 0
let ty = 0

function onMove(e: MouseEvent) {
  tx = e.clientX
  ty = e.clientY
  if (!raf) raf = requestAnimationFrame(apply)
}
function apply() {
  x.value = tx
  y.value = ty
  raf = 0
}
function onOver(e: MouseEvent) {
  const target = e.target as HTMLElement
  hover.value = !!target.closest?.('a, button, [role="button"], input, textarea, select, summary')
}

onMounted(() => {
  const fine = window.matchMedia('(pointer: fine)').matches
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!fine || reduce) return
  enabled.value = true
  window.addEventListener('mousemove', onMove, { passive: true })
  window.addEventListener('mouseover', onOver, { passive: true })
})
onBeforeUnmount(() => {
  window.removeEventListener('mousemove', onMove)
  window.removeEventListener('mouseover', onOver)
  if (raf) cancelAnimationFrame(raf)
})
</script>

<template>
  <div
    v-if="enabled"
    class="cursor-dot"
    :class="{ 'cursor-dot--hover': hover }"
    :style="{ transform: `translate3d(${x}px, ${y}px, 0)` }"
    aria-hidden="true"
  />
</template>
