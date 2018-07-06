
<template>
<div>
	
    <Button @click="modal9 = true">20px from the top</Button>
    <Modal 
        v-model="modal9"
        :styles="{top: '20px'}">
        <p>Content of dialog</p>
        <p>Content of dialog</p>
        <p>Content of dialog</p>
    </Modal>
    <Button @click="modal10 = true">Vertical center</Button>
    <Modal :mask-closable="false" scrollable 
        v-model="modal10"
		width="420"
        class-name="vertical-center-modal"
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
						<p @click="close" style="font-size: 14px;">没有账号？<router-link to="/home/register" class="register">现在去注册</router-link></p>
					</div>
    </Modal>
	</div>
</template>
<script>
    export default {
       data() {
		return {
			hidden: 'none',
			width: 	0,
			isCollapsed: false,
			modal9: false,
			modal10: false,
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
		};
	},

	methods: {
		switchPage(name) {			
			if (name == ""){
				this.modal1 = true
			}
			else{
				this.$router.push(name);				
				if (this.width <= 768 && name!="/home/index"){
					this.hidden = this.$refs.mid.style.display
					this.$refs.mid.style.display = this.hidden=="none"?"block":"none"
					console.log("<=768 " + this.width) 
			   }
		   }
		},
		handleSubmit(name) {
			this.$refs[name].validate((valid) => {
				if (valid) {
					this.$Message.success('Success!');
					this.modal1 = false
				} else {
					this.$Message.error('Fail!');
				}

			})
		},
		close () {
			this.modal1 = false
		},
		show () {
			this.hidden=this.$refs.mid.style.display
			this.$refs.mid.style.display = this.hidden=="none"?"block":"none"
			if(this.$refs.mid.style.display==="block"){
				console.log("mzry")
				this.$refs.fold.style.height="270px"
			}
			else
		        this.$refs.fold.style.height="0px"
		   }
		   
	}	
    }
</script>
<style>
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
</style>
