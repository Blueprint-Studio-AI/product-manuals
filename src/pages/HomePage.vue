<script lang="ts">
import { defineComponent, h, ref } from 'vue'
import Markdoc from '@markdoc/markdoc'
import { tags } from '@/markdoc/schema'
import { renderMarkdoc } from '@/markdoc/renderer'
import { extractToc } from '@/markdoc/extract-toc'
import { useScrollSpy } from '@/composables/useScrollSpy'
import NavBar from '@/components/NavBar.vue'
import TocSidebar from '@/components/TocSidebar.vue'
import ScrollBar from '@/components/ScrollBar.vue'
import CoverBlock from '@/components/markdoc/CoverBlock.vue'
import ChapterBlock from '@/components/markdoc/ChapterBlock.vue'
import SplitBlock from '@/components/markdoc/SplitBlock.vue'
import CalloutBlock from '@/components/markdoc/CalloutBlock.vue'
import spine from '../../content/idvisor3.md?raw'
import chHardware from '../../content/chapters/hardware.md?raw'
import chUsage from '../../content/chapters/usage.md?raw'
import chSettings from '../../content/chapters/settings.md?raw'

const raw = [spine, chHardware, chUsage, chSettings].join('\n\n')

const components = {
  Cover: CoverBlock,
  Chapter: ChapterBlock,
  Split: SplitBlock,
  Callout: CalloutBlock,
}

// Parse once
const ast = Markdoc.parse(raw)
const content = Markdoc.transform(ast, { tags })
const tocEntries = extractToc(ast)

function flattenIds(entries: typeof tocEntries): string[] {
  const ids: string[] = []
  for (const e of entries) {
    ids.push(e.id)
    ids.push(...flattenIds(e.children))
  }
  return ids
}

const allIds = flattenIds(tocEntries)

export default defineComponent({
  name: 'HomePage',
  components: { NavBar, TocSidebar, ScrollBar },
  setup() {
    const { activeId } = useScrollSpy(allIds)
    const tocOpen = ref(window.innerWidth > 768)

    function toggleToc() {
      tocOpen.value = !tocOpen.value
    }

    return () => {
      const rendered = renderMarkdoc(content, components)
      const children = rendered ? (Array.isArray(rendered) ? rendered : [rendered]) : []

      return h('div', { class: ['layout', { 'layout--toc-open': tocOpen.value }] }, [
        h(NavBar, { title: 'IDVisor 3 User Manual', tocOpen: tocOpen.value, onToggleToc: toggleToc }),
        h(TocSidebar, { entries: tocEntries, activeId: activeId.value, open: tocOpen.value, onClose: toggleToc }),
        h('div', { class: 'manual-area' }, [
          h('main', { class: 'manual' }, children),
        ]),
        h(ScrollBar),
      ])
    }
  },
})
</script>

<style lang="scss">
.layout {
  padding-top: 56px;
  &--toc-open {
    .manual-area {
      margin-left: 275px;
    }

    @media (max-width: 768px) {
      .manual-area {
        margin-left: 0;
      }
    }

    // Lock body scroll on mobile when TOC is open
    @media (max-width: 768px) {
      overflow: hidden;
      height: 100vh;
    }

  }

}

.manual-area {
  transition: margin-left 0.25s ease;
  overflow-x: clip;
}

.manual {
  max-width: 100%;
  width: 100%;
  padding: 0 2rem 4rem;

  // Constrain content blocks within a centered column
  > article > *:not(.cover):not(.chapter) {
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
  }

  h2 {
    font-size: 1.75rem;
    font-weight: 400;
    margin-top: 3rem;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--c-gray200);
    scroll-margin-top: 80px;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-top: 2rem;
    margin-bottom: 0.75rem;
    scroll-margin-top: 80px;
  }

  h4 {
    font-size: 1rem;
    font-weight: 600;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
    scroll-margin-top: 80px;
  }

  p {
    font-size: 0.9375rem;
    line-height: 1.7;
    color: var(--c-gray700);
    margin-bottom: 0.75rem;
  }

  ul, ol {
    padding-left: 0;
    font-size: 0.9375rem;
    line-height: 1.7;
    color: var(--c-gray700);
    margin-bottom: 0.75rem;
    list-style-position: inside;

    li {
      margin-bottom: 0.375rem;
    }
  }

  ul {
    list-style: disc inside;
  }

  ol {
    list-style: decimal inside;
  }

  hr {
    border: none;
    border-top: 1px solid var(--c-gray200);
    margin: 2rem 0;
  }

  a {
    color: var(--c-blue500);
    text-decoration: underline;

    &:hover {
      color: var(--c-blue700);
    }
  }

  // Desktop indentation hierarchy
  @media (min-width: 769px) {
    h2 { padding-left: 12px; }
    h3 { padding-left: 24px; }
    h4, h5, h6, p, hr, .split, .callout-wrap {
      padding-left: 48px;
    }
    ul, ol { padding-left: 64px; }
  }

  // Tablet split the difference
  @media (min-width: 769px) and (max-width: 1024px) {
    h2 { padding-left: 6px; }
    h3 { padding-left: 12px; }
    h4, h5, h6, p, hr, .split, .callout-wrap {
      padding-left: 24px;
    }
    ul, ol { padding-left: 36px; }
  }
}

// Cover and chapter break out of padding, full viewport width
.manual .cover,
.manual .chapter {
  position: relative;
  margin-left: -2rem;
  margin-right: -2rem;
  width: calc(100% + 4rem);
  margin-bottom: 0;

  // Extend dark background edge-to-edge beyond container
  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: -100vw;
    right: -100vw;
    background: var(--c-charcoal);
    z-index: -1;
  }
}

.manual .cover {
  margin-top: 0;
}

.manual .chapter {
  margin-top: 64px;
}
</style>
