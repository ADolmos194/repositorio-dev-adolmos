<script setup lang="ts">
const { c } = useLocale()
</script>

<template>
  <section id="projects" data-accent="blue">
    <SectionHead n="05" :title="c.projects.title" status="STATE: ACTIVE_DEV" />

    <div class="soon">
      <span class="blip" />
      <span class="st">[ {{ c.projects.status }} ]</span>
      <h3>{{ c.projects.heading }}</h3>
      <p>{{ c.projects.body }}</p>

      <div class="proj-stack">
        <span v-for="t in c.projects.stack" :key="t" class="tag">
          <Icon class="ico" :name="skillIcon(t)" :style="{ color: skillColor(t) }" />{{ t }}
        </span>
      </div>

      <a class="go-btn go-btn--dl proj-link" :href="c.projects.repo" target="_blank" rel="noopener">
        <span class="go-btn__k">~$ git clone</span>
        <span class="go-btn__v">{{ c.projects.repoLabel }}</span>
        <Icon class="go-btn__ico" name="lucide:external-link" />
      </a>
    </div>

    <div class="proj-plan">
      <div class="panel__title">// {{ c.projects.featuresHeading }}</div>
      <div class="features">
        <div v-for="f in c.projects.features" :key="f" class="feat">
          <Icon class="ico" name="lucide:circle-check-big" />{{ f }}
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.proj-plan { margin-top: 22px; }
.proj-stack { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; margin: 14px 0 4px; }
.proj-link { justify-content: center; margin-top: 16px; }
</style>
