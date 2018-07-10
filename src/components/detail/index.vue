<template>
	<div class="container">
			<div class="cover"></div>
			<div class="person">
				<div class="left"><div class="top">
					<div :style="{backgroundImage:'url(' + tutor.avatar + ')'}" class="avator"></div>
					
						<h1 class="name">{{ tutor.name }}</h1>
						<p class="intro1">{{ tutor.job }}</p>
						<div class="detail">
							<span><Icon type="ios-clock" color="#23acf1"></Icon><span class="highlight">{{tutor.respond}}</span>内回应</span>
							<span><Icon type="happy" color="#23acf1"></Icon><span class="highlight">{{ tutor.sub_num }}</span>人见过</span>
							<span><Icon type="heart" color="#23acf1"></Icon> <span class="highlight">{{ tutor.wish_num }}</span>人想见</span>
						</div>
						<p class="b">北京 &nbsp; <span>复兴门 &nbsp; 崇文门</span></p>	
					</div>
					<ul v-for="item in guides">
						<li class="item">
							<div class="price">							
								<div>
									<span>￥</span>
									<span>{{ item.price }}</span>
									<span>/次</span>
								</div>
								<div class="score">{{ item.score }}<span>分</span><Icon type="information-circled"  color="#b3b3b3" title="此分数有亿万毫米系统根据学员匿名评分等因素算出,每增加三次约见更新一次"></Icon></div>
							</div>
							<h2 class="title">{{ item.title }}</h2>
							<p  :class="{  content: active,  hidden: hidden }" ref="stc" >{{ item.describe }}</p>
							<div class="ft">
								<div class="topic-info">
									<span class="meet-time">约{{ item.duration }}小时</span>
									<span class="meet-num">{{item.count}}人约过</span>
								</div>
								<div>
									<img src="../../assets/img/fold.png" class="fold"  v-if="fold" @click="stretch('fold')">
								 	<img src="../../assets/img/shrink.png" class="shrink" v-else @click="stretch('shrink')">
								</div>
							</div>
						</li>
					</ul> 
					<h2>关于行家</h2>
					<div class="about_tutor">
						<div class="image" >
							<div class="tutor-pic">
								<img :src=tutor.avatar class="tutor-pic" alt="">
							</div>
						</div>
						<p>{{tutor.name}}, {{tutor.job}}</p>
						<p>{{tutor.major}}</p>
						<p>{{ tutor.descirbe }}</p>
					</div>
				</div>
				<div class="right">
					<div class="promise">
						<p class="tip">只需付<span>几百元，</span>就可以与行家</p>
						<p class="tip"><span>一对一线下面谈</span></p>
						<p class="occur">为您答疑解惑、出谋划策。不满意还能“无忧退款”。</p>
						<p class="about-tips">为您答疑解惑、出谋划策。</p>
						<p class="about-tips">不满意还能“无忧退款”。</p>
						<img src="../../assets/img/logo1.png" alt="" class="before" >
						<div style="clear:both"></div>
					</div>
					<div class="order">
						<Button type="primary" shape="circle" @click="showOrder">立即预约</Button>
						<Button type="ghost" shape="circle" @click="addWish"> <Icon type="heart" size="16" style="padding-right:5px"></Icon>{{wishStatus}}</Button>
					</div>
					
					<h2>相关行家</h2>
					<div class="relatedTutor" >
					<div class="guide" v-for="item in relatedTutors"  @click="goDetail(item.id)">
						<div class="tutor_avator" :style="{backgroundImage:'url(' + item.avatar + ')'}"></div>
						<div class="tutor_info">
							<div class="tutor_top">
								<span class="tutor">{{item.name}}</span>
								<em class="intro">{{item.job}}</em> 
							</div>
							<div class="title">{{item.major}}</div>
							<div class="bott"><span>{{item.sub_num}}</span>人见过</div>
						</div>
					</div>
					</div>
				</div>
			</div>
			<!-- 预约 -->
			<orders ref="order" :guide-list="guides"></orders>
			<!-- 登录 -->
	   		<login ref="login"></login>
	 </div>
