import { useRequest } from '/@/composables';

const { request } = useRequest();

export function getDemo(data: any) {
  return request('/demo/get', { data });
}

export function getDemoError() {
  return request('/demo/get/error');
}
