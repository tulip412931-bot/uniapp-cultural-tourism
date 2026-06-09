<template>
  <view v-if="item" class="page">
    <image :src="item.cover" mode="aspectFill" class="hero" />
    <view class="card">
      <view class="price-row">
        <text class="price">¥{{ item.price }}</text>
        <text class="ori">¥{{ item.originalPrice }}</text>
        <text class="rating">★ {{ item.rating }} · 销量 {{ item.sold }}</text>
      </view>
      <text class="title">{{ item.title }}</text>
      <view class="tags">
        <text v-for="t in item.tags" :key="t" class="tag">{{ t }}</text>
      </view>
    </view>

    <view class="card">
      <text class="h2">商品描述</text>
      <text class="p">{{ item.desc }}</text>
    </view>

    <view class="card">
      <text class="h2">规格参数</text>
      <view v-for="(s, i) in item.spec" :key="i" class="tip-item">
        <text class="tip-dot">•</text><text class="tip-txt">{{ s }}</text>
      </view>
    </view>

    <view class="card">
      <text class="h2">购买数量</text>
      <view class="qty-row">
        <view class="qbtn" @tap="dec">-</view>
        <text class="qval">{{ qty }}</text>
        <view class="qbtn" @tap="inc">+</view>
        <text class="total">合计：<text class="total-v">¥{{ item.price * qty }}</text></text>
      </view>
    </view>

    <view class="footer">
      <view class="fav" @tap="toast('已收藏')">❤</view>
      <view class="cart" @tap="toast('已加入购物车')">加购物车</view>
      <view class="cta" @tap="toast('下单成功，商家将尽快发货')">立即购买</view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { cultural, findById } from '@/common/data.js'

const item = ref(null)
const qty = ref(1)
onLoad((q) => { item.value = findById(cultural, q.id) || cultural[0] })
function inc () { qty.value++ }
function dec () { if (qty.value > 1) qty.value-- }
function toast (title) { uni.showToast({ title, icon: 'none' }) }
</script>

<style lang="scss">
page { background: #F3F4F6; }
.page { padding-bottom: 140rpx; }
.hero { width: 100%; height: 540rpx; background: #fff; }
.card { background: #fff; margin: 24rpx; border-radius: 20rpx; padding: 28rpx; box-shadow: 0 4rpx 12rpx rgba(0,0,0,.04); }
.price-row { display: flex; align-items: flex-end; gap: 12rpx; }
.price { color: #DC2626; font-size: 44rpx; font-weight: 700; }
.ori { color: #9CA3AF; font-size: 22rpx; text-decoration: line-through; }
.rating { margin-left: auto; color: #9CA3AF; font-size: 22rpx; }
.title { display: block; font-size: 30rpx; color: #1F2937; line-height: 1.5; margin: 12rpx 0; }
.tags { display: flex; gap: 12rpx; flex-wrap: wrap; }
.tag { background: #FFFBEB; color: #B45309; font-size: 22rpx; padding: 6rpx 14rpx; border-radius: 6rpx; }
.h2 { display: block; font-size: 30rpx; font-weight: 700; color: #1F2937; margin-bottom: 16rpx; }
.p { font-size: 26rpx; color: #4B5563; line-height: 1.7; }
.tip-item { display: flex; gap: 12rpx; margin-bottom: 10rpx; }
.tip-dot { color: #D97706; }
.tip-txt { font-size: 26rpx; color: #4B5563; flex: 1; }

.qty-row { display: flex; align-items: center; gap: 20rpx; }
.qbtn { width: 60rpx; height: 60rpx; line-height: 56rpx; text-align: center; background: #F3F4F6; border-radius: 12rpx; font-size: 32rpx; color: #1F2937; }
.qval { font-size: 30rpx; font-weight: 700; color: #1F2937; min-width: 80rpx; text-align: center; }
.total { margin-left: auto; color: #6B7280; font-size: 24rpx; }
.total-v { color: #DC2626; font-size: 28rpx; font-weight: 700; }

.footer { position: fixed; left: 0; right: 0; bottom: 0; height: 110rpx; background: #fff; display: flex; align-items: center; padding: 0 24rpx; gap: 12rpx; box-shadow: 0 -4rpx 12rpx rgba(0,0,0,.04); }
.fav { width: 76rpx; height: 76rpx; line-height: 76rpx; text-align: center; border-radius: 50%; background: #F3F4F6; }
.cart { flex: 1; height: 76rpx; line-height: 76rpx; text-align: center; background: #FFFBEB; color: #B45309; font-weight: 700; border-radius: 999rpx; font-size: 26rpx; }
.cta { flex: 1; height: 76rpx; line-height: 76rpx; text-align: center; background: linear-gradient(135deg,#fbbf24,#d97706); color: #fff; font-weight: 700; border-radius: 999rpx; font-size: 28rpx; }
</style>
