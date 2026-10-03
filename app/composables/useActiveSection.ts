const sectionIds = ['home', 'about', 'services', 'stack', 'experience', 'projects', 'contact'] as const
export type SectionId = (typeof sectionIds)[number]

const activeId = ref<SectionId>('home')
let listenerCount = 0

/* Plain scrollTop math instead of IntersectionObserver: the observer version
   never marked the last section active, because the page can't scroll far
   enough for "contact" to cross the activation line — it hits the bottom of
   the scroll range first, so the second-to-last section stayed lit forever. */
function updateActive() {
  if (!import.meta.client) return
  const doc = document.documentElement
  const activationLine = window.innerHeight * 0.25

  let current: SectionId = sectionIds[0]
  for (const id of sectionIds) {
    const el = document.getElementById(id)
    if (el && el.getBoundingClientRect().top <= activationLine) current = id
  }
  // pinned to the floor of the page → force the last section, regardless
  // of where the activation line landed
  if (doc.scrollTop + window.innerHeight >= doc.scrollHeight - 16) {
    current = sectionIds[sectionIds.length - 1]
  }
  activeId.value = current
}

/* Shared across every consumer (nav highlight + the system HUD) so there's
   only ever one scroll listener doing this work, not one per component. */
export function useActiveSection() {
  onMounted(() => {
    listenerCount++
    if (listenerCount === 1) {
      window.addEventListener('scroll', updateActive, { passive: true })
      // 'scroll' fires throughout a smooth-scroll animation but the tick that
      // lands exactly on the resting position isn't guaranteed — 'scrollend'
      // fires once, precisely when it actually stops, so the final state is
      // always correct even after clicking a nav link.
      window.addEventListener('scrollend', updateActive, { passive: true })
    }
    updateActive()
  })
  onBeforeUnmount(() => {
    listenerCount--
    if (listenerCount === 0) {
      window.removeEventListener('scroll', updateActive)
      window.removeEventListener('scrollend', updateActive)
    }
  })

  return { activeId, sectionIds }
}
