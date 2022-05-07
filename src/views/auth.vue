<script setup lang="ts">
  import { getDemo } from '/@/services';

  const { data, error, isLoading, isFinished } = getDemo({ id: 3 });
  console.log(data, error);
</script>

<template>
  <div class="auth flex-center flex-col">
    <h1 class="text-black dark:text-white">This is an auth page</h1>
    <div>loading: {{ isLoading.toString() }}</div>
    <div>finished: {{ isFinished.toString() }}</div>
    <pre>{{ error }}</pre>
  </div>
</template>
