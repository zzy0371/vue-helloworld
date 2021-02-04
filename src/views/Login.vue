<template>
	<div class="login">
		<el-row>
			<el-col :span="8" :offset="8">
				<el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
					<el-form-item label="用户名">
						<el-input placeholder="请输入用户名" v-model="formLabelAlign.username"></el-input>
					</el-form-item>
					<el-form-item label="密码">
						<el-input placeholder="请输入密码" v-model="formLabelAlign.password" show-password></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="onSubmit">登录</el-button>
						<el-button @click="$router.push({name:'Regist'})">没有账号,去注册</el-button>
					</el-form-item>
				</el-form>
			</el-col>
		</el-row>
		
	</div>
</template>

<script>
	// import Cookies from 'js-cookie'
	export default {
		data() {
			return {
				labelPosition: 'right',
				formLabelAlign: {
					username: '',
					password: ''
				}
			};
		},
		methods: {
			onSubmit() {
				if(this.formLabelAlign.username.length<=0||this.formLabelAlign.password.length<=0){
					this.$message("用户名密码均不能为空");
					return
				}
				
				this.$axios({
					url:"user/login/",
					method:"post",
					data:{
						username:this.formLabelAlign.username,
						password:this.formLabelAlign.password
					}
				}).then((res)=>{

					this.$message('登录成功');
					
					this.$jsCookie.set('token',res.data.access , { expires: 7 })
					
					// this.$root.$children[0].user = "zzy0371"
					this.$bus.$emit("userlogin",this.formLabelAlign.username)
					
					
					let next = this.$route.query.next;
					if(next){
						this.$router.push(next)
					}
					else{
						this.$router.push({name:'Home'})
					}
					
					
					
				}).catch(err=>{
					console.log("错误原因",err);
				})
	
			}
		}
	}
</script>

<style>
</style>
