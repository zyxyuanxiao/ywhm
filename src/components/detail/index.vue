<template>
	<div class="container">
		 <div class="left">
			<div class="cover"></div>
			<div class="person">
				<div class="info">
					<img src="../../assets/img/teacher.jpg" alt="" class="avator">
					<div class="top">
						<h1 class="name">{{ total.tutor }}</h1>
						<p>{{ total.intro }}</p>
						<div class="detail">
							<span><Icon type="ios-clock" color="#23acf1"></Icon><span class="highlight">半天</span>内回应</span>
							<span><Icon type="happy" color="#23acf1"></Icon><span class="highlight">{{ total.count }}</span>人见过</span>
							<span><Icon type="heart" color="#23acf1"></Icon> <span class="highlight">{{ total.count }}</span>人想见</span>
						</div>
						<p class="b">北京 &nbsp; <span>复兴门 &nbsp; 崇文门</span></p>	
					</div>
					<div class="button">通话</div>
					<ul>
						<li>
							<div class="price">							
								<div>
									<span>￥</span>
									<span>{{ total.price }}</span>
									<span>/次</span>
								</div>
								<div class="score">{{ total.score}}<span>分</span><Icon type="information-circled" size="16" color="#b3b3b3"></Icon></div>
							</div>

							<h2 class="title">{{ total.topic }}</h2>
							<p>{{ total.content }}</p>
						</li>
						<li>
							<div class="price">	
								<div>
									<span>￥</span>
									<span>{{ total.price }}</span>
									<span>/次</span>
									
								</div>
								<div class="score">{{ total.score}}<span>分</span><Icon type="information-circled" size="16" color="#b3b3b3"></Icon></div>
							</div>
							<h2 class="title">{{ total.topic }}</h2>
							<p>{{ total.content }}</p>
						</li>
					</ul> 
				</div>
				<div class="right">
					<div class="promise">
						<p class="tip">只需付<span>几百元，</span>就可以与行家</p>
						<span>一对一线下面谈</span>
						<p>为您答疑解惑、出谋划策。不满意还能“无忧退款”。</p>
						<img src="../../assets/img/logo.png" alt="" style="width:90px; float:right; margin-right:22px;">
						<div style="clear:both"></div>
					</div>
					<div class="order">
						<Button type="primary" shape="circle">立即预约</Button>
						<Button type="ghost" shape="circle" icon="ios-heart-outline" size="16">加入心愿单</Button>
					</div>
					
					<h2>相关行家</h2>
					<ul>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</div>
			</div>
		 </div>
	</div>
</template>
<script>
export default {
	data () {
		return {
			total: {
				 		"id": "1",
						"avator": "",
						"title": "医学背景健身导师，解决你所有问题!",
						"score": 9.3,
						"tutor": "曲明",
						"intro": "「原来健身工作室」创始人",
						"count": 100,
						"price": 499,
						"type": "产品",
						"topic": "累成狗，没加薪，怎么办？",
						"content": "找兼职赚外快？炒股票赚快钱？别逗了！升职加薪才是性价比最优的开源方式好不好！可是，累成了加班狗，资历不如你、业绩不如你的同事纷纷升迁，你被排除在外；努力敬业、谦虚待人，加薪屡屡失之交臂；恪尽职守、勤奋工作，升职依旧遥不可及。当你压抑着越来越多愤怒的时候，好事者却在一边幸灾乐祸。究竟什么样的人才能升职加薪？是兢兢业业、埋头苦干、超额完成任务的人，还是那些游手好闲、见风使舵，却城府老辣、深谋远虑的人？是实力受到肯定的员工，还是锋芒毕露的红人？职场是一个没有硝烟的战场，如果你在这个战场上勇往直前，不仅没有取得战绩，却负伤累累，是时候盘点整顿了。我能从“术”的角度给你方法，帮助你以全新的面貌整装待发，重上战场。本话题不适合工作为体制内讲究论资排辈的人群哦，制度的壁垒无能为力，你懂得：）本话题涉及的是职场中“术”的方法，如果你有职业转换、职业倦怠、职业迷茫、offer选择的困惑，可选择我发布的另外一个职场“道”的话题。升职加薪是性价比最优的开源方式！本次预约为远程通话，需要在「在行」App内完成通话扫描二维码下载App分享话题： "
			}
		}
	}
}
</script>

<style scoped>
	.container {
		width: 100%;
	}
	.cover {
		background: url('../../assets/img/info_bg.jpg') no-repeat;
		background-size: cover;
		height: 500px;
		background-position: center;
		padding-right: 20px; 
	}
	.avator {
		width: 155px;
		height: 155px;
		border-radius: 50%;
		margin: -128px 25px 0 0;
	}
	.person {
		width: 900px;
		margin:0 auto;
	}
	.info {
		float: left;
		width: 540px;
		background: #fcfaf9;
	}
	.right {
		float: left;
		width: 360px;
		padding-left:40px;
		margin-top:70px;
	}
	.top {
		text-align: center;
	}
	.name {
		font-size: 38px;
		line-height: 38px;
		font-weight: 400;
		padding: 20px 0 5px;
	}
	.b {
		font-weight: bold;
	}
	.detail {
		margin: 10px 77px 4px;
		display: flex;
		justify-content: space-around;
		align-content: center;
		border-top: 1px solid #e5e5e5;
		border-bottom: 1px solid #e5e5e5;
	}
	.top span {
		color: #b0b0b0;
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
		vertical-align: center;
		line-height: 36px;
		margin: 20px 0 10px;
	}
	.price {
		display: flex;
		justify-content: space-between;
		margin-bottom: 10px;
	}
	.score span{
		font-size:12px;
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
		width: 300px;
		background: #f1efee;
		border-radius: 8px;
		overflow: hidden;
	}
	.promise p span {
		font-weight: bold;
	}
	.promise span {
		font-size: 20px;
		font-weight: bold;
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
		color:#000;
		border-color: rgb(204, 204, 204);
	}

</style>

