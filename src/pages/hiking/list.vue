<template>
  <view class="page">
    <view class="filter">
      <view v-for="f in filters" :key="f" class="chip" :class="{ active: cur === f }" @tap="cur = f">{{ f }}</view>
    </view>
    <view class="list">
      <view v-for="item in list" :key="item.id" class="card" @tap="goto(item.id)">
        <image :src="item.cover" mode="aspectFill" class="cover" />
        <view class="body">
          <view class="title-row">
            <text class="title">{{ item.title }}</text>
            <text class="rating">★ {{ item.rating }}</text>
          </view>
          <view class="meta">
            <text class="loc">📍 {{ item.location }}</text>
          </view>
          <view class="badges">
            <text class="badge">🥾 {{ item.distance }}</text>
            <text class="badge">⏱ {{ item.duration }}</text>
            <text class="badge" :class="diffClass(item.difficulty)">{{ item.difficulty }}</text>
          </view>
          <text class="desc">{{ item.desc }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref, computed } from 'vue'
import { hikingRoutes } from '@/common/data.js'

const filters = ['全部', '初级', '中级', '高级']
const cur = ref('全部')
const list = computed(() =>
  cur.value === '全部' ? hikingRoutes : hikingRoutes.filter(r => r.difficulty === cur.value)
)
function diffClass (d) {
  return d === '初级' ? 'green' : d === '中级' ? 'orange' : 'red'
}
function goto (id) {
  uni.navigateTo({ url: '/pages/hiking/detail?id=' + id })
}
</script>

<style lang="scss">
page { background: #F3F4F6; }
.page { padding: 24rpx; }
.filter { display: flex; gap: 16rpx; flex-wrap: wrap; margin-bottom: 24rpx; }
.chip {
  padding: 12rpx 28rpx; background: #fff; border-radius: 999rpx;
  font-size: 26rpx; color: #6B7280;
  box-shadow: 0 2rpx 6rpx rgba(0,0,0,.04);
}
.chip.active { background: #1F2937; color: #fff; }
.card {
  background: #fff; border-radius: 24rpx; overflow: hidden;
  margin-bottom: 24rpx;
  box-shadow: 0 6rpx 16rpx rgba(31,41,55,.06);
}
.cover { width: 100%; height: 320rpx; }
.body { padding: 24rpx; }
.title-row { display: flex; justify-content: space-between; align-items: center; }
.title { font-size: 32rpx; font-weight: 700; color: #1F2937; }
.rating { font-size: 24rpx; color: #F59E0B; }
.meta { margin-top: 8rpx; }
.loc { font-size: 24rpx; color: #6B7280; }
.badges { display: flex; gap: 12rpx; margin: 16rpx 0; flex-wrap: wrap; }
.badge {
  background: #F3F4F6; color: #4B5563;
  padding: 6rpx 16rpx; border-radius: 8rpx; font-size: 22rpx;
}
.badge.green { background: #DCFCE7; color: #166534; }
.badge.orange { background: #FFEDD5; color: #9A3412; }
.badge.red { background: #FEE2E2; color: #991B1B; }
.desc { font-size: 24rpx; color: #6B7280; line-height: 1.6; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
</style>
