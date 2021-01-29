// 如果模块在node_modules文件夹下 则不用写路径
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
// 直接导入静态文件 不需要别名时可以直接使用import
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);


// ES6 可以使用export导出一个模块   需要使用import  结合from来完成导入
// import obj from './data'
// console.log(obj,"obj");
// import {obj2,obj3} from './data/index.js'
// console.log(obj2,obj3);


// 导入全局CSS
import './assets/css/main.css'


// 导入js-cookie插件 并且注册到VUE的原型中 以后可以通过VUE实例的 this直接访问$jsCookie
import Cookies from 'js-cookie'
Vue.prototype.$jsCookie = Cookies


// 新建VUE的实例 bus作为事件总线  将bus注册到VUE的原型中  以后再VUE的实例中就可以直接使用this.$bus
let bus = new Vue()
Vue.prototype.$bus = bus






// 根VUE实例  
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
