<template>
  <view v-if="item" class="page">
    <view class="nav">
      <view class="nav-btn" @click="back">‹</view>
      <text class="nav-title">攻略详情</text>
      <view class="nav-right">
        <view class="nav-btn">⤴</view>
        <view class="nav-btn">⋯</view>
      </view>
    </view>

    <image class="hero" :src="item.cover" mode="aspectFill" />

    <view class="head">
      <text class="title">{{ item.title }}</text>
      <view class="author-row">
        <image class="ava" :src="item.avatar" mode="aspectFill" />
        <view class="a-info">
          <text class="a-name">{{ item.author }}</text>
          <text class="a-desc">{{ item.authorDesc || '资深旅行家' }}</text>
        </view>
        <view class="follow">+ 关注</view>
      </view>
      <view class="meta">
        <text>📅 {{ item.date }}</text>
        <text>👁 {{ item.views }}阅读</text>
        <text>⭐ {{ item.favorites || item.likes }}收藏</text>
      </view>
      <view class="tag-row">
        <text class="tag" v-for="(t, i) in item.tags" :key="i" :class="tagClass(i)">{{ t }}</text>
      </view>
    </view>

    <!-- 攻略简介 -->
    <view class="section" v-if="item.intro">
      <view class="bh"><text class="bh-bar"></text><text class="bh-title">攻略简介</text></view>
      <text class="sec-p">{{ item.intro }}</text>
    </view>

    <!-- 目录导航 -->
    <view class="section" v-if="item.catalog && item.catalog.length">
      <view class="bh"><text class="bh-bar"></text><text class="bh-title">目录导航</text></view>
      <view class="catalog">
        <view class="c-item" v-for="(c, i) in item.catalog" :key="i">
          <text class="c-num">{{ i + 1 }}</text>
          <text class="c-title">{{ c }}</text>
        </view>
      </view>
    </view>

    <!-- 最佳游玩时间 -->
    <view class="section" v-if="item.bestTime">
      <view class="bh"><text class="bh-num">1</text><text class="bh-title">{{ item.bestTime.title }}</text></view>
      <text class="sec-p">{{ item.bestTime.desc }}</text>
      <view class="trans-box" v-for="(t, i) in item.bestTime.transport" :key="i">
        <text class="tb-title">🚗 {{ t.title }}</text>
        <text class="tb-desc">{{ t.desc }}</text>
      </view>
    </view>

    <!-- 行程规划 -->
    <view class="section" v-for="(day, di) in item.daySchedule" :key="di">
      <view class="bh"><text class="bh-num">2</text><text class="bh-title">{{ day.day }} · {{ day.title }}</text></view>
      <view class="timeline">
        <view class="tl-item" v-for="(s, i) in day.items" :key="i">
          <view class="dot"></view>
          <view class="tl-body">
            <text class="tl-time">{{ s.time }} <text class="tl-spot">{{ s.title }}</text></text>
            <text class="tl-desc">{{ s.desc }}</text>
          </view>
        </view>
      </view>
    </view>

    <!-- 必打卡景点 -->
    <view class="section" v-if="item.musts && item.musts.length">
      <view class="bh"><text class="bh-num">3</text><text class="bh-title">必打卡景点详解</text></view>
      <view class="must" v-for="(m, i) in item.musts" :key="i">
        <image class="m-img" :src="m.cover" mode="aspectFill" />
        <view class="m-body">
          <view class="m-head">
            <text class="m-title">{{ m.title }}</text>
            <text class="m-tag">{{ m.tag }}</text>
          </view>
          <text class="m-time">⏱ {{ m.time }}</text>
          <text class="m-desc">{{ m.desc }}</text>
        </view>
      </view>
    </view>

    <!-- 住宿推荐 -->
    <view class="section" v-if="item.accommodation && item.accommodation.hotel">
      <view class="bh"><text class="bh-num">4</text><text class="bh-title">住宿推荐与美食攻略</text></view>
      <view class="hotel-card">
        <text class="hc-tag">住宿推荐</text>
        <text class="hc-name">{{ item.accommodation.hotel.name }}</text>
        <text class="hc-meta">⭐ {{ item.accommodation.hotel.rating }}</text>
        <text class="hc-desc">{{ item.accommodation.hotel.desc }}</text>
        <text class="hc-price">¥{{ item.accommodation.hotel.price }}</text>
      </view>
      <text class="sub-title">必尝美食</text>
      <view class="food-row">
        <view class="food" v-for="(f, i) in item.foods" :key="i" :class="foodColor(i)">
          <text class="f-ic">{{ f.icon }}</text>
          <text class="f-name">{{ f.name }}</text>
        </view>
      </view>
    </view>

    <!-- 实用贴士 -->
    <view class="section" v-if="item.tips">
      <view class="bh"><text class="bh-num">5</text><text class="bh-title">{{ item.tips.title }}</text></view>
      <view class="tip" v-for="(t, i) in item.tips.list" :key="i">
        <text class="tp-title">📌 {{ t.title }}</text>
        <text class="tp-desc">{{ t.desc }}</text>
      </view>
    </view>

    <!-- 互动 -->
    <view class="interact">
      <view class="ia"><text>👍</text><text>{{ item.likes }}</text></view>
      <view class="ia"><text>⭐</text><text>{{ item.favorites || item.likes }}</text></view>
      <view class="ia"><text>💬</text><text>368</text></view>
    </view>

    <!-- 相关攻略推荐 -->
    <view class="section" v-if="item.related && item.related.length">
      <view class="bh"><text class="bh-bar"></text><text class="bh-title">相关攻略推荐</text></view>
      <view class="rel-grid">
        <view class="rel" v-for="r in item.related" :key="r.id" @click="goItem(r.id)">
          <image class="rel-img" :src="r.cover" mode="aspectFill" />
          <text class="rel-title">{{ r.title }}</text>
          <view class="rel-meta"><text>👁 {{ r.views }}</text><text>👍 {{ r.likes }}</text></view>
        </view>
      </view>
    </view>

    <view style="height: 140rpx"></view>

    <view class="footer">
      <view class="f-ic">👍</view>
      <view class="f-ic">⭐</view>
      <view class="f-ic">💬</view>
      <view class="f-buy">查看全部368条评论</view>
    </view>
  </view>
