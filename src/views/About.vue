<template>
  <div class="about">
    <div>
		<h2>点击计数案例</h2>
		<p>
			<button @click="reduce">-</button> 
			<span>{{num}}</span> 
			<button @click="add">+</button> 
		</p>
		<p>
			<button @click="num2--">-</button> 
			<span>{{num2}}</span> 
			<button @click="num2++">+</button> 
		</p>
    </div>
	<div>
		<h2>方法的使用: {{ normal() }}</h2>
		<h2>计算属性的使用: {{ comput1 }}</h2>
	</div>
	<div>
		<h1>使用全局组件</h1>
		<HiWorld msg="20210128" :num="num3" @toparent="method1"></HiWorld>
	</div>
  </div>
</template>


<script>
	// vue 中的内容都需要写在es6的模块中
export default {
	// 在组件中使用data必须使用函数格式写法  在函数的返回值中返回数据模型
	data(){
		return{
			num:0,
			num2:0,
			num3:120
		}
	},
	methods:{
		method1(e){
			console.log("About页面收到数据",e);
		},
		normal(){
			console.log("普通方法执行了");
			return "普通方法"
		},
		reduce(){
			this.num--;
		},
		add(){
			this.num++;
		}
	},
	computed:{
		comput1(){
			console.log("计算属性执行了");
			return "计算属性"+this.num
		}
	},
	watch:{
		num(newValue,oldValue){
			console.log("监听到num变化了",newValue,oldValue,);
		},
		num2(newValue,oldValue){
			console.log("监听到了num2变化了",newValue,oldValue,);
		}
	}
}

// 方法：在methods中编写  当页面刷新 普通方法执行
// 计算属性： 在computed 中编写  只有计算属性关联的对象发生变化 计算属性才会从新计算
// 侦听器： 在watch中编写  可以针对指定变量监听变化  
</script>
