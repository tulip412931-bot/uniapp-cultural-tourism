<template>
  <view class="page">
    <!-- 顶部导航 -->
    <view class="nav">
      <view class="nav-btn" @click="back">‹</view>
      <text class="nav-title">徒步线路</text>
      <view class="nav-btn" @click="onFilter">≡</view>
    </view>

    <!-- 搜索 -->
    <view class="search" @click="onSearch">
      <text class="ic">🔍</text>
      <text class="ph">搜索徒步线路名称</text>
    </view>

    <!-- 筛选 chips -->
    <scroll-view scroll-x class="chips">
      <view class="chip" v-for="(c, i) in chips" :key="i" :class="{ active: i === activeChip }" @click="activeChip = i">{{ c }}</view>
    </scroll-view>

    <!-- 顶部精选大卡 -->
    <view class="hero" @click="goDetail(featured.id)">
      <image class="hero-img" :src="featured.cover" mode="aspectFill" />
      <view class="hero-mask">
        <text class="hero-title">{{ featured.title }}</text>
        <view class="hero-meta">
          <text>⏱ {{ featured.duration }}</text>
          <text>📏 {{ featured.distance }}</text>
          <text>⭐ {{ featured.rating }}分</text>
        </view>
      </view>
    </view>

    <!-- 列表标题 -->
    <view class="list-head">
      <text class="lh-title">全部线路</text>
      <text class="lh-sort" @click="onSort">{{ sortLabel }} ›</text>
    </view>

    <!-- 列表 -->
    <view class="empty" v-if="!list.length">
      <text>暂无符合条件的线路</text>
    </view>
    <view class="card" v-for="item in list" :key="item.id" @click="goDetail(item.id)">
      <image class="card-img" :src="item.cover" mode="aspectFill" />
      <view class="card-body">
        <view class="row">
          <text class="title">{{ item.title }}</text>
          <text class="rating">⭐ {{ item.rating }}</text>
        </view>
        <view class="meta">
          <text>📍 {{ item.location }}</text>
          <text>⏱ {{ item.duration }}</text>
          <text>📏 {{ item.distance }}</text>
        </view>
        <view class="tags">
          <text class="tag" v-for="(t, i) in item.tags" :key="i" :class="tagClass(i)">{{ t }}</text>
        </view>
        <view class="bottom">
          <text class="price"><text class="cur">¥{{ item.price }}</text><text class="unit">/人起</text></text>
          <view class="btn">查看详情</view>
        </view>
      </view>
    </view>

    <view style="height: 160rpx"></view>
    <TabBar active="home" />
  </view>
</template>

<script setup>
import { hikingRoutes } from '@/common/data.js'
import TabBar from '@/components/TabBar.vue'
import { ref, computed } from 'vue'

const chips = ['全部', '1-3公里', '3-8公里', '8公里以上']
const activeChip = ref(0)
const featured = hikingRoutes[0]
const sortLabel = ref('推荐排序')

const filteredAll = computed(() => {
  const rest = hikingRoutes.slice(1)
  const c = chips[activeChip.value]
  const inRange = (km, lo, hi) => km >= lo && km <= hi
  if (c === '全部') return rest
  return rest.filter(it => {
    const km = parseFloat(String(it.distance).replace(/[^0-9.]/g, '')) || 0
    if (c === '1-3公里') return inRange(km, 1, 3)
    if (c === '3-8公里') return inRange(km, 3, 8)
    if (c === '8公里以上') return km >= 8
    return true
  })
})
const list = computed(() => {
  const arr = [...filteredAll.value]
  if (sortLabel.value === '价格从低到高') arr.sort((a,b)=>a.price-b.price)
  else if (sortLabel.value === '价格从高到低') arr.sort((a,b)=>b.price-a.price)
  else if (sortLabel.value === '评分最高') arr.sort((a,b)=>b.rating-a.rating)
  return arr
})

function tagClass (i) { return ['t-green', 't-purple', 't-orange', 't-blue'][i % 4] }
function back () { uni.navigateBack({ fail: () => uni.reLaunch({ url: '/pages/index/index' }) }) }
function goDetail (id) { uni.navigateTo({ url: `/pages/hiking/detail?id=${id}` }) }
function onFilter () {
  uni.showActionSheet({ itemList: ['难度：全部','难度：简单','难度：中等','难度：困难'], success: (e) => uni.showToast({ title: '已应用：' + ['全部','简单','中等','困难'][e.tapIndex], icon: 'none' }) })
}
function onSearch () { uni.showToast({ title: '搜索功能开发中', icon: 'none' }) }
function onSort () {
  const opts = ['推荐排序','价格从低到高','价格从高到低','评分最高']
  uni.showActionSheet({ itemList: opts, success: (e) => { sortLabel.value = opts[e.tapIndex] } })
}
</script>

