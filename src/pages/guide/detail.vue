<template>
  <view v-if="item" class="page">
    <image :src="item.cover" mode="aspectFill" class="hero" />
    <view class="card">
      <text class="title">{{ item.title }}</text>
      <view class="author-row">
        <image :src="item.avatar" mode="aspectFill" class="avatar" />
        <view class="author-info">
          <text class="author">{{ item.author }}</text>
          <text class="meta">👁 {{ item.views }} · ♥ {{ item.likes }}</text>
        </view>
        <view class="follow" @tap="toast('已关注 ' + item.author)">+ 关注</view>
      </view>
      <view class="tags">
        <text v-for="t in item.tags" :key="t" class="tag">#{{ t }}</text>
      </view>
    </view>

    <view class="card">
      <text class="h2">攻略概述</text>
      <text class="p">{{ item.summary }}</text>
    </view>

    <view class="card">
      <text class="h2">详细行程</text>
      <view v-for="(line, i) in item.content" :key="i" class="line">
        <text class="line-no">{{ i + 1 }}</text>
        <text class="line-txt">{{ line }}</text>
      </view>
    </view>

    <view class="actions">
      <view class="act" @tap="liked = !liked; toast(liked ? '已点赞' : '已取消')">
        <text>{{ liked ? '❤️' : '🤍' }} 点赞</text>
      </view>
      <view class="act" @tap="toast('已收藏到我的攻略')">⭐ 收藏</view>
      <view class="act" @tap="toast('已复制分享链接')">↗️ 分享</view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { guides, findById } from '@/common/data.js'

const item = ref(null)
const liked = ref(false)
onLoad((q) => { item.value = findById(guides, q.id) || guides[0] })
function toast (title) { uni.showToast({ title, icon: 'none' }) }
</script>

<style lang="scss">
page { background: #F3F4F6; }
.page { padding-bottom: 60rpx; }
.hero { width: 100%; height: 420rpx; }
.card { background: #fff; margin: 24rpx; border-radius: 20rpx; padding: 28rpx; box-shadow: 0 4rpx 12rpx rgba(0,0,0,.04); }
.title { display: block; font-size: 36rpx; font-weight: 700; color: #1F2937; line-height: 1.5; }
.author-row { display: flex; align-items: center; gap: 16rpx; margin-top: 20rpx; }
.avatar { width: 72rpx; height: 72rpx; border-radius: 50%; }
.author-info { display: flex; flex-direction: column; }
.author { font-size: 26rpx; color: #1F2937; font-weight: 700; }
.meta { font-size: 22rpx; color: #9CA3AF; margin-top: 4rpx; }
.follow { margin-left: auto; padding: 10rpx 24rpx; background: linear-gradient(135deg,#a78bfa,#7c3aed); color: #fff; border-radius: 999rpx; font-size: 22rpx; font-weight: 700; }
.tags { display: flex; gap: 12rpx; margin-top: 18rpx; flex-wrap: wrap; }
.tag { color: #7c3aed; font-size: 24rpx; }
.h2 { display: block; font-size: 30rpx; font-weight: 700; color: #1F2937; margin-bottom: 16rpx; }
.p { font-size: 26rpx; color: #4B5563; line-height: 1.7; }
.line { display: flex; gap: 16rpx; margin-bottom: 18rpx; }
.line-no { width: 40rpx; height: 40rpx; line-height: 40rpx; text-align: center; background: linear-gradient(135deg,#a78bfa,#7c3aed); color: #fff; border-radius: 50%; font-size: 22rpx; font-weight: 700; flex-shrink: 0; }
.line-txt { font-size: 26rpx; color: #4B5563; line-height: 1.7; flex: 1; }
.actions { display: flex; gap: 16rpx; margin: 24rpx; }
.act { flex: 1; height: 80rpx; line-height: 80rpx; text-align: center; background: #fff; border-radius: 16rpx; font-size: 26rpx; color: #1F2937; }
</style>
