<template>
	<div class="container">
		<Layout>
					<Sider hide-trigger :style="{background: '#fff'}" >
							<Menu theme="light" @on-select="switchPage">
					<div class="user" id="userInfo">
						<a class="user-avatar" id="nickname">
							<img src="../../assets/img/user-avatar.png" alt="" class="img">
						</a>
					</div>
					<MenuItem name="tutor" @click="orderTutor">我约的行家</MenuItem>
					<MenuItem name="wish_list">心愿单</MenuItem>
								</Menu>
						</Sider>
			<Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
				<div class="main0"  v-if="status">
					<div class="user-content">
						<h2>我约的人</h2>
						<div class="setting-content">
							<p class="none">
								真忧伤，我还没有约过人诶。
								<a href="">立即去约人！</a>
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
							<table>
								<tr>
									<td>
										<div class="avatar"><img src="../../assets/img/user-avatar.png" alt=""></div>
									</td>
									<td  @click="showDetail(item.id)">	
										<div class="title"><a href="">{{item.title}}</a></div>
										<div class="intro"><span>{{item.name}}</span><span>{{item.job}}</span></div>
									</td>
									<td>
										<div class="price">{{item.price}}元</div>
									</td>
									<td>
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
							<table>
								<tr>
									<td>
										<div class="avatar"><img src="../../assets/img/user-avatar.png" alt=""></div>
									</td>
									<td>	
										<div class="title"><a href="">{{item.title}}</a></div>
										<div class="intro"><span>{{item.name}}</span><span>{{item.job}}</span></div>
									</td>
								</tr>
							</table>
						</div>
						<div class="question">
							<p class="t">您想请教的问题是：</p>
							<p>{{item.question}}</p>
						</div>
						<div class="situation">
							<p class="t">您的个人简介：</p>
							<p>{{item.situation}}</p>
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
							<div class="info-major">{{item.job}}</div>
							<Button type="ghost" class="delete" @click="remove(item)">删除</Button>
						</div>
						<div class="info-bot"><span>{{item.sub_num}}</span>人已预约成功</div>
					</div>
					</div>
				</div>
						</Content>
		</Layout>
	</div>
</template>
<script>
export default {
	data() {
		return {
			// 判断是否存在订单
			status: false,
			total: [
				{
					id: "1",
					time: "2018-07-07",
					avator: "",
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
					avator: "",
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
	mounted() {
		this.getWish()
	},
	methods: {
		getWish() {
		let userId = sessionStorage.getItem("userId")
			this.$ajax({
		url: "/wish/selectByUser",
		data: {
			id: userId
		}
			})
				.then(res => {
					this.heartList = res.data
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
		orderTutor() {
			this.$refs.details.style.display = "none";
			this.$refs.main1.style.display = "block";
		},
		remove(item) {
			this.$ajax({
		url: "/wish/delete",
		data: {
			id: item.id,
			tutor_id: item.tutor_id
		}
			})
				.then(res => {
					this.getWish()
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
.heart {
	width: 780px;
	margin: 0 auto;
	display: none;
}
.delete {
	float: right;
	display: none;
	margin-top: 15px;
	width: 80px;
}
.info-middle {
	display: flex;
	align-content: space-around;
	justify-content: space-between;
	height: 44px;
}
.gd:hover .delete {
	display: block;
}
.container {
	width: 1080px;
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
.ivu-layout-sider {
	z-index: 0;
}
.user {
	margin-top: 20px;
	margin-bottom: 30px;
	text-align: center;
}
.detail:hover {
	color: #23acf1;
}
.img {
	width: 100px;
	border: 4px solid #fff;
	border-radius: 50%;
}
.main0 {
	border: 1px solid #e8e8e8;
	margin: 0 auto;
	width: 800px;
	display: none;
}
.main0 .user-content h2 {
	font-size: 14px;
	padding: 10px 15px 10px 30px;
	border-bottom: 1px solid #e8e8e8;
	overflow: hidden;
}
.main0 .user-content {
	height: 250px;
}
.main0 .setting-content {
	text-align: center;
	line-height: 250px;
}
.main1 .user-content {
	border: 1px solid #e8e8e8;
	margin: 0 auto;
	width: 780px;
	margin-bottom: 20px;
	background: #fff !important;
}
.main1 .setting-content {
	border-top: 1px solid #e8e8e8;
}
.time {
	height: 30px;
	line-height: 30px;
	padding-left: 20px;
}
table {
	width: 100%;
}
table td:nth-child(3),
td:nth-child(4) {
	text-align: center;
	width: 110px;
}
.main1 table td:nth-child(2),
td:nth-child(3) {
	border-right: 1px solid #e8e8e8;
}
.avatar {
	padding-top: 10px;
	padding-left: 20px;
}
.avatar img {
	width: 80px;
}
.title {
	font-size: 16px;
	margin-top: -6px;
	margin-bottom: 6px;
}
.title > a :hover {
	color: #23acf1 !important;
}
.check-details .user-content {
	margin: 0 auto;
	width: 780px;
	margin-bottom: 20px;
	background: #fff !important;
}
.check-details .setting-content,
.check-details .time {
	border-top: 1px solid #e8e8e8;
	border-right: 1px solid #e8e8e8;
	border-left: 1px solid #e8e8e8;
}
.check-details .situation {
	border-right: 1px solid #e8e8e8;
	border-left: 1px solid #e8e8e8;
	border-bottom: 1px solid #e8e8e8;
}
.check-details .question {
	border-top: 1px solid #e8e8e8;
	border-right: 1px solid #e8e8e8;
	border-left: 1px solid #e8e8e8;
	border-bottom: 1px dotted #e8e8e8;
}
.check-details .question,
.check-details .situation {
	padding-left: 20px;
	padding-top: 10px;
	padding-bottom: 10px;
}
.t {
	font-weight: bold;
	margin-bottom: 5px;
}
</style>
