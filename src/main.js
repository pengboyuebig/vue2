// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入格式化的字体
import './assets/css/base.css'
// import store from './store'
// import selfD from './utils/directive'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(selfD)
// 引入ant组件库
import Antd, { Icon } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.use(ElementUI)
Vue.use(Antd)
Icon.setTwoToneColor('#ff9700')
Icon.getTwoToneColor()
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
