<template>
	<div class="book">
		<el-row>
			<el-col :span="24">
				<h1>{{book.title}}</h1>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="24">
				<p>{{book.outline}}</p>
			</el-col>
		</el-row>
		<el-row :gutter="20">
			<el-col :span="6" v-for="(a,index) in articles" :key="a.title">
				<router-link :to="'/article/'+a.id">
					<el-tag type="success" > 第{{index+1}}章-- {{a.title}} </el-tag>
				</router-link>
			</el-col>
		</el-row>
		
	</div>
</template>

<script>
	import {articles,books} from '../data/bookdata.js'
	export default {
		data(){
			return{
				book:null,
				articles:[]
			}
		},
		created() {
			console.log(this.$route.params.pk);
			this.book = books.filter((item)=>{
				return item.id == this.$route.params.pk;
			})[0]
			this.articles=articles.filter((item)=>{
				return item.bookid == this.$route.params.pk;
			})
		}
	}
</script>

<style lang="less">

</style>
