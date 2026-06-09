<template>
  <view v-if="item" class="page">
    <view class="nav">
      <view class="nav-btn" @click="back">‹</view>
      <text class="nav-title">商品详情</text>
      <view class="nav-right">
        <view class="nav-btn" @click="onShare">⤴</view>
        <view class="nav-btn" @click="onMore">⋯</view>
      </view>
    </view>

    <!-- 顶图 -->
    <view class="hero-wrap">
      <swiper class="hero-swiper" :indicator-dots="false" :autoplay="true" :interval="4000" :circular="true" @change="onSwipe">
        <swiper-item v-for="(img, i) in heroImages" :key="i">
          <image class="hero-img" :src="img" mode="aspectFill" @click="previewImg(heroImages, i)" />
        </swiper-item>
      </swiper>
      <view class="indicator">{{ heroIndex + 1 }}/{{ heroImages.length }}</view>
    </view>

    <!-- 价格区 -->
    <view class="price-block">
      <text class="cur">¥{{ item.price }}</text>
      <text v-if="item.originalPrice" class="ori">¥{{ item.originalPrice }}</text>
      <text v-if="item.discount" class="discount">{{ item.discount }}</text>
    </view>

    <view class="head">
      <text class="title">{{ item.shortTitle || item.title }}</text>
      <view class="meta">
        <text>⭐ {{ item.rating }}</text>
        <text>热销{{ item.sold }}</text>
        <text v-for="(t, i) in item.tags" :key="i" class="tag" :class="tagClass(i)">{{ t }}</text>
        <text class="reviews-link" @click="onAllReviews">评价 {{ item.reviews }}</text>
      </view>
    </view>

    <!-- 优惠促销 -->
    <view class="promo" v-if="item.promo" @click="onPromo">
      <text class="p-tag">促销</text>
      <text class="p-txt">{{ item.promo }}</text>
    </view>

    <!-- 规格 -->
    <view class="row-info" @click="onSpec">
      <text class="ri-lbl">规格选择</text>
      <text class="ri-val">{{ selectedSpec || item.spec }}</text>
      <text class="ri-arr">›</text>
    </view>
    <view class="row-info" @click="onShipping">
      <text class="ri-lbl">配送信息</text>
      <text class="ri-val">{{ item.shipping }}</text>
      <text class="ri-arr">›</text>
    </view>
    <view class="row-info" v-if="item.guarantee && item.guarantee.length" @click="onGuarantee">
      <text class="ri-lbl">保障服务</text>
      <view class="ri-tags">
        <text class="g-tag" v-for="(g, i) in item.guarantee" :key="i">✓ {{ g }}</text>
      </view>
      <text class="ri-arr">›</text>
    </view>

    <!-- 商品详情 -->
    <view class="section">
      <view class="bh"><text class="bh-bar"></text><text class="bh-title">商品详情</text></view>
      <image v-for="(img, i) in (item.images || []).slice(0, 2)" :key="i" :src="img" class="d-img" mode="aspectFill" />
      <text class="sec-p" v-for="(p, i) in item.detail" :key="i">{{ p }}</text>
    </view>

    <!-- 用户评价 -->
    <view class="section" v-if="item.reviews_list && item.reviews_list.length">
      <view class="bh"><text class="bh-bar"></text><text class="bh-title">用户评价 ({{ item.reviews }})</text></view>
      <view class="rate-tabs">
        <text class="rt" v-for="(t, i) in rateTabs" :key="i" :class="{ active: i === activeRate }" @click="activeRate = i">{{ t }}</text>
        <text class="rt-rate">好评率98%</text>
      </view>
      <view class="review" v-for="(r, i) in item.reviews_list" :key="i">
        <view class="r-head">
          <image class="r-ava" :src="r.avatar" mode="aspectFill" />
          <view class="r-info">
            <text class="r-user">{{ r.user }}</text>
            <text class="r-stars">{{ '★'.repeat(r.rating) }}</text>
          </view>
          <text class="r-date">{{ r.date }}</text>
        </view>
        <text class="r-content">{{ r.content }}</text>
        <view v-if="r.images && r.images.length" class="r-imgs">
          <image v-for="(img, j) in r.images" :key="j" :src="img" class="r-imgi" mode="aspectFill" @click="previewImg(r.images, j)" />
        </view>
        <view class="r-foot">
          <text class="r-spec">规格：{{ r.spec }}</text>
          <text class="r-likes" @click="onReviewLike(r)">👍 {{ r.likes }}</text>
        </view>
      </view>
      <view class="all-reviews" @click="onAllReviews">查看全部{{ item.reviews }}条评价 ›</view>
    </view>

    <!-- 相关推荐 -->
    <view class="section">
      <view class="bh"><text class="bh-bar"></text><text class="bh-title">相关推荐</text></view>
      <view class="rec-grid">
        <view class="rec" v-for="r in related" :key="r.id" @click="goItem(r.id)">
          <image class="rec-img" :src="r.cover" mode="aspectFill" />
          <text class="rec-title">{{ r.shortTitle || r.title }}</text>
          <view class="rec-price">
            <text class="cur">¥{{ r.price }}</text>
            <text class="ori">¥{{ r.originalPrice }}</text>
          </view>
        </view>
      </view>
    </view>

    <!-- 底部 -->
    <view class="footer">
      <view class="f-ic" @click="goHome">🏠</view>
      <view class="f-ic" @click="goCart"><text>🛒</text><text class="cart-dot">{{ cartCount }}</text></view>
      <view class="f-ic" :class="{ faved }" @click="toggleFav">{{ faved ? '★' : '⭐' }}</view>
      <view class="f-add" @click="add">加入购物车</view>
      <view class="f-buy" @click="buy">立即购买</view>
    </view>
    <view style="height: 140rpx"></view>
  </view>
