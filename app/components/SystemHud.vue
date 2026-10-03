<script setup lang="ts">
/* persistent corner readout — the site's recurring "signature" element.
   Always shows ● SYSTEM ONLINE; the second line names whichever section
   is active, briefly announcing "LOADING MODULE: X" on the way in so
   crossing into a new section reads as a small system event, not a
   silent scroll. Purely decorative, never blocks scroll. */
const { activeId } = useActiveSection()

const MODULE_LABEL: Record<string, string> = {
  home: 'BOOT',
  about: 'IDENTITY',
  services: 'SERVICES',
  stack: 'MODULES',
  experience: 'LOG',
  projects: 'PROJECTS',
  contact: 'CONNECTION',
}

const loading = ref(false)
const settledLabel = ref(MODULE_LABEL.home)
let timer: ReturnType<typeof setTimeout> | null = null

/* rides up above the footer as it scrolls into view, instead of sitting
   on top of it — plain getBoundingClientRect math on scroll/resize, same
   approach as useActiveSection (an IntersectionObserver only fires on
   threshold crossings, not smoothly as the footer's edge moves). */
const liftPx = ref(0)
function updateLift() {
  const footer = document.querySelector('.site-footer')
  if (!footer) return
  const overlap = window.innerHeight - footer.getBoundingClientRect().top
  liftPx.value = overlap > 0 ? overlap : 0
}

watch(activeId, (id, prev) => {
  if (id === prev) return
  const reduce = import.meta.client && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduce) {
    settledLabel.value = MODULE_LABEL[id] ?? id
    return
  }
  loading.value = true
  if (timer) clearTimeout(timer)
  timer = setTimeout(() => {
    settledLabel.value = MODULE_LABEL[id] ?? id
    loading.value = false
  }, 380)
}, { immediate: true })

onMounted(() => {
  window.addEventListener('scroll', updateLift, { passive: true })
  window.addEventListener('resize', updateLift, { passive: true })
  updateLift()
})
onBeforeUnmount(() => {
  if (timer) clearTimeout(timer)
  window.removeEventListener('scroll', updateLift)
  window.removeEventListener('resize', updateLift)
})
</script>

<template>
  <div class="sys-hud" :style="{ transform: liftPx ? `translateY(-${liftPx}px)` : 'none' }" aria-hidden="true">
    <span class="sys-hud__dot" />
    <span v-if="loading" class="sys-hud__line">LOADING MODULE: {{ MODULE_LABEL[activeId] ?? activeId }}...</span>
    <span v-else class="sys-hud__line">SYSTEM ONLINE <b>· {{ settledLabel }}</b></span>
  </div>
</template>
