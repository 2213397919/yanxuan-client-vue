<template>
  <footer class="footer">
    <nav>
      <a href="javascript:;" class="item" @click="goto('/home')" :class="{active: $route.path === '/home'}" >
        <i class="iconfont icon-shouye2"></i>
        <span>首页</span>
      </a>
      <a href="javascript:;" class="item" @click="goto('/general')" :class="{active: $route.path === '/general'}">
        <i class="iconfont icon-fangkuai"></i>
        <span>识物</span>
      </a>
      <a href="javascript:;" class="item" @click="goto('/category')" :class="{active: $route.path === '/category'}">
        <i class="iconfont icon-fenlei"></i>
        <span>分类</span>
      </a>
      <a href="javascript:;" class="item" @click="goto('/shopping')" :class="{active: $route.path === '/shopping'}">
        <i class="iconfont icon-gouwuchekong"></i>
        <span>购物车</span>
      </a>
      <a href="javascript:;" class="item" @click="goto('/profile')" :class="{active: $route.path === '/profile'}">
        <i class="iconfont icon-icon-"></i>
        <span>个人</span>
      </a>
    </nav>
  </footer>
</template>

<script>
  export default {
    methods: {
      goto (path) {
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  @import '../../common/stylus/mixins.styl'
  .footer
    position fixed
    z-index 5
    left 0
    right 0
    bottom 0
    height px2rem(100)
    background-color #fafafa
    border-top 1px solid #d9d9d9
    nav
      display flex
      flex-direction row
      justify-content space-around
      font-size px2rem(24)
      .item
        position relative
        text-align center
        color #666666
        i
          display block
          font-size px2rem(42)
          padding-top px2rem(16)
        span
          display block
          margin-top px2rem(10)
        &.active
          color $main

</style>
