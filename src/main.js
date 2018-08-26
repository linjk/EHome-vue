// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router'
import App from './App'

FastClick.attach(document.body)

Vue.config.productionTip = false;

router.beforeEach(function (to, from, next) {
  if (/\/http/.test(to.path)) {
    let url = to.path.split('http')[1];
    windows.location.href = `http${url}`
  }
  else {
    next()
  }
});

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
