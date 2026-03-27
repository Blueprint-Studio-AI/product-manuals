<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import MenuOpenIcon from '@/components/icons/MenuOpenIcon.vue'
import SearchIcon from '@/components/icons/SearchIcon.vue'
import CloseIcon from '@/components/icons/CloseIcon.vue'
import ArrowLeftIcon from '@/components/icons/ArrowLeftIcon.vue'
import SearchResultsList from '@/components/SearchResultsList.vue'
import { useSearch } from '@/composables/useSearch'

defineProps<{
  tocOpen: boolean
}>()

const emit = defineEmits<{
  toggleToc: []
}>()

const { query, results, isOpen, isFocused, setFocused, navigateToResult, closeSearch } = useSearch()

const searchInputRef = ref<HTMLInputElement | null>(null)
const mobileSearchInputRef = ref<HTMLInputElement | null>(null)
const searchContainerRef = ref<HTMLDivElement | null>(null)
const mobileSearchOpen = ref(false)

function handleClickOutside(e: MouseEvent) {
  if (searchContainerRef.value && !searchContainerRef.value.contains(e.target as Node)) {
    closeSearch()
    setFocused(false)
  }
}

function handleResultClick(id: string) {
  navigateToResult(id)
  searchInputRef.value?.blur()
  mobileSearchInputRef.value?.blur()
  closeMobileSearch()
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    if (mobileSearchOpen.value) {
      closeMobileSearch()
    } else {
      closeSearch()
      setFocused(false)
      searchInputRef.value?.blur()
    }
  }
}

function clearSearch() {
  query.value = ''
  searchInputRef.value?.focus()
}

function clearMobileSearch() {
  query.value = ''
  mobileSearchInputRef.value?.focus()
}

function openMobileSearch() {
  mobileSearchOpen.value = true
  nextTick(() => {
    mobileSearchInputRef.value?.focus()
  })
}

function closeMobileSearch() {
  mobileSearchOpen.value = false
  query.value = ''
  closeSearch()
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <nav class="navbar">
    <div class="navbar__left">
      <img src="/logo/Logo_Dark.png" alt="IDscanner.com by TokenWorks" class="navbar__logo" />
    </div>

    <!-- Desktop Search Bar -->
    <div ref="searchContainerRef" class="search search--desktop" :class="{ 'search--focused': isFocused }">
      <SearchIcon class="search__icon" />
      <input
        ref="searchInputRef"
        v-model="query"
        type="text"
        class="search__input"
        placeholder="Search"
        @focus="setFocused(true)"
        @blur="setFocused(false)"
      />
      <button
        v-if="query.length > 0"
        class="search__clear"
        @mousedown.prevent="clearSearch"
        aria-label="Clear search"
      >
        <CloseIcon />
      </button>

      <!-- Search Results Dropdown -->
      <Transition name="dropdown">
        <div v-if="isOpen && query.length >= 2" class="search__dropdown">
          <SearchResultsList
            :results="results"
            :query="query"
            @select="handleResultClick"
          />
        </div>
      </Transition>
    </div>

    <!-- Mobile Search Button -->
    <button class="search-btn--mobile" @click="openMobileSearch" aria-label="Open search">
      <SearchIcon />
    </button>

    <div class="navbar__right"></div>
  </nav>

  <!-- Mobile Search Overlay (covers entire screen including navbar) -->
  <Transition name="mobile-search">
    <div v-if="mobileSearchOpen" class="mobile-search-overlay">
      <!-- Dark backdrop -->
      <div class="mobile-search-overlay__backdrop" @click="closeMobileSearch" />

      <!-- Search container -->
      <div class="mobile-search-overlay__container">
        <!-- Search row with back button and search bar -->
        <div class="mobile-search-overlay__row">
          <!-- Back button -->
          <button class="mobile-search-overlay__back" @click="closeMobileSearch" aria-label="Close search">
            <ArrowLeftIcon />
          </button>

          <!-- Search Bar -->
          <div class="mobile-search-overlay__bar">
            <SearchIcon class="search__icon" />
          <input
            ref="mobileSearchInputRef"
            v-model="query"
            type="text"
            class="search__input"
            placeholder="Search"
          />
          <button
            v-if="query.length > 0"
            class="search__clear"
            @click="clearMobileSearch"
            aria-label="Clear search"
          >
            <CloseIcon />
          </button>
          </div>
        </div>

        <!-- Search Results (only show when there's a query) -->
        <div v-if="query.length >= 2" class="mobile-search-overlay__content">
          <SearchResultsList
            :results="results"
            :query="query"
            @select="handleResultClick"
          />
        </div>
      </div>
    </div>
  </Transition>

  <!-- Floating TOC toggle (visible when sidebar is closed) -->
  <Transition name="fab">
    <button
      v-if="!tocOpen"
      class="toc-fab"
      @click="emit('toggleToc')"
      aria-label="Open table of contents"
    >
      <MenuOpenIcon />
    </button>
  </Transition>
</template>

<style scoped lang="scss">
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: 56px;
  background: var(--c-frost);
  border-bottom: 1px solid var(--c-border-dark);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;

  &__left {
    flex: 1;
    display: flex;
    align-items: center;
  }

  &__logo {
    height: 32px;
    width: auto;
  }

  &__right {
    flex: 1;
  }
}

// Search bar base styles
.search, .mobile-search-overlay__bar {
  position: relative;
  display: flex;
  width: 360px;
  padding: 6px 6px 6px 20px;
  align-items: center;
  gap: 6px;
  border-radius: 999px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: #fff;
  box-shadow: 0 0 2px -1.172px rgba(0, 0, 0, 0.08);
  transition: border-color 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    border-color: rgba(0, 0, 0, 0.15);
  }
}

