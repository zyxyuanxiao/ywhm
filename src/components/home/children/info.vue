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
                <div class="teacher-img"><img src="../../../assets/img/teacher1.jpg" class="teacher-img" alt=""></div>
                <div class="teacher-view"><span>{{item.count}}</span>人见过</div>
                <div class="teacher-tutor">{{item.tutor}}</div>
                <div class="teacher-job">{{item.job}}</div>
                <div class="teacher-intro">{{item.intro}}</div>
                <!-- <p>孙波</p>
                <p>奇虎360科技有限公司销售总监</p>
                <p>智能硬件与可穿戴设备</p> -->
            </div>            
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
                        "info":""
                    },
                    {
                        "id": "1",
                        "img": "",
                        "count": 253,
                        "tutor": "孙波",
                        "job":"奇虎360科技有限公司销售总监",
                        "intro": "智能硬件与可穿戴设备",
                        "info":""
                    },
                    {
                        "id": "1",
                        "img": "",
                        "count": 253,
                        "tutor": "孙波",
                        "job":"奇虎360科技有限公司销售总监",
                        "intro": "智能硬件与可穿戴设备",
                        "info":""
                    },
                    {
                       "id": "1",
                        "img": "",
                        "count": 253,
                        "tutor": "孙波",
                        "job":"奇虎360科技有限公司销售总监",
                        "intro": "智能硬件与可穿戴设备",
                        "info":""
                    },
                    {
                        "id": "1",
                        "img": "",
                        "count": 253,
                        "tutor": "孙波",
                        "job":"奇虎360科技有限公司销售总监",
                        "intro": "智能硬件与可穿戴设备",
                        "info":""
                    },
                    {
                        "id": "1",
                        "img": "",
                        "count": 253,
                        "tutor": "孙波",
                        "job":"奇虎360科技有限公司销售总监",
                        "intro": "智能硬件与可穿戴设备",
                        "info":""
                    },
                    {
                        "id": "1",
                        "img": "",
                        "count": 253,
                        "tutor": "孙波",
                        "job":"奇虎360科技有限公司销售总监",
                        "intro": "智能硬件与可穿戴设备",
                        "info":""
                    },
                    {
                        "id": "1",
                        "img": "",
                        "count": 253,
                        "tutor": "孙波",
                        "job":"奇虎360科技有限公司销售总监",
                        "intro": "智能硬件与可穿戴设备",
                        "info":""
                    },
                    {
                        "id": "1",
                        "img": "",
                        "count": 253,
                        "tutor": "孙波",
                        "job":"奇虎360科技有限公司销售总监",
                        "intro": "智能硬件与可穿戴设备",
                        "info":""
                    },
                    {
                        "id": "1",
                        "img": "",
                        "count": 253,
                        "tutor": "孙波",
                        "job":"奇虎360科技有限公司销售总监",
                        "intro": "智能硬件与可穿戴设备",
                        "info":""
                    },
                    {
                        "id": "1",
                        "img": "",
                        "count": 253,
                        "tutor": "孙波",
                        "job":"奇虎360科技有限公司销售总监",
                        "intro": "智能硬件与可穿戴设备",
                        "info":""
                    },
                    {
                        "id": "1",
                        "img": "",
                        "count": 253,
                        "tutor": "孙波",
                        "job":"奇虎360科技有限公司销售总监",
                        "intro": "智能硬件与可穿戴设备",
                        "info":""
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
	height: 750px;
	background: url("../../../assets/img/index.jpg") no-repeat;
	background-size: cover;
	color: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
    overflow: hidden;
}
.big {
	font-size: 50px;
	font-weight: 900;
	text-shadow: 0 0 28px rgba(0,0,0,.64);
}
.banner .big:nth-child(1) {
	margin-top: 150px;
}
.small {
	font-size: 20px;
	font-weight: 400;
	padding: 3px 5px;
	margin-top: 80px;
	border: 1px solid #fff;
	border-radius: 5px;
	text-shadow: 0 0 28px rgba(0,0,0, 0.1);
}
.feat {
	padding: 40px 0;
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
	margin-right: 5px;
}
.desc div:nth-child(1) {
	font-size: 18px;
}
.download {
    width: 180px;
	font-size: 14px;
	height: 40px;
	line-height: 40px;
    margin-top: 50px;
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
    /* display: flex; */
	/* flex-direction: row; */
	/* align-items: center; */
    /* background: #fff !important; */
    margin: 0 auto;
    width: 1000px;
}
.teacher { 
    width: 230px;
    height: 320px;
    border-radius: 10px;
    overflow: hidden;
    float: left;
    margin-left: 20px;
    margin-top: 20px;
}
.teacher-img {
    width: 230px;
    height: 320px;
    background: url("../../../assets/img/teacher1.jpg") no-repeat;
    background-size: 230px 300px;
    z-index: -1;
}
.teacher-view {
    width: 100px;
    height: 30ox;
    border-radius: 15px;
    background: #3f4e55;
}
</style>