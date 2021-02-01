<template>
  <div class="about">
	<Heart :stateprop="heartState" @tellparent="statechange"> <span slot="to">给商品点赞：</span> </Heart>
	
	<br>
	<Heart :stateprop="state2" @tellparent="state2change"> <span slot="to">给快递点赞：</span> </Heart>
	
	<br>
	<Heart :stateprop="state3" @tellparent="state3change"> <span slot="to">给客服点赞：</span> </Heart>
 
	<br>
	<Star :starnumprop="star1" @tellparent="starchange1"><span slot="to" >给客服评星:</span></Star>
	
	<br>
	<Star :starnumprop="star2" @tellparent="starchange2"><span slot="to" >给快递评星:</span></Star>
	
	<br>
	<Star :starnumprop="star3" @tellparent="starchange3"><span slot="to" >给商品评星:</span></Star>
  
	<br>
	<br>
	<br>
	<span  v-if="show"><Step></Step></span>   <button @click="show=!show">切换</button>
	<br>
	<br>
	<br>
	
	<transition>
		<div class="target" v-show="play"></div>
	</transition>
	<button @click="play=!play">动画</button>
	
	<br>
	<br>
	<br>
	<svg t="1612146025455" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1185" width="16" height="16"><path d="M908.629333 743.765333H257.877333c-19.285333 0-37.376-7.509333-50.858666-21.162666-13.482667-13.653333-20.992-31.573333-20.821334-50.858667l2.389334-479.232c0-19.114667-6.656-31.914667-39.765334-37.205333h-0.170666l-95.573334-16.384c-9.216-1.536-15.530667-10.410667-13.994666-19.626667 1.536-9.216 10.410667-15.530667 19.626666-13.994667l95.402667 16.384c45.397333 7.168 68.437333 31.061333 68.437333 70.997334L220.16 672.085333c0 10.069333 3.754667 19.456 10.922667 26.453334 7.168 7.168 16.554667 11.093333 26.624 11.093333h650.752c9.386667 0 17.066667 7.68 17.066666 17.066667s-7.509333 17.066667-16.896 17.066666z" fill="#cdcdcd" p-id="1186"></path><path d="M859.989333 645.802667l-602.624-1.877334c-18.944-0.170667-36.693333-7.509333-50.005333-20.992-13.312-13.482667-20.48-31.232-20.48-50.176l1.877333-353.962666L870.570667 269.653333c30.890667 1.194667 55.125333 26.282667 55.125333 57.173334V580.266667c0 36.181333-29.525333 65.536-65.706667 65.536zM257.706667 609.792l602.453333 1.877333c17.408 0 31.573333-14.165333 31.573333-31.402666V326.826667c0-12.458667-9.898667-22.698667-22.357333-23.04h-0.682667l-645.632-48.128-1.536 317.44c0 9.728 3.754667 18.944 10.581334 25.941333 6.485333 6.826667 15.701333 10.752 25.6 10.752z" fill="#cdcdcd" p-id="1187"></path><path d="M324.096 800.085333m-63.658667 0a63.658667 63.658667 0 1 0 127.317334 0 63.658667 63.658667 0 1 0-127.317334 0Z" fill="#cdcdcd" p-id="1188"></path><path d="M324.096 880.810667c-44.544 0-80.725333-36.181333-80.725333-80.725334s36.181333-80.725333 80.725333-80.725333c44.544 0 80.725333 36.181333 80.725333 80.725333s-36.181333 80.725333-80.725333 80.725334z m0-127.317334c-25.770667 0-46.592 20.821333-46.592 46.592s20.821333 46.592 46.592 46.592 46.592-20.821333 46.592-46.592-20.821333-46.592-46.592-46.592z" fill="#cdcdcd" p-id="1189"></path><path d="M812.714667 800.085333m-63.658667 0a63.658667 63.658667 0 1 0 127.317333 0 63.658667 63.658667 0 1 0-127.317333 0Z" fill="#cdcdcd" p-id="1190"></path><path d="M812.714667 880.810667c-44.544 0-80.725333-36.181333-80.725334-80.725334s36.181333-80.725333 80.725334-80.725333 80.725333 36.181333 80.725333 80.725333-36.181333 80.725333-80.725333 80.725334z m0-127.317334c-25.770667 0-46.592 20.821333-46.592 46.592s20.821333 46.592 46.592 46.592 46.592-20.821333 46.592-46.592-20.821333-46.592-46.592-46.592z" fill="#cdcdcd" p-id="1191"></path><path d="M710.314667 417.962667H362.496c-9.386667 0-17.066667-7.68-17.066667-17.066667s7.68-17.066667 17.066667-17.066667h347.818667c9.386667 0 17.066667 7.68 17.066666 17.066667s-7.68 17.066667-17.066666 17.066667zM710.314667 516.096H362.496c-9.386667 0-17.066667-7.68-17.066667-17.066667s7.68-17.066667 17.066667-17.066666h347.818667c9.386667 0 17.066667 7.68 17.066666 17.066666s-7.68 17.066667-17.066666 17.066667z" fill="#cdcdcd" p-id="1192"></path></svg>
	
	<br>
	<br>
	<br>
	<span class="iconfont icon-shouye"></span>
	<span class="iconfont icon-fenlei"></span>
	<span class="iconfont icon-B"></span>
	<span class="iconfont icon-qicheqianlian-"></span>
	
	<br>
	<br>
	<br>
	<button @click="login">登录</button>
	<button @click="getlatestdiarts">获取最新日记</button>
	<button @click="getdiarybyid">获取指定日记</button>
	<button @click="creatediary">创建日记</button>
  </div>
