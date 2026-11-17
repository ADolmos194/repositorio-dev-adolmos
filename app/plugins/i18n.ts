import { ES, EN } from '~/i18n/messages'

// $t(id) in templates: the Spanish text, or its English version when the locale is "en" (falls back to Spanish)
export default defineNuxtPlugin((nuxtApp) => {
  const locale = useState<string>('locale', () => 'es')
  nuxtApp.vueApp.config.globalProperties.$t = (id: number) => (locale.value === 'en' ? EN[id] || ES[id] : ES[id])
})
