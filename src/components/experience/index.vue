<template>
	<div class="page">
		<div class="page-tag">
			<div class="type">行业经验&nbsp;&gt;</div>
			<div v-for="item in tags" class="tag" @click="changeTag(item)">{{item}}</div>
		</div>
		<div class="page-content">
			<div class="gd" v-for="item in filter" @click="goDetail(item.tutor_id)" >
			<div class="gd-avatar" :style="{backgroundImage:'url(' + item.avatar + ')'}"></div>
				<div class="gd-info" >
					<div class="info-top">
						<div class="tutor-info">
							<span class="tutor-title">{{item.title}}</span>
							<span class="score">{{item.score}}
							<span class="unit">分</span>
							<Icon type="information-circled" size="16" title="话题转有行系统算法综合学员的匿名评分以及多级因素得出，每增加三个评分，更新一次" color="#b3b3b3"></Icon></span>
						</div>
							<div class="price">{{item.price}} <span>元/次</span></div>
					</div>
					<div class="info-mid">
						<div class="info-tutor">{{item.name}}</div>
						<div class="info-major">{{item.job}}</div> 
					</div>
					<div class="info-bot"><span>{{item.sub_num}}</span>人已预约成功</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			tags: ["全部", "设计", "人力", "销售", "金融"],
			total: [],
			filter: []
		};
	},
	mounted: function() {
		this.getList();
	},
	methods: {
		getList() {
			this.$ajax({
				url: "/guide/selectByType",
				data: {
					big_type: "行业经验"
				}
			})
				.then(res => {
					this.total = res.data;
					this.filter = res.data;
				})
				.catch(err => {
					console.log(err);
				});
		},
		changeTag(small_type) {
			console.log(this.filter);
			var total = this.total;
			if (small_type == "全部") this.filter = total;
			else {
				this.filter = total.filter(function(item, index, array) {
					return item.small_type == small_type;
				});
			}
		},
		goDetail(id) {
			this.$router.push("/home/detail?id=" + id);
		}
	}
};
</script>
<style>
.page {
	background: #fafafa;
}
.page-tag {
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 5px;
	border-bottom: 1px solid #e6e6e6;
	font-size: 14px;
	flex-wrap: wrap;
}
.type {
	font-weight: bold;
	margin-right: 10px;
}
.tag {
	margin: 0 15px;
}
.tag:hover {
	cursor: pointer;
	color: #23acf1;
}
.page-content {
	max-width: 900px;
	margin-left: auto;
	margin-right: auto;
}
.gd {
	margin: 12px 10px 0;
	background-color: #fff;
	margin-bottom: 10px;
	padding: 20px;
}
.gd:hover {
	cursor: pointer;
	box-shadow: 0 0 10px rgba(35, 172, 241, 0.5);
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
}
.gd:hover .gd-info .info-top .tutor-title {
	color: #23acf1;
}
.gd-avatar {
	width: 110px;
	height: 110px;
	background-repeat: no-repeat;
	background-size: cover;
	border-radius: 50%;
	float: left;
}
.gd-info {
	height: 110px;
	padding-left: 15px;
	overflow: hidden;
}
.info-top {
	display: flex;
	justify-content: space-between;
	font-size: 20px;
}
.unit {
	font-size: 12px;
}
.tutor-title {
	font-size: 20px;
	max-width: 525px;
	margin-right: 15px;
}
.info-mid {
	display: flex;
	margin: 2px 0 10px 0;
}
.info-tutor {
	font-weight: 700;
	margin-right: 10px;
}
.info-bot span {
	color: #23acf1;
	font-size: 16px;
}
ul {
	list-style-type: none;
}
a {
	text-decoration: none;
}
.vertical-center-modal {
	display: flex;
	align-items: center;
	justify-content: center;
}
.vertical-center-modal .ivu-modal {
	top: 0;
}
.vertical-center-modal .ivu-modal-footer {
	display: none;
}
@media (max-width: 768px) {
	.gd-avatar {
		width: 80px;
		height: 80px;
	}
	.tutor-title {
		color: #23acf1;
		font-weight: 700;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 16px;
	}
	.info-mid {
		margin: 2px 0 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.gd-info {
		height: 80px;
		padding-left: 10px;
	}
	.gd {
		padding: 8px;
	}
	.score {
		display: none;
	}
	.info-top {
		display: block;
		font-size: 12px;
	}
}
</style>
