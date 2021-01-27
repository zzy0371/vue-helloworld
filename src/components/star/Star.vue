<template>
	<div class="star">
		<slot name="to"></slot>
		<img v-for="(item,index) in 5" 
		:key="index" 
		:src="index<starnum?starselpng:starnormalpng" 
		:alt="item"
		@click="setstarnum(index+1)"
		>
		<span>{{starnum}}星</span>
	</div>
</template>

<script>
	export default {
		methods:{
			setstarnum(num){
				this.starnum=num;
				this.$emit("tellparent",{"starnum":this.starnum})
			}
		},
		props:{
			starnumprop:{
				type:Number,
				required:true
			}
		},
		created() {
			this.starnum=this.starnumprop;
		},
		data(){
			return{
				starnum:4,
				starnormalpng:require("./img/star.png"),
				starselpng:require("./img/starsel.png")
			}
		}
	}
</script>

<style lang="less">
	.star{
		display: inline-block;
		img{
			vertical-align: -10px;
		}
	}
</style>

