<script setup lang="ts">
/* thin accent line on the right edge that fills as the page scrolls — the
   one visual thread meant to recur across every section (see main.css
   .scroll-signature). Purely decorative chrome, no content. */
const progress = ref(0)
let raf = 0

function onScroll() {
  if (raf) return
  raf = requestAnimationFrame(() => {
    const doc = document.documentElement
    const max = doc.scrollHeight - doc.clientHeight
    progress.value = max > 0 ? Math.min(1, doc.scrollTop / max) : 0
    raf = 0
  })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  if (raf) cancelAnimationFrame(raf)
})
</script>

<template>
  <div class="scroll-signature" aria-hidden="true">
    <span class="scroll-signature__fill" :style="{ transform: `scaleY(${progress})` }" />
  </div>
</template>
