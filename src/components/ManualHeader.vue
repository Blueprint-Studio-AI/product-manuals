<script setup lang="ts">
</script>

<template>
  <header class="manual-header">
    <span class="manual-header__title">AgeVisor 3 User Manual</span>
    <img
      src="/images/logo-lockup-full-black.svg"
      alt="IDscanner.com by TokenWorks"
      class="manual-header__logo"
    />
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
  background: rgba(245, 250, 254, 0.72);
  border-bottom: 1px solid rgba(194, 202, 208, 0.4);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);

  &__title {
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--p-gray-900);
    letter-spacing: 0.02em;
  }

  &__logo {
    height: 14px;
    width: auto;
  }

  @media (max-width: 640px) {
    padding: 0.625rem 1rem;

    &__logo {
      height: 11px;
    }
  }
}
</style>
