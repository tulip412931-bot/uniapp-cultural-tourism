<template>
  <view class="page">
    <view class="nav">
      <view class="nav-btn" @click="back">‹</view>
      <text class="nav-title">酒店门票</text>
      <view class="nav-btn">🔍</view>
    </view>

    <view class="search">
      <text class="ic">🔍</text>
      <text class="ph">搜索酒店、民宿、门票</text>
    </view>

    <!-- 顶部 tabs -->
    <view class="top-tabs">
      <view class="tt" :class="{ active: topTab === 0 }" @click="topTab = 0">📒 酒店民宿</view>
      <view class="tt" :class="{ active: topTab === 1 }" @click="topTab = 1">🎫 景区门票</view>
    </view>

    <!-- 选择条 -->
    <view class="opts">
      <text>目的地 ▾</text>
      <text>入住日期 ▾</text>
      <text>价格 ▾</text>
      <text>≡ 筛选</text>
    </view>

    <!-- chips -->
    <scroll-view scroll-x class="chips">
      <view class="chip" v-for="(c, i) in chips" :key="i" :class="{ active: i === activeChip }" @click="activeChip = i">{{ c }}</view>
    </scroll-view>

    <!-- 限时特惠 banner -->
    <view class="promo">
      <text class="p-tag">限时特惠</text>
      <view class="p-body">
        <text class="p-title">四面山景区酒店 早鸟价5折起</text>
        <text class="p-sub">提前7天预订可享超值优惠 · 限时抢购中</text>
      </view>
    </view>

    <!-- 共找到 N 家住宿 -->
    <view class="list-head">
      <text class="lh-title">共找到 <text class="hl">{{ hotels.length * 12 }}</text> 家住宿</text>
      <text class="lh-sort">≡ 推荐排序 ›</text>
    </view>

    <!-- 列表 -->
    <view class="card" v-for="item in hotels" :key="item.id" @click="goDetail(item.id)">
      <view class="cover-wrap">
        <image class="card-img" :src="item.cover" mode="aspectFill" />
        <view class="heart">♡</view>
        <view v-if="item.badge" class="badge" :class="badgeClass(item.badge)">{{ item.badge }}</view>
      </view>
      <view class="card-body">
        <view class="row">
          <text class="title">{{ item.title }}</text>
          <text class="rating">{{ item.rating }} 分</text>
        </view>
        <view v-if="item.star" class="stars">
          <text v-for="n in item.star" :key="n">★</text>
          <text class="type">{{ item.type }}</text>
        </view>
        <text v-else class="type-line">{{ item.type }}</text>
        <view class="meta">📍 {{ item.location }} · {{ item.distance }}</view>
        <view class="tags">
          <text class="tag" v-for="(t, i) in item.tags.slice(0, 4)" :key="i">{{ tagIcon(t) }} {{ t }}</text>
        </view>
        <view class="bottom">
          <text class="price">
            <text class="cur">¥ {{ item.price }}</text>
            <text class="unit">起/晚</text>
            <text v-if="item.originalPrice" class="ori">¥{{ item.originalPrice }}</text>
          </text>
          <view class="btn">查看详情</view>
        </view>
      </view>
    </view>

    <view class="loadmore">加载更多 ▾</view>
    <view style="height: 160rpx"></view>
    <TabBar active="shop" />
  </view>
</template>

<script setup>
import { hotels } from '@/common/data.js'
import TabBar from '@/components/TabBar.vue'
import { ref } from 'vue'

const chips = ['全部', '精品酒店', '特色民宿', '度假村', '农家']
const activeChip = ref(0)
const topTab = ref(0)

function tagIcon (t) {
  const map = { '免费WiFi': '📶', 'WiFi': '📶', '免费停车': 'P', '餐厅': '🍽', '山景房': '🏔', '观景阳台': '☀', '下午茶': '🍵', '拍照圣地': '📷', '果蔬采摘': '🍎', '篝火晚会': '🔥', '农家菜': '🍲', '温泉': '♨', '游泳池': '🏊', 'SPA': '💆', '自助餐': '🍴' }
  return map[t] || ''
}
function badgeClass (b) {
  if (b.includes('住客')) return 'b-blue'
  if (b.includes('网红')) return 'b-pink'
  if (b.includes('限时')) return 'b-orange'
  return 'b-blue'
}
function back () { uni.navigateBack({ fail: () => uni.reLaunch({ url: '/pages/index/index' }) }) }
function goDetail (id) { uni.navigateTo({ url: `/pages/hotel/detail?id=${id}` }) }
</script>

