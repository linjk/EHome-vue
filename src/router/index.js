import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const _routes = [
  {path:'/', redirect: '/login'},
  // 登录页
  {path:'/login', component: resolve => require(['../views/login.vue'], resolve)},
];


export default new Router({
  routes: _routes
})
