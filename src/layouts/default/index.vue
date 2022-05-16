<script setup lang="ts">
  import { useAppStore } from '/@/store/modules/app';
  import { Header, Sider } from './components';

  const useApp = useAppStore();

  const collapsed = computed(() => useApp.getCollapsed);

  function handleUpdateCollapsed(status: boolean) {
    useApp.setCollapsed(status);
  }
</script>

<template>
  <NLayout class="layout h-100vh">
    <NLayoutHeader bordered class="h-64px">
      <Header />
    </NLayoutHeader>
    <NLayout has-sider position="absolute" class="!top-64px">
      <NLayoutSider :collapsed="collapsed" collapse-mode="width" :width="200" :collapsed-width="64" bordered :native-scrollbar="false" @update:collapsed="handleUpdateCollapsed">
        <Sider />
      </NLayoutSider>
      <NLayoutContent :native-scrollbar="false" content-style="padding: 16px;" class="bg-[#fafafc] dark:bg-[#101114]">
        <RouterView />
      </NLayoutContent>
    </NLayout>
  </NLayout>
</template>
