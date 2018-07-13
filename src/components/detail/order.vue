
<template>
<div>
	<Modal :mask-closable="false" scrollable @on-cancel="hideFrame()" v-model="showOrder" width="560" class-name="vertical-center-modal">
		<Steps :current=current>
			<Step title="预约"></Step>
			<Step title="问题"></Step>
			<Step title="付款"></Step>
		</Steps>
		<hr />
		<div v-if="first">
			<p style="margin-top: 10px;">预约</p>
			<div class="lists">
				<div class="gd_list" ref="btn" v-for="(item,index) in guideList" :class="{bg: hover == index} " @click="select(index,item.id)">
					<span class="title">{{item.title}}</span>
					<span class="price"> 
						{{ item.price }}元一次<br>
						约{{ item.duration }}小时</p>
					</span>
				</div>
			</div>
		</div>
		<div class="form" v-else >
			<Form ref="sub_list" :model="sub_list" :rules="ruleValidate" label-position="top" >
				<FormItem label="告诉行家你要请教的问题：（20-300字）" prop="qusetion">
					<Input v-model="sub_list.qusetion" type="textarea" :rows="4" placeholder="例如：回国半年，准备创业，想做一个健身O2O项目；之前在美国做律师，转变，想快速了解和适应国内的创业环境，向行家请教初始团队组建和运营的经验，以及帮忙分析产品模式..."></Input>
				</FormItem>
				<FormItem label="介绍自己当前的情况：（20-300字）" prop="situation">
					<Input v-model="sub_list.situation" type="textarea" :rows="4" placeholder="例如：我目前在一家科技媒体做运营，工作3年，传媒大学毕业，业余运营一个微信公众号，平时喜欢写文章，希望职业上有更好突破..."></Input>
				</FormItem>
			</Form>        
		</div>
		<hr />
		<div class="next">
			<Button type="primary" @click="nextStep()" v-if="button">下一步</Button>
			<Button type="primary" @click="addOrder('sub_list')" v-else >支付</Button>
		</div>
	</Modal>
	<Modal :mask-closable="false" scrollable v-model="modal2" width="420" class-name="vertical-center-modal">
		<div style="text-align: center; margin-bottom: 20px;">
			<h1 class="sub">支付成功！</h1>
			<p> 请等待行家反馈</p>
		</div>
		<div style="text-align: center; margin-bottom: 20px;">
			<Button type="primary" @click="process">查看进度</Button>
			<Button type="ghost" @click="cancel">取消</Button>
		</div>
	</Modal>
	</div>
</template>

<script>
export default {
	props: {
		guideList: Array
	},
	data() {
		return {
			hover: 0,
			id: null,
			showOrder: false,
			first:true,
			button:true,
			current: 0,
			modal2: false,
			formValidate: false,
			sub_list: {
				situation: '',
				qusetion: '',
			},   //保存订单
			selectGuide: {},  //保存选中的指导详情
			ruleValidate: {
				qusetion: [
					{
						required: true,
						message: "请填写打算向行家请教的问题",
						trigger: "blur"
					},
					{ type: "string", min: 20, message: "最少20个字哦", trigger: "blur" }
				],
				situation: [
					{ required: true, message: "请填写一些自己的情况", trigger: "blur" },
					{ type: "string", min: 20, message: "最少20个字哦", trigger: "blur" }
				]
			}
		};
	},
	mounted(){
		this.id = this.$route.query.id
		this.getSelectGuide()
	},
	methods: {
		//预约
		addOrder(name) {
			var date = new Date()
			console.log(date)
			var seperator = "-"
			var year = date.getFullYear()
			var month = date.getMonth()+1
			var day = date.getDate()
			if(month >= 1 && month <= 9) {
				month = '0' + month
			}
			if(day >= 1 && day <= 9) {
				day = '0' + day			
			}
			this.time = year + seperator + month + seperator + day
			let userId = sessionStorage.getItem("userId")
			console.log(this.selectGuide.id)
			console.log(this.selectGuide)
			this.$ajax({
				url: "/order/add",
				data: {
					user_id: userId,
					tutor_id: this.selectGuide.tutor_id,
					guide_id: this.selectGuide.id,
					situation: this.sub_list.situation,
					qusetion:this.sub_list.qusetion,
					time: this.time
				}
			}).then(res => {
				if(res.status == "success") {
					this.hideFrame();
					this.modal2 = true;
					this.$Message.success("支付成功")
				}else {
					console.log(res.msg)
				}
			}).catch(err => {
				console.log(err);
			})
		},
		getSelectGuide() {
			this.selectGuide=this.guideList[0]
			console.log(this.selectGuide)
		},
		showFrame() {
			this.showOrder = true;
			this.first=true
			this.button=true
			this.current=0
		},
		hideFrame() {
			this.showOrder = false;
		},
		handleSubmit(name) {
			this.$refs[name].validate(valid => {
				if (valid) {
					this.$Message.success("Success!");
				} else {
					this.$Message.error("Fail!");
				}
			});
		},
		select(index,id) {
			// console.log(id)
			var that= this
			this.hover=index
			var guide = this.guideList.filter(function(item,index,array){
			      return item.id = id;
			});
			this.selectGuide=guide[0]
		},
		nextStep() {
			if(this.selectGuide==undefined) {
				this.selectGuide=this.guideList[0]
			    console.log(this.selectGuide)
			}
			this.first=false
			this.button=false
			this.current=1
		},
		finish() {
			this.hideFrame();
			console.log(this.selectGuide)
			this.modal2 = true;
		},
		process() {
			this.$router.push("/home/userInfo");
			this.modal2 = false;
		},
		cancel() {
			this.modal2 = false;
		}
	}
};
</script>

<style scoped>
	body,
	.ivu-form-label-top .ivu-form-item-label {
		font-size: 14px;
	}
	.ivu-radio-input {
		display: none;
	}
	.vertical-center-modal {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.vertical-center-modal .ivu-modal {
		top: 0;
	}
	.vertical-center-modal .ivu-modal-footer {
		display: none;
	}
	.ivu-modal-body:first-child {
		width: 500px;
		margin: auto;
	}
	.gd_list {
		width: 100%;
		font-size: 14px;
		margin-bottom: 20px;
		height: 40px;
		border: 1px solid rgb(52, 52, 52);
		border-radius: 20px;
		cursor: pointer;
		line-height: 40px;
		display: block;
		margin-top: 10px;
		padding: 0 20px;
		text-align: left;
	}
	.bg {
		background-color: #23acf1;
		color:#fff;
		border-color: #23acf1;
	}                                                          
	.gd_list:hover {
		border: 1px solid #23acf1;
	}
	.title {
		float: left;
	}
	.ivu-steps {
		height: 40px;
		margin-top: 20px;
	}
	.price {
		float: right;
		font-size: 12px;
		line-height: 1.4;
		margin-top: 3px;
		text-align: right;
	}
	.ivu-btn-primary,
	.ivu-btn-ghost {
		padding: 10px;
		width: 140px;
		height: 34px;
		text-align: center;
	}
	.ivu-btn {
		margin: 0px 6px;
	}
	.next {
		text-align: right;
		width: 100%;
		margin-top: 10px;
	}
	.sub {
		margin-top: 20px;
		margin-bottom: 20px;
		font-size: 32px;
		color: rgb(52, 52, 52);
		font-weight: 500;
	}
	.form {
		margin-top: 20px;
	}
	.submit {
		display: none;
	}
</style>
