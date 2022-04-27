<script setup lang="ts">
  const isDark = ref(false);

  function handleClick() {
    isDark.value = !isDark.value;
    if (isDark.value) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
</script>

<template>
  <div class="home flex-center flex-col">
    <h1 class="text-black dark:text-white">This is an home page</h1>
    <div>
      <div
        class="flex-center mb-4 py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-600 border-none cursor-pointer transition-base"
        @click="handleClick"
      >
        <div class="mr-1 text-xl i-icon-park-outline:sun-one dark:i-icon-park-outline:moon" /> 切换模式
      </div>
    </div>
  </div>
</template>
