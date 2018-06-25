<template>
<div class="login-dialog">
	<div class="info-dialog">
			<h3>欢迎来到「亿万毫米」</h3>
	</div>
	<Form ref="formInline" :model="formInline" :rules="ruleInline" :label-width="100">
		<div>
			<Icon type="person" ></Icon>
			<input type="text" v-model="formInline.user" placeholder="Username"></input>
		</div>
		<div>
			<Icon type="locked"></Icon>
			<input type="password" v-model="formInline.password" placeholder="Password"></input>
		</div>
		<Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
		<p>没有账号，现在去注册</p>
	</Form>
</div>
</template>
<script>
	export default {
		data () {
			return {
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

</style>
