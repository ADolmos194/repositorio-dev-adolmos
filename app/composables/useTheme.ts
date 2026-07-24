export type Theme = 'dark' | 'light'

/**
 * Dark / light theme with a persisted preference and an expanding-wave
 * (ripple) reveal on toggle, using the View Transitions API.
 */
export function useTheme() {
  const theme = useState<Theme>('theme', () => 'dark')

  function apply(next: Theme) {
    theme.value = next
    if (import.meta.client) {
      document.documentElement.setAttribute('data-theme', next)
      try {
        localStorage.setItem('theme', next)
      } catch {
        /* storage may be unavailable */
      }
    }
  }

  function toggle(event?: MouseEvent) {
    const next: Theme = theme.value === 'dark' ? 'light' : 'dark'

    const reduce =
      import.meta.client && window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const supported = import.meta.client && typeof document.startViewTransition === 'function'

    if (!supported || reduce) {
      apply(next)
      return
    }

    // origin of the wave = click point (fallback to top-right)
    const x = event?.clientX ?? window.innerWidth - 40
    const y = event?.clientY ?? 40
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    )

    const transition = document.startViewTransition(() => apply(next))

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 520,
          easing: 'ease-in-out',
          pseudoElement: '::view-transition-new(root)',
        },
      )
    })
  }

  function init() {
    if (!import.meta.client) return
    let stored: Theme | null = null
    try {
      stored = localStorage.getItem('theme') as Theme | null
    } catch {
      /* ignore */
    }
    // dark is the site's default regardless of OS preference — only an
    // explicit toggle (saved above) should ever switch it to light
    apply(stored ?? 'dark')
  }

  return { theme, toggle, init }
}
