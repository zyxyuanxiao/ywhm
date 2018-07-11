<template>
	<div style="background: #fafafa; margin-top:0;">
		<div class="container1">
			<Layout>
				<Sider breakpoint="sm" collapsible :collapsed-width="78"  hide-trigger v-model="isCollapsed">
					<Menu active-name="tutor" theme="light"  width="auto" @on-select="switchPage" :class="menuitemClasses">
						<div class="user" id="userInfo">
							<img src="../../assets/img/user-avatar.png" alt="" class="img">
						</div>
						<MenuItem name="tutor">我约的行家</MenuItem>
						<MenuItem name="wish_list">心愿单</MenuItem>
					</Menu>
					<div slot="trigger" hide-trigger="true"></div>
				</Sider>
				<Content style="background-color: #fafafa;">
					<div class="main0"  v-if="status">
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
										<td style="display:flex;  border: none;"  @click="goDetail(item.id)" class="td">
											<div class="gd-avatar" :style="{backgroundImage:'url(' + item.avatar + ')'}"></div> 
											<div  style="margin-left: 30px; float: left; margin-top:18px;">	
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
					<div class="heart" ref="heart">
						<div class="gd" v-for="item in heartList" @click="goDetail(item.id)">
							<div class="gd-avatar" :style="{backgroundImage:'url(' + item.avatar + ')'}"></div>
							<div class="gd-info" >
								<div class="info-top">
									<div class="tutor-info">
										<span class="tutor-title">{{item.name}}&nbsp;&nbsp;&nbsp;{{item.slogan}}</span>
									</div>
								</div>
								<div class="info-middle">
									<div style="font-size:14px;">{{item.job}}</div>
									<Button type="ghost" class="delete" @click="remove(item)">删除</Button>
								</div>
								<div class="info-bot"><span>{{item.sub_num}}</span>人已预约成功</div>
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
			isCollapsed: false,
			collapsible: true,
      // 判断是否存在订单
      status: false,
      total: [
        {
          id: "1",
          time: "2018-07-07",
          avatar: "http://medias.zaih.com/Fh36I3XxXcYWjK_jkOtlfGa2G_WA",
          title: "医学背景健身导师，解决你所有问题!",
          name: "原李峰",
          job: "「原来健身工作室」创始人",
          price: 499,
          question: "aaaaaaaaaaaaaaa",
          situation: "bbbbbbbbbbbbbbbbb"
        },
        {
          id: "2",
          time: "2018-07-07",
          avatar: "http://medias.zaih.com/Fh36I3XxXcYWjK_jkOtlfGa2G_WA",
          title: "医学背景健身导师，解决你所有问题!",
          name: "原李峰",
          job: "「原来健身工作室」创始人",
          price: 499,
          question: "aaaaaaaaaaaaaaa",
          situation: "cccccccccccccc"
        }
      ],
      heartList: [],
      filter: []
    };
  },
	computed: {
    menuitemClasses: function () {
      return [
      	'menu-item',
         this.isCollapsed ? 'collapsed-menu' : ''
      ]
    }
  },
  mounted() {
    this.getWish();
  },
  methods: {
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
    remove(item) {
      this.$ajax({
        url: "/wish/delete",
        data: {
          id: item.id,
          tutor_id: item.tutor_id
        }
      })
        .then(res => {
          this.$Message.success("删除成功");
        })
        .catch(err => {
          console.log(err);
        });
    },
    switchPage(name) {
      if (name == "tutor") {
        this.$refs.details.style.display = "none";
        this.$refs.main1.style.display = "block";
        this.$refs.heart.style.display = "none";
      } else {
        this.$refs.details.style.display = "none";
        this.$refs.main1.style.display = "none";
        this.$refs.heart.style.display = "block";
      }
    }
  }
};
</script>

<style scoped>
	.ivu-layout.ivu-layout-has-sider {
		transform: translateZ(0);
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
		margin: 0 auto;
		display: none;
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
		padding-bottom: 30px;
		padding-top:20px;
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
	}
	.img {
		width: 155px;
		border: 5px solid #fff;
		border-radius: 50%;
	}
	.main0 {
		margin: 0 auto;
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

	@media (max-width: 1000px) {
		.img {
			margin-left: 20px;
		}
	}
	@media (max-width: 820px) {
		.title {
			font-size: 16px;
		}
	}
	@media (max-width: 768px) {
		Sider {
			width: 80px !important;
		}
		.intro {
			font-size: 14px;
		}
		/* .ivu-layout-sider {
			max-width: 25% !important;
			min-width: 25% !important;
		} */
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
		}
	}
</style>
