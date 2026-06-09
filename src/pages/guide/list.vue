<template>
  <view class="page">
    <view class="filter">
      <view v-for="t in tags" :key="t" class="chip" :class="{ active: cur === t }" @tap="cur = t">#{{ t }}</view>
    </view>
    <view class="list">
      <view v-for="item in list" :key="item.id" class="card" @tap="goto(item.id)">
        <image :src="item.cover" mode="aspectFill" class="cover" />
        <view class="body">
          <text class="title">{{ item.title }}</text>
          <text class="summary">{{ item.summary }}</text>
          <view class="author-row">
            <image :src="item.avatar" mode="aspectFill" class="avatar" />
            <text class="author">{{ item.author }}</text>
            <text class="meta">👁 {{ item.views }} · ♥ {{ item.likes }}</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref, computed } from 'vue'
import { guides } from '@/common/data.js'

const tags = ['全部', '深度游', '慢生活', '首刷', 'City Walk', '亲子', '摄影', '人文', '美食', '周末']
const cur = ref('全部')
const list = computed(() => cur.value === '全部' ? guides : guides.filter(g => g.tags.includes(cur.value)))
function goto (id) { uni.navigateTo({ url: '/pages/guide/detail?id=' + id }) }
</script>

<style lang="scss">
page { background: #F3F4F6; }
.page { padding: 24rpx; }
.filter { display: flex; gap: 12rpx; margin-bottom: 24rpx; flex-wrap: wrap; }
.chip { padding: 10rpx 20rpx; background: #fff; border-radius: 999rpx; font-size: 22rpx; color: #6B7280; }
.chip.active { background: linear-gradient(135deg,#a78bfa,#7c3aed); color: #fff; }
.card { background: #fff; border-radius: 20rpx; overflow: hidden; margin-bottom: 24rpx; box-shadow: 0 4rpx 12rpx rgba(0,0,0,.05); }
.cover { width: 100%; height: 320rpx; }
.body { padding: 24rpx; }
.title { display: block; font-size: 30rpx; font-weight: 700; color: #1F2937; line-height: 1.5; }
.summary { display: block; font-size: 24rpx; color: #6B7280; margin-top: 12rpx; line-height: 1.6; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.author-row { display: flex; align-items: center; gap: 12rpx; margin-top: 18rpx; }
.avatar { width: 48rpx; height: 48rpx; border-radius: 50%; }
.author { font-size: 24rpx; color: #4B5563; }
.meta { margin-left: auto; font-size: 22rpx; color: #9CA3AF; }
</style>
