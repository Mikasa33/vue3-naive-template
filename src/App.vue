<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router';
  import { toggleDark } from '/@/composables';
</script>

<template>
  <div class="flex-center flex-col h-100vh bg-light-50 dark:bg-dark-500">
    <div
      class="flex-center mb-4 py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-600 border-none cursor-pointer transition-base"
      @click="toggleDark()"
    >
      <DarkIcon />
    </div>

    <nav>
      <RouterLink to="/" class="p-4 text-blue-800 dark:text-blue-400">Home</RouterLink>
      <RouterLink to="/about" class="p-4 text-blue-800 dark:text-blue-400">About</RouterLink>
    </nav>

    <RouterView />
  </div>
</template>
