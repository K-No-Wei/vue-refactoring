import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
 
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap.min'

// 引入阿里图标
import "@/assets/iconfont/iconfont.css"

// 提示动画
import Vtip from 'vtip'
import 'vtip/lib/index.min.css'
// // 注册指令使用
Vue.use(Vtip.directive)
// // 工具函数调用
Vue.prototype.$tip = Vtip.tip

// Vue.use(ElementUI);
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
