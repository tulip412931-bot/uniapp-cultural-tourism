<template>
  <view v-if="item" class="page">
    <view class="hero-wrap">
      <swiper class="hero-swiper" :indicator-dots="false" :autoplay="true" :interval="4000" :duration="500" :circular="true" @change="onSwipe">
        <swiper-item v-for="(img, i) in heroImages" :key="i">
          <image class="hero-img" :src="img" mode="aspectFill" />
        </swiper-item>
      </swiper>
      <view class="hero-nav">
        <view class="nav-btn" @click="back">‹</view>
        <view class="nav-right">
          <view class="nav-btn" @click="onShare">⤴</view>
          <view class="nav-btn" :class="{ liked }" @click="toggleLike">{{ liked ? '♥' : '♡' }}</view>
        </view>
      </view>
      <view class="page-indicator">{{ heroIndex + 1 }}/{{ heroImages.length }}</view>
    </view>

    <view class="head">
      <view class="row">
        <text class="title">{{ item.title }}</text>
        <text class="rating">⭐ {{ item.rating }}</text>
      </view>
      <view class="meta-row">
        <text class="badge">{{ item.level }}</text>
        <text>👥 {{ (item.sold / 10000).toFixed(1) }}万人去过</text>
        <text>💬 {{ item.reviews }}+条评价</text>
      </view>
      <view class="loc-row">
        <text>📍 {{ item.location }}</text>
        <text class="distance">{{ item.distance }}</text>
      </view>
      <view class="time-row">
        <text>🕒 开放时间 {{ item.openTime }}</text>
      </view>
      <view class="tag-row">
        <text class="tag" v-for="(t, i) in item.tags" :key="i" :class="tagClass(i)">{{ t }}</text>
      </view>
    </view>

    <view class="price-block">
      <text class="cur">¥{{ item.price }}</text>
      <text class="unit">/人</text>
      <text v-if="item.originalPrice && item.originalPrice !== item.price" class="ori">¥{{ item.originalPrice }}</text>
      <view class="book-btn" @click="book">立即预订</view>
    </view>

    <view class="section">
      <text class="sec-title">景区介绍</text>
      <text class="sec-p" v-for="(p, i) in item.intro" :key="i">{{ p }}</text>
    </view>

    <view class="section" v-if="item.ticketInfo && item.ticketInfo.length">
      <text class="sec-title">门票信息</text>
      <view class="ticket-row" v-for="(t, i) in item.ticketInfo" :key="i">
        <view class="t-head">
          <text class="t-name">{{ t.type }}</text>
          <text v-if="t.free" class="t-free">免费</text>
          <text v-else class="t-price">¥{{ t.price }}</text>
        </view>
        <text class="t-tip">{{ t.tips }}</text>
        <text v-if="t.originalPrice" class="t-ori">¥{{ t.originalPrice }}</text>
        <view class="t-pick" @click="pickDate(t)">选择使用日期 {{ pickedDate || '' }}</view>
      </view>
    </view>

    <view class="section" v-if="item.strategy && item.strategy.length">
      <text class="sec-title">游玩攻略</text>
      <view class="strategy-item" v-for="(s, i) in item.strategy" :key="i">
        <text class="s-icon">{{ s.icon }}</text>
        <view class="s-body">
          <text class="s-title">{{ s.title }}</text>
          <text class="s-desc">{{ s.desc }}</text>
        </view>
      </view>
    </view>

    <view class="section" v-if="item.reviews && item.reviews.length">
      <view class="sec-head">
        <text class="sec-title">用户评价</text>
        <text class="sec-more" @click="onAllReviews">全部评价 ›</text>
      </view>
      <view class="review" v-for="(r, i) in item.reviews" :key="i">
        <view class="r-head">
          <image class="r-ava" :src="r.avatar" mode="aspectFill" />
          <view class="r-info">
            <text class="r-user">{{ r.user }}</text>
            <text class="r-stars">{{ '★'.repeat(r.rating) }}</text>
          </view>
          <text class="r-date">{{ r.date }}</text>
        </view>
        <text class="r-content">{{ r.content }}</text>
        <view v-if="r.images && r.images.length" class="r-imgs">
          <image v-for="(img, j) in r.images" :key="j" :src="img" class="r-img" mode="aspectFill" @click="previewImg(r.images, j)" />
        </view>
      </view>
    </view>

    <view class="footer">
      <text class="f-price"><text class="cur">¥{{ item.price }}</text><text class="unit">/人起</text></text>
      <view class="f-ic" @click="onService">🎧</view>
      <view class="f-book" @click="book">立即预订</view>
    </view>
    <view style="height: 140rpx"></view>
  </view>
