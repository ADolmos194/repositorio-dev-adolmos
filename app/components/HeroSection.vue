<script setup lang="ts">
const { c } = useLocale()

const typed = ref('')
let timer: ReturnType<typeof setTimeout> | null = null
const reducedMotion = import.meta.client && window.matchMedia('(prefers-reduced-motion: reduce)').matches

function runTypewriter(text: string) {
  if (timer) clearTimeout(timer)
  if (reducedMotion) {
    typed.value = text
    return
  }
  let i = 0
  const tick = () => {
    typed.value = text.slice(0, i)
    if (i <= text.length) {
      i++
      timer = setTimeout(tick, 34)
    }
  }
  tick()
}

onMounted(() => runTypewriter(c.value.hero.typed))
watch(() => c.value.hero.typed, (t) => runTypewriter(t))
onBeforeUnmount(() => {
  if (timer) clearTimeout(timer)
})

const heroStack = ['Vue 3', 'Nuxt', 'Django', 'Flutter']

/* role, location and stack are already stated in the eyebrow and the
   index list below — this panel only adds facts not shown elsewhere
   in the hero, so nothing repeats within the same view. */
const facts = computed(() => [
  { icon: 'lucide:graduation-cap', value: c.value.facts.education },
  { icon: 'lucide:briefcase', value: c.value.facts.experience },
  { icon: 'lucide:languages', value: c.value.facts.languages },
])

/* side panel eases back slightly as you start reading — a light "cover →
   content" cue, not a parallax gimmick. Skipped entirely under reduced
   motion so the panel just sits still. */
const heroSideStyle = ref<Record<string, string>>({})
function onScroll() {
  const t = Math.min(window.scrollY, 320) / 320
  heroSideStyle.value = {
    opacity: String(1 - t * 0.45),
    transform: `translateY(${(t * 16).toFixed(1)}px)`,
  }
}
onMounted(() => {
  if (reducedMotion) return
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header id="home" class="hero" data-accent="green">
    <div class="hero-grid">
      <div class="hero-main">
        <div class="eyebrow"><span class="eyebrow__dot" />{{ c.hero.roleLead }} Full Stack &mdash; {{ c.facts.location }}</div>

        <h1 class="hero-name">Aylton Martinez</h1>

        <p class="hero-type">{{ typed }}<span class="cursor"></span></p>

        <div class="hero-cta">
          <a href="/AyltonMesiasMartinez_CV.pdf" class="link-arrow link-arrow--primary link-arrow--dl" download="cv-aylton-martinez.pdf">
            <span>{{ c.about.downloadCv }}</span>
            <Icon class="link-arrow__ico" name="lucide:arrow-down" />
          </a>
          <a href="#experience" class="link-arrow">
            <span>{{ c.nav.experience }}</span>
            <Icon class="link-arrow__ico" name="lucide:arrow-up-right" />
          </a>
          <a href="#contact" class="link-arrow">
            <span>{{ c.nav.contact }}</span>
            <Icon class="link-arrow__ico" name="lucide:arrow-up-right" />
          </a>
        </div>
        <p class="hero-hint">{{ c.hero.ctaHint }}</p>
      </div>

      <aside class="hero-side" :style="heroSideStyle">
        <ol class="hero-index">
          <li v-for="(tech, i) in heroStack" :key="tech">
            <span class="hero-index__n">{{ String(i + 1).padStart(2, '0') }}</span>
            <Icon class="hero-index__ico" :name="skillIcon(tech)" :style="{ color: skillColor(tech) }" />
            <span class="hero-index__v">{{ tech }}</span>
          </li>
        </ol>

        <div class="panel hero-panel reveal">
          <div class="panel__title">{{ c.facts.heading }}</div>
          <div class="fact-list">
            <div v-for="f in facts" :key="f.icon" class="fact">
              <Icon class="ico" :name="f.icon" /><span class="v">{{ f.value }}</span>
            </div>
          </div>
          <span class="badge"><span class="dot" />{{ c.facts.availability }}</span>
        </div>
      </aside>
    </div>
  </header>
</template>
