<script setup lang="ts">
const { c } = useLocale()

const totalTags = computed(() => c.value.stack.groups.reduce((sum, g) => sum + g.tags.length, 0))
const learningLabels = computed(() =>
  c.value.stack.groups.flatMap((g) => g.tags.filter((t) => t.learn).map((t) => t.label)),
)
</script>

<template>
  <section id="stack" data-accent="blue">
    <SectionHead n="02" :title="c.stack.title" status="MODULES: LOADED" />
    <p class="cmd"><span class="c">~$</span> {{ c.stack.cmd }}</p>

    <div class="stats">
      <div class="stat"><b>{{ totalTags }}</b><span>{{ c.stack.stats.total }}</span></div>
      <div class="stat"><b>{{ c.stack.groups.length }}</b><span>{{ c.stack.stats.categories }}</span></div>
      <div class="stat stat--learning"><b>{{ learningLabels.join(' · ') }}</b><span>{{ c.stack.stats.learning }}</span></div>
    </div>

    <div class="skills">
      <div v-for="group in c.stack.groups" :key="group.title" class="card">
        <h3>{{ group.title }}</h3>
        <div class="tags">
          <span
            v-for="tag in group.tags"
            :key="tag.label"
            class="tag"
            :class="{ learn: tag.learn }"
          >
            <Icon class="ico" :name="skillIcon(tag.label)" :style="{ color: skillColor(tag.label) }" />
            {{ tag.label }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
