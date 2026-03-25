import { type Schema, Tag } from '@markdoc/markdoc'

// Custom tags for the manual layout

export const cover: Schema = {
  render: 'Cover',
  attributes: {
    image: { type: String, required: true },
    imageAlt: { type: String },
    logo: { type: String },
  },
  transform(node, config) {
    const attrs = node.transformAttributes(config)
    const children = node.transformChildren(config)
    return new Tag('Cover', attrs, children)
  },
}

export const chapter: Schema = {
  render: 'Chapter',
  attributes: {
    number: { type: Number },
    image: { type: String },
    imageAlt: { type: String },
  },
  transform(node, config) {
    const attrs = node.transformAttributes(config)
    const children = node.transformChildren(config)
    return new Tag('Chapter', attrs, children)
  },
}

export const split: Schema = {
  render: 'Split',
  attributes: {
    image: { type: String, required: true },
    imageAlt: { type: String },
    side: { type: String, default: 'right', matches: ['left', 'right'] },
  },
  transform(node, config) {
    const attrs = node.transformAttributes(config)
    const children = node.transformChildren(config)
    return new Tag('Split', attrs, children)
  },
}

export const callout: Schema = {
  render: 'Callout',
  attributes: {
    type: { type: String, default: 'note', matches: ['note', 'important', 'warning'] },
  },
  transform(node, config) {
    const attrs = node.transformAttributes(config)
    const children = node.transformChildren(config)
    return new Tag('Callout', attrs, children)
  },
}

export const tags = { cover, chapter, split, callout }
