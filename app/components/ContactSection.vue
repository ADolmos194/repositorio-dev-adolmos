<script setup lang="ts">
const { c } = useLocale()

const channels = [
  {
    key: 'email',
    icon: 'lucide:mail',
    label: 'Email',
    value: 'ayltondolmos194@gmail.com',
    href: 'mailto:ayltondolmos194@gmail.com',
    ext: false,
    // no single canonical "email" brand color — keeps the site accent
    color: undefined as string | undefined,
  },
  {
    key: 'linkedin',
    icon: 'simple-icons:linkedin',
    label: 'LinkedIn',
    value: '/in/aylton-mesias-martinez',
    href: 'https://linkedin.com/in/aylton-mesias-martinez-14a6153ab/',
    ext: true,
    color: '#0A66C2',
  },
  {
    key: 'whatsapp',
    icon: 'simple-icons:whatsapp',
    label: 'WhatsApp',
    value: '+51 951 122 014',
    href: 'https://wa.me/51951122014',
    ext: true,
    color: '#25D366',
  },
]
</script>

<template>
  <section id="contact" class="contact" data-accent="blue">
    <SectionHead n="06" :title="c.contact.title" />

    <div class="cols cols--contact">
      <div class="socials">
        <a
          v-for="ch in channels"
          :key="ch.key"
          class="social"
          :href="ch.href"
          :target="ch.ext ? '_blank' : undefined"
          :rel="ch.ext ? 'noopener' : undefined"
          :style="ch.color ? { '--sc': ch.color } : undefined"
        >
          <Icon class="ico" :name="ch.icon" :style="ch.color ? { color: ch.color } : undefined" />
          <span class="lbl">{{ ch.label }}<small>{{ ch.value }}</small></span>
        </a>
        <p class="loc"><Icon name="lucide:map-pin" /> {{ c.contact.location }}</p>
      </div>

      <aside class="panel">
        <div class="panel__title">{{ c.contact.process.heading }}</div>
        <ol class="steps">
          <li v-for="(step, i) in c.contact.process.steps" :key="step.title" class="step">
            <span class="step__n">{{ String(i + 1).padStart(2, '0') }}</span>
            <span class="step__body">
              <b>{{ step.title }}</b>
              <span>{{ step.detail }}</span>
            </span>
          </li>
        </ol>
      </aside>
    </div>

    <div class="sys-status">
      <span class="chip">{{ c.contact.availability }}</span>
    </div>
  </section>
</template>

<style scoped>
.loc {
  display: flex; align-items: center; gap: 8px;
  color: var(--text-mute); font-size: 12.5px; margin: 6px 2px 0;
}

.steps { list-style: none; margin: 0; padding: 0; display: grid; gap: 14px; }
.step { display: grid; grid-template-columns: 22px 1fr; gap: 10px; }
.step__n { color: var(--accent); font-size: 12px; font-weight: 700; padding-top: 1px; }
.step__body { display: grid; gap: 2px; }
.step__body b { color: var(--text); font-size: 13px; font-weight: 600; }
.step__body span { color: var(--text-dim); font-size: 13px; line-height: 1.5; font-family: var(--sans); }
</style>
