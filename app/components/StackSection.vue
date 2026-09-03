<script setup lang="ts">
const { c } = useLocale()

const totalTags = computed(() => c.value.stack.groups.reduce((sum, g) => sum + g.tags.length, 0))
const learningLabels = computed(() =>
  c.value.stack.groups.flatMap((g) => g.tags.filter((t) => t.learn).map((t) => t.label)),
)

/* deduped icon list for the marquee strip — same skill can appear once per
   locale-agnostic group data, so dedupe by label to avoid repeats */
const marqueeSkills = computed(() => {
  const seen = new Set<string>()
  const list: { label: string; icon: string; color: string }[] = []
  for (const group of c.value.stack.groups) {
    for (const tag of group.tags) {
      if (seen.has(tag.label)) continue
      seen.add(tag.label)
      list.push({ label: tag.label, icon: skillIcon(tag.label), color: skillColor(tag.label) })
    }
  }
  return list
})
</script>

<template>
  <section id="stack" data-accent="blue">
    <SectionHead n="03" :title="c.stack.title" status="MODULES: LOADED" />

    <div class="stats">
      <div class="stat"><b>{{ totalTags }}</b><span>{{ c.stack.stats.total }}</span></div>
      <div class="stat"><b>{{ c.stack.groups.length }}</b><span>{{ c.stack.stats.categories }}</span></div>
      <div class="stat stat--learning"><b>{{ learningLabels.join(' · ') }}</b><span>{{ c.stack.stats.learning }}</span></div>
    </div>

    <div class="stack-marquee" aria-hidden="true">
      <div class="stack-marquee__track">
        <span v-for="(s, i) in [...marqueeSkills, ...marqueeSkills]" :key="i" class="stack-marquee__item">
          <Icon :name="s.icon" :style="{ color: s.color }" />
        </span>
      </div>
    </div>

    <div class="skills">
      <div
        v-for="(group, i) in c.stack.groups"
        :key="group.title"
        class="card reveal"
        :style="{ '--reveal-delay': `${i * 70}ms` }"
      >
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
