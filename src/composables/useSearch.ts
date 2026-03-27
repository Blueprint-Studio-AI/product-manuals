import { ref, computed } from 'vue'

export interface SearchResult {
  id: string
  title: string
  excerpt: string
  matchCount: number
}

interface SearchSection {
  id: string
  title: string
  content: string
}

// Extract searchable sections from raw markdown
function extractSections(raw: string): SearchSection[] {
  const sections: SearchSection[] = []
  const lines = raw.split('\n')

  let currentId = ''
  let currentTitle = ''
  let currentContent: string[] = []

  for (const line of lines) {
    // Match h2 and h3 headings
    const h2Match = line.match(/^## (.+)$/)
    const h3Match = line.match(/^### (.+)$/)

    if (h2Match || h3Match) {
      // Save previous section if exists
      if (currentId && currentContent.length > 0) {
        sections.push({
          id: currentId,
          title: currentTitle,
          content: currentContent.join(' ').replace(/\s+/g, ' ').trim()
        })
      }

      // Start new section
      const title = h2Match ? h2Match[1] : h3Match![1]
      currentTitle = title
      currentId = title.toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
      currentContent = []
    } else {
      // Skip markdoc tags and images, keep text content
      const cleanLine = line
        .replace(/\{%.*?%\}/g, '') // Remove markdoc tags
        .replace(/!\[.*?\]\(.*?\)/g, '') // Remove images
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Keep link text
        .replace(/\*\*([^*]+)\*\*/g, '$1') // Remove bold
        .replace(/\*([^*]+)\*/g, '$1') // Remove italic
        .replace(/`([^`]+)`/g, '$1') // Remove code
        .trim()

      if (cleanLine) {
        currentContent.push(cleanLine)
      }
    }
  }

  // Don't forget the last section
  if (currentId && currentContent.length > 0) {
    sections.push({
      id: currentId,
      title: currentTitle,
      content: currentContent.join(' ').replace(/\s+/g, ' ').trim()
    })
  }

  return sections
}

// Create excerpt with highlighted match
function createExcerpt(content: string, query: string, maxLength: number = 120): string {
  const lowerContent = content.toLowerCase()
  const lowerQuery = query.toLowerCase()
  const index = lowerContent.indexOf(lowerQuery)

  if (index === -1) return content.slice(0, maxLength) + (content.length > maxLength ? '...' : '')

  // Get context around the match
  const start = Math.max(0, index - 40)
  const end = Math.min(content.length, index + query.length + 80)

  let excerpt = content.slice(start, end)
  if (start > 0) excerpt = '...' + excerpt
  if (end < content.length) excerpt = excerpt + '...'

  return excerpt
}

// Count occurrences of query in content
function countMatches(content: string, query: string): number {
  const lowerContent = content.toLowerCase()
  const lowerQuery = query.toLowerCase()
  let count = 0
  let pos = 0

  while ((pos = lowerContent.indexOf(lowerQuery, pos)) !== -1) {
    count++
    pos += lowerQuery.length
  }

  return count
}

let sections: SearchSection[] = []

export function initSearch(rawMarkdown: string) {
  sections = extractSections(rawMarkdown)
}

export function useSearch() {
  const query = ref('')
  const isOpen = ref(false)
  const isFocused = ref(false)

  const results = computed<SearchResult[]>(() => {
    const q = query.value.trim()
    if (q.length < 2) return []

    const matches: SearchResult[] = []

    for (const section of sections) {
      const titleMatches = countMatches(section.title, q)
      const contentMatches = countMatches(section.content, q)
      const totalMatches = titleMatches + contentMatches

      if (totalMatches > 0) {
        matches.push({
          id: section.id,
          title: section.title,
          excerpt: createExcerpt(section.content, q),
          matchCount: totalMatches
        })
      }
    }

    // Sort by match count (most relevant first)
    return matches.sort((a, b) => b.matchCount - a.matchCount).slice(0, 10)
  })

  function openSearch() {
    isOpen.value = true
  }

  function closeSearch() {
    isOpen.value = false
    query.value = ''
  }

  function setFocused(focused: boolean) {
    isFocused.value = focused
    if (focused) {
      isOpen.value = true
    }
  }

  function navigateToResult(id: string) {
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
    closeSearch()
  }

  return {
    query,
    results,
    isOpen,
    isFocused,
    openSearch,
    closeSearch,
    setFocused,
    navigateToResult
  }
}
