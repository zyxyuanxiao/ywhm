<template>
    <div class="page">
        <div class="page-tag">
            <div class="type">生活服务&nbsp;&gt;</div>
             <div v-for="(item,index) in tags" class="tag" :class="{bold: index==flag}" @click="changeTag(item,index)">{{item}}</div>
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
                            <div>{{item.price}} <span>元/次</span></div>
                    </div>
                    <div class="info-mid">
                        <div class="info-tutor">{{item.name}}</div>
                        <div class="info-intro">{{item.job}}</div> 
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
            total: [],
            filter:[],
            flag: 0
        }
    },
    mounted:function() {
		this.getList()
	},
    methods: {
        getList() {
            this.$ajax({
                url: "/guide/selectByType",
                data: {
                    big_type: "生活服务"
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
        changeTag(small_type,index) {
            console.log(this.filter)
            var total=this.total
            this.flag=index
            if(small_type=="全部")
                this.filter=total
            else{
                this.filter = total.filter(function(item,index,array){
                    return (item.small_type==small_type);
                });
            }
        },
        goDetail(id) {
            this.$router.push("/home/detail?id="+id)
        }
    }
}
</script>
