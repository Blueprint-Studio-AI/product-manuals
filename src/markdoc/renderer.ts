import type { RenderableTreeNode, Tag } from '@markdoc/markdoc'
import { h, type VNode, type Component } from 'vue'

type ComponentMap = Record<string, Component>

const HEADING_TAGS = new Set(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])

// Tags that break chapter content sections (full-width elements)
const SECTION_BREAK_TAGS = new Set(['Cover', 'Chapter'])

function isTag(node: unknown): node is Tag {
  return (
    node !== null &&
    typeof node === 'object' &&
    '$$mdtype' in (node as Record<string, unknown>) &&
    (node as Record<string, unknown>).$$mdtype === 'Tag'
  )
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

function getTextFromChildren(children: unknown[]): string {
  return children
    .map((c) => {
      if (typeof c === 'string') return c
      if (isTag(c)) return getTextFromChildren(c.children || [])
      return ''
    })
    .join('')
}

function isSectionBreak(node: RenderableTreeNode): boolean {
  if (!isTag(node)) return false
  return SECTION_BREAK_TAGS.has(node.name)
}

// Check if a VNode is an h2 element
function isH2VNode(node: VNode | string): boolean {
  if (typeof node === 'string') return false
  return node.type === 'h2'
}

// Group article children into chapter-content sections with section numbers
function groupIntoChapterSections(
  children: (VNode | string)[],
  nodes: RenderableTreeNode[]
): VNode[] {
  const result: VNode[] = []
  let currentGroup: (VNode | string)[] = []
  let chapterNumber = 0
  let sectionNumber = 0

  function flushGroup() {
    if (currentGroup.length === 0) return

    // Add section numbers to all h2 elements in the group
    const groupWithSectionNumbers: (VNode | string)[] = []

    for (const child of currentGroup) {
      if (isH2VNode(child)) {
        sectionNumber++
        const sectionNumStr = `${chapterNumber}.${sectionNumber}`
        const sectionNumH2 = h('h2', { class: 'section-number', 'aria-hidden': 'true' }, sectionNumStr)
        groupWithSectionNumbers.push(sectionNumH2)
      }
      groupWithSectionNumbers.push(child)
    }

    result.push(h('div', { class: 'chapter-content' }, groupWithSectionNumbers))
    currentGroup = []
  }

  for (let i = 0; i < children.length; i++) {
    const child = children[i]
    const node = nodes[i]

    if (isSectionBreak(node)) {
      // Flush current group as chapter-content
      flushGroup()
      // Increment chapter number and reset section number for next chapter
      chapterNumber++
      sectionNumber = 0
      // Add the section break element directly
      if (typeof child !== 'string') {
        result.push(child)
      }
    } else {
      // Add to current group
      currentGroup.push(child)
    }
  }

  // Flush remaining group
  flushGroup()

  return result
}

export function renderMarkdoc(
  node: RenderableTreeNode,
  components: ComponentMap
): VNode | VNode[] | string | null {
  if (typeof node === 'string') return node
  if (node === null || node === undefined) return null

  if (Array.isArray(node)) {
    const results = node
      .map((n) => renderMarkdoc(n, components))
      .flat()
      .filter((c): c is VNode | string => c !== null)
    return results as VNode[]
  }

  if (isTag(node)) {
    const { name, attributes, children } = node

    const component = components[name]
    const tag = component || name

    // Auto-inject id on heading elements for scroll linking
    let attrs = { ...(attributes || {}) }
    const text = HEADING_TAGS.has(name) ? getTextFromChildren(children || []) : ''
    if (text) {
      attrs.id = slugify(text)
    }

    // External links open in new tab
    if (name === 'a' && attrs.href && /^https?:\/\//.test(attrs.href)) {
      attrs.target = '_blank'
      attrs.rel = 'noopener noreferrer'
    }

    const renderedChildren = (children || [])
      .map((child) => renderMarkdoc(child, components))
      .flat()
      .filter((c): c is VNode | string => c !== null)

    // Special handling for article: group children into chapter-content sections
    if (name === 'article' && children) {
      const groupedChildren = groupIntoChapterSections(renderedChildren, children)
      return h(tag, attrs, groupedChildren)
    }

    if (component) {
      return h(tag, attrs, () => renderedChildren)
    }
    return h(tag, attrs, renderedChildren)
  }

  return null
}
