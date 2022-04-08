// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入格式化的字体
import './assets/css/base.css'
// import store from './store'
import selfD from './utils/directive'
Vue.use(selfD)
// import myPlugin from './utils/directive/indexOne'
// Vue.use(myPlugin)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  components: { App },
  template: '<App/>'
})
