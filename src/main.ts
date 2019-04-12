import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import filters from './filters';
import g from './utils/global';
import Element from 'element-ui';
// import lang from 'element-ui/lib/locale/lang/en'
// import locale from 'element-ui/lib/locale'
import './shims-global';
// import zhLocale from "element-ui/lib/locale/lang/zh-CN";
import 'element-ui/lib/theme-chalk/index.css';

// locale.use(lang)
Vue.use(Element, {
  size: 'medium', // set element-ui default size
});
Vue.config.productionTip = false;

const bus = new Vue();

// 绑定的方法分为一个是绑定到vue的实例上的 一个是绑定到window上的全局方法不在组件之内调用的

window.g = g;

new Vue({
  router,
  store,
  filters,
  render: (h) => h(App),
}).$mount('#app');
