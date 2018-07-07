<template>
	<div class="container">
		<Layout>
        	<Sider hide-trigger :style="{background: '#fff'}">
            	<Menu theme="light" width="auto">
					<div class="user" id="userInfo">
						<a class="user-avatar" id="nickname">
							<img src="../../assets/img/user-avatar.png" alt="" class="img">
						</a>
					</div>
					<MenuItem name="tutor">我约的行家</MenuItem>
					<MenuItem name="wish_list">心愿单</MenuItem>
                </Menu>
            </Sider>
			<Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
				<div class="main0">
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
				<div class="main1">
					<div class="user-content" v-for="item in total" @click="goDetail(item.id)" >
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
										<div class="title">{{item.title}}</div>
										<div class="intro"><span>{{item.name}}</span><span>{{item.job}}</span></div>
									</td>
									<td>
										<div class="price">{{item.price}}</div>
									</td>
									<td>
										<div class="detail"><a href="">查看详情</a></div>	
									</td>
								</tr>
							</table>
							<!-- <div class="left">
								<div class="avatar"><img src="../../assets/img/user-avatar.png" alt=""></div>
								<div class="title">{{item.title}}</div>
								<div class="intro"><span>{{item.name}}</span><span>{{item.job}}</span></div>
							</div>
							<div class="right">
								<div class="price">{{item.price}}</div>
								<div class="detail"><a href="">查看详情</a></div>	
							</div>							 -->
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
				total: [
                    {
                        "id": "1",
						"time": "2018-07-07",
                        "avator": "",
                        "title": "医学背景健身导师，解决你所有问题!",
						"name": "原李峰",
                        "job": "「原来健身工作室」创始人",
                        "price": 499
                    },
					{
                        "id": "2",
						"time": "2018-07-07",
                        "avator": "",
                        "title": "医学背景健身导师，解决你所有问题!",
						"name": "原李峰",
                        "job": "「原来健身工作室」创始人",
                        "price": 499
                    }
				]
			};
		},

		methods: {
		
    	}
	}
</script>
<style scoped>
.container {
	/* width:1080px; */
	margin:0 auto;
}
.ivu-layout.ivu-layout-has-sider>.ivu-layout, .ivu-layout.ivu-layout-has-sider>.ivu-layout-content {
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

.img {
	width: 100px;
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
	height:250px; 
}
.main0 .setting-content {
	text-align: center;
	line-height: 250px;

}

.main1 .user-content {
	border: 1px solid #e8e8e8;
	margin: 0 auto;
	width: 650px;
	margin-bottom: 20px;
}
.main1 .setting-content  {
	border-top: 1px solid #e8e8e8;
}
.time {
	height: 30px;
	line-height: 30px;
	padding-left: 20px;
}
table {
	width:100%;
}
table td:nth-child(3),td:nth-child(4) {
	text-align: center;
	width: 110px;
}
table td:nth-child(2),td:nth-child(3) {
	border-right: 1px solid #e8e8e8;
}
.avatar {
	padding-top: 10px;
	padding-left: 20px;
}
.avatar img{
	width: 80px;
}
.title {
	font-size: 16px;
	
}
/* .title :hover {
	color: #23acf1;
} */


</style>
