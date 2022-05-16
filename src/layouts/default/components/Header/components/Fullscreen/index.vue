<script setup lang="ts">
  const { isFullscreen, toggle } = useFullscreen();
</script>

<template>
  <div class="fullscreen flex-center h-64px p-4 cursor-pointer transition-base hover:bg-[#f3f3f5] dark:hover:bg-[rgba(255,255,255,0.09)]" @click="toggle">
    <Icon :icon="isFullscreen ? 'i-icon-park-outline:off-screen' : 'i-icon-park-outline:full-screen'" size="large" />
  </div>
</template>
