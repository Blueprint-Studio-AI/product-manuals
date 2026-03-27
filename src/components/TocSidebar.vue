<script setup lang="ts">
import { ref } from 'vue'
import type { TocEntry } from '@/markdoc/extract-toc'
import MenuOpenIcon from '@/components/icons/MenuOpenIcon.vue'

defineProps<{
  entries: TocEntry[]
  activeId: string
  open: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

// Initialize with Usage and Settings collapsed, Hardware open
const collapsed = ref<Set<string>>(new Set(['usage', 'settings']))

function toggle(id: string) {
  if (collapsed.value.has(id)) {
    collapsed.value.delete(id)
  } else {
    collapsed.value.add(id)
  }
  collapsed.value = new Set(collapsed.value)
}

const NAV_HEIGHT = 56
const SCROLL_PADDING = 0

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (!el) return

  // Close TOC on mobile first so scroll lock is removed before scrolling
  if (window.innerWidth <= 1000) {
    emit('close')
  }

  // Find scroll target: check for parent .chapter/.cover, or preceding sibling .chapter
  let target: Element = el
  const parent = el.closest('.chapter, .cover')
  if (parent) {
    target = parent
  } else {
    // Check if previous sibling is a .chapter (for chapter headings rendered outside the section)
    const prevSibling = el.previousElementSibling
    if (prevSibling?.classList.contains('chapter')) {
      target = prevSibling
    }
  }

  const top = target.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT - SCROLL_PADDING

  requestAnimationFrame(() => {
    window.scrollTo({ top, behavior: 'smooth' })
  })
}
</script>

<template>
  <Transition name="backdrop">
    <div v-if="open" class="toc-backdrop" @click="emit('close')" />
  </Transition>
  <aside class="toc" :class="{ 'toc--open': open }">
    <div class="toc__header">
      <span class="toc__label">Table of Contents</span>
      <button class="toc__close" @click="emit('close')" aria-label="Close table of contents">
        <MenuOpenIcon />
      </button>
    </div>
    <ul class="toc__list">
      <li
        v-for="entry in entries"
        :key="entry.id"
        class="toc__item"
      >
        <div class="toc__row" :class="{ 'toc__row--active': activeId === entry.id }" @click="scrollTo(entry.id)">
          <button
            v-if="entry.children.length"
            class="toc__toggle"
            :class="{ 'toc__toggle--collapsed': collapsed.has(entry.id) }"
            @click.stop="toggle(entry.id)"
          >
            <svg width="12" height="12" viewBox="0 0 12 12">
              <path d="M4 2l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <span v-else class="toc__toggle-spacer" />
          <a
            class="toc__link"
            :class="{ 'toc__link--active': activeId === entry.id }"
          >
            {{ entry.title }}
          </a>
        </div>

        <ul
          v-if="entry.children.length && !collapsed.has(entry.id)"
          class="toc__children"
        >
          <li
            v-for="child in entry.children"
            :key="child.id"
            class="toc__item"
          >
            <div class="toc__row" :class="{ 'toc__row--active': activeId === child.id }" @click="scrollTo(child.id)">
              <span class="toc__toggle-spacer" />
              <a
                class="toc__link toc__link--sub"
                :class="{ 'toc__link--active': activeId === child.id, 'toc__link--h3': child.level === 3 }"
              >
                {{ child.title }}
              </a>
            </div>

          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<style scoped lang="scss">
.toc {
  position: fixed;
  top: 56px;
  left: 0;
  width: 275px;
  height: calc(100vh - 56px);
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
  background: var(--c-frost);
  border-right: 1px solid var(--c-border-dark);
  padding: 1.25rem 0;
  z-index: 50;
  transform: translateX(-100%);
  transition: transform 0.25s ease;

  &--open {
    transform: translateX(0);
  }

  &__header {
    padding: 0 1rem 0.75rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__label {
    font-size: 0.8125rem;
    font-weight: 500;
    color: var(--c-text-primary);
    letter-spacing: -0.02em;
  }

  &__close {
    color: var(--c-text-primary);
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.15s ease;

    svg {
      width: 20px;
      height: 20px;
    }

    &:hover {
      opacity: 1;
    }
  }

  &__list, &__children {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  &__children {
    padding-left: 0.75rem;
  }

  &__item {
    margin: 0;
  }

  &__row {
    display: flex;
    align-items: center;
    padding: 0.3rem 1.5rem 0.3rem 0.75rem;
    border-left: 2px solid transparent;
    transition: border-color 0.15s ease, background-color 0.15s ease;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.03);

      .toc__link {
        color: var(--c-primary700);
      }
    }

    &--active {
      border-left-color: var(--c-primary600);
      background-color: rgba(74, 224, 167, 0.12);
    }
  }

  &__toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    color: var(--c-gray400);
    transition: transform 0.15s ease, color 0.15s ease;

    svg {
      transform: rotate(90deg);
      transition: transform 0.15s ease;
    }

    &--collapsed svg {
      transform: rotate(0deg);
    }

    &:hover {
      color: var(--c-text-primary);
    }
  }

  &__toggle-spacer {
    width: 20px;
    flex-shrink: 0;
  }

  &__link {
    font-size: 0.8125rem;
    font-weight: 500;
    color: var(--c-text-primary);
    text-decoration: none;
    cursor: pointer;
    line-height: 1.4;
    padding: 0.125rem 0;
    letter-spacing: -0.02em;
    transition: color 0.15s ease;

    &--active {
      color: var(--c-primary700);
    }

    &--sub {
      font-weight: 300;
      opacity: 0.85;

      &.toc__link--active {
        opacity: 1;
        font-weight: 500;
      }
    }

    &--h3 {
      padding-left: 16px;
    }
  }

  @media (max-width: 1000px) {
    width: 220px;
  }
}

// Mobile-only backdrop overlay
.toc-backdrop {
  display: none;

  @media (max-width: 1000px) {
    display: block;
    position: fixed;
    inset: 56px 0 0 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 40;
  }
}

.backdrop-enter-active,
.backdrop-leave-active {
  transition: opacity 0.25s ease;
}

.backdrop-enter-from,
.backdrop-leave-to {
  opacity: 0;
}
</style>
