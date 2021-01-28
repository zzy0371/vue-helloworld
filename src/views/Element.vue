<template>
	<el-container class="element">
		<el-header>
			<el-row>
				<el-col>
					<el-menu
						:default-active="activeIndex2"
						class="el-menu-demo"
						mode="horizontal"
						@select="handleSelect"
						background-color="#545c64"
						text-color="#fff"
						active-text-color="#ffd04b">
						<el-menu-item index="1">处理中心</el-menu-item>
						<el-submenu index="2">
							<template slot="title">我的工作台</template>
							<el-menu-item index="2-1">选项1</el-menu-item>
							<el-menu-item index="2-2">选项2</el-menu-item>
							<el-menu-item index="2-3">选项3</el-menu-item>
							<el-submenu index="2-4">
								<template slot="title">选项4</template>
								<el-menu-item index="2-4-1">选项1</el-menu-item>
								<el-menu-item index="2-4-2">选项2</el-menu-item>
								<el-menu-item index="2-4-3">选项3</el-menu-item>
							</el-submenu>
						</el-submenu>
						<el-menu-item index="3" disabled>消息中心</el-menu-item>
						<el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
					</el-menu>
				</el-col>
			</el-row>
		</el-header>
		<el-container>
			<el-aside width="200px">Aside</el-aside>
			<el-main>
				<el-row>
					<el-col :span="1" :offset="23">
						<i @click="drawer = true" class="el-icon-video-camera-solid"></i>
					</el-col>
				</el-row>
				<el-row>
					<el-button>默认按钮</el-button>
					<el-button type="primary">主要按钮</el-button>
					<el-button type="success">成功按钮</el-button>
					<el-button type="info">信息按钮</el-button>
					<el-button type="warning">警告按钮</el-button>
					<el-button type="danger">危险按钮</el-button>
				</el-row>

				<el-row>
					<el-button plain>朴素按钮</el-button>
					<el-button type="primary" plain>主要按钮</el-button>
					<el-button type="success" plain>成功按钮</el-button>
					<el-button type="info" plain>信息按钮</el-button>
					<el-button type="warning" plain>警告按钮</el-button>
					<el-button type="danger" plain>危险按钮</el-button>
				</el-row>

				<el-row>
					<el-button round>圆角按钮</el-button>
					<el-button type="primary" round>主要按钮</el-button>
					<el-button type="success" round>成功按钮</el-button>
					<el-button type="info" round>信息按钮</el-button>
					<el-button type="warning" round>警告按钮</el-button>
					<el-button type="danger" round>危险按钮</el-button>
				</el-row>

				<el-row>
					<el-button icon="el-icon-search" circle></el-button>
					<el-button type="primary" icon="el-icon-edit" circle></el-button>
					<el-button type="success" icon="el-icon-check" circle></el-button>
					<el-button type="info" icon="el-icon-message" circle></el-button>
					<el-button type="warning" icon="el-icon-star-off" circle></el-button>
					<el-button type="danger" icon="el-icon-delete" circle></el-button>
				</el-row>
				<el-row>
					<el-input-number v-model="num" @change="handleChange" :step="2" step-strictly :min="1" :max="10" label="描述文字"></el-input-number>
				</el-row>
				<el-row>
					<el-switch
						v-model="value1"
						active-color="#13ce66"
						inactive-color="#E6A23C">
					</el-switch>
				</el-row>
				<el-row>
					<el-alert
						title="成功提示的文案"
						type="success"
						@close="closefun">
					</el-alert>
				</el-row>
				<el-row>
					<el-breadcrumb separator="/">
						<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
						<el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
						<el-breadcrumb-item>活动列表</el-breadcrumb-item>
						<el-breadcrumb-item>活动详情</el-breadcrumb-item>
					</el-breadcrumb>
				</el-row>
				<el-row>
					<el-carousel height="300px">
						<el-carousel-item v-for="item in imgs" :key="item" :style="{background: `url(${item}) no-repeat center center` }">
							
						</el-carousel-item>
					</el-carousel>
				</el-row>
				<el-row>
					<el-cascader
						v-model="value"
						:options="options"
						@change="handleChange1">
					</el-cascader>
				</el-row>
				<el-row>
					<el-calendar :range="['2019-03-04', '2019-03-24']" v-model="dates">
					</el-calendar>
				</el-row>
				<el-row>
					<el-collapse v-model="activeNames" @change="handleChange">
					<el-collapse-item title="一致性 Consistency" name="1">
						<div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
						<div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
					</el-collapse-item>
					<el-collapse-item title="反馈 Feedback" name="2">
						<div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
						<div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
					</el-collapse-item>
					<el-collapse-item title="效率 Efficiency" name="3">
						<div>简化流程：设计简洁直观的操作流程；</div>
						<div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
					<div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
					</el-collapse-item>
					<el-collapse-item title="可控 Controllability" name="4">
						<div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
						<div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
					</el-collapse-item>
					</el-collapse>
				</el-row>
				
			</el-main>
		</el-container>
		<el-footer>Footer</el-footer>
		<el-drawer
			title="我是标题"
			:visible.sync="drawer"
			:direction="direction"
			:before-close="handleClose">
			<span>我来啦!</span>
		</el-drawer>
	</el-container>
</template>

<script>
	export default{
		name:'Element',
		components: {
		
		},
		data(){
			return{
				activeNames: ['1'],
				dates:new Date(),
				drawer: false,
				direction: 'rtl',
				activeIndex2: '1',
				num:0,
				value1:true,
				imgs:[
					require("../assets/24c14c397b95a5682d2500e0d13656df.jpeg"),
					require("../assets/3c0dd903bf5e95e600727c589c86ad1b.jpeg"),
					require("../assets/606e0df4bf531e82c5c47e60cfe53dcd.jpeg")
				],
				value: [],
				options:[
					{
						value:'zhinan',
						label:'指南'
					},
					{
						value: 'ziyuan',
						label: '资源',
						children: [
							{
								value: 'axure',
								label: 'Axure Components'
							},
							{
								value: 'sketch',
								label: 'Sketch Templates'
							}, 
							{
								value: 'jiaohu',
								label: '组件交互文档',
								children:[
									{
										value: 'collapse',
										label: 'Collapse 折叠面板'
									}
								]
							},
							
						],
					}
					
				]
				
				
			}
		},
		methods:{
			handleClose(done) {
				console.log("关闭了");
				done();
			},
			handleChange(value){
				console.log(value);
			},
			handleChange1(value){
				console.log(value);
			},
			closefun(){
				console.log("关闭了");
			},
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			}
		}
	}
</script>

<style>
	.el-row {
		margin-bottom: 20px;
	}
	.el-col {
		border-radius: 4px;
	}
	.bg-purple-dark {
		background: #99a9bf;
	}
	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}
	.bg-purple {
		background: #d3dce6;
	}
	.bg-purple-light {
		background: #e5e9f2;
	}
	
	
	.el-header, .el-footer {
		background-color: #B3C0D1;
		color: #333;
		text-align: center;
		line-height: 60px;
	}
	.el-aside {
		background-color: #D3DCE6;
		color: #333;
		text-align: center;
		line-height: 200px;
	}
	.el-main {
		background-color: #E9EEF3;
		color: #333;
		text-align: center;
		/* line-height: 160px; */
	}
	
</style>
