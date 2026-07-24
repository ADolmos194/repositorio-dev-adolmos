// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxt/icon'],

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: { lang: 'es', 'data-theme': 'dark' },
      title: 'Aylton Martinez · Full Stack Developer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Portafolio de Aylton Martinez — Desarrollador Full Stack (Vue 3, Nuxt, Django, Flutter) en Trujillo, Perú.',
        },
        { name: 'theme-color', content: '#000000' },
      ],
      link: [
        {
          rel: 'preload',
          href: '/fonts/jetbrains-mono-variable.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: 'anonymous',
        },
      ],
    },
  },
})
