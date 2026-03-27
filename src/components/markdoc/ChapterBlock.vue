<script setup lang="ts">
defineProps<{
  id?: string
  number?: number
  image?: string
  imageAlt?: string
}>()
</script>

<template>
  <section class="chapter" :id="id">
    <div class="chapter__image-wrap">
      <img
        v-if="image"
        :src="image"
        :alt="imageAlt || 'Chapter image'"
        class="chapter__image"
      />
    </div>
  </section>
  <slot />
</template>

<style scoped lang="scss">
.chapter {
  width: 100%;
  display: flex;
  flex-direction: column;

  &__image-wrap {
    position: relative;
    background-color: var(--c-charcoal);
    display: flex;
    justify-content: center;

    // Extend dark background edge-to-edge
    &::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: -100vw;
      right: -100vw;
      background: var(--c-charcoal);
      z-index: -1;
    }
  }

  &__image {
    width: 100%;
    max-width: 1920px;
    height: auto;
    display: block;
    margin: 0;
  }

}
</style>
