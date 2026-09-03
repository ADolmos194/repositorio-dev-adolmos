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
    head: {
      htmlAttrs: { lang: 'es', 'data-theme': 'dark' },
      title: 'Aylton Martinez · Full Stack Developer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Aylton Martinez — Full Stack Developer en Trujillo, Perú. Desarrollo web y móvil con Vue/React, Django y Flutter. Disponible para proyectos freelance y roles full-time.',
        },
        { name: 'theme-color', content: '#0d0f12' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Aylton Martinez · Full Stack Developer' },
        {
          property: 'og:description',
          content:
            'Desarrollo web y móvil con Vue/React, Django y Flutter. Disponible para proyectos freelance y roles full-time.',
        },
        { property: 'og:image', content: '/FOTOCV.png' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: 'Aylton Martinez · Full Stack Developer' },
        {
          name: 'twitter:description',
          content:
            'Desarrollo web y móvil con Vue/React, Django y Flutter. Disponible para proyectos freelance y roles full-time.',
        },
        { name: 'twitter:image', content: '/FOTOCV.png' },
      ],
      link: [
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
          href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Manrope:wght@400;500;600;700&display=swap',
        },
      ],
    },
  },
})
