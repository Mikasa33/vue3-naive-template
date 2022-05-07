import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: import('/@/views/home.vue'),
    },
    {
      path: '/fail',
      name: 'fail',
      component: () => import('/@/views/fail.vue'),
    },
    {
      path: '/error',
      name: 'error',
      component: () => import('/@/views/error.vue'),
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('/@/views/auth.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('/@/views/login.vue'),
    },
  ],
});

export default router;
