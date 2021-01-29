<template>
	<div class="userinfo">
		<el-row>
			<el-col :span="8" :offset="8">
				<h3><el-button type="success">您可以进行以下操作</el-button></h3>
				<h3><router-link :to='{name:"SetHead"}'><el-button type="success">修改头像</el-button></router-link></h3>
				<h3><router-link :to='{name:"SetPassword"}'><el-button type="success">修改密码</el-button></router-link> </h3>
			</el-col>
		</el-row>
	</div>
</template>

<script>
</script>

<style lang="less">
	.userinfo{
		text-align: center;
		h3{
			margin: 20px;
		}
	}
</style>
