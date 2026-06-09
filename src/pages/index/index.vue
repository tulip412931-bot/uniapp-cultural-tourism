<template>
  <view class="page">
    <!-- 顶部状态栏 + 头部 -->
    <view class="header">
      <view class="status-bar"></view>
      <view class="brand">
        <view class="brand-left">
          <text class="brand-title">文旅</text>
          <text class="brand-sub">CULTURAL · TRAVEL</text>
        </view>
        <view class="brand-right">
          <text class="iconfont">🔍</text>
          <text class="iconfont">🔔</text>
        </view>
      </view>
      <!-- Banner -->
      <view class="banner">
        <image
          src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=70"
          mode="aspectFill"
          class="banner-img"
        />
        <view class="banner-mask">
          <text class="banner-title">发现身边的诗与远方</text>
          <text class="banner-sub">徒步 · 门票 · 民宿 · 文创 · 攻略</text>
        </view>
      </view>
    </view>

    <!-- 功能图标区 -->
    <view class="grid">
      <view
        v-for="item in modules"
        :key="item.key"
        class="grid-item"
        :data-key="item.key"
        @tap="goto(item.path)"
      >
        <view class="grid-icon" :style="{ background: item.color }">
          <text class="grid-emoji">{{ item.emoji }}</text>
        </view>
        <text class="grid-label">{{ item.label }}</text>
      </view>
    </view>

    <!-- 地图导览区域 -->
    <view class="section">
      <view class="section-head">
        <text class="section-title">地图导览</text>
        <text class="section-more">查看全部 ></text>
      </view>
      <view class="map-card">
        <image
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=70"
          mode="aspectFill"
          class="map-img"
        />
        <view class="map-info">
          <text class="map-title">附近精选景点</text>
          <text class="map-sub">3 公里内 12 处景点 · 5 条徒步线路</text>
        </view>
      </view>
    </view>

    <!-- 工会福利汇区域 -->
    <view class="section">
      <view class="section-head">
        <text class="section-title">工会福利汇</text>
        <text class="section-more">更多 ></text>
      </view>
      <scroll-view scroll-x class="benefit-scroll" :show-scrollbar="false">
        <view
          v-for="b in benefits"
          :key="b.id"
          class="benefit-card"
        >
          <image :src="b.cover" mode="aspectFill" class="benefit-img" />
          <view class="benefit-meta">
            <text class="benefit-title">{{ b.title }}</text>
            <text class="benefit-price">¥{{ b.price }}<text class="benefit-ori"> ¥{{ b.ori }}</text></text>
          </view>
        </view>
      </scroll-view>
    </view>

    <!-- 会员推荐区域 -->
    <view class="section">
      <view class="section-head">
        <text class="section-title">会员推荐</text>
        <text class="section-more">VIP 专属 ></text>
      </view>
      <view class="vip-card">
        <view class="vip-left">
          <text class="vip-title">开通会员</text>
          <text class="vip-sub">门票直降 ¥50，民宿额外 9 折</text>
          <view class="vip-btn"><text>立即开通</text></view>
        </view>
        <text class="vip-emoji">👑</text>
      </view>
    </view>

    <!-- 底部导航 -->
    <view class="tabbar">
      <view class="tab-item active">
        <text class="tab-emoji">🏠</text>
        <text class="tab-text">首页</text>
      </view>
      <view class="tab-item" @tap="goto('/pages/hiking/list')">
        <text class="tab-emoji">🥾</text>
        <text class="tab-text">徒步</text>
      </view>
      <view class="tab-item" @tap="goto('/pages/ticket/list')">
        <text class="tab-emoji">🎫</text>
        <text class="tab-text">门票</text>
      </view>
      <view class="tab-item" @tap="goto('/pages/guide/list')">
        <text class="tab-emoji">📖</text>
        <text class="tab-text">攻略</text>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'

const modules = ref([
  { key: 'hiking', label: '徒步线路', emoji: '🥾', color: 'linear-gradient(135deg,#34d399,#059669)', path: '/pages/hiking/list' },
  { key: 'ticket', label: '景区门票', emoji: '🎫', color: 'linear-gradient(135deg,#60a5fa,#2563eb)', path: '/pages/ticket/list' },
  { key: 'hotel',  label: '酒店民宿', emoji: '🏨', color: 'linear-gradient(135deg,#f472b6,#db2777)', path: '/pages/hotel/list' },
  { key: 'cultural', label: '文创周边', emoji: '🎨', color: 'linear-gradient(135deg,#fbbf24,#d97706)', path: '/pages/cultural/list' },
  { key: 'guide', label: '游玩攻略', emoji: '📖', color: 'linear-gradient(135deg,#a78bfa,#7c3aed)', path: '/pages/guide/list' }
])

