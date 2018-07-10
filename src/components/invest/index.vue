<template>
    <div class="page">
        <div class="page-tag">
            <div class="type">创业投资&nbsp;&gt;</div>
            <div v-for="item in tags" class="tag" @click="changeTag(item)">{{item}}</div>
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
                        <div>{{item.price}}<span>元/次</span></div>
                    </div>
                    <div class="info-mid">
                        <div class="info-tutor">{{item.name}}</div>
                        <div class="info-intro">{{item.job}}</div> 
                    </div>
                    <div class="info-bot"><span>{{item.sub_num}}</span>人已预约成功</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tags : ["全部","创业经验","商业模式","融资","商业计划"],
            total: [],
            filter:[]
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
                big_type: "创业投资"
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
        changeTag(small_type) {
			console.log(this.filter)
			var total=this.total
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
