import type { Router, RouteRecordRaw } from 'vue-router';

import { whiteNameList } from '/@/router/routes';
import { useUserStoreWithOut } from '/@/store/modules/user';
import { PageEnum } from '/@/enums/common/pageEnum';

// 登录页面地址
const HOME_PATH = PageEnum.BASE_HOME_PATH;
const LOGIN_PATH = PageEnum.BASE_LOGIN_PATH;
const ERROR_PAGE_NAME = PageEnum.ERROR_PAGE_NAME;

// 权限守卫
export function createPermissionGuard(router: Router) {
  const useUserStore = useUserStoreWithOut();

  router.beforeEach(async (to, from, next) => {
    const token = useUserStore.getToken;

    // 可直接访问白名单路由
    if (whiteNameList.includes(to.name as any)) {
      // 已登录状态下，跳转登录页面
      if (to.path === LOGIN_PATH && token) {
        // 如果登录未过期，则跳转重定向页面或首页
        next((to.query?.redirect as string) || '/');
        return;
      }
      next();
      return;
    }

    // 如果密钥不存在
    if (!token) {
      // if (to.meta.ignoreAuth) {
      //   next();
      //   return;
      // }

      // 重定向到登陆页面
      const redirectData: { path: string; replace: boolean; query?: any } = {
        path: LOGIN_PATH,
        replace: true,
      };
      // 跳转页面存在时，登录成功后的重定向页面为此页面
      if (to.path) {
        redirectData.query = {
          ...redirectData.query,
          redirect: to.path,
        };
      }
      next(redirectData);
      return;
    }

    // 登陆成功后，跳转页面为 404 时，重定向到首页
    if (
      from.path === LOGIN_PATH &&
      to.name === ERROR_PAGE_NAME &&
      to.fullPath !== HOME_PATH
    ) {
      next(HOME_PATH);
      return;
    }

    // 用户信息不存在，则获取用户信息
    if (!useUserStore.getUserInfo) {
      try {
        await useUserStore.getUserInfoAction();
      } catch (err) {
        next();
        return;
      }
    }
    
    next()
  });
}
