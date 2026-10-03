<script setup lang="ts">
const { c } = useLocale()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="site-footer__id">
      <a href="#home" class="site-footer__name" @click="goHome">Aylton Martinez</a>
      <span class="site-footer__role">{{ c.facts.role }} · {{ c.contact.location }}</span>
    </div>

    <div class="site-footer__sys">
      <span>© {{ year }}</span>
      <span class="sys-ok"><span class="dot" />SYSTEM: {{ c.footer.status.toUpperCase() }}</span>
    </div>
  </footer>
</template>
