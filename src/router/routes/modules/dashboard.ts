import { LAYOUT } from '/@/router/constant';

const routes: any = {
  path: '/dashboard',
  name: 'Dashboard',
  redirect: '/dashboard/analysis',
  component: LAYOUT,
  meta: {
    title: '仪表盘',
    icon: 'Dashboard',
    sort: 1,
  },
  children: [
    {
      path: '/dashboard/analysis',
      name: 'DashboardAnalysis',
      component: () => import('/@/views/dashboard/analysis/index.vue'),
      meta: {
        title: '分析页',
        icon: 'Analysis',
      },
    },
    // {
    //   path: '/dashboard/workbench',
    //   name: 'DashboardWorkbench',
    //   component: () => import('/@/views/dashboard/workbench/index.vue'),
    //   meta: {
    //     title: '工作台',
    //     icon: 'Workbench',
    //   },
    // },
  ],
};

export default routes;
