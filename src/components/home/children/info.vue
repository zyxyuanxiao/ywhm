<template>
    <div class="page">
        <div class="banner">
            <div class="big">行家指路</div>
            <div class="big">少走弯路</div>
            <div class="small">亿万毫米，优秀的知识技能共享平台</div>
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
        <div class="list"></div>
    </div>
</template>
<script>
    
</script>
<style scoped>
.banner {
    width: 100%;
    height: 450px;
    background: url("../../../assets/img/index.jpg") no-repeat;
    background-size: cover;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.big {
    font-size: 50px;
    font-weight: 900;
}
.small {
    font-size: 20px;
    font-weight: 400;
    padding: 3px 5px;
    margin-top: 10px;
    border: 1px solid #fff;
    border-radius: 5px;
}
.feat {
    padding: 20px 0;
    display: flex;
    justify-content: center;
}
.li {
    margin: 0 20px;
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
</style>
