<template>  
	<div class="page">
		<div class="banner">
			<div class="big">行家指路</div>
			<div class="big">少走弯路</div>
			<div class="small">亿万毫米，优秀的知识技能共享平台</div>
			<router-link to="/home/app" class="download">下载客户端</router-link>
		</div>
		<div class="feat">
			<div class="li">
					<img src="../../../assets/img/expert.png" class="icon">
					<div class="desc">
						<div>海量行家</div>
						<div>严选超过8千位行家达人专属服务</div>
					</div>
			</div>
			<div class="li">
					<img src="../../../assets/img/adviser.png" class="icon">
					<div class="desc">
						<div>万能顾问</div>
						<div>求教专家解惑或与达人切磋</div>
					</div>
			</div>
			<div class="li">
					<img src="../../../assets/img/service.png" class="icon">
					<div class="desc">
						<div>按需服务</div>
						<div>根据个人所需线上线下灵活沟通</div>
					</div>
			</div>
		</div>
		<div class="list">
            <div class="teacher" v-for="item in total" @click="goDetail(item.id)">
				<!-- <div class="teacher-img">{{item.img}}</div> -->
                <div class="teacher-view"><p><span>{{item.sub_num}}</span>人见过</p></div>
                <div class="teacher-tutor">{{item.name}}</div>
                <div class="teacher-job">{{item.job}}</div>
                <div class="teacher-intro">{{item.slogan}}</div>
				<div class="teacher-info">{{item.major}}</div>
            </div>            
        </div>
		<div class="button"><a href="../home/career"><button class="btn">发现更多行家</button></a></div>
		<div class="down">
			<a href="../home/app"><img src="../../../assets/img/down.png" alt=""></a>
			<p>亿万毫米故事</p>
		</div>
		<!-- <div class="story">
			<ul>
            	<li>
                    <img src="../../../assets/img/banner1.png" alt="" class="bannerimg"/>
                    <div class="text1">『 终身学习, 就是终身成就 』</div>
                    <div class="text2">
                        <div> 在“有趣而无用”大行其道的当下，</div>
                        <div>亿万毫米网站为你提供省时间的高效知识服务。</div>
                        <div>提倡碎片化学习方式，让用户短时间内获得有效的知识。</div>
                    </div>
                </li>
            	<li>
                    <img src="../../../assets/img/banner2.png" alt="" class="bannerimg"/>
                    <div class="text1">
                        <div>『 除了社交作用,</div>
                        <div> 她们还是我的数据库，知道她们需要什么很重要 』</div>
                    </div>
                    <div class="text2">
                        <div>乔齐，</div>
                        <div>女装品牌Georgette.Q创始人。</div>
                    </div>
                    <div>
                        <button>去乔齐的行家页</button>
                    </div>
                </li>
            	<li>
                    <img src="../../../assets/img/banner3.png" alt="" class="bannerimg"/>
                    <div class="text1">我要印证一个生命影响另一个生命的可能。</div>
                    <div class="text2">
                        <div>萧秋水，</div>
                        <div>知识管理专家。</div>
                    </div>
                    <div>
                        <button>去萧秋水的行家页</button>
                    </div>
                </li>
       		</ul>
        	<a href="#" class="arrow_left"><img src="../../../assets/img/left.png" alt=""/></a>
        	<a href="#" class="arrow_right"><img src="../../../assets/img/right.png" alt=""/></a>
		</div> -->
       
        <div class="swiper-box">
            <!-- <div class="contacts">
                <div class="contact" :class="{ 'active': index === swipe.activeIndex }" v-for="(contact, index) in contacts" @click="turnTo(index)">
                    {{contact.text}}
                </div>
            </div> -->
            <rd-swipe :swipe="swipe">
                <!-- <div class="rd-swipe-item" :style="{ 'background-image': `url(${img})` }" v-for="(img, index) in imgs"> -->
                <div class="rd-swipe-item" :style="{ 'background-image': `url(${img})` }" v-for="item in imgs">
                    <div class="stroy-title">{{item.title}}</div>
                    <div class="story-text1">{{item.text1}}</div>
                    <div class="story-text2">{{item.text2}}</div>
                    <div class="stroy-text3">{{item.text3}}</div>
                </div>
            </rd-swipe>
        </div>
	    <BackTop :height="1050" :bottom="200">
            <div class="top"><img src="../../../assets/img/top.png" alt=""></div>
        </BackTop>  
    </div>
