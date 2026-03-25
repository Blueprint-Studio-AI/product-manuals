<script setup lang="ts">
defineProps<{
  image: string
  imageAlt?: string
  side?: 'left' | 'right'
}>()
</script>

<template>
  <div class="split" :class="{ 'split--image-left': side === 'left' }">
    <div class="split__text">
      <slot />
    </div>
    <div class="split__image">
      <img :src="image" :alt="imageAlt || ''" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: start;
  padding: 1.5rem 0;

  &--image-left {
    .split__image {
      order: -1;
    }
  }

  &__text {
    :deep(p) {
      font-size: 0.9375rem;
      line-height: 1.7;
      color: var(--c-gray700);
      margin-bottom: 0.75rem;
    }

    :deep(ol), :deep(ul) {
      padding-left: 1.25rem;
      font-size: 0.9375rem;
      line-height: 1.7;
      color: var(--c-gray700);

      li {
        margin-bottom: 0.375rem;
      }
    }

    :deep(ol) {
      list-style: decimal;
    }

    :deep(ul) {
      list-style: disc;
    }

    :deep(a) {
      color: var(--c-blue500);
    }
  }

  &__image {
    img {
      width: 100%;
      height: auto;
      object-fit: contain;
      border-radius: 4px;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    &--image-left .split__image {
      order: 0;
    }
  }
}
</style>
