<template>
  <view v-if="item" class="page">
    <image :src="item.cover" mode="aspectFill" class="hero" />
    <view class="card">
      <text class="title">{{ item.title }}</text>
      <view class="meta">
        <text class="loc">📍 {{ item.location }}</text>
        <text class="rating">★ {{ item.rating }}</text>
      </view>
      <view class="stats">
        <view class="stat"><text class="stat-v">{{ item.distance }}</text><text class="stat-l">距离</text></view>
        <view class="stat"><text class="stat-v">{{ item.duration }}</text><text class="stat-l">用时</text></view>
        <view class="stat"><text class="stat-v">{{ item.elevation }}</text><text class="stat-l">海拔</text></view>
        <view class="stat"><text class="stat-v">{{ item.difficulty }}</text><text class="stat-l">难度</text></view>
      </view>
    </view>

    <view class="card">
      <text class="h2">线路简介</text>
      <text class="p">{{ item.desc }}</text>
    </view>

    <view class="card">
      <text class="h2">沿途亮点</text>
      <view class="hl-list">
        <view v-for="(h, i) in item.highlights" :key="i" class="hl-item">
          <text class="hl-no">{{ i + 1 }}</text>
          <text class="hl-txt">{{ h }}</text>
        </view>
      </view>
    </view>

    <view class="card">
      <text class="h2">温馨提示</text>
      <view v-for="(t, i) in item.tips" :key="i" class="tip-item">
        <text class="tip-dot">•</text>
        <text class="tip-txt">{{ t }}</text>
      </view>
    </view>

    <view class="footer">
      <view class="fav" @tap="toast('已收藏')">❤ 收藏</view>
      <view class="cta" @tap="toast('报名成功，行程已加入')">立即报名</view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { hikingRoutes, findById } from '@/common/data.js'

const item = ref(null)
onLoad((q) => {
  item.value = findById(hikingRoutes, q.id) || hikingRoutes[0]
})
function toast (title) { uni.showToast({ title, icon: 'none' }) }
</script>

<style lang="scss">
page { background: #F3F4F6; }
.page { padding-bottom: 140rpx; }
.hero { width: 100%; height: 420rpx; }
.card { background: #fff; margin: 24rpx; border-radius: 20rpx; padding: 28rpx; box-shadow: 0 4rpx 12rpx rgba(0,0,0,.04); }
.title { font-size: 36rpx; font-weight: 700; color: #1F2937; }
.meta { display: flex; justify-content: space-between; margin-top: 12rpx; }
.loc { font-size: 24rpx; color: #6B7280; }
.rating { font-size: 24rpx; color: #F59E0B; }
.stats { display: flex; margin-top: 24rpx; border-top: 1rpx solid #F3F4F6; padding-top: 24rpx; }
.stat { flex: 1; display: flex; flex-direction: column; align-items: center; }
.stat-v { font-size: 28rpx; font-weight: 700; color: #1F2937; }
.stat-l { font-size: 22rpx; color: #9CA3AF; margin-top: 4rpx; }
.h2 { display: block; font-size: 30rpx; font-weight: 700; color: #1F2937; margin-bottom: 16rpx; }
.p { font-size: 26rpx; color: #4B5563; line-height: 1.7; }
.hl-list { display: flex; flex-direction: column; gap: 16rpx; }
.hl-item { display: flex; align-items: center; gap: 16rpx; }
.hl-no { width: 36rpx; height: 36rpx; border-radius: 50%; background: #1F2937; color: #fff; font-size: 22rpx; text-align: center; line-height: 36rpx; }
.hl-txt { font-size: 26rpx; color: #1F2937; }
.tip-item { display: flex; gap: 12rpx; margin-bottom: 10rpx; }
.tip-dot { color: #F59E0B; }
.tip-txt { font-size: 26rpx; color: #4B5563; flex: 1; }

.footer {
  position: fixed; left: 0; right: 0; bottom: 0;
  height: 110rpx; background: #fff; display: flex; align-items: center; padding: 0 24rpx;
  box-shadow: 0 -4rpx 12rpx rgba(0,0,0,.04); gap: 16rpx;
}
.fav { padding: 18rpx 30rpx; border: 1rpx solid #E5E7EB; border-radius: 999rpx; font-size: 26rpx; color: #1F2937; }
.cta { flex: 1; height: 76rpx; line-height: 76rpx; text-align: center; background: linear-gradient(135deg,#34d399,#059669); color: #fff; font-weight: 700; border-radius: 999rpx; font-size: 28rpx; }
</style>
