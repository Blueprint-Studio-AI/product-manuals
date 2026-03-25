<script setup lang="ts">
</script>

<template>
  <header class="manual-header">
    <span class="manual-header__title">AgeVisor 3 User Manual</span>
    <span class="manual-header__brand">
      <strong>IDscanner.com</strong> <span class="manual-header__by">BY</span> TOKENWORKS
    </span>
  </header>
</template>

<style scoped lang="scss">
.manual-header {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1.5rem;
  background-color: var(--c-frost);
  border-bottom: 1px solid var(--c-gray-border);
  backdrop-filter: blur(12px);

  &__title {
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--c-charcoal);
    letter-spacing: 0.02em;
  }

  &__brand {
    font-size: 0.6875rem;
    font-weight: 600;
    color: var(--c-charcoal);
    letter-spacing: 0.04em;
  }

  &__by {
    font-weight: 400;
    font-size: 0.5625rem;
    opacity: 0.6;
    margin: 0 0.125rem;
  }

  @media (max-width: 640px) {
    padding: 0.625rem 1rem;

    &__brand {
      font-size: 0.5625rem;
    }
  }
}
</style>
