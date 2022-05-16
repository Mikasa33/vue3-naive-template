<script setup lang="ts">
  import { useAppStore } from '/@/store/modules/app';

  const router = useRouter();
  const useApp = useAppStore();

  const collapsed = computed(() => useApp.getCollapsed);

  const appTitle = import.meta.env.VITE_APP_TITLE;

  function handleClickLogo() {
    router.push('/');
  }
</script>

<template>
  <div class="logo flex-center fixed z-1 px-4 h-64px bg-white dark:bg-[#18181d] border-r border-r-[#efeff5] dark:border-r-[#353539] cursor-pointer transition-base" :class="[collapsed ? 'w-64px' : 'w-200px']" @click="handleClickLogo">
    <img src="/logo.png" class="w-30px transition-base" :class="[collapsed ? 'm-0' : 'mr-2']" />
      <span class="text-lg truncate transition-base" :class="[collapsed ? 'opacity-0' : 'opacity-100']">{{ appTitle }}</span>
  </div>
</template>