// Desktop Search bar (hidden on mobile)
.search--desktop {
  @media (max-width: 1000px) {
    display: none !important;
  }
}

// Mobile Search button (hidden on desktop)
.search-btn--mobile {
  display: none;

  @media (max-width: 1000px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    color: var(--c-text-primary);
    transition: background-color 0.15s ease;

    svg {
      width: 18px;
      height: 18px;
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }
}

.search--focused, .mobile-search-overlay__bar:focus-within {
  border-color: var(--c-primary500);
  box-shadow: 0 0 0 3px rgba(74, 224, 167, 0.15);
}

.search__icon {
  flex-shrink: 0;
  color: var(--c-gray400);
  transition: color 0.15s ease;
}

.search--focused .search__icon,
.mobile-search-overlay__bar:focus-within .search__icon {
  color: var(--c-primary600);
}

.search__input {
  flex: 1;
  border: none;
  background: transparent;
  font-size: 0.875rem;
  color: var(--c-text-primary);
  outline: none;
  min-width: 0;

  &::placeholder {
    color: var(--c-gray400);
  }
}

.search__clear {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  color: var(--c-gray400);
  transition: background-color 0.15s ease, color 0.15s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    color: var(--c-gray600);
  }
}

.search__dropdown {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  background: #fff;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
  max-height: 400px;
  overflow-y: auto;
  z-index: 110;
}

// Mobile Search Overlay (full screen, covers navbar)
.mobile-search-overlay {
  position: fixed;
  inset: 0;
  z-index: 300;

  @media (min-width: 1001px) {
    display: none !important;
  }

  &__backdrop {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
  }

  &__container {
    position: relative;
    z-index: 5;
    display: flex;
    flex-direction: column;
    margin-top: 4rem;
    max-height: calc(100vh - 4rem);
  }

  &__row {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0 1rem;
  }

  &__back {
    flex-shrink: 0;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #fff;
    color: var(--c-text-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.15s ease;

    &:hover {
      background: var(--c-gray100);
    }
  }

  &__bar {
    flex: 1;
    margin: 0;
    width: auto;
  }

  &__content {
    flex: 1;
    overflow-y: auto;
    // Align with search bar: 1rem padding + 36px back button + 0.5rem gap = ~52px left
    margin: 1rem 1rem 0 calc(1rem + 36px + 0.5rem);
    background: var(--c-frost);
    border-radius: 12px;
  }
}

// Dropdown transition
.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

// Mobile search overlay transition
.mobile-search-enter-active,
.mobile-search-leave-active {
  transition: opacity 0.25s ease;
}

.mobile-search-enter-from,
.mobile-search-leave-to {
  opacity: 0;
}

// Floating action button for opening TOC
.toc-fab {
  position: fixed;
  top: 68px;
  left: 12px;
  z-index: 90;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--c-frost);
  color: var(--c-text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: background 0.15s ease, transform 0.15s ease;

  svg {
    width: 20px;
    height: 20px;
    transform: scaleX(-1);
  }

  &:hover {
    background: var(--c-gray100);
    transform: scale(1.05);
  }
}

// FAB enter/leave transition
.fab-enter-active,
.fab-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.fab-enter-from,
.fab-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

@media (max-width: 1000px) {
  .navbar {
    padding: 0 1rem;

    &__logo {
      height: 26px;
    }

    &__right {
      display: none;
    }
  }

  .toc-fab {
    top: 64px;
    left: 8px;
    width: 36px;
    height: 36px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
}
</style>
