<script setup lang="ts">
  import { useThemeStore } from '/@/store/modules/theme';
  import { useDarkMode } from '/@/composables/common/useDarkMode';

  const useTheme = useThemeStore();

  const { toggle } = useDarkMode();

  const isDark = computed(() => useTheme.getDark);

  watch(
    isDark,
    (status: boolean) => {
      toggle(status);
    },
    {
      immediate: true,
    },
  );

  function handleClickDarkMode() {
    useTheme.setDark(!isDark.value);
  }
</script>

<template>
  <div class="dark-mode flex-center h-64px p-4 cursor-pointer transition-base hover:bg-[#f3f3f5] dark:hover:bg-[rgba(255,255,255,0.09)]" @click="handleClickDarkMode">
    <Icon :icon="isDark ? 'i-icon-park-outline:moon' : 'i-icon-park-outline:sun'" size="large" />
  </div>
</template>
