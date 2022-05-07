import { useRequest } from '/@/composables';

const { request } = useRequest();

export function getDemo(data: any) {
  return request({ url: '/demo/get', data });
}

export function getDemoError() {
  return request({ url: '/demo/get/error' }, { errorMessageMode: 'dialog' });
}
