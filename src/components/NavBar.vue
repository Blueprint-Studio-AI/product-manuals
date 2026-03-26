<script setup lang="ts">
import MenuOpenIcon from '@/components/icons/MenuOpenIcon.vue'

defineProps<{
  title?: string
  tocOpen: boolean
}>()

const emit = defineEmits<{
  toggleToc: []
}>()
</script>

<template>
  <nav class="navbar">
    <div class="navbar__left">
      <img src="/logo/Logo_Dark.png" alt="IDscanner.com by TokenWorks" class="navbar__logo" />
    </div>
    <span class="navbar__title">{{ title || 'User Manual' }}</span>
    <a href="https://www.idscanner.com/support" target="_blank" class="navbar__link">
      Support
    </a>
  </nav>

  <!-- Floating TOC toggle (visible when sidebar is closed) -->
  <Transition name="fab">
    <button
      v-if="!tocOpen"
      class="toc-fab"
      @click="emit('toggleToc')"
      aria-label="Open table of contents"
    >
      <MenuOpenIcon />
    </button>
  </Transition>
</template>

<style scoped lang="scss">
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: 56px;
  background: var(--c-frost);
  border-bottom: 1px solid var(--c-border-dark);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;

  &__left {
    flex: 1;
    display: flex;
    align-items: center;
  }

  &__logo {
    height: 24px;
    width: auto;
  }

  &__title {
    flex: 1;
    text-align: center;
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--c-text-primary);
    letter-spacing: -0.02em;
  }

  &__link {
    flex: 1;
    text-align: right;
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--c-text-primary);
    text-decoration: none;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }
}

// Floating action button for opening TOC
.toc-fab {
  position: fixed;
  top: 68px; // below navbar + gap
  left: 12px;
  z-index: 90;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--c-frost);
  color: var(--c-text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: background 0.15s ease, transform 0.15s ease;

  svg {
    width: 20px;
    height: 20px;
    transform: scaleX(-1);
  }

  &:hover {
    background: var(--c-gray100);
    transform: scale(1.05);
  }
}

// FAB enter/leave transition
.fab-enter-active,
.fab-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.fab-enter-from,
.fab-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

@media (max-width: 768px) {
  .navbar {
    padding: 0 1rem;

    &__logo {
      height: 20px;
    }

    &__title {
      font-size: 0.8125rem;
    }
  }

  .toc-fab {
    top: 64px;
    left: 8px;
    width: 36px;
    height: 36px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
}
</style>
