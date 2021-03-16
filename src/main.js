// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {store} from  './store'
import $axios from  'axios'
import VueCookies from 'vue-cookies'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { isWeiXin, isMobile } from './utils/equipment_type'
import './utils/mytest'
import './utils/newVue'
import animate from 'animate.css'
import AlleyUI from "./components"

Vue.config.productionTip = false;
Vue.prototype.$axios = $axios;

/*
  *Vue.use()
  *用于安装 Vue.js 插件。如果插件是一个对象，必须提供 install 方法。如果插件是一个函数，它会被作为 install 方法。install 方法调用时，会将 Vue 作为参数传入。
  *当 install 方法被同一个插件多次调用，插件将只会被安装一次
*/
Vue.use(VueCookies);
Vue.use(iView);
Vue.use(MintUI);
Vue.use(animate);
Vue.use(AlleyUI);

//axios 全局拦截，并在header中添加token信息
$axios.interceptors.request.use(
  config => {
    config.headers['Content-Type'] = 'application/json;charset=UTF-8';
    //判断是否存在ticket，如果存在的话，则每个http header都加上ticket
    let token = window.$cookies.get("user")
    if (token) {
      //用户每次操作，都将cookie设置成1小时
      //window.$cookies.set('user', token, '60MIN');
      config.headers.token = token
    }
    return config;
  },
  error => {
    return Promise.reject(error.response);
});

// http response 拦截器,如果token出错，则跳转到登录页面
$axios.interceptors.response.use(response => {
  let data = response.data;
  if (!data.status || data.status !== -5) {//token出错状态不为为-5
    return response;
  }
  if (data.status && data.status === -5) { //token出错状态为-5
    window.$cookies.remove('user')
    router.push({path: '/login'})
  }
  return Promise.reject(data)
}, error => {
  return Promise.reject(error)
})

//路由判断,跳转PC或者mobile
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  var path = to.path
  if (isWeiXin() || isMobile()) {
    if(path.indexOf('/m') > -1) {
      next();
    }else {
      path = '/m' + path;
      next(path);
    }
  } else {
    if(path.indexOf('/m') > -1) {
      path = path.replace('/m','');
      next(path);
    }else{
      next();
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
