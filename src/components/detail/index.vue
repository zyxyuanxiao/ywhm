<template>
	<div class="container">
			<div class="cover"></div>
			<div class="person">
				<div class="left"><div class="top">
					<img src="../../assets/img/teacher.jpg" alt="" class="avator">
					
						<h1 class="name">{{ total.name }}</h1>
						<p class="intro1">{{ total.intro }}</p>
						<div class="detail">
							<span><Icon type="ios-clock" color="#23acf1"></Icon><span class="highlight">半天</span>内回应</span>
							<span><Icon type="happy" color="#23acf1"></Icon><span class="highlight">{{ total.sub_num }}</span>人见过</span>
							<span><Icon type="heart" color="#23acf1"></Icon> <span class="highlight">{{ total.wish_num }}</span>人想见</span>
						</div>
						<p class="b">北京 &nbsp; <span>复兴门 &nbsp; 崇文门</span></p>	
					</div>
					<div class="button">通话</div>
					<ul>
						<li class="item">
							<div class="price">							
								<div>
									<span>￥</span>
									<span>{{ total.price }}</span>
									<span>/次</span>
								</div>
								<div class="score">{{ total.score}}<span>分</span><Icon type="information-circled"  color="#b3b3b3" title="此分数有亿万毫米系统根据学员匿名评分等因素算出,每增加三次约见更新一次"></Icon></div>
							</div>
							<h2 class="title">{{ total.topic }}</h2>
							<div class="content">
								<p class="content">{{ total.duration }}</p>
								<div class="fold"></div>
							</div>
							<div class="ft">
								<div class="topic-info">
									<span class="meet-time">约{{ total.respond}}小时</span>
									<span class="meet-num">{{total.sub_num}}人约过</span>
								</div>
							</div>
						</li>
						<li class="item">
							<div class="price">	
								<div>
									<span>￥</span>
									<span>{{ total.price }}</span>
									<span>/次</span>
								</div>
								<div class="score">{{ total.score}}<span>分</span><Icon type="information-circled" color="#b3b3b3"  title="此分数有亿万毫米系统根据学员匿名评分等因素算出,每增加三次约见更新一次"></Icon></div>
							</div>
							<h2 class="title">{{ total.topic }}</h2>
							<div class="content">
								<p class="content">{{ total.duration}}</p>
								<div class="fold"></div>
							</div>
							<div class="ft">
								<div class="topic-info">
									<span class="meet-time">约{{total.respond}}小时</span>
									<span class="meet-num">{{total.sub_num}}人约过</span>
								
								</div>
							</div>
						</li>
					</ul> 
					<h2>关于行家</h2>
					<div class="about_tutor">
						<div class="image"><img src="../../assets/img/teacher_detail.jpg" class="tutor-pic" alt=""></div>
						<p>{{ total.about }}</p>
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
						<Button type="primary" shape="circle" @click="showOrder" v-model="modal1">立即预约</Button>
						<Button type="ghost" shape="circle"> <Icon type="heart" size="16" style="padding-right:5px"></Icon>加入心愿单</Button>
					</div>
					
					<h2>相关行家</h2>
					<div class="guide">
						<div class="tutor_avator">{{item.avator}}</div>
						<div class="tutor_info">
							<div class="tutor_top">
								<span class="tutor">{{item.tutor}}</span>
								<em class="intro">{{item.intro}}</em> 
							</div>
							<div class="title">{{item.title}}</div>
							<div class="bott"><span>{{item.sub_num}}</span>人见过</div>
						</div>
					</div>
					<div class="guide">
						<div class="tutor_avator">{{item.avator}}</div>
						<div class="tutor_info">
							<div class="tutor_top">
								<span class="tutor">{{item.tutor}}</span>
								<em class="intro">{{item.intro}}</em> 
							</div>
							<div class="title">{{item.title}}</div>
							<div class="bott"><span>{{item.sub_num}}</span>人见过</div>
						</div>
					</div>
					<div class="guide">
						<div class="tutor_avator">{{item.avator}}</div>
						<div class="tutor_info">
							<div class="tutor_top">
								<span class="tutor">{{item.tutor}}</span>
								<em class="intro">{{item.intro}}</em> 
							</div>
							<div class="title">{{item.title}}</div>
							<div class="bott"><span>{{item.sub_num}}</span>人见过</div>
						</div>
					</div>
				</div>
			</div>
			<orders :message="modal1" @changingType="showOrder"></orders>
	 </div>
