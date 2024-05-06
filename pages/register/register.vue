<template>
	<view>
		<image src="../../static/logo-2.png" mode="widthFix" class="logo"></image>
		<view class="register-container">
			<input type="text" placeholder="输入您的邀请码" class="register-code" maxlength="6" v-model="registerCode"/>
			<view class="register-desc">小陈创建登录账号之后，你可以从个人邮箱中获取注册邀请码</view>
			<button class="register-btn" open-type="getUserInfo" @tap="register()">执行注册</button>
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
			register: function(){
				uni.login({
					provider: 'weixin',
					success: function(resp){
						console.log(resp.code)
						let code = resp.code;
						uni.getUserInfo({
							provider: 'weixin',
							success: function(resp){
								let nickName = resp.userInfo.nickName;
								let avatarUrl = resp.userInfo.avatarUrl;
								let data={
									code:code,
									nickname:nickName,
									photo:avatarUrl,
									registerCode:that.registerCode
								}
							}
						})
					}
				})
			}
		}
	}
</script>

<style lang="less">
	@import url('register.less');

</style>
