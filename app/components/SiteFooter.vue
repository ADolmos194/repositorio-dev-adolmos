<script setup lang="ts">
const { c } = useLocale()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <span>© {{ year }} Aylton Martinez · {{ c.footer.built }} <span class="ok">Nuxt</span></span>
    <span class="ok">● {{ c.footer.status }}</span>
  </footer>
</template>
