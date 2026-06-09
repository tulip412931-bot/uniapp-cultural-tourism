<template>
  <view class="tabbar">
    <view class="tab" :class="{ active: active === 'home' }" @click="go('home')">
      <view class="icon"><text>🏠</text></view>
      <text class="label">首页</text>
    </view>
    <view class="tab" :class="{ active: active === 'shop' }" @click="go('shop')">
      <view class="icon"><text>🏪</text></view>
      <text class="label">门店</text>
    </view>
    <view class="tab" :class="{ active: active === 'cart' }" @click="go('cart')">
      <view class="icon"><text>🛒</text></view>
      <text class="label">购物车</text>
    </view>
    <view class="tab" :class="{ active: active === 'me' }" @click="go('me')">
      <view class="icon"><text>👤</text></view>
      <text class="label">我的</text>
    </view>
  </view>
</template>

<script setup>
defineProps({ active: { type: String, default: 'home' } })
function go (key) {
  const map = {
    home: '/pages/index/index',
    shop: '/pages/hotel/list',
    cart: '/pages/cultural/list',
    me: '/pages/guide/list'
  }
  uni.switchTab && false
  uni.reLaunch({ url: map[key] })
}
</script>

<style lang="scss" scoped>
.tabbar {
  position: fixed; left: 0; right: 0; bottom: 0;
  height: 110rpx; padding-bottom: env(safe-area-inset-bottom);
  background: #ffffff; border-top: 1rpx solid #F3F4F6;
  display: flex; align-items: center; justify-content: space-around; z-index: 999;
  .tab {
    flex: 1; display: flex; flex-direction: column; align-items: center; gap: 4rpx;
    .icon { font-size: 38rpx; filter: grayscale(1); opacity: .55; }
    .label { font-size: 22rpx; color: #9CA3AF; }
    &.active {
      .icon { filter: none; opacity: 1; }
      .label { color: #2563EB; font-weight: 600; }
    }
  }
}
</style>
