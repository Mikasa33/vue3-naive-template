import type { Router, RouteRecordRaw } from 'vue-router';

import { whitePathList } from '/@/router/routes';
import { useUserStoreWithOut } from '/@/store/modules/user';
import { PageEnum } from '/@/enums/common/pageEnum';
import { pageNotFoundRoute } from '/@/router/routes/basic';

// 登录页面地址
const LOGIN_PATH = PageEnum.BASE_LOGIN;

// 权限守卫
export function createPermissionGuard(router: Router) {
  const useUser = useUserStoreWithOut();

  router.beforeEach(async (to, from, next) => {
    const token = useUser.getToken;

    // 可直接访问白名单路由
    if (whitePathList.includes(to.path)) {
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
      to.name === pageNotFoundRoute.name &&
      to.fullPath !== PageEnum.BASE_HOME
    ) {
      next(PageEnum.BASE_HOME);
      return;
    }

    // 用户信息不存在，则获取用户信息
    if (!useUser.getUserInfo) {
      try {
        await useUser.getUserInfoAction();
      } catch (err) {
        next();
        return;
      }
    }

    // if (to.name === pageNotFoundRoute.name) {
    //   console.log(666)
    //   // 动态添加路由后，此处应当重定向到 fullPath，否则会加载 404 页面内容
    //   next({ path: to.fullPath, replace: true, query: to.query });
    // } else {
    //   console.log(777)
    //   const redirectPath = (from.query.redirect || to.path) as string;
    //   const redirect = decodeURIComponent(redirectPath);
    //   const nextData = to.path === redirect ? { ...to, replace: true } : { path: redirect };
    //   console.log(to.path, redirect, nextData)
    //   next(nextData);
    // }
    next()
  });
}
