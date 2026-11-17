/**
 * Dark / light theme. The light theme is the dark design inverted (see main.css), so switching is one
 * attribute on <html>. The change plays as a circular wave from the clicked button (View Transitions API),
 * falling back to an instant switch when it is unavailable or the user prefers reduced motion.
 */
export type ThemeName = 'dark' | 'light'

export function useTheme() {
  const theme = useState<ThemeName>('theme', () => 'dark')

  function apply(next: ThemeName) {
    theme.value = next
    document.documentElement.dataset.theme = next
    try { localStorage.setItem('theme', next) } catch { /* private mode */ }
  }

  function init() {
    let saved: string | null = null
    try { saved = localStorage.getItem('theme') } catch { /* private mode */ }
    apply(saved === 'light' ? 'light' : 'dark')
  }

  async function toggle(e?: MouseEvent) {
    const next: ThemeName = theme.value === 'dark' ? 'light' : 'dark'
    const doc = document as Document & { startViewTransition?: (cb: () => void) => { ready: Promise<void> } }
    if (!doc.startViewTransition || matchMedia('(prefers-reduced-motion: reduce)').matches) return apply(next)

    const x = e?.clientX ?? innerWidth / 2
    const y = e?.clientY ?? 0
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))
    const transition = doc.startViewTransition(() => apply(next))
    await transition.ready
    document.documentElement.animate(
      { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
      { duration: 800, easing: 'cubic-bezier(.4, 0, .2, 1)', pseudoElement: '::view-transition-new(root)' },
    )
  }

  return { theme, init, toggle }
}
