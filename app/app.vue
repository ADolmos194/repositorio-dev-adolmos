<script setup lang="ts">
useHead({
  htmlAttrs: { class: 'dark' },
  // apply the saved theme before first paint, so there is no flash of the wrong one
  script: [{ innerHTML: "try{var t=localStorage.getItem('theme');document.documentElement.dataset.theme=t==='light'?'light':'dark'}catch(e){}" }],
})

const { init: initTheme } = useTheme()
const { init: initLocale } = useLocale()
onMounted(() => { initTheme(); initLocale() })
</script>

<template>
  <SiteBoxGrid3D />
  <NuxtPage />
</template>
