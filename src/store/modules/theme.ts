import { defineStore } from 'pinia';
import { darkTheme } from 'naive-ui';
import { store } from '/@/store';
import { useDarkMode } from '/@/composables/common/useDarkMode';

const { isDark, toggle } = useDarkMode();

interface ThemeState {
  isDark: boolean;
}

export const useThemeStore = defineStore({
  id: 'sys-theme',
  state: (): ThemeState => ({
    // 暗黑模式
    isDark: isDark.value,
  }),
  getters: {
    getDark(): boolean {
      return this.isDark;
    },
    getNaiveTheme(): any {
      return this.isDark ? darkTheme : undefined;
    },
  },
  actions: {
    setDark(status: boolean) {
      this.isDark = status;
      toggle(status);
    },
  },
});

// Need to be used outside the setup
export function useThemeStoreWithOut() {
  return useThemeStore(store);
}