const benefits = ref([
  { id: 1, title: '黄山门票工会专享', price: 99, ori: 190, cover: 'https://images.unsplash.com/photo-1545569310-ab0fb6efeec7?w=400&q=70' },
  { id: 2, title: '故宫深度讲解', price: 49, ori: 80, cover: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=400&q=70' },
  { id: 3, title: '莫干山民宿夜', price: 488, ori: 880, cover: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&q=70' },
  { id: 4, title: '雨崩徒步领队', price: 1980, ori: 2680, cover: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&q=70' }
])

function goto (url) {
  uni.navigateTo({ url })
}
</script>

<style lang="scss">
page { background: #F3F4F6; }
.page { padding-bottom: 140rpx; }
.header {
  background: linear-gradient(180deg, #1F2937 0%, #374151 100%);
  padding: 0 32rpx 60rpx;
}
.status-bar { height: 60rpx; }
.brand { display: flex; align-items: center; justify-content: space-between; padding: 16rpx 0 24rpx; }
.brand-left { display: flex; flex-direction: column; }
.brand-title { color: #fff; font-size: 44rpx; font-weight: 700; letter-spacing: 4rpx; }
.brand-sub { color: rgba(255,255,255,.55); font-size: 18rpx; letter-spacing: 2rpx; }
.brand-right { display: flex; gap: 24rpx; }
.brand-right .iconfont { font-size: 36rpx; }
.banner { position: relative; border-radius: 24rpx; overflow: hidden; height: 280rpx; }
.banner-img { width: 100%; height: 100%; }
.banner-mask {
  position: absolute; inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,.05), rgba(0,0,0,.45));
  display: flex; flex-direction: column; justify-content: flex-end; padding: 28rpx;
}
.banner-title { color: #fff; font-size: 38rpx; font-weight: 700; }
.banner-sub { color: rgba(255,255,255,.85); font-size: 24rpx; margin-top: 8rpx; }

.grid {
  display: flex; justify-content: space-between;
  background: #fff;
  margin: -40rpx 24rpx 24rpx;
  padding: 32rpx 24rpx;
  border-radius: 24rpx;
  box-shadow: 0 8rpx 24rpx rgba(31,41,55,0.06);
  position: relative; z-index: 2;
}
.grid-item { display: flex; flex-direction: column; align-items: center; flex: 1; }
.grid-icon {
  width: 88rpx; height: 88rpx; border-radius: 24rpx;
  display: flex; align-items: center; justify-content: center; margin-bottom: 12rpx;
}
.grid-emoji { font-size: 44rpx; }
.grid-label { font-size: 24rpx; color: #1F2937; }

.section { margin: 32rpx 24rpx; }
.section-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20rpx; }
.section-title { font-size: 32rpx; font-weight: 700; color: #1F2937; }
.section-more { font-size: 24rpx; color: #6B7280; }

.map-card { position: relative; border-radius: 24rpx; overflow: hidden; background: #fff; height: 280rpx; }
.map-img { width: 100%; height: 100%; }
.map-info {
  position: absolute; left: 0; right: 0; bottom: 0; padding: 24rpx;
  background: linear-gradient(180deg, transparent, rgba(0,0,0,.6)); color: #fff;
}
.map-title { display: block; font-size: 30rpx; font-weight: 700; }
.map-sub { display: block; font-size: 22rpx; margin-top: 4rpx; opacity: .9; }

.benefit-scroll { white-space: nowrap; }
.benefit-card {
  display: inline-flex; flex-direction: column; width: 260rpx;
  background: #fff; border-radius: 20rpx; overflow: hidden;
  margin-right: 20rpx; vertical-align: top;
  box-shadow: 0 6rpx 16rpx rgba(31,41,55,0.05);
}
.benefit-img { width: 100%; height: 160rpx; }
.benefit-meta { padding: 16rpx 20rpx 20rpx; }
.benefit-title { font-size: 26rpx; color: #1F2937; }
.benefit-price { display: block; color: #DC2626; font-weight: 700; font-size: 30rpx; margin-top: 8rpx; }
.benefit-ori { color: #9CA3AF; font-size: 22rpx; font-weight: 400; text-decoration: line-through; margin-left: 8rpx; }

.vip-card {
  background: linear-gradient(135deg, #1F2937, #4B5563);
  border-radius: 24rpx; padding: 32rpx;
  display: flex; align-items: center; justify-content: space-between; color: #fff;
}
.vip-left { display: flex; flex-direction: column; gap: 8rpx; }
.vip-title { font-size: 32rpx; font-weight: 700; }
.vip-sub { font-size: 24rpx; opacity: .85; }
.vip-btn {
  margin-top: 16rpx;
  background: linear-gradient(135deg,#fbbf24,#d97706);
  color: #1F2937; padding: 12rpx 28rpx;
  border-radius: 999rpx; font-size: 24rpx; font-weight: 700; align-self: flex-start;
}
.vip-emoji { font-size: 80rpx; }

.tabbar {
  position: fixed; left: 0; right: 0; bottom: 0;
  height: 110rpx; background: #fff;
  display: flex; border-top: 1rpx solid #E5E7EB;
  box-shadow: 0 -4rpx 12rpx rgba(0,0,0,.04);
}
.tab-item { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; color: #6B7280; }
.tab-item.active { color: #1F2937; }
.tab-emoji { font-size: 36rpx; }
.tab-text { font-size: 22rpx; margin-top: 4rpx; }
</style>
