<script setup lang="ts">
  import { getDemo } from '/@/services';

  const { data, isLoading, isFinished } = getDemo({ id: 1 });
</script>

<template>
  <div class="home flex-center flex-col">
    <h1 class="text-black dark:text-white">This is an home page</h1>
    <div>loading: {{ isLoading.toString() }}</div>
    <div>finished: {{ isFinished.toString() }}</div>
    <pre>{{ JSON.stringify(data) }}</pre>
  </div>
</template>
