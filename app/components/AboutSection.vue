<script setup lang="ts">
const { c } = useLocale()
</script>

<template>
  <section id="about" class="about" data-accent="green">
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

      <div>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div
          v-for="(para, i) in c.about.paragraphs"
          :key="i"
          class="bio-p reveal"
          :class="{ 'bio-p--lead': i === 0 }"
          :style="{ '--reveal-delay': `${i * 90}ms` }"
          v-html="para"
        />

        <div class="competencies-h reveal">CORE_COMPETENCIES</div>
        <div class="competencies">
          <div
            v-for="(h, i) in c.about.highlights"
            :key="i"
            class="comp reveal"
            :style="{ '--reveal-delay': `${i * 60}ms` }"
          >
            <span class="pl">+</span>{{ h }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
