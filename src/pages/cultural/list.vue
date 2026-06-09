<template>
  <view class="page">
    <view class="banner">
      <text class="b-t">国潮文创</text>
      <text class="b-s">让传统美学融入日常生活</text>
    </view>
    <view class="grid">
      <view v-for="item in list" :key="item.id" class="card" @tap="goto(item.id)">
        <image :src="item.cover" mode="aspectFill" class="cover" />
        <view class="body">
          <text class="title">{{ item.title }}</text>
          <view class="tags">
            <text v-for="t in item.tags" :key="t" class="tag">{{ t }}</text>
          </view>
          <view class="price-row">
            <text class="price">¥{{ item.price }}</text>
            <text class="sold">已售 {{ item.sold }}</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { cultural } from '@/common/data.js'
const list = cultural
function goto (id) { uni.navigateTo({ url: '/pages/cultural/detail?id=' + id }) }
</script>

<style lang="scss">
page { background: #F3F4F6; }
.page { padding: 24rpx; }
.banner {
  background: linear-gradient(135deg, #fbbf24, #d97706); color: #fff;
  padding: 32rpx; border-radius: 24rpx; margin-bottom: 24rpx;
  display: flex; flex-direction: column; gap: 8rpx;
}
.b-t { font-size: 36rpx; font-weight: 700; }
.b-s { font-size: 24rpx; opacity: .9; }
.grid { display: flex; flex-wrap: wrap; gap: 20rpx; }
.card {
  width: calc(50% - 10rpx);
  background: #fff; border-radius: 20rpx; overflow: hidden;
  box-shadow: 0 4rpx 12rpx rgba(0,0,0,.05);
}
.cover { width: 100%; height: 280rpx; }
.body { padding: 20rpx; }
.title { font-size: 26rpx; color: #1F2937; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; min-height: 72rpx; }
.tags { display: flex; gap: 8rpx; margin: 10rpx 0; flex-wrap: wrap; }
.tag { background: #FFFBEB; color: #B45309; font-size: 18rpx; padding: 4rpx 10rpx; border-radius: 6rpx; }
.price-row { display: flex; justify-content: space-between; align-items: flex-end; }
.price { color: #DC2626; font-size: 30rpx; font-weight: 700; }
.sold { color: #9CA3AF; font-size: 20rpx; }
</style>
