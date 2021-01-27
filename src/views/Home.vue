<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'


export default {
  name: 'Home',
  components: {
    // HelloWorld,

  },
  methods:{
	method1(e){
		console.log("Home组件收到数据",e);
	}
  }
}
</script>
