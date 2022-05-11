import { useRequest } from '/@/composables/common/useRequest';

const { request } = useRequest();

export function getDemo(data: any) {
  return request({ url: '/demo/get', data });
}

export function getDemoError() {
  return request({ url: '/demo/get/error' }, { errorMessageMode: 'dialog' });
}