</template>
<script>
    import rdSwipe from './vue-slide.vue'
    import banner1 from '../../../assets/img/banner1.png'
    import banner2 from '../../../assets/img/banner2.png'
    import banner3 from '../../../assets/img/banner3.png'
	export default {
        data() {
            return {
                total: [
                    {
                        "id": "1",
                        "img": "",
                        "sub_num": 253,
                        "name": "孙波",
                        "job":"奇虎360科技有限公司销售总监",
                        "slogan": "智能硬件与可穿戴设备",
                        "major":"『我在消费类电子及智能硬件营销领域拥有10余年的行业背景，期待可以与你分享我在产品营销管理方面的经验。』"
                    },
                    {
                        "id": "2",
                        "img": "",
                        "sub_num": 253,
                        "name": "孙波",
                        "job":"奇虎360科技有限公司销售总监",
                        "slogan": "智能硬件与可穿戴设备",
                        "major":"『我在消费类电子及智能硬件营销领域拥有10余年的行业背景，期待可以与你分享我在产品营销管理方面的经验。』"
                    },
                    {
                        "id": "3",
                        "img": "",
                        "sub_num": 253,
                        "name": "孙波",
                        "job":"奇虎360科技有限公司销售总监",
                        "slogan": "智能硬件与可穿戴设备",
                        "major":"『我在消费类电子及智能硬件营销领域拥有10余年的行业背景，期待可以与你分享我在产品营销管理方面的经验。』"
                    },
                    {
                        "id": "4",
                        "img": "",
                        "sub_num": 253,
                        "name": "孙波",
                        "job":"奇虎360科技有限公司销售总监",
                        "slogan": "智能硬件与可穿戴设备",
                        "major":"『我在消费类电子及智能硬件营销领域拥有10余年的行业背景，期待可以与你分享我在产品营销管理方面的经验。』"
                    },
                    {
                        "id": "5",
                        "img": "",
                        "sub_num": 253,
                        "name": "孙波",
                        "job":"奇虎360科技有限公司销售总监",
                        "slogan": "智能硬件与可穿戴设备",
                        "major":"『我在消费类电子及智能硬件营销领域拥有10余年的行业背景，期待可以与你分享我在产品营销管理方面的经验。』"
                    },
                    {
                        "id": "6",
                        "img": "",
                        "sub_num": 253,
                        "name": "孙波",
                        "job":"奇虎360科技有限公司销售总监",
                        "slogan": "智能硬件与可穿戴设备",
                        "major":"『我在消费类电子及智能硬件营销领域拥有10余年的行业背景，期待可以与你分享我在产品营销管理方面的经验。』"
                    },
                    {
                        "id": "7",
                        "img": "",
                        "sub_num": 253,
                        "name": "孙波",
                        "job":"奇虎360科技有限公司销售总监",
                        "slogan": "智能硬件与可穿戴设备",
                        "major":"『我在消费类电子及智能硬件营销领域拥有10余年的行业背景，期待可以与你分享我在产品营销管理方面的经验。』"
                    },
                    {
                        "id": "8",
                        "img": "",
                        "sub_num": 253,
                        "name": "孙波",
                        "job":"奇虎360科技有限公司销售总监",
                        "slogan": "智能硬件与可穿戴设备",
                        "major":"『我在消费类电子及智能硬件营销领域拥有10余年的行业背景，期待可以与你分享我在产品营销管理方面的经验。』"
                    },
                    {
                        "id": "9",
                        "img": "",
                        "sub_num": 253,
                        "name": "孙波",
                        "job":"奇虎360科技有限公司销售总监",
                        "slogan": "智能硬件与可穿戴设备",
                        "major":"『我在消费类电子及智能硬件营销领域拥有10余年的行业背景，期待可以与你分享我在产品营销管理方面的经验。』"
                    },
                    {
                        "id": "10",
                        "img": "",
                        "sub_num": 253,
                        "name": "孙波",
                        "job":"奇虎360科技有限公司销售总监",
                        "slogan": "智能硬件与可穿戴设备",
                        "major":"『我在消费类电子及智能硬件营销领域拥有10余年的行业背景，期待可以与你分享我在产品营销管理方面的经验。』"
                    },
                    {
                        "id": "11",
                        "img": "",
                        "sub_num": 253,
                        "name": "孙波",
                        "job":"奇虎360科技有限公司销售总监",
                        "slogan": "智能硬件与可穿戴设备",
                        "major":"『我在消费类电子及智能硬件营销领域拥有10余年的行业背景，期待可以与你分享我在产品营销管理方面的经验。』"
                    },
                    {
                        "id": "12",
                        "img": "",
                        "sub_num": 253,
                        "name": "孙波",
                        "job":"奇虎360科技有限公司销售总监",
                        "slogan": "智能硬件与可穿戴设备",
                        "major":"『我在消费类电子及智能硬件营销领域拥有10余年的行业背景，期待可以与你分享我在产品营销管理方面的经验。』"
                    }
                ],
                swipe: {
                    activeIndex: 0
                },
                imgs: [
                    // banner1,
                    // banner2,
                    // banner3,
                
                    {
                         banner1,
                        "title": "『 终身学习, 就是终身成就 』",
                        "text1": "在“有趣而无用”大行其道的当下,亿万毫米网站为你提供省时间的高效知识服务。",
                        "text2": "提倡碎片化学习方式，让用户短时间内获得有效的知识。"
                    },
                    {
                         banner2,
                        "title" : "『 除了社交作用，她们还是我的数据库，知道她们需要什么很重要 』",
                        "text1" : "乔齐，",
                        "text2" : "女装品牌Georgette.Q创始人。"
                    },
                    {
                        banner3,
                        "title" : "『 终身学习, 就是终身成就 』",
                        "text1" : "在“有趣而无用”大行其道的当下,",
                        "text2" : "亿万毫米网站为你提供省时间的高效知识服务。",
                        "text3" : "提倡碎片化学习方式，让用户短时间内获得有效的知识。"
                    }
                ]
            }
        },
        components: {
            rdSwipe
        },
        methods: {
            goDetail(id) {
                this.$router.push("/home/detail?id="+id)
            },
            turnTo (index) {
                this.$children.map(swipe => {
                    if (swipe.turnTo) {
                        swipe.turnTo(index)
                    }
                })
            }
        }
    }
