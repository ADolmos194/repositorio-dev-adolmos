<script setup lang="ts">
const { c } = useLocale()
</script>

<template>
  <section id="about" class="about" data-accent="blue">
    <SectionHead n="01" :title="c.about.title" status="IDENTITY: OK" />

    <div class="about-grid">
      <aside class="idcard reveal">
        <div class="idcard__head">
          <span class="idcard__title">{{ c.about.title }}</span>
        </div>
        <div class="idcard__avatar">
          <img src="/FOTOCV.png" alt="Aylton Martinez">
        </div>
      </aside>

      <!-- BIO (no nested window) -->
      <div>
        <div
          v-for="(para, i) in c.about.paragraphs"
          :key="i"
          class="bio-p reveal"
          :style="{ '--reveal-delay': `${i * 90}ms` }"
        >
          <span class="pr">&gt;</span>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <span v-html="para" />
        </div>

        <div class="competencies-h reveal">CORE_COMPETENCIES</div>
        <div class="competencies">
          <div
            v-for="(h, i) in c.about.highlights"
            :key="h"
            class="comp reveal"
            :style="{ '--reveal-delay': `${i * 60}ms` }"
          >
            <span class="pl">[+]</span>{{ h }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
