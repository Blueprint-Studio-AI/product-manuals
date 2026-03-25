import type { RenderableTreeNode, Tag } from '@markdoc/markdoc'
import { h, type VNode, type Component } from 'vue'

type ComponentMap = Record<string, Component>

const HEADING_TAGS = new Set(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])

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
    if (HEADING_TAGS.has(name)) {
      const text = getTextFromChildren(children || [])
      if (text) {
        attrs.id = slugify(text)
      }
    }

    const renderedChildren = (children || [])
      .map((child) => renderMarkdoc(child, components))
      .flat()
      .filter((c): c is VNode | string => c !== null)

    if (component) {
      return h(tag, attrs, () => renderedChildren)
    }
    return h(tag, attrs, renderedChildren)
  }

  return null
}
