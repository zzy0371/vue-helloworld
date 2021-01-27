<template>
	<div class="heart" @click="changestate">
		<span> <slot name="to"></slot> </span>
		<img :src="state?heartselpng:heartnormalpng" alt="">
		<span>{{ state?"取消":"点赞" }}</span>
	</div>
</template>

<script>
	export default{
		props:{
			stateprop:{
				required:true,
				type:Boolean
			}
		},
		created() {
			this.state=this.stateprop;
		},
		data(){
			return{
				state:true,
				heartnormalpng:require("./img/heart.png"),
				heartselpng:require("./img/heartsel.png")
			}
		},
		methods:{
			changestate(){
				this.state=!this.state;
				this.$emit("tellparent",{"state":this.state})
			}
		}
	}
</script>

<style lang="less">
	.heart{
		display: inline-block;
		img{
			vertical-align: -10px;
		}
	}
</style>