</template>

<script setup>
import { tickets, findById } from '@/common/data.js'
import { onLoad } from '@dcloudio/uni-app'
import { ref, computed } from 'vue'

const item = ref(null)
const heroIndex = ref(0)
const liked = ref(false)
const pickedDate = ref('')
const heroImages = computed(() => {
  if (!item.value) return []
  const c = item.value.cover
  return [c,
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=70',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=70',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=70',
    'https://images.unsplash.com/photo-1502786129293-79981df4e689?w=800&q=70',
    'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800&q=70']
})

onLoad((q) => { item.value = findById(tickets, q.id) || tickets[0] })

function tagClass (i) { return ['t-green', 't-purple', 't-pink', 't-blue'][i % 4] }
function back () { uni.navigateBack({ fail: () => uni.reLaunch({ url: '/pages/ticket/list' }) }) }
function book () {
  if (!pickedDate.value) { uni.showToast({ title: '请先选择使用日期', icon: 'none' }); return }
  uni.showToast({ title: '预订成功（演示）', icon: 'success' })
}
function onSwipe (e) { heroIndex.value = e.detail.current }
function toggleLike () { liked.value = !liked.value; uni.showToast({ title: liked.value ? '已收藏' : '取消收藏', icon: 'none' }) }
function onShare () { uni.showActionSheet({ itemList: ['微信好友','朋友圈','复制链接'], success: () => uni.showToast({ title: '分享成功', icon: 'success' }) }) }
function pickDate (t) {
  const today = new Date()
  const start = today.toISOString().slice(0, 10)
  uni.showDatePicker ? uni.showDatePicker({ start, success: (e) => pickedDate.value = e.value }) :
    uni.showActionSheet({ itemList: ['今天','明天','后天','本周末'], success: (e) => {
      const d = new Date(today); d.setDate(today.getDate() + [0,1,2,6][e.tapIndex])
      pickedDate.value = d.toISOString().slice(0, 10)
    } })
}
function onAllReviews () { uni.showToast({ title: '加载全部评价', icon: 'none' }) }
function previewImg (urls, i) { uni.previewImage({ urls, current: urls[i] }) }
function onService () { uni.showToast({ title: '正在接通客服…', icon: 'none' }) }
</script>

