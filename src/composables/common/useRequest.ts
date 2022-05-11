import type { RequestOptions, ErrorMessageMode } from '/#/axios';

import axios, { type AxiosRequestConfig } from 'axios';
import { useAxios } from '@vueuse/integrations/useAxios';
import { get, merge, isEmpty } from 'lodash';
import { stringify } from 'qs';
import { getEnvConfig } from '/~/.env-config';
import { router } from '/@/router';
import { useUserStoreWithOut } from '/@/store/modules/user';
import { isUnDef } from '/@/utils/is';

const { server } = getEnvConfig(import.meta.env);
const isDev: boolean = import.meta.env.VITE_ENV_TYPE === 'dev';
const isHttpProxy: boolean = import.meta.env.VITE_HTTP_PROXY === 'true';
const isUseMock: boolean = import.meta.env.VITE_USE_MOCK === 'true';

// 请求方法
const method = 'POST';

/**
 * @description 显示错误信息
 * @param {String} message 错误信息
 * @param {ErrorMessageMode} errorMessageMode 显示错误信息模式
 */
function handleErrorMessage(message: string, errorMessageMode: ErrorMessageMode) {
  // 显示错误信息
  console.error('error:', message);

  if (errorMessageMode === 'dialog') {
    // TODO: 对话框提醒
    console.log('dialog:', message);
  } else if (errorMessageMode === 'message') {
    // TODO: 消息提醒
    console.log('message:', message);
  }
}

/**
 * @description 创建请求实例
 */
function createService() {
  // 创建一个 axios 实例
  const service = axios.create({
    baseURL: isUseMock ? server.mock : isHttpProxy ? server.proxy : server.url, // 请求地址前缀
    timeout: 10000, // 超时时间
  });

  // 请求拦截
  service.interceptors.request.use(
    (config) => {
      // 打印请求信息
      if (isDev) {
        console.group(config.url);
        console.log('method:', config.method);
        console.table('data:', config.data);
        console.groupEnd();
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  // 响应拦截
  service.interceptors.response.use(
    (response) => {
      const { code, message } = response.data;

      // 没有 code 视为非项目接口不作处理
      if (isUnDef(code)) {
        return response;
      }

      // 有 code 判断为项目接口请求
      switch(code) {
        // 返回响应内容
        case 0:
          return response.data;
        case 401:
          router.replace('/login');
          break;
        default: break;
      }

      handleErrorMessage(message, response.config.errorMessageMode);
      return Promise.reject({ code, message });
    },
    (error) => {
      let message = '';
      const status = error.response.status;
      switch(status) {
        case 400:
          message = '请求错误';
          break;
        case 401:
          message = '未授权，请登录';
          router.replace('/login');
          break;
        case 403:
          message = '拒绝访问';
          break;
        case 404:
          message = `请求地址出错: ${error.response.config.url}`;
          break;
        case 408:
          message = '请求超时';
          break;
        case 500:
          message = '服务器内部错误';
          break;
        case 501:
          message = '服务未实现';
          break;
        case 502:
          message = '网关错误';
          break;
        case 503:
          message = '服务不可用';
          break;
        case 504:
          message = '网关超时';
          break;
        case 505:
          message = 'HTTP版本不受支持';
          break;
        default: break;
      }

      handleErrorMessage(message, error.config.errorMessageMode);
      return Promise.reject({ code: status, message: message });
    },
  );

  return service;
}

/**
 * @description 请求方法
 * @param {AxiosRequestConfig} config axios 配置
 * @param {any} options 请求配置
 */
function createRequest(config?: AxiosRequestConfig, options?: RequestOptions) {
  const useUserStore = useUserStoreWithOut();
  // 处理配置选项
  const token = useUserStore.getToken;
  const defaultConfig = {
    headers: {
      Authorization: token,
      'Content-Type': config?.headers?.['Content-Type'] || 'application/json',
    },
    data: {},
  };
  const mergeConfig = merge(defaultConfig, config);

  // 当需要以 form 形式发送时，处理发送的数据
  if (!isEmpty(mergeConfig.data) && mergeConfig.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
    mergeConfig.data = stringify(mergeConfig.data);
  }

  return useAxios(config.url, { method, ...mergeConfig, ...options }, service);
}

// 请求实例
export const service = createService();

/**
 * @description 请求方法
 */
export function useRequest() {
  return {
    request: createRequest,
  };
}

