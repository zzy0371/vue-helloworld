<template>
	<div>
		<h1>我是HiWorld组件</h1>
		<p>我接受到msg的值为{{msg}}</p>
		<p>我接受到num的值为{{num}}</p>
		
		<button @click="tellparent">点击向外层发送事件</button>
	</div>
</template>

<script>
	export default{
		props:{
			msg:{
				type:String,
				default:"20210126"
			},
			// num:Number
			num:{
				type:Number,
				required:true
			}
		},
		components:{
		},
		methods:{
			tellparent(){
				this.$emit("toparent",{"name":"qiku"})
			}
		}
	}
</script>

<style>
</style>
