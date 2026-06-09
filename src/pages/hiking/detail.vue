<template>
  <view v-if="item" class="page">
    <!-- 顶部图 + 浮动 nav -->
    <view class="hero-wrap">
      <image class="hero-img" :src="item.cover" mode="aspectFill" />
      <view class="hero-nav">
        <view class="nav-btn" @click="back">‹</view>
        <view class="nav-right">
          <view class="nav-btn">⤴</view>
          <view class="nav-btn">♡</view>
        </view>
      </view>
      <view class="page-indicator">1/4</view>
    </view>

    <!-- 标题区 -->
    <view class="head-block">
      <text class="title">{{ item.title }}</text>
      <view class="meta-row">
        <text class="rating">⭐ {{ item.rating }}分</text>
        <text class="join">{{ item.joined }}</text>
      </view>
      <view class="key-stats">
        <view class="stat">
          <text class="s-val s-blue">{{ item.distance }}</text>
          <text class="s-lbl">总长度</text>
        </view>
        <view class="stat">
          <text class="s-val s-green">{{ item.duration }}</text>
          <text class="s-lbl">建议时长</text>
        </view>
        <view class="stat">
          <text class="s-val s-orange">{{ item.difficulty }}</text>
          <text class="s-lbl">难度等级</text>
        </view>
      </view>
      <view class="loc-row">
        <text class="loc">📍 {{ item.location }}</text>
        <text class="nav-link">📍 导航</text>
      </view>
      <view class="tag-row">
        <text class="tag" v-for="(t, i) in item.tags" :key="i" :class="tagClass(i)">{{ t }}</text>
      </view>
    </view>

    <!-- 价格 + 立即预订 -->
    <view class="price-block">
      <text class="cur">¥{{ item.price }}</text>
      <text class="unit">/人</text>
      <text v-if="item.originalPrice" class="ori">¥{{ item.originalPrice }}</text>
      <view class="book-btn" @click="book">立即预订</view>
    </view>

    <!-- 线路介绍 -->
    <view class="section">
      <text class="sec-title">线路介绍</text>
      <text class="sec-p" v-for="(p, i) in item.intro" :key="i">{{ p }}</text>
    </view>

    <!-- 线路地图 -->
    <view class="section">
      <view class="sec-head">
        <text class="sec-title">线路地图</text>
        <text class="sec-more">查看全图 ›</text>
      </view>
      <image class="map-img" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=70" mode="aspectFill" />
    </view>

    <!-- 行程安排 -->
    <view class="section">
      <text class="sec-title">行程安排</text>
      <view class="timeline">
        <view class="tl-item" v-for="(s, i) in item.schedule" :key="i">
          <view class="dot"></view>
          <view class="tl-body">
            <text class="tl-time">{{ s.time }} <text class="tl-spot">{{ s.title }}</text></text>
            <text class="tl-desc">{{ s.desc }}</text>
          </view>
        </view>
      </view>
    </view>

    <!-- 费用说明 -->
    <view class="section">
      <text class="sec-title">费用说明</text>
      <text class="sub-title">费用包含</text>
      <view class="fee-list">
        <text class="fee yes" v-for="(f, i) in item.includes" :key="i">✓ {{ f }}</text>
      </view>
      <text class="sub-title">费用不含</text>
      <view class="fee-list">
        <text class="fee no" v-for="(f, i) in item.excludes" :key="i">× {{ f }}</text>
      </view>
    </view>

    <!-- 用户评价 -->
    <view class="section">
      <view class="sec-head">
        <text class="sec-title">用户评价</text>
        <text class="sec-more">全部评价 ›</text>
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
          <image v-for="(img, j) in r.images" :key="j" :src="img" class="r-img" mode="aspectFill" />
        </view>
      </view>
    </view>

    <!-- 底部固定栏 -->
    <view class="footer">
      <text class="f-price"><text class="cur">¥{{ item.price }}</text><text class="unit">/人</text></text>
      <view class="f-ic">🎧</view>
      <view class="f-book" @click="book">立即预订</view>
    </view>
    <view style="height: 140rpx"></view>
  </view>
</template>

<script setup>
import { hikingRoutes, findById } from '@/common/data.js'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'

const item = ref(null)
onLoad((q) => { item.value = findById(hikingRoutes, q.id) || hikingRoutes[0] })

function tagClass (i) { return ['t-green', 't-purple', 't-orange', 't-blue'][i % 4] }
function back () { uni.navigateBack({ fail: () => uni.reLaunch({ url: '/pages/hiking/list' }) }) }
function book () { uni.showToast({ title: '预订成功（演示）', icon: 'success' }) }
</script>

