<template>
	<div class="book" v-if="book">
		<el-row>
			<el-col :span="20">
				<h1 class="title">{{book.title}} </h1>
			</el-col>
			<el-col :span="4">
				<template v-if="user">
					<el-button v-if="has" type="success" round disabled>已在书架</el-button>
					<el-button v-else type="success" round @click="add">加入书架</el-button>
				</template>
				<template v-else>
					<el-button type="success" round @click="$router.push({name:'Login',query:{next:$route.path}})">加入书架</el-button>
				</template>
				
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="24">
				<p class="outline">{{book.outline}}</p>
			</el-col>
		</el-row>
		<el-row class="list">
			<el-col class="articletitle" :span="6" v-for="(a,index) in book.articles" :key="a.title">
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
	// import {articles,books} from '../data/bookdata.js'
	export default {
		data(){
			return{
				user:null,
				has:false,
				book:null,
			}
		},
		created() {		
			let user = this.$jsCookie.get("user")
			if(user){
				this.user=user;
			}		
			this.$axios({
				url:`getbook/${this.$route.params.pk}/`,
				method:'get'
			}).then(res=>{
				this.book = res.data;
				this.has = this.$store.getters.getCollectBoos.indexOf(this.book.id)>=0?true:false
			}).catch(err=>{
				console.log("err",err);
			})
			
			
			
			
		},
		methods:{
			goPrev(){
				this.$router.go(-1)
				// this.$router.push("/article/100007")
				// this.$router.push({name:"Article",params:{pk:100007}})
			},
			add(){
				this.$message('加入书架');
				this.has=true
				// this.$store.commit("addCollect",this.book.id)
				this.$axios({
					url:"collects",
					method:"post",
					data:{
						id:this.book.id
					}
				}).then(res=>{
					console.log("收藏成功",res.data);
				}).catch(err=>{
					console.log("收藏失败",err);
				})
			}
		}
	}
</script>

<style lang="less">
.book{
	.title{
		text-align: center;
		padding: 20px;
	}
	.outline{
		text-indent: 2em;
		padding: 20px;
		line-height: 50px;
		font-size: 20px;
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
