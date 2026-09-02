<script setup lang="ts">
const { c } = useLocale()
</script>

<template>
  <section id="services" data-accent="green">
    <SectionHead n="02" :title="c.services.title" status="SERVICES: ONLINE" />
    <p class="intro">{{ c.services.intro }}</p>

    <div class="services-grid">
      <div v-for="item in c.services.items" :key="item.title" class="card svc-card">
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
      <a href="#contact" class="go-btn svc-cta">
        <span class="go-btn__k">~$ cd</span>
        <span class="go-btn__v">{{ c.services.ctaLabel }}</span>
        <Icon class="go-btn__ico" name="lucide:arrow-left" />
      </a>
      <p class="svc-cta-hint">{{ c.services.ctaHint }}</p>
    </div>
  </section>
</template>

<style scoped>
.intro { margin: -4px 0 18px; color: var(--text-dim); font-size: 13.5px; max-width: 62ch; font-family: var(--sans); }

.services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 12px; }

.svc-card { display: flex; flex-direction: column; gap: 10px; }
.svc-card__head { display: flex; align-items: center; gap: 10px; }
.svc-card__head h3 {
  margin: 0; font-size: 12px; letter-spacing: 1.5px; text-transform: uppercase;
  color: var(--accent); font-weight: 600;
}
.svc-card__head h3::before { content: none; }
.svc-card__ico { font-size: 20px; color: var(--accent); flex: none; }
.svc-card__body { margin: 0; font-size: 13.5px; line-height: 1.55; color: var(--text-dim); font-family: var(--sans); }

.svc-cta-wrap { display: flex; flex-direction: column; align-items: center; gap: 6px; margin-top: 22px; }
.svc-cta { justify-content: center; }
.svc-cta-hint { margin: 0; font-size: 12px; color: var(--text-mute); font-family: var(--sans); }
</style>