</template>

<script setup>
import { guides, findById } from '@/common/data.js'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'

const item = ref(null)
onLoad((q) => { item.value = findById(guides, q.id) || guides[0] })

function tagClass (i) { return ['t-green', 't-blue', 't-pink', 't-purple'][i % 4] }
function foodColor (i) { return ['fc-orange', 'fc-pink', 'fc-yellow'][i % 3] }
function goItem (id) { uni.redirectTo({ url: `/pages/guide/detail?id=${id}` }) }
function back () { uni.navigateBack({ fail: () => uni.reLaunch({ url: '/pages/guide/list' }) }) }
</script>

<style lang="scss" scoped>
.page { background: #F3F4F6; min-height: 100vh; padding-top: env(safe-area-inset-top); }
.nav { display: flex; align-items: center; padding: 20rpx 24rpx; gap: 16rpx; background: #fff; }
.nav-btn { width: 56rpx; height: 56rpx; border-radius: 50%; background: #F3F4F6; display: flex; align-items: center; justify-content: center; font-size: 28rpx; color: #1F2937; }
.nav-title { flex: 1; text-align: center; font-size: 30rpx; font-weight: 700; color: #1F2937; }
.nav-right { display: flex; gap: 12rpx; }

.hero { width: 100%; height: 320rpx; display: block; }

.head { background: #fff; padding: 24rpx; margin-bottom: 16rpx; }
.title { display: block; font-size: 32rpx; font-weight: 800; color: #1F2937; line-height: 1.4; }
.author-row { display: flex; align-items: center; gap: 16rpx; margin: 16rpx 0; }
.ava { width: 72rpx; height: 72rpx; border-radius: 50%; }
.a-info { flex: 1; }
.a-name { display: block; font-size: 26rpx; color: #1F2937; font-weight: 600; }
.a-desc { display: block; font-size: 20rpx; color: #6B7280; margin-top: 4rpx; }
.follow { background: #EFF6FF; color: #2563EB; padding: 8rpx 20rpx; border-radius: 24rpx; font-size: 22rpx; }
.meta { display: flex; gap: 20rpx; font-size: 22rpx; color: #6B7280; margin-bottom: 12rpx; }
.tag-row { display: flex; gap: 12rpx; flex-wrap: wrap; }
.tag { padding: 4rpx 14rpx; border-radius: 6rpx; font-size: 20rpx; }
.t-green { background: #ECFDF5; color: #059669; }
.t-blue { background: #EFF6FF; color: #2563EB; }
.t-pink { background: #FDF2F8; color: #DB2777; }
.t-purple { background: #F5F3FF; color: #7C3AED; }

.section { background: #fff; padding: 24rpx; margin-bottom: 16rpx; }
.bh { display: flex; align-items: center; gap: 12rpx; margin-bottom: 16rpx; }
.bh-bar { width: 8rpx; height: 28rpx; background: #2563EB; border-radius: 4rpx; }
.bh-num { width: 44rpx; height: 44rpx; background: #2563EB; color: #fff; border-radius: 12rpx; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 24rpx; }
.bh-title { font-size: 28rpx; font-weight: 800; color: #1F2937; }
.sec-p { display: block; font-size: 24rpx; color: #4B5563; line-height: 1.6; }
.sub-title { display: block; font-size: 26rpx; font-weight: 700; color: #1F2937; margin: 16rpx 0 12rpx; }

.catalog { display: flex; flex-direction: column; gap: 12rpx; }
.c-item { display: flex; align-items: center; gap: 12rpx; background: #F9FAFB; padding: 16rpx; border-radius: 10rpx; }
.c-num { width: 36rpx; height: 36rpx; background: #2563EB; color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 22rpx; font-weight: 700; }
.c-title { font-size: 24rpx; color: #1F2937; flex: 1; }

.trans-box { background: #F9FAFB; padding: 16rpx; border-radius: 10rpx; margin-top: 12rpx; }
.tb-title { display: block; font-size: 24rpx; color: #1F2937; font-weight: 700; }
.tb-desc { display: block; font-size: 22rpx; color: #6B7280; margin-top: 6rpx; line-height: 1.5; }

.timeline { position: relative; padding-left: 24rpx; }
.timeline::before { content: ''; position: absolute; left: 8rpx; top: 12rpx; bottom: 12rpx; width: 4rpx; background: #DBEAFE; }
.tl-item { position: relative; padding: 12rpx 0 12rpx 24rpx; }
.tl-item .dot { position: absolute; left: -22rpx; top: 22rpx; width: 20rpx; height: 20rpx; border-radius: 50%; background: #2563EB; }
.tl-time { display: block; font-size: 24rpx; color: #1F2937; font-weight: 700; }
.tl-spot { font-weight: 700; }
.tl-desc { display: block; font-size: 22rpx; color: #6B7280; margin-top: 6rpx; }

.must { display: flex; flex-direction: column; gap: 12rpx; margin-bottom: 20rpx; }
.m-img { width: 100%; height: 300rpx; border-radius: 12rpx; display: block; }
.m-body { padding: 8rpx 0; }
.m-head { display: flex; align-items: center; gap: 12rpx; }
.m-title { font-size: 28rpx; font-weight: 700; color: #1F2937; }
.m-tag { background: #DC2626; color: #fff; padding: 2rpx 12rpx; border-radius: 4rpx; font-size: 18rpx; }
.m-time { display: block; font-size: 20rpx; color: #6B7280; margin: 4rpx 0; }
.m-desc { display: block; font-size: 22rpx; color: #4B5563; line-height: 1.6; margin-top: 6rpx; }

.hotel-card { background: #F9FAFB; padding: 16rpx; border-radius: 12rpx; position: relative; }
.hc-tag { background: #DC2626; color: #fff; padding: 2rpx 12rpx; font-size: 18rpx; border-radius: 4rpx; }
.hc-name { display: block; font-size: 26rpx; font-weight: 700; color: #1F2937; margin-top: 8rpx; }
.hc-meta { display: block; font-size: 20rpx; color: #F59E0B; margin-top: 4rpx; }
.hc-desc { display: block; font-size: 22rpx; color: #6B7280; margin-top: 6rpx; }
.hc-price { position: absolute; right: 16rpx; bottom: 16rpx; font-size: 30rpx; color: #DC2626; font-weight: 800; }

.food-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12rpx; }
.food { padding: 20rpx; border-radius: 10rpx; text-align: center; }
.fc-orange { background: #FED7AA; }
.fc-pink { background: #FBCFE8; }
.fc-yellow { background: #FEF3C7; }
.f-ic { font-size: 36rpx; display: block; }
.f-name { display: block; font-size: 22rpx; color: #1F2937; margin-top: 6rpx; }

.tip { background: #FEF3C7; padding: 16rpx; border-radius: 10rpx; margin-bottom: 12rpx; }
.tp-title { display: block; font-size: 24rpx; color: #B45309; font-weight: 700; }
.tp-desc { display: block; font-size: 22rpx; color: #92400E; margin-top: 6rpx; line-height: 1.5; }

.interact { background: #fff; padding: 24rpx; display: flex; justify-content: space-around; margin-bottom: 16rpx; }
.ia { display: flex; flex-direction: column; align-items: center; gap: 8rpx; font-size: 22rpx; color: #6B7280; }
.ia text:first-child { font-size: 36rpx; }

.rel-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12rpx; }
.rel { background: #F9FAFB; border-radius: 12rpx; overflow: hidden; padding-bottom: 12rpx; }
.rel-img { width: 100%; height: 180rpx; display: block; }
.rel-title { display: block; font-size: 22rpx; color: #1F2937; padding: 8rpx 12rpx; }
.rel-meta { display: flex; gap: 12rpx; padding: 0 12rpx; font-size: 18rpx; color: #6B7280; }

.footer { position: fixed; left: 0; right: 0; bottom: 0; background: #fff; padding: 16rpx 24rpx env(safe-area-inset-bottom); display: flex; align-items: center; gap: 12rpx; box-shadow: 0 -4rpx 16rpx rgba(0,0,0,.04); }
.footer .f-ic { width: 64rpx; height: 64rpx; border-radius: 50%; background: #F3F4F6; display: flex; align-items: center; justify-content: center; font-size: 28rpx; }
.f-buy { flex: 1; background: #2563EB; color: #fff; text-align: center; padding: 18rpx; border-radius: 40rpx; font-size: 24rpx; }
</style>
