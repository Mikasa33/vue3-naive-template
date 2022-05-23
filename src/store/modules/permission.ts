import { defineStore } from 'pinia';
import { store } from '/@/store';

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
  },
});

// Need to be used outside the setup
export function usePermissionStoreWithOut() {
  return usePermissionStore(store);
}
