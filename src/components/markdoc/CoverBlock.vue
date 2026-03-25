<script setup lang="ts">
defineProps<{
  image: string
  imageAlt?: string
  logo?: string
}>()
</script>

<template>
  <section class="cover">
    <img
      :src="image"
      :alt="imageAlt || 'Cover image'"
      class="cover__image"
    />
  </section>
</template>

<style scoped lang="scss">
.cover {
  width: 100%;
  background-color: var(--c-charcoal);
  display: flex;
  justify-content: center;

  &__image {
    width: 100%;
    max-width: 1920px;
    height: auto;
    display: block;
  }
}
</style>
