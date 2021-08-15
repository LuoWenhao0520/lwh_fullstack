<template>
  <div>
    <div class="goods">
      <div class="menu-wrapper" ref="menuWrapper">
        <ul>
          <li class="menu-item" :class="{'current' : currentIndex === index}"
          @click="selectMenu(index)" 
          v-for="(item,index) in goods" :key="index">
            <span class="text">
              <support-ico v-if="item.type > -1" :size=3 :type="item.type"></support-ico>
              {{item.name}}
            </span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper" ref="foodsWrapper">
        <ul>
          <li class="food-list" v-for="(item,index) in goods" :key="index" ref="foodList">
            <h1 class="title">{{item.name}}</h1>
            <ul>
              <li class="food-item" v-for="(item_foods,index_foods) in item.foods" :key="index_foods">
                <div class="icon">
                  <img :src="item_foods.icon" alt="">
                </div>

                <div class="content">
                  <h2 class="name">{{item_foods.name}}</h2>
                  <p class="desc">{{item_foods.description}}</p>
                  <div class="extra">
                    <span class="count">月售{{item_foods.sellCount}}份</span>
                    <span>好评率{{item_foods.rating}}%</span>
                  </div>
                  <div class="price">
                    <span class="now">￥{{item_foods.price}}</span>
                    <span class="old" v-if="item_foods.oldPrice">￥{{item_foods.oldPrice}}</span>
                  </div>

                  <!-- + -->
                  <div class="cartcontrol-wrapper">
                    <CartControl :food="item_foods"></CartControl>
                  </div>

                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      

    </div>
    <shop-cart :selectFoods="selectFoods" :deliveryPrice="seller.deliveryPrice" :minPrice="seller.minPrice"></shop-cart>
  </div>
  
</template>

<script>
import { getGoods } from '@/api'
import BScroll from 'better-scroll'
import SupportIco from '@/components/support-ico/support-ico';
import ShopCart from '@/components/shop-cart/Shop-cart';
import CartControl from '@/components/cart-control/Cart-control';


export default {

  props: {
    seller: {
      type: Object
    }
  },

  data () {
    return {
      goods:[],
      listHeight: [],
      scrollY: 0
    }
  },

  computed: {
    currentIndex() {
      for(let i = 0;i < this.listHeight.length;i++){
        let height1 = this.listHeight[i];
        let height2 = this.listHeight[i + 1]
        if(!height2 || this.scrollY >= height1 && this.scrollY < height2){
          return i;
        }
      }
      return 0;
    },
    selectFoods() {
      let foods = []
      for(let good of this.goods) {
        if(good.foods) {
          for(let food of good.foods) {
            if(food.count) {
              foods.push(food)
            }
          }
        }
      }

      return foods
    }
  },

  methods: {
    selectMenu(idx) {
      let foodList = this.$refs.foodList
      let el = foodList[idx]
      this.foodsSCrool.scrollToElement(el,300)
    },
    _initScroll() {
      this.menuSCroll = new BScroll(this.$refs.menuWrapper,{
        click: true
      })

      this.foodsSCrool = new BScroll(this.$refs.foodsWrapper,{
        click: true,
        probeType: 3
      })

      this.foodsSCrool.on('scroll',pos => {
        this.scrollY = Math.abs(Math.round(pos.y))
      } )

      
    },

    _caculateHeight() {
      let foodList = this.$refs.foodList
      let height = 0
      this.listHeight.push(height)
      for(let i = 0;i < foodList.length;i++){
        let item = foodList[i]
        height += item.clientHeight
        this.listHeight.push(height)
      }
    }

  },

  components: {
    SupportIco,
    ShopCart,
    CartControl
  },

  created() {
    getGoods().then(res => {
      this.goods = res
      // console.log(res);
      this.$nextTick(() => { //只会在dom渲染完成之后执行
        this._initScroll();
        this._caculateHeight();
      })
    })
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/variable.styl'
.goods
  display flex
  position absolute
  top 176px
  bottom 46px
  width 100%
  overflow hidden
  .menu-wrapper
    flex 0 0 80px
    background #f3f5f7
    .menu-item
      display flex
      width 60px
      height 54px
      padding 0 10px
      line-height 14px
      align-items center
      font-size $fontsize-small
      // text-align center
      justify-content center
      &.current
        background-color #fff
        font-weight 700

  .foods-wrapper
    flex 1
    .title
      padding-left 14px
      height 26px
      line-height 26px
      border-left 2px solid #d9dde1
      font-size $fontsize-small
      color rgb(147,153,159)
      background $color-bgc-ssss

    .food-item
      position relative
      display flex
      margin 18px
      padding-bottom 18px
      &:last-child
        margin-bottom 0

      .icon
        flex 0 0 57px
        margin-right 10px
        img
          width 100%

      .content 
        flex 1
        .name 
          margin 2px 0 8px 0
          height 14px
          line-height 14px
          font-size 14px
          color rgb(7, 17, 27)
        .desc, .extra 
          line-height 10px
          font-size 10px
          color rgb(147, 153, 159)
        .desc 
          line-height 12px
          margin-bottom 8px
        .extra 
          .count 
            margin-right 12px
        .price 
          font-weight 700
          line-height 24px
          .now 
            margin-right 8px
            font-size 14px
            color rgb(240, 20, 20)
          .old 
            text-decoration line-through
            font-size 10px
            color rgb(147, 153, 159)
        .cartcontrol-wrapper
          position absolute
          right 0
          bottom 12px
</style>