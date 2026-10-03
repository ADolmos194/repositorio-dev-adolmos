<script setup lang="ts">
const { c } = useLocale()

const typed = ref('')
let timer: ReturnType<typeof setTimeout> | null = null

function runTypewriter(text: string) {
  if (timer) clearTimeout(timer)
  const reduce = import.meta.client && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduce) {
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

/* role and location are already stated in the eyebrow — this panel only
   adds facts not shown elsewhere in the hero, so nothing repeats within
   the same view. */
const facts = computed(() => [
  { icon: 'lucide:graduation-cap', label: c.value.facts.educationLabel, value: c.value.facts.education },
  { icon: 'lucide:briefcase', label: c.value.facts.experienceLabel, value: c.value.facts.experience },
  { icon: 'lucide:languages', label: c.value.facts.languagesLabel, value: c.value.facts.languages },
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
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduce) return
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header id="home" class="hero">
    <div class="hero-grid">
      <div class="hero-main">
        <div class="eyebrow"><span class="eyebrow__dot" />{{ c.hero.roleLead }} Full Stack &mdash; {{ c.facts.location }}</div>

        <h1 class="hero-name">Aylton Martinez</h1>

        <p class="hero-type">{{ typed }}<span class="cursor"></span></p>

        <div class="hero-cta">
          <a href="/AyltonMesiasMartinez_CV.pdf" class="cmd-link cmd-link--primary" download="cv-aylton-martinez.pdf">
            <span class="cmd-link__k">~$ wget</span>
            <span class="cmd-link__v">{{ c.about.downloadCv }}</span>
            <Icon class="cmd-link__ico" name="lucide:download" />
          </a>
          <a href="#experience" class="cmd-link cmd-link--back">
            <span class="cmd-link__k">~$ cd</span>
            <span class="cmd-link__v">./{{ c.nav.experience }}</span>
            <Icon class="cmd-link__ico" name="lucide:arrow-left" />
          </a>
          <a href="#contact" class="cmd-link cmd-link--back">
            <span class="cmd-link__k">~$ cd</span>
            <span class="cmd-link__v">./{{ c.nav.contact }}</span>
            <Icon class="cmd-link__ico" name="lucide:arrow-left" />
          </a>
        </div>
        <p class="hero-hint">{{ c.hero.ctaHint }}</p>

        <div class="hero-stack">
          <span v-for="tech in heroStack" :key="tech" class="hero-stack__item">
            <Icon class="ico" :name="skillIcon(tech)" :style="{ color: skillColor(tech) }" />{{ tech }}
          </span>
        </div>
      </div>

      <aside class="hero-side" :style="heroSideStyle">
        <div class="panel hero-panel reveal">
          <div class="panel__title">// {{ c.facts.heading }}</div>
          <div class="fact-list">
            <div v-for="f in facts" :key="f.icon" class="fact">
              <span class="fact__ico"><Icon :name="f.icon" /></span>
              <span class="fact__body">
                <span class="fact__label">{{ f.label }}</span>
                <span class="v">{{ f.value }}</span>
              </span>
            </div>
          </div>
          <span class="badge"><Icon class="badge__pulse" name="lucide:zap" />{{ c.facts.availability }}</span>
        </div>
      </aside>
    </div>
  </header>
</template>
