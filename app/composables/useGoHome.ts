/* "home" is the page's default/top state — after jumping there, the address
   bar should read the plain root URL, not "/#home". Other in-page links keep
   their hash (deep-linkable); this is only for links that point at #home. */
export function goHome(e: MouseEvent) {
  e.preventDefault()
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  document.getElementById('home')?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' })
  history.replaceState(null, '', window.location.pathname + window.location.search)
}
