<script setup lang="ts">
</script>

<template>
  <footer class="manual-footer">
    <span><strong>Rev 1.0</strong> | April 2025</span>
    <span>AgeVisor 3 User Manual</span>
  </footer>
</template>

<style scoped lang="scss">
.manual-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  border-top: 1px solid var(--p-gray-350);
  font-size: 0.75rem;
  color: var(--p-gray-600);

  strong {
    font-weight: 600;
  }

  @media (max-width: 640px) {
    padding: 1rem;
    font-size: 0.625rem;
  }
}
</style>
