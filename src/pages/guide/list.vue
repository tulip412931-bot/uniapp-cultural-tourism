<template>
  <view class="page">
    <view class="nav">
      <view class="nav-btn" @click="back">‹</view>
      <text class="nav-title">游玩攻略</text>
      <view class="nav-btn">🔍</view>
    </view>

    <view class="search">
      <text class="ic">🔍</text>
      <text class="ph">搜索攻略、景点、路线</text>
    </view>

    <scroll-view scroll-x class="chips">
      <view class="chip" v-for="(c, i) in chips" :key="i" :class="{ active: i === activeChip }" @click="activeChip = i">{{ c }}</view>
    </scroll-view>

    <!-- 编辑精选大卡 -->
    <view class="featured" @click="goDetail(featured.id)">
      <image class="f-img" :src="featured.cover" mode="aspectFill" />
      <view class="f-mask">
        <view class="f-tag">📍 编辑精选</view>
        <text class="f-title">{{ featured.title }}</text>
        <text class="f-sub">{{ featured.summary }}</text>
      </view>
    </view>

    <!-- 热门排行 -->
    <view class="block">
      <view class="bh">
        <text class="bh-title">热门排行</text>
        <text class="bh-more">更多 ›</text>
      </view>
      <view class="rank-card" v-for="(g, i) in rankList" :key="g.id" @click="goDetail(g.id)">
        <view class="rank-num" :class="rankClass(i)">{{ i + 1 }}</view>
        <view class="rank-body">
          <text class="rank-title">{{ g.title }}</text>
          <view class="rank-meta"><text>👤 {{ g.author }}</text><text class="hot">🔥 {{ g.hot }}</text></view>
        </view>
        <image class="rank-img" :src="g.cover" mode="aspectFill" />
      </view>
    </view>

    <!-- 最新攻略 -->
    <view class="block">
      <view class="bh">
        <text class="bh-title">最新攻略</text>
        <text class="bh-sort">最新发布 ›</text>
      </view>
      <view class="card" v-for="g in latest" :key="g.id" @click="goDetail(g.id)">
        <image class="c-img" :src="g.cover" mode="aspectFill" />
        <view class="c-body">
          <view class="c-tags">
            <text class="c-tag" v-for="(t, i) in g.tags" :key="i" :class="tagClass(i)">{{ t }}</text>
          </view>
          <text class="c-title">{{ g.title }}</text>
          <text class="c-sum">{{ g.summary }}</text>
          <view class="c-foot">
            <view class="author">
              <image class="ava" :src="g.avatar" mode="aspectFill" />
              <text>{{ g.author }}</text>
              <text v-if="g.verified" class="verify">✓</text>
            </view>
            <view class="stats">
              <text>👁 {{ g.views }}</text>
              <text>👍 {{ g.likes }}</text>
            </view>
          </view>
        </view>
      </view>
    </view>

    <!-- 主题攻略 -->
    <view class="block">
      <view class="bh"><text class="bh-bar"></text><text class="bh-title">主题攻略</text></view>
      <view class="theme-grid">
        <view class="theme" v-for="t in themeGuides" :key="t.id" :style="{ background: t.color }">
          <text class="t-icon">{{ t.icon }}</text>
          <text class="t-name">{{ t.title }}</text>
          <text class="t-count">{{ t.count }}</text>
        </view>
      </view>
    </view>

    <!-- 达人推荐 -->
    <view class="block">
      <view class="bh"><text class="bh-title">达人推荐</text><text class="bh-more">更多 ›</text></view>
      <scroll-view scroll-x class="experts">
        <view class="expert" v-for="e in experts" :key="e.id">
          <image class="e-cover" src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=300&q=70" mode="aspectFill" />
          <image class="e-ava" :src="e.avatar" mode="aspectFill" />
          <text class="e-name">{{ e.name }}</text>
          <text class="e-count">{{ e.count }}</text>
          <view class="e-btn">+ 关注</view>
        </view>
      </scroll-view>
    </view>

    <view style="height: 160rpx"></view>
    <TabBar active="me" />
  </view>
</template>

<script setup>
import { guides, themeGuides, experts } from '@/common/data.js'
import TabBar from '@/components/TabBar.vue'
import { ref } from 'vue'

const chips = ['全部', '自然风光', '徒步探险', '美食探店', '人']
const activeChip = ref(0)
const featured = guides[0]
const rankList = guides.slice(1, 4)
const latest = guides.slice(1)

function rankClass (i) { return ['r-orange', 'r-pink', 'r-yellow'][i] || 'r-yellow' }
function tagClass (i) { return ['t-green', 't-blue', 't-pink', 't-purple'][i % 4] }
function back () { uni.navigateBack({ fail: () => uni.reLaunch({ url: '/pages/index/index' }) }) }
function goDetail (id) { uni.navigateTo({ url: `/pages/guide/detail?id=${id}` }) }
</script>

