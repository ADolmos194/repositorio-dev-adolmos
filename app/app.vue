<script setup lang="ts">
const { init } = useTheme()
onMounted(init)

useHead({
  noscript: [{ innerHTML: '<style>.reveal{opacity:1!important;transform:none!important}</style>' }],
})
</script>

<template>
  <div>
    <div class="bg-texture" aria-hidden="true" />

    <div class="page">
      <TerminalBar />
      <main class="site-main">
        <NuxtPage />
      </main>
      <SiteFooter />
    </div>
  </div>
</template>
