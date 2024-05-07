<template>
	<view>
		<image src="../../static/logo-1.png" class="logo" mode="widthFix"></image>
		<view class="logo-title">小陈课题组在线办公系统</view>
		<view class="logo-subtitle">Ver 1.0</view>
		<button class="login-btn" open-type="gutUserInfo" @tap="login()">登录系统</button>
		<view class="register-container">
			没有账号？
			<text class="register" @tap="toRegister()">立即注册</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			toRegister:function(){
				uni.navigateTo({
					url:"../register/register"
				})
			},
			login:function(){
				let that = this
				uni.login({
					provider:"weixin",
					success:function(resp){
						let code = resp.code
						that.ajax(that.url.login,"POST",{"code":code},function(resp){
							let permission = resp.data.permission
							uni.setStorageSync("permission",permission)
							// 跳转至index
						})
					},
					fail:function(e){
						uni.showToast({
							icon:"none",
							title:"执行异常"
						})
					}
				})
			}
		}
	}
</script>

<style lang="less">
	@import url("login.less");
</style>
