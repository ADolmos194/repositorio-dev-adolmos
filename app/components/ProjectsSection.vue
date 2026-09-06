<script setup lang="ts">
import type { ProjectEntry } from '~/utils/content'

const { c } = useLocale()
const openProject = ref<ProjectEntry | null>(null)
</script>

<template>
  <section id="projects" data-accent="blue">
    <SectionHead n="05" :title="c.projects.title" status="STATE: ACTIVE_DEV" />

    <div class="proj-grid">
    <div v-for="p in c.projects.items" :key="p.repo" class="proj-block">
      <div
        class="soon reveal soon--clickable"
        role="button"
        tabindex="0"
        @click="openProject = p"
        @keydown.enter="openProject = p"
        @keydown.space.prevent="openProject = p"
      >
        <img v-if="p.image" :src="p.image" :alt="p.heading" class="proj-thumb" loading="lazy" />
        <span class="blip" />
        <span class="st">[ {{ p.status }} ]</span>
        <h3>{{ p.heading }}</h3>
        <p>{{ p.body }}</p>

        <div class="proj-arch">
          <div v-for="group in p.stackGroups" :key="group.label" class="card">
            <h3>{{ group.label }}</h3>
            <div class="tags">
              <span v-for="t in group.items" :key="t" class="tag">
                <Icon class="ico" :name="skillIcon(t)" :style="{ color: skillColor(t) }" />{{ t }}
              </span>
            </div>
          </div>
        </div>

        <div class="proj-links" @click.stop>
          <a class="go-btn go-btn--dl proj-link" :href="p.repo" target="_blank" rel="noopener">
            <span class="go-btn__k">~$ git clone</span>
            <span class="go-btn__v">{{ p.repoLabel }}</span>
            <Icon class="go-btn__ico" name="lucide:external-link" />
          </a>
          <a v-if="p.live" class="go-btn go-btn--dl proj-link" :href="p.live" target="_blank" rel="noopener">
            <span class="go-btn__k">~$ open</span>
            <span class="go-btn__v">{{ p.liveLabel }}</span>
            <Icon class="go-btn__ico" name="lucide:external-link" />
          </a>
        </div>

        <button type="button" class="proj-detail-btn" @click.stop="openProject = p">
          {{ c.projects.viewDetailLabel }}
          <Icon name="lucide:arrow-up-right" />
        </button>
      </div>
    </div>
    </div>

    <ProjectDetailModal v-if="openProject" :key="openProject.repo" :project="openProject" @close="openProject = null" />
  </section>
</template>

<style scoped>
.proj-grid { display: grid; grid-template-columns: 1fr; gap: 30px; align-items: start; }
@media (min-width: 900px) {
  .proj-grid { grid-template-columns: 1fr 1fr; gap: 24px; }
}
.proj-thumb {
  width: 100%; aspect-ratio: 16 / 9; object-fit: cover; object-position: top;
  border-radius: 8px; border: 1px solid var(--line);
}
.proj-arch {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 12px; margin: 18px 0 4px; text-align: left;
}
.proj-arch .tags { justify-content: flex-start; }
.proj-links { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-top: 16px; }
.proj-link { justify-content: center; }
.soon--clickable { cursor: pointer; transition: border-color .18s; }
.soon--clickable:hover, .soon--clickable:focus-visible { border-color: var(--accent-dim); }
.proj-detail-btn {
  justify-self: center; margin-top: 6px;
  display: inline-flex; align-items: center; gap: 5px;
  background: none; border: none; cursor: pointer; padding: 0;
  color: var(--accent); font-size: 12px; font-weight: 600; letter-spacing: .5px;
  text-transform: uppercase; font-family: var(--sans);
}
.proj-detail-btn:hover { text-decoration: underline; }
</style>
