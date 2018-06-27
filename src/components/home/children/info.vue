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
                <div class="teacher-view"><p><span>{{item.count}}</span>人见过</p></div>
                <div class="teacher-tutor">{{item.tutor}}</div>
                <div class="teacher-job">{{item.job}}</div>
                <div class="teacher-intro">{{item.intro}}</div>
				<div class="teacher-info">{{item.info}}</div>
            </div>            
        </div>
		<div class="button"><button class="btn">发现更多行家</button></div>
		<div class="down">
			<img src="../../../assets/img/down.jpg" alt="">
		</div>
		<div class="story">
			<!-- <ul>
            	<li><img src="../../../assets/img/banner1.png" alt=""/></li>
            	<li><img src="../../../assets/img/banner2.jpg" alt=""/></li>
            	<li><img src="../../../assets/img/banner3.jpg" alt=""/></li>
       		</ul> -->
        	<!-- <a href="#" class="arrow_left"><img src="../../../assets/img/left.png" alt=""/></a>
        	<a href="#" class="arrow_right"><img src="../../../assets/img/right.png" alt=""/></a> -->
		</div>
	</div>
</template>
<script>
	export default {
        data() {
            return {
                total: [
                    {
                        "id": "1",
                        "img": "",
                        "count": 253,
                        "tutor": "孙波",
                        "job":"奇虎360科技有限公司销售总监",
                        "intro": "智能硬件与可穿戴设备",
                        "info":"『我在消费类电子及智能硬件营销领域拥有10余年的行业背景，期待可以与你分享我在产品营销管理方面的经验。』"
                    },
                    {
                        "id": "2",
                        "img": "",
                        "count": 253,
                        "tutor": "孙波",
                        "job":"奇虎360科技有限公司销售总监",
                        "intro": "智能硬件与可穿戴设备",
                        "info":"『我在消费类电子及智能硬件营销领域拥有10余年的行业背景，期待可以与你分享我在产品营销管理方面的经验。』"
                    },
                    {
                        "id": "3",
                        "img": "",
                        "count": 253,
                        "tutor": "孙波",
                        "job":"奇虎360科技有限公司销售总监",
                        "intro": "智能硬件与可穿戴设备",
                        "info":"『我在消费类电子及智能硬件营销领域拥有10余年的行业背景，期待可以与你分享我在产品营销管理方面的经验。』"
                    },
                    {
                       "id": "4",
                        "img": "",
                        "count": 253,
                        "tutor": "孙波",
                        "job":"奇虎360科技有限公司销售总监",
                        "intro": "智能硬件与可穿戴设备",
                        "info":"『我在消费类电子及智能硬件营销领域拥有10余年的行业背景，期待可以与你分享我在产品营销管理方面的经验。』"
                    },
                    {
                        "id": "5",
                        "img": "",
                        "count": 253,
                        "tutor": "孙波",
                        "job":"奇虎360科技有限公司销售总监",
                        "intro": "智能硬件与可穿戴设备",
                        "info":"『我在消费类电子及智能硬件营销领域拥有10余年的行业背景，期待可以与你分享我在产品营销管理方面的经验。』"
                    },
                    {
                        "id": "6",
                        "img": "",
                        "count": 253,
                        "tutor": "孙波",
                        "job":"奇虎360科技有限公司销售总监",
                        "intro": "智能硬件与可穿戴设备",
                        "info":"『我在消费类电子及智能硬件营销领域拥有10余年的行业背景，期待可以与你分享我在产品营销管理方面的经验。』"
                    },
                    {
                        "id": "7",
                        "img": "",
                        "count": 253,
                        "tutor": "孙波",
                        "job":"奇虎360科技有限公司销售总监",
                        "intro": "智能硬件与可穿戴设备",
                        "info":"『我在消费类电子及智能硬件营销领域拥有10余年的行业背景，期待可以与你分享我在产品营销管理方面的经验。』"
                    },
                    {
                        "id": "8",
                        "img": "",
                        "count": 253,
                        "tutor": "孙波",
                        "job":"奇虎360科技有限公司销售总监",
                        "intro": "智能硬件与可穿戴设备",
                        "info":"『我在消费类电子及智能硬件营销领域拥有10余年的行业背景，期待可以与你分享我在产品营销管理方面的经验。』"
                    },
                    {
                        "id": "9",
                        "img": "",
                        "count": 253,
                        "tutor": "孙波",
                        "job":"奇虎360科技有限公司销售总监",
                        "intro": "智能硬件与可穿戴设备",
                        "info":"『我在消费类电子及智能硬件营销领域拥有10余年的行业背景，期待可以与你分享我在产品营销管理方面的经验。』"
                    },
                    {
                        "id": "10",
                        "img": "",
                        "count": 253,
                        "tutor": "孙波",
                        "job":"奇虎360科技有限公司销售总监",
                        "intro": "智能硬件与可穿戴设备",
                        "info":"『我在消费类电子及智能硬件营销领域拥有10余年的行业背景，期待可以与你分享我在产品营销管理方面的经验。』"
                    },
                    {
                        "id": "11",
                        "img": "",
                        "count": 253,
                        "tutor": "孙波",
                        "job":"奇虎360科技有限公司销售总监",
                        "intro": "智能硬件与可穿戴设备",
                        "info":"『我在消费类电子及智能硬件营销领域拥有10余年的行业背景，期待可以与你分享我在产品营销管理方面的经验。』"
                    },
                    {
                        "id": "12",
                        "img": "",
                        "count": 253,
                        "tutor": "孙波",
                        "job":"奇虎360科技有限公司销售总监",
                        "intro": "智能硬件与可穿戴设备",
                        "info":"『我在消费类电子及智能硬件营销领域拥有10余年的行业背景，期待可以与你分享我在产品营销管理方面的经验。』"
                    }
                ]
            }
        },
        methods: {
            goDetail(id) {
                this.$router.push("/home/detail?id="+id)
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
	font-size: 56px;
	font-weight: 900;
	text-shadow: 0 0 28px rgba(0,0,0,.64);
}
.banner .big:nth-child(1) {
	margin-top: 100px;
}
.small {
	font-size: 20px;
	font-weight: 400;
	padding: 3px 5px;
	margin-top: 50px;
	border: 1px solid #fff;
	border-radius: 5px;
	text-shadow: 0 0 28px rgba(0,0,0, 0.1);
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
    box-shadow: 0 0 6px rgba(0,0,0,.14);
    color: #fff;
    text-shadow: 0 0 24px rgba(0,0,0,.64);
	text-align: center;
}
.download:hover {
	background-color: rgba(255,255,255,.2);
}
.list {
    display: flex;
	flex-wrap: wrap;
	align-content: space-between;
	justify-content: space-between;
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
.teacher-info {
	visibility: hidden;
	width: 190px;
	color: #fff;
	font-size: 12px;
	position:absolute;
	left: 20px;
	bottom: 0px;
}
.button {
	width: 180px;
	margin:0 auto;
	padding-top: 40px;
}
.btn {
	border: 1px solid #23acf1;
	border-radius: 25px;
	width: 180px;
	height: 50px;
	background: #fff;
	color: #23acf1;
	font-size: 14px;
	
}
.down {
	margin: 0 auto;
	padding-top: 40px;
	width: 980px;
}
/* .story {
    width: 100%;
    position: relative;
    margin-bottom: 20px;
}
.story ul {
	list-style: none;
}
.story ul>li{
    float: left;
}
.arrow_left {
    padding: 28px 15px;
    /*background: #d9d9d9;*/
    /* background: rgba(0,0,0,0.1);
    vertical-align: middle;
    position: absolute;
    top: 150px;
    left: 8px;
    border-radius: 5px; */
/* } */
/* .arrow_right {
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
}
.arrow img {
    position: absolute;
    top: 25px;
    left: 15px;
} */
</style>