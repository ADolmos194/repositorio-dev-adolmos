<script setup lang="ts">
const { c } = useLocale()
</script>

<template>
  <section id="projects" data-accent="blue">
    <SectionHead n="04" :title="c.projects.title" status="STATE: BUILDING" />
    <p class="cmd"><span class="c">~$</span> {{ c.projects.cmd }}</p>

    <div class="soon">
      <span class="blip" />
      <span class="st">[ {{ c.projects.status }} ]</span>
      <h3>{{ c.projects.heading }}</h3>
      <p>{{ c.projects.body }}</p>
    </div>

    <div class="proj-plan">
      <div class="panel__title">// {{ c.projects.plannedHeading }}</div>
      <div class="features">
        <div v-for="f in c.projects.features" :key="f" class="feat">
          <Icon class="ico" name="lucide:check-circle-2" />{{ f }}
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.proj-plan { margin-top: 22px; }
</style>