</template>
<script>
import orders from './order.vue'
export default {
	components:{orders},
	data () {
		return {
			modal1: false,
			total: {
				 		"id": "1",
						"avator": "",
						"title": "医学背景健身导师，解决你所有问题!",
						"score": 9.3,
						"name": "曲明",
						"intro": "「原来健身工作室」创始人",
						"sub_num": 100,
						"price": 499,
						"topic": "累成狗，没加薪，怎么办？",
						"duration": "找兼职赚外快？炒股票赚快钱？别逗了！升职加薪才是性价比最优的开源方式好不好！可是，累成了加班狗，资历不如你、业绩不如你的同事纷纷升迁，你被排除在外；努力敬业、谦虚待人，加薪屡屡失之交臂；恪尽职守、勤奋工作，升职依旧遥不可及。当你压抑着越来越多愤怒的时候，好事者却在一边幸灾乐祸。究竟什么样的人才能升职加薪？是兢兢业业、埋头苦干、超额完成任务的人，还是那些游手好闲、见风使舵，却城府老辣、深谋远虑的人？是实力受到肯定的员工，还是锋芒毕露的红人？职场是一个没有硝烟的战场，如果你在这个战场上勇往直前，不仅没有取得战绩，却负伤累累，是时候盘点整顿了。我能从“术”的角度给你方法，帮助你以全新的面貌整装待发，重上战场。本话题不适合工作为体制内讲究论资排辈的人群哦，制度的壁垒无能为力，你懂得：）本话题涉及的是职场中“术”的方法，如果你有职业转换、职业倦怠、职业迷茫、offer选择的困惑，可选择我发布的另外一个职场“道”的话题。升职加薪是性价比最优的开源方式！本次预约为远程通话，需要在「在行」App内完成通话扫描二维码下载App分享话题： ",
						"about": "资深HR，央企集团总部人力资源经理。精通人力资源各个模块。人力资源师，经济师，职业规划深度嗜好者。崇尚“每天做一件实事，每月做一件新事，每年做一件大事，一生做一件有意义的事”。追求工作与生活的平衡，30出头却长着一张20岁的娃娃脸，穿XS码裤子，但却已经是4岁宝宝的母亲。身边朋友及公司员工在职场中遇到问题时总会第一时间咨询我，有“知心姐姐”之称^_^乐于助人，善于分享，希望可以帮助到更多的朋友。微信公众号：李小船（定期分享职场发展和个人成长原创文章，欢迎关注）",
						"wish_num":200,
						"respond": 1,
			},
			item: {
				 		"id": "1",
						"avator": "",
						"title": "医学背景健身导师，解决你所有问题!",
						"score": 9.3,
						"name": "曲明",
						"intro": "「原来健身工作室」创始人",
						"sub_num": 100,
						"price": 499,
						"topic": "累成狗，没加薪，怎么办？",
						"duration": "找兼职赚外快？炒股票赚快钱？别逗了！升职加薪才是性价比最优的开源方式好不好！可是，累成了加班狗，资历不如你、业绩不如你的同事纷纷升迁，你被排除在外；努力敬业、谦虚待人，加薪屡屡失之交臂；恪尽职守、勤奋工作，升职依旧遥不可及。当你压抑着越来越多愤怒的时候，好事者却在一边幸灾乐祸。究竟什么样的人才能升职加薪？是兢兢业业、埋头苦干、超额完成任务的人，还是那些游手好闲、见风使舵，却城府老辣、深谋远虑的人？是实力受到肯定的员工，还是锋芒毕露的红人？职场是一个没有硝烟的战场，如果你在这个战场上勇往直前，不仅没有取得战绩，却负伤累累，是时候盘点整顿了。我能从“术”的角度给你方法，帮助你以全新的面貌整装待发，重上战场。本话题不适合工作为体制内讲究论资排辈的人群哦，制度的壁垒无能为力，你懂得：）本话题涉及的是职场中“术”的方法，如果你有职业转换、职业倦怠、职业迷茫、offer选择的困惑，可选择我发布的另外一个职场“道”的话题。升职加薪是性价比最优的开源方式！本次预约为远程通话，需要在「在行」App内完成通话扫描二维码下载App分享话题： ",
						"about": "资深HR，央企集团总部人力资源经理。精通人力资源各个模块。人力资源师，经济师，职业规划深度嗜好者。崇尚“每天做一件实事，每月做一件新事，每年做一件大事，一生做一件有意义的事”。追求工作与生活的平衡，30出头却长着一张20岁的娃娃脸，穿XS码裤子，但却已经是4岁宝宝的母亲。身边朋友及公司员工在职场中遇到问题时总会第一时间咨询我，有“知心姐姐”之称^_^乐于助人，善于分享，希望可以帮助到更多的朋友。微信公众号：李小船（定期分享职场发展和个人成长原创文章，欢迎关注）",
						"respond": 3,
						"wish_num": 1321
			},
		}
	},
	methods: {
		showOrder(data) {
			if(data == 'false'){
				this.modal1 = false;
			}else{
				this.modal1 = true;
			}
		}
	}
}
</script>

<style scoped>
	.ft {
		border-top: 1px solid #ddd;
		height: 50px;
		line-height: 18px;
	}
	.topic-info {
		display: inline-block;
	}
	.meet-time {
		border-right: 1px solid #ddd;
		display: inline-block;
		margin: 16px 6px 16px 0;
		padding-right: 10px;
	}
	.meet-num {
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
		background-color: #fff;
		box-shadow: 0 1px 1px #ccc;
	}
	.person {
		max-width: 900px;
		margin: 0 auto;
		display: flex;
	}
	.left, .right {
		width: 100%;
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
	.button {
		border: 1px solid #23acf1;
		border-radius: 18px;
		text-align: center;
		color:#23acf1;
		height: 36px;
		width: 70px;
		font-size: 14px;
		line-height: 36px;
		margin-top: 10px;
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
		line-height: 22px;
		font-size: 14px;
		margin-bottom: 10px;
		max-height: 50px;
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
		/* height:265px; */
		height: 210px;
		overflow: hidden;
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
		background: url("../../assets/img/cleanup.jpg") no-repeat;
		background-size: contain;
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
	.fold {
		width: 540px;
		height: 20px;
	}
	.guide:hover .title {
		color: #23acf1;
	}
	.image {
		margin: 10px auto 17px;
		text-align: center;
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
	@media (max-width: 768px) {
		.cover {
			height: 250px;
		}
		.avator {
			width: 133px;
			height: 133px;
			float: none;
			margin-top: -100px;
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
		.tutor-pic  {
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