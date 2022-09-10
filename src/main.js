import Vue from 'vue'

import store from './store'

// import ElementUI from 'element-ui';
import {  Dropdown,
  DropdownMenu,
  DropdownItem,
  Timeline,
  TimelineItem,
  Crad} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Timeline)
Vue.use(TimelineItem)



import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
 
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap.min'
import App from './App.vue'
import router from './router'
// 引入阿里图标
import "@/assets/iconfont/iconfont.css"

// 提示动画
import Vtip from 'vtip'
import 'vtip/lib/index.min.css'
// // 注册指令使用
Vue.use(Vtip.directive)
// // 工具函数调用
Vue.prototype.$tip = Vtip.tip

import "@/assets/font/text.css"

import service from  "@/plugins/service"
Vue.prototype.service = service

//导入代码高亮文件
import hljs from 'highlight.js' 
//导入代码高亮样式
import '@/assets/css/github.css' 
//自定义一个代码高亮指令
Vue.directive('highlight',function (el) {
  let highlight = el.querySelectorAll('pre code');
  highlight.forEach((block)=>{
      hljs.highlightBlock(block)
  })
})

// Vue.use(ElementUI);
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.config.productionTip = false
// 引入下拉刷新
import { List,Cell } from 'vant';
Vue.use(Cell)
Vue.use(List)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
