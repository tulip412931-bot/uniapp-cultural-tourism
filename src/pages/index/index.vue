<template>
  <view class="page">
    <!-- 顶部状态栏 + 品牌头 -->
    <view class="header">
      <view class="brand-row">
        <view class="brand">
          <image class="brand-logo" src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=120&q=70" mode="aspectFill" />
          <view class="brand-text">
            <text class="brand-en">CHONGQING JIANGJIN</text>
            <text class="brand-cn">一江津彩</text>
          </view>
        </view>
        <view class="search">
          <text class="ic">🔍</text>
          <text class="ph">搜索景点、美食、线路</text>
        </view>
        <view class="more">⋮</view>
        <view class="user">👤</view>
      </view>
    </view>

    <!-- Banner 融媒贴片 -->
    <view class="banner">
      <text class="banner-title">融媒贴片</text>
      <text class="banner-sub">— 江津彩在江津</text>
    </view>

    <!-- 功能图标区 5x2 -->
    <view class="grid">
      <view class="cell" v-for="(it, i) in icons" :key="i" @click="onIcon(it)">
        <view class="cell-ic"><text>{{ it.emoji }}</text></view>
        <text class="cell-label">{{ it.label }}</text>
      </view>
    </view>

    <!-- 江津风物地图导览 -->
    <view class="map-card">
      <text class="map-title">江津风物地图导览</text>
    </view>

    <!-- 工会福利汇 -->
    <view class="welfare">
      <view class="welfare-head">
        <view>
          <text class="welfare-title">工会福利汇</text>
          <text class="welfare-sub">好物线上线下随心兑</text>
        </view>
        <view class="welfare-go">GO</view>
      </view>
      <view class="welfare-row">
        <view class="welfare-card">
          <text class="wc-title">重百超市</text>
          <text class="wc-sub">全城门店通用</text>
        </view>
        <view class="welfare-card">
          <text class="wc-title">天猫超市</text>
          <text class="wc-sub">直接配送到家</text>
        </view>
      </view>
    </view>

    <!-- 会员推荐 -->
    <view class="member">
      <view class="member-head">
        <text class="member-title">会员推荐</text>
        <text class="member-sub">尽享江津风物珍馐/漫游江津山水珍味</text>
        <view class="member-more">更多 <text class="arrow">›</text></view>
      </view>
      <scroll-view scroll-x class="tabs">
        <view class="tab" v-for="(t, i) in memberTabs" :key="i" :class="{ active: i === 0 }">{{ t }}</view>
      </scroll-view>
      <scroll-view scroll-x class="products">
        <view class="product" v-for="(p, i) in products" :key="i" @click="goCultural(p.id)">
          <image class="p-img" :src="p.cover" mode="aspectFill" />
          <view class="p-info">
            <text class="p-name">商品名称</text>
            <text class="p-price">¥{{ p.price }}</text>
          </view>
        </view>
      </scroll-view>
    </view>

    <!-- 底部留白给 tabbar -->
    <view style="height: 160rpx"></view>

    <TabBar active="home" />
  </view>
</template>

<script setup>
import { cultural } from '@/common/data.js'
import TabBar from '@/components/TabBar.vue'

const icons = [
  { key: 'taste', emoji: '🍜', label: '寻味江津' },
  { key: 'heritage', emoji: '✨', label: '璀璨非遗' },
  { key: 'goods', emoji: '🎁', label: '津彩好物' },
  { key: 'specialty', emoji: '🌾', label: '乡珍荟萃' },
  { key: 'shop', emoji: '🛒', label: '在线商城' },
  { key: 'hiking', emoji: '🥾', label: '徒步线路' },
  { key: 'ticket', emoji: '🎫', label: '景区门票' },
  { key: 'hotel', emoji: '🏨', label: '酒店民宿' },
  { key: 'cultural', emoji: '🎨', label: '文创周边' },
  { key: 'guide', emoji: '📖', label: '游玩攻略' }
]
const memberTabs = ['热门商品', '当季美味', '周边游玩', '送礼专享']
const products = cultural.slice(0, 6)

function onIcon (it) {
  const map = {
    hiking: '/pages/hiking/list',
    ticket: '/pages/ticket/list',
    hotel: '/pages/hotel/list',
    cultural: '/pages/cultural/list',
    guide: '/pages/guide/list',
    taste: '/pages/cultural/list',
    heritage: '/pages/cultural/list',
    goods: '/pages/cultural/list',
    specialty: '/pages/cultural/list',
    shop: '/pages/cultural/list'
  }
  uni.navigateTo({ url: map[it.key] || '/pages/cultural/list' })
}
function goCultural (id) {
  uni.navigateTo({ url: `/pages/cultural/detail?id=${id}` })
}
</script>

