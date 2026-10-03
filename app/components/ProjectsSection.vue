<script setup lang="ts">
import type { ProjectEntry } from '~/utils/content'

const { c } = useLocale()
const openProject = ref<ProjectEntry | null>(null)

// floating image preview that trails the cursor — desktop-only, and only
// when motion is welcome; on touch/coarse pointers (and reduced-motion)
// this stays off entirely and a tap just opens the detail modal like normal.
const canPreview = ref(false)
const previewProject = ref<ProjectEntry | null>(null)
const previewIndex = ref(0)
const previewX = ref(0)
const previewY = ref(0)
let raf = 0

function onGridMove(e: MouseEvent) {
  const tx = e.clientX
  const ty = e.clientY
  if (!raf) raf = requestAnimationFrame(() => { previewX.value = tx; previewY.value = ty; raf = 0 })
}
function onCardEnter(p: ProjectEntry, i: number) {
  if (!canPreview.value) return
  previewProject.value = p
  previewIndex.value = i
}
function onCardLeave() {
  previewProject.value = null
}

onMounted(() => {
  canPreview.value = window.matchMedia('(pointer: fine)').matches
    && !window.matchMedia('(prefers-reduced-motion: reduce)').matches
})
onBeforeUnmount(() => { if (raf) cancelAnimationFrame(raf) })

function stackFlat(p: ProjectEntry) {
  return p.stackGroups.flatMap((g) => g.items)
}
</script>

<template>
  <section id="projects">
    <SectionHead n="05" :title="c.projects.title" status="STATE: ACTIVE_DEV" />

    <div class="proj-grid" @mousemove="onGridMove">
      <article
        v-for="(p, i) in c.projects.items"
        :key="p.repo"
        class="proj-card reveal"
        :style="{ '--reveal-delay': `${i * 80}ms` }"
        @mouseenter="onCardEnter(p, i)"
        @mouseleave="onCardLeave"
      >
        <div class="proj-card__top">
          <span class="proj-card__n">{{ String(i + 1).padStart(2, '0') }}</span>
          <span class="proj-card__status">{{ p.status }}</span>
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

        <h3>{{ p.heading }}</h3>
        <p class="proj-card__body">{{ p.body }}</p>
        <div class="proj-card__stack">{{ stackFlat(p).join(' · ') }}</div>

        <div class="proj-card__links">
          <a class="cmd-link cmd-link--dl" :href="p.repo" target="_blank" rel="noopener" @click.stop>
            <span class="cmd-link__k">~$ git clone</span>
            <span class="cmd-link__v">{{ p.repoLabel }}</span>
            <Icon class="cmd-link__ico" name="lucide:external-link" />
          </a>
          <a v-if="p.live" class="cmd-link cmd-link--dl" :href="p.live" target="_blank" rel="noopener" @click.stop>
            <span class="cmd-link__k">~$ open</span>
            <span class="cmd-link__v">{{ p.liveLabel }}</span>
            <Icon class="cmd-link__ico" name="lucide:external-link" />
          </a>
        </div>
      </article>
    </div>

    <Teleport to="body">
      <div
        v-if="canPreview && previewProject"
        class="proj-preview"
        :style="{ transform: `translate3d(${previewX + 22}px, ${previewY - 60}px, 0)` }"
        aria-hidden="true"
      >
        <img v-if="previewProject.image" :src="previewProject.image" :alt="''">
        <div v-else class="proj-preview__empty">{{ String(previewIndex + 1).padStart(2, '0') }}</div>
        <span class="proj-preview__scan" />
      </div>
    </Teleport>

    <ProjectDetailModal v-if="openProject" :key="openProject.repo" :project="openProject" @close="openProject = null" />
  </section>
</template>

<style scoped>
.proj-grid { display: grid; grid-template-columns: 1fr; gap: 24px; }
@media (min-width: 900px) { .proj-grid { grid-template-columns: 1fr 1fr; gap: 28px; } }

