import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

const routes = [
  {
	// 路由路径
    path: '/',
	// 路由名字
    name: 'Home',
	// 当路由匹配成功时展示的组件
    component: Home
  },
  {
    path: '/book/:pk',
    name: 'Book',
    component: () => import(/* webpackChunkName: "book" */ '../views/Book.vue')
  },
  {
    path: '/article/:pk',
    name: 'Article',
    component: () => import(/* webpackChunkName: "article" */ '../views/Article.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/element',
    name: 'Element',
    component: () => import(/* webpackChunkName: "element" */ '../views/Element.vue')
  }
]

// 构造VUE-Router的实例
const router = new VueRouter({
  routes
})

export default router
