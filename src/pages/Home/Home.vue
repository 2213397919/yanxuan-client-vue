<template>
<div class="wrap">
    <Home_header/>
    <div class="content">
      <Banner></Banner>
      <div class="policy ">
        <ul class="grow">
          <li class="item">
            <a href="javascript:;">
              <i></i>
              <span>网易自营品牌</span>
            </a>
          </li>
          <li class="item">
            <a href="javascript:;">
              <i></i>
              <span>30天无忧退货</span>
            </a>
          </li>
          <li class="item">
            <a href="javascript:;">
              <i></i>
              <span>48小时快速退款</span>
            </a>
          </li>
        </ul>
      </div>
      <List/>
      <Split/>
      <div class="xinren">
        <p>-新人专享礼-</p>
        <div class="xinren1">
          <a href="javascript:;">
            <span>新人专享礼</span>
            <img src="//yanxuan.nosdn.127.net/a020bed0783956f650abc016e386bead.png">
          </a>
          <a href="javascript">
            <div class="left">
              <span class="one">福利社</span>
              <span class="two">今日特价</span>
            </div>
            <div class="right">
              <img src="http://yanxuan.nosdn.127.net/d50517d5b6d49c2d571cde37fdb54841.png?imageView&thumbnail=200x200&quality=75"/>
            </div>
          </a>
          <a href="javascript">
            <div class="left">
              <span class="one">新人拼团</span>
              <span class="two">1元起包邮</span>
            </div>
            <div class="right">
              <img src="http://yanxuan.nosdn.127.net/d8d2a808ae9abdcdc337f521df0254ef.png?imageView&thumbnail=200x200&quality=75"/>
            </div>
          </a>
        </div>
      </div>
      <Split/>
    </div>
</div>
</template>

<script>
  import Home_header from '../../components/Home_Header/Home_Header'
  import Banner from '../../components/Banner/Banner'
  import List from '../../components/List/List'
  import Split from '../../components/Split/Split'
  // import BScroll from 'better-scroll'
  export default {
    components:{
      Split,
      Home_header,
      Banner,
      List
    },
    // mounted(){
    //   this.$nextTick(()=>{
    //     new BScroll('.content',{
    //       click:true,
    //       scrollY:true
    //     })
    //   })
    // }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .wrap
    .policy
      width 100%
      height px2rem(72)
      background: #fff;
      .grow
        width 100%
        height px2rem(72)
        box-sizing border-box
        padding 0 px2rem(30)
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        .item
          flex: 1;
          float: left;
          a
            height 100%
            i
              background-image url(http://yanxuan.nosdn.127.net/cae45612b8aae577d8bd73338e2fc02c.png);
              display: inline-block;
              vertical-align: middle;
              background-repeat: no-repeat;
              background-size: 100% 100%;
              width: px2rem(32)
              height:  px2rem(32)
            span
              font-size: px2rem(25)
              color: #333;
              display: inline-block;
              vertical-align: middle;
    .xinren
       width px2rem(750)
       height px2rem(558)
       background antiquewhite
       p
         width px2rem(690)
         height px2rem(90)
         line-height px2rem(90)
         text-align center
         padding 0 px2rem(30)
         font-size  px2rem(40)
       .xinren1
         width px2rem(720)
         height px2rem(438)
         padding-left px2rem(30)
         a
           &:nth-child(1)
            width px2rem(343)
            height px2rem(434)
            background #F9E9CF
            float left
            span
              width px2rem(313)
              height px2rem(47)
              font-size  px2rem(30)
              margin-left px2rem(100)
              color #333
            img
              width px2rem(258)
              height px2rem(257)
              margin px2rem(37) px2rem(42)
           &:nth-child(2)
             float right
             width px2rem(343)
             height px2rem(215)
             background #FBE2D3
             .left
               width px2rem(110)
               height px2rem(215)
               margin-left px2rem(20)
               float left
               .one
                 width px2rem(110)
                 height px2rem(50)
                 font-size px2rem(30)
                 color #333
               .two
                 width px2rem(110)
                 height px2rem(50)
                 font-size px2rem(20)
                 color #ccc
             .right
               width px2rem(200)
               height px2rem(215)
               float right
           &:nth-child(3)
             float right
             width px2rem(343)
             height px2rem(215)
             background #FFECC2
             .left
               width px2rem(110)
               height px2rem(215)
               margin-left px2rem(20)
               float left
               .one
                 width px2rem(110)
                 height px2rem(50)
                 font-size px2rem(25)
                 color #333
               .two
                 width px2rem(110)
                 height px2rem(50)
                 font-size px2rem(20)
                 color #ccc
             .right
               width px2rem(200)
               height px2rem(215)
               float right

</style>
