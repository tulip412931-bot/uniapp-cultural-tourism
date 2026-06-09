<template>
  <view v-if="item" class="page">
    <image :src="item.cover" mode="aspectFill" class="hero" />
    <view class="card">
      <view class="row">
        <text class="title">{{ item.title }}</text>
        <text class="rating">★ {{ item.rating }}</text>
      </view>
      <text class="type">{{ item.type }} · 📍 {{ item.location }}</text>
      <view class="tags">
        <text v-for="t in item.tags" :key="t" class="tag">{{ t }}</text>
      </view>
    </view>

    <view class="card">
      <text class="h2">酒店介绍</text>
      <text class="p">{{ item.desc }}</text>
    </view>

    <view class="card">
      <text class="h2">配套设施</text>
      <view class="fac-list">
        <text v-for="f in item.facilities" :key="f" class="fac">{{ f }}</text>
      </view>
    </view>

    <view class="card">
      <text class="h2">入住日期</text>
      <view class="dates">
        <view class="date-item">
          <text class="d-l">入住</text>
          <text class="d-v">{{ checkIn }}</text>
        </view>
        <text class="d-arrow">→</text>
        <view class="date-item">
          <text class="d-l">离店</text>
          <text class="d-v">{{ checkOut }}</text>
        </view>
        <text class="nights">共 1 晚</text>
      </view>
    </view>

    <view class="footer">
      <view class="left">
        <text class="price">¥{{ item.price }}</text>
        <text class="unit">/ 晚</text>
      </view>
      <view class="cta" @tap="toast('预订成功，详情已发送到短信')">立即预订</view>
    </view>
  </view>
</template>

<script setup>
import { ref, computed } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { hotels, findById } from '@/common/data.js'

const item = ref(null)
onLoad((q) => { item.value = findById(hotels, q.id) || hotels[0] })
const checkIn = computed(() => formatDay(0))
const checkOut = computed(() => formatDay(1))

function formatDay (offset) {
  const d = new Date(Date.now() + offset * 86400000)
  return `${d.getMonth() + 1}月${d.getDate()}日`
}
function toast (title) { uni.showToast({ title, icon: 'none' }) }
</script>

<style lang="scss">
page { background: #F3F4F6; }
.page { padding-bottom: 140rpx; }
.hero { width: 100%; height: 420rpx; }
.card { background: #fff; margin: 24rpx; border-radius: 20rpx; padding: 28rpx; box-shadow: 0 4rpx 12rpx rgba(0,0,0,.04); }
.row { display: flex; justify-content: space-between; align-items: center; }
.title { font-size: 34rpx; font-weight: 700; color: #1F2937; }
.rating { font-size: 26rpx; color: #F59E0B; }
.type { display: block; font-size: 24rpx; color: #6B7280; margin: 12rpx 0; }
.tags { display: flex; gap: 12rpx; flex-wrap: wrap; }
.tag { background: #FCE7F3; color: #9D174D; font-size: 22rpx; padding: 6rpx 14rpx; border-radius: 6rpx; }
.h2 { display: block; font-size: 30rpx; font-weight: 700; color: #1F2937; margin-bottom: 16rpx; }
.p { font-size: 26rpx; color: #4B5563; line-height: 1.7; }
.fac-list { display: flex; gap: 12rpx; flex-wrap: wrap; }
.fac { background: #F3F4F6; color: #1F2937; font-size: 22rpx; padding: 10rpx 18rpx; border-radius: 8rpx; }

.dates { display: flex; align-items: center; gap: 24rpx; }
.date-item { display: flex; flex-direction: column; }
.d-l { font-size: 22rpx; color: #9CA3AF; }
.d-v { font-size: 28rpx; color: #1F2937; font-weight: 700; }
.d-arrow { font-size: 28rpx; color: #9CA3AF; }
.nights { margin-left: auto; background: #F3F4F6; color: #6B7280; padding: 8rpx 16rpx; border-radius: 8rpx; font-size: 22rpx; }

.footer {
  position: fixed; left: 0; right: 0; bottom: 0; height: 110rpx; background: #fff;
  display: flex; align-items: center; padding: 0 24rpx; gap: 16rpx; box-shadow: 0 -4rpx 12rpx rgba(0,0,0,.04);
}
.left { flex: 1; }
.price { color: #DC2626; font-size: 40rpx; font-weight: 700; }
.unit { color: #9CA3AF; font-size: 22rpx; margin-left: 4rpx; }
.cta { width: 280rpx; height: 76rpx; line-height: 76rpx; text-align: center; background: linear-gradient(135deg,#f472b6,#db2777); color: #fff; font-weight: 700; border-radius: 999rpx; font-size: 28rpx; }
</style>
