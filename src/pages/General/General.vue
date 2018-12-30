<template>
    <div>
      <GeneralHeader/>
      <div class="nav">
        <a href="javascript:;">推荐</a>
        <a href="javascript:;">达人</a>
        <a href="javascript:;">上新</a>
        <a href="javascript:;">晒单</a>
        <a href="javascript:;">HOME</a>
      </div>
    </div>
</template>

<script>
  import GeneralHeader from '../../components/Generalheader/Generalheader'
  export default {
    name: 'General',
    components:{
      GeneralHeader
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .nav
    width px2rem(375)
    height px2rem(36)
    background aqua
</style>
