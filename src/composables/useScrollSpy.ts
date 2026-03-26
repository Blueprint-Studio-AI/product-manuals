import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollSpy(headingIds: string[]) {
  const activeId = ref<string>('')

  let headingObserver: IntersectionObserver | null = null
  let chapterObserver: IntersectionObserver | null = null

  onMounted(() => {
    // Track which headings and chapters are currently visible
    const visibleIds = new Set<string>()
    const visibleChapterHeadingIds = new Set<string>()

    // Observer for chapter sections - if a chapter is visible, mark its associated heading
    chapterObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const chapter = entry.target
          const nextSibling = chapter.nextElementSibling
          if (nextSibling?.tagName === 'H2' && nextSibling.id) {
            if (entry.isIntersecting) {
              visibleChapterHeadingIds.add(nextSibling.id)
            } else {
              visibleChapterHeadingIds.delete(nextSibling.id)
            }
          }
        }
        updateActiveId()
      },
      {
        rootMargin: '-64px 0px -40% 0px',
        threshold: 0,
      }
    )

    // Observe all chapter sections
    document.querySelectorAll('.chapter').forEach((el) => {
      chapterObserver!.observe(el)
    })

    headingObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visibleIds.add(entry.target.id)
          } else {
            visibleIds.delete(entry.target.id)
          }
        }
        updateActiveId()
      },
      {
        rootMargin: '-64px 0px -60% 0px',
        threshold: 0,
      }
    )

    // Observe all heading elements
    for (const id of headingIds) {
      const el = document.getElementById(id)
      if (el) headingObserver.observe(el)
    }

    function updateActiveId() {
      // Pick the first visible heading (either directly visible or via chapter)
      for (const id of headingIds) {
        if (visibleIds.has(id) || visibleChapterHeadingIds.has(id)) {
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
        // Also check for preceding chapter section
        const prevSibling = el.previousElementSibling
        const checkEl = prevSibling?.classList.contains('chapter') ? prevSibling : el
        const top = checkEl.getBoundingClientRect().top + window.scrollY
        if (top <= scrollY) {
          closest = id
        }
      }
      if (closest) {
        activeId.value = closest
      }
    }
  })

  onUnmounted(() => {
    headingObserver?.disconnect()
    chapterObserver?.disconnect()
  })

  return { activeId }
}
