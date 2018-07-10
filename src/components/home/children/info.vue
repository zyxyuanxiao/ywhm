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
      <div class="teacher" v-for="item in total" v-if='item.id<=12' @click="goDetail(item.id)">
				<div class="teacher-img"><img v-bind:src="item.avatar" class="teacher-img"></div>
        <div class="teacher-view"><p><span>{{item.sub_num}}</span>人见过</p></div>
        <div class="teacher-tutor">{{item.name}}</div>
        <div class="teacher-job">{{item.job}}</div>
        <div class="teacher-intro">{{item.slogan}}</div>
				<div class="teacher-info">{{item.major}}</div>
      </div>            
    </div>
    <div class="button"><router-link to="/home/career"><button class="btn">发现更多行家</button></router-link></div>
    <div class="down">
      <router-link to="/home/app"><img src="../../../assets/img/down.png" alt=""></router-link>
      <p>亿万毫米故事</p>
    </div>    
    <div class="swiper-box">
      <rd-swipe :swipe="swipe">
        <div class="rd-swipe-item" :style="{ 'background-image': `url(${img})` }" v-for="(img, index) in imgs"></div>
      </rd-swipe>
    </div>
    <BackTop :height="1050" :bottom="200">
      <div class="top"><img src="../../../assets/img/top.png" alt=""></div>
    </BackTop>  
  </div>
</template>

<script>
import rdSwipe from "./vue-slide.vue";
import banner1 from "../../../assets/img/banner1.png";
import banner2 from "../../../assets/img/banner2.png";
import banner3 from "../../../assets/img/banner3.png";
export default {
  data() {
    return {
      total: [],
      swipe: {
        activeIndex: 0
      },
      imgs: [banner1, banner2, banner3]
    };
  },
  components: {
    rdSwipe
  },
  mounted() {
      //获取专家列表
      this.getAll()
  },
  methods: {
    getAll() {
      this.$ajax({
        url: "/tutor/getAll"
      }).then(res => {
          this.total = res.data
        }).catch(err => {
          console.log(err);
        })
    },
    goDetail(id) {
      this.$router.push("/home/detail?id=" + id);
    },
    turnTo(index) {
      this.$children.map(swipe => {
        if (swipe.turnTo) {
          swipe.turnTo(index);
        }
      });
    }
  }
};
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
    text-shadow: 0 0 28px rgba(0, 0, 0, 0.64);
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
    text-shadow: 0 0 28px rgba(1, 1, 1, 20);
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
    border: 1px solid rgba(255, 255, 255, 0.6);
    background-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 6px rgba(1, 1, 1, 0.14);
    color: #fff;
    text-shadow: 0 0 28px rgba(1, 1, 1, 20);
    text-align: center;
  }
  .download:hover {
    background-color: rgba(255, 255, 255, 0.3);
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
    width: 230px;
    height: 320px;
    background-size: cover;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
  }
  .teacher-img {
    width: 230px;
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
  .teacher-view > p {
    color: #fff;
    margin-top: 6px;
    margin-left: 18px;
  }
  .teacher-tutor {
    color: #fff;
    font-size: 24px;
    position: absolute;
    left: 20px;
    bottom: 80px;
    text-shadow: 0 1px 10px rgba(0, 0, 0, 0.64);
  }
  .teacher-job {
    color: #23acf1;
    font-size: 12px;
    position: absolute;
    left: 20px;
    bottom: 65px;
    text-overflow:ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 90%;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.64);
  }
  .teacher-intro {
    color: #fff;
    font-size: 14px;
    position: absolute;
    left: 20px;
    bottom: 34px;
    text-overflow:ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 90%;
    text-shadow: 0 0 6px rgba(0, 0, 0, 0.64);
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
    cursor: pointer;
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
  .teacher:hover .teacher-intro,
  .teacher:hover .teacher-tutor,
  .teacher:hover .teacher-job {
    opacity: 0;
  }
  .button {
    width: 180px;
    margin: 0 auto;
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
    width: 100%;
    text-align: center;
  }
  .down > p {
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
  .btn {
      background: #fafafa;
  }
  button {
    outline: none;
  }
  .swiper-box {
    margin-bottom: 40px;
  }
  .top {
    padding: 10px;
    background: rgba(35, 172, 241, 0.6);
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
    background: rgba(35, 172, 241, 0.9);
  }

  @media (max-width: 768px) {
    .banner {
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
      margin-top: 20px;
      font-size: 14px;
    }
    .download {
      display: none;
    }
    .icon {
      width: 35px;
      height: 35px;
    }
    .desc div:nth-child(1) {
      display: inline-block;
      height: 30px;
      font-size: 12px;
    }
    .desc div:nth-child(2) {
      display: none;
    }
    .rd-swipe {
      width: 100%;
      height: 250px;
      margin: 0 auto;
      position: relative;
      overflow: hidden;
      z-index: 0;
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
    .down > p {
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
  @media (max-width: 500px) {
    .teacher {
      width: 47%;
    }
    .btn {
      margin-top: -20px;
      margin-bottom: -10px;
    }
  }
  @media (max-width: 414px) {
    .teacher {
      height: 260px;
    }
    .teacher-tutor {
      bottom: 95px;
    }
    .teacher-job {
      line-height: 14px;
    }
    .teacher-img {
      margin-left: -12px;
    }
  }
  @media (max-width: 400px) {
    .teacher {
      height: 250px;
    }
    .teacher-intro {
      bottom: 26px;
    }
    .teacher-tutor {
      bottom: 80px;
    }
    .teacher-job {
      line-height: 14px;
      bottom: 52px;
    }
  }
  @media (max-width: 320px) {
    .teacher {
      height: 230px;
    }
    .teacher-img {
      margin-left: -20px;
    }
    .teacher-intro {
      bottom: 12px;
    }
    .teacher-tutor {
      bottom: 56px;
      line-height: 28px;
    }
    .teacher-job {
      line-height: 14px;
      bottom: 40px;
    }
  }
</style>