<template>
  <view v-if="item" class="page">
    <image :src="item.cover" mode="aspectFill" class="hero" />
    <view class="card">
      <view class="row">
        <text class="title">{{ item.title }}</text>
        <text class="level">{{ item.level }}</text>
      </view>
      <text class="loc">📍 {{ item.location }}</text>
      <view class="price-row">
        <text class="price">¥{{ item.price }}</text>
        <text class="ori">¥{{ item.originalPrice }}</text>
        <text class="sold">已售 {{ item.sold }}</text>
      </view>
      <view class="tags">
        <text v-for="t in item.tags" :key="t" class="tag">{{ t }}</text>
      </view>
    </view>

    <view class="card">
      <text class="h2">景区介绍</text>
      <text class="p">{{ item.desc }}</text>
    </view>

    <view class="card">
      <text class="h2">开放时间</text>
      <text class="p">{{ item.openTime }}</text>
    </view>

    <view class="card">
      <text class="h2">购票须知</text>
      <view v-for="(n, i) in item.notice" :key="i" class="tip-item">
        <text class="tip-dot">•</text><text class="tip-txt">{{ n }}</text>
      </view>
    </view>

    <view class="card date-card">
      <text class="h2">选择日期</text>
      <view class="dates">
        <view v-for="(d, i) in dates" :key="i" class="date" :class="{ active: chosen === i }" @tap="chosen = i">
          <text class="date-d">{{ d.day }}</text>
          <text class="date-w">{{ d.week }}</text>
          <text class="date-p">¥{{ item.price + (i === 0 ? 0 : i * 5) }}</text>
        </view>
      </view>
    </view>

    <view class="footer">
      <view class="fav" @tap="toast('已收藏')">❤</view>
      <view class="cart" @tap="toast('已加入购物车')">加购物车</view>
      <view class="cta" @tap="toast('下单成功，请前往订单中心支付')">立即购买</view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { tickets, findById } from '@/common/data.js'

const item = ref(null)
const chosen = ref(0)
const dates = ref([])

onLoad((q) => {
  item.value = findById(tickets, q.id) || tickets[0]
  const weeks = ['日', '一', '二', '三', '四', '五', '六']
  const arr = []
  const today = new Date()
  for (let i = 0; i < 7; i++) {
    const d = new Date(today.getTime() + i * 86400000)
    arr.push({
      day: `${d.getMonth() + 1}/${d.getDate()}`,
      week: i === 0 ? '今天' : `周${weeks[d.getDay()]}`
    })
  }
  dates.value = arr
})

function toast (title) { uni.showToast({ title, icon: 'none' }) }
</script>

<style lang="scss">
page { background: #F3F4F6; }
.page { padding-bottom: 140rpx; }
.hero { width: 100%; height: 420rpx; }
.card { background: #fff; margin: 24rpx; border-radius: 20rpx; padding: 28rpx; box-shadow: 0 4rpx 12rpx rgba(0,0,0,.04); }
.row { display: flex; justify-content: space-between; align-items: center; }
.title { font-size: 34rpx; font-weight: 700; color: #1F2937; }
.level { background: #DBEAFE; color: #1D4ED8; font-size: 22rpx; padding: 6rpx 14rpx; border-radius: 6rpx; }
.loc { display: block; font-size: 24rpx; color: #6B7280; margin: 12rpx 0; }
.price-row { display: flex; align-items: flex-end; gap: 16rpx; margin: 12rpx 0; }
.price { color: #DC2626; font-size: 40rpx; font-weight: 700; }
.ori { color: #9CA3AF; font-size: 22rpx; text-decoration: line-through; }
.sold { color: #9CA3AF; font-size: 22rpx; margin-left: auto; }
.tags { display: flex; gap: 12rpx; flex-wrap: wrap; }
.tag { background: #FEF3C7; color: #92400E; font-size: 22rpx; padding: 6rpx 14rpx; border-radius: 6rpx; }
.h2 { display: block; font-size: 30rpx; font-weight: 700; color: #1F2937; margin-bottom: 16rpx; }
.p { font-size: 26rpx; color: #4B5563; line-height: 1.7; }
.tip-item { display: flex; gap: 12rpx; margin-bottom: 10rpx; }
.tip-dot { color: #2563EB; }
.tip-txt { font-size: 26rpx; color: #4B5563; flex: 1; }

.dates { display: flex; gap: 16rpx; flex-wrap: wrap; }
.date {
  width: 140rpx; padding: 16rpx 0; border: 1rpx solid #E5E7EB; border-radius: 12rpx;
  display: flex; flex-direction: column; align-items: center; gap: 4rpx;
}
.date.active { border-color: #2563EB; background: #EFF6FF; }
.date-d { font-size: 28rpx; font-weight: 700; color: #1F2937; }
.date-w { font-size: 20rpx; color: #6B7280; }
.date-p { font-size: 22rpx; color: #DC2626; font-weight: 700; }

.footer {
  position: fixed; left: 0; right: 0; bottom: 0; height: 110rpx;
  background: #fff; display: flex; align-items: center; padding: 0 24rpx;
  gap: 12rpx; box-shadow: 0 -4rpx 12rpx rgba(0,0,0,.04);
}
.fav { width: 76rpx; height: 76rpx; line-height: 76rpx; text-align: center; border-radius: 50%; background: #F3F4F6; }
.cart { flex: 1; height: 76rpx; line-height: 76rpx; text-align: center; background: #FEF3C7; color: #92400E; font-weight: 700; border-radius: 999rpx; font-size: 26rpx; }
.cta { flex: 1; height: 76rpx; line-height: 76rpx; text-align: center; background: linear-gradient(135deg,#60a5fa,#2563eb); color: #fff; font-weight: 700; border-radius: 999rpx; font-size: 28rpx; }
</style>
