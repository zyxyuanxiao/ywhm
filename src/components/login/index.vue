<template>
	<Modal :mask-closable="false" scrollable v-model="showLogin" width="420" class-name="vertical-center-modal" @on-cancel="hideFrame()" >
		<div class="dialog">
			<h3>欢迎来到「亿万毫米」</h3>
			<Form ref="formInline" :model="formInline" :rules="ruleInline">
				<FormItem prop="user">
					<Input type="text" v-model="formInline.user" placeholder="Username" size="large">
						<Icon type="ios-person-outline" slot="prepend" size="20"></Icon>
					</Input>
				</FormItem>
				<FormItem prop="password">
					<Input type="password" v-model="formInline.password" placeholder="Password" size="large">
						<Icon type="ios-locked-outline" slot="prepend" size="20">></Icon>
					</Input>
				</FormItem>
				<FormItem>
					<Button type="primary" @click="handleSubmit('formInline')" size="large">登录</Button>
          <p style="font-size: 14px;margin-top: 6px;" @click="hideReset('formInline')" >没有账号？<router-link to="/home/register" class="register">现在去注册</router-link></p>
				</FormItem>	
			</Form>
		
		</div>
  </Modal>
</template>

<script>
export default {
  props: ["message"],
  data() {
    return {
	    showLogin: false,
      formInline: {
        user: "",
        password: ""
      },
      ruleInline: {
        user: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          },
          {
            type: "string",
            min: 3,
            message: "密码不能少于3位",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
	  showFrame() {
      this.showLogin = true
    },
	  hideFrame(name) {
      this.showLogin = false
      // this.$refs[name].resetFields();
    },
    hideReset(name) {
      this.showLogin = false
      this.$refs[name].resetFields();
	  },
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
	  		//登录
          this.$ajax({
            url: "/user/login",
            data: {
              nickname: this.formInline.user
            }
          })
          .then(res => {
              if(res.status == "error") {
				        this.$Message.error(res.msg);
			        }else {
			      	  if(res.data.password == this.formInline.password) {
			      		  this.$Message.success("登录成功")
			      		  if(sessionStorage) {
			      			  sessionStorage.setItem("userId",res.data.id)
			      			  sessionStorage.setItem("userName",res.data.nickname)
                  }
			      		  this.hideFrame()
			      		  this.$router.go(0)
			      	  }else {
			      		  this.$Message.error("用户名或密码错误!");
			      	  }
              }
          })
          .catch(err => {
            this.$Message.error("网络出现问题!");
          });
        } 
      });
    }
  }
};
</script>

<style scoped>
  .dialog {
    margin: 30px auto 21px;
    width: 290px;
  }
  h3 {
    margin-bottom: 20px;
    font-size: 28px;
    font-weight: 400;
  }
  .ivu-btn {
    width: 100%;
  }
</style>