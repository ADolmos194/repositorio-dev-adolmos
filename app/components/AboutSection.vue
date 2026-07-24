<script setup lang="ts">
const { c } = useLocale()
</script>

<template>
  <section id="about" class="about" data-accent="blue">
    <SectionHead n="01" :title="c.about.title" status="IDENTITY: OK" />
    <p class="cmd"><span class="c">~$</span> {{ c.about.cmd }}</p>

    <div class="about-grid">
      <aside class="idcard">
        <div class="idcard__head">
          <span class="idcard__title">{{ c.about.title }}</span>
        </div>
        <div class="idcard__avatar">
          <img src="/FOTOCV.png" alt="Aylton Martinez">
        </div>
        <a class="go-btn go-btn--dl" href="/cv-aylton-martinez.pdf" download>
          <span class="go-btn__k">~$ wget</span>
          <span class="go-btn__v">{{ c.about.downloadCv }}</span>
          <Icon class="go-btn__ico" name="lucide:download" />
        </a>
      </aside>

      <!-- BIO (no nested window) -->
      <div>
        <div v-for="(para, i) in c.about.paragraphs" :key="i" class="bio-p">
          <span class="pr">&gt;</span>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <span v-html="para" />
        </div>

        <div class="competencies-h">CORE_COMPETENCIES</div>
        <div class="competencies">
          <div v-for="h in c.about.highlights" :key="h" class="comp">
            <span class="pl">[+]</span>{{ h }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
