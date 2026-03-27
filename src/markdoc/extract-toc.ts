import type { Node } from '@markdoc/markdoc'

export interface TocEntry {
  id: string
  title: string
  level: number
  children: TocEntry[]
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

function getTextContent(node: Node): string {
  if (node.type === 'text') {
    return (node.attributes?.content as string) || ''
  }
  return (node.children || []).map(getTextContent).join('')
}

export function extractToc(ast: Node): TocEntry[] {
  const flat: { id: string; title: string; level: number }[] = []

  function walk(node: Node) {
    // Handle regular headings
    if (node.type === 'heading') {
      const level = node.attributes?.level as number
      if (level <= 3) {
        const title = getTextContent(node)
        if (title) {
          flat.push({ id: slugify(title), title, level })
        }
      }
    }

    // Handle toc-entry tags (TOC-only entries)
    if (node.type === 'tag' && node.tag === 'toc-entry') {
      const title = node.attributes?.title as string
      const level = (node.attributes?.level as number) || 2
      if (title) {
        flat.push({ id: slugify(title), title, level })
      }
    }

    for (const child of node.children || []) {
      walk(child)
    }
  }

  walk(ast)

  // Build nested structure: only level 1 items can have children
  // h2 and h3 are flattened as direct children of level 1 items
  const root: TocEntry[] = []
  let currentLevel1: TocEntry | null = null

  for (const item of flat) {
    const entry: TocEntry = { ...item, children: [] }

    if (item.level === 1) {
      // Level 1 items go to root and can have children
      root.push(entry)
      currentLevel1 = entry
    } else {
      // Level 2 and 3 items are direct children of the current level 1 item
      // They don't have nested children (flattened)
      if (currentLevel1) {
        currentLevel1.children.push(entry)
      } else {
        // No level 1 parent yet, add to root
        root.push(entry)
      }
    }
  }

  return root
}
