<template>
	<div class="layout">
		<Layout>
			<Header :style="{position: 'fixed', width: '100%', }" class="top">
				<Menu mode="horizontal" theme="dark" active-name="/home/index" @on-select="switchPage">
					<div class="layout-nav">
						<Menu-item name="/home/index">
							<img src="../../assets/img/logo.png" class="logo">
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
						<Menu-item name="/home/login">
							登录
						</Menu-item>
						<Menu-item name="/home/register">
							注册
						</Menu-item>
					</div>
				</Menu>
			</Header>
			<Content :style="{margin: '63px 0 0 0'}">
				<router-view></router-view>
			</Content>
			<Footer class="footer">
				<div class="foot">
					<div class="left">
						<img src="../../assets/img/logo.png" alt="" class="footer_logo">
						<ul>
							<li><a href="/home/index">首页</a></li>
							<li><a  href="/home/app">下载APP</a></li>
							<li><a  href="/home/about">关于我们</a ></li>
							<li><a  href="">帮助</a ></li>
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
		return {};
	},
	methods: {
		switchPage(name) {
			this.$router.push(name);
		}
	}
};
</script>
<style scoped>
.layout {
	border: 1px solid #d7dde4;
	background: #f5f7f9;
	position: relative;
	border-radius: 4px;
	overflow: hidden;
}
.top {
	padding: 0;
	display: flex;
	justify-content: center;
	left: 0;
	top: 0;
}
.logo {
	height: 30px;
	width:100px;
	margin-top:15px;
}
.layout-nav {
	margin: 0 auto;
}
.ivu-menu-dark.ivu-menu-horizontal .ivu-menu-item:hover {
		color: #23acf1;
}
.footer {
	height: 400px;
	padding-top: 60px ;
	padding-bottom: 60px ;
	background-color: #495060;
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
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
	justify-content: space-between;
}
.erweima img {
  width: 60px;
  height: 60px;
	padding: 6px;
  border-radius: 6px;
}
.footer_logo{
	width: 168px;
	margin-left: -35px;
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
a{
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
</style>