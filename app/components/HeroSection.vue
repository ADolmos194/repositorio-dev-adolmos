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

/* role, location and stack are already stated in the eyebrow and the
   stack strip below — this panel only adds facts not shown elsewhere
   in the hero, so nothing repeats within the same view. */
const facts = computed(() => [
  { icon: 'lucide:graduation-cap', value: c.value.facts.education },
  { icon: 'lucide:briefcase', value: c.value.facts.experience },
  { icon: 'lucide:languages', value: c.value.facts.languages },
])
</script>

<template>
  <header id="home" class="hero" data-accent="green">
    <div class="home">
      <div>
        <div class="eyebrow"><span class="eyebrow__dot" />{{ c.hero.roleLead }} Full Stack &mdash; {{ c.facts.location }}</div>

        <h1>Aylton Martinez</h1>

        <div class="hero__type">{{ typed }}<span class="cursor"></span>
        </div>

        <div class="cta-row">
          <a href="/AyltonMesiasMartinez_CV.pdf" class="go-btn go-btn--dl go-btn--primary" download="cv-aylton-martinez.pdf">
            <span class="go-btn__k">~$ wget</span>
            <span class="go-btn__v">{{ c.about.downloadCv }}</span>
            <Icon class="go-btn__ico" name="lucide:download" />
          </a>
          <a href="#experience" class="go-btn">
            <span class="go-btn__k">~$ cd</span>
            <span class="go-btn__v">./{{ c.nav.experience }}</span>
            <Icon class="go-btn__ico" name="lucide:arrow-left" />
          </a>
          <a href="#contact" class="go-btn">
            <span class="go-btn__k">~$ cd</span>
            <span class="go-btn__v">./{{ c.nav.contact }}</span>
            <Icon class="go-btn__ico" name="lucide:arrow-left" />
          </a>
        </div>
        <p class="cta-hint">{{ c.hero.ctaHint }}</p>

        <div class="hero-stack">
          <span v-for="tech in heroStack" :key="tech" class="hero-stack__item">
            <Icon class="ico" :name="skillIcon(tech)" :style="{ color: skillColor(tech) }" />{{ tech }}
          </span>
        </div>
      </div>

      <aside class="telemetry">
        <div class="panel reveal">
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