</template>

<style>
	
	@keyframes hide{
		from{
			width: 100px;
			height: 100px;
			opacity: 1;
			left: 0;
		}
		to{
			width: 0;
			height: 0;
			opacity: 0;
			left: -200px;
		}
	}
	
	.target{
		width: 100px;
		height: 100px;
		background-color: red;
		position: relative;
	}
	.v-enter{

	}
	.v-enter-active{
		animation: hide 2s reverse linear;
	}
	.v-enter-to{
	
	}
	.v-leave{

	}
	.v-leave-active{
		animation: hide 2s linear;
	}
	.v-leave-to{

	}
	
	
	
/* 	.v-enter{
		opacity: 0;
		left: -200px;
		width: 0;
		height: 0;
	}
	.v-enter-active{
		transition: all 2s linear;
	}
	.v-enter-to{
		opacity: 1;
		left: 0;
	}
	.v-leave{
		opacity: 1;
		left: 0;
	}
	.v-leave-active{
		transition:  all 2s linear;
	}
	.v-leave-to{
		opacity: 0;
		left: -200px;
		width: 0;
		height: 0;
	} */
	
</style>


<script>
import Heart from '@/components/heart/Heart.vue'
import Star from '@/components/star/Star.vue'
import Step from '@/components/Step.vue'


export default {
	components:{
		Heart,
		Star,
		Step
	},
	created() {

	},
	methods:{
		// 请求API接口 获取点赞状态
		
		
		statechange(e){
			console.log("通知服务器将商品点赞状态设置为", e.state);
		},
		state2change(e){
			console.log("通知服务器将快递点赞状态设置为", e.state);
		},
		state3change(e){
			console.log("通知服务器将客服点赞状态设置为", e.state);
		},
		
		starchange1(e){
			console.log("通知服务器将客服评星设置为", e.starnum);
		},
		starchange2(e){
			
			console.log("通知服务器将快递评星设置为", e.starnum);
		},
		starchange3(e){
			console.log("通知服务器将商品评星设置为", e.starnum);
		},
		login(){
			this.$axios.post("obtainjwt/",{
				username:"admin",
				password:"123456"
			}).then((res)=>{
				
				if(res.status==200){
					console.log("登录成功",res.data.access);
					this.$jsCookie.set("token",res.data.access)
				}
			}).catch(function(err){
				console.log("失败原因",err);
			})
		},
		getlatestdiarts(){
			// this.$axios.get("http://127.0.0.1:8000/diarys/get_latest/",{
			// 	params:{
			// 		page:2,
			// 		page_size:3
			// 	}
			// }).then(res=>{
			// 	if(res.status==200){
			// 		console.log("最新日记",res.data);
			// 	}
			// }).catch(err=>{
			// 	console.log("失败原因",err);
			// })
			
			this.$axios({
				method:"get",
				url:"diarys/get_latest/",
				params: {
					page:2,
					page_size:3
				},
			}).then(res=>{
				if(res.status==200){
					console.log("最新日记",res.data);
				}
			}).catch(err=>{
				console.log("失败原因",err);
			})
		},
		getdiarybyid(){
			this.$axios({
				method:"get",
				url:"diarys/2/",
				headers:{
					// Authorization:"Basic dGVtcDoxMjM0NTY="
					Authorization:"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjEyMTYyMjIzLCJqdGkiOiJjYWUxMjllNmU5YTc0YzBhODE1MGY2ZGYyYzkzNTQ2OCIsInVzZXJfaWQiOjF9.DuM88fXyBTK0xNK_2h1OV0gfXSUTeyPEZ26B_Wno42c"
				}
			}).then(res=>{
				console.log("獲取指定日記結果",res)
			}).catch(err=>{
				console.log("失败原因",err);
			})
		},
		creatediary(){
			this.$axios({
				method:'post',
				url:"diarys/",
				data:{
					content:"我的新年日记",
					diarybook:"admin的日记本"
				},
				headers:{
					// Authorization:"Basic dGVtcDoxMjM0NTY="
					Authorization:"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjEyMTYyMjIzLCJqdGkiOiJjYWUxMjllNmU5YTc0YzBhODE1MGY2ZGYyYzkzNTQ2OCIsInVzZXJfaWQiOjF9.DuM88fXyBTK0xNK_2h1OV0gfXSUTeyPEZ26B_Wno42c"
				}
			}).then(res=>{
				console.log("创建日記結果",res)
			}).catch(err=>{
				console.log("失败原因",err);
			})
		}
	},
	data(){
		return {
			play:true,
			show:true,
			// 从服务器获取商品点赞状态
			heartState:true,
			// 从服务器获取快递点赞状态
			state2:false,
			// 从服务器获取快递点赞状态
			state3:false,
			
			// 从服务器获取快递评星
			star1:1,
			// 从服务器获取客服评星
			star2:2,
			// 从服务器获取商品评星
			star3:3
		}
	}
}

</script>
