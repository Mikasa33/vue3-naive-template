import { defineStore } from 'pinia';
import { store } from '/@/store';

interface AppState {
  collapsed: boolean;
}

export const useAppStore = defineStore({
  id: 'sys-app',
  state: (): AppState => ({
    // ζε ηΆζ
    collapsed: false,
  }),
  getters: {
    getCollapsed(): boolean {
      return this.collapsed;
    },
  },
  actions: {
    setCollapsed(status: boolean) {
      this.collapsed = status;
    },
  },
});

// Need to be used outside the setup
export function useAppStoreWithOut() {
  return useAppStore(store);
}
