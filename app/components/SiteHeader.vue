<script setup lang="ts">
const route = useRoute()
const { locale, set } = useLocale()
const { theme, toggle } = useTheme()

const NAV = {
  es: ['INICIO', 'PROYECTOS', 'STACK', 'EXPERIENCIA', 'CONTACTO'],
  en: ['HOME', 'PROJECTS', 'STACK', 'EXPERIENCE', 'CONTACT'],
} as const
const PATHS = ['/', '/proyectos', '/stack', '/experiencia', '/contacto']
const items = computed(() => NAV[locale.value].map((label, i) => [label, PATHS[i]] as const))
const text = computed(() => (locale.value === 'es'
  ? { cv: '[DESCARGAR CV]', badge: 'DISPONIBLE · FREELANCE & FULL-TIME', theme: theme.value === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro', lang: 'Idioma' }
  : { cv: '[DOWNLOAD CV]', badge: 'AVAILABLE · FREELANCE & FULL-TIME', theme: theme.value === 'dark' ? 'Switch to light mode' : 'Switch to dark mode', lang: 'Language' }))

// Small screens: the active link can start past the edge of the scrollable nav row, so bring it into view.
const mobileNavEl = ref<HTMLElement | null>(null)
function scrollActiveIntoView() {
  nextTick(() => {
    mobileNavEl.value?.querySelector('[aria-current="page"]')?.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' })
  })
}
onMounted(scrollActiveIntoView)
watch(() => route.path, scrollActiveIntoView)
</script>

<template>
  <header class="fixed top-0 left-0 w-full z-50 bg-[#050505]/95 backdrop-blur-sm border-b-2 border-[#d4a64a]">
    <div class="h-16 max-w-7xl mx-auto px-6 flex items-center justify-between gap-4 md:whitespace-nowrap">
      <div class="flex items-center gap-3">
        <NuxtLink to="/" class="flex items-center gap-2">
          <span class="w-3 h-3 bg-[#d4a64a] inline-block" />
          <span class="sm:hidden font-pixel text-[11px] tracking-wider text-white">AM</span>
          <span class="hidden sm:inline font-pixel text-[13px] tracking-wider text-white hover:text-[#d4a64a] transition-colors">AYLTON.MARTINEZ</span>
        </NuxtLink>
        <div class="hidden 2xl:flex items-center gap-2 px-3 py-1 bg-[#0e0e12] border-2 border-[#27272a] text-[#a1a1aa] font-mono text-[11px] uppercase tracking-wider">
          <span class="w-1.5 h-1.5 bg-[#4ade80]" />
          <span>{{ text.badge }}</span>
        </div>
      </div>

      <nav class="hidden md:flex items-center gap-1 font-pixel text-[10px] uppercase" aria-label="Secciones">
        <NuxtLink
          v-for="[label, to] in items"
          :key="to"
          :to="to"
          :aria-current="route.path === to ? 'page' : undefined"
          class="px-2 py-2 transition-colors border-2"
          :class="route.path === to ? 'text-black bg-[#d4a64a] border-white' : 'text-[#a1a1aa] border-transparent hover:text-white hover:border-[#d4a64a]'"
        >{{ label }}</NuxtLink>
      </nav>

      <div class="flex items-center gap-2">
        <div class="flex border-2 border-[#27272a] font-pixel text-[10px]" role="group" :aria-label="text.lang">
          <button
            v-for="l in (['es', 'en'] as const)"
            :key="l"
            type="button"
            class="px-2 py-2 uppercase transition-colors"
            :class="locale === l ? 'bg-[#4ade80] text-black' : 'text-[#a1a1aa] hover:text-white'"
            :aria-pressed="locale === l"
            @click="set(l)"
          >{{ l }}</button>
        </div>
        <button
          type="button"
          class="inline-flex items-center justify-center w-9 h-9 border-2 border-[#27272a] text-[#f4f4f5] hover:border-[#d4a64a] transition-colors"
          :aria-label="text.theme"
          :title="text.theme"
          @click="toggle($event)"
        >
          <span class="material-symbols-outlined text-[18px]">{{ theme === 'dark' ? 'light_mode' : 'dark_mode' }}</span>
        </button>
        <a
          class="inline-flex items-center gap-2 px-3 py-2 bg-[#d4a64a] text-black hover:bg-white font-pixel text-[10px] uppercase tracking-wider transition-colors shadow-[3px_3px_0_0_#5a4513]"
          href="/AyltonMesiasMartinez_CV.pdf"
          download
        >
          <span class="material-symbols-outlined text-[14px]">download</span>
          <span class="hidden sm:inline">{{ text.cv }}</span>
          <span class="sm:hidden">CV</span>
        </a>
      </div>
    </div>

    <!-- small screens: the same links in a scrollable row -->
    <nav ref="mobileNavEl" class="md:hidden flex gap-1 overflow-x-auto px-6 pb-2 font-pixel text-[10px] uppercase" aria-label="Secciones">
      <NuxtLink
        v-for="[label, to] in items"
        :key="to"
        :to="to"
        :aria-current="route.path === to ? 'page' : undefined"
        class="px-2 py-2 border-2 shrink-0 transition-colors"
        :class="route.path === to ? 'text-black bg-[#d4a64a] border-white' : 'text-[#a1a1aa] border-transparent'"
      >{{ label }}</NuxtLink>
    </nav>
  </header>
</template>
