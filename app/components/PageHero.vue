<script setup lang="ts">
// Same page opening on every route: label chip, title, lead, an optional slot (actions, filters, stats)
// and an optional `aside` (the portrait on the home page).
defineProps<{ eyebrow: string; title: string; accent?: string; lead: string }>()
</script>

<template>
  <section class="w-full">
    <div class="max-w-7xl mx-auto px-6 pt-12 pb-10 flex flex-col lg:flex-row lg:items-start gap-10">
      <div class="min-w-0 flex-1 flex flex-col gap-5">
        <span class="self-start px-2 py-1 border-2 border-[#d4a64a] bg-[#0e0e12] text-[#d4a64a] font-pixel text-[10px] uppercase tracking-wider">{{ eyebrow }}</span>
        <h1 class="max-w-5xl">{{ title }} <span v-if="accent" class="text-[#d4a64a]">{{ accent }}</span></h1>
        <p class="max-w-3xl text-[#a1a1aa]">{{ lead }}</p>
        <div v-if="$slots.default" class="pt-2">
          <slot />
        </div>
      </div>
      <div v-if="$slots.aside" class="w-56 lg:w-72 shrink-0">
        <slot name="aside" />
      </div>
    </div>
  </section>
</template>
