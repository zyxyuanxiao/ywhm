<template>
	<div class="layout">
		<Layout>
			<Header class="top" breakpoint="md">
				<Menu mode="horizontal" theme="dark" active-name="/home/index" @on-select="switchPage" >
					<!-- <div class="layout-nav"> -->
						<Menu-item name="/home/index">
							<img src="../../assets/img/logo1.png" class="logo">
						</Menu-item>
						<Menu-item name="/home/career">
							职业发展
						</Menu-item>
						<Menu-item name="/home/experience">
							行业经验
						</Menu-item>
						<Menu-item name="/home/internet">
							互联网+
						</Menu-item>
						<Menu-item name="/home/invest">
							创业投资
						</Menu-item>
						<Menu-item name="/home/life">
							生活服务
						</Menu-item>
						<Menu-item name="">
							登录
						</Menu-item>
						<Menu-item name="/home/register">
							注册
						</Menu-item>
						 <div slot="trigger"></div>
					<!-- </div> -->
				</Menu>
			</Header>
			<Content :style="{margin: '63px 0 0 0', backgroundColor: '#fff'}">
				<router-view></router-view>
				<Modal scrollable 
				v-model="modal1"
				width="420">
					<div class="dialog">
						<h3>欢迎来到「亿万毫米」</h3>
						<Form ref="formInline" :model="formInline" :rules="ruleInline">
							<FormItem prop="user">
								<Input type="text" v-model="formInline.user" placeholder="Username" size="large">
									<Icon type="ios-person-outline" slot="prepend" size="20"></Icon>
								</Input>
							</FormItem>
							<FormItem prop="password">
								<Input type="password" v-model="formInline.password" placeholder="Password" size="large">
									<Icon type="ios-locked-outline" slot="prepend" size="20">></Icon>
								</Input>
							</FormItem>
							<FormItem>
								<Button type="primary" @click="handleSubmit('formInline')" size="large">登录</Button>
							</FormItem>
						</Form>
						<p @click="close" style="font-size: 14px;">没有账号？<router-link to="/home/register" class="register">现在去注册</router-link></p>
					</div>
				</Modal>
			</Content>
			<Footer class="footer">
				<div class="foot">
					<div class="left">
						<img src="../../assets/img/logo.png" alt="" class="footer_logo">
						<ul>
							<li><router-link to="/home/index">首页</router-link></li>
							<li><router-link  to="/home/app">下载APP</router-link></li>
							<li><router-link  to="/home/about">关于我们</router-link></li>
							<li><router-link  to="/home/help">帮助</router-link></li>
						</ul>
						<p class="copyright">ywhm &copy; 2018 KNOWLEDGE IS POWER IN NWSUAF<br>陕西省杨凌示范区亿万毫米教育科技有限公司<br>京03-20180606 &nbsp; | &nbsp;<a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502031582"><img src="../../assets/img/jing.png" align="center" alt="">&nbsp;京公网安备11018821620434号</a></p>
					</div>
					<div class="right">
							<div class="phone">010-122344321</div>
							<p>工作日 &nbsp; 9:00-22:00</p>
							<div class="ma">
								<div class="erweima">
									<img src="../../assets/img/wx.png" alt="客户端二维码">
											手机微信
								</div>
								<div class="erweima">
									<img src="../../assets/img/ywhm.png" alt="客户端二维码">
										亿万毫米
								</div>
							</div>
							<p class="addr">地址 &nbsp; 陕西省杨凌区西北农林科技大学<br>邮箱 &nbsp; 9322316551@qq.com</p>
					</div>
				</div>
				</Footer>
		</Layout>
	</div>
</template>
<script>
export default {
	data() {
		return {
			isCollapsed: false,
			modal1: false,
				formInline: {
					user: '',
					password: ''
				},
				ruleInline: {
					user: [
						{ required: true, message: 'Please fill in the user name', trigger: 'blur' }
					],
					password: [
						{ required: true, message: 'Please fill in the password.', trigger: 'blur' },
						{ type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
					]
				}
		};
	},

	methods: {
		switchPage(name) {			
			if (name == ""){
				this.modal1 = true
			}
			else
				this.$router.push(name);
		},
		handleSubmit(name) {
			this.$refs[name].validate((valid) => {
				if (valid) {
					this.$Message.success('Success!');
					this.modal1 = false
				} else {
					this.$Message.error('Fail!');
				}
			})
		},
		close () {
			
			this.modal1 = false
		}
	}		
};
</script>
<style scoped>
/* @media (max-width: 992px) {
	.ivu-menu-dark {
		display: none;
	}
} */
.layout {
	border: 1px solid #d7dde4;
	background: #f5f7f9;
	position: relative;
	border-radius: 4px;
	overflow: hidden;
	margin-left: -1px;
}
.top {
	position: fixed;
	display: flex;
	width: 100%;
	justify-content: center;
	top: 0;
	left: 0;
}
.logo {
	height: 30px;
	width: 100px;
	margin-top:15px;
}
.ivu-menu-dark.ivu-menu-horizontal .ivu-menu-item:hover {
	color: #23acf1;
}
.footer {
	width: 100%;
	height: 400px;
	margin: 0px;
	padding-top: 60px ;
	padding-bottom: 60px ;
	background-color: #495060;
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	/* text-align: center; */
}
.foot {
	width: 850px;
	height:280px;
	display: flex;
	justify-content: space-around;
}
.erweima {
  width: 72px;
  height: 90px;
  padding-bottom: 14px;
  border-radius: 6px;
  background: #fff;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  vertical-align: baseline;
  color: rgb(52, 52, 52);
  font-weight: 400;
  float: left;
  margin-right: 10px;
}
.left{
	display: flex;
	flex-direction: column;
	justify-content: space-around;
}
.erweima img {
  width: 60px;
  height: 60px;
  padding: 6px;
  border-radius: 6px;
}
.footer_logo{
	width: 168px;
	margin-left: -10px;
}
.addr {
	clear: both;
	padding-top: 48px;
}
ul {
	list-style-type: none;
}
.phone {
	 font-size: 30px;
}
p {
	font-size:12px;
	margin-bottom: 10px;
	color: #bfbfbf;
}
ul li {
	 height: 32px;
}
a {
	color: #999;
}
p a {
	color:#bfbfbf;
}
a:hover {
	color: #fff;
}
div.top.ivu-layout-header {
	z-index: 1;
}
.dialog {
	margin: 30px auto 21px;
	width: 290px;
}
h3 {
	margin-bottom: 20px;
	font-size: 28px;
	font-weight: 400;
}
.ivu-btn{
	width: 100%;
}
.register:hover {
	color: #23acf1;
}
</style>