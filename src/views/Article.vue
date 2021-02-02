<template>
	<div class="article" v-if="article">
		<el-row class="content">
			<p>
				{{article.content}}
			</p>
		</el-row>
		<el-button type="danger" @click="$router.go(-1)">返回章节列表</el-button>
	</div>
</template>

<script>
	// import {articles} from '../data/bookdata.js'
	export default{
		data(){
			return{
				article:null
			}
		},
		created() {			
			this.$axios({
				url:`article/${this.$route.params.pk}/`,
				method:'get'
			}).then(res=>{
				this.article=res.data;
			})
			
		}
		
	}
</script>

<style lang="less">
	.article{
		.content{
			margin: 50px 0;
			text-indent: 2em;
			line-height: 60px;
			font-size: 25px;
		}
	}
</style>
