<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const thumb = ref<HTMLElement>()
const track = ref<HTMLElement>()
const visible = ref(false)
const thumbTop = ref(0)
const thumbHeight = ref(0)

let hideTimer: ReturnType<typeof setTimeout>
let dragging = false
let dragStartY = 0
let dragStartScroll = 0

function update() {
  const doc = document.documentElement
  const viewH = window.innerHeight
  const scrollH = doc.scrollHeight
  if (scrollH <= viewH) {
    visible.value = false
    return
  }
  const ratio = viewH / scrollH
  const trackH = track.value?.clientHeight ?? viewH
  thumbHeight.value = Math.max(ratio * trackH, 30)
  const scrollRatio = doc.scrollTop / (scrollH - viewH)
  thumbTop.value = scrollRatio * (trackH - thumbHeight.value)
}

function onScroll() {
  update()
  visible.value = true
  clearTimeout(hideTimer)
  if (!dragging) {
    hideTimer = setTimeout(() => { visible.value = false }, 1200)
  }
}

function onTrackClick(e: MouseEvent) {
  if (e.target === thumb.value) return
  const trackRect = track.value!.getBoundingClientRect()
  const clickRatio = (e.clientY - trackRect.top) / trackRect.height
  const doc = document.documentElement
  const maxScroll = doc.scrollHeight - window.innerHeight
  window.scrollTo({ top: clickRatio * maxScroll, behavior: 'smooth' })
}

function onThumbDown(e: MouseEvent) {
  e.preventDefault()
  dragging = true
  dragStartY = e.clientY
  dragStartScroll = document.documentElement.scrollTop
  visible.value = true
  clearTimeout(hideTimer)
  document.addEventListener('mousemove', onDrag)
  document.addEventListener('mouseup', onDragEnd)
}

function onDrag(e: MouseEvent) {
  const trackH = track.value?.clientHeight ?? window.innerHeight
  const doc = document.documentElement
  const maxScroll = doc.scrollHeight - window.innerHeight
  const delta = e.clientY - dragStartY
  const scrollDelta = (delta / (trackH - thumbHeight.value)) * maxScroll
  window.scrollTo({ top: dragStartScroll + scrollDelta })
}

function onMouseLeave() {
  if (!dragging) {
    hideTimer = setTimeout(() => { visible.value = false }, 600)
  }
}

function onDragEnd() {
  dragging = false
  document.removeEventListener('mousemove', onDrag)
  document.removeEventListener('mouseup', onDragEnd)
  hideTimer = setTimeout(() => { visible.value = false }, 1200)
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', update, { passive: true })
  update()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', update)
  clearTimeout(hideTimer)
})
</script>

<template>
  <div
    ref="track"
    class="scrollbar"
    :class="{ 'scrollbar--visible': visible }"
    @mousedown="onTrackClick"
    @mouseenter="visible = true"
    @mouseleave="onMouseLeave"
  >
    <div
      ref="thumb"
      class="scrollbar__thumb"
      :style="{ top: thumbTop + 'px', height: thumbHeight + 'px' }"
      @mousedown.stop="onThumbDown"
    />
  </div>
</template>

<style scoped lang="scss">
.scrollbar {
  position: fixed;
  top: 56px;
  right: 0;
  width: 10px;
  height: calc(100vh - 56px);
  z-index: 100;
  opacity: 0;
  transition: opacity 0.3s ease;
  cursor: pointer;

  &--visible {
    opacity: 1;
  }

  &:hover {
    width: 12px;

    .scrollbar__thumb {
      background: var(--c-gray400);
    }
  }
}

.scrollbar__thumb {
  position: absolute;
  right: 2px;
  width: 6px;
  border-radius: 3px;
  background: var(--c-gray300);
  transition: background 0.15s ease, width 0.15s ease;

  .scrollbar:hover & {
    width: 8px;
  }
}
</style>
