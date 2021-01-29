<template>
	<div class="center">
		<h1>{{user}}的个人主页</h1>
		<br>
		<br>
		<br>
		<router-view/>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				user:null
			}
		},
		created() {
			this.user=this.$jsCookie.get("user")
		}
	}
</script>

<style>
</style>
