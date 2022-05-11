import type { MockMethod } from 'vite-plugin-mock';
import { resultSuccess, resultError } from '../../utils';

const apis: MockMethod[] = [
  {
    url: '/mock/user/loginByPassword',
    method: 'post',
    timeout: 1000,
    response: (option: Service.MockOption): Service.MockServiceResult => {
      const { username, password } = option.body;
      if (username === 'admin' && password === '123456') {
        return resultSuccess({
          token: 'token123',
        });
      }
      return resultError('用户名或密码错误');
    },
  },
  {
    url: '/mock/user/info',
    method: 'post',
    timeout: 1000,
    response: (option: Service.MockOption): Service.MockServiceResult => {
      const { authorization } = option.headers;
      if (authorization) {
        return resultSuccess({
          id: 1,
          username: 'admin',
          nickName: '管理员',
        });
      }
      return resultError('未授权，请登录', { code: 401 });
    },
  },
];

export default apis;
