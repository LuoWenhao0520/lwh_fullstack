<template>
  <div>
    <div class="shop-cart">
      <div class="content">
        <div class="content-left">
          <div class="logo-wrapper">
            <div class="logo" :class="{'highlight': totalCount > 0}">
              <i class="icon-shopping_cart" :class="{'highlight': totalCount > 0}"></i>
            </div>
            <div class="num">{{totalCount}}</div>
          </div>
          <div class="price" :class="{'highlight': totalCount > 0}">￥{{totalPrice}}</div>
          <div class="desc">另需配送费￥{{deliveryPrice}}元</div>
        </div>

        <div class="content-right">
          <div class="pay" v-show="totalPrice < minPrice">
            {{totalCount > 0 ? '还差' : ''}}{{minPrice - totalPrice}}元起送
          </div>
          <div class="pay enough" v-show="totalPrice >= minPrice">
            去结算
          </div>
        </div>                            
      </div>

      <!-- 列表 -->
      <transition name="fold">
        <div class="shopcart-list">
          <div class="list-header">
            <h1 class="title">购物车</h1>
            <span class="empty">清空</span>
          </div>
          <div class="list-content">
            <ul>
              <li class="food">
                <span class="name">南瓜粥</span>
                <div class="price">
                  <span>￥10</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selectFoods: {
      type: Array,
      default() {
        return []
      }
    },
    deliveryPrice: {
      type: Number,
      default: 0
    },
    minPrice: {
      type: Number,
      default: 0
    }
  },
  computed: {
    totalCount() {
      let count = 0;
      this.selectFoods.forEach((food) => {
        count += food.count;
      })

      return count;
    },
    totalPrice() {
      let tot = 0;
      this.selectFoods.forEach((food) => {
        tot += food.count * food.price
      })

      return tot;
    }
  }
}
</script>

<style lang="stylus">
@import '../../common/stylus/variable.styl';

.shop-cart
  position fixed
  left 0
  bottom 0
  z-index 50
  height 48px
  width 100%
  .content
    display flex
    background-color $color-bgc
    color $color-light-grey
    &-left
      flex 1
      .logo-wrapper
        top -10px
        margin 0 12px
        display inline-block
        position relative
        padding 6px
        width 56px
        height 56px
        border-radius 50%
        box-sizing border-box
        background #141d27
        vertical-align middle
        .logo
          width 100%
          height 100%
          background $color-dart-grey
          border-radius 50%
          text-align center
          &.highlight
            background $color-blue
          .icon-shopping_cart
            line-height 44px
            font-size $fontsize-large-xxx
            color #80858a
            &.highlight
              color white
        .num
          position absolute
          top 0
          right 0
          width 24px
          height 16px
          line-height 16px
          text-align center
          border-radius 16px
          font-size $fontsize-small-s
          font-weight bold
          color $color-white
          background $color-red

      .price
        display inline-block
        line-height 48px
        padding-right 12px
        border-right 1px solid rgba(255,255,255,.1)
        font-size $fontsize-large
        font-weight 700
        &.highlight
          color $color-white

      .desc
        display inline-block
        line-height 48px
        font-size $fontsize-small-s
    .content-right
      flex 0 0 105px
      width: 105px;
      .pay
        height: 48px;
        line-height: 48px;
        text-align: center;
        font-size: $fontsize-small;
        font-weight 700
        background #2b332b
        &.enough
          background $color-green
          color $color-white
  .shopcart-list
    position absolute
    left 0
    bottom 0
    width 100%
    transform translate3d(0,-100%,0)
    &.fold-enter-active, &.fold-leave-active
      transition all .5s

    &.fold-enter, &.fold-leave-to
      transform translate3d(0,0,0)

    .list-header
      display flex
      justify-content space-between
      padding 0 18px
      align-items center
      height 40px
      line-height 40px
      border-bottom 1px solid $color-bgc-sss
      background $color-bgc-ssss
      .title
        font-size $fontsize-medium
        color $color-bgc
      .empty
        font-size $fontsize-small
        color $color-blue
      

</style>