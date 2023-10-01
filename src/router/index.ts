import {
  createRouter,
  createWebHashHistory,
  RouterOptions,
  Router,
  RouteRecordRaw,
} from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'layout',
    component: () => import('@/components/layout/index.vue'),
    redirect: '/toilet',
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import('@/components/login.vue'),
      },
      {
        path: '/toilet',
        name: 'toilet',
        component: () => import('@/views/toilet/index.vue'),
      },
      {
        path: '/logistic',
        name: 'logistic',
        redirect: '/logistic/home',
        component: () => import('@/views/logistic/index.vue'),
        children: [
          {
            path: '/logistic/home',
            name: 'logistic-home',
            component: () => import('@/views/logistic/logistic-home/index.vue'),
          },
          {
            path: '/logistic/repair',
            name: 'repair',
            component: () => import('@/views/logistic/repair/index.vue'),
          },
          {
            path: '/logistic/help',
            name: 'help',
            component: () => import('@/views/logistic/help/index.vue'),
          },
          {
            path: '/logistic/info',
            name: 'info',
            component: () => import('@/views/logistic/info/index.vue'),
          },
          {
            path: '/logistic/introduction',
            name: 'introduction',
            component: () => import('@/views/logistic/introduction/index.vue'),
          },
        ],
      },
      {
        path: '/talk',
        name: 'talk',
        component: () => import('@/views/talk/index.vue'),
      },
      {
        path: '/admin',
        name: 'admin',
        component: () => import('@/views/admin/index.vue'),
      },
    ],
  },
];

// RouterOptions是路由选项类型
const options: RouterOptions = {
  history: createWebHashHistory(),
  routes,
};

// Router是路由对象类型
const router: Router = createRouter(options);

export default router;
