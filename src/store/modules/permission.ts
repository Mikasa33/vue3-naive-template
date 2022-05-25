import { defineStore } from 'pinia';
import { store } from '/@/store';
import { getMenuList } from '/@/service/common/menu';
import { transformObjToRoute } from '/@/router/helper/routeHelper'
import { transformRouteToMenu } from '/@/router/helper/menuHelper';

interface PermissionState {
  isDynamicAddedRoute: boolean;
  menuList: any[];
  tabList: any[];
}

export const usePermissionStore = defineStore({
  id: 'sys-permission',
  state: (): PermissionState => ({
    // 是否动态加载路由
    isDynamicAddedRoute: false,
    // 菜单
    menuList: [],
    // 标签页
    tabList: [],
  }),
  getters: {
    getDynamicAddedRoute(): boolean {
      return this.isDynamicAddedRoute;
    },
    getMenuList(): any[] {
      return this.menuList;
    },
    getTabList(): any[] {
      return this.tabList;
    },
  },
  actions: {
    setDynamicAddedRoute(status: boolean) {
      this.isDynamicAddedRoute = status;
    },
    setMenuList(menus: any[]) {
      this.menuList = menus;
    },
    setTabList(tabs: any[]) {
      this.tabList = tabs;
    },
    async buildRoutesAction(): Promise<any[]> {
      const loading = window.$message.loading('菜单加载中...');

      const { data, error } = await getMenuList();
      if (unref(error)) {
        return Promise.reject(error);
      }

      const routeList = transformObjToRoute(data.value);
      this.setMenuList(transformRouteToMenu(data.value));

      loading.destroy();

      return routeList;
    },
  },
});

// Need to be used outside the setup
export function usePermissionStoreWithOut() {
  return usePermissionStore(store);
}
