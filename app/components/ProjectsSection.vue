<script setup lang="ts">
const { c } = useLocale()

/* split the flat tech list into the two layers this project actually has —
   makes the "full-stack, one dev" claim visible instead of just stated */
const FRONTEND_TECH = new Set(['React', 'AG Grid', 'Tailwind', 'Vite'])
const BACKEND_TECH = new Set(['Django', 'Django REST', 'PostgreSQL'])

const archLayers = computed(() => [
  { label: 'Frontend', items: c.value.projects.stack.filter((t) => FRONTEND_TECH.has(t)) },
  { label: 'Backend', items: c.value.projects.stack.filter((t) => BACKEND_TECH.has(t)) },
])
</script>

<template>
  <section id="projects" data-accent="blue">
    <SectionHead n="05" :title="c.projects.title" status="STATE: ACTIVE_DEV" />

    <div class="soon reveal">
      <span class="blip" />
      <span class="st">[ {{ c.projects.status }} ]</span>
      <h3>{{ c.projects.heading }}</h3>
      <p>{{ c.projects.body }}</p>

      <div class="proj-arch">
        <div v-for="layer in archLayers" :key="layer.label" class="card">
          <h3>{{ layer.label }}</h3>
          <div class="tags">
            <span v-for="t in layer.items" :key="t" class="tag">
              <Icon class="ico" :name="skillIcon(t)" :style="{ color: skillColor(t) }" />{{ t }}
            </span>
          </div>
        </div>
      </div>

      <a class="go-btn go-btn--dl proj-link" :href="c.projects.repo" target="_blank" rel="noopener">
        <span class="go-btn__k">~$ git clone</span>
        <span class="go-btn__v">{{ c.projects.repoLabel }}</span>
        <Icon class="go-btn__ico" name="lucide:external-link" />
      </a>
    </div>

    <div class="proj-plan reveal">
      <div class="panel__title">// {{ c.projects.featuresHeading }}</div>
      <div class="features">
        <div
          v-for="(f, i) in c.projects.features"
          :key="i"
          class="feat reveal"
          :style="{ '--reveal-delay': `${i * 70}ms` }"
        >
          <Icon class="ico" name="lucide:circle-check-big" />{{ f }}
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.proj-plan { margin-top: 22px; }
.proj-arch {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 12px; margin: 18px 0 4px; text-align: left;
}
.proj-arch .tags { justify-content: flex-start; }
.proj-link { justify-content: center; margin-top: 16px; }
</style>
