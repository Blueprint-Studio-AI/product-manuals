<script setup lang="ts">
defineProps<{
  type?: 'note' | 'important' | 'warning'
}>()
</script>

<template>
  <div class="callout" :class="`callout--${type || 'note'}`">
    <span class="callout__label">
      {{ type === 'important' ? 'Important' : type === 'warning' ? 'Warning' : 'Note' }}
    </span>
    <p class="callout__text"><slot /></p>
  </div>
</template>

<style scoped lang="scss">
.callout {
  padding: 0.75rem 1rem;
  border-radius: 4px;
  font-size: 0.8125rem;
  line-height: 1.5;

  &__label {
    font-weight: 600;
    font-size: 0.6875rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    display: block;
    margin-bottom: 0.25rem;
  }

  &__text {
    color: inherit;
    font-size: inherit;
  }

  &--note {
    background-color: var(--c-blue-light);
    border-left: 3px solid var(--c-blue-border);
    color: var(--c-charcoal);
  }

  &--important {
    background-color: var(--c-yellow-light);
    border-left: 3px solid var(--c-yellow-border);
    color: var(--c-charcoal);
  }

  &--warning {
    background-color: var(--c-red-light);
    border-left: 3px solid var(--c-red);
    color: var(--c-charcoal);
  }
}
</style>
