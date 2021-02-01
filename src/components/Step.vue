<template>
	<div class="step">
		<button @click="num--">-</button>
		<span>{{num}}</span>
		<button @click="num++">+</button>
	</div>
</template>

<script>
	export default{
		name:"Step1111",
		data(){
			return{
				num:0,
				myInterval:null
			}
		},
		methods:{
			myfun(){
				
			}
		},
		// 仅仅初始化 基本事件和生命周期钩子函数
		beforeCreate() {
			console.log("组件创建之前",this.num,this.myfun);
		},
		// 执行注入工作 data或者methods等都可以使用
		created() {
			console.log("组件创建了",this.num,this.myfun,this.$el);
			// this.myInterval = setInterval(function(){
			// 	console.log("+++");
			// },1000)
		},
		beforeMount() {
			console.log("组件渲染之前",this.$el);
		},
		mounted() {
			console.log("组件渲染了",this.$el);
		},
		beforeUpdate() {
			console.log("组件更新之前",this.num,this.$el.innerText);
		},
		updated() {
			console.log("组件更新了",this.num,this.$el.innerText);
		},
		beforeDestroy() {
			console.log("组件销毁之前");
			clearInterval(this.myInterval);
		},
		destroyed() {
			console.log("组件销毁了");
		}
		
		
	}
</script>

<style>
</style>
<!-- 
从组件的创建 到组件的销毁过程  每一个阶段 都有一组对应的函数 称为生命周期函数 
生命周期函数是由框架自行调用 不需要用户调用
在VUE中每一个组件都是一个VUE的实例

初始化阶段
	beforeCreate created
	beforeMount  mounted
运行阶段
	beforeUpdate updated
销毁阶段
	beforeDestroy destroyed
	
created 常用于用于数据初始化
beforeDestroy 常用于清理用户数据	
-->