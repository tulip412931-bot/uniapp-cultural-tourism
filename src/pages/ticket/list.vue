<template>
  <view class="page">
    <view class="nav">
      <view class="nav-btn" @click="back">‹</view>
      <text class="nav-title">景区门票</text>
      <view class="nav-btn" @click="onSearch">🔍</view>
    </view>

    <!-- 顶部筛选 -->
    <view class="top-filters">
      <text class="tf" @click="onTopFilter('区域', ['全部区域','重庆主城','江津主城','四面山镇','中山古镇'])">{{ region }} ▾</text>
      <text class="tf" @click="onTopFilter('日期', ['今天','明天','后天','本周末'])">{{ date }} ▾</text>
      <text class="tf" @click="onTopFilter('排序', ['推荐','人气','价格','评分'])">{{ sort }} ▾</text>
      <text class="tf" @click="onFilter">▿ 筛选</text>
    </view>

    <!-- chips -->
    <scroll-view scroll-x class="chips">
      <view class="chip" v-for="(c, i) in chips" :key="i" :class="{ active: i === activeChip }" @click="activeChip = i">{{ c }}</view>
    </scroll-view>

    <!-- 热门推荐头 -->
    <view class="list-head">
      <text class="lh-title">热门推荐</text>
      <text class="lh-more" @click="onMore">更多 ›</text>
    </view>

    <!-- 顶部大图卡片 -->
    <view class="hero" @click="goDetail(featured.id)">
      <image class="hero-img" :src="featured.cover" mode="aspectFill" />
      <view class="hero-mask">
        <text class="hero-title">{{ featured.title }}</text>
        <view class="hero-meta">
          <text class="badge">{{ featured.level }}</text>
          <text>⭐ {{ featured.rating }}分</text>
          <text>👥 {{ (featured.sold/10000).toFixed(1) }}万人去过</text>
        </view>
        <view class="hero-bottom">
          <text>📍 {{ featured.location }}</text>
          <text class="hero-price">¥{{ featured.price }}<text class="unit">/人起</text></text>
        </view>
      </view>
    </view>

    <!-- 列表项 -->
    <view class="card" v-for="item in list" :key="item.id" @click="goDetail(item.id)">
      <image class="card-img" :src="item.cover" mode="aspectFill" />
      <view class="card-body">
        <view class="row">
          <text class="title">{{ item.title }}</text>
          <text class="rating">⭐ {{ item.rating }}</text>
        </view>
        <view class="tags">
          <text class="tag" v-for="(t, i) in item.tags" :key="i" :class="tagClass(i)">{{ t }}</text>
        </view>
        <view class="meta">📍 {{ item.location }}</view>
        <view class="meta">📋 {{ (item.extraTags || []).join(' | ') }}</view>
        <view class="bottom">
          <text v-if="item.free" class="free">免费</text>
          <text v-else class="price"><text class="cur">¥{{ item.price }}</text><text class="unit">/人</text></text>
          <view class="btn" :class="{ ghost: item.free }">{{ item.free ? '查看详情' : '立即预订' }}</view>
        </view>
      </view>
    </view>

    <view style="height: 160rpx"></view>
    <TabBar active="home" />
  </view>
</template>

<script setup>
import { tickets } from '@/common/data.js'
import TabBar from '@/components/TabBar.vue'
import { ref, computed } from 'vue'

const chips = ['全部', '5A景区', '4A景区', '自然风光', '人文古迹']
const activeChip = ref(0)
const featured = tickets[0]
const region = ref('全部区域')
const date = ref('今天')
const sort = ref('推荐')

const list = computed(() => {
  const rest = tickets.slice(1)
  const c = chips[activeChip.value]
  if (c === '全部') return rest
  if (c === '5A景区') return rest.filter(t => (t.level || '').includes('5A'))
  if (c === '4A景区') return rest.filter(t => (t.level || '').includes('4A'))
  if (c === '自然风光') return rest.filter(t => (t.tags || []).some(x => x.includes('自然') || x.includes('山水')))
  if (c === '人文古迹') return rest.filter(t => (t.tags || []).some(x => x.includes('古镇') || x.includes('教育') || x.includes('历史')))
  return rest
})

function tagClass (i) { return ['t-blue', 't-purple', 't-green', 't-pink'][i % 4] }
function back () { uni.navigateBack({ fail: () => uni.reLaunch({ url: '/pages/index/index' }) }) }
function goDetail (id) { uni.navigateTo({ url: `/pages/ticket/detail?id=${id}` }) }
function onSearch () { uni.showToast({ title: '搜索功能开发中', icon: 'none' }) }
function onTopFilter (label, opts) {
  uni.showActionSheet({ itemList: opts, success: (e) => {
    if (label === '区域') region.value = opts[e.tapIndex]
    else if (label === '日期') date.value = opts[e.tapIndex]
    else if (label === '排序') sort.value = opts[e.tapIndex]
  } })
}
function onFilter () {
  uni.showActionSheet({ itemList: ['价格：不限','¥0-50','¥50-100','¥100以上'], success: (e) => uni.showToast({ title: '已应用筛选', icon: 'none' }) })
}
function onMore () { uni.showToast({ title: '已为您展示更多', icon: 'none' }) }
</script>

