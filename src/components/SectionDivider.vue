<script setup lang="ts">
defineProps<{
  number: number
  title: string
  image?: string
  imageAlt?: string
}>()
</script>

<template>
  <section class="divider" :id="`section-${number}`">
    <div class="divider__content">
      <h1 class="divider__heading">
        <span class="divider__number">{{ number }}.</span> {{ title }}
      </h1>
      <img
        v-if="image"
        :src="image"
        :alt="imageAlt || title"
        class="divider__image"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
.divider {
  background-color: var(--c-charcoal);
  color: var(--c-frost);
  padding: 4rem 1.5rem;
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;

  &__content {
    max-width: 720px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 3rem;
  }

  &__heading {
    font-size: clamp(2rem, 6vw, 3.5rem);
    font-weight: 300;
    color: var(--c-frost);
  }

  &__number {
    font-weight: 300;
  }

  &__image {
    max-width: 320px;
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  @media (max-width: 640px) {
    padding: 3rem 1rem;
    min-height: 40vh;

    &__image {
      max-width: 240px;
    }
  }
}
</style>
