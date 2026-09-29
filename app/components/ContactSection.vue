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
  <section id="contact" class="contact" data-accent="green">
    <SectionHead n="06" :title="c.contact.title" />

    <p class="contact-cta reveal">{{ c.services.ctaLabel }}</p>
    <p class="contact-lead reveal" style="--reveal-delay: 80ms">{{ c.contact.availability }}</p>

    <div class="cols cols--contact">
      <div class="socials">
        <a
          v-for="(ch, i) in channels"
          :key="ch.key"
          class="social reveal"
          :href="ch.href"
          :target="ch.ext ? '_blank' : undefined"
          :rel="ch.ext ? 'noopener' : undefined"
          :style="{ ...(ch.color ? { '--sc': ch.color } : {}), '--reveal-delay': `${i * 80}ms` }"
        >
          <Icon class="ico" :name="ch.icon" :style="ch.color ? { color: ch.color } : undefined" />
          <span class="lbl">{{ ch.label }}<small>{{ ch.value }}</small></span>
        </a>
        <p class="loc"><Icon name="lucide:map-pin" /> {{ c.contact.location }}</p>
      </div>

      <aside class="panel reveal">
        <div class="panel__title">{{ c.contact.process.heading }}</div>
        <ol class="steps">
          <li
            v-for="(step, i) in c.contact.process.steps"
            :key="i"
            class="step reveal"
            :style="{ '--reveal-delay': `${i * 90}ms` }"
          >
            <span class="step__n">{{ String(i + 1).padStart(2, '0') }}</span>
            <span class="step__body">
              <b>{{ step.title }}</b>
              <span>{{ step.detail }}</span>
            </span>
          </li>
        </ol>
      </aside>
    </div>
  </section>
</template>

<style scoped>
.contact-cta {
  margin: 8px 0 0; font-family: var(--sans); font-weight: 800; font-size: var(--fs-h1);
  letter-spacing: -0.02em; line-height: 1.05; color: var(--white); max-width: 16ch;
}
.contact-lead { margin: 16px 0 56px; font-family: var(--sans); font-size: 16.5px; color: var(--text-dim); }

.loc {
  display: flex; align-items: center; gap: 8px;
  color: var(--text-mute); font-size: 12.5px; margin: 16px 2px 0;
}

.steps { list-style: none; margin: 0; padding: 0; display: grid; gap: 22px; }
.step { display: grid; grid-template-columns: 26px 1fr; gap: 12px; }
.step__n { color: var(--accent); font-family: var(--mono); font-size: 12px; padding-top: 2px; }
.step__body { display: grid; gap: 2px; }
.step__body b { color: var(--text); font-size: 14.5px; font-weight: 700; font-family: var(--sans); }
.step__body span { color: var(--text-dim); font-size: 14px; line-height: 1.55; font-family: var(--sans); }
</style>
