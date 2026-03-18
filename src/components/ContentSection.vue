<script setup lang="ts">
defineProps<{
  id?: string
}>()
</script>

<template>
  <section class="content-section" :id="id">
    <div class="content-section__inner">
      <slot />
    </div>
  </section>
</template>

<style scoped lang="scss">
.content-section {
  padding: 3rem 1.5rem;

  &__inner {
    max-width: 720px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  @media (max-width: 640px) {
    padding: 2rem 1rem;
  }
}
</style>
