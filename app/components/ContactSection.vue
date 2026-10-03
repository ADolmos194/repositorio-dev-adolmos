<script setup lang="ts">
const { c } = useLocale()

const channels = computed(() => [
  {
    key: 'email',
    icon: 'lucide:mail',
    label: 'Email',
    value: 'ayltondolmos194@gmail.com',
    href: 'mailto:ayltondolmos194@gmail.com',
    ext: false,
    color: undefined as string | undefined,
  },
  {
    key: 'phone',
    icon: 'lucide:phone',
    label: c.value.contact.phoneLabel,
    value: '+51 951 122 014',
    href: 'tel:+51951122014',
    ext: false,
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
])
</script>

<template>
  <section id="contact" class="contact">
    <SectionHead n="06" :title="c.contact.title" />

    <div class="contact-compact">
      <div class="contact-compact__info">
        <h3 class="contact-ready reveal">{{ c.contact.readyHeadline }}</h3>
        <p class="contact-loc reveal" style="--reveal-delay: 60ms"><Icon name="lucide:map-pin" /> {{ c.contact.location }}</p>

        <div class="contact-channels reveal" style="--reveal-delay: 100ms">
          <a
            v-for="ch in channels"
            :key="ch.key"
            :href="ch.href"
            :target="ch.ext ? '_blank' : undefined"
            :rel="ch.ext ? 'noopener' : undefined"
            :style="ch.color ? { '--sc': ch.color } : undefined"
          >
            <Icon class="ico" :name="ch.icon" :style="ch.color ? { color: ch.color } : undefined" />{{ ch.label }}
          </a>
        </div>

        <ol class="contact-flow reveal" style="--reveal-delay: 140ms">
          <li v-for="(step, i) in c.contact.process.steps" :key="i">{{ step.title }}</li>
        </ol>
      </div>

      <div class="contact-compact__action">
        <div class="sys-line reveal" style="--reveal-delay: 160ms"><span class="dot" />{{ c.contact.availability }}</div>
        <a href="mailto:ayltondolmos194@gmail.com" class="cmd-link cmd-link--primary contact-send reveal" style="--reveal-delay: 200ms">
          <span class="cmd-link__k">~$ send</span>
          <span class="cmd-link__v">{{ c.contact.cta }}</span>
          <Icon class="cmd-link__ico" name="lucide:arrow-up-right" />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-compact { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-start; gap: 24px 40px; }
.contact-compact__info { min-width: 0; }
.contact-ready { margin: 4px 0 14px; font-family: var(--sans); font-weight: 800; font-size: calc(var(--fs-h3) * 1.05); letter-spacing: -.015em; color: var(--white); }
.contact-loc { display: flex; align-items: center; gap: 8px; margin: 0 0 18px; color: var(--text-dim); font-size: 12.5px; font-family: var(--mono); }

.contact-channels { display: flex; flex-wrap: wrap; gap: 8px 20px; margin-bottom: 18px; }
.contact-channels a { display: inline-flex; align-items: center; gap: 7px; color: var(--text); text-decoration: none; font-weight: 600; font-size: 14px; transition: color .18s ease; }
.contact-channels a:hover {
  color: var(--sc, var(--accent-pop));
  text-shadow: 0 0 14px color-mix(in srgb, var(--sc, var(--accent)) 45%, transparent);
}
.contact-channels .ico { color: var(--accent); font-size: 15px; }

.contact-flow { list-style: none; margin: 0; padding: 0; display: flex; flex-wrap: wrap; align-items: center; gap: 8px; font-family: var(--mono); font-size: 10.5px; letter-spacing: .8px; text-transform: uppercase; color: var(--text-dim); }
.contact-flow li:not(:last-child)::after { content: "→"; margin-left: 8px; color: var(--line); }

/* right column: status readout stacked above the send CTA, so the right
   side carries its own visual weight instead of one link floating in
   empty space next to the taller left info column */
.contact-compact__action { display: flex; flex-direction: column; align-items: flex-end; gap: 14px; flex: none; align-self: center; }
.contact-send { flex: none; }
/* once the row wraps to one column, a right-aligned block is the only
   right-aligned thing on an otherwise left-aligned page — flip it to
   match everything else instead of reading as a stray alignment bug */
@media (max-width: 760px) {
  .contact-compact__action { align-items: flex-start; align-self: stretch; }
}

.sys-line { display: flex; align-items: center; gap: 10px; font-family: var(--mono); font-size: 11.5px; letter-spacing: .5px; color: var(--text-dim); }
.sys-line .dot { width: 6px; height: 6px; border-radius: 50%; background: var(--accent); flex: none; animation: led-pulse 2.4s ease-in-out infinite; }
</style>
