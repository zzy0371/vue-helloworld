<template>
	<div class="book">
		<el-row>
			<el-col :span="24">
				<h1 class="title">{{book.title}}</h1>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="24">
				<p class="outline">{{book.outline}}</p>
			</el-col>
		</el-row>
		<el-row class="list">
			<el-col class="articletitle" :span="6" v-for="(a,index) in articles" :key="a.title">
				<router-link :to="'/article/'+a.id">
					第{{index+1}}章-- {{a.title}}
				</router-link>
			</el-col>
		</el-row>
		<el-button type="danger" @click="goPrev">返回首页</el-button>
		<!-- <router-link :to="{name:'Home'}">返回首页</router-link> -->
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
		},
		methods:{
			goPrev(){
				this.$router.go(-1)
				// this.$router.push("/article/100007")
				// this.$router.push({name:"Article",params:{pk:100007}})
			}
		}
	}
</script>

<style lang="less">
.book{
	.title{
		text-align: center;
	}
	.outline{
		text-indent: 2em;
	}
	.list{
		padding: 40px 0px;
		.articletitle{
			text-align: left;
			padding: 20px;
		}
	}
}
</style>
