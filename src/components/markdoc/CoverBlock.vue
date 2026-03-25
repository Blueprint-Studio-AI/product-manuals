<script setup lang="ts">
defineProps<{
  image: string
  imageAlt?: string
  logo?: string
}>()
</script>

<template>
  <section class="cover">
    <div class="cover__content">
      <div class="cover__text">
        <slot />
      </div>
      <img
        :src="image"
        :alt="imageAlt || 'Cover image'"
        class="cover__image"
      />
      <img
        v-if="logo"
        :src="logo"
        alt="Logo"
        class="cover__logo"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
.cover {
  background-color: var(--c-charcoal);
  padding: 4rem 2rem;
  min-height: 80vh;
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
    gap: 2rem;
  }

  &__text {
    :deep(h1) {
      font-size: clamp(2.5rem, 8vw, 4rem);
      font-weight: 300;
      letter-spacing: -0.02em;
      color: var(--c-text-on-dark);
    }

    :deep(p) {
      font-size: 1.125rem;
      color: var(--c-gray400);
      margin-top: 0.5rem;
    }
  }

  &__image {
    max-height: 400px;
    width: auto;
    object-fit: contain;
  }

  &__logo {
    height: 20px;
    width: auto;
    margin-top: 1rem;
    opacity: 0.7;
    filter: brightness(0) invert(1);
  }
}
</style>
