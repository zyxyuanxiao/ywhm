<template>
	<div class="container">
		<div class="cover">
			<div class="column">
				<div class="cover-info">
					<h1>「亿万毫米」</h1>
					<p>达人专家按需约见，人人共享知识技能</p>
					<div class="download">
						<img src="../../assets/img/download.png" alt="客户端二维码">
						手机扫描下载
					</div>
					<div class="content">
						<div class="iphone">
							<img src="../../assets/img/mac.png" alt="">
							<span>下载iphone版</span>
						</div>
						<div class="android">
							<img src="../../assets/img/android.png" alt="">
							<span>下载Android版</span>
						</div>
					</div>
				</div>
				<img src="../../assets/img/app_iphone.png" alt="" class="cover-image">
			</div>
		</div>	
		<div class="guide">
			<div class="ul">
			<div class="li">
				  <img src="../../assets/img/authentication.png" alt="">
				  <div>行家认证</div>
			</div>
			<div class="li">
				  <img src="../../assets/img/order.png" alt="">
				  <div>一键预约</div>
			</div>
			<div class="li">
				  <img src="../../assets/img/drawback.png" alt="">
				  <div>无忧退款</div>
			</div>
		</div></div>
	</div>
</template>
<script>
export default {};
</script>
<style scoped>
.cover {
  background: url("../../assets/img/app_bg.png") no-repeat;
  width: 100%;
  margin-bottom: 70px;
}
.column {
  display: flex;
  margin: 0 auto;
  max-width: 900px;
  align-content: space-between;
  text-shadow: 1px 0 1px #ccc;
}
.cover-info {
  display: flex;
  flex-direction: column;
  margin-top: 130px;
  font-weight: 700;
  color: #fff;
}
.cover-info h1 {
  margin-left: -40px;
  padding: 0;
  font-size: 72px;
  line-height: 112px;
}
.cover-info p {
  font-size: 28px;
}
.cover-image {
  width: 492px;
  height: 566px;
  margin-top: 160px;
}
.download {
  width: 144px;
  height: 178px;
  padding-bottom: 14px;
  border-radius: 8px;
  background: #fff;
  font-size: 18px;
  line-height: 18px;
  text-align: center;
  vertical-align: baseline;
  margin-top: 100px;
  color: rgb(52, 52, 52);
  font-weight: 400;
}
.download img {
  width: 144px;
  height: 144px;
  border-radius: 8px;
}
.content {
  display: flex;
  margin-top: 60px;
}
.content div {
  width: 248px;
  height: 74px;
  border: 1px solid #999;
  color: #666;
  padding: 13px 0px 13px 35px;
}
.content img {
  float: left;
}
.iphone {
  border-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.android {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
span {
  display: block;
  font-size: 16px;
  font-weight: 400;
  margin-left: 55px;
  line-height: 48px;
}
.guide {
  border-top: 1px solid #ccc;
  padding: 48px 0;
  background: #f2f2f2;
  overflow: hidden;
  width: 100%;
}
.ul {
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  width:1000px;
  margin: 0  auto;
}
.ul img {
  display: block;
}
.li div {
  font-size: 18px;
}
/* @media (max-width: 992px) {
  .cover {
    background-position: center;
    height: 300px;
  }
  .column {
    display: none;
  }
} */
</style>