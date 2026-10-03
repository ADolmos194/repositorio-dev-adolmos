<script setup lang="ts">
defineProps<{ n: string; title: string; status?: string }>()
</script>

<template>
  <div class="sec-head">
    <span class="n">{{ n }}</span>
    <h2><span class="hash">#</span> {{ title }}</h2>
    <span class="rule" />
    <span v-if="status" class="sec-status">{{ status }}</span>
  </div>
</template>
