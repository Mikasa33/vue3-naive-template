<script setup lang="ts">
  import { usePermissionStore } from '/@/store/modules/permission';
  import { transformMenuToSiderMenu } from '/@/router/helper/menuHelper';

  const router = useRouter();

  const usePermission = usePermissionStore();

  const menuOptions = computed(() => {
    return transformMenuToSiderMenu(usePermission.getMenuList);
  });

  function handleUpdateMenu(_: string, menu: any) {
    usePermission.setTabList(menu.tabs);
    router.push(menu.tabs?.[0].key);
  }
</script>

<template>
  <div class="sider">
    <NMenu
      :options="menuOptions"
      :collapsed-width="64"
      @update:value="handleUpdateMenu"
    />
  </div>
</template>
