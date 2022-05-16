<script setup lang="ts">
  import { useAppStore } from '/@/store/modules/app';

  const useApp = useAppStore();

  const collapsed = computed(() => useApp.getCollapsed);

  function handleClickCollapse() {
    useApp.setCollapsed(!collapsed.value);
  }
</script>

<template>
  <div class="collapse flex-center h-64px p-4 cursor-pointer transition-base hover:bg-[#f3f3f5] dark:hover:bg-[rgba(255,255,255,0.09)]" @click="handleClickCollapse">
    <Icon :icon="collapsed ? 'i-icon-park-outline:menu-unfold' : 'i-icon-park-outline:menu-fold'" size="large" />
  </div>
</template>
