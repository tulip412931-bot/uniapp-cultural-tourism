<template>
  <view class="page">
    <view class="nav">
      <view class="nav-btn" @click="back">‹</view>
      <text class="nav-title">文创周边</text>
      <view class="nav-btn cart" @click="onCart">🛒<text class="dot">{{ cartCount }}</text></view>
    </view>

    <view class="search" @click="onSearch">
      <text class="ic">🔍</text>
      <text class="ph">搜索文创产品</text>
    </view>

    <scroll-view scroll-x class="chips">
      <view class="chip" v-for="(c, i) in chips" :key="i" :class="{ active: i === activeChip }" @click="activeChip = i">{{ c }}</view>
    </scroll-view>

    <view class="hero" @click="onHeroBanner">
      <image class="hero-img" src="https://images.unsplash.com/photo-1545569310-ab0fb6efeec7?w=800&q=70" mode="aspectFill" />
    </view>

    <!-- 热销专区 -->
    <view class="block">
      <view class="block-head">
        <text class="bh-bar"></text>
        <text class="bh-title">热销专区</text>
        <text class="bh-more" @click="onMore('热销专区')">更多 ›</text>
      </view>
      <view class="grid">
        <view class="prod" v-for="item in hot" :key="item.id" @click="goDetail(item.id)">
          <image class="p-img" :src="item.cover" mode="aspectFill" />
          <view class="p-body">
            <text class="p-title">{{ item.title }}</text>
            <view class="p-meta"><text>⭐ {{ item.rating }}</text><text> · 已售{{ item.sold }}</text></view>
            <view class="p-price">
              <text class="cur">¥{{ item.price }}</text>
              <text class="ori">¥{{ item.originalPrice }}</text>
            </view>
          </view>
        </view>
      </view>
    </view>

    <!-- 新品上市 -->
    <view class="block">
      <view class="block-head">
        <text class="bh-bar"></text>
        <text class="bh-title">新品上市</text>
        <text class="bh-more" @click="onMore('新品上市')">更多 ›</text>
      </view>
      <view class="grid">
        <view class="prod" v-for="item in fresh" :key="item.id" @click="goDetail(item.id)">
          <view class="p-img-wrap">
            <image class="p-img" :src="item.cover" mode="aspectFill" />
            <text class="new-tag">新品</text>
          </view>
          <view class="p-body">
            <text class="p-title">{{ item.title }}</text>
            <view class="p-meta"><text>⭐ {{ item.rating }}</text><text> · 已售{{ item.sold }}</text></view>
            <view class="p-price">
              <text class="cur">¥{{ item.price }}</text>
              <text class="ori">¥{{ item.originalPrice }}</text>
            </view>
          </view>
        </view>
      </view>
    </view>

    <view style="height: 160rpx"></view>
    <TabBar active="cart" />
  </view>
</template>

<script setup>
import { cultural } from '@/common/data.js'
import TabBar from '@/components/TabBar.vue'
import { ref, computed } from 'vue'
import { onLoad } from '@dcloudio/uni-app'

const chips = ['全部', '非遗手作', '特色食品', '创意文具']
const activeChip = ref(0)
const cartCount = ref(2)
const filtered = computed(() => {
  const c = chips[activeChip.value]
  if (c === '全部') return cultural
  return cultural.filter(it => (it.category || '') === c)
})
const hot = computed(() => filtered.value.slice(0, 4))
const fresh = computed(() => filtered.value.slice(4))

onLoad((q) => {
  if (q && q.cat) {
    const map = { '食': '特色食品', '非遗': '非遗手作', '好物': '全部', '乡珍': '特色食品' }
    const c = map[q.cat]
    if (c) {
      const idx = chips.indexOf(c)
      if (idx >= 0) activeChip.value = idx
    }
  }
})

function back () { uni.navigateBack({ fail: () => uni.reLaunch({ url: '/pages/index/index' }) }) }
function goDetail (id) { uni.navigateTo({ url: `/pages/cultural/detail?id=${id}` }) }
function onCart () { uni.showToast({ title: `购物车：${cartCount.value} 件`, icon: 'none' }) }
function onSearch () { uni.showToast({ title: '搜索功能开发中', icon: 'none' }) }
function onHeroBanner () { uni.showToast({ title: '已为您展示活动详情', icon: 'none' }) }
function onMore (name) { uni.showToast({ title: `更多${name}（演示）`, icon: 'none' }) }
</script>

<style lang="scss" scoped>
.page { background: #F3F4F6; min-height: 100vh; padding-top: env(safe-area-inset-top); }
.nav { display: flex; align-items: center; padding: 20rpx 24rpx; gap: 20rpx; }
.nav-btn { width: 60rpx; height: 60rpx; border-radius: 50%; background: #ECEEF2; display: flex; align-items: center; justify-content: center; font-size: 28rpx; color: #1F2937; position: relative; }
.nav-btn.cart .dot { position: absolute; top: -4rpx; right: -4rpx; background: #DC2626; color: #fff; font-size: 16rpx; border-radius: 16rpx; min-width: 28rpx; height: 28rpx; line-height: 28rpx; text-align: center; padding: 0 6rpx; }
.nav-title { flex: 1; text-align: center; font-size: 32rpx; font-weight: 700; color: #1F2937; }

.search { margin: 0 24rpx 16rpx; height: 70rpx; background: #ECEEF2; border-radius: 35rpx; display: flex; align-items: center; padding: 0 24rpx; gap: 12rpx; }
.search .ic { color: #9CA3AF; }
.search .ph { font-size: 24rpx; color: #9CA3AF; }

.chips { white-space: nowrap; padding: 0 24rpx 20rpx; }
.chips .chip { display: inline-block; padding: 10rpx 24rpx; background: #fff; border-radius: 36rpx; font-size: 24rpx; color: #4B5563; margin-right: 16rpx; &.active { background: #EFF6FF; color: #2563EB; border: 2rpx solid #BFDBFE; } }

.hero { margin: 0 24rpx 24rpx; border-radius: 16rpx; overflow: hidden; height: 200rpx; }
.hero-img { width: 100%; height: 100%; display: block; }

.block { margin: 0 24rpx 24rpx; }
.block-head { display: flex; align-items: center; gap: 12rpx; margin-bottom: 16rpx; }
.bh-bar { width: 8rpx; height: 28rpx; background: #DC2626; border-radius: 4rpx; }
.bh-title { font-size: 30rpx; font-weight: 800; color: #1F2937; flex: 1; }
.bh-more { font-size: 22rpx; color: #2563EB; }

.grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20rpx; }
.prod { background: #fff; border-radius: 16rpx; overflow: hidden; box-shadow: 0 2rpx 12rpx rgba(0,0,0,0.04); }
.p-img-wrap { position: relative; }
.p-img { width: 100%; height: 240rpx; display: block; }
.new-tag { position: absolute; top: 12rpx; left: 12rpx; background: #DC2626; color: #fff; font-size: 18rpx; padding: 2rpx 10rpx; border-radius: 4rpx; }
.p-body { padding: 16rpx; }
.p-title { display: block; font-size: 22rpx; color: #1F2937; line-height: 1.4; min-height: 60rpx; overflow: hidden; }
.p-meta { display: flex; gap: 8rpx; font-size: 18rpx; color: #F59E0B; margin: 8rpx 0; }
.p-meta text:last-child { color: #6B7280; }
.p-price { display: flex; align-items: baseline; gap: 8rpx; }
.p-price .cur { font-size: 28rpx; color: #DC2626; font-weight: 800; }
.p-price .ori { font-size: 18rpx; color: #9CA3AF; text-decoration: line-through; }
</style>
