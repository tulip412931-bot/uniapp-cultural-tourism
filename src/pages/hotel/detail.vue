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
      <view class="badges">
        <text v-if="item.badge" class="badge">{{ item.badge }}</text>
        <text v-if="item.favorites" class="fav">⭐ {{ item.favorites }}</text>
      </view>
      <view class="loc-row">
        <text>📍 {{ item.location }}</text>
        <text class="distance">{{ item.distance }}</text>
      </view>
      <view class="tag-row">
        <text class="tag" v-for="(t, i) in item.tags" :key="i">{{ tagIcon(t) }} {{ t }}</text>
      </view>
    </view>

    <view class="price-block">
      <text class="cur">¥{{ item.price }}</text>
      <text class="unit">/晚起</text>
      <text v-if="item.originalPrice" class="ori">¥{{ item.originalPrice }}</text>
      <view class="book-btn" @click="book">立即预订</view>
    </view>

    <!-- 入住日期 -->
    <view class="section">
      <view class="sec-head">
        <text class="sec-title">入住日期</text>
        <text class="sec-more">共{{ nights }}晚 ▾</text>
      </view>
      <view class="dates">
        <view class="date-card" @click="pickCheckin">
          <text class="d-lbl">入住</text>
          <text class="d-val">{{ checkin }}</text>
          <text class="d-week">{{ weekday(checkin) }}</text>
        </view>
        <text class="arrow">→</text>
        <view class="date-card" @click="pickCheckout">
          <text class="d-lbl">离店</text>
          <text class="d-val">{{ checkout }}</text>
          <text class="d-week">{{ weekday(checkout) }}</text>
        </view>
      </view>
    </view>

    <!-- 民宿介绍 -->
    <view class="section" v-if="item.intro && item.intro.length">
      <text class="sec-title">民宿介绍</text>
      <text class="sec-p" v-for="(p, i) in item.intro" :key="i">{{ p }}</text>
    </view>

    <!-- 房型选择 -->
    <view class="section" v-if="item.rooms && item.rooms.length">
      <view class="sec-head">
        <text class="sec-title">房型选择</text>
        <text class="sec-more" @click="onMore('全部房型')">全部房型 ›</text>
      </view>
      <view class="room" v-for="(r, i) in item.rooms" :key="i">
        <image class="r-img" :src="r.cover" mode="aspectFill" @click="previewImg([r.cover])" />
        <view class="r-body">
          <text class="r-name">{{ r.name }}</text>
          <text class="r-meta">{{ r.size }} | {{ r.bed }} | {{ r.capacity }}</text>
          <view class="r-tags">
            <text class="r-tag" v-for="(t, j) in r.tags" :key="j">{{ t }}</text>
          </view>
          <text class="r-bf">{{ r.breakfast }}</text>
          <view class="r-foot">
            <text class="r-price"><text class="cur">¥{{ r.price }}</text><text class="unit">/晚</text></text>
            <view class="r-book" @click="bookRoom(r)">预订</view>
          </view>
        </view>
      </view>
    </view>

    <!-- 设施服务 -->
    <view class="section" v-if="item.facilities && item.facilities.length">
      <text class="sec-title">设施服务</text>
      <view class="fac-grid">
        <view class="fac" v-for="(f, i) in item.facilities" :key="i">
          <view class="fac-ic" :class="facColor(i)">{{ tagIcon(f) || '✓' }}</view>
          <text class="fac-name">{{ f }}</text>
        </view>
      </view>
    </view>

    <!-- 用户评价 -->
    <view class="section" v-if="item.reviews && item.reviews.length">
      <view class="sec-head">
        <text class="sec-title">用户评价</text>
        <text class="sec-more" @click="onMore('全部评价')">全部评价 ›</text>
      </view>
      <view class="rating-summary" v-if="item.ratings">
        <view class="rs-left">
          <text class="rs-num">{{ item.rating }}</text>
          <text class="rs-stars">★★★★★</text>
          <text class="rs-count">共{{ item.totalReviews }}条评价</text>
        </view>
        <view class="rs-right">
          <view class="rs-bar"><text>卫生</text><view class="bar"><view class="bar-fill" :style="{ width: item.ratings.hygiene * 20 + '%' }"></view></view><text>{{ item.ratings.hygiene }}</text></view>
          <view class="rs-bar"><text>环境</text><view class="bar"><view class="bar-fill" :style="{ width: item.ratings.environment * 20 + '%' }"></view></view><text>{{ item.ratings.environment }}</text></view>
          <view class="rs-bar"><text>服务</text><view class="bar"><view class="bar-fill" :style="{ width: item.ratings.service * 20 + '%' }"></view></view><text>{{ item.ratings.service }}</text></view>
          <view class="rs-bar"><text>设施</text><view class="bar"><view class="bar-fill" :style="{ width: item.ratings.facility * 20 + '%' }"></view></view><text>{{ item.ratings.facility }}</text></view>
        </view>
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
          <image v-for="(img, j) in r.images" :key="j" :src="img" class="r-imgi" mode="aspectFill" @click="previewImg(r.images, j)" />
        </view>
      </view>
    </view>

    <view class="footer">
      <text class="f-price"><text class="cur">¥{{ item.price }}</text><text class="unit">/晚起</text></text>
      <view class="f-ic" @click="onService">🎧</view>
      <view class="f-book" @click="book">立即预订</view>
    </view>
    <view style="height: 140rpx"></view>
  </view>
