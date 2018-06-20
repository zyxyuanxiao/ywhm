<template>
      <div class="top-header">
            <div class="container">
                  <div class="header-navs">                       
                       <ul class="navs">
                             <li class="nav"><a href="/home/life" class="service-life">生活服务</a></li>
                             <li class="nav"> <i class="service-life">&gt</i></li>
                             <li v-for="item in navs" class="nav">
                                   <template v-if="item.type">
                                          <a :href="item.sourceUrl" class="nav-item" 
                                          @mouseenter="evtHeaderEnter(item.type)"
                                          @mouseleave="evtHeaderLeave()"
                                          >{{item.name}}</a>
                                   </template>
                                   <template v-else>
                                         <a :href="item.sourceUrl" target="_blank" class="nav-item">{{ item.name }}</a>
                                   </template>
                             </li>
                        </ul> 
                        <div class="header-menu"
                              @mouseenter="evtHeaderEnter()"
                              @mouseleave="evtHeaderLeave()"
                              v-show="headerStatus"
                              transition="fadein">
                              <ul class="menus">
                                    <li class="product" v-for="item in currentPostion">
                                          <a :href="item.sourceUrl">
                                                {{item.name}}
                                          </a>
                                    </li>
                              </ul>
                        </div>  
                 </div>
                 <div class="content">
                       <div class="button">
                              <ul class="ul">
                                    <li><a href="">综合排序</a></li>
                                    <li><a href="">见过最多</a></li>
                                    <li><a href="">评分最高</a></li>
                                    <li><a href="">发布时间</a></li>
                                    <li><a href="">价格</a></li>
                              </ul>
                        </div> 
                        <div class="tutor">
                              <ul class="topic-list topics">
                                    <li class="a-topic" v-for="item in tutor">
                                          <a href="" target="_blank" class="topic-tutor-link">
                                                <img class="topic-tutor-pic" :src="item.imgUrl" />
                                                <div class="topic-info">
                                                      <h3 class="topic-title">
                                                            <span class="topic-title-txt">{{item.titleTxt}} </span>
                                                            <div class="topic-title-info">
                                                                  <div class="rating">{{item.rate}}
                                                                        <span class="unit">分</span>
                                                                        <img src="../../assets/img/i.png" class="icon" />
                                                                    </div>
                                                                  <div class="price">
                                                                        <em>{{item.price}}</em>元/次
                                                                  </div>
                                                            </div>
                                                      </h3>
                                                      <div class="topic-tutor-info">
                                                            <span class="topic-tutor-name">{{item.name}} </span>
                                                            <span class="topic-tutor-intro">{{item.intro}} </span>
                                                      </div>
                                                       <p class="topic-tutor-count">
                                                             <span>{{item.count}}</span>人见过
                                                      </p>
                                                </div>
                                          </a>
                                    </li>
                              </ul>
                        </div> 
                        <template>
                               <Page :total="100" show-elevator></Page>
                        </template>
                  </div> 
            </div>
      </div>
