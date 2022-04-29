<script setup lang="ts">
  import { getDemoError } from '/@/services';

  const { error, isLoading, isFinished } = getDemoError();
</script>

<template>
  <div class="error flex-center flex-col">
    <h1 class="text-black dark:text-white">This is an error page</h1>
    <div>loading: {{ isLoading.toString() }}</div>
    <div>finished: {{ isFinished.toString() }}</div>
    <pre>{{ error }}</pre>
  </div>
</template>
