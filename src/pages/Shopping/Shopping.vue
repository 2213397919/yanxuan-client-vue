<template>
  <div>
    <div class="header">
      <div class="nav_header">
        <div class="middle">
          <span class="logo">购物车</span>
          <div class="right"  @click="$router.replace('/profile')">
            领卷
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="list">
        <ul>
          <li>
            <i></i>
            <span>30天无忧退货</span>
          </li>
          <li>
            <i></i>
            <span>48小时快速退款</span>
          </li>
          <li>
            <i></i>
            <span>满88元免邮费</span>
          </li>
        </ul>
      </div>
      <div class="logos">
        <img src="../../assets/images/cart.png" alt="">
      </div>
      <div class="txt">
        <div class="noCart-login">
          <div class="noCart-title">去添加点什么吧</div>
          <div class="login" @click="$router.replace('/profile')">登录</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {}
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .header
    width 100%
    height px2rem(88)
    background white
    .nav_header
      width 100%
      height px2rem(88)
      position fixed
      z-index 5
      top: 0
      left: 0
      .middle
        width 100%
        height px2rem(88)
        box-sizing border-box
        padding 0 px2rem(30) 0
        text-align: center
        line-height px2rem(88)
        bottom-border-1px(black)
        .logo
          font-size px2rem(37)
        .right
          position absolute
          right px2rem(30)
          top:0;
          width px2rem(90)
          height px2rem(88)
          font-size px2rem(30)
          color #B4282D;

  .content
    width 100%
    height px2rem(1200)
    background #f4f4f4;
    .list
      ul
        width 100%
        height px2rem(70)
        position relative
        z-index 2
        padding 0 px2rem(30)
        box-sizing border-box
        display flex
        justify-content: space-between;
        flex-flow: row nowrap;
        align-items: center;
        li
          display flex
          align-items: center;
          font-size: px2rem(25)
          color: #666;
          i
            position relative
            top -1px
            margin-right px2rem(6)
            background url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-1d7541974f.png')
            width px2rem(10)
            background-repeat: no-repeat;
            height px2rem(10)
  .logos
    width 100%
    height px2rem(300)
    /*background red*/
    position absolute
    text-align: center
    top:px2rem(530)
  .txt
    position absolute
    bottom: px2rem(360)
    left: 0
    font-size: px2rem(28)
    line-height: 1;
    color: #7f7f7f;
    width 100%
    height px2rem(169)
    .noCart-login
      margin-top px2rem(-20)
      .noCart-title
        font-size px2rem(30)
        line-height 1
        color: #999;
        margin-bottom px2rem(50)
        text-align: center

      .login
        height px2rem(92)
        width px2rem(480)
        margin auto
        text-align: center
        background #b4282d;
        line-height px2rem(92)
        color: white
        font-size px2rem(35)
</style>
