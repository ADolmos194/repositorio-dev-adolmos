<script setup lang="ts">
const { c } = useLocale()

const years = computed(() => new Date().getFullYear() - 2019)
const roles = computed(() => c.value.experience.jobs.length)
const companies = computed(
  () => new Set(c.value.experience.jobs.map((j) => j.company)).size,
)
</script>

<template>
  <section id="experience" data-accent="green">
    <SectionHead n="04" :title="c.experience.title" status="LOG: VERIFIED" />

    <div class="stats">
      <div class="stat"><b>{{ years }}+</b><span>{{ c.experience.stats.years }}</span></div>
      <div class="stat"><b>{{ roles }}</b><span>{{ c.experience.stats.roles }}</span></div>
      <div class="stat"><b>{{ companies }}</b><span>{{ c.experience.stats.companies }}</span></div>
    </div>

    <div class="timeline">
      <article
        v-for="(job, i) in c.experience.jobs"
        :key="i"
        class="tl-item reveal"
        :class="{ now: job.now }"
        :style="{ '--reveal-delay': `${i * 100}ms` }"
      >
        <div class="tl-rail" aria-hidden="true"><span class="tl-node" /></div>

        <div class="tl-content">
          <div class="tl-top">
            <span class="tl-date">{{ job.when }}</span>
            <span v-if="job.now" class="tl-live">● {{ c.experience.live }}</span>
          </div>
          <h3 class="tl-role">{{ job.role }}</h3>
          <div class="tl-co">{{ job.company }}</div>
          <ul class="tl-bullets">
            <li v-for="(b, bi) in job.bullets" :key="bi">{{ b }}</li>
          </ul>
        </div>
      </article>
    </div>
  </section>
</template>