<style lang="scss" scoped>
.page { background: #F3F4F6; min-height: 100vh; padding-bottom: 0; }
.hero-wrap { position: relative; height: 480rpx; }
.hero-img { width: 100%; height: 100%; display: block; }
.hero-nav { position: absolute; top: env(safe-area-inset-top); left: 0; right: 0; display: flex; justify-content: space-between; padding: 20rpx 24rpx; }
.nav-right { display: flex; gap: 16rpx; }
.nav-btn { width: 60rpx; height: 60rpx; border-radius: 50%; background: rgba(255,255,255,.85); display: flex; align-items: center; justify-content: center; font-size: 32rpx; color: #1F2937; }
.page-indicator { position: absolute; bottom: 20rpx; right: 24rpx; background: rgba(0,0,0,.5); color: #fff; padding: 4rpx 14rpx; border-radius: 16rpx; font-size: 20rpx; }

.head-block { background: #fff; padding: 24rpx; margin-bottom: 16rpx; }
.title { display: block; font-size: 38rpx; font-weight: 800; color: #1F2937; }
.meta-row { display: flex; gap: 16rpx; align-items: center; margin: 12rpx 0; }
.rating { font-size: 24rpx; color: #F59E0B; }
.join { font-size: 22rpx; color: #6B7280; }
.key-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16rpx; margin: 16rpx 0; }
.stat { background: #F9FAFB; border-radius: 12rpx; padding: 20rpx; text-align: center; }
.s-val { display: block; font-size: 32rpx; font-weight: 800; margin-bottom: 6rpx; }
.s-blue { color: #2563EB; }
.s-green { color: #059669; }
.s-orange { color: #EA580C; }
.s-lbl { font-size: 20rpx; color: #6B7280; }
.loc-row { display: flex; justify-content: space-between; align-items: center; margin: 12rpx 0; font-size: 22rpx; color: #6B7280; }
.nav-link { color: #2563EB; }
.tag-row { display: flex; gap: 12rpx; flex-wrap: wrap; }
.tag { padding: 4rpx 14rpx; border-radius: 6rpx; font-size: 20rpx; }
.t-green { background: #ECFDF5; color: #059669; }
.t-purple { background: #F5F3FF; color: #7C3AED; }
.t-orange { background: #FFF7ED; color: #EA580C; }
.t-blue { background: #EFF6FF; color: #2563EB; }

.price-block { background: #fff; padding: 20rpx 24rpx; display: flex; align-items: center; gap: 12rpx; margin-bottom: 16rpx; }
.cur { font-size: 36rpx; color: #DC2626; font-weight: 800; }
.unit { font-size: 22rpx; color: #6B7280; }
.ori { font-size: 22rpx; color: #9CA3AF; text-decoration: line-through; }
.book-btn { margin-left: auto; background: #2563EB; color: #fff; padding: 16rpx 56rpx; border-radius: 12rpx; font-size: 26rpx; }

.section { background: #fff; padding: 24rpx; margin-bottom: 16rpx; }
.sec-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16rpx; }
.sec-title { display: block; font-size: 30rpx; font-weight: 800; color: #1F2937; margin-bottom: 12rpx; }
.sec-more { font-size: 22rpx; color: #2563EB; }
.sec-p { display: block; font-size: 26rpx; color: #4B5563; line-height: 1.6; margin-bottom: 12rpx; }

.map-img { width: 100%; height: 320rpx; border-radius: 12rpx; }

.timeline { position: relative; padding-left: 24rpx; }
.timeline::before { content: ''; position: absolute; left: 8rpx; top: 12rpx; bottom: 12rpx; width: 4rpx; background: #DBEAFE; }
.tl-item { position: relative; padding: 12rpx 0 12rpx 24rpx; }
.tl-item .dot { position: absolute; left: -22rpx; top: 22rpx; width: 20rpx; height: 20rpx; border-radius: 50%; background: #2563EB; }
.tl-time { display: block; font-size: 26rpx; color: #1F2937; font-weight: 700; }
.tl-spot { font-weight: 700; }
.tl-desc { display: block; font-size: 22rpx; color: #6B7280; margin-top: 6rpx; }

.sub-title { display: block; font-size: 26rpx; color: #1F2937; font-weight: 700; margin: 16rpx 0 8rpx; }
.fee-list { display: flex; flex-direction: column; gap: 8rpx; }
.fee { font-size: 24rpx; }
.fee.yes { color: #059669; }
.fee.no { color: #DC2626; }

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
