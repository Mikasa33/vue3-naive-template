import { PageEnum } from '/@/enums/common/pageEnum';
import { rootRoute, loginRoute, redirectRoute, pageNotFoundRoute } from './basic';

const modules = import.meta.globEager('./modules/**/*.ts');

// 异步加载的路由
export const asyncRoutes = [];

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  asyncRoutes.push(...modList);
});

// 基础路由
export const basicRoutes = [
  rootRoute,
  loginRoute,
  redirectRoute,
  pageNotFoundRoute,
];

// 白名单
export const whiteNameList = [PageEnum.BASE_LOGIN_NAME, PageEnum.ERROR_PAGE_NAME];
