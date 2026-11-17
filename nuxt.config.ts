// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

const description =
  'Aylton Martinez — Desarrollador Full Stack en Trujillo, Perú. Django REST, PostgreSQL, Vue 3 / Nuxt, React y Flutter. Disponible para proyectos freelance y roles full-time.'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    head: {
      htmlAttrs: { lang: 'es', class: 'dark' },
      title: 'Aylton Martinez | Desarrollador Full Stack',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: description },
        { name: 'theme-color', content: '#050505' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Aylton Martinez | Desarrollador Full Stack' },
        { property: 'og:description', content: description },
        { property: 'og:image', content: '/FOTOCV.png' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: 'Aylton Martinez | Desarrollador Full Stack' },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: '/FOTOCV.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/logo-am.svg' },
        { rel: 'alternate icon', type: 'image/x-icon', href: '/logo-am.ico' },
        {
          rel: 'preload',
          href: '/fonts/jetbrains-mono-variable.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: 'anonymous',
        },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Silkscreen&family=VT323&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap',
        },
      ],
    },
  },
})
