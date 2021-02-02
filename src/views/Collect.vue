<template>
	<div class="collect">
		<h1>我的收藏</h1>
		<br>
		<br>
		<br>
		<el-table
			:data="tableData"
			style="width: 100%">
			<el-table-column
			type="index"
			label="编号"
			width="120">
			</el-table-column>
			<el-table-column
			prop="title"
			label="书籍名"
			width="240">
			</el-table-column>
			<el-table-column
			label="操作"
			width="120">
				<template slot-scope="scope">
				<el-button
					size="mini"
					@click="handleDelete(scope.$index, scope.row)">
					删除
				</el-button>

				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	// import {books} from '../data/bookdata.js'
	export default{
		data(){
			return{
				tableData: [
					
				]
			}
		},
		created() {
			this.$axios({
				url:"collects/",
				method:"get"
			}).then(res=>{
				console.log(res.data,"res");
				this.tableData=this.tableData.concat(res.data.books)
			}).catch(err=>{
				console.log("错误原因",err);
			})
		},
		methods:{
			handleDelete(index, row) {
				// console.log(index, row);
				// this.$store.commit("removeCollect",row.id);
				
				// this.$store.dispatch("removeCollectAsync",row.id)
				
				this.$axios({
					url:`collects/${row.id}/`,
					method:'delete'
				}).then(res=>{
					console.log("删除收藏成功",res.data);
					this.tableData=this.tableData.filter(item=>{
						return item.id != row.id
					})
				}).catch(err=>{
					console.log("删除失败",err);
				})
				
				
			}
		}
	}
</script>

<style>
</style>
