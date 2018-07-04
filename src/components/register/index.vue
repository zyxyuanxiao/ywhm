<template>
    <div class="reg">
      <h3>欢迎加入「亿万毫米」</h3>
      <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" >
         <FormItem prop="user">
            <Input type="text" v-model="formCustom.user" size="large" placeholder="用户名" />
        </FormItem>
        <FormItem prop="passwd">
            <Input type="password" v-model="formCustom.passwd" size="large" placeholder="密码"/>
        </FormItem>
        <FormItem prop="passwdCheck">
            <Input type="password" v-model="formCustom.passwdCheck" size="large" placeholder="确认密码" />
        </FormItem>
        <FormItem prop="email">
            <Input type="email" v-model="formCustom.email" size="large" placeholder="邮箱" />
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
        data () {
            const validateUser = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Please enter your username'));
                } 
            };
            const validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Please enter your password'));
                } else {
                    if (this.formCustom.passwdCheck !== '') {
                        // 对第二个密码框单独验证
                        this.$refs.formCustom.validateField('passwdCheck');
                    }
                    callback();
                }
            };
            const validatePassCheck = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Please enter your password again'));
                } else if (value !== this.formCustom.passwd) {
                    callback(new Error('The two input passwords do not match!'));
                } else {
                    callback();
                }
            };
            const validateemail = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('email cannot be empty'));
                }
                else {
                    if (value !== '') { 
                      var reg=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
                      if(!reg.test(value)){
                        callback(new Error('请输入有效的邮箱'));
                      }
                }
                    callback();
                }
                // 模拟异步验证效果
                // setTimeout(() => {
                //     if (!Number.isInteger(value)) {
                //         callback(new Error('Please enter a numeric value'));
                //     } else {
                //         if (value < 18) {
                //             callback(new Error('Must be over 18 years of email'));
                //         } else {
                //             callback();
                //         }
                //     }
                // }, 1000);
            };
            
            return {
              single: true,
                formCustom: {
                    user: '',
                    passwd: '',
                    passwdCheck: '',
                    email: ''
                },
                ruleCustom: {
                    user: [
                        { validator: validateUser, trigger: 'blur' }
                    ],
                    passwd: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    passwdCheck: [
                        { validator: validatePassCheck, trigger: 'blur' }
                    ],
                    email: [
                        { validator: validateemail, trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Messemail.success('Success!');
                    } else {
                        this.$Messemail.error('Fail!');
                    }
                })
            }
        }
    }
</script>
<style scoped>
.reg {
    width: 770px;
    margin: 36px auto ; 
    border: 1px solid #e8e8e8;
    padding:30px;
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
@media (max-width:768px) {
   h3 {
     font-size: 30px;
   }
   .reg{
       margin: 20px 10px;
       width: 95%;
   }
}
</style>

