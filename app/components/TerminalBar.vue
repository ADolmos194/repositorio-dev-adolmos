<script setup lang="ts">
const { locale, c, set } = useLocale()
const { theme, toggle } = useTheme()
const { activeId } = useActiveSection()

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

// must start false to match the server render (SSR has no window/scroll),
// or hydration sees a class mismatch whenever the page loads scrolled
// down (a refresh mid-scroll, or scroll restoration). The bar has no
// transition on this property (see main.css) specifically so flipping it
// a tick later in onMounted is still an instant, single-frame swap — no
// room for it to visibly "shake" regardless of scroll-restoration or
// font-load timing.
const scrolled = ref(false)

function updateScrolled() {
  scrolled.value = window.scrollY > 8
}

onMounted(() => {
  window.addEventListener('scroll', updateScrolled, { passive: true })
  updateScrolled()
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateScrolled)
})

function onHomeClick(e: MouseEvent) {
  open.value = false
  goHome(e)
}
</script>

<template>
  <div class="term__bar" :class="{ 'term__bar--scrolled': scrolled }">
    <a href="#home" class="brand" @click="onHomeClick"><span class="brand__bracket">&lt;/</span>AM<span class="brand__bracket">&gt;</span></a>

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
        @click="l.id === 'home' ? onHomeClick($event) : (open = false)"
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
  color: var(--accent); border-color: var(--accent-dim);
}
</style>
