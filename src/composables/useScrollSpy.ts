import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollSpy(headingIds: string[]) {
  const activeId = ref<string>('')

  let observer: IntersectionObserver | null = null

  onMounted(() => {
    // Track which headings are currently visible
    const visibleIds = new Set<string>()

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visibleIds.add(entry.target.id)
          } else {
            visibleIds.delete(entry.target.id)
          }
        }

        // Pick the first visible heading in document order
        for (const id of headingIds) {
          if (visibleIds.has(id)) {
            activeId.value = id
            return
          }
        }

        // If none visible, find the last heading above the viewport
        const scrollY = window.scrollY + 100
        let closest = ''
        for (const id of headingIds) {
          const el = document.getElementById(id)
          if (!el) continue
          // Use getBoundingClientRect for accurate position (offsetTop is wrong for positioned parents)
          const top = el.getBoundingClientRect().top + window.scrollY
          if (top <= scrollY) {
            closest = id
          }
        }
        if (closest) {
          activeId.value = closest
        }
      },
      {
        rootMargin: '-64px 0px -60% 0px',
        threshold: 0,
      }
    )

    // Observe all heading elements
    for (const id of headingIds) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return { activeId }
}