</template>
<script>
import orders from './order.vue'
import login from '../login'
export default {
	components:{
		orders,
		login
	},
	data () {
		return {
			active: true,
			hidden: false,
			fold: true,
			id: null,
			tutor: {},
			guides: [],
			relatedTutors: [],
			wishStatus: "加入心愿单"
		}
	},
	
	mounted() {
		this.id = this.$route.query.id
		this.getOne()
		this.selectByTutor()
		this.getRelatedTutors()
	},
	methods: {
		showOrder() {
			this.$refs.order.showFrame();
		},
		goDetail(id) {
			 this.$router.push("/home/");
			 var that =this
			 setTimeout(function (){
				that.$router.push("/home/detail?id=" + id);
			}, 	0.01);
		},
		//获取导师信息
		getOne () {
			this.$ajax({
				url: "/tutor/getOne",
				data: {
					id: this.id
				}
			}).then(res => {
				this.tutor=res.data
			}).catch(err => {
				console.log(err);
			})
		},
		getRelatedTutors () {
			this.$ajax({
				url: "/tutor/selectByRandom",
			}).then(res => {
				this.relatedTutors=res.data
			}).catch(err => {
				console.log(err);
			})
		},
		//获取导师所有指导课
		selectByTutor () {
			this.$ajax({
				url: "/guide/selectByTutor",
				data: {
					tutor_id: this.id
				}
			}).then(res => {
				this.guides=res.data
			}).catch(err => {
				console.log(err);
			})
		},
		stretch (str){
			if(str=="fold"){
				this.hidden=true
				this.fold=false
			}
			else {
				this.hidden=false
				this.fold=true
			}
		},
		addWish() {
			let userId = sessionStorage.getItem("userId")
			if(!userId) {
				this.$refs.login.showFrame();
				return;
			}
			this.$ajax({
				url: "/wish/add",
				data: {
					tutor_id: this.id,
					user_id: userId
				}
			}).then(res => {
				if(res.status == "success") {
					this.wishStatus = "已加入心愿单"
				}else {
					console.log(res.msg)
				}
			}).catch(err => {
				console.log(err);
			})
		}		
	}
}
</script>

