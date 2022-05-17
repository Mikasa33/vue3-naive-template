<script setup lang="ts">
  import { isNumber } from '/@/utils/is';

  const props = withDefaults(defineProps<{
    icon: string;
    dark?: string;
    size?: 'small' | 'medium' | 'large' | number;
  }>(), {
    size: 'medium',
  });

  const size = computed(() => {
    const { size } = props;
    if (isNumber(size)) {
      return `text-${size}px`;
    }
    switch(size) {
      case 'small': return 'text-xs';
      case 'large': return 'text-lg';
      default: return '';
    }
  });
</script>

<template>
  <div :class="[icon, dark, size]" />
</template>
