<script setup lang="ts">
interface TocEntry {
  label: string
  anchor: string
  children?: TocEntry[]
}

defineProps<{
  sections: {
    title: string
    number: number
    entries: TocEntry[]
  }[]
}>()
</script>

<template>
  <nav class="toc">
    <h2 class="toc__title">Table of Contents</h2>
    <div class="toc__sections">
      <div v-for="section in sections" :key="section.number" class="toc__section">
        <a :href="`#section-${section.number}`" class="toc__section-heading">
          {{ section.number }}. {{ section.title }}
        </a>
        <ol class="toc__list">
          <li v-for="entry in section.entries" :key="entry.anchor" class="toc__entry">
            <a :href="`#${entry.anchor}`" class="toc__link">
              {{ entry.label }}
            </a>
            <ol v-if="entry.children?.length" class="toc__sublist">
              <li v-for="child in entry.children" :key="child.anchor" class="toc__subentry">
                <a :href="`#${child.anchor}`" class="toc__link">
                  {{ child.label }}
                </a>
              </li>
            </ol>
          </li>
        </ol>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.toc {
  max-width: 720px;
  margin: 0 auto;
  padding: 3rem 1.5rem;

  &__title {
    font-size: clamp(1.5rem, 4vw, 2.25rem);
    font-weight: 300;
    margin-bottom: 2rem;
  }

  &__sections {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  &__section {
    background-color: var(--c-gray100);
    border: 1px solid var(--c-gray-border);
    border-radius: 6px;
    overflow: hidden;
  }

  &__section-heading {
    display: block;
    padding: 0.875rem 1.25rem;
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--c-charcoal);
    text-decoration: none;
    border-bottom: 2px solid var(--c-gray-border);
    transition: background-color 0.15s;

    &:hover {
      background-color: var(--c-gray200);
    }
  }

  &__list {
    list-style: lower-alpha;
    padding: 0.75rem 1.25rem 0.75rem 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  &__entry {
    font-size: 0.875rem;
    color: var(--c-charcoal);
  }

  &__sublist {
    list-style: lower-roman;
    padding-left: 1.5rem;
    margin-top: 0.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
  }

  &__subentry {
    font-size: 0.8125rem;
    color: var(--c-gray700);
  }

  &__link {
    color: inherit;
    text-decoration: none;
    transition: color 0.15s;

    &:hover {
      color: var(--c-green600);
      text-decoration: underline;
    }
  }

  @media (max-width: 640px) {
    padding: 2rem 1rem;
  }
}
</style>
