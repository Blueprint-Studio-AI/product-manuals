<script setup lang="ts">
defineProps<{
  number?: number
  image?: string
  imageAlt?: string
}>()
</script>

<template>
  <section class="chapter">
    <div class="chapter__anchor">
      <slot />
    </div>
    <img
      v-if="image"
      :src="image"
      :alt="imageAlt || 'Chapter image'"
      class="chapter__image"
    />
  </section>
</template>

<style scoped lang="scss">
.chapter {
  width: 100%;
  background-color: var(--c-charcoal);
  display: flex;
  justify-content: center;

  &__anchor {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  &__image {
    width: 100%;
    max-width: 1920px;
    height: auto;
    display: block;
  }
}
</style>
