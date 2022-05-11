<script setup lang="ts">
  import { useUserStore } from '/@/store/modules/user';

  const useUser = useUserStore();

  const form = reactive({
    username: 'admin',
    password: '123456',
  });

  async function handleLogin() {
    if (form.username !== '' && form.password !== '') {
      try {
        const data = await useUser.login(form);
        console.log(data);
      } catch(error: any) {
        console.log(error.value.message);
      }
    }
  }
</script>

<template>
  <div class="flex-center h-100vh bg-light-50 dark:bg-dark-500">
    <div class="flex-center flex-col p-4 w-400px rounded-xl overflow-hidden shadow-md bg-white">
      <h2 class="mb-4 text-xl font-medium text-black dark:text-white">登录</h2>
      <input v-model="form.username" placeholder="请输入用户名" class="mb-2 px-4 py-2 w-240px border-1 border-gray rounded-lg outline-none" />
      <input v-model="form.password" placeholder="请输入密码" class="mb-2 px-4 py-2 w-240px border-1 border-gray rounded-lg outline-none" />
      <button class="px-4 py-2 w-240px border-1 border-gray rounded-lg outline-none" @click="handleLogin">登 录</button>
    </div>
  </div>
</template>
