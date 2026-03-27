<script lang="ts">
import { defineComponent, h, ref } from 'vue'
import Markdoc from '@markdoc/markdoc'
import { tags } from '@/markdoc/schema'
import { renderMarkdoc } from '@/markdoc/renderer'
import { extractToc } from '@/markdoc/extract-toc'
import { useScrollSpy } from '@/composables/useScrollSpy'
import { initSearch } from '@/composables/useSearch'
import NavBar from '@/components/NavBar.vue'
import TocSidebar from '@/components/TocSidebar.vue'
import ScrollBar from '@/components/ScrollBar.vue'
import CoverBlock from '@/components/markdoc/CoverBlock.vue'
import ChapterBlock from '@/components/markdoc/ChapterBlock.vue'
import SplitBlock from '@/components/markdoc/SplitBlock.vue'
import CalloutBlock from '@/components/markdoc/CalloutBlock.vue'
import TocEntry from '@/components/markdoc/TocEntry.vue'
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
  TocEntry: TocEntry,
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

// Initialize search with raw markdown content
initSearch(raw)

export default defineComponent({
  name: 'HomePage',
  components: { NavBar, TocSidebar, ScrollBar },
  setup() {
    const { activeId } = useScrollSpy(allIds)
    const tocOpen = ref(window.innerWidth > 1000)

    function toggleToc() {
      tocOpen.value = !tocOpen.value
    }

    return () => {
      const rendered = renderMarkdoc(content, components)
      const children = rendered ? (Array.isArray(rendered) ? rendered : [rendered]) : []

      return h('div', { class: ['layout', { 'layout--toc-open': tocOpen.value }] }, [
        h(NavBar, { tocOpen: tocOpen.value, onToggleToc: toggleToc }),
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

    @media (max-width: 1000px) {
      .manual-area {
        margin-left: 0;
      }
    }

    // Lock body scroll on mobile when TOC is open
    @media (max-width: 1000px) {
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

  // Chapter content wrapper: 2-column grid system
  .chapter-content {
    max-width: 900px;
    margin: 3rem auto;
    padding: 0 100px;

    // 2-column grid: 56px left, remaining right
    display: grid;
    grid-template-columns: 56px 1fr;
    gap: 0;

    // All direct children go to right column by default
    > * {
      grid-column: 2;
    }

    // h2 styling - shared by both section number and title
    > h2,
    > h2.section-number {
      font-family: var(--font-heading);
      font-size: 1.75rem;
      font-weight: 400;
      padding: 16px 0 1rem 0;
      margin: 0 0 1rem 0;
      border-bottom: 1px solid var(--c-gray200);
    }

    // Section number in left column
    > h2.section-number {
      grid-column: 1;
    }

    // Section title in right column
    > h2:not(.section-number) {
      grid-column: 2;
    }
  }

  // Heading styles
  h2 {
    scroll-margin-top: 80px;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-top: 2rem;
    margin-bottom: 0.75rem;
    padding: 8px 0;
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
    padding-left: 1.25rem;
    font-size: 0.9375rem;
    line-height: 1.7;
    color: var(--c-gray700);
    margin-bottom: 0.75rem;

    li {
      margin-bottom: 0.375rem;
    }
  }

  ul {
    list-style: disc;
  }

  ol {
    list-style: decimal;
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

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  // Mobile: single column layout
  @media (max-width: 1000px) {
    .chapter-content {
      padding: 0 1rem;
      display: block;
      margin: 2rem auto;

      > h2 {
        display: inline;
        font-size: 1.5rem;
        border-bottom: none;
        padding-bottom: 0;
        margin-bottom: 0;
      }

      > h2.section-number {
        margin-right: 0.5rem;
      }

      // Add border under the section title h2
      > h2:not(.section-number)::after {
        content: '';
        display: block;
        border-bottom: 1px solid var(--c-gray200);
        padding-bottom: 0.5rem;
        margin-bottom: 1rem;
      }
    }
  }
}

// Cover and chapter break out of padding, full viewport width
.manual .cover,
.manual .chapter {
  position: relative;
  margin: 0 -2rem;
  width: calc(100% + 4rem);
}

.manual .chapter {
  margin-top: 4rem;
}
</style>