<style lang="scss" scoped>
.page { background: #F3F4F6; min-height: 100vh; padding-top: env(safe-area-inset-top); }

.header { padding: 20rpx 24rpx 16rpx; background: #F3F4F6; }
.brand-row { display: flex; align-items: center; gap: 12rpx; }
.brand { display: flex; align-items: center; gap: 12rpx; }
.brand-logo { width: 80rpx; height: 80rpx; border-radius: 16rpx; }
.brand-text { display: flex; flex-direction: column; }
.brand-en { font-size: 18rpx; color: #6B7280; letter-spacing: 1rpx; }
.brand-cn { font-size: 32rpx; color: #1F2937; font-weight: 700; }
.search {
  flex: 1; background: #ECEEF2; border-radius: 32rpx; height: 64rpx;
  display: flex; align-items: center; padding: 0 20rpx; gap: 8rpx;
  .ic { font-size: 24rpx; color: #9CA3AF; }
  .ph { font-size: 22rpx; color: #9CA3AF; line-height: 1.2; }
}
.more, .user {
  width: 60rpx; height: 60rpx; border-radius: 50%; background: #ECEEF2;
  display: flex; align-items: center; justify-content: center; font-size: 28rpx; color: #4B5563;
}

.banner {
  margin: 16rpx 24rpx 24rpx; background: #ECEEF2; border-radius: 24rpx;
  height: 280rpx; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12rpx;
  .banner-title { font-size: 44rpx; font-weight: 700; color: #1F2937; letter-spacing: 4rpx; }
  .banner-sub { font-size: 30rpx; color: #1F2937; }
}

.grid {
  margin: 0 24rpx; background: transparent;
  display: grid; grid-template-columns: repeat(5, 1fr); gap: 24rpx 0; padding: 16rpx 0 24rpx;
  .cell {
    display: flex; flex-direction: column; align-items: center; gap: 12rpx;
    .cell-ic {
      width: 96rpx; height: 96rpx; border-radius: 50%; background: #E5E7EB;
      display: flex; align-items: center; justify-content: center; font-size: 40rpx;
    }
    .cell-label { font-size: 24rpx; color: #1F2937; }
  }
}

.map-card {
  margin: 8rpx 24rpx 24rpx; background: #ECEEF2; border-radius: 24rpx;
  height: 220rpx; display: flex; align-items: center; justify-content: center;
  .map-title { font-size: 36rpx; font-weight: 700; color: #1F2937; }
}

.welfare {
  margin: 0 24rpx 24rpx; background: #ECEEF2; border-radius: 24rpx; padding: 28rpx 28rpx 24rpx;
  .welfare-head { display: flex; align-items: center; justify-content: space-between; }
  .welfare-title { display: block; font-size: 36rpx; font-weight: 700; color: #1F2937; }
  .welfare-sub { display: block; font-size: 22rpx; color: #6B7280; margin-top: 4rpx; }
  .welfare-go {
    width: 80rpx; height: 80rpx; border-radius: 50%; background: #fff; color: #1F2937;
    display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 24rpx;
  }
  .welfare-row { display: flex; gap: 20rpx; margin-top: 24rpx; }
  .welfare-card {
    flex: 1; background: #fff; border-radius: 16rpx; padding: 24rpx; text-align: center;
    .wc-title { display: block; font-size: 28rpx; font-weight: 700; color: #1F2937; }
    .wc-sub { display: block; font-size: 20rpx; color: #6B7280; margin-top: 8rpx; }
  }
}

.member { margin: 0 24rpx 24rpx; }
.member-head { display: flex; align-items: center; gap: 16rpx; margin-bottom: 16rpx; }
.member-title { font-size: 34rpx; font-weight: 800; color: #1F2937; }
.member-sub { font-size: 20rpx; color: #9CA3AF; flex: 1; }
.member-more { font-size: 22rpx; color: #2563EB; }
.tabs { white-space: nowrap; margin-bottom: 16rpx; }
.tabs .tab {
  display: inline-block; padding: 10rpx 24rpx; background: #ECEEF2; border-radius: 32rpx;
  font-size: 22rpx; color: #6B7280; margin-right: 16rpx;
  &.active { background: #DBE7FF; color: #2563EB; }
}
.products { white-space: nowrap; }
.product {
  display: inline-block; width: 220rpx; margin-right: 16rpx; background: #fff; border-radius: 16rpx; overflow: hidden;
  .p-img { width: 220rpx; height: 220rpx; display: block; }
  .p-info { padding: 12rpx; }
  .p-name { display: block; font-size: 22rpx; color: #1F2937; }
  .p-price { display: block; font-size: 26rpx; color: #DC2626; font-weight: 700; margin-top: 6rpx; }
}
</style>
