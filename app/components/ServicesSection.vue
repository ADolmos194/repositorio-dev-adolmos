<script setup lang="ts">
const { c } = useLocale()
</script>

<template>
  <section id="services" data-accent="green">
    <SectionHead n="02" :title="c.services.title" status="SERVICES: ONLINE" />
    <p class="intro">{{ c.services.intro }}</p>

    <ol class="svc-list">
      <li
        v-for="(item, i) in c.services.items"
        :key="i"
        class="svc-row reveal"
        :style="{ '--reveal-delay': `${i * 70}ms` }"
      >
        <span class="svc-row__n">{{ String(i + 1).padStart(2, '0') }}</span>
        <div class="svc-row__head">
          <Icon class="svc-row__ico" :name="item.icon" />
          <h3>{{ item.title }}</h3>
        </div>
        <p class="svc-row__body">{{ item.body }}</p>
        <div class="tags">
          <span v-for="t in item.tags" :key="t" class="tag">{{ t }}</span>
        </div>
      </li>
    </ol>

    <div class="svc-cta-wrap">
      <a href="#contact" class="link-arrow svc-cta">
        <span>{{ c.services.ctaLabel }}</span>
        <Icon class="link-arrow__ico" name="lucide:arrow-up-right" />
      </a>
      <p class="svc-cta-hint">{{ c.services.ctaHint }}</p>
    </div>
  </section>
</template>

<style scoped>
.intro { margin: -8px 0 40px; color: var(--text-dim); font-size: 16px; max-width: 62ch; font-family: var(--sans); }

.svc-list { list-style: none; margin: 0; padding: 0; }
.svc-row {
  display: grid; grid-template-columns: 52px 1fr; gap: 4px 20px;
  padding: 30px 0; border-bottom: 1px solid var(--line-soft);
  transition: padding-left .25s ease;
}
.svc-row:first-child { border-top: 1px solid var(--line-soft); }
.svc-row:hover { padding-left: 10px; }
.svc-row__n {
  font-family: var(--mono); font-size: 13px; color: var(--text-mute); padding-top: 5px;
  transition: color .25s ease;
}
.svc-row:hover .svc-row__n { color: var(--accent); }
.svc-row__head { grid-column: 2; display: flex; align-items: center; gap: 12px; }
.svc-row__head h3 {
  margin: 0; font-family: var(--sans); font-size: var(--fs-h3); line-height: 1.15;
  color: var(--white); font-weight: 700; letter-spacing: -.01em;
}
.svc-row__ico { font-size: 20px; color: var(--accent); flex: none; }
.svc-row__body { grid-column: 2; margin: 10px 0 14px; font-size: 15px; line-height: 1.6; color: var(--text-dim); font-family: var(--sans); max-width: 62ch; }
.svc-row .tags { grid-column: 2; }

.svc-cta-wrap { display: flex; flex-direction: column; align-items: flex-start; gap: 8px; margin-top: 48px; }
.svc-cta-hint { margin: 0; font-size: 12px; color: var(--text-mute); font-family: var(--mono); }
</style>
