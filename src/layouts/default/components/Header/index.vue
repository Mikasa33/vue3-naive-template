<script setup lang="ts">
  import { useAppStore } from '/@/store/modules/app';
  import { Collapse, DarkMode, Fullscreen, Logo, User } from './components';

  const useApp = useAppStore();

  const collapsed = computed(() => useApp.getCollapsed);
</script>

<template>
  <div class="flex">
    <Logo />
    <div class="header flex justify-between w-full transition-padding" :class="[collapsed ? 'pl-64px' : 'pl-200px']">
      <div class="left">
        <Collapse />
      </div>
      <div class="right flex-center">
        <DarkMode />
        <Fullscreen />
        <User />
      </div>
    </div>
  </div>
</template>
