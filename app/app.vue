<script setup lang="ts">
const { init } = useTheme()
onMounted(init)
</script>

<template>
  <div>
    <div class="bg-grid" aria-hidden="true" />
    <div class="bg-vignette" aria-hidden="true" />
    <div class="bg-scanlines" aria-hidden="true" />

    <div class="wrap">
      <main class="term">
        <TerminalBar />
        <div class="term__body">
          <NuxtPage />
        </div>
        <SiteFooter />
      </main>
    </div>
  </div>
</template>
