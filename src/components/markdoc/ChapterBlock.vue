<script setup lang="ts">
defineProps<{
  number?: number
  image?: string
  imageAlt?: string
}>()
</script>

<template>
  <section class="chapter">
    <div class="chapter__content">
      <span v-if="number" class="chapter__number">{{ String(number).padStart(2, '0') }}</span>
      <div class="chapter__text">
        <slot />
      </div>
      <img
        v-if="image"
        :src="image"
        :alt="imageAlt || 'Chapter image'"
        class="chapter__image"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
.chapter {
  background-color: var(--c-charcoal);
  color: var(--c-frost);
  padding: 4rem 2rem;
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;

  &__content {
    max-width: 900px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1.5rem;
  }

  &__number {
    font-size: 1.5rem;
    font-weight: 300;
    color: var(--c-gray400);
  }

  &__text {
    :deep(h2) {
      font-size: clamp(2rem, 6vw, 3rem);
      font-weight: 300;
      color: var(--c-frost);
    }
  }

  &__image {
    max-height: 400px;
    width: auto;
    object-fit: contain;
    margin-top: 1rem;
  }
}
</style>
