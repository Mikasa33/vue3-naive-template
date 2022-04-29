<script setup lang="ts">
  import { getDemo } from '/@/services';

  const { data, isLoading, isFinished } = getDemo({ id: 2 });
</script>

<template>
  <div class="about flex-center flex-col">
    <h1 class="text-black dark:text-white">This is an about page</h1>
    <div>loading: {{ isLoading.toString() }}</div>
    <div>finished: {{ isFinished.toString() }}</div>
    <pre>{{ JSON.stringify(data) }}</pre>
  </div>
</template>
