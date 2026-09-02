<script setup lang="ts">
const { locale, c, set } = useLocale()
const { theme, toggle } = useTheme()
const { open: paletteOpen } = useCommandPalette()

const open = ref(false)
const route = useRoute()
watch(() => route.path, () => { open.value = false })

const links = computed(() => [
  { to: '/about', label: c.value.nav.about },
  { to: '/services', label: c.value.nav.services },
  { to: '/stack', label: c.value.nav.stack },
  { to: '/experience', label: c.value.nav.experience },
  { to: '/projects', label: c.value.nav.projects },
  { to: '/contact', label: c.value.nav.contact },
])
</script>

<template>
  <div class="term__bar">
    <div class="dots"><i class="r" /><i class="y" /><i class="g" /></div>
    <span class="term__path"><b>aylton</b>@portfolio: ~/dev</span>

    <button type="button" class="cmdk-trigger" :aria-label="c.palette.placeholder" @click="paletteOpen = true">
      <Icon name="lucide:search" />
      <kbd>⌘K</kbd>
    </button>

    <button
      class="term__burger"
      :aria-expanded="open"
      :aria-label="open ? 'Cerrar menú' : 'Abrir menú'"
      @click="open = !open"
    >
      <Icon :name="open ? 'lucide:x' : 'lucide:menu'" />
    </button>

    <nav class="term__nav" :class="{ open }" aria-label="Secciones">
      <NuxtLink to="/">{{ c.nav.home }}</NuxtLink>
      <NuxtLink v-for="l in links" :key="l.to" :to="l.to">{{ l.label }}</NuxtLink>

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
.cmdk-trigger {
  display: inline-flex; align-items: center; gap: 7px;
  margin-left: 14px;
  background: transparent; border: 1px solid var(--line); border-radius: 6px;
  color: var(--text-mute); cursor: pointer;
  padding: 4px 8px; font-size: 12px;
  transition: color .16s, border-color .16s;
}
.cmdk-trigger:hover, .cmdk-trigger:focus-visible { color: var(--green); border-color: var(--green-dim); outline: none; }
.cmdk-trigger kbd {
  font-family: var(--mono); font-size: 10.5px; color: var(--text-mute);
  border: 1px solid var(--line); border-radius: 4px; padding: 1px 5px;
}
.cmdk-trigger:hover kbd, .cmdk-trigger:focus-visible kbd { color: var(--green); border-color: var(--green-dim); }

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
