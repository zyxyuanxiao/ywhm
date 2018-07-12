<template>
	<div style="background: #fafafa; margin-top:0;">
		<div class="container1">
			<Layout>
				<Sider>
					<Menu active-name="tutor" theme="light"  width="auto" @on-select="switchPage">
						<div class="user" id="userInfo">
							<img src="../../assets/img/user-avatar.png" alt="" class="img">
						</div>
						<MenuItem name="tutor">我约的行家</MenuItem>
						<MenuItem name="wish_list">心愿单</MenuItem>
					</Menu>
					<div slot="trigger" class="trigger"></div>
				</Sider>
				<Content style="background-color: #fafafa;">
					<div class="lead">
						<Button @click="switchPage1()">我约的行家</Button>
						<Button @click="switchPage2()">我的心愿单</Button>
					</div>
					<div ref="tutor">
						<div class="main0" ref="main0"  v-if="status">
							<div class="user-content">
								<div class="setting-content">
									<p class="none">
										真忧伤，我还没有约过人诶。
										<router-link to="/home/career">立即去约人！</router-link> 
									</p>
								</div>
							</div>
						</div>
						<div class="main1" ref="main1" v-else>
							<div class="user-content" v-for="item in total"  >
								<div class="time">
									<span>发起时间：{{item.time}}</span>
								</div>
								<div class="setting-content">
									<table height="130px" border="1" bordercolor="#e8e8e8" align="center"　style="border-collapse:collapse; horizontal-align: center">
										<tr valign="middle">
											<td style="display:flex;  border: none;"  @click="goDetail(item.tutor_id)" class="td">
												<div class="gd-avatar" :style="{backgroundImage:'url(' + item.avatar + ')'}"></div> 
												<div  style="margin-left: 16px; float: left; margin-top:10px;">	
													<div class="title">{{item.title}}</div>
													<div class="intro"><span>{{item.name}}</span><span>{{item.job}}</span></div>
												</div>
											</td>
											<td align="center">
												<div class="price">{{item.price}}元</div>
											</td>
											<td align="center">
												<div class="detail" @click="showDetail(item.id)">查看详情</div>	
											</td>
										</tr>
									</table>
								</div>
							</div>
						</div>
					</div>
					<div class="check-details" ref="details">
						<div class="user-content" v-for="item in filter">
							<div class="time">
								<span>发起时间：{{item.time}}</span>
							</div>
							<div class="setting-content">
								<table height="360px" border="1" bordercolor="#e8e8e8" align="center"　style="border-collapse:collapse; horizontal-align: center">
									<tr valign="middle" @click="goDetail(item.id)">
										<td width="190px" height="129px" class="td">
											<div class="gd-avatar" :style="{backgroundImage:'url(' + item.avatar + ')'}"></div>
										<div style="margin-left: 30px; float: left; margin-top:18px;">	
											<div class="title">{{item.title}}</div>
											<div class="intro"><span>{{item.name}}</span><span>{{item.job}}</span></div>
										</div>
										</td>
									</tr>
									<tr  valign="middle" class="question" >
										<td >
											<p class="t">您想请教的问题是：</p>
											<p>{{item.question}}</p>
										</td>
									</tr>
									<tr  valign="middle"  class="situation">
										<td>
											<p class="t">您的个人简介：</p>
											<p>{{item.situation}}</p>
										</td>
									</tr>
								</table>
							</div>
						</div>
					</div>
					<div ref="wish">
						<div class="main00"  ref="main00" v-if="heartstatus">
							<div class="user-content">
								<div class="setting-content">
									<p class="none">
										真忧伤，我的心愿单还没有行家。
										<router-link to="/home/career">立即去加人！</router-link> 
									</p>
								</div>
							</div>
						</div>
						<div class="heart" ref="heart" v-else>
							<div class="gd" v-for="(item,index) in heartList" @click="goDetail(item.tutor_id)">
								<div class="gd-avatar" :style="{backgroundImage:'url(' + item.avatar + ')'}"></div>
								<div class="gd-info" >
									<div class="info-top">
										<div class="tutor-info">
											<span class="tutor-title">{{item.name}}&nbsp;&nbsp;&nbsp;{{item.slogan}}</span>
										</div>
									</div>
									<div class="info-middle">
										<div style="font-size:14px;">{{item.job}}</div>
										<Button type="ghost" class="delete"  @click.stop="remove(item,index)">删除</Button>
									</div>
									<div class="info-bot"><span>{{item.sub_num}}</span>人已预约成功</div>
								</div>
							</div>
						</div>
					</div>
				</Content>
			</Layout>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      // 判断是否存在订单
			status: false,
			// 判断是否存在心愿单
			heartstatus: false,
      total: [],
      heartList: [],
      filter: []
    };
  },

  mounted() {
		this.getWish();
		this.getOrder();
		this.getStatus();
	},
  methods: {
		getStatus() {
			this.$refs.details.style.display = "none";
			this.$refs.tutor.style.display = "block";
			this.$refs.wish.style.display = "none";
		},
	  //获取心愿单列表
    getWish() {
      let userId = sessionStorage.getItem("userId");
      this.$ajax({
        url: "/wish/selectByUser",
        data: {
          id: userId
        }
      })
        .then(res => {
					this.heartList = res.data;
					if(this.heartList.length==0) {
							this.heartstatus=true;
					}
        })
        .catch(err => {
          console.log(err);
        });
		},
		 //获取订单列表
    getOrder() {
      let userId = sessionStorage.getItem("userId");
      this.$ajax({
        url: "/order/selectByUser",
        data: {
          id: userId
        }
      })
        .then(res => {
					this.total = res.data;
					if(this.total.length==0) {
						this.status=true;
					}
					console.log(this.total)
        })
        .catch(err => {
					console.log(err);
        });
    },
    goDetail(id) {
      this.$router.push("/home/detail?id=" + id);
    },
    showDetail(id) {
      console.log(id);
      this.$refs.details.style.display = "block";
      this.$refs.main1.style.display = "none";
      this.filter = this.total.filter(function(item, index, array) {
        console.log(item.id == id);
        return item.id == id;
      });
      console.log(this.filter);
		},
    //删除心愿单
    remove(item,index) {
      this.$ajax({
        url: "/wish/delete",
        data: {
          id: item.id,
          tutor_id: item.tutor_id
        }
      })
        .then(res => {
					this.heartList.splice(index,1);
					this.$Message.success("删除成功");
					console.log(this.total)
        })
        .catch(err => {
          console.log(err);
        });
    },
    switchPage(name) {
      if (name == "tutor") {
				if (this.total.length!=0) 
					this.$refs.main1.style.display = "block";
        this.$refs.details.style.display = "none";
				this.$refs.tutor.style.display = "block";
				this.$refs.wish.style.display = "none";
      } else {
				this.$refs.tutor.style.display = "none";
				this.$refs.wish.style.display = "block";
				this.$refs.details.style.display = "none";
				if(this.heartList.length==0) {
					this.heartstatus=true
				}
      }
		},
		switchPage1() {
			if (this.total.length!=0)			
				this.$refs.main1.style.display = "block";
      this.$refs.details.style.display = "none";
			this.$refs.tutor.style.display = "block";
			this.$refs.wish.style.display = "none";
		},
		switchPage2() {
      this.$refs.tutor.style.display = "none";
			this.$refs.wish.style.display = "block";
			this.$refs.details.style.display = "none";
			if(this.heartList.length==0) {
				this.heartstatus=true
			}
    }
  }
};
</script>

