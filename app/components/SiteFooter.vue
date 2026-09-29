<script setup lang="ts">
const { c } = useLocale()
const year = new Date().getFullYear()

const channels = [
  { key: 'email', label: 'Email', href: 'mailto:ayltondolmos194@gmail.com', ext: false },
  { key: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/in/aylton-mesias-martinez-14a6153ab/', ext: true },
  { key: 'whatsapp', label: 'WhatsApp', href: 'https://wa.me/51951122014', ext: true },
]
</script>

<template>
  <footer class="site-footer">
    <div class="site-footer__top">
      <a href="#home" class="site-footer__name">Aylton<br>Martinez</a>
      <div class="site-footer__meta">
        <span>{{ c.facts.role }}</span>
        <span>{{ c.facts.location }}</span>
      </div>
    </div>

    <nav class="site-footer__links" aria-label="Contacto">
      <a
        v-for="ch in channels"
        :key="ch.key"
        :href="ch.href"
        :target="ch.ext ? '_blank' : undefined"
        :rel="ch.ext ? 'noopener' : undefined"
      >{{ ch.label }}</a>
    </nav>

    <div class="site-footer__bottom">
      <span>© {{ year }} Aylton Martinez · {{ c.footer.built }} <span class="ok">Nuxt</span></span>
      <span class="ok">● {{ c.footer.status }}</span>
    </div>
  </footer>
</template>
