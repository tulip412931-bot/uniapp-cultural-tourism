<template>
  <view class="page">
    <view class="filter">
      <view v-for="f in filters" :key="f" class="chip" :class="{ active: cur === f }" @tap="cur = f">{{ f }}</view>
    </view>
    <view class="list">
      <view v-for="item in list" :key="item.id" class="card" @tap="goto(item.id)">
        <image :src="item.cover" mode="aspectFill" class="cover" />
        <view class="body">
          <view class="row">
            <text class="title">{{ item.title }}</text>
            <text class="rating">★ {{ item.rating }}</text>
          </view>
          <text class="type">{{ item.type }} · 📍 {{ item.location }}</text>
          <view class="tags">
            <text v-for="t in item.tags" :key="t" class="tag">{{ t }}</text>
          </view>
          <view class="price-row">
            <text class="price">¥{{ item.price }}<text class="unit"> / 晚起</text></text>
            <text class="book">立即预订</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref, computed } from 'vue'
import { hotels } from '@/common/data.js'

const filters = ['全部', '度假酒店', '精品民宿', '商务酒店', '奢华酒店', '特色酒店']
const cur = ref('全部')
const list = computed(() => cur.value === '全部' ? hotels : hotels.filter(h => h.type === cur.value))
function goto (id) { uni.navigateTo({ url: '/pages/hotel/detail?id=' + id }) }
</script>

<style lang="scss">
page { background: #F3F4F6; }
.page { padding: 24rpx; }
.filter { display: flex; gap: 12rpx; margin-bottom: 24rpx; flex-wrap: wrap; }
.chip { padding: 10rpx 24rpx; background: #fff; border-radius: 999rpx; font-size: 24rpx; color: #6B7280; }
.chip.active { background: #1F2937; color: #fff; }
.card { background: #fff; border-radius: 20rpx; overflow: hidden; margin-bottom: 24rpx; box-shadow: 0 4rpx 12rpx rgba(0,0,0,.05); }
.cover { width: 100%; height: 320rpx; }
.body { padding: 24rpx; }
.row { display: flex; justify-content: space-between; align-items: center; }
.title { font-size: 30rpx; font-weight: 700; color: #1F2937; }
.rating { font-size: 24rpx; color: #F59E0B; }
.type { display: block; font-size: 22rpx; color: #6B7280; margin-top: 6rpx; }
.tags { display: flex; gap: 8rpx; margin: 12rpx 0; flex-wrap: wrap; }
.tag { background: #FCE7F3; color: #9D174D; font-size: 20rpx; padding: 4rpx 12rpx; border-radius: 6rpx; }
.price-row { display: flex; justify-content: space-between; align-items: center; margin-top: 8rpx; }
.price { color: #DC2626; font-size: 32rpx; font-weight: 700; }
.unit { font-size: 20rpx; color: #9CA3AF; font-weight: 400; }
.book { background: linear-gradient(135deg,#f472b6,#db2777); color: #fff; padding: 10rpx 24rpx; border-radius: 999rpx; font-size: 24rpx; font-weight: 700; }
</style>
