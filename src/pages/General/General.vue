<template>
    <div class="general">
      <GeneralHeader/>
      <div class="nav">
        <a href="javascript:;" class="active">推荐</a>
        <a href="javascript:;">达人</a>
        <a href="javascript:;">上新</a>
        <a href="javascript:;">晒单</a>
        <a href="javascript:;">HOME</a>
      </div>
      <Split/>
      <TuiJian/>
    </div>
</template>

<script>
  import GeneralHeader from '../../components/Generalheader/Generalheader'
  import Split from '../../components/Split/Split'
  import TuiJian from '../../components/GeneralList/TuiJian/TuiJian'
  export default {
    name: 'General',
    components:{
      Split,
      GeneralHeader,
      TuiJian
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .general
    .nav
      top-border-1px(#eee)
      width px2rem(750)
      height px2rem(50)
      margin-top px2rem(90)
      display flex
      a
        color #7F7F7F
        line-height px2rem(50)
        width px2rem(36)
        text-align center
        font-size px2rem(28)
        box-sizing border-box
        padding 0 px2rem(15)
        display flex
        flex 1
        justify-content center
        &.active
           border-bottom 2px solid red
           font-size px2rem(32)
        &:first-child
          margin-left 25px

</style>