</script>
<style scoped>
.banner {
	width: 100%;
	height: 500px;
	background: url("../../../assets/img/index.png") no-repeat;
	background-size: cover;
	color: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
    overflow: hidden;
    background-position: center;
}
.big {
    font-family: "Microsoft YaHei";
	font-size: 56px;
	font-weight: 900;
	text-shadow: 0 0 28px rgba(0,0,0,.64);
}
.banner .big:nth-child(1) {
	margin-top: 100px;
}
.small {
    font-family: "Microsoft YaHei";
	font-size: 20px;
	font-weight: 400;
	padding: 3px 5px;
	margin-top: 50px;
	border: 1px solid #fff;
	border-radius: 5px;
	/* text-shadow: 0 0 28px rgba(0,0,0, 0.1); */
    text-shadow: 0 0 28px rgba(1,1,1,20);
}
.feat {
	padding: 35px 0;
	display: flex;
	justify-content: center;
}
.li {
	margin: 0 30px;
	display: flex;
	align-items: center;
}
.icon {
	width: 50px;
	height: 50px;
	margin-right: 15px;
}
.desc div:nth-child(1) {
	font-family: "Microsoft YaHei";
	font-size: 20px;
	color: #7b7b7b;
}
.desc div:nth-child(2) {
	font-size: 14px;
	color: #939393;
	padding-top: 4px;
}
.download {
    width: 180px;
	font-size: 14px;
	height: 40px;
	line-height: 40px;
    margin-top: 40px;
    border: 1px solid rgba(255,255,255,.6);
    background-color: rgba(255,255,255,.1);
    /* box-shadow: 0 0 6px rgba(0,0,0,.14); */
    box-shadow: 0 0 6px rgba(1,1,1,.14);
    color: #fff;
    /* text-shadow: 0 0 24px rgba(0,0,0,.64); */
    text-shadow: 0 0 28px rgba(1,1,1, 20);
	text-align: center;
}
.download:hover {
	background-color: rgba(255,255,255,.3);
}
.list {
    display: flex;
	flex-wrap: wrap;
	align-content: space-around;
	justify-content: space-around;
    margin: 0 auto;
    width: 980px;
	height: 1000px;
}
.teacher { 
	background: url("../../../assets/img/teacher1.jpg") no-repeat;
    width: 230px;
    height: 320px;
	background-size: cover;
    border-radius: 10px;
    overflow: hidden;
	position: relative;
}
.teacher-view {
    width: 100px;
    height: 30px;
    border-radius: 15px;
    background: #23acf1;
	position: absolute;
	right: -20px;
	top: 10px;
}
.teacher-view>p {
	color: #fff;
	margin-top: 6px;
	margin-left: 18px;
}
.teacher-tutor {
	color: #fff;
	font-size: 24px;
	position:absolute;
	left: 20px;
	bottom: 80px;
}
.teacher-job {
	color: #23acf1;
	font-size: 12px;
	position:absolute;
	left: 20px;
	bottom: 65px;
}
.teacher-intro {
	color: #fff;
	font-size: 14px;
	position:absolute;
	left: 20px;
	bottom: 34px;
}
.teacher:before {
    content: "";
    width: 0;
    height: 100%;
    background: #000;
    padding: 14px 18px;
    position: absolute;
    top: 0;
    left: 50%;
    opacity: 0;
    transition: all 500ms cubic-bezier(0.47, 0, 0.745, 0.715) 0s;
}
.teacher:hover:before {
    width: 100%;
    left: 0;
    opacity: 0.5;
}
.teacher .teacher-info {
    font-size: 15px;
    text-transform: capitalize;
    opacity: 0;
    transition: all 0.5s ease 0s;
}
.teacher:hover .teacher-info {
    opacity: 1;
    transition-delay: 0.2s;
}
.teacher .teacher-info {
    width: 100%;
    padding: 14px 18px;
    color: #fff;
    position: absolute;
    top: 38%;
    left: 0;
}
.teacher:hover .teacher-intro, .teacher:hover .teacher-tutor, .teacher:hover .teacher-job {
    opacity: 0;
}
.button {
	width: 180px;
	margin:0 auto;
	padding-top: 40px;
}
.btn {
	border: 1px solid #dbdbdb;
	border-radius: 25px;
	width: 180px;
	height: 50px;
	background: #fff;
	color: #939393;
	font-size: 14px;
	
}
.down {
	margin: 0 auto;
	padding-top: 40px;
	/* width: 980px; */
    width: 100%;
	text-align: center;
}
.down>p {
	font-size: 32px;
	padding-top: 50px;
	padding-bottom: 40px;
}
.btn:hover {
    border: 1px solid #23acf1;
    color: #23acf1;
}
.btn:active {
    background: #23acf1;
    color: #fff;
}
button {
    outline: none;
}
.swiper-box {
    margin-bottom: 40px;
}
/* .story {
    width: 100%;
    position: relative;
    margin-bottom: 45px;
}
.story ul {
	list-style: none;
    width: 300%;
	height: 450px;	
	overflow: hidden;
}
.story li{
    float: left;
    width: 33%;
    position: relative;
}
.bannerimg {
    position: relative;
    top:-200px;
}
.arrow_left>img, .arrow_right>img {
	width: 20px;
	height: 20px;;
}
.arrow_left {
    padding: 28px 15px;
    background: #d9d9d9;
    background: rgba(0,0,0,0.1);
    vertical-align: middle;
    position: absolute;
    top: 150px;
    left: 8px;
    border-radius: 5px; 
 } 
.arrow_right {
    padding: 28px 15px;
    background: rgba(0,0,0,0.1);
    vertical-align: middle;
    position: absolute;
    top: 150px;
    right: 8px;
    border-radius: 5px;
}
.arrow_left:hover, .arrow_right:hover {
    background: rgba(0,0,0,0.2);
} */
/* .text1{
    position: absolute;
    top: 130px;
    left: 230px;
    font-family: "Microsoft YaHei";
    color: white;
    font-size: 36px;
	font-weight: 300;
	text-shadow: 0 0 28px rgba(0,0,0,10);
}
.text2{
    position: absolute;
    top: 230px;
    left: 250px;
    font-family: "Microsoft YaHei";
    color: white;
    font-size: 20px;
	font-weight: 100;
	text-shadow: 0 0 14px rgba(0,0,0,10);
} */
.top{
    padding: 10px;
    background: rgba(35, 172, 241, .6);
    color: #fff;
    text-align: center;
    border-radius: 50px;
    margin-right: -10px;
    width: 55px;
    height: 45px;
}
.top img {
    width: 35px;
    margin-top: -5px;
}
.top:hover {
    background: rgba(35, 172, 241, .9);
}

 @media (max-width: 768px) {
	.banner{
		height: 200px;
	}
	.big {
		line-height: 35px;
		font-size: 30px;
	}
	.banner .big:nth-child(1) {
		margin-top: 40px;
	}
	.small {
		margin-top:20px;
		font-size: 14px;
	}
    .download {
        display: none;
    }
    .icon {
		width: 35px;
		height: 35px;
	}
    .desc div:nth-child(1){
		display: inline-block;
		height: 30px;
		font-size: 12px;
	}
	.desc div:nth-child(2){
		display: none;
	}
 }

@media (max-width: 992px) {
    .list {
        width: 100%;
        height: auto !important;
    }
    .teacher {
        margin-bottom: 10px;
    }
    .down img {
        width: 95%;
    }
    .down>p {
        font-size: 20px;
        padding-top: 15px;
	    padding-bottom: 20px;
    }
    .top {
        width: 30px;
        height: 25px;
        text-align: center;
        margin-right: -25px !important;
    }
    .top img {
        width: 18px;
        margin-top: -6px;
        margin-left: -3px;
    }  
}
</style>