<script setup lang="ts">
  import { toggleDark } from '/@/composables';
</script>

<template>
  <div class="i-icon-park-outline:sun-one dark:i-icon-park-outline:moon" @click="toggleDark()" />
</template>
