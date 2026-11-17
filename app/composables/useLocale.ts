/** ES / EN. The texts live in `~/i18n/messages` (generated); templates call `$t(id)`. */
export type LocaleName = 'es' | 'en'

export function useLocale() {
  const locale = useState<LocaleName>('locale', () => 'es')

  function set(next: LocaleName) {
    locale.value = next
    document.documentElement.lang = next
    try { localStorage.setItem('locale', next) } catch { /* private mode */ }
  }

  function init() {
    let saved: string | null = null
    try { saved = localStorage.getItem('locale') } catch { /* private mode */ }
    set(saved === 'en' || saved === 'es' ? saved : (navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'es'))
  }

  return { locale, set, init }
}
