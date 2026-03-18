<script setup lang="ts">
defineProps<{
  title?: string
  subtitle?: string
}>()
</script>

<template>
  <div class="card">
    <div v-if="title" class="card__header">
      <h3 class="card__title">{{ title }}</h3>
      <p v-if="subtitle" class="card__subtitle">{{ subtitle }}</p>
    </div>
    <div class="card__body">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  background-color: var(--c-gray100);
  border: 1px solid var(--c-gray-border);
  border-radius: 6px;
  overflow: hidden;

  &__header {
    padding: 1rem 1.25rem 0;
  }

  &__title {
    font-size: 1rem;
    font-weight: 600;
    color: var(--c-charcoal);
  }

  &__subtitle {
    font-size: 0.8125rem;
    color: var(--c-gray700);
    margin-top: 0.25rem;
  }

  &__body {
    padding: 1rem 1.25rem 1.25rem;
  }
}
</style>
