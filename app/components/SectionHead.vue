<script setup lang="ts">
defineProps<{ n: string; title: string; status?: string }>()
</script>

<template>
  <div class="sec-head">
    <div class="sec-head__row">
      <span class="sec-head__n">{{ n }}</span>
      <span v-if="status" class="sec-status">{{ status }}</span>
    </div>
    <h2 class="sec-head__title">{{ title }}</h2>
    <span class="rule" />
  </div>
</template>
