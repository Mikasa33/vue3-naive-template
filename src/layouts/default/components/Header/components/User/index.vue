<script setup lang="ts">
  import { useUserStore } from '/@/store/modules/user';

  const useUser = useUserStore();

  const userInfo = computed(() => useUser.getUserInfo);

  const options = reactive([
    {
      key: 'setting',
      label: '个人设置',
    },
    {
      key: 'logout',
      label: '退出登录',
    },
  ]);

  function handleSelectOption(key: string) {
    switch(key) {
      case 'logout':
        handleLogout();
        break;
    }
  }

  function handleLogout() {
    useUser.confirmLogout();
  }
</script>

<template>
  <NDropdown :options="options" trigger="hover" @select="handleSelectOption">
    <div class="user flex-center h-64px p-4 cursor-pointer transition-base hover:bg-[#f3f3f5] dark:hover:bg-[rgba(255,255,255,0.09)]">
      <NAvatar src="/images/default-avatar.png" round color="transparent" class="mr-2" />
      <span>{{ userInfo?.nickName }}</span>
    </div>
  </NDropdown>
  
</template>
