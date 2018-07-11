<template>
  <div class="reg">
    <h3>欢迎加入「亿万毫米」</h3>
    <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" >
      <FormItem prop="user">
        <Input type="text" v-model="formCustom.user" size="large" placeholder="用户名" />
      </FormItem>
      <FormItem prop="email">
        <Input type="email" v-model="formCustom.email" size="large" placeholder="邮箱" />
      </FormItem>
      <FormItem prop="passwd">
        <Input type="password" v-model="formCustom.passwd" size="large" placeholder="密码"/>
      </FormItem>
      <FormItem prop="passwdCheck" >
        <Input type="password" v-model="formCustom.passwdCheck" size="large" placeholder="确认密码" @on-enter="handleSubmit('formCustom')" />
      </FormItem>
      <FormItem>
        <Checkbox v-model="single">我已阅读并同意《服务条款》</Checkbox>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formCustom')" size="large">注册</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
export default {
  data() {
    const validateUser = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      }
      callback();
    };
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } 
      else if(value.length < 3) {
        callback(new Error("密码不能少于3位"));
      }
      else {
        if (this.formCustom.passwdCheck !== "") {
          // 对第二个密码框单独验证
          this.$refs.formCustom.validateField("passwdCheck");
        }
        callback();
      }
    };
    const validatePassCheck = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.formCustom.passwd) {
        callback(new Error("两次密码不一致"));
      } else {
        callback();
      }
    };
    const validateemail = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("邮箱不能为空"));
      } else {
        if (value !== "") {
          var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
          if (!reg.test(value)) {
            callback(new Error("请输入有效的邮箱"));
          }
        }
        callback();
      }
    };
    return {
      single: true,
      formCustom: {
        user: "",
        passwd: "",
        passwdCheck: "",
        email: ""
      },
      ruleCustom: {
        user: [{ validator: validateUser, trigger: "blur" }],
        passwd: [{ validator: validatePass, trigger: "blur" }],
        passwdCheck: [{ validator: validatePassCheck, trigger: "blur" }],
        email: [{ validator: validateemail, trigger: "blur" }]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          //注册
          this.$ajax({
            url: "/user/register",
            data: {
                nickname: this.formCustom.user,
                password: this.formCustom.passwd,
                email: this.formCustom.email
            }
          }).then(res => {
            this.$Message.success('注册成功，请您重新登录')
            this.$router.push('/')
          }).catch(err => {
            this.$Message.error('注册失败')
          });
        }
      });
    }
  }
};
</script>

<style scoped>
  .reg {
    max-width: 770px;
    margin: 36px auto;
    border: 1px solid #e8e8e8;
    padding: 30px;
    background: #fff;
    text-align: center;
  }
  h3 {
    margin-bottom: 36px;
    font-size: 36px;
    font-weight: 400;
  }
  .ivu-input {
    width: 320px;
  }
  .ivu-btn-primary {
    width: 100%;
  }
  .ivu-form-item {
    width: 280px;
    margin: 20px auto;
  }
  
  @media (max-width: 768px) {
    h3 {
      font-size: 28px;
    }
    .reg {
      margin: 20px 10px;
    }
  }
</style>

