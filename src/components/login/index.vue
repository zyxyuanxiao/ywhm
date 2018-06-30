<template>
	<div>
		<Button @click="modal1 = true">Set the width</Button>
		<Modal
		v-model="modal1"
		width="420" height="340">
			<div class="dialog"
			class-name="vertical-center-modal">
				<h3>欢迎来到「亿万毫米」</h3>
				<Form ref="formInline" :model="formInline" :rules="ruleInline">
					<FormItem prop="user">
						<Input type="text" v-model="formInline.user" placeholder="Username">
							<Icon type="ios-person-outline" slot="prepend" size="20"></Icon>
						</Input>
					</FormItem>
					<FormItem prop="password">
						<Input type="password" v-model="formInline.password" placeholder="Password">
							<Icon type="ios-locked-outline" slot="prepend" size="20">></Icon>
						</Input>
					</FormItem>
					<FormItem>
						<Button type="primary" @click="handleSubmit('formInline')">登录</Button>
					</FormItem>
				</Form>
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
	width: 290px;
}
h3 {
	margin-bottom: 20px;
	font-size: 28px;
	font-weight: 400;
}
.ivu-btn{
	width: 100%;
	height: 36px;
}
a {
	color: #23acf1;
}
.ivu-form-item-content {
	border-color: #ccc;
	height: 36px;
}
.ivu-input-group-append, .ivu-input-group-prepend {
	border: 1px solid #ccc;
	background-color: #fff;
	width: 36px;
}
.ivu-input {
	padding: 18px 7px;
	border: 1px solid #ccc;
}
.ivu-modal-footer {
	display: none;
}
/* .ivu-btn-primary {
	background-color: #23acf1;
    border-color: #22acf1;
} */
.ivu-form-item-content {
	height: 36px;
	line-height: 36px;
}
.ivu-input-group .ivu-input {
	height: 36px !important;
	line-height: 36px!important;
}
.ivu-input-group-append, .ivu-input-group-prepend{
	border: 1px solid #ccc;
}
</style>