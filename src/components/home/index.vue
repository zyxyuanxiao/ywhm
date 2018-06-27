<template>
	<div class="layout">
		<Layout>
			<Header :style="{position: 'fixed', width: '100%',}" class="top">
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
			<Footer class="layout-footer-center footer">2018-2019 &copy; 亿万毫米有限责任公司</Footer>
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
  width: 100px;
  height: 60px;
}
.layout-nav {
  margin: 0 auto;
}
.ivu-menu-dark.ivu-menu-horizontal .ivu-menu-item:hover {
    color: #23acf1;
}
.footer {
  width:2000px;
  height: 100px;
  background-color: #495060;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}
</style>