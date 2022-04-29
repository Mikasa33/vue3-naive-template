import axios, { type AxiosRequestConfig } from 'axios';
import { useAxios } from '@vueuse/integrations/useAxios';
import { getEnvConfig } from '/~/.env-config';

const { server } = getEnvConfig(import.meta.env);
const isHttpProxy = import.meta.env.VITE_HTTP_PROXY === 'true';
const isUseMock = import.meta.env.VITE_USE_MOCK === 'true';

const method = 'POST';

const instance = axios.create({
  baseURL: isUseMock ? '/mock' : isHttpProxy ? server.proxy : server.url,
  timeout: 10000,
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => {
    return Promise.reject(error.message);
  },
);

export function useRequest() {
  return {
    request: (url: string, config?: AxiosRequestConfig) => {
      return useAxios(url, { method, ...config }, instance);
    },
  };
}

