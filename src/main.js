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

// 注册全局过滤器
Vue.filter("info",function(value){
	return value+"  zzy"
})


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

// 导入icon-font 
import './assets/css/iconfont.css'

// 导入全局CSS
import './assets/css/main.css'


// 导入js-cookie插件 并且注册到VUE的原型中 以后可以通过VUE实例的 this直接访问$jsCookie
import Cookies from 'js-cookie'
Vue.prototype.$jsCookie = Cookies


// 新建VUE的实例 bus作为事件总线  将bus注册到VUE的原型中  以后再VUE的实例中就可以直接使用this.$bus
let bus = new Vue()
Vue.prototype.$bus = bus




// 导入axios 注册原型
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8000/';

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
	let token = Vue.prototype.$jsCookie.get("token")
	if(token){
		config["headers"]["Authorization"]="Bearer "+token;
	}
	console.log("修改以后的config",config.headers.Authorization);
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
	console.log(response,"response");
    return response;
  }, function (error) {
    // 对响应错误做点什么
	if(error.response.status=="403"){
		return {
			"error":"用户权限不够"
		}
	}
    return Promise.reject(error);
  });

Vue.prototype.$axios = axios


// 导入mockjs
import mock from 'mockjs'
Vue.prototype.$mock = mock
Vue.prototype.$mock.mock(/getbooks/,{
	"books|10":[
		{
			"title": "@CTITLE",
			"mainimg": "@IMAGE(240x320,@COLOR)",
			"outline": "@CSENTENCE(50,100)",
			"id|+1": 101
		},
	]
})

Vue.prototype.$mock.mock(/getbook\/\d+/,function(option){
	let datas = option.url.split("/");
	let pk = datas[datas.length-2]
	console.log(pk);
	return mock.mock({
		"title": "@CTITLE",
		"mainimg": "@IMAGE(240x320,@COLOR)",
		"outline": "@CSENTENCE(50,100)",
		"id": pk,
		"articles|100":[
			{
				"id|+1": 100001,
				"title": "@CTITLE(5,10)",
				"bookid": pk,
				"content": "@CSENTENCE(150,300)"
			}
		]
	})
})

Vue.prototype.$mock.mock(/article\/\d+/,function(option){
	let datas = option.url.split("/");
	let pk = datas[datas.length-2]
	console.log(pk);
	return mock.mock({
						"id": pk,
						"title": "@CTITLE(5,15)",
						"bookid": "@NATURAL(101,110)",
						"content": "@CPARAGRAPH(150,300)"
					})
})





// 根VUE实例  
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