<style lang="scss" scoped>
.page { background: #F3F4F6; min-height: 100vh; padding-top: env(safe-area-inset-top); }

.nav {
  display: flex; align-items: center; padding: 20rpx 24rpx; gap: 20rpx;
  .nav-btn { width: 60rpx; height: 60rpx; border-radius: 50%; background: #ECEEF2; display: flex; align-items: center; justify-content: center; font-size: 36rpx; color: #1F2937; }
  .nav-title { flex: 1; text-align: center; font-size: 32rpx; font-weight: 700; color: #1F2937; }
}

.search {
  margin: 0 24rpx 16rpx; height: 70rpx; background: #ECEEF2; border-radius: 35rpx;
  display: flex; align-items: center; padding: 0 24rpx; gap: 12rpx;
  .ic { color: #9CA3AF; }
  .ph { font-size: 26rpx; color: #9CA3AF; }
}

.chips { white-space: nowrap; padding: 0 24rpx 20rpx; }
.chips .chip {
  display: inline-block; padding: 12rpx 32rpx; background: #fff; border-radius: 36rpx;
  font-size: 26rpx; color: #4B5563; margin-right: 16rpx;
  &.active { background: #EFF6FF; color: #2563EB; border: 2rpx solid #BFDBFE; }
}

.hero {
  margin: 0 24rpx 24rpx; border-radius: 24rpx; overflow: hidden; position: relative; height: 320rpx;
  .hero-img { width: 100%; height: 100%; display: block; }
  .hero-mask {
    position: absolute; left: 0; right: 0; bottom: 0; padding: 24rpx;
    background: linear-gradient(180deg, rgba(0,0,0,0), rgba(0,0,0,0.6));
    .hero-title { display: block; color: #fff; font-size: 36rpx; font-weight: 700; margin-bottom: 12rpx; }
    .hero-meta { display: flex; gap: 24rpx; color: #fff; font-size: 22rpx; }
  }
}

.list-head { display: flex; justify-content: space-between; align-items: center; padding: 8rpx 28rpx 16rpx; }
.lh-title { font-size: 32rpx; font-weight: 700; color: #1F2937; }
.lh-sort { font-size: 24rpx; color: #6B7280; }
.empty { text-align: center; padding: 80rpx 0; color: #9CA3AF; font-size: 26rpx; }

.card {
  margin: 0 24rpx 24rpx; background: #fff; border-radius: 20rpx; overflow: hidden;
  box-shadow: 0 4rpx 16rpx rgba(0,0,0,0.04);
  .card-img { width: 100%; height: 280rpx; display: block; }
  .card-body { padding: 20rpx 24rpx 24rpx; }
  .row { display: flex; justify-content: space-between; align-items: center; }
  .title { font-size: 30rpx; font-weight: 700; color: #1F2937; }
  .rating { font-size: 24rpx; color: #F59E0B; }
  .meta { display: flex; gap: 24rpx; margin: 12rpx 0; font-size: 22rpx; color: #6B7280; }
  .tags { display: flex; gap: 12rpx; flex-wrap: wrap; }
  .tag { padding: 4rpx 14rpx; border-radius: 8rpx; font-size: 20rpx; }
  .t-green { background: #ECFDF5; color: #059669; }
  .t-purple { background: #F5F3FF; color: #7C3AED; }
  .t-orange { background: #FFF7ED; color: #EA580C; }
  .t-blue { background: #EFF6FF; color: #2563EB; }
  .bottom { display: flex; justify-content: space-between; align-items: center; margin-top: 16rpx; }
  .price .cur { font-size: 32rpx; color: #DC2626; font-weight: 800; }
  .price .unit { font-size: 22rpx; color: #6B7280; margin-left: 4rpx; }
  .btn { background: #2563EB; color: #fff; padding: 12rpx 28rpx; border-radius: 12rpx; font-size: 24rpx; }
}
</style>
