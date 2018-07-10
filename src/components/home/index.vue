<template>
	<div class="layout">
		<Layout>
			<Header class="top" breakpoint="md">
				<Menu mode="horizontal" theme="dark" active-name="/home/index" @on-select="switchPage">
					<div class="md">
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
            <Menu-item name="/home/userInfo" v-if="session">
							{{ userName }}
						</Menu-item>
						<Menu-item name="goLogin" v-else>
							登录
						</Menu-item>
            <Menu-item name="goLogout" v-if="session">
							退出
						</Menu-item>
						<Menu-item name="/home/register" v-else>
							注册
						</Menu-item>
					</div>
				  <div class="sm">
					   <div class="top_left">
						   <Menu-item name="/home/index">
								<img src="../../assets/img/logo1.png" class="logo">
						   </Menu-item>
					   </div>
						<img src="../../assets/img/more.png" alt="" class="hidden" @click="show()"/>
						<div class="top_middle" ref="mid">
							<div ref="fold">
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
							</div>
						</div>
						<div class="top_right">
              <Menu-item name="/home/userInfo" class="login" v-if="session">
								{{userName}}
							</Menu-item>
							<Menu-item name="goLogin" class="login" v-else>
								登录
							</Menu-item>							
						</div>
					</div>
				</Menu>
			</Header>
			<Content class="contents">
			  <router-view></router-view>
			</Content>
			<Footer class="footer">
				<div class="foot">
					<div class="left">
						<router-link to="/home/index" class="foot_logo"><img src="../../assets/img/logo.png" alt="" class="footer_logo"></router-link>
						<ul class="foot_list">
							<li><router-link to="/home/index">首页</router-link></li>
							<li><router-link  to="/home/app">下载APP</router-link></li>
							<li><router-link  to="/home/about">关于我们</router-link></li>
							<li><router-link  to="/home/help">帮助</router-link></li>
						</ul>
						<div>
							<div class="phone">010-122344321</div>
							<p>工作日 &nbsp; 9:00-22:00</p>
						</div>
						<p class="copyright">ywhm &copy; 2018 KNOWLEDGE IS POWER IN NWSUAF<br>陕西省杨凌示范区亿万毫米教育科技有限公司<br>京03-20180606 &nbsp; | &nbsp;<a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502031582"><img src="../../assets/img/jing.png" align="center" alt="">&nbsp;京公网安备11018821620434号</a></p>
					</div>
					<div class="right">
						<div>
							<div class="phone">010-122344321</div>
							<p>工作日 &nbsp; 9:00-22:00</p>
						</div>
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
        <!-- 登录 -->
        <login ref="login"></login>
		</Layout>
	</div>
</template>

<script>
import login from "../login/index";
export default {
  components: { login },
  data() {
    return {
      session: false,
      userName: "",
      hidden: "none",
      width: 0,
      hidden: "none",
      width: 0,
      isCollapsed: false
    };
  },
  mounted() {
    if (sessionStorage.getItem("userId")) {
      this.session = true;
      this.userName = sessionStorage.getItem("userName");
    }
  },
  methods: {
    switchPage(name) {
      switch (name) {
        //登录
        case "goLogin":
          this.$refs.login.showFrame();
          break;
        //退出登录
        case "goLogout":
          sessionStorage.removeItem("userId");
          sessionStorage.removeItem("userName");
          this.session = false;
          this.$router.go(0)
          break;
        default:
          this.$router.push(name);
          if (this.width <= 768 && name != "/home/index") {
            this.hidden = this.$refs.mid.style.display;
            this.$refs.mid.style.display =
            this.hidden == "none" ? "block" : "none";
          }
      }
    },
    show() {
      this.hidden = this.$refs.mid.style.display;
      this.$refs.mid.style.display = this.hidden == "none" ? "block" : "none";
      if (this.$refs.mid.style.display === "block") {
        this.$refs.fold.style.height = "270px";
      } else this.$refs.fold.style.height = "0px";
    }
  }
};
</script>

