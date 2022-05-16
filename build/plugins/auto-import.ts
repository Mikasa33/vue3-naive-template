import AutoImport from 'unplugin-auto-import/vite';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';
import Components from 'unplugin-vue-components/vite';

export default (srcPath: string) => {
  return [
    AutoImport({
      dts: 'src/typings/auto-imports.d.ts',
      imports: ['vue', 'vue-router', 'pinia', '@vueuse/core'],
    }),
    Icons({
      compiler: 'vue3',
      customCollections: {
        custom: FileSystemIconLoader(`${srcPath}/assets/svg`),
      },
      scale: 1,
      defaultClass: 'inline-block',
    }),
    Components({
      dts: 'src/typings/auto-components.d.ts',
      resolvers: [
        IconsResolver({ customCollections: ['custom'], componentPrefix: 'icon' }),
      ],
    }),
  ];
};
