<script setup lang="ts">
import type { ProjectEntry } from '~/utils/content'

const props = defineProps<{ project: ProjectEntry }>()
const emit = defineEmits<{ close: [] }>()

const trackEl = ref<HTMLElement | null>(null)
const galleryIndex = ref(0)

function onGalleryScroll() {
  const el = trackEl.value
  if (!el) return
  galleryIndex.value = Math.round(el.scrollLeft / el.clientWidth)
}

function scrollGalleryTo(i: number) {
  trackEl.value?.scrollTo({ left: trackEl.value.clientWidth * i, behavior: 'smooth' })
}

function scrollGallery(dir: 1 | -1) {
  const max = (props.project.gallery?.length ?? 1) - 1
  scrollGalleryTo(Math.min(max, Math.max(0, galleryIndex.value + dir)))
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') emit('close')
}

onMounted(() => {
  document.addEventListener('keydown', onKeydown)
  document.documentElement.style.overflow = 'hidden'
})
onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeydown)
  document.documentElement.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <div class="modal-backdrop" @click.self="emit('close')">
      <div class="modal-panel" role="dialog" aria-modal="true" :aria-label="project.heading">
        <button class="modal-close" type="button" aria-label="Close" @click="emit('close')">
          <Icon name="lucide:x" />
        </button>

        <div class="modal-scroll">
        <div v-if="project.gallery?.length" class="modal-gallery">
          <div ref="trackEl" class="modal-gallery__track" @scroll="onGalleryScroll">
            <img v-for="(src, i) in project.gallery" :key="src" :src="src" :alt="`${project.heading} ${i + 1}`" loading="lazy" />
          </div>

          <template v-if="project.gallery.length > 1">
            <button class="modal-gallery__nav modal-gallery__nav--prev" type="button" aria-label="Previous image" @click="scrollGallery(-1)">
              <Icon name="lucide:chevron-left" />
            </button>
            <button class="modal-gallery__nav modal-gallery__nav--next" type="button" aria-label="Next image" @click="scrollGallery(1)">
              <Icon name="lucide:chevron-right" />
            </button>
            <div class="modal-gallery__dots">
              <button
                v-for="(src, i) in project.gallery"
                :key="src"
                type="button"
                class="modal-gallery__dot"
                :class="{ active: i === galleryIndex }"
                :aria-label="`Go to image ${i + 1}`"
                @click="scrollGalleryTo(i)"
              />
            </div>
          </template>
        </div>

        <div class="modal-body">
          <span class="st">[ {{ project.status }} ]</span>
          <h3>{{ project.heading }}</h3>

          <div v-if="project.context?.length" class="modal-context">
            <p v-for="(para, i) in project.context" :key="i">{{ para }}</p>
          </div>
          <p v-else class="modal-context-fallback">{{ project.body }}</p>

          <div class="proj-arch">
            <div v-for="group in project.stackGroups" :key="group.label" class="card">
              <h3>{{ group.label }}</h3>
              <div class="tags">
                <span v-for="t in group.items" :key="t" class="tag">
                  <Icon class="ico" :name="skillIcon(t)" :style="{ color: skillColor(t) }" />{{ t }}
                </span>
              </div>
            </div>
          </div>

          <div v-if="project.features?.length" class="modal-features">
            <div class="panel__title">// {{ project.featuresHeading }}</div>
            <div class="features">
              <div v-for="(f, i) in project.features" :key="i" class="feat">
                <Icon class="ico" name="lucide:circle-check-big" />{{ f }}
              </div>
            </div>
          </div>

          <div class="proj-links">
            <a class="go-btn go-btn--dl proj-link" :href="project.repo" target="_blank" rel="noopener">
              <span class="go-btn__k">~$ git clone</span>
              <span class="go-btn__v">{{ project.repoLabel }}</span>
              <Icon class="go-btn__ico" name="lucide:external-link" />
            </a>
            <a v-if="project.live" class="go-btn go-btn--dl proj-link" :href="project.live" target="_blank" rel="noopener">
              <span class="go-btn__k">~$ open</span>
              <span class="go-btn__v">{{ project.liveLabel }}</span>
              <Icon class="go-btn__ico" name="lucide:external-link" />
            </a>
          </div>
        </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal-backdrop {
  position: fixed; inset: 0; z-index: 100;
  background: color-mix(in srgb, black 70%, transparent);
  backdrop-filter: blur(4px);
  display: flex; align-items: center; justify-content: center;
  padding: 24px;
}
.modal-panel {
  position: relative;
  width: min(720px, 100%);
  max-height: 88vh; overflow: hidden;
  border: 1px solid var(--line); border-radius: 12px;
  background: var(--surface-2);
  box-shadow: 0 24px 60px -20px rgba(0, 0, 0, 0.6);
}
.modal-scroll { max-height: 88vh; overflow-y: auto; }
.modal-close {
  position: absolute; top: 14px; right: 14px; z-index: 2;
  width: 32px; height: 32px; display: flex; align-items: center; justify-content: center;
  border: 1px solid var(--line); border-radius: 8px;
  background: color-mix(in srgb, var(--surface-2) 80%, transparent);
  color: var(--text-dim); cursor: pointer; transition: color .18s, border-color .18s;
}
.modal-close:hover { color: var(--accent); border-color: var(--accent-dim); }
.modal-gallery { position: relative; border-radius: 12px 12px 0 0; overflow: hidden; }
.modal-gallery__track {
  display: flex; overflow-x: auto; scroll-snap-type: x mandatory;
  scrollbar-width: none;
}
.modal-gallery__track::-webkit-scrollbar { display: none; }
.modal-gallery__track img {
  flex: 0 0 100%; scroll-snap-align: start;
  width: 100%; aspect-ratio: 16 / 9; object-fit: cover; object-position: top; display: block;
}
.modal-gallery__nav {
  position: absolute; top: 50%; transform: translateY(-50%);
  width: 32px; height: 32px; border-radius: 50%;
  border: 1px solid var(--line); background: color-mix(in srgb, black 55%, transparent);
  color: var(--white); display: flex; align-items: center; justify-content: center;
  cursor: pointer; transition: color .18s, border-color .18s;
}
.modal-gallery__nav--prev { left: 10px; }
.modal-gallery__nav--next { right: 10px; }
.modal-gallery__nav:hover { border-color: var(--accent-dim); color: var(--accent); }
.modal-gallery__dots { position: absolute; bottom: 10px; left: 50%; transform: translateX(-50%); display: flex; gap: 6px; }
.modal-gallery__dot { width: 7px; height: 7px; border-radius: 50%; border: none; padding: 0; cursor: pointer; background: color-mix(in srgb, white 40%, transparent); }
.modal-gallery__dot.active { background: var(--accent); }
.modal-body { padding: 26px; display: grid; gap: 14px; text-align: left; }
.modal-body h3 { margin: 0; font-family: var(--font-heading); color: var(--white); font-size: 1.3rem; }
.modal-body .st { color: var(--accent); font-size: 12.5px; }
.modal-context p, .modal-context-fallback { margin: 0 0 10px; color: var(--text-dim); font-size: 14px; font-family: var(--sans); line-height: 1.6; }
.modal-context p:last-child { margin-bottom: 0; }
.proj-arch {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
}
.proj-arch .tags { justify-content: flex-start; }
.proj-links { display: flex; gap: 12px; flex-wrap: wrap; }
</style>
