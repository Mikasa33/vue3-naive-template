import type { Router } from 'vue-router';

// 进度条守卫
export function createProgressGuard(router: Router) {
  router.beforeEach(() => {
    // window.$loadingBar?.start();
    return true;
  });

  router.afterEach(() => {
    // window.$loadingBar?.finish();
    return true;
  });
}
