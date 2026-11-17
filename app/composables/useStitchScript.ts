/**
 * Runs a page's interaction script (taken from the Stitch export) once the
 * page is mounted, and cleans up the timers and the <script> tag on unmount
 * so navigating between pages does not leak intervals.
 */
export function useStitchScript(code: string) {
  let el: HTMLScriptElement | null = null
  const timers: number[] = []

  onMounted(() => {
    const realSetInterval = window.setInterval
    window.setInterval = ((...args: Parameters<typeof setInterval>) => {
      const id = realSetInterval(...args) as unknown as number
      timers.push(id)
      return id
    }) as typeof window.setInterval

    el = document.createElement('script')
    el.text = code
    document.body.appendChild(el)

    window.setInterval = realSetInterval
  })

  onBeforeUnmount(() => {
    timers.forEach((id) => window.clearInterval(id))
    el?.remove()
  })
}
