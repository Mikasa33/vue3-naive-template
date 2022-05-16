<script setup lang="ts">
  import { RouterView } from 'vue-router';
  import { zhCN, dateZhCN } from 'naive-ui';
  import { useThemeStore } from '/@/store/modules/theme';

  const useTheme = useThemeStore();

  const theme = computed(() => useTheme.getNaiveTheme);
</script>

<template>
  <NConfigProvider
    :date-locale="dateZhCN"
    :locale="zhCN"
    :theme="theme"
    class="h-full"
  >
    <AppProvider>
      <RouterView />
    </AppProvider>
  </NConfigProvider>
</template>
