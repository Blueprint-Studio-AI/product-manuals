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
    if (node.type === 'heading') {
      const level = node.attributes?.level as number
      if (level <= 3) {
        const title = getTextContent(node)
        if (title) {
          flat.push({ id: slugify(title), title, level })
        }
      }
    }
    for (const child of node.children || []) {
      walk(child)
    }
  }

  walk(ast)

  // Build nested structure: h2 contains h3s, h3 contains h4s, etc.
  const root: TocEntry[] = []
  const stack: TocEntry[] = []

  for (const item of flat) {
    const entry: TocEntry = { ...item, children: [] }

    // Pop stack until we find a parent with lower level
    while (stack.length > 0 && stack[stack.length - 1].level >= item.level) {
      stack.pop()
    }

    if (stack.length === 0) {
      root.push(entry)
    } else {
      stack[stack.length - 1].children.push(entry)
    }

    stack.push(entry)
  }

  return root
}
