import { defineStore } from 'pinia';
import { store } from '/@/store';
import { router } from '/@/router';
import { loginByPassword, getUserInfo } from '/@/service/common/user';
import { PageEnum } from '/@/enums/common/pageEnum';
import { storageEnum } from '/@/enums/common/storageEnum';
import { getLocal, setLocal } from '/@/utils/storage';

interface UserState {
  userInfo: any;
  token?: string;
}

export const useUserStore = defineStore({
  id: 'sys-user',
  state: (): UserState => ({
    // 用户信息
    userInfo: null,
    // 用户密钥
    token: undefined,
  }),
  getters: {
    getUserInfo(): any {
      return this.userInfo || getLocal(storageEnum['user-info']) || {};
    },
    getToken(): string | undefined {
      return this.token  || getLocal(storageEnum['token']) || undefined;
    },
  },
  actions: {
    setUserInfo(info: any | null) {
      this.userInfo = info;
      setLocal(storageEnum['user-info'], info);
    },
    setToken(token: string | undefined) {
      this.token = token;
      setLocal(storageEnum['token'], token);
    },
    async login(params: any): Promise<any | null> {
      const { goHome = true, ...loginParams } = params;
      const { data, error }: any = await loginByPassword(loginParams);
      if (unref(error)) {
        return Promise.reject(error);
      }
      const { token } = unref(data);
      this.setToken(token);
      return this.afterLoginAction(goHome);
    },
    async afterLoginAction(goHome?: boolean): Promise<any | null> {
      if (!this.getToken) return null;

       const userInfo = await this.getUserInfoAction();

      goHome && (await router.replace(userInfo?.homePath || PageEnum.BASE_HOME_PATH));
      return userInfo;
    },
    async getUserInfoAction(): Promise<any | null> {
      if (!this.getToken) return null;
    
      const { data, error }: any = await getUserInfo();
      if (unref(error)) {
        return Promise.reject(error);
      }
      this.setUserInfo(unref(data));
      return data;
    },
  },
});

// Need to be used outside the setup
export function useUserStoreWithOut() {
  return useUserStore(store);
}
