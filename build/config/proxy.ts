import type { ProxyOptions } from 'vite';
import { getEnvConfig } from '/~/.env-config';

/**
 * 设置网络代理
 * @param viteEnv - vite环境描述
 */
export function createViteProxy(viteEnv: ImportMetaEnv) {
  const isOpenProxy = viteEnv.VITE_HTTP_PROXY === 'true';
  if (!isOpenProxy) return undefined;

  const { server } = getEnvConfig(viteEnv);

  const proxy: Record<string, string | ProxyOptions> = {
    [server.proxy]: {
      target: server.url,
      changeOrigin: true,
      rewrite: (path) => path.replace(new RegExp(`^${server.proxy}`), ''),
    },
  };

  return proxy;
}
