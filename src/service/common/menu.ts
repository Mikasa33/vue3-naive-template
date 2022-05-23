import { useRequest } from '/@/composables/common/useRequest';

const { request } = useRequest();

export function getMenuList() {
  return request({ url: '/menu/list' });
}
