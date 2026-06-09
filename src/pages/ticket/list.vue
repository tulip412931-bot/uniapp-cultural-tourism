<template>
  <view class="page">
    <view class="search-row">
      <view class="search">
        <text class="icon">🔍</text>
        <input v-model="kw" placeholder="搜索景点 / 城市" class="search-input" />
      </view>
    </view>
    <view class="list">
      <view v-for="item in list" :key="item.id" class="card" @tap="goto(item.id)">
        <image :src="item.cover" mode="aspectFill" class="cover" />
        <view class="body">
          <view class="row">
            <text class="title">{{ item.title }}</text>
            <text class="level">{{ item.level }}</text>
          </view>
          <text class="loc">📍 {{ item.location }}</text>
          <view class="tags">
            <text v-for="t in item.tags" :key="t" class="tag">{{ t }}</text>
          </view>
          <view class="price-row">
            <view>
              <text class="price">¥{{ item.price }}</text>
              <text class="ori">¥{{ item.originalPrice }}</text>
            </view>
            <text class="sold">已售 {{ item.sold }}</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref, computed } from 'vue'
import { tickets } from '@/common/data.js'

const kw = ref('')
const list = computed(() => {
  if (!kw.value) return tickets
  return tickets.filter(t => t.title.includes(kw.value) || t.location.includes(kw.value))
})
function goto (id) {
  uni.navigateTo({ url: '/pages/ticket/detail?id=' + id })
}
</script>

<style lang="scss">
page { background: #F3F4F6; }
.page { padding: 24rpx; }
.search-row { margin-bottom: 24rpx; }
.search {
  background: #fff; border-radius: 999rpx; padding: 16rpx 28rpx;
  display: flex; align-items: center; gap: 12rpx;
  box-shadow: 0 2rpx 6rpx rgba(0,0,0,.04);
}
.search-input { flex: 1; font-size: 26rpx; }
.icon { font-size: 28rpx; }

.card {
  display: flex; background: #fff; border-radius: 20rpx; overflow: hidden;
  margin-bottom: 24rpx;
  box-shadow: 0 4rpx 12rpx rgba(0,0,0,.05);
}
.cover { width: 220rpx; height: 220rpx; flex-shrink: 0; }
.body { flex: 1; padding: 20rpx; display: flex; flex-direction: column; justify-content: space-between; }
.row { display: flex; justify-content: space-between; align-items: center; }
.title { font-size: 28rpx; font-weight: 700; color: #1F2937; max-width: 340rpx; }
.level { background: #DBEAFE; color: #1D4ED8; font-size: 20rpx; padding: 4rpx 10rpx; border-radius: 6rpx; }
.loc { font-size: 22rpx; color: #6B7280; margin-top: 6rpx; }
.tags { display: flex; gap: 8rpx; margin: 10rpx 0; flex-wrap: wrap; }
.tag { background: #FEF3C7; color: #92400E; font-size: 20rpx; padding: 4rpx 10rpx; border-radius: 6rpx; }
.price-row { display: flex; justify-content: space-between; align-items: flex-end; }
.price { color: #DC2626; font-size: 32rpx; font-weight: 700; }
.ori { color: #9CA3AF; font-size: 22rpx; text-decoration: line-through; margin-left: 10rpx; }
.sold { color: #9CA3AF; font-size: 22rpx; }
</style>
