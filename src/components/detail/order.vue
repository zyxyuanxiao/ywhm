
<template>
<div>
		<Modal :mask-closable="false" scrollable @on-cancel="hideFrame()"
				v-model="showOrder"
		width="560"
				class-name="vertical-center-modal"
		>
		<Steps :current=current>
			<Step title="预约"></Step>
			<Step title="问题"></Step>
			<Step title="付款"></Step>
				</Steps>
		<hr />
		<div v-if="first">
		<p style="margin-top: 10px;">预约</p>
		<div>
		<div class="gd_list" ref="btn" v-for="(item,index) in guideList" :class="{  gd_list: active,  bg: hover }"  @click="select(item.id)">
				<span class="title"> {{ item.title }} </span>
				<span class="price"> 
					{{ item.price }}元一次<br>
					约{{ item.duration }}小时 </p>
				</span>
		</div></div>
		</div>
		<div class="form" v-else >
		<Form :model="sub_list" :rules="ruleValidate" label-position="top" >
				<FormItem label="告诉行家你要请教的问题：（20-300字）">
						<Input v-model="sub_list.qusetion" type="textarea" placeholder="Enter something..."></Input>
				</FormItem>
				<FormItem label="介绍自己当前的情况：（20-300字）">
						<Input v-model="sub_list.situation" type="textarea" :rows="4" placeholder="Enter something..."></Input>
				</FormItem>
		</Form>        
		</div>
		<hr />
		<div class="next">
				<Button type="primary" @click="nextStep()" v-if="button">下一步</Button>
				<Button type="primary" @click="finish()" v-else >提交</Button>
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
      active: true,
      hover: false,
      showOrder: false,
      first: true,
      button: true,
      current: 0,
      modal2: false,
      formValidate: false,
      sub_list: {
        situation: "",
        qusetion: ""
      }, //保存订单
      selectGuide: {}, //保存选中的指导详情
      ruleValidate: {
        value1: [
          {
            required: true,
            message: "*请填写打算向行家请教的问题",
            trigger: "blur"
          },
          { type: "string", min: 20, message: "最少20个字哦", trigger: "blur" }
        ],
        value2: [
          { required: true, message: "*请填写一些自己的情况", trigger: "blur" },
          { type: "string", min: 20, message: "最少20个字哦", trigger: "blur" }
        ]
      }
    };
  },
  mounted() {
    this.getSelectGuide();
  },
  methods: {
    getSelectGuide() {
      this.selectGuide = this.guideList[0];
      console.log(this.selectGuide);
    },
    showFrame() {
      this.showOrder = true;
      this.first = true;
      this.button = true;
      this.current = 0;
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
    select(id) {
      console.log(id);
      var that = this;
      var guide = this.guideList.filter(function(item, index, array) {
        if (item.id == id) {
          that.hover = true;
        } else {
          that.hover = false;
        }
        return item.id == id;
      });
      this.selectGuide = guide[0];

      console.log(this.selectGuide);
    },
    nextStep() {
      this.first = false;
      this.button = false;
      this.current = 1;
    },
    finish() {
      this.hideFrame();
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
/* .gd_list:first-child {
	background-color: #23acf1;
	color: #fff;
	border-color: #23acf1;
}	 */
.bg {
  background-color: #23acf1;
  color: #fff;
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
