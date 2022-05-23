import { PageEnum } from '/@/enums/common/pageEnum';
import { LAYOUT } from '/@/router/constant';

// 根路由
export const rootRoute = {
  path: '/',
  name: 'Root',
  redirect: PageEnum.BASE_HOME_PATH,
  meta: {
    title: 'Root',
  },
};

// 登录路由
export const loginRoute = {
  path: PageEnum.BASE_LOGIN_PATH,
  name: PageEnum.BASE_LOGIN_NAME,
  component: () => import('/@/views/sys/login/index.vue'),
  meta: {
    title: '登录',
  },
};

// 重定向路由
export const redirectRoute = {
  path: '/redirect',
  name: 'Redirect',
  component: LAYOUT,
  meta: {
    title: 'Redirect',
  },
  children: [
    {
      path: '/redirect/:path(.*)',
      name: 'Redirect',
      component: () => import('/@/views/sys/redirect/index.vue'),
      meta: {
        title: 'Redirect',
      },
    },
  ],
};

// 找不到页面路由
export const pageNotFoundRoute = {
  path: '/:path(.*)*',
  name: PageEnum.ERROR_PAGE_NAME,
  component: LAYOUT,
  meta: {
    title: '错误页面',
  },
  children: [
    {
      path: '/:path(.*)*',
      name: PageEnum.ERROR_PAGE_NAME,
      component: () => import('/@/views/sys/exception/index.vue'),
      meta: {
        title: '错误页面',
      },
    },
  ],
};
