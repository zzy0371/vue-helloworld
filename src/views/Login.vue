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
						<el-button>没有账号,去注册</el-button>
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
					password: '',
				}
			};
		},
		methods: {
			onSubmit() {
				console.log('登录成功');
				this.$jsCookie.set('user', 'zzy0371', { expires: 7 })
				
				// this.$root.$children[0].user = "zzy0371"
				this.$bus.$emit("userlogin","zzy0371")
				
				
				let next = this.$route.query.next;
				if(next){
					this.$router.push(next)
				}
				else{
					this.$router.push({name:'Home'})
				}
				
				
			}
		}
	}
</script>

<style>
</style>
