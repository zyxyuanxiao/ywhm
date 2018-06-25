<template>
    <div class="page">
        <div class="page-tag">
            <div class="type">行业经验&nbsp;&gt;</div>
            <div v-for="item in tags" class="tag" @click="changeTag(item)">{{item}}</div>
        </div>
        <div class="page-content">
            <div class="gd" v-for="item in total" @click="goDetail(item.id)" >
                <div class="gd-avator">{{item.avator}}</div>
                <div class="gd-info" >
                    <div class="info-top">
                        <div class="tutor-info">
                            <span class="tutor-title">{{item.title}}</span>
                            {{item.score}}
                            <span class="unit">分</span>
                            <img src="../../assets/img/i.png" title="话题转有行系统算法综合学员的匿名评分以及多级因素得出，每增加三个评分，更新一次" class="icon" />
                        </div>
                            <div>{{item.price}} <span>元/次</span></div>
                    </div>
                    <div class="info-mid">
                        <div class="info-tutor">{{item.tutor}}</div>
                        <div class="info-intro">{{item.intro}}</div> 
                    </div>
                    <div class="info-bot"><span>{{item.count}}</span>人已预约成功</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
     data() {
            return {
                tags : ["全部","个人形象","摄影","吃喝玩乐","健康营养","运动","家居", "旅行","医疗保健"],
                total: [
                    {
                        "id": "1",
                        "avator": "",
                        "title": "医学背景健身导师，解决你所有问题!",
                        "score": 9.3,
                        "tutor": "原李峰",
                        "intro": "「原来健身工作室」创始人",
                        "count": 100,
                        "price": 499,
                        "type": "医疗保健"
                    },
                    {
                        "id": "2",
                        "avator": "",
                        "title": "按肤色身型穿衣，学搭配，有风格",
                        "score": 9.2,
                        "tutor": "查博",
                        "intro": "C+色彩公司创始人，资深形象设计师",
                        "count": 276,
                        "price": 500,
                        "type": "个人形象"
                    },
                    {
                        "id": "3",
                        "avator": "",
                        "title": "别纠结，给你发型修剪搭配全攻略",
                        "score": 9.3,
                        "tutor": "崔璐璐",
                        "intro": "TUE STUDIO创始人",
                        "count": 112,
                        "price": 368,
                        "type": "个人形象"
                    },
                    {
                        "id": "4",
                        "avator": "",
                        "title": "怎样成为整理收纳咨询师",
                        "score": 9.5,
                        "tutor": "左小熙",
                        "intro": "整理规划咨询师，简一整理创始人",
                        "count": 3,
                        "price": 388,
                        "type": "个人形象"
                    },
                    {
                        "id": "5",
                        "avator": "",
                        "title": "用思维导图管理生活、工作和项目销售",
                        "score": 9.8,
                        "tutor": "高雁鹏",
                        "intro": "项目管理&思维导图讲师，小能熊布道师",
                        "count": 112,
                        "price": 798,
                        "type": "销售"
                    },
                    {
                        "id": "6",
                        "avator": "",
                        "title": "用思维导图管理生活、工作和项目金融",
                        "score": 9.8,
                        "tutor": "高雁鹏",
                        "intro": "项目管理&思维导图讲师，小能熊布道师",
                        "count": 112,
                        "price": 798,
                        "type": "金融"
                    }
                ],
                market: [],
                human: [],
                sale: [],
                financial: []
            }
        },
        methods: {
        changeTag() {
            
        },
        goDetail(id) {
            this.$router.push("/home/detail?id="+id)
        }
    }
    }
</script>
