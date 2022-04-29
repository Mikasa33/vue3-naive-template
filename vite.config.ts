import { defineConfig, loadEnv } from 'vite';
import { resolvePath, viteDefine, setupVitePlugins, createViteProxy } from './build';

export default defineConfig((configEnv) => {
  const viteEnv = loadEnv(configEnv.mode, process.cwd()) as unknown as ImportMetaEnv;
  const vitePath = resolvePath('./', import.meta.url);

  return {
    base: viteEnv.VITE_BASE_URL,
    resolve: {
      alias: {
        '/~': vitePath.root,
        '/@': vitePath.src,
        '/#': vitePath.typings,
      },
    },
    define: viteDefine,
    plugins: setupVitePlugins(configEnv, vitePath.src, viteEnv),
    css: {
      preprocessorOptions: {
        less: {
          additionalData: "@import './src/styles/var.less';",
        },
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
      open: true,
      proxy: createViteProxy(viteEnv),
    },
    build: {
      brotliSize: false,
    },
  };
});