<style scoped>
	.relatedTutor {
		margin-bottom: 30px;
	}
    .hidden {
		height: auto !important;
		overflow: visible !important;
	}
	.fold,.shrink{
		width: 18px;
		margin-top: 16px;
	}
	.stretch{
		width: 24px;
		height: 24px;
		/* line-height: 50px; */
	 }
	.ft {
		border-top: 1px solid #ddd;
		height: 50px;
		line-height: 18px;
		display: flex;
		justify-content: space-between;
		align-content: center;
	}
	.topic-info {
		display: inline-block;
	}
	.meet-time {
		font-size: 14px;
		border-right: 1px solid #ddd;
		display: inline-block;
		margin: 16px 6px 16px 0;
		padding-right: 10px;
	}
	.meet-num {
		font-size: 14px;
		display: inline-block;
		margin: 16px 6px 16px 0;
		padding-right: 10px;
	}
	.container {
		width: 100%;
		background-color: #fff;
	}
	.cover {
		background: url('../../assets/img/info_bg.jpg') no-repeat;
		background-size: cover;
		height: 500px;
		background-position: center;
		margin-top: -64px;
	}
	.avator {
		float: left;
		padding: 5px;
		width: 165px;
		height: 165px;
		border-radius: 50%;
		margin: -128px 25px 0 0;
		background-repeat: no-repeat;
		background-size: cover;
		box-shadow: 0 1px 1px #ccc;
	}
	.person {
		max-width: 900px;
		margin: 0 auto;
		display: flex;
	}
	.left{
		width: 560px;
	}
	.right {
		width: 340px;
		padding-left: 40px;
		margin-top: 70px;
	}
	.top {
		text-align: center;
	}
	.name {
		font-size: 38px;
		line-height: 38px;
		font-weight: 400;
		clear: both;
	}
	.occur {
		margin:5px 0 10px;
	}
	.detail {
		margin: 10px 77px 4px;
		display: flex;
		justify-content: space-around;
		align-content: center;
		border-top: 1px solid #e5e5e5;
		border-bottom: 1px solid #e5e5e5;
	}
	.detail > span {
		width: 33%;
		position: relative;
	}
	.detail > span:after{
		content: "|";
		position: absolute;
		height: 14px;
		width: 1px;
		right: 0px;
	}
	.top span, .intro1 {
		color: #b0b0b0;
	}
	.b {
		font-weight: bold;
	}
	.highlight {
		color:#23acf1;
		padding-left:8px;
	}
	.price {
		display: flex;
		justify-content: space-between;
		margin-bottom: 10px;
	}
	.score span{
		font-size:12px;
		padding-right: 5px;
	}
	.price span:nth-child(2),.score{
		font-size: 20px;
	}
	.tip {
		font-size: 20px;
	}
	.promise {
		margin-top:25px;
		padding: 25px 0 20px 20px;
		width: 320px;
		background: #f1efee;
		border-radius: 8px;
		overflow: hidden;
	}
	.about-tips {
		display: none;
	}
	.promise p span {
		font-weight: bold;
	}
	.promise span {
		font-size: 20px;
		font-weight: bold;
	}
	.before {
		width:90px; 
		float:right; 
		margin-top:8px; 
		margin-right:22px;
	}
	.order {
		padding: 20px;
		width: 320px;
		font-size:14px;
	}
	.ivu-btn-primary {
		width: 100%;
		height: 40px;
		color:#fff;
		font-size:14px;
		margin-bottom: 12px;
	}
	.ivu-btn-ghost {
		width: 100%;
		height: 40px;
		color: #000;
		font-size:14px;
		border-color: #ccc;
	}
	.ivu-btn-ghost:hover {
		color: #23acf1;
	}
	.content {
		line-height: 28px;
		font-size: 14px;
		margin-bottom: 10px;
		height: 54px;
		overflow: hidden;
	}
	h2 {
		margin-bottom: 10px;
		margin-top: 15px;
		color: rgb(52, 52, 52);
		font-weight: 700;
		padding-left: 5px;
	}
	.item {
		background: #fcfaf9;
		/* overflow: hidden; */
		margin-top: 20px;
		padding:30px 20px 10px;
	}
	.about_tutor p {
		margin: 0 10px;
		margin-bottom: 10px;
		line-height: 22px;
		font-size: 14px;
	}
	.tutor_avator {
		width: 50px;
		height: 50px;
		background-repeat: no-repeat;
		background-size: cover;
		border-radius: 50%; 
		float: left;
	}
	.tutor_info {
		padding-left: 10px;
		overflow: hidden;
	}
	em {
		color: #23acf1;
	}
	.tutor {
		color: #939393;
		font-size: 14px;
		margin-right: 5px;
	}
	.title{
		font-size: 14px;
	}
	.bott {
		color: rgb(102, 102, 102);
	}
	.guide {
		padding: 15px 0 15px 10px;
		border-bottom: 1px solid #ccc;
		overflow: hidden;
		cursor: pointer;height: 100px;
	}
	.guide:hover .title {
		color: #23acf1;
	}
	.image {
		margin: 10px auto 17px;
		text-align: center;
		height: 550px;
		overflow: hidden;
	}
	.image img{
		width: 450px;
	}
	.item .title {
		font-size: 18px;
	}
	.vertical-center-modal{
		display: flex;
		align-items: center;
		justify-content: center; 
	} 
	.vertical-center-modal .ivu-modal{
		top: 0;
	}
	.vertical-center-modal .ivu-modal-footer{
		display: none;
	}
	.ivu-form .ivu-form-item-label,p {
		font-size: 14px;
	}
	.vertical-center-modal{
		display: flex;
		align-items: center;
		justify-content: center; 
	} 
	.vertical-center-modal .ivu-modal{
		top: 0;
	}
	.vertical-center-modal .ivu-modal-footer{
		display: none;
	}
	.ivu-modal-body:first-child {
		width: 500px;
		margin: auto;
	}
	.gd_list {
		width: 100%;
		font-size: 14px;
   		margin-bottom: 20px;
		height: 40px;
		border: 1px solid rgb(52, 52, 52);
		border-radius: 20px; 
		cursor: pointer;
		line-height: 40px;
		display: block;
		margin-top: 10px;
		padding: 0 20px;
		text-align: left;
	}	
	.gd_list:first-child {
		background-color: #23acf1;
		color:#fff;
		border-color: #23acf1;
	}
	.gd_list:visited {
		background-color: #23acf1;
		color:#fff;
		border-color: #23acf1;
	}
	.gd_list:hover {
		/* background-color: #6ed5d7; */
		border: 1px solid #23acf1;
		color: #343434;
	}
	.m_title {
		float: left;
	}
	.ivu-steps {
		height: 40px;
		margin-top: 20px;
	}
	.m_price {
		float: right;
		font-size: 12px;
		line-height: 1.4;
		margin-top: 3px;
		text-align: right;
	}
	.ivu-btn-primary:last-child,.sbm{
		padding: 10px;
		width: 140px;
		height: 34px;
		line-height: 34px;
		text-align: center;
	}
	.sub,.next1 {
		margin: 0px 6px;
	}
	.next {
		text-align: right;
   		width: 100%;
		margin-top: 10px;
	}
	.sub {
		margin-top: 20px;
		margin-bottom: 20px;
		font-size: 32px;
		color: rgb(52,52,52);
		font-weight: 500;
	}
	.form {
		margin-top:20px;
		display: none;
	}
	.submit{
		 display: none;
	}
	@media (max-width: 992px) {
		.cover {
			height: 250px;
		}
		.avator {
			width: 133px;
			height: 133px;
			float: none;
			margin: -100px auto 0;
		}
		.image {
			margin: 10px 15px 17px;
		}
		.name {
			margin: 20px 0 5px;
			font-weight: 700;
			line-height: 20px;
			font-size: 20px;
		}
		.person {
			flex-direction: column;
		}
		.left {
			width: 100%;
		}
		.right {
			width: 100%;
			margin-top: 20px;
			padding-left: 0;
			width: 100%;
		}
		.promise {
			width: 100%;
			margin-top: 0;
			border-radius: 0;
		}
		.promise span{
			font-size: 24px
		}
		.detail {
			margin-left: 0;
			margin-right: 0;
		}
		.occur,.before {
			display: none;
		}
		.about-tips {
			color: #666;
			font-size: 14px;
			margin: 5px 0 0;
			display: block;
		}
		.tip {
			line-height: 35px;
			font-size: 24px;
		}
		.order {			
			padding: 10px 0;
			position: fixed;
			bottom: 0;
			left: 0;
			width: 100%;
			background-color: #fff;
			align-content: space-around;
			z-index: 10;
			display: flex;
		}
		.ivu-btn-primary {
			margin-bottom: 0;
			margin: 0 2%;
			width: 96%;
		}
		.ivu-btn-ghost {
			width: 96%;
			margin: 0 2%;
		}
	}
</style>