<style scoped>
	.ivu-layout.ivu-layout-has-sider {
		transform: translateZ(0);
	}
	.ivu-layout-sider {
		width: 160px;
		padding: 20px 0;
		max-width: 160px !important;
		min-width: 160px !important;
	}
	.ivu-layout-content {
		padding-left: 20px;
	}
	.lead {
		display: none;
	}
	.td {
		padding-right: 0px;
	}
	ul {
		width: 160px !important;
	}
	.ivu-menu-vertical.ivu-menu-light:after {
		display: none;
	}
	.ivu-menu-vertical .ivu-menu-item {
		font-size: 20px;
	}
	.check-details > .user-content {
		margin-right: 10px !important;
	}
	.table {
		display: flex;
		justify-content: space-around;
		align-content: center;
	}
	.gd-avatar {
		width: 85px;
		height: 85px;
	}
	.title {
		font-size: 20px;
	}
	.user-content {
		margin-right:10px;
		margin-left: 10px;
	}
	.title:hover {
		cursor: pointer;
		color: #23acf1;
	}
	.heart {
		margin: 0 auto 20px;
	}
	.delete {
		float: right;
		display: none;
		font-size: 14px;
		width: 80px;
	}
	.info-middle {
		display: flex;
		align-content: space-around;
		justify-content: space-between;
		height: 36px;
	}

	.gd:hover .delete {
		display: block;
	}
	.container1 {
		max-width: 900px;
		margin: 0 auto;
	}
	.ivu-layout-sider,
	.ivu-layout-content,
	.ivu-menu-light {
		background: #fafafa !important;
	}
	.ivu-layout.ivu-layout-has-sider > .ivu-layout,
	.ivu-layout.ivu-layout-has-sider > .ivu-layout-content {
		overflow-x: hidden;
		overflow-y: hidden;
	}
	.ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) {
		border-right: none;
		border-left: 2px solid #2d8cf0;
	}
	.user {
		margin-top: 20px;
		margin-bottom: 20px;
	}
	.detail:hover {
		color: #23acf1;
		cursor: pointer;
	}
	.img {
		width: 155px;
		border: 5px solid #fff;
		border-radius: 50%;
	}
	.main0 {
		margin: 20px auto;
	}
	.main0 .user-content h2 {
		font-size: 14px;
		padding: 10px 15px 10px 30px;
		border-bottom: 1px solid #e8e8e8;
		overflow: hidden;
	}
	.main0 .user-content {
		height: 120px;
		background-color: #fff;
			border: 1px solid #e8e8e8;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	.main0 .setting-content {
		text-align: center;
		line-height: 120px;
	}
	.main00 {
		margin:20px auto;
	}
	.main00 .user-content h2 {
		font-size: 14px;
		padding: 10px 15px 10px 30px;
		border-bottom: 1px solid #e8e8e8;
		overflow: hidden;
	}
	.main00 .user-content {
		height: 120px;
		background-color: #fff;
		border: 1px solid #e8e8e8;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	.main00 .setting-content {
		text-align: center;
		line-height: 120px;
	}
	.main1 {
		margin-bottom: 20px;
		margin-right: 10px;
	}
	.main1 .user-content {
		margin: 0 auto;
		background: #fff !important;
	}
	td {
		padding: 20px;
		font-size: 14px;
	}
	.time {
		height: 42px;
		line-height: 42px;
		font-size: 14px;
		padding-left: 20px;
		border: 1px solid #e8e8e8;
		border-bottom: none;
		margin-top: 20px;
	}
	table {
		width: 100%;
	}
	.avatar {
		padding-top: 10px;
		padding-left: 20px;
	}
	.avatar img {
		width: 80px;
	}
	.check-details .user-content {
		margin: 0 auto;
		margin-bottom: 20px;
		background: #fff !important;
	}
	.check-details .question,
	.check-details .situation {
		padding-left: 20px;
		padding-top: 10px;
		padding-bottom: 10px;
	}
	.t {
		font-weight: bold;
		margin-bottom: 14px;
		font-size: 14px;
	}
	p {
		font-size: 14px;
	}
	.ivu-layout-sider {
		z-index: 0;
	}

	@media (max-width: 1024px) {
		.img {
			margin-left: 15px;
		}
	}
	@media (max-width: 820px) {
		.title {
			font-size: 16px;
		}
	}
	@media (max-width: 768px) {
		.ivu-layout-sider {
			display: none
		}
		.ivu-layout-content {
			margin-left: -20px !important;
		}
		.user-content  {
			margin-left: 0px;
		}
		.lead {
			display: flex;
			margin-top: 20px;
			margin-bottom: -10px;
			justify-content: space-around;
		}
		.lead > Button {
			border: none;
			font-size: 14px;
			background: #fafafa !important;
		}
		.ivu-btn:focus {
			box-shadow: none !important;
			background: #fafafa !important;
		}
		.gd {
			border: 1px solid #e8e8e8;
		}
		.heart {
			margin-top: 20px;
			margin-right: 3%;
		}
		.main1 {
			margin-right: 10px; 
		}
		.container1 {
			padding-left: 10px;
		}
		.intro {
			font-size: 14px;
		}
		.td {
			padding-right: 0px;
			padding-left: 0px;
		}
		.ivu-menu-vertical .ivu-menu-item {
			font-size: 12px;
		}
		.table {
			display: flex;
			justify-content: space-around;
			align-content: center;
		}
		.gd-avatar {
			display: none;
		} 
		.title {
			font-size: 16px;
			padding-right: 10px;
			font-weight: bold;
		}
		.intro {
			padding-right: 10px;
			margin-top: 10px;
		}			
		.user {
			margin-top: 20px;
			margin-bottom: 30px;
			text-align: center;
		}
		.img {
			display: none;
		}
		.delete {
			display: block;
			width: 60px;
			height: 35px;
		}
	}
</style>
