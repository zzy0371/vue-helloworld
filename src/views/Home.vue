<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
	<div>
		<h1>使用全局组件</h1>
		<HiWorld :num="10" @toparent="method1"></HiWorld>
	</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'


export default {
  name: 'Home',
  components: {
    HelloWorld,

  },
  methods:{
	method1(e){
		console.log("Home组件收到数据",e);
	}
  }
}
</script>
