import { useRequest } from '/@/composables/common/useRequest';

const { request } = useRequest();

export function loginByPassword(data: any) {
  return request({ url: '/user/loginByPassword', data });
}

export function getUserInfo() {
  return request({ url: '/user/info' });
}
