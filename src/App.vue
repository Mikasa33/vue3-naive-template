<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="flex-center flex-col h-100vh bg-light-50 dark:bg-dark-500">
    <div>
      <ToggleDark class="text-orange-500 cursor-pointer" />
    </div>

    <nav>
      <RouterLink to="/" class="p-4 text-blue-800 dark:text-blue-400">Home</RouterLink>
      <RouterLink to="/about" class="p-4 text-blue-800 dark:text-blue-400">About</RouterLink>
    </nav>

    <RouterView />
  </div>
</template>
