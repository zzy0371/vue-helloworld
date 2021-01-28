<template>
	<div class="article">
		{{article.content}}
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

<style>
</style>
