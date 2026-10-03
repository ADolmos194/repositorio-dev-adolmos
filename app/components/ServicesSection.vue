<script setup lang="ts">
const { c } = useLocale()
</script>

<template>
  <section id="services">
    <SectionHead n="02" :title="c.services.title" status="SERVICES: ONLINE" />
    <p class="intro">{{ c.services.intro }}</p>

    <div class="svc-grid">
      <div
        v-for="(item, i) in c.services.items"
        :key="i"
        class="svc-card reveal"
        :style="{ '--reveal-delay': `${i * 70}ms` }"
      >
        <div class="svc-card__head">
          <Icon class="svc-card__ico" :name="item.icon" />
          <h3>{{ item.title }}</h3>
        </div>
        <p class="svc-card__body">{{ item.body }}</p>
        <div class="tags">
          <span v-for="t in item.tags" :key="t" class="tag">{{ t }}</span>
        </div>
      </div>
    </div>

    <div class="svc-cta-wrap">
      <a href="#contact" class="cmd-link cmd-link--back svc-cta">
        <span class="cmd-link__k">~$ cd</span>
        <span class="cmd-link__v">{{ c.services.ctaLabel }}</span>
        <Icon class="cmd-link__ico" name="lucide:arrow-left" />
      </a>
      <p class="svc-cta-hint">{{ c.services.ctaHint }}</p>
    </div>
  </section>
</template>

<style scoped>
.intro { margin: -8px 0 32px; color: var(--text-dim); font-size: 16px; max-width: 62ch; font-family: var(--sans); text-align: justify; }

.svc-grid { display: grid; grid-template-columns: 1fr; gap: 18px; }
@media (min-width: 640px)  { .svc-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1180px) { .svc-grid { grid-template-columns: repeat(4, 1fr); } }

.svc-card {
  border: 1px solid var(--line); border-radius: 0;
  padding: 20px 20px 22px;
  background: color-mix(in srgb, var(--surface-2) 55%, transparent);
  display: flex; flex-direction: column; gap: 10px;
  transition: border-color .2s ease;
}
.svc-card:hover { border-color: var(--accent-dim); box-shadow: var(--bevel), var(--shadow-md); }
.svc-card__head { display: flex; align-items: center; gap: 10px; min-height: 34px; }
.svc-card__ico { font-size: 20px; color: var(--accent); flex: none; }
.svc-card h3 {
  margin: 0; font-family: var(--mono); font-size: 12px; line-height: 1.4;
  letter-spacing: 1.5px; text-transform: uppercase; color: var(--accent); font-weight: 600;
}
.svc-card__body { margin: 0; font-size: 13.5px; line-height: 1.55; color: var(--text-dim); font-family: var(--sans); flex: 1; text-align: justify; }

.svc-cta-wrap { display: flex; flex-direction: column; align-items: center; text-align: center; gap: 8px; margin-top: 40px; }
.svc-cta-hint { margin: 0; font-size: 12px; color: var(--text-dim); font-family: var(--mono); }
</style>
