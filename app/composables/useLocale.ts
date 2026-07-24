import { siteContent, type Locale, type LocaleContent } from '~/utils/content'

/**
 * Bilingual state (ES/EN) shared across the app.
 * `c` is the reactive content bundle for the active locale.
 */
export function useLocale() {
  const locale = useState<Locale>('locale', () => 'es')

  const c = computed<LocaleContent>(() => siteContent[locale.value])

  function set(next: Locale) {
    locale.value = next
    if (import.meta.client) {
      document.documentElement.setAttribute('lang', next)
    }
  }

  return { locale, c, set }
}
