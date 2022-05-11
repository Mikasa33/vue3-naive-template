import type { App } from 'vue';

import { createRouter, createWebHistory } from 'vue-router';
import { basicRoutes, asyncRoutes } from './routes';
import { setupRouterGuard } from './guard';

export const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [...basicRoutes, ...asyncRoutes],
});

// 注册路由
export function setupRouter(app: App) {
  app.use(router);
  setupRouterGuard(router);
}