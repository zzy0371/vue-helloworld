<template>
	<div class="article">
		<el-row class="content">
			{{article.content}}
		</el-row>
		<el-button type="danger" @click="$router.go(-1)">返回章节列表</el-button>
	</div>
</template>

<script>
	import {articles} from '../data/bookdata.js'
	export default{
		data(){
			return{
				article:null
			}
		},
		created() {
			this.article= articles.filter(item=>{
				return item.id==this.$route.params.pk;
			})[0]
		}
		
	}
</script>

<style lang="less">
	.article{
		.content{
			margin: 50px 0;
		}
	}
</style>
