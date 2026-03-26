<script setup lang="ts">
// This component renders nothing - it's only used for TOC extraction
defineProps<{
  title: string
  level?: number
}>()
</script>

<template>
  <!-- Intentionally empty - TOC-only entry -->
</template>
