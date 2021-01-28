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
  </div>
</template>


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
		}
	},
	data(){
		return {
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
