<template>
  <div>
    <div class="content">
      <div class="titles">
        <div class="title">人气推荐</div>
        <a>更多></a>
      </div>
      <a class="middle">
        <div class="pic">
          <img src="http://yanxuan.nosdn.127.net/835612e5c90c335ad6977f84d34f8d23.png?imageView&quality=65&thumbnail=280x280"/>
        </div>
        <div class="word">
          <div class="word1">
            <span>日用百货</span>
          </div>
          <div class="name">全净皓齿变速式声波电动牙刷</div>
          <div class="desc">999+好评爆款，洁齿又护龈</div>
          <div class="price">￥179</div>
        </div>
      </a>
      <div class="bottom">
        <ul>
          <li>
            <a class="pic2">
              <div class="pic3"><img src="http://yanxuan.nosdn.127.net/f6aa96e6fa8144d997772877e15ae92a.png?imageView&quality=65&thumbnail=330x330"/></div>
              <div class="word2">秋冬保暖加厚澳洲羊毛被<span>￥417</span></div>
              <div class="word3"><span>限时购</span></div>
            </a>
          </li>
          <li>
            <a class="pic2">
              <div class="pic3"><img src="http://yanxuan.nosdn.127.net/f6aa96e6fa8144d997772877e15ae92a.png?imageView&quality=65&thumbnail=330x330"/></div>
              <div class="word2">秋冬保暖加厚澳洲羊毛被<span>￥417</span></div>
              <div class="word3"><span>限时购</span></div>
            </a>
          </li>
          <li>
            <a class="pic2">
              <div class="pic3"><img src="http://yanxuan.nosdn.127.net/f6aa96e6fa8144d997772877e15ae92a.png?imageView&quality=65&thumbnail=330x330"/></div>
              <div class="word2">秋冬保暖加厚澳洲羊毛被<span>￥417</span></div>
              <div class="word3"><span>限时购</span></div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <split/>
  </div>
</template>

<script>
  import Split from '../Split/Split'
  export default {
    name: 'Home_Content',
    components: {Split}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .content
    width px2rem(750)
    height px2rem(782)
    box-sizing border-box
    padding-bottom px2rem(30)
    .titles
      width px2rem(690)
      height px2rem(100)
      padding 0 px2rem(30)
      .title
        width px2rem(148)
        height px2rem(100)
        font-size px2rem(35)
        color #333
        float left
        line-height px2rem(100)
      a
        width px2rem(100)
        height px2rem(100)
        float right
        font-size px2rem(30)
        color #333
        line-height px2rem(100)
    .middle
      width px2rem(690)
      height px2rem(280)
      display block
      margin 0 px2rem(30) px2rem(20) px2rem(30)
      background #FEF0DF
      .pic
        width px2rem(280)
        height px2rem(280)
        margin-right px2rem(30)
        float left
      .word
        width px2rem(350)
        height px2rem(160)
        float left
        margin-top 60px
        .word1
          width px2rem(350)
          height px2rem(31)
          margin-bottom 9px
          span
            width px2rem(120)
            height px2rem(30)
            display block
            text-align center
            line-height px2rem(30)
            color #333
            font-size px2rem(25)
            border 1px solid red
            background antiquewhite
        .name
          width px2rem(350)
          height px2rem(41)
          line-height px2rem(41)
          font-size px2rem(30)
          color #333
          ellipsis()
        .desc
          width px2rem(350)
          height px2rem(36)
          line-height px2rem(36)
          font-size px2rem(25)
          color #ccc
          ellipsis()
        .price
          width px2rem(350)
          height px2rem(41)
          line-height px2rem(41)
          font-size px2rem(30)
          color red
          ellipsis()
    .bottom
      width px2rem(740)
      height px2rem(352)
      padding-left px2rem(10)
      ul
        width px2rem(740)
        height px2rem(352)
        li
          width px2rem(216)
          height px2rem(339)
          margin-left px2rem(20)
          float left
          .pic2
            width px2rem(216)
            height px2rem(335)
            .pic3
              width px2rem(216)
              height px2rem(216)
              img
                width px2rem(216)
                height px2rem(216)
          .word2
            width px2rem(216)
            height px2rem(62)
            color #333
            font-size px2rem(20)
            margin-top 3px
            span
              color red
          .word3
            width px2rem(216)
            height px2rem(38)
            line-height px2rem(38)
            span
              display block
              width px2rem(78)
              height px2rem(38)
              text-align center
              color red
              border 1px solid red
              font-size px2rem(20)
</style>
