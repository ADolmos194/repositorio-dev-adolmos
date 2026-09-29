<script setup lang="ts">
import type { ProjectEntry } from '~/utils/content'

const { c } = useLocale()
const openProject = ref<ProjectEntry | null>(null)
</script>

<template>
  <section id="projects" data-accent="green">
    <SectionHead n="05" :title="c.projects.title" status="STATE: ACTIVE_DEV" />

    <div class="proj-list">
      <article
        v-for="(p, i) in c.projects.items"
        :key="p.repo"
        class="proj-block reveal"
        :style="{ '--reveal-delay': `${i * 90}ms` }"
      >
        <div class="proj-block__top">
          <span class="proj-block__n">{{ String(i + 1).padStart(2, '0') }}</span>
          <div>
            <span class="st">{{ p.status }}</span>
            <h3>{{ p.heading }}</h3>
          </div>
        </div>

        <div
          class="proj-media"
          role="button"
          tabindex="0"
          @click="openProject = p"
          @keydown.enter="openProject = p"
          @keydown.space.prevent="openProject = p"
        >
          <img v-if="p.image" :src="p.image" :alt="p.heading" class="proj-thumb" loading="lazy" />
          <div v-else class="proj-thumb proj-thumb--empty">
            <span>{{ String(i + 1).padStart(2, '0') }}</span>
          </div>
          <span class="proj-media__view">{{ c.projects.viewDetailLabel }} <Icon name="lucide:arrow-up-right" /></span>
        </div>

        <p class="proj-body">{{ p.body }}</p>

        <div class="proj-meta">
          <div v-for="group in p.stackGroups" :key="group.label" class="stack-group">
            <h3 class="stack-group__h">{{ group.label }}</h3>
            <div class="tags">
              <span v-for="t in group.items" :key="t" class="tag">
                <Icon class="ico" :name="skillIcon(t)" :style="{ color: skillColor(t) }" />{{ t }}
              </span>
            </div>
          </div>
        </div>

        <div class="proj-links">
          <a class="link-arrow link-arrow--dl" :href="p.repo" target="_blank" rel="noopener" @click.stop>
            <span>{{ p.repoLabel }}</span>
            <Icon class="link-arrow__ico" name="lucide:arrow-up-right" />
          </a>
          <a v-if="p.live" class="link-arrow link-arrow--dl" :href="p.live" target="_blank" rel="noopener" @click.stop>
            <span>{{ p.liveLabel }}</span>
            <Icon class="link-arrow__ico" name="lucide:arrow-up-right" />
          </a>
        </div>
      </article>
    </div>

    <ProjectDetailModal v-if="openProject" :key="openProject.repo" :project="openProject" @close="openProject = null" />
  </section>
</template>

<style scoped>
.proj-list { display: flex; flex-direction: column; }
.proj-block { padding: 56px 0; border-top: 1px solid var(--line-soft); }
.proj-block:first-child { border-top: none; padding-top: 0; }

.proj-block__top { display: flex; align-items: baseline; gap: 20px; margin-bottom: 28px; }
.proj-block__n { font-family: var(--mono); font-size: 14px; color: var(--text-mute); }
.st { display: block; font-family: var(--mono); font-size: 11px; letter-spacing: 1px; text-transform: uppercase; color: var(--accent); margin-bottom: 6px; }
.proj-block__top h3 {
  margin: 0; font-family: var(--sans); font-weight: 800; font-size: var(--fs-h2);
  letter-spacing: -0.02em; line-height: 1.03; color: var(--white);
}

.proj-media { position: relative; display: block; cursor: pointer; border-radius: 8px; overflow: hidden; border: 1px solid var(--line); margin: 0 0 28px; }
.proj-thumb { display: block; width: 100%; aspect-ratio: 16 / 9; object-fit: cover; object-position: top; transition: transform .5s cubic-bezier(.2, .7, .3, 1); }
.proj-thumb--empty { background: var(--surface-2); display: grid; place-items: center; }
.proj-thumb--empty span { font-family: var(--mono); font-size: clamp(3rem, 8vw, 6rem); font-weight: 700; color: var(--line); letter-spacing: -0.02em; }
.proj-media:hover .proj-thumb { transform: scale(1.03); }
.proj-media__view {
  position: absolute; right: 16px; bottom: 16px;
  display: inline-flex; align-items: center; gap: 6px;
  background: color-mix(in srgb, var(--bg) 78%, transparent); backdrop-filter: blur(6px);
  border: 1px solid var(--line); border-radius: 999px; padding: 8px 14px;
  font-family: var(--sans); font-size: 13px; font-weight: 600; color: var(--text);
  opacity: 0; transform: translateY(6px);
  transition: opacity .25s ease, transform .25s ease, border-color .25s ease, color .25s ease;
}
.proj-media:hover .proj-media__view,
.proj-media:focus-visible .proj-media__view { opacity: 1; transform: translateY(0); border-color: var(--accent-dim); color: var(--accent); }

.proj-body { margin: 0 0 28px; color: var(--text-dim); font-family: var(--sans); font-size: 15.5px; line-height: 1.65; max-width: 68ch; }
.proj-meta { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px 32px; margin-bottom: 28px; }
.proj-links { display: flex; gap: 24px; flex-wrap: wrap; }
</style>