<style lang="scss" scoped>
.page { background: #F3F4F6; min-height: 100vh; padding-top: env(safe-area-inset-top); }
.nav { display: flex; align-items: center; padding: 20rpx 24rpx; gap: 20rpx; }
.nav-btn { width: 60rpx; height: 60rpx; border-radius: 50%; background: #ECEEF2; display: flex; align-items: center; justify-content: center; font-size: 28rpx; color: #1F2937; }
.nav-title { flex: 1; text-align: center; font-size: 32rpx; font-weight: 700; color: #1F2937; }

.search { margin: 0 24rpx 16rpx; height: 70rpx; background: #ECEEF2; border-radius: 35rpx; display: flex; align-items: center; padding: 0 24rpx; gap: 12rpx; }
.search .ic { color: #9CA3AF; }
.search .ph { font-size: 24rpx; color: #9CA3AF; }

.chips { white-space: nowrap; padding: 0 24rpx 20rpx; }
.chips .chip { display: inline-block; padding: 10rpx 24rpx; background: #fff; border-radius: 36rpx; font-size: 24rpx; color: #4B5563; margin-right: 16rpx; &.active { background: #EFF6FF; color: #2563EB; border: 2rpx solid #BFDBFE; } }

.featured { margin: 0 24rpx 24rpx; border-radius: 20rpx; overflow: hidden; position: relative; height: 280rpx; }
.f-img { width: 100%; height: 100%; display: block; }
.f-mask { position: absolute; left: 0; right: 0; bottom: 0; top: 0; padding: 20rpx 24rpx; background: linear-gradient(180deg, rgba(0,0,0,.1), rgba(0,0,0,.65)); display: flex; flex-direction: column; justify-content: flex-end; }
.f-tag { display: inline-block; align-self: flex-start; background: #F59E0B; color: #fff; padding: 4rpx 14rpx; border-radius: 6rpx; font-size: 20rpx; margin-bottom: 12rpx; }
.f-title { color: #fff; font-size: 32rpx; font-weight: 800; }
.f-sub { color: #fff; font-size: 22rpx; margin-top: 6rpx; opacity: .9; }

.block { margin: 0 24rpx 24rpx; background: #fff; border-radius: 20rpx; padding: 20rpx; }
.bh { display: flex; align-items: center; gap: 12rpx; margin-bottom: 16rpx; }
.bh-bar { width: 8rpx; height: 28rpx; background: #2563EB; border-radius: 4rpx; }
.bh-title { font-size: 30rpx; font-weight: 800; color: #1F2937; flex: 1; }
.bh-more, .bh-sort { font-size: 22rpx; color: #2563EB; }
.bh-sort { color: #6B7280; }

.rank-card { display: flex; align-items: center; gap: 16rpx; padding: 16rpx 0; border-bottom: 2rpx solid #F3F4F6; }
.rank-card:last-child { border-bottom: 0; }
.rank-num { width: 48rpx; height: 48rpx; border-radius: 12rpx; color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 24rpx; }
.r-orange { background: #EA580C; }
.r-pink { background: #EC4899; }
.r-yellow { background: #F59E0B; }
.rank-body { flex: 1; }
.rank-title { display: block; font-size: 26rpx; color: #1F2937; font-weight: 600; }
.rank-meta { display: flex; gap: 16rpx; font-size: 20rpx; color: #6B7280; margin-top: 8rpx; }
.rank-meta .hot { color: #EA580C; }
.rank-img { width: 120rpx; height: 90rpx; border-radius: 8rpx; }

.card { background: #fff; border-radius: 16rpx; padding: 16rpx 0; border-bottom: 2rpx solid #F3F4F6; }
.card:last-child { border-bottom: 0; }
.c-img { width: 100%; height: 280rpx; border-radius: 12rpx; display: block; }
.c-body { padding: 16rpx 0 8rpx; }
.c-tags { display: flex; gap: 8rpx; margin-bottom: 8rpx; }
.c-tag { padding: 2rpx 12rpx; border-radius: 6rpx; font-size: 18rpx; }
.t-green { background: #ECFDF5; color: #059669; }
.t-blue { background: #EFF6FF; color: #2563EB; }
.t-pink { background: #FDF2F8; color: #DB2777; }
.t-purple { background: #F5F3FF; color: #7C3AED; }
.c-title { display: block; font-size: 28rpx; font-weight: 700; color: #1F2937; }
.c-sum { display: block; font-size: 22rpx; color: #6B7280; margin-top: 6rpx; }
.c-foot { display: flex; justify-content: space-between; align-items: center; margin-top: 12rpx; }
.author { display: flex; align-items: center; gap: 8rpx; font-size: 22rpx; color: #1F2937; }
.ava { width: 40rpx; height: 40rpx; border-radius: 50%; }
.verify { color: #2563EB; font-size: 18rpx; }
.stats { display: flex; gap: 16rpx; font-size: 20rpx; color: #6B7280; }

.theme-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16rpx; }
.theme { padding: 24rpx; border-radius: 16rpx; color: #fff; display: flex; flex-direction: column; gap: 8rpx; }
.t-icon { font-size: 32rpx; }
.t-name { font-size: 28rpx; font-weight: 700; }
.t-count { font-size: 20rpx; opacity: .8; }

.experts { white-space: nowrap; }
.expert { display: inline-block; width: 200rpx; margin-right: 16rpx; background: #fff; border-radius: 12rpx; overflow: hidden; position: relative; padding-bottom: 16rpx; text-align: center; }
.e-cover { width: 100%; height: 120rpx; display: block; }
.e-ava { width: 80rpx; height: 80rpx; border-radius: 50%; border: 4rpx solid #fff; margin-top: -40rpx; }
.e-name { display: block; font-size: 22rpx; color: #1F2937; font-weight: 600; margin-top: 8rpx; }
.e-count { display: block; font-size: 18rpx; color: #6B7280; margin: 4rpx 0; }
.e-btn { background: #EFF6FF; color: #2563EB; font-size: 20rpx; padding: 4rpx 16rpx; border-radius: 16rpx; display: inline-block; margin-top: 4rpx; }
</style>