</template>

<script setup>
import { hotels, findById } from '@/common/data.js'
import { onLoad } from '@dcloudio/uni-app'
import { ref, computed } from 'vue'

const item = ref(null)
const heroIndex = ref(0)
const liked = ref(false)
const today = new Date()
const tomorrow = new Date(today); tomorrow.setDate(today.getDate() + 1)
const fmt = (d) => `${d.getMonth()+1}月${d.getDate()}日`
const checkin = ref(fmt(today))
const checkout = ref(fmt(tomorrow))
const nights = ref(1)
const heroImages = computed(() => {
  if (!item.value) return []
  const c = item.value.cover
  return [c,
    'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=70',
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=70',
    'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=70',
    'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=70',
    'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=70',
    'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=70',
    'https://images.unsplash.com/photo-1551776235-dde6d482980b?w=800&q=70']
})

onLoad((q) => { item.value = findById(hotels, q.id) || hotels[4] })

function tagIcon (t) {
  const map = { '免费WiFi': '📶', 'WiFi': '📶', '免费停车': 'P', '餐厅': '🍽', '山景房': '🏔', '观景阳台': '☀', '下午茶': '🍵', '提供早餐': '🍳', '无边泳池': '🏊', '温泉泡池': '♨', '温泉': '♨', '游泳池': '🏊', 'SPA': '💆', '自助餐': '🍴', '书吧茶室': '📚', '娱乐设施': '🎲', '管家服务': '🛎', '早餐服务': '🍳' }
  return map[t] || ''
}
function facColor (i) { return ['c-blue', 'c-orange', 'c-purple', 'c-pink', 'c-green', 'c-blue', 'c-orange', 'c-purple'][i % 8] }
function weekday (s) {
  const m = /(\d+)月(\d+)日/.exec(s); if (!m) return ''
  const d = new Date(today.getFullYear(), +m[1]-1, +m[2])
  return ['周日','周一','周二','周三','周四','周五','周六'][d.getDay()]
}
function back () { uni.navigateBack({ fail: () => uni.reLaunch({ url: '/pages/hotel/list' }) }) }
function book () { uni.showToast({ title: `已预订 ${checkin.value} - ${checkout.value}`, icon: 'success' }) }
function bookRoom (r) { uni.showToast({ title: `预订成功：${r.name}`, icon: 'success' }) }
function onSwipe (e) { heroIndex.value = e.detail.current }
function toggleLike () { liked.value = !liked.value; uni.showToast({ title: liked.value ? '已收藏' : '取消收藏', icon: 'none' }) }
function onShare () { uni.showActionSheet({ itemList: ['微信好友','朋友圈','复制链接'], success: () => uni.showToast({ title: '分享成功', icon: 'success' }) }) }
function pickCheckin () {
  uni.showActionSheet({ itemList: ['今天','明天','后天','3天后','7天后'], success: (e) => {
    const off = [0,1,2,3,7][e.tapIndex]
    const d = new Date(today); d.setDate(today.getDate() + off)
    checkin.value = fmt(d)
    const co = new Date(d); co.setDate(d.getDate() + nights.value)
    checkout.value = fmt(co)
  } })
}
function pickCheckout () {
  uni.showActionSheet({ itemList: ['1晚','2晚','3晚','5晚'], success: (e) => {
    const n = [1,2,3,5][e.tapIndex]; nights.value = n
    const m = /(\d+)月(\d+)日/.exec(checkin.value)
    const ci = m ? new Date(today.getFullYear(), +m[1]-1, +m[2]) : new Date(today)
    const co = new Date(ci); co.setDate(ci.getDate() + n)
    checkout.value = fmt(co)
  } })
}
function previewImg (urls, i) { uni.previewImage({ urls, current: urls[i || 0] }) }
function onMore (name) { uni.showToast({ title: `加载${name}`, icon: 'none' }) }
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
.badges { display: flex; gap: 12rpx; align-items: center; margin: 12rpx 0; }
.badge { background: #FEF3C7; color: #B45309; font-size: 20rpx; padding: 4rpx 12rpx; border-radius: 6rpx; }
.fav { font-size: 22rpx; color: #6B7280; }
.loc-row { display: flex; justify-content: space-between; font-size: 22rpx; color: #6B7280; margin: 8rpx 0; }
.distance { color: #2563EB; }
.tag-row { display: flex; gap: 12rpx; flex-wrap: wrap; margin-top: 12rpx; font-size: 22rpx; color: #6B7280; }

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

.dates { display: flex; align-items: center; gap: 20rpx; }
.date-card { flex: 1; background: #F9FAFB; border-radius: 12rpx; padding: 20rpx; }
.d-lbl { display: block; font-size: 20rpx; color: #6B7280; }
.d-val { display: block; font-size: 28rpx; color: #1F2937; font-weight: 700; margin-top: 4rpx; }
.d-week { display: block; font-size: 20rpx; color: #6B7280; margin-top: 4rpx; }
.arrow { color: #9CA3AF; font-size: 32rpx; }

.room { display: flex; gap: 16rpx; padding: 16rpx 0; border-bottom: 2rpx solid #F3F4F6; }
.room:last-child { border-bottom: 0; }
.r-img { width: 200rpx; height: 200rpx; border-radius: 12rpx; flex-shrink: 0; }
.r-body { flex: 1; display: flex; flex-direction: column; gap: 6rpx; }
.r-name { font-size: 26rpx; color: #1F2937; font-weight: 700; }
.r-meta { font-size: 20rpx; color: #6B7280; }
.r-tags { display: flex; gap: 8rpx; }
.r-tag { background: #F3F4F6; color: #6B7280; font-size: 18rpx; padding: 2rpx 10rpx; border-radius: 4rpx; }
.r-bf { font-size: 20rpx; color: #059669; }
.r-foot { display: flex; justify-content: space-between; align-items: center; margin-top: auto; }
.r-price .cur { font-size: 30rpx; color: #DC2626; font-weight: 800; }
.r-price .unit { font-size: 18rpx; color: #6B7280; }
.r-book { background: #2563EB; color: #fff; padding: 8rpx 24rpx; border-radius: 8rpx; font-size: 22rpx; }

.fac-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20rpx; }
.fac { display: flex; flex-direction: column; align-items: center; gap: 8rpx; }
.fac-ic { width: 72rpx; height: 72rpx; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 28rpx; }
.c-blue { background: #DBEAFE; color: #2563EB; }
.c-orange { background: #FED7AA; color: #EA580C; }
.c-purple { background: #DDD6FE; color: #7C3AED; }
.c-pink { background: #FBCFE8; color: #DB2777; }
.c-green { background: #BBF7D0; color: #059669; }
.fac-name { font-size: 20rpx; color: #4B5563; }

.rating-summary { display: flex; gap: 20rpx; padding: 12rpx 0 24rpx; border-bottom: 2rpx solid #F3F4F6; margin-bottom: 16rpx; }
.rs-left { display: flex; flex-direction: column; align-items: center; }
.rs-num { font-size: 64rpx; color: #1F2937; font-weight: 800; }
.rs-stars { color: #F59E0B; font-size: 22rpx; }
.rs-count { font-size: 18rpx; color: #6B7280; margin-top: 4rpx; }
.rs-right { flex: 1; display: flex; flex-direction: column; gap: 6rpx; }
.rs-bar { display: flex; align-items: center; gap: 12rpx; font-size: 20rpx; color: #6B7280; }
.bar { flex: 1; height: 8rpx; background: #F3F4F6; border-radius: 4rpx; overflow: hidden; }
.bar-fill { height: 100%; background: #F59E0B; }

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
.r-imgi { width: 140rpx; height: 140rpx; border-radius: 8rpx; }

.footer { position: fixed; left: 0; right: 0; bottom: 0; background: #fff; padding: 16rpx 24rpx env(safe-area-inset-bottom); display: flex; align-items: center; gap: 16rpx; box-shadow: 0 -4rpx 16rpx rgba(0,0,0,.04); }
.f-price .cur { font-size: 36rpx; color: #DC2626; font-weight: 800; }
.f-price .unit { font-size: 20rpx; color: #6B7280; }
.f-ic { width: 80rpx; height: 80rpx; border-radius: 50%; background: #F3F4F6; display: flex; align-items: center; justify-content: center; font-size: 32rpx; margin-left: auto; }
.f-book { background: #2563EB; color: #fff; padding: 20rpx 64rpx; border-radius: 12rpx; font-size: 28rpx; }
</style>