<style scoped>
  .contents {
    margin: 63px 0 0 0;
  }
  .hidden {
    height: 26px;
    width: 26px;
    margin: auto;
    position: absolute;
    top: 18px;
    display: none;
  }
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
    width: 100%;
    top: 0;
    left: 0;
    padding: 0;
  }
  .logo {
    height: 30px;
    width: 100px;
    margin-top: 15px;
  }
  .ivu-menu-horizontal {
    display: flex;
    justify-content: center;
  }
  .ivu-menu-dark.ivu-menu-horizontal .ivu-menu-item:hover {
    color: #23acf1;
  }
  .footer {
    width: 100%;
    height: 400px;
    margin: 0px;
    padding-top: 60px;
    padding-bottom: 60px;
    background-color: #495060;
    color: #fff;
  }
  .foot {
    margin: 0 auto;
    max-width: 850px;
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
  .left {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .left div {
    display: none;
  }
  .erweima img {
    width: 60px;
    height: 60px;
    padding: 6px;
    border-radius: 6px;
  }
  .footer_logo {
    width: 150px;
    margin-left: -10px;
  }
  .addr {
    clear: both;
    padding-top: 48px;
  }
  .right {
    margin-top: 10px;
  }
  .phone {
    font-size: 30px;
    height: 50px;
    padding-top: 8px;
  }
  p {
    font-size: 12px;
    margin-bottom: 10px;
    color: #bfbfbf;
  }
  .foot_list {
    margin-top: 20px;
    margin-bottom: 10px;
  }

  .foot_list li {
    height: 32px;
  }
  a {
    color: #999;
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
  .ivu-btn {
    width: 100%;
  }
  .register {
    color: #23acf1;
  }
  .register:hover {
    color: #23acf1;
  }
  .sm {
    display: none;
  }
  .ivu-modal-footer {
    visibility: hidden !important;
  }
  .vertical-center-modal {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .vertical-center-modal .ivu-modal {
    top: 0;
  }
  
  @media (max-width: 768px) {
    .logo {
      width: 90px;
      height: 27px;
    }
    .ivu-layout-header {
      padding: 0px;
    }
    .md {
      display: none;
    }
    .sm {
      display: block;
    }
    .ivu-menu-horizontal {
      display: block;
    }
    .top {
      height: 48px;
    }
    .foot_list {
      margin: 0;
    }
    .top_middle {
      display: none;
      position: absolute;
      width: 100%;
      top: 60px;
    }

    .top_middle div {
      width: 100%;
      display: flex;
      text-align: center;
      flex-direction: column;
      background-color: #495060;
    }
    .ivu-modal-footer {
      display: none !important;
    }
    .top_middle .ivu-menu-item {
      border-top: 1px solid #3c3c3c;
      height: 54px;
      line-height: 26px;
      padding: 15px;
      text-align: center;
    }
    .top_right {
      position: absolute;
      right: 30px;
      top: 0px;
      margin-right: 15px;
    }
    .login {
      position: absolute;
    }
    .hidden {
      display: block;
      position: absolute;
      right: 15px;
    }
    .ivu-modal-content {
      width: 420px !important;
    }
    .footer {
      padding: 20px;
      text-align: center;
      color: #fff;
    }
    .foot {
      flex-direction: column;
      align-content: center;
      justify-content: center;
    }
    .ma {
      display: none;
    }
    .left {
      width: 100%;
      text-align: center;
      height: auto;
    }
    .left div {
      display: block;
    }
    .left ul {
      display: flex;
      align-content: center;
      justify-content: center;
      font-size: #fff;
      margin-top: 30px;
    }
    .left li {
      margin: 0 10px;
    }
    .phone {
      font-size: 24px;
      padding: 0;
      height: 34px;
      margin-top: 8px;
    }

    .right div {
      display: none;
    }
    a,
    .copyright,
    .addr {
      color: #fff;
    }
    .copyright {
      order: 2;
    }
    .addr {
      padding-top: 6px;
    }
    .footer_logo {
      width: 120px;
    }
    .contents {
      margin: 58px 0 0 0;
    }
    .foot_logo {
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);
      font-size: 0;
      line-height: 32px;
      overflow: hidden;
      height: 50px;
    }
  }
</style>