import { defineStore } from 'pinia';
import { store } from '/@/store';
import { cloneDeep } from 'lodash';
import { getMenuList } from '/@/service/common/menu';

interface PermissionState {
  isDynamicAddedRoute: boolean;
}

export const usePermissionStore = defineStore({
  id: 'sys-permission',
  state: (): PermissionState => ({
    // 是否动态加载路由
    isDynamicAddedRoute: false,
  }),
  getters: {
    getDynamicAddedRoute(): boolean {
      return this.isDynamicAddedRoute;
    },
  },
  actions: {
    setDynamicAddedRoute(status: boolean) {
      this.isDynamicAddedRoute = status;
    },

    async buildRoutesAction(): Promise<any[]> {

      window.$message.loading('菜单加载中...');

      // !Simulate to obtain permission codes from the background,
      // this function may only need to be executed once, and the actual project can be put at the right time by itself
      let routeList: any[] = [];
      const { data, error } = await getMenuList();
      if (unref(error)) {
        return Promise.reject(error);
      }
      routeList = data.value;

      function transformRouteToMenu(routeModList: any[], routerMapping = false) {
        const cloneRouteModList = cloneDeep(routeModList);
        const routeList: any[] = [];
      
        cloneRouteModList.forEach((item) => {
          if (routerMapping && item.meta.hideChildrenInMenu && typeof item.redirect === 'string') {
            item.path = item.redirect;
          }
          if (item.meta?.single) {
            const realItem = item?.children?.[0];
            realItem && routeList.push(realItem);
          } else {
            routeList.push(item);
          }
        });
        function treeMapEach(
          data: any,
          { children = 'children', conversion }: { children?: string; conversion: any },
        ) {
          const haveChildren = Array.isArray(data[children]) && data[children].length > 0;
          const conversionData = conversion(data) || {};
          if (haveChildren) {
            return {
              ...conversionData,
              [children]: data[children].map((i: number) =>
                treeMapEach(i, {
                  children,
                  conversion,
                }),
              ),
            };
          } else {
            return {
              ...conversionData,
            };
          }
        }
        function treeMap<T = any>(treeData: T[], opt: { children?: string; conversion: any }): T[] {
          return treeData.map((item) => treeMapEach(item, opt));
        }
        const list = treeMap(routeList, {
          conversion: (node: any) => {
            const { meta: { title, hideMenu = false } = {} } = node;
      
            return {
              ...(node.meta || {}),
              meta: node.meta,
              name: title,
              hideMenu,
              path: node.path,
              ...(node.redirect ? { redirect: node.redirect } : {}),
            };
          },
        });
        // joinParentPath(list);
        return cloneDeep(list);
      }

      // Dynamically introduce components
      // routeList = transformObjToRoute(routeList);

      // //  Background routing to menu structure
      // const backMenuList = transformRouteToMenu(routeList);
      // this.setBackMenuList(backMenuList);

      // // remove meta.ignoreRoute item
      // routeList = filter(routeList, routeRemoveIgnoreFilter);
      // routeList = routeList.filter(routeRemoveIgnoreFilter);

      // routeList = flatMultiLevelRoutes(routeList);
      // routes = [PAGE_NOT_FOUND_ROUTE, ...routeList];

      // routes.push(ERROR_LOG_ROUTE);
      // patchHomeAffix(routes);
      return transformRouteToMenu(routeList);
    },
  },
});

// Need to be used outside the setup
export function usePermissionStoreWithOut() {
  return usePermissionStore(store);
}