.proj-card {
  position: relative;
  border: 1px solid var(--line); border-radius: 0;
  padding: 22px 22px 26px;
  background: color-mix(in srgb, var(--surface-2) 55%, transparent);
  transition: border-color .2s ease;
}
.proj-card:hover { border-color: var(--accent-dim); box-shadow: var(--bevel), var(--shadow-md); }
.proj-card::before {
  content: ""; position: absolute; top: -1px; left: 18px; right: 18px; height: 2px;
  background: var(--accent); opacity: 0; transition: opacity .2s ease;
}
.proj-card:hover::before { opacity: 1; }

.proj-card__top { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; margin-bottom: 14px; }
.proj-card__n { font-family: var(--mono); font-size: 13px; color: var(--text-mute); }
.proj-card__status { font-family: var(--mono); font-size: 10px; letter-spacing: 1px; text-transform: uppercase; color: var(--accent); text-align: right; }

.proj-media { position: relative; display: block; cursor: pointer; border-radius: 0; overflow: hidden; border: 1px solid var(--line); margin-bottom: 18px; }
.proj-thumb { display: block; width: 100%; aspect-ratio: 16 / 9; object-fit: cover; object-position: top; transition: transform .5s cubic-bezier(.2, .7, .3, 1); }
.proj-thumb--empty { background: var(--surface); display: grid; place-items: center; }
.proj-thumb--empty span { font-family: var(--mono); font-size: 2.4rem; font-weight: 700; color: var(--line); }
.proj-media:hover .proj-thumb { transform: scale(1.03); }
.proj-media__view {
  position: absolute; right: 12px; bottom: 12px;
  display: inline-flex; align-items: center; gap: 6px;
  background: color-mix(in srgb, var(--bg) 78%, transparent); backdrop-filter: blur(6px);
  border: 1px solid var(--line); border-radius: 999px; padding: 7px 12px;
  font-family: var(--sans); font-size: 12px; font-weight: 600; color: var(--text);
  opacity: 0; transform: translateY(6px);
  transition: opacity .25s ease, transform .25s ease, border-color .25s ease, color .25s ease;
}
.proj-media:hover .proj-media__view,
.proj-media:focus-visible .proj-media__view { opacity: 1; transform: translateY(0); border-color: var(--accent-dim); color: var(--accent); }

.proj-card h3 { margin: 0 0 8px; font-family: var(--sans); font-weight: 700; font-size: 1.4rem; color: var(--white); letter-spacing: -.01em; }
.proj-card__body { margin: 0 0 14px; color: var(--text-dim); font-size: 14px; line-height: 1.6; text-align: justify; }
.proj-card__stack { margin: 0 0 18px; font-family: var(--mono); font-size: 12px; color: var(--text-mute); }

.proj-card__links { display: flex; flex-wrap: wrap; gap: 18px; }

/* cursor-trailing preview — desktop pointer:fine only (see canPreview) */
.proj-preview {
  position: fixed; top: 0; left: 0; z-index: 60; pointer-events: none;
  width: 220px; aspect-ratio: 16 / 10; overflow: hidden;
  border: 1px solid var(--line); border-radius: 0;
  background: var(--surface-2);
  box-shadow: var(--shadow-lg);
  opacity: 0; animation: proj-preview-in .18s ease forwards;
}
@keyframes proj-preview-in { to { opacity: 1; } }
.proj-preview img { width: 100%; height: 100%; object-fit: cover; object-position: top; display: block; }
.proj-preview__empty {
  width: 100%; height: 100%; display: grid; place-items: center;
  font-family: var(--mono); font-size: 2.4rem; font-weight: 700; color: var(--line);
}
.proj-preview__scan {
  position: absolute; left: 0; right: 0; height: 40%;
  background: linear-gradient(to bottom, transparent, color-mix(in srgb, var(--accent) 18%, transparent), transparent);
  animation: proj-preview-scan 2.2s ease-in-out infinite;
}
@keyframes proj-preview-scan {
  0%   { top: -40%; }
  100% { top: 100%; }
}

@media (prefers-reduced-motion: reduce) {
  .proj-preview { animation: none; opacity: 1; }
  .proj-preview__scan { display: none; }
}
</style>
