import type { MockMethod } from 'vite-plugin-mock';
import { resultSuccess, resultError } from '../utils';

const apis: MockMethod[] = [
  {
    url: '/mock/demo/get',
    method: 'post',
    timeout: 1000,
    response: (option: Service.MockOption): Service.MockServiceResult => {
      const { id } = option.body;
      if (id === 2) {
        return resultError();
      }
      return resultSuccess({
        id,
        name: 'demo',
      });
    },
  },
];

export default apis;
