import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Main'
import m_Main from '@/views/m_Main'

Vue.use(Router);
export const mobileRouter = [
  {
    path: '',
    name: 'mb_home',
    component: m_Main,
    total_level: 1,
    title: '首页',
    children: [
      {path: '/m',name:'mb_home',component: (resolve) => require(['../views/mobile/home.vue'],resolve)}
    ],
  },
  {
    path: '',
    name: 'mb',
    component: m_Main,
    total_level: 1,
    children: [
      {path: '/m',name:'mb_home',component: (resolve) => require(['../views/mobile/home.vue'],resolve)},
    ],
  },
  {
    path: '',
    name: 'mb',
    component: m_Main,
    total_level: 2,
    children: [
      {path: '/m',name:'mb_home',title:"首页1",component: (resolve) => require(['../views/mobile/home.vue'],resolve)},
      {path: '/m',name:'mb_home',title:"首页2",component: (resolve) => require(['../views/mobile/home.vue'],resolve)},
      {path: '/m',name:'mb_home',title:"首页3",component: (resolve) => require(['../views/mobile/home.vue'],resolve)}
    ],
  }
];

export const pcRouter = [
  {
    path: '',
    name: 'pc_home',
    component: Main,
    total_level: 1,
    title: "首页",
    children: [
      {path: '/',name: 'pc_home',title: '首页',component: (resolve) => require(['../views/pc/home.vue'],resolve)}
    ],
  },
  {
    path: '',
    name: 'pc_2',
    component: Main,
    total_level: 2,
    title: "导航2",
    children: [
      {path: '/',name: 'nav2-1',title: '导航2-1',component: (resolve) => require(['../views/pc/home.vue'],resolve)},
      {path: '/timezonePicker',name: 'timezonePicker',title: '时区选择',component: (resolve) => require(['../views/pc/timezonePicker.vue'],resolve)}
    ],
  },
  {
    path: '',
    name: 'pc_3',
    component: Main,
    total_level: 2,
    title: "导航3",
    children: [
      {path: '/',name: 'nav3-1',title: '导航3-1',component: (resolve) => require(['../views/pc/home.vue'],resolve)},
      {path: '/',name: 'nav3-2',title: '导航3-2',component: (resolve) => require(['../views/pc/home.vue'],resolve)},
      {path: '/',name: 'nav3-3',title: '导航3-3',component: (resolve) => require(['../views/pc/home.vue'],resolve)}
    ],
  }
];


export default new Router({
  mode: 'history',
  routes: [
    ...pcRouter,
    ...mobileRouter,
  ]
})
