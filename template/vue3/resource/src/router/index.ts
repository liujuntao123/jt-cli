import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/home/Home.vue';
import NoAuth from '@/views/no-auth.vue';
import { checkAuth } from '@/utils/keycloak';
import Liu from '@/views/liujuntao.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/no-auth',
    name: 'noAuth',
    component: NoAuth,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/liujuntao',
    name: '刘君涛',
    component: Liu,
  },
  {
    path: '/',
    redirect: '/home',
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title as string;
  } else {
    document.title = '九天 • 毕昇';
  }
  //hack一把，解决刷新后url会带一串莫名其妙的东西的问题
  if (to.fullPath.search('&state') > -1 && to.fullPath.search(/\?/) === -1) {
    const path = to.fullPath.split('&')[0];
    next(path);
  } else {
    next();
  }
});
router.beforeEach((to, from, next) => {
  const path = to.path.split('/')[1];
  if (!checkAuth(path)) {
    return next('/no-auth');
  }
  next();
});

export default router;
