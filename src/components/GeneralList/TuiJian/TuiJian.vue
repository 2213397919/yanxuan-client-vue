<template>
    <div class="tuijian">
      <a href="javascript:;">
        <div class="top">
          <span><img/></span>
          <span></span>
        </div>
        <div class="middle"></div>
        <div class="bottom">
          <img/>
        </div>
      </a>
    </div>
</template>
<script>
  import Split from '../../Split/Split'
  export default {
    name: 'TuiJian'
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  .tuijian
     width px2rem(750)
     height px2rem(660)
     background aqua
</style>
