/* Sitewide scroll-reveal: any element rendered with class="reveal" starts
   hidden (see .reveal in main.css) and toggles .is-revealed each time it
   crosses into/out of view — replays on the way back up too, not just once
   on first scroll-down. */
export default defineNuxtPlugin(() => {
  const nuxtApp = useNuxtApp()

  nuxtApp.hook('app:mounted', () => {
    const els = document.querySelectorAll<HTMLElement>('.reveal')
    if (!els.length) return

    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-revealed'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          entry.target.classList.toggle('is-revealed', entry.isIntersecting)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' },
    )
    els.forEach((el) => io.observe(el))
  })
})
