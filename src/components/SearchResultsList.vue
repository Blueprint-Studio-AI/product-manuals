<script setup lang="ts">
import type { SearchResult } from '@/composables/useSearch'

defineProps<{
  results: SearchResult[]
  query: string
}>()

const emit = defineEmits<{
  select: [id: string]
}>()
</script>

<template>
  <div class="search-results">
    <div v-if="results.length === 0" class="search-results__empty">
      No results found for "{{ query }}"
    </div>
    <ul v-else class="search-results__list">
      <li
        v-for="result in results"
        :key="result.id"
        class="search-results__item"
        @mousedown.prevent="emit('select', result.id)"
        @click="emit('select', result.id)"
      >
        <span class="search-results__title">{{ result.title }}</span>
        <span class="search-results__excerpt">{{ result.excerpt }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.search-results {
  &__empty {
    padding: 1.5rem 1rem;
    text-align: center;
    color: var(--c-gray500);
    font-size: 0.9375rem;
  }

  &__list {
    list-style: none;
    margin: 0;
    padding: 0.5rem 0;
  }

  &__item {
    padding: 0.75rem 1rem;
    cursor: pointer;
    border-bottom: 1px solid var(--c-gray100);
    transition: background-color 0.1s ease;

    &:last-child {
      border-bottom: none;
    }

    &:hover,
    &:active {
      background-color: rgba(74, 224, 167, 0.08);
    }
  }

  &__title {
    display: block;
    font-size: 0.9375rem;
    font-weight: 600;
    color: var(--c-text-primary);
    margin-bottom: 0.25rem;
  }

  &__excerpt {
    display: block;
    font-size: 0.875rem;
    color: var(--c-gray600);
    line-height: 1.5;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
</style>