</template>
<script>
export default {
    data() {
          return {
                headerStatus: false,
                tids: '',
                currentPostion: this.image,
                navs: [
                      {name: '个人形象', type: 'image'},
                      {name: '摄影', sourceUrl: './photograph'},
                      {name: '吃喝玩乐', type: 'enjoy'},
                      {name: '健康营养', type: 'health'},
                      {name: '运动', sourceUrl: './sport'},
                      {name: '家居', type: 'furniture'},
                      {name: '旅行', sourceUrl: './travel'},
                      {name: '医疗保健', sourceUrl: './meidcal'},
                      {name: '其他', type: 'other'},
                ],
                image: [
                      {name: '发型', sourceUrl: ''},
                      {name: '美妆护肤', sourceUrl: ''},
                      {name: '整型', sourceUrl: ''},
                      {name: '时尚搭配', sourceUrl: ''}
                ],
                enjoy: [
                      {name: '美食', sourceUrl: ''},
                      {name: '周边游', sourceUrl: ''},
                      {name: '美术', sourceUrl: ''},
                      {name: '音乐', sourceUrl: ''}
                ],
                health: [
                      {name: '营养饮食', sourceUrl: ''},
                      {name: '减肥健身', sourceUrl: ''},
                ],
                furniture: [
                      {name: '整修', sourceUrl: ''},
                      {name: '装纳', sourceUrl: ''}
                ],
                medical: [
                      {name: '形体保健', sourceUrl: ''},
                      {name: '疾病医疗', sourceUrl: ''}
                ],
                other: [
                      {name: '手工', sourceUrl: ''},
                      {name: '少儿兴趣', sourceUrl: ''},
                      {name: '宠物', sourceUrl: ''}
                ],
                tutor: [
                     { imgUrl: '../../assets/img/train.jpg', titleTxt: '医学背景健身导师，解决你所有问题!', rate: 9.3,  name: '原李峰', intro: '「原来健身工作室」创始人', count: 100, price: 499},
                     { imgUrl: '../../assets/img/fasionSkin.jpg', titleTxt: '按肤色身型穿衣，学搭配，有风格 ', rate: 9.2,  name: '查博', intro: 'C+色彩公司创始人，资深形象设计师', count: 276 , price: 500},
                     { imgUrl: '../../assets/img/hair.jpg', titleTxt: '别纠结，给你发型修剪搭配全攻略', rate: 9.3,  name: '崔璐璐', intro: 'TUE STUDIO创始人', count: 112, price: 368},
                     { imgUrl: '../../assets/img/cleanup.jpg', titleTxt: '怎样成为整理收纳咨询师', rate: 9.5,  name: '左小熙', intro: '整理规划咨询师，简一整理创始人', count: 21, price: 499 },
                ]
          }
    },
    methods: {
          evtHeaderEnter (menuType) {
                if (menuType) {
                      this.currentPostion = this[menuType]
                }
                this.headerStatus = true
                clearTimeout(this.tids)
          },
          evtHeaderLeave () {
                let self = this
                this.tids = setTimeout (function () {
                      self.headerStatus = false
                }, 200)
          }
    }
}
</script>
<style scoped>
      .top-header {
            width: 100%;
            height: 100%;
      }
      .container {
            position: relative;
            width: 100%;
            height: 100%;
            margin: 0 auto;
      }
      .header-navs {
            width:900px;
	      position: relative;
            margin: 0 auto;
            height: 100px;
      }

      .navs {
            display: flex;
            flex-flow: row;
            flex-wrap: nowrap;
            justify-content: center;
            align-items: center;
            height: 88px;
            line-height: 88px;
            margin: 0;
            padding: 0;
            list-style-type: none;
            /* margin: 0 auto; */
      }	
      .navs .nav {
            display: inline-block;
      }		
      .nav-item {
            display: block;
            height: 88px;
            line-height: 88px;
            font-size: 14px;
            padding: 0 15px;
            text-decoration: none;
            color: #333;
       }
       .service-life{
            display: block;
            height: 88px;
            line-height: 88px;
            font-size: 14px;
            padding: 0 15px;
            text-decoration: none;
            color: #333;
            font-weight: bold;
       }
      .nav-item:hover {
		color: #23acf1;
	}
      .header-menu {
            position: absolute;
            left: 0;
            top: 80px;
            width: 100%;
            height: 30px;
            background: #fff;
            /* box-shadow: 0 1px 5px #ccc; */
            z-index: 11;
      }
	.menus {
		list-style-type: none;
		margin: 0;
      }
      .product {
		float: left;	
      }
      .product a {
		display: block;
		padding: 0 30px;
		/* border-right: 1px solid #ccc; */
            color: #333;

	}
      .product a:hover {
            color: #23acf1;
      }
      .fadein-transition {
            transition: all .3s ease-in;
            height: 30px;
            opacity: 1;
            overflow: hidden;
      }

      .fadein-enter, .fadein-leave {
            height: 0;
            opacity: 0;
      }
      .content {
            padding-top: 0;
            padding-bottom: 30px;
            width: 1000px;
            margin: 0 auto;
      }
      .button {
            position: relative;
            padding: 0 0 0 22px;
            margin-top: 20px;
            min-height: 30px;
            /* margin: 28px;
            border: 0;
            font-size: 100%;
            font-weight: 400; */
            /* vertical-align: baseline; */
      }
      .ul {
            margin: 0;
            margin-top:30px;
            padding: 0;
            border: 0;
            vertical-align: baseline;
            list-style-type: none;
      }
      .button .ul li{
            line-height: 28px;
            margin-right: 6px;
            float: left;
      }
      .button .ul li a{
            display: inline-block;
            padding: 0 15px;
            border: 1px solid #ccc;
            border-radius: 15px;
            color: #666;
            text-decoration: none;
      }
      .button .ul li a:hover{
            border-color: #23acf1;
            color: #23acf1;
      }
      ul {
            list-style-type: none;
      }
      .topic-list .topic-tutor-link{
            display: block;
            background-color: #fff;
            border-radius: 8px;
            color:#343434;
            overflow: hidden;
      }
      .a-topic {
             margin-bottom: 10px;
      }
      .topic-list {
            margin-top: 20px;
            padding: 0 20px;
      }
      .topic-tutor-link {
            display: block;
            padding: 24px;
            background-color: #fff;
            border-radius: 8px;
            color:#343434;
            overflow: hidden;
      }
      a { 
          text-decoration: none;
      }
      .topic-tutor-pic {
            display: block;
            width: 110px;
            height: 110px;
            float: left;
            border-radius: 50%;
            background-size: cover;
            background-position: center;
            background-color: #ededed;
      }
      span, h3, div, body {
            margin: 0;
            padding: 0;
            border: 0;
            font-size: 100%;
            font-weight: 400;
            vertical-align: baseline;
            background: 0 0;
      }
      h3 {
          font-size: 20px;
          font-weight: 700;
          overflow: hidden;
      }
      .topic-list .topic-title-txt {
            float: left;
            display: block;
            max-width: 525px;
            margin-right: 5px;
      }
      .topic-list .topic-tutor-link:hover .topic-title-txt {
            color: #23acf1;
      }
      .rating {
            line-height: 25px;
            font-size: 20px;
            color: #975050;
            cursor: pointer;
            display: inline-block;
            margin-left: 10px;
      }
      .rating .unit {
            font-size: 12px;
            vertical-align: baseline;
      }
      .rating .icon {
            line-height: 25px;
            color: #b3b3b3;
            vertical-align: bottom;
            font-size: 16px;
            cursor: pointer;
      }
      .topic-list .price {
            font-size: 14px;
            float: right;
      }
      .topic-list .price em {
              font-size: 20px;
              font-style: normal;
      }
      .topic-list .topic-tutor-info {
            margin-bottom: 12px;
      }
      .topic-list .topic-tutor-name {
          font-weight: 700;
      }
      .topic-list .topic-tutor-intro {
          padding-left:10px;
      }
      .topic-list .topic-info p {
          color: #666;
      }
      .topic-list .topic-tutor-count span {
          color: #23acf1;
      }
      .topic-list .topic-tutor-link:hover{
          box-shadow: 0 0 8px rgba(0,0,0,.3);
      }
      
</style>
