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
      <HomeContent/>
      <div class="other">
        <header>
          <p>床品件套</p>
          <p>MUJI等品牌制造商出品</p>
        </header>
        <ul>
          <li>
            <a href="javascript:;">
              <div class="pic">
                <img src="http://yanxuan.nosdn.127.net/8635c42f2b3a92768b12015c491821b5.png?imageView&quality=65&thumbnail=330x330" alt="1111">
                <p>400根纯棉贡缎，入门奢享高阶柔滑</p>
              </div>
              <div class="text">60s锦眠贡缎四件套</div>
              <div class="price">￥649</div>
              <div class="new">
                <span>新品</span>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <div class="pic">
                <img src="http://yanxuan.nosdn.127.net/8635c42f2b3a92768b12015c491821b5.png?imageView&quality=65&thumbnail=330x330" alt="1111">
                <p>400根纯棉贡缎，入门奢享高阶柔滑</p>
              </div>
              <div class="text">60s锦眠贡缎四件套</div>
              <div class="price">￥649</div>
              <div class="new">
                <span>新品</span>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <div class="pic">
                <img src="http://yanxuan.nosdn.127.net/8635c42f2b3a92768b12015c491821b5.png?imageView&quality=65&thumbnail=330x330" alt="1111">
                <p>400根纯棉贡缎，入门奢享高阶柔滑</p>
              </div>
              <div class="text">60s锦眠贡缎四件套</div>
              <div class="price">￥649</div>
              <div class="new">
                <span>新品</span>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <div class="pic">
                <img src="http://yanxuan.nosdn.127.net/8635c42f2b3a92768b12015c491821b5.png?imageView&quality=65&thumbnail=330x330" alt="1111">
                <p>400根纯棉贡缎，入门奢享高阶柔滑</p>
              </div>
              <div class="text">60s锦眠贡缎四件套</div>
              <div class="price">￥649</div>
              <div class="new">
                <span>新品</span>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <div class="pic">
                <img src="http://yanxuan.nosdn.127.net/8635c42f2b3a92768b12015c491821b5.png?imageView&quality=65&thumbnail=330x330" alt="1111">
                <p>400根纯棉贡缎，入门奢享高阶柔滑</p>
              </div>
              <div class="text">60s锦眠贡缎四件套</div>
              <div class="price">￥649</div>
              <div class="new">
                <span>新品</span>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <div class="pic">
                <img src="http://yanxuan.nosdn.127.net/8635c42f2b3a92768b12015c491821b5.png?imageView&quality=65&thumbnail=330x330" alt="1111">
                <p>400根纯棉贡缎，入门奢享高阶柔滑</p>
              </div>
              <div class="text">60s锦眠贡缎四件套</div>
              <div class="price">￥649</div>
              <div class="new">
                <span>新品</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="copyright">
        <div class="content">
          <div class="bd">
            <a href="javascript:;" >下载APP</a>
            <a href="javascript:;">电脑版</a>
          </div>
          <p class="desc">
            <span>网易公司版权所有 © 1997-2018</span>
            <br>
            <span>食品经营许可证：JY13301080111719</span>
          </p>
        </div>
      </div>
    </div>
    <GoTop/>
</div>
</template>

<script>
  import Home_header from '../../components/Home_Header/Home_Header'
  import Banner from '../../components/Banner/Banner'
  import List from '../../components/List/List'
  import Split from '../../components/Split/Split'
  import HomeContent from '../../components/Home_Content/Home_Content'
  import GoTop from '../../components/GoTop/index'
  export default {
    components:{
      Split,
      Home_header,
      Banner,
      List,
      HomeContent,
      GoTop
    },
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

    .copyright
      width 100%
      height px2rem(265)
      background #414141;
      margin-bottom 100px
      .content
        box-sizing border-box
        width 100%
        height 100%
        text-align: center;
        padding:px2rem(54) px2rem(20) px2rem(28) px2rem(20)
        .bd
          width 100%
          height px2rem(63)
          /*background blue*/
          a
            height px2rem(60)
            width px2rem(170)
            display inline-block
            font-size 25px
            color white
            border 1px solid white
            line-height px2rem(60)
        .desc
          width 100%
          height px2rem(84)
          margin-top px2rem(36)
          /*background red*/
          span
            font-size px2rem(25)
            color: #999;
    .other
      height px2rem(1900)
      width px2rem(750)
      header
        height px2rem(120)
        width px2rem(750)
        p
          &:nth-child(1)
            height px2rem(42)
            width px2rem(750)
            font-size px2rem(30)
            text-align center
            line-height px2rem(42)
            color #333
          &:nth-child(2)
            height px2rem(32)
            width px2rem(750)
            font-size px2rem(20)
            margin-top px2rem(26)
            text-align center
            line-height px2rem(32)
            color #ccc

      ul
        height px2rem(1900)
        width px2rem(750)
        li
          height px2rem(562)
          width px2rem(375)
          float left
          box-sizing border-box
          padding 0 px2rem(10) px2rem(30) px2rem(20)
          .pic
            height px2rem(390)
            width px2rem(345)
            background antiquewhite
            img
              height px2rem(345)
              width px2rem(345)
            p
              height px2rem(48)
              width px2rem(345)
              font-size px2rem(28)
              ellipsis()
              box-sizing border-box
              padding px2rem(6) px2rem(10)
              color #333
          .text
            width px2rem(345)
            height px2rem(36)
            color #333
            font-size px2rem(28)
            margin-top px2rem(16)
            margin-left 2px
          .price
            width px2rem(345)
            height px2rem(36)
            color red
            font-size px2rem(30)
            margin-top px2rem(16)
            margin-left 2px
          .new
            width px2rem(345)
            height px2rem(36)
            span
              color red
              font-size px2rem(25)
              margin-top px2rem(16)
              margin-left 2px
              border 1px solid red
              text-align center

</style>