<style lang="scss" scoped>
.page { background: #F3F4F6; min-height: 100vh; }
.hero-wrap { position: relative; height: 480rpx; }
.hero-swiper { width: 100%; height: 100%; }
.hero-img { width: 100%; height: 100%; display: block; }
.hero-nav { position: absolute; top: env(safe-area-inset-top); left: 0; right: 0; display: flex; justify-content: space-between; padding: 20rpx 24rpx; z-index: 2; }
.nav-right { display: flex; gap: 16rpx; }
.nav-btn { width: 60rpx; height: 60rpx; border-radius: 50%; background: rgba(255,255,255,.85); display: flex; align-items: center; justify-content: center; font-size: 32rpx; color: #1F2937; }
.nav-btn.liked { color: #DC2626; }
.page-indicator { position: absolute; bottom: 20rpx; right: 24rpx; background: rgba(0,0,0,.5); color: #fff; padding: 4rpx 14rpx; border-radius: 16rpx; font-size: 20rpx; }

.head { background: #fff; padding: 24rpx; margin-bottom: 16rpx; }
.row { display: flex; justify-content: space-between; align-items: center; }
.title { font-size: 38rpx; font-weight: 800; color: #1F2937; }
.rating { font-size: 26rpx; color: #F59E0B; }
.meta-row { display: flex; align-items: center; gap: 16rpx; margin: 12rpx 0; font-size: 22rpx; color: #6B7280; }
.badge { background: #F59E0B; color: #fff; padding: 4rpx 12rpx; border-radius: 6rpx; font-size: 20rpx; }
.loc-row, .time-row { display: flex; justify-content: space-between; font-size: 22rpx; color: #6B7280; margin: 8rpx 0; }
.distance { color: #2563EB; }
.tag-row { display: flex; gap: 12rpx; flex-wrap: wrap; margin-top: 12rpx; }
.tag { padding: 4rpx 14rpx; border-radius: 6rpx; font-size: 20rpx; }
.t-green { background: #ECFDF5; color: #059669; }
.t-purple { background: #F5F3FF; color: #7C3AED; }
.t-pink { background: #FDF2F8; color: #DB2777; }
.t-blue { background: #EFF6FF; color: #2563EB; }

.price-block { background: #fff; padding: 20rpx 24rpx; display: flex; align-items: center; gap: 12rpx; margin-bottom: 16rpx; }
.cur { font-size: 36rpx; color: #DC2626; font-weight: 800; }
.unit { font-size: 22rpx; color: #6B7280; }
.ori { font-size: 22rpx; color: #9CA3AF; text-decoration: line-through; }
.book-btn { margin-left: auto; background: #2563EB; color: #fff; padding: 16rpx 56rpx; border-radius: 12rpx; font-size: 26rpx; }

.section { background: #fff; padding: 24rpx; margin-bottom: 16rpx; }
.sec-head { display: flex; justify-content: space-between; align-items: center; }
.sec-title { display: block; font-size: 30rpx; font-weight: 800; color: #1F2937; margin-bottom: 16rpx; }
.sec-more { font-size: 22rpx; color: #2563EB; }
.sec-p { display: block; font-size: 26rpx; color: #4B5563; line-height: 1.6; margin-bottom: 12rpx; }

.ticket-row { background: #F9FAFB; border-radius: 12rpx; padding: 20rpx; margin-bottom: 16rpx; }
.t-head { display: flex; justify-content: space-between; align-items: center; }
.t-name { font-size: 28rpx; font-weight: 700; color: #1F2937; }
.t-price { font-size: 32rpx; color: #DC2626; font-weight: 800; }
.t-free { font-size: 28rpx; color: #059669; font-weight: 800; }
.t-tip { display: block; font-size: 22rpx; color: #6B7280; margin: 8rpx 0; }
.t-ori { font-size: 20rpx; color: #9CA3AF; text-decoration: line-through; }
.t-pick { background: #fff; border: 2rpx solid #BFDBFE; color: #2563EB; text-align: center; padding: 14rpx; border-radius: 10rpx; margin-top: 12rpx; font-size: 24rpx; }

.strategy-item { display: flex; gap: 16rpx; padding: 16rpx 0; }
.s-icon { font-size: 36rpx; }
.s-body { flex: 1; }
.s-title { display: block; font-size: 26rpx; color: #1F2937; font-weight: 700; }
.s-desc { display: block; font-size: 22rpx; color: #6B7280; margin-top: 6rpx; line-height: 1.5; }

.review { padding: 16rpx 0; border-bottom: 2rpx solid #F3F4F6; }
.review:last-child { border-bottom: 0; }
.r-head { display: flex; align-items: center; gap: 12rpx; margin-bottom: 12rpx; }
.r-ava { width: 56rpx; height: 56rpx; border-radius: 50%; }
.r-info { flex: 1; }
.r-user { display: block; font-size: 24rpx; color: #1F2937; font-weight: 600; }
.r-stars { font-size: 22rpx; color: #F59E0B; }
.r-date { font-size: 20rpx; color: #9CA3AF; }
.r-content { display: block; font-size: 24rpx; color: #4B5563; line-height: 1.6; }
.r-imgs { display: flex; gap: 8rpx; margin-top: 12rpx; }
.r-img { width: 140rpx; height: 140rpx; border-radius: 8rpx; }

.footer { position: fixed; left: 0; right: 0; bottom: 0; background: #fff; padding: 16rpx 24rpx env(safe-area-inset-bottom); display: flex; align-items: center; gap: 16rpx; box-shadow: 0 -4rpx 16rpx rgba(0,0,0,.04); }
.f-price .cur { font-size: 36rpx; color: #DC2626; font-weight: 800; }
.f-price .unit { font-size: 20rpx; color: #6B7280; }
.f-ic { width: 80rpx; height: 80rpx; border-radius: 50%; background: #F3F4F6; display: flex; align-items: center; justify-content: center; font-size: 32rpx; margin-left: auto; }
.f-book { background: #2563EB; color: #fff; padding: 20rpx 64rpx; border-radius: 12rpx; font-size: 28rpx; }
</style>
