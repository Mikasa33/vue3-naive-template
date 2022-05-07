// 请求环境配置
type ServiceEnv = Record<
  EnvType,
  {
    // 请求地址
    url: string;
    // 代理地址
    proxy: string;
    // Mock 地址
    mock: string;
  }
>;

// 环境配置
const serviceEnvConfig: ServiceEnv = {
  dev: {
    url: 'http://localhost:7001/api',
    proxy: '/api',
    mock: '/mock',
  },
  test: {
    url: 'http://localhost:7001/api',
    proxy: '/api',
    mock: '/mock',
  },
  prod: {
    url: 'http://localhost:7001/api',
    proxy: '/api',
    mock: '/mock',
  },
};

/**
 * 获取环境配置
 * @param env 环境描述
 */
export function getEnvConfig(env: ImportMetaEnv) {
  const { VITE_ENV_TYPE = 'dev' } = env;
  const envConfig = {
    server: serviceEnvConfig[VITE_ENV_TYPE],
  };
  return envConfig;
}