</template>

<script setup>
import { cultural, findById } from '@/common/data.js'
import { onLoad } from '@dcloudio/uni-app'
import { ref, computed } from 'vue'

const item = ref(null)
const heroIndex = ref(0)
const cartCount = ref(2)
const faved = ref(false)
const selectedSpec = ref('')
const activeRate = ref(0)
const rateTabs = computed(() => item.value ? [`全部(${item.value.reviews})`, '好评(5200)', '有图(1890)', '追评(320)'] : [])
const heroImages = computed(() => {
  if (!item.value) return []
  const imgs = item.value.images && item.value.images.length ? item.value.images : [item.value.cover]
  return imgs
})
const related = cultural.filter(c => c.id !== 'c1').slice(0, 2)

onLoad((q) => { item.value = findById(cultural, q.id) || cultural[0] })

function tagClass (i) { return ['t-orange', 't-blue', 't-green'][i % 3] }
function goItem (id) { uni.redirectTo({ url: `/pages/cultural/detail?id=${id}` }) }
function back () { uni.navigateBack({ fail: () => uni.reLaunch({ url: '/pages/cultural/list' }) }) }
function add () { cartCount.value += 1; uni.showToast({ title: '已加入购物车', icon: 'success' }) }
function buy () { uni.showToast({ title: '订单已生成（演示）', icon: 'success' }) }
function onSwipe (e) { heroIndex.value = e.detail.current }
function onShare () { uni.showActionSheet({ itemList: ['微信好友','朋友圈','复制链接'], success: () => uni.showToast({ title: '分享成功', icon: 'success' }) }) }
function onMore () { uni.showActionSheet({ itemList: ['举报','投诉','复制链接'], success: () => uni.showToast({ title: '操作成功', icon: 'none' }) }) }
function previewImg (urls, i) { uni.previewImage({ urls, current: urls[i] }) }
function onPromo () { uni.showToast({ title: item.value.promo, icon: 'none' }) }
function onSpec () {
  uni.showActionSheet({ itemList: ['标准装','礼盒装','尝鲜装','大礼包'], success: (e) => {
    selectedSpec.value = ['标准装','礼盒装','尝鲜装','大礼包'][e.tapIndex]
    uni.showToast({ title: `已选：${selectedSpec.value}`, icon: 'none' })
  } })
}
function onShipping () { uni.showToast({ title: item.value.shipping, icon: 'none' }) }
function onGuarantee () { uni.showToast({ title: `保障：${(item.value.guarantee || []).join('、')}`, icon: 'none' }) }
function onAllReviews () { uni.showToast({ title: `加载全部评价`, icon: 'none' }) }
function onReviewLike (r) { r.likes = (r.likes || 0) + 1; uni.showToast({ title: '已点赞', icon: 'none' }) }
function goHome () { uni.reLaunch({ url: '/pages/index/index' }) }
function goCart () { uni.showToast({ title: `购物车 ${cartCount.value} 件`, icon: 'none' }) }
function toggleFav () { faved.value = !faved.value; uni.showToast({ title: faved.value ? '已收藏' : '取消收藏', icon: 'none' }) }
</script>

