
<template>
<div>
    <Modal :mask-closable="false" scrollable @on-cancel="close()"
        v-model="modal1"
		width="560"
        class-name="vertical-center-modal"
		>
		<Steps :current=current>
			<Step title="预约"></Step>
			<Step title="问题"></Step>
			<Step title="付款"></Step>
        </Steps>
		<hr />
		<div ref="first">
		<p style="margin-top: 10px;">预约</p>
		<div>
		<div class="gd_list" @click="bg" ref="btn" v-for="item in gd">
				<span class="title"> {{ item.title }} </span>
				<span class="price"> 
					{{ item.price }}元一次<br>
					约{{ item.duration }}小时 </p>
				</span>
		</div></div>
		</div>
		<div class="form" ref="form1" >
		<Form ref="form" :model="form" :rules="ruleValidate" label-position="top" >
        <FormItem label="告诉行家你要请教的问题：（20-300字）">
            <Input v-model="form.value1" type="textarea" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="介绍自己当前的情况：（20-300字）">
            <Input v-model="form.value2" type="textarea" :rows="4" placeholder="Enter something..."></Input>
        </FormItem>
		</Form>        
        </div>
		<hr />
		<div class="next">
			<div ref="next">
				<Button type="primary" @click="nextStep()" >下一步</Button>
			</div>
			<div ref="submit" class="submit">
				<Button type="primary" @click="finish()" >提交</Button>
			</div>
		</div>
    </Modal>
	<Modal :mask-closable="false" scrollable 
        v-model="modal2"
		width="420"
        class-name="vertical-center-modal"
		>
		<div style="text-align: center; margin-bottom: 20px;">
			<h1 class="sub">提交成功！</h1>
			<p> 请等待行家反馈</p>
		</div>
		<div style="text-align: center;">
			<Button type="primary" @click="process">查看进度</Button>
			<Button type="ghost" @click="cancel">取消</Button>
		</div>
	</Modal>
	</div>
</template>
<script>
    export default {
	   props:['message'],
       data() {
		return {
			current: 0,
			modal1: this.message,
			modal2: false,
			formValidate: false,
			// first: true,
			form: {
				value1: '',
				value2: '',
			},
			gd: [
				{
					id: 1,
					title: '如何转行做投资？',
					price: 600,
					duration: 1
				},
				{
					id: 2,
					title: '如何通过商业计划书打动投资人？',
					price: 500,
					duration: 1.5
				},
				{
					id: 3,
					title: '决定PE投资成败的十大要素',
					price: 600,
					duration: 2
				}
			],
			 ruleValidate: {
				value1: [
                    { required: true, message: '*请填写打算向行家请教的问题', trigger: 'blur' },
                    { type: 'string', min: 20, message: '最少20个字哦', trigger: 'blur' }
				],
			   value2: [
                    { required: true, message: '*请填写一些自己的情况', trigger: 'blur' },
                    { type: 'string', min: 20, message: '最少20个字哦', trigger: 'blur' }
                ]
			 }
		};
	},
	 watch:{
      message(cur){//监听invitor值的变化
        if(cur == true){//当父组件传递值为true是，则显示
           this.modal1 = true;
        }
      }
    },
	methods: {
		handleSubmit(name) {
			this.$refs[name].validate((valid) => {
				if (valid) {
					this.$Message.success('Success!');
				} else {
					this.$Message.error('Fail!');
				}

			})
		},
		bg() {
			// document.querySelector('div').setAttribute('style', 'background:#23acf1')
			this.$refs.btn.style.background = "#23acf1"	
			this.$refs.btn.style.color="#ffffff"
		},
		nextStep() {
			if (this.modal1==true) {
				this.$refs.form1.style.display = "block"
				this.$refs.submit.style.display = "block"
				this.$refs.first.style.display = "none"
				this.$refs.next.style.display = "none"
				// this.$emit('changingType','false');
				// this.first=false
			}
			else {
				this.$refs.form1.style.display = "none"
				this.$refs.submit.style.display = "none"
				this.$refs.first.style.display = "block"
				this.$refs.next.style.display = "block"
				// this.$emit('changingType','false');
			}
			// this.$refs.first.style.display = this.first == "none" ? "none" : "block";
			// this.$refs.form1.style.display =  this.first == "none" ? "block" : "none";
			// this.$refs.next.style.display =  this.first == "none" ? "none" : "block";
			// this.$refs.submit.style.display = this.first == "none" ? "block" : "none";
			// if(this.$refs.first.style.display=="block")
			// 	this.$emit('changingType','false');
			if (this.current == 3) {
                 this.current = 0;
            } else {
                this.current += 1;
            }
		},
		finish() {
			this.modal1 = false
			// this.$emit('changingType','false');
			this.modal2 = true
		},
		process() {
			this.$router.push('/home/userInfo');
			this.modal2=false
		},
		cancel() {
			this.modal2=false
		},
		close () {
			this.$emit('changingType','false');
		},
	}
	}
</script>
<style scoped>
	body,.ivu-form-label-top .ivu-form-item-label {
		font-size: 14px;
	}
	.ivu-radio-input {
		display: none;
	}
    .vertical-center-modal{
        display: flex;
        align-items: center;
        justify-content: center; 
	} 
	.vertical-center-modal .ivu-modal{
        top: 0;
    }
	.vertical-center-modal .ivu-modal-footer{
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
	.gd_list:first-child {
		background-color: #23acf1;
		color:#fff;
		border-color: #23acf1;
	}
	.gd_list:visited {
		background-color: #23acf1;
		color:#fff;
		border-color: #23acf1;
	}
	.gd_list:hover {
		/* background-color: #6ed5d7; */
		border: 1px solid #23acf1;
    	color: #343434;
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
	.ivu-btn-primary,.ivu-btn-ghost {
		padding: 10px;
		width: 140px;
		height: 34px;
		/* line-height: 34px; */
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
		color: rgb(52,52,52);
		font-weight: 500;
	}
	.form {
		margin-top:20px;
		display: none;
	}
	.submit{
		 display: none;
	}
</style>
