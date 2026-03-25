<script setup lang="ts">
defineProps<{
  type?: 'note' | 'important' | 'warning'
}>()

const labels: Record<string, string> = {
  note: 'Note',
  important: 'Important',
  warning: 'Warning',
}
</script>

<template>
  <div class="callout-wrap">
    <div class="callout" :class="`callout--${type || 'note'}`">
      <div class="callout__label">{{ labels[type || 'note'] }}</div>
      <div class="callout__body">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.callout-wrap {
  margin: 0.75rem 0;
}

.callout {
  padding: 0.75rem 1rem;
  border-radius: 4px;
  font-size: 0.875rem;
  line-height: 1.6;

  &__label {
    font-weight: 600;
    margin-bottom: 0.25rem;
  }

  &__body {
    :deep(p) {
      font-size: inherit;
      color: inherit;
      margin-bottom: 0;
      padding-left: 0;
    }
  }

  &--note {
    background-color: var(--c-gray100);
    border-left: 3px solid var(--c-gray300);
    color: var(--c-charcoal);
  }

  &--important {
    background-color: var(--c-orange50);
    border-left: 3px solid var(--c-orange300);
    color: var(--c-charcoal);
  }

  &--warning {
    background-color: #FEF3F2;
    border-left: 3px solid #F04438;
    color: var(--c-charcoal);
  }
}
</style>
