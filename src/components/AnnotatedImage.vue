<script setup lang="ts">
defineProps<{
  src: string
  alt: string
  caption?: string
}>()
</script>

<template>
  <figure class="annotated-image">
    <div class="annotated-image__frame">
      <img :src="src" :alt="alt" />
    </div>
    <figcaption v-if="caption" class="annotated-image__caption">
      {{ caption }}
    </figcaption>
  </figure>
</template>

<style scoped lang="scss">
.annotated-image {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;

  &__frame {
    background-color: var(--p-gray-100);
    border: 1px solid var(--p-gray-350);
    border-radius: 6px;
    padding: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      max-width: 280px;
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  }

  &__caption {
    font-size: 0.75rem;
    color: var(--p-gray-600);
    font-style: italic;
    text-align: center;
  }

  @media (max-width: 640px) {
    &__frame {
      padding: 1rem;

      img {
        max-width: 200px;
      }
    }
  }
}
</style>
