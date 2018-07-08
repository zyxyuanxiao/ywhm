<template>
	<Modal :mask-closable="false" scrollable 
				v-model="modal1"
				width="420"
				class-name="vertical-center-modal"
				@on-cancel="close()"
				>
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
							</FormItem>
						</Form>
						<p style="font-size: 14px;" @click="closed">没有账号？<router-link to="/home/register" class="register" >现在去注册</router-link></p>
					</div>
   	 </Modal>
</template>
<script>
export default {
	props:['message'],
	data() {
		return {
			modal1: this.message,
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
	 watch:{
      message(cur){//监听invitor值的变化
        if(cur == true){//当父组件传递值为true是，则显示
           this.modal1 = true;
        }
      },
    }
    ,
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
		close () {
			this.$emit('changingType','false');
		},
		closed () {
			this.modal1 = false
			this.$emit('changingType','false');
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
}

</style>