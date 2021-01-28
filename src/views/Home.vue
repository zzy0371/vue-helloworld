<template>
	<div class="home">
		<div class="books">
			<el-row :gutter="20">
				<el-col :span="6" v-for="b in books" :key="b.id">
					<router-link to="/about">
						<el-card :body-style="{ padding: '0px' }" shadow="hover" class="book">
							<img :src="b.mainimg" class="image">
							<div style="padding: 14px;">
								<h3>{{b.title}}</h3>
								<div class="bottom clearfix">
									<el-button type="primary">去看看</el-button>
								</div>
							</div>
						</el-card>
					</router-link>
				</el-col>
			</el-row>
		</div>
		
		
	</div>
</template>

<script>
	import {books} from '../data/bookdata.js'
	console.log("books", books)
	export default {
		name:'Home',
		data(){
			return {
				books:books
			}
		}
	}
</script>

<style lang="less">
.books{
	width: 80%;
	margin: 0 auto;
	.book{
		img{
			width: 100%;
		}
	}
}
</style>
