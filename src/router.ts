import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import airRouter from './router/module/air';

Vue.use(Router);
// 如果需要权限的话，那就得划分权限路由

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    airRouter,
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
