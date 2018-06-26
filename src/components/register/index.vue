<template>
	<div>                                                                       
	 <Button @click="modal1 = true">Set the width</Button>
	<Modal
		v-model="modal1"
		width="420">
		<div class="dialog"
		class-name="vertical-center-modal">
			<h3>欢迎来到「亿万毫米」</h3>
			<form action="" method="post" class="login_form" :model="formInline" :rules="ruleInline" >		
				<div>
					<lable><img src="../../assets/img/username.png"></lable>
					<input type="text" placeholder="用户名" v-model="formInline.user">
				</div>
				<div>
					<lable><img src="../../assets/img/password.png"></lable>
					<input type="password" placeholder="密码" v-model="formInline.password">
				</div>
				<input type="submit" value="登录" class="login" @click="handleSubmit('formInline')">
			</form>
			<p>没有账号？<router-link to="/home/register">现在去注册</router-link></p>
		</div>
	</Modal>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				modal1: false,
				formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: 'Please fill in the user name', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ]
                }
			}
			
		},
		methods: {
			ok () {
				this.$Message.info('Clicked ok');
			},
			cancel () {
				this.$Message.info('Clicked cancel');
			},
			handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            }
		}
	}
</script>
<style scoped>
.dialog {
	margin: 30px auto 21px;
	width: 280px;
}
h3 {
	margin-bottom: 20px;
	font-size: 28px;
	font-weight: 400;
}
.login_form {
	width: 280px;
	padding-bottom: 15px;
}
.login_form label {
	width: 36px;
	height: 36px;
	border: 1px solid #000;
}
.login_form div {
	display: flex;
	width: 280px;
	margin-bottom: 20px;
}
lable{
	display: display;
	width: 36px;
	height: 36px;
	border:1px solid;
	border-right: 0px;
}
img{
	width: 24px;
	height: 24px;
}
input {
	width: 100%;
	height: 36px;
}
.login {
	width: 100%;
}
</style>

