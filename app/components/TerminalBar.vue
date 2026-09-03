<script setup lang="ts">
const { locale, c, set } = useLocale()
const { theme, toggle } = useTheme()

const open = ref(false)

const links = computed(() => [
  { id: 'home', label: c.value.nav.home },
  { id: 'about', label: c.value.nav.about },
  { id: 'services', label: c.value.nav.services },
  { id: 'stack', label: c.value.nav.stack },
  { id: 'experience', label: c.value.nav.experience },
  { id: 'projects', label: c.value.nav.projects },
  { id: 'contact', label: c.value.nav.contact },
])

const sectionIds = ['home', 'about', 'services', 'stack', 'experience', 'projects', 'contact']
const activeId = ref('home')

/* Plain scrollTop math instead of IntersectionObserver: the observer version
   never marked the last section active, because the page can't scroll far
   enough for "contact" to cross the activation line — it hits the bottom of
   the scroll range first, so the second-to-last section stayed lit forever. */
function updateActive() {
  const doc = document.documentElement
  const activationLine = window.innerHeight * 0.25

  let current = sectionIds[0]
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

onMounted(() => {
  window.addEventListener('scroll', updateActive, { passive: true })
  // 'scroll' fires throughout a smooth-scroll animation but the tick that
  // lands exactly on the resting position isn't guaranteed — 'scrollend'
  // fires once, precisely when it actually stops, so the final state is
  // always correct even after clicking a nav link.
  window.addEventListener('scrollend', updateActive, { passive: true })
  updateActive()
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateActive)
  window.removeEventListener('scrollend', updateActive)
})
</script>

<template>
  <div class="term__bar">
    <a href="#home" class="brand"><span class="brand__dot" />Aylton Mart&iacute;nez</a>

    <button
      class="term__burger"
      :aria-expanded="open"
      :aria-label="open ? 'Cerrar menú' : 'Abrir menú'"
      @click="open = !open"
    >
      <Icon :name="open ? 'lucide:x' : 'lucide:menu'" />
    </button>

    <nav class="term__nav" :class="{ open }" aria-label="Secciones">
      <a
        v-for="l in links"
        :key="l.id"
        :href="`#${l.id}`"
        :class="{ active: activeId === l.id }"
        @click="open = false"
      >{{ l.label }}</a>

      <span class="seg" role="group" aria-label="Idioma / Language">
        <button type="button" :class="{ active: locale === 'es' }" :aria-pressed="locale === 'es'" @click="set('es')">ES</button>
        <button type="button" :class="{ active: locale === 'en' }" :aria-pressed="locale === 'en'" @click="set('en')">EN</button>
      </span>

      <button
        type="button"
        class="btn theme-btn"
        :aria-label="theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'"
        :title="theme === 'dark' ? 'Modo claro' : 'Modo oscuro'"
        @click="toggle"
      >{{ theme === 'dark' ? '☀' : '☾' }}</button>
    </nav>
  </div>
</template>

<style scoped>
.theme-btn {
  margin-left: 6px;
  padding: 4px 10px;
  font-size: 14px;
  line-height: 1.3;
}
/* display is controlled globally (main.css) so the media query can win;
   these are just the button's looks */
.term__burger {
  margin-left: auto;
  align-items: center; justify-content: center;
  background: transparent; border: 1px solid var(--line);
  color: var(--text-dim); cursor: pointer;
  padding: 5px 8px; font-size: 18px; line-height: 1;
  transition: color .18s, border-color .18s;
}
.term__burger:hover, .term__burger[aria-expanded="true"] {
  color: var(--green); border-color: var(--green-dim);
}
</style>
