import type { MockMethod } from 'vite-plugin-mock';
import { resultSuccess } from '../../utils';

const apis: MockMethod[] = [
  {
    url: '/mock/menu/list',
    method: 'post',
    timeout: 1000,
    response: (option: Service.MockOption): Service.MockServiceResult => {
      return resultSuccess([
        {
          id: '402865eb7d93f67e017f1a443209000a',
          parentId: '0',
          resourceContent: null,
          style: null,
          icon: 'icon-park-outline:plus',
          component: 'basic',
          routeName: 'demo',
          routePath: '/demo',
          title: '基础测试模块',
          requiresAuth: 'true',
          orderNo: 1,
          singleLayout: null,
          href: null,
          hide: false,
          menuType: 'catalogue',
          children: [
            {
              id: '402865eb7d93f67e017f1a46448c000f',
              parentId: '402865eb7d93f67e017f1a443209000a',
              resourceContent: null,
              style: '#parse_tab',
              icon: 'icon-park-outline:user',
              component: 'multi',
              routeName: 'demo_1',
              routePath: '/demo/1',
              title: '测试模块1',
              requiresAuth: 'true',
              orderNo: 1,
              singleLayout: null,
              href: null,
              hide: false,
              menuType: 'menu',
              children: [
                {
                  id: '402865eb7d93f67e0180408d529a005d',
                  parentId: '402865eb7d93f67e017f1a46448c000f',
                  resourceContent: null,
                  style: null,
                  icon: 'icon-park-outline:user',
                  component: 'self',
                  routeName: 'demo_1_db',
                  routePath: '/demo/1/db',
                  title: '待办',
                  requiresAuth: 'true',
                  orderNo: 1,
                  singleLayout: null,
                  href: null,
                  hide: false,
                  menuType: 'tag',
                  children: [],
                  meta: {
                    requiresAuth: 'true',
                    hide: false,
                    singleLayout: null,
                    icon: 'icon-park-outline:user',
                    href: null,
                    title: '待办',
                    order: 1,
                  },
                  name: 'demo_1_db',
                  path: '/demo/1/db',
                },
                {
                  id: '402865eb7d93f67e0180408dc9ed005e',
                  parentId: '402865eb7d93f67e017f1a46448c000f',
                  resourceContent: null,
                  style: null,
                  icon: 'icon-park-outline:user',
                  component: 'self',
                  routeName: 'demo_1_ing',
                  routePath: '/demo/1/ing',
                  title: '办理中',
                  requiresAuth: 'true',
                  orderNo: 2,
                  singleLayout: null,
                  href: null,
                  hide: false,
                  menuType: 'tag',
                  children: [],
                  meta: {
                    requiresAuth: 'true',
                    hide: false,
                    singleLayout: null,
                    icon: 'icon-park-outline:user',
                    href: null,
                    title: '办理中',
                    order: 2,
                  },
                  name: 'demo_1_ing',
                  path: '/demo/1/ing',
                },
                {
                  id: '402865eb7d93f67e0180408debee005f',
                  parentId: '402865eb7d93f67e017f1a46448c000f',
                  resourceContent: null,
                  style: null,
                  icon: 'icon-park-outline:user',
                  component: 'self',
                  routeName: 'demo_1_whole',
                  routePath: '/demo/1/whole',
                  title: '全部',
                  requiresAuth: 'true',
                  orderNo: 3,
                  singleLayout: null,
                  href: null,
                  hide: false,
                  menuType: 'tag',
                  children: [],
                  meta: {
                    requiresAuth: 'true',
                    hide: false,
                    singleLayout: null,
                    icon: 'icon-park-outline:user',
                    href: null,
                    title: '全部',
                    order: 3,
                  },
                  name: 'demo_1_whole',
                  path: '/demo/1/whole',
                },
              ],
              meta: {
                requiresAuth: 'true',
                hide: false,
                singleLayout: null,
                icon: 'icon-park-outline:user',
                href: null,
                title: '测试模块1',
                order: 1,
              },
              name: 'demo_1',
              path: '/demo/1',
            },
          ],
          meta: {
            requiresAuth: 'true',
            hide: false,
            singleLayout: null,
            icon: 'icon-park-outline:plus',
            href: null,
            title: '基础测试模块',
            order: 1,
          },
          name: 'demo',
          path: '/demo',
        },
        {
          id: '402865eb7d93f67e0180bb4cd26c008a',
          parentId: '0',
          resourceContent: null,
          style: null,
          icon: 'icon-park-outline:plus',
          component: 'basic',
          routeName: 'archives',
          routePath: '/archives',
          title: '发文管理',
          requiresAuth: 'true',
          orderNo: 1,
          singleLayout: null,
          href: null,
          hide: false,
          menuType: 'catalogue',
          children: [
            {
              id: '402865eb7d93f67e0180bb4dc325008b',
              parentId: '402865eb7d93f67e0180bb4cd26c008a',
              resourceContent: null,
              style: null,
              icon: 'icon-park-outline:user',
              component: 'multi',
              routeName: 'archives_out',
              routePath: '/archives/out',
              title: '院发文',
              requiresAuth: 'true',
              orderNo: 1,
              singleLayout: null,
              href: null,
              hide: false,
              menuType: 'menu',
              children: [
                {
                  id: '402865eb7d93f67e0180bb519d6a008c',
                  parentId: '402865eb7d93f67e0180bb4dc325008b',
                  resourceContent: null,
                  style: null,
                  icon: 'icon-park-outline:user',
                  component: 'self',
                  routeName: 'archives_out_ing',
                  routePath: '/archives/out/ing',
                  title: '办理中发文',
                  requiresAuth: 'true',
                  orderNo: 1,
                  singleLayout: null,
                  href: null,
                  hide: false,
                  menuType: 'tag',
                  children: [],
                  meta: {
                    requiresAuth: 'true',
                    hide: false,
                    singleLayout: null,
                    icon: 'icon-park-outline:user',
                    href: null,
                    title: '办理中发文',
                    order: 1,
                  },
                  name: 'archives_out_ing',
                  path: '/archives/out/ing',
                },
              ],
              meta: {
                requiresAuth: 'true',
                hide: false,
                singleLayout: null,
                icon: 'icon-park-outline:user',
                href: null,
                title: '院发文',
                order: 1,
              },
              name: 'archives_out',
              path: '/archives/out',
            },
          ],
          meta: {
            requiresAuth: 'true',
            hide: false,
            singleLayout: null,
            icon: 'icon-park-outline:plus',
            href: null,
            title: '发文管理',
            order: 1,
          },
          name: 'archives',
          path: '/archives',
        },
        {
          id: '402865eb7d93f67e018040982598006c',
          parentId: '0',
          resourceContent: null,
          style: null,
          icon: 'icon-park-outline:user',
          component: 'basic',
          routeName: 'user',
          routePath: '/user',
          title: '个人设置',
          requiresAuth: 'true',
          orderNo: 2,
          singleLayout: null,
          href: null,
          hide: false,
          menuType: 'catalogue',
          children: [
            {
              id: '402865eb7d93f67e018040985bb6006d',
              parentId: '402865eb7d93f67e018040982598006c',
              resourceContent: null,
              style: null,
              icon: 'icon-park-outline:permissions',
              component: 'self',
              routeName: 'user_setting',
              routePath: '/user/setting',
              title: '个人信息',
              requiresAuth: 'true',
              orderNo: 1,
              singleLayout: null,
              href: null,
              hide: false,
              menuType: 'tag',
              children: [],
              meta: {
                requiresAuth: 'true',
                hide: false,
                singleLayout: null,
                icon: 'icon-park-outline:permissions',
                href: null,
                title: '个人信息',
                order: 1,
              },
              name: 'user_setting',
              path: '/user/setting',
            },
          ],
          meta: {
            requiresAuth: 'true',
            hide: false,
            singleLayout: null,
            icon: 'icon-park-outline:user',
            href: null,
            title: '个人设置',
            order: 2,
          },
          name: 'user',
          path: '/user',
        },
      ]);
    },
  },
];

export default apis;