<style lang="scss" scoped>
.page { background: #F3F4F6; min-height: 100vh; padding-top: env(safe-area-inset-top); }
.nav { display: flex; align-items: center; padding: 20rpx 24rpx; gap: 20rpx; background: #F3F4F6; }
.nav-btn { width: 60rpx; height: 60rpx; border-radius: 50%; background: #ECEEF2; display: flex; align-items: center; justify-content: center; font-size: 32rpx; color: #1F2937; }
.nav-title { flex: 1; text-align: center; font-size: 32rpx; font-weight: 700; color: #1F2937; }

.top-filters { display: flex; gap: 32rpx; padding: 8rpx 28rpx 16rpx; font-size: 24rpx; color: #4B5563; }
.top-filters .tf:last-child { margin-left: auto; }

.chips { white-space: nowrap; padding: 0 24rpx 20rpx; }
.chips .chip { display: inline-block; padding: 12rpx 28rpx; background: #fff; border-radius: 36rpx; font-size: 24rpx; color: #4B5563; margin-right: 16rpx; &.active { background: #EFF6FF; color: #2563EB; border: 2rpx solid #BFDBFE; } }

.list-head { display: flex; justify-content: space-between; align-items: center; padding: 8rpx 28rpx 16rpx; }
.lh-title { font-size: 32rpx; font-weight: 700; color: #1F2937; }
.lh-more { font-size: 24rpx; color: #2563EB; }

.hero { margin: 0 24rpx 24rpx; border-radius: 20rpx; overflow: hidden; position: relative; height: 320rpx; background: #1F2937; }
.hero-img { width: 100%; height: 100%; display: block; opacity: .9; }
.hero-mask { position: absolute; left: 0; right: 0; bottom: 0; top: 0; padding: 24rpx; display: flex; flex-direction: column; justify-content: flex-end;
  background: linear-gradient(180deg, rgba(0,0,0,0), rgba(0,0,0,.5));
  .hero-title { color: #fff; font-size: 38rpx; font-weight: 800; }
  .hero-meta { display: flex; gap: 16rpx; margin-top: 12rpx; color: #fff; font-size: 22rpx; align-items: center; }
  .badge { background: #F59E0B; color: #fff; padding: 4rpx 12rpx; border-radius: 8rpx; font-size: 20rpx; }
  .hero-bottom { display: flex; justify-content: space-between; align-items: flex-end; margin-top: 12rpx; color: #fff; font-size: 22rpx; }
  .hero-price { font-size: 36rpx; font-weight: 800; }
  .hero-price .unit { font-size: 20rpx; font-weight: 400; margin-left: 4rpx; }
}

.card { margin: 0 24rpx 20rpx; background: #fff; border-radius: 20rpx; padding: 20rpx; display: flex; gap: 20rpx; box-shadow: 0 2rpx 12rpx rgba(0,0,0,0.04); }
.card-img { width: 220rpx; height: 220rpx; border-radius: 12rpx; flex-shrink: 0; }
.card-body { flex: 1; display: flex; flex-direction: column; gap: 8rpx; }
.row { display: flex; justify-content: space-between; align-items: center; }
.title { font-size: 28rpx; font-weight: 700; color: #1F2937; }
.rating { font-size: 22rpx; color: #F59E0B; }
.tags { display: flex; gap: 8rpx; }
.tag { padding: 2rpx 12rpx; border-radius: 6rpx; font-size: 18rpx; }
.t-blue { background: #EFF6FF; color: #2563EB; }
.t-purple { background: #F5F3FF; color: #7C3AED; }
.t-green { background: #ECFDF5; color: #059669; }
.t-pink { background: #FDF2F8; color: #DB2777; }
.meta { font-size: 20rpx; color: #6B7280; }
.bottom { display: flex; justify-content: space-between; align-items: center; margin-top: auto; padding-top: 8rpx; }
.price .cur { font-size: 30rpx; color: #DC2626; font-weight: 800; }
.price .unit { font-size: 20rpx; color: #6B7280; margin-left: 4rpx; }
.free { font-size: 30rpx; color: #059669; font-weight: 800; }
.btn { background: #2563EB; color: #fff; padding: 10rpx 24rpx; border-radius: 10rpx; font-size: 22rpx; }
.btn.ghost { background: #F3F4F6; color: #4B5563; }
</style>
