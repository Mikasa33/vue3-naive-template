<script setup lang="ts">
import { useLoadingBar, useDialog, useMessage, useNotification } from 'naive-ui';

// 挂载 naive-ui 的方法至 window 上，以便在路由钩子函数和请求函数里面调用
function registerNaiveTools() {
  window.$loadingBar = useLoadingBar();
  window.$dialog = useDialog();
  window.$message = useMessage();
  window.$notification = useNotification();
}

const NaiveProviderContent = defineComponent({
  setup() {
    registerNaiveTools();
  },
  render() {
    return h('div');
  },
});
</script>


<template>
  <NLoadingBarProvider>
    <NDialogProvider>
      <NNotificationProvider>
        <NMessageProvider>
          <slot></slot>
          <NaiveProviderContent />
        </NMessageProvider>
      </NNotificationProvider>
    </NDialogProvider>
  </NLoadingBarProvider>
</template>
