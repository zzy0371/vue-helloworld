import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false


// 1导入组件
import HiWorld from '@/components/HiWorld.vue'
// 2注册组件  注册全局组件
Vue.component("HiWorld", HiWorld)


// 引入Element-UI框架
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);



// 根VUE实例  
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