<style lang="scss" scoped>
.page { background: #F3F4F6; min-height: 100vh; padding-top: env(safe-area-inset-top); }
.nav { display: flex; align-items: center; padding: 20rpx 24rpx; gap: 16rpx; background: #fff; }
.nav-btn { width: 56rpx; height: 56rpx; border-radius: 50%; background: #F3F4F6; display: flex; align-items: center; justify-content: center; font-size: 28rpx; color: #1F2937; }
.nav-title { flex: 1; text-align: center; font-size: 30rpx; font-weight: 700; color: #1F2937; }
.nav-right { display: flex; gap: 12rpx; }

.hero-wrap { position: relative; }
.hero-swiper { width: 100%; height: 600rpx; }
.hero-img { width: 100%; height: 600rpx; display: block; }
.indicator { position: absolute; bottom: 20rpx; right: 24rpx; background: rgba(0,0,0,.5); color: #fff; padding: 4rpx 14rpx; border-radius: 16rpx; font-size: 20rpx; }

.price-block { background: #fff; padding: 20rpx 24rpx; display: flex; align-items: baseline; gap: 12rpx; }
.cur { font-size: 40rpx; color: #DC2626; font-weight: 800; }
.ori { font-size: 22rpx; color: #9CA3AF; text-decoration: line-through; }
.discount { background: #FEF3C7; color: #DC2626; font-size: 20rpx; padding: 4rpx 12rpx; border-radius: 6rpx; }

.head { background: #fff; padding: 0 24rpx 20rpx; }
.title { display: block; font-size: 32rpx; color: #1F2937; font-weight: 700; line-height: 1.4; }
.meta { display: flex; gap: 12rpx; flex-wrap: wrap; align-items: center; margin-top: 12rpx; font-size: 22rpx; color: #6B7280; }
.tag { padding: 2rpx 10rpx; border-radius: 4rpx; font-size: 18rpx; }
.t-orange { background: #FFF7ED; color: #EA580C; }
.t-blue { background: #EFF6FF; color: #2563EB; }
.t-green { background: #ECFDF5; color: #059669; }
.reviews-link { color: #2563EB; margin-left: auto; }

.promo { background: #fff; padding: 16rpx 24rpx; margin-top: 16rpx; display: flex; align-items: center; gap: 12rpx; }
.p-tag { background: #DC2626; color: #fff; font-size: 20rpx; padding: 2rpx 12rpx; border-radius: 4rpx; }
.p-txt { font-size: 22rpx; color: #4B5563; }

.row-info { display: flex; align-items: center; gap: 16rpx; background: #fff; padding: 20rpx 24rpx; border-top: 2rpx solid #F3F4F6; }
.ri-lbl { font-size: 24rpx; color: #6B7280; min-width: 130rpx; }
.ri-val { flex: 1; font-size: 24rpx; color: #1F2937; }
.ri-tags { flex: 1; display: flex; gap: 12rpx; }
.g-tag { font-size: 20rpx; color: #059669; }
.ri-arr { color: #9CA3AF; }

.section { background: #fff; padding: 20rpx 24rpx; margin-top: 16rpx; }
.bh { display: flex; align-items: center; gap: 12rpx; margin-bottom: 16rpx; }
.bh-bar { width: 8rpx; height: 28rpx; background: #DC2626; border-radius: 4rpx; }
.bh-title { font-size: 30rpx; font-weight: 800; color: #1F2937; }

.d-img { width: 100%; height: 400rpx; border-radius: 12rpx; margin-bottom: 12rpx; }
.sec-p { display: block; font-size: 24rpx; color: #4B5563; line-height: 1.6; margin-bottom: 12rpx; }

.rate-tabs { display: flex; gap: 12rpx; flex-wrap: wrap; align-items: center; margin-bottom: 16rpx; }
.rt { padding: 6rpx 16rpx; background: #F3F4F6; color: #6B7280; font-size: 20rpx; border-radius: 6rpx; }
.rt.active { background: #DBEAFE; color: #2563EB; }
.rt-rate { margin-left: auto; font-size: 20rpx; color: #059669; }

.review { padding: 16rpx 0; border-bottom: 2rpx solid #F3F4F6; }
.r-head { display: flex; align-items: center; gap: 12rpx; margin-bottom: 12rpx; }
.r-ava { width: 56rpx; height: 56rpx; border-radius: 50%; }
.r-info { flex: 1; }
.r-user { display: block; font-size: 24rpx; color: #1F2937; font-weight: 600; }
.r-stars { font-size: 22rpx; color: #F59E0B; }
.r-date { font-size: 20rpx; color: #9CA3AF; }
.r-content { display: block; font-size: 24rpx; color: #4B5563; line-height: 1.6; }
.r-imgs { display: flex; gap: 8rpx; margin: 12rpx 0; }
.r-imgi { width: 140rpx; height: 140rpx; border-radius: 8rpx; }
.r-foot { display: flex; justify-content: space-between; font-size: 20rpx; color: #6B7280; }
.all-reviews { text-align: center; padding: 16rpx; background: #F9FAFB; color: #2563EB; font-size: 22rpx; border-radius: 8rpx; margin-top: 12rpx; }

.rec-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16rpx; }
.rec { background: #F9FAFB; border-radius: 12rpx; overflow: hidden; padding-bottom: 12rpx; }
.rec-img { width: 100%; height: 200rpx; display: block; }
.rec-title { display: block; font-size: 22rpx; color: #1F2937; padding: 8rpx 12rpx 4rpx; line-height: 1.4; }
.rec-price { display: flex; gap: 8rpx; align-items: baseline; padding: 0 12rpx; }
.rec-price .cur { font-size: 26rpx; color: #DC2626; font-weight: 800; }
.rec-price .ori { font-size: 18rpx; color: #9CA3AF; text-decoration: line-through; }

.footer { position: fixed; left: 0; right: 0; bottom: 0; background: #fff; padding: 16rpx 24rpx env(safe-area-inset-bottom); display: flex; align-items: center; gap: 12rpx; box-shadow: 0 -4rpx 16rpx rgba(0,0,0,.04); }
.f-ic { width: 64rpx; height: 64rpx; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 28rpx; color: #4B5563; position: relative; }
.f-ic.faved { color: #F59E0B; }
.cart-dot { position: absolute; top: -4rpx; right: -4rpx; background: #DC2626; color: #fff; font-size: 16rpx; border-radius: 16rpx; min-width: 28rpx; height: 28rpx; line-height: 28rpx; text-align: center; padding: 0 6rpx; }
.f-add { flex: 1; background: #F59E0B; color: #fff; text-align: center; padding: 20rpx; border-radius: 40rpx; font-size: 26rpx; font-weight: 700; }
.f-buy { flex: 1; background: #DC2626; color: #fff; text-align: center; padding: 20rpx; border-radius: 40rpx; font-size: 26rpx; font-weight: 700; }
</style>
