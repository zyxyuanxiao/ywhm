<template>

			<Menu :theme="theme">
				<Submenu name="1">
					<template slot="title">
					</template>
						<Menu-item name="/home/career">
							职业发展
						</Menu-item>
						<Menu-item name="/home/experience">
							行业经验
						</Menu-item>
						<Menu-item name="/home/internet">
							互联网+
						</Menu-item>
						<Menu-item name="/home/invest">
							创业投资
						</Menu-item>
						<Menu-item name="/home/life">
							生活服务
						</Menu-item>
				</Submenu>
			</Menu>


</template>
<script>
	export default {
		data () {
			return {
				theme: 'dark'
			}
		}
	}

</script>
<style scoped>
i .ivu-menu-vertical .ivu-menu-submenu-title-icon {
	display: none;
}	
.ivu-menu-dark {
	width: 100% !important;
}
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active, .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active:hover {
	color: #23acf1;
	background-color: transparent !important;
}
</style>