<style lang="scss" scoped>
.page { background: #F3F4F6; min-height: 100vh; padding-top: env(safe-area-inset-top); }
.nav { display: flex; align-items: center; padding: 20rpx 24rpx; gap: 20rpx; }
.nav-btn { width: 60rpx; height: 60rpx; border-radius: 50%; background: #ECEEF2; display: flex; align-items: center; justify-content: center; font-size: 32rpx; color: #1F2937; }
.nav-title { flex: 1; text-align: center; font-size: 32rpx; font-weight: 700; color: #1F2937; }

.search { margin: 0 24rpx 16rpx; height: 70rpx; background: #ECEEF2; border-radius: 35rpx; display: flex; align-items: center; padding: 0 24rpx; gap: 12rpx; }
.search .ic { color: #9CA3AF; }
.search .ph { font-size: 24rpx; color: #9CA3AF; }

.top-tabs { display: flex; margin: 0 24rpx 16rpx; background: #fff; border-radius: 16rpx; padding: 8rpx; }
.tt { flex: 1; text-align: center; padding: 16rpx; font-size: 26rpx; color: #6B7280; border-radius: 12rpx; }
.tt.active { background: #EFF6FF; color: #2563EB; font-weight: 600; }

.opts { display: flex; gap: 24rpx; padding: 0 28rpx 16rpx; font-size: 24rpx; color: #4B5563; }
.opts text:last-child { margin-left: auto; }

.chips { white-space: nowrap; padding: 0 24rpx 20rpx; }
.chips .chip { display: inline-block; padding: 10rpx 24rpx; background: #fff; border-radius: 36rpx; font-size: 24rpx; color: #4B5563; margin-right: 16rpx; &.active { background: #EFF6FF; color: #2563EB; border: 2rpx solid #BFDBFE; } }

.promo { margin: 0 24rpx 20rpx; background: linear-gradient(90deg, #F97316, #FB923C); border-radius: 16rpx; padding: 16rpx 20rpx; display: flex; align-items: center; gap: 16rpx; }
.p-tag { background: #fff; color: #EA580C; font-size: 20rpx; padding: 4rpx 12rpx; border-radius: 6rpx; }
.p-body { flex: 1; }
.p-title { display: block; color: #fff; font-size: 26rpx; font-weight: 700; }
.p-sub { display: block; color: #FFEDD5; font-size: 20rpx; margin-top: 4rpx; }

.list-head { display: flex; justify-content: space-between; align-items: center; padding: 8rpx 28rpx 16rpx; }
.lh-title { font-size: 26rpx; color: #4B5563; }
.lh-title .hl { color: #DC2626; font-weight: 700; }
.lh-sort { font-size: 22rpx; color: #6B7280; }

.card { margin: 0 24rpx 24rpx; background: #fff; border-radius: 20rpx; overflow: hidden; box-shadow: 0 4rpx 16rpx rgba(0,0,0,0.04); }
.cover-wrap { position: relative; }
.card-img { width: 100%; height: 320rpx; display: block; }
.heart { position: absolute; top: 16rpx; right: 16rpx; width: 56rpx; height: 56rpx; border-radius: 50%; background: rgba(255,255,255,.9); display: flex; align-items: center; justify-content: center; color: #9CA3AF; font-size: 28rpx; }
.badge { position: absolute; top: 16rpx; left: 16rpx; padding: 4rpx 12rpx; border-radius: 6rpx; font-size: 20rpx; color: #fff; }
.b-blue { background: #2563EB; }
.b-pink { background: #DB2777; }
.b-orange { background: #EA580C; }

.card-body { padding: 20rpx 24rpx 24rpx; }
.row { display: flex; justify-content: space-between; align-items: center; }
.title { font-size: 30rpx; font-weight: 700; color: #1F2937; }
.rating { font-size: 24rpx; color: #F59E0B; }
.stars { color: #F59E0B; font-size: 20rpx; margin: 4rpx 0; }
.stars .type { color: #6B7280; margin-left: 12rpx; font-size: 20rpx; }
.type-line { display: block; color: #6B7280; font-size: 20rpx; margin: 4rpx 0; }
.meta { font-size: 20rpx; color: #6B7280; margin: 8rpx 0; }
.tags { display: flex; gap: 12rpx; flex-wrap: wrap; }
.tag { font-size: 20rpx; color: #6B7280; }
.bottom { display: flex; justify-content: space-between; align-items: center; margin-top: 16rpx; }
.price .cur { font-size: 32rpx; color: #DC2626; font-weight: 800; }
.price .unit { font-size: 20rpx; color: #6B7280; margin-left: 4rpx; }
.price .ori { font-size: 20rpx; color: #9CA3AF; text-decoration: line-through; margin-left: 8rpx; }
.btn { background: #2563EB; color: #fff; padding: 12rpx 28rpx; border-radius: 12rpx; font-size: 24rpx; }

.loadmore { text-align: center; padding: 24rpx; font-size: 24rpx; color: #6B7280; }
</style>
