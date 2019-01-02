<template>
  <div class="search">
    <div class="inner">
      <div class="content">
        <i></i>
        <span class="police">搜索商品, 共19996款好物</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Search'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .search
    width: 100%
    height px2rem(88)
    background white
    position: fixed;
    z-index 50
    top: 0;
    left: 0;
    bottom-border-1px(#696969)
    .inner
      width: 100%
      background white
      box-sizing border-box
      padding 0 px2rem(30)
      position: relative;
      height px2rem(88)
      display flex
      align-items center
      position fixed
      .content
        width 100%
        justify-content: center;
        height: px2rem(56)
        font-size: px2rem(28)
        background-color: #ededed;
        border-radius: px2rem(12)
        display flex
        align-items: center
        .police
          font-size:px2rem(28)
          color: #666;
        i
          background url("../../assets/images/search.png")
          background-repeat no-repeat
          width px2rem(28)
          height px2rem(28)
          margin-right px2rem(10)
</style>
