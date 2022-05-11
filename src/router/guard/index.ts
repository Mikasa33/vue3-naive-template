import type { Router } from 'vue-router';

import { createProgressGuard } from './progressGuard';
import { createPermissionGuard } from './permissionGuard';

export function setupRouterGuard(router: Router) {
  // 进度条守卫
  createProgressGuard(router);
  // 权限守卫
  createPermissionGuard(router);
}
