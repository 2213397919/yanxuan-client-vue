<template>
 <footer class="footer">
     <a href="javascript:;" class="footer-item" :class="{on: $route.path === '/home'}" @click="goto('/home')">
       <span><i class="iconfont icon-shouye2"></i></span>
       <span class="font">首页</span>
     </a>
     <a href="javascript:;" class="footer-item" :class="{on: $route.path === '/category'}" @click="goto('/category')">
       <span><i class="iconfont icon-fenlei"></i></span>
       <span class="font">分类</span>
     </a>
     <a href="javascript:;" class="footer-item" :class="{on: $route.path === '/general'}" @click="goto('/general')">
       <span><i class="iconfont icon-fangkuai"></i></span>
       <span class="font">识物</span>
     </a>
     <a href="javascript:;" class="footer-item" :class="{on: $route.path === '/shopping'}" @click="goto('/shopping')">
       <span><i class="iconfont icon-gouwuchekong"></i></span>
       <span class="font">购物车</span>
     </a>
     <a href="javascript:;" class="footer-item" :class="{on: $route.path === '/profile'}" @click="goto('/profile')">
       <span><i class="iconfont icon-icon-"></i></span>
       <span class="font">个人</span>
     </a>
 </footer>
</template>

<script>
  export default {
    methods: {
      goto(path){
        this.$router.replace(path);
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../../static/stylus/mixin.styl"
  .footer
    top-border-1px(#e4e4e4)
    position fixed
    bottom 0
    left 0
    right 0
    width 100%
    height 50px
    background-color #fafafa
    display flex
    .footer-item
     display flex
     float left
     flex 1
     flex-direction column
     align-items center
     margin-top 5px
     color #666666
     span
       margin-top 2px
       margin-bottom 2px
       .iconfont
         font-size 22px
     &.on
       color red
     .font
       font-size 12px
</style>
