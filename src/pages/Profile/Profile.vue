<template>
  <div class="profile">
    <div class="profile1">
      <div class="profile2">
        <div class="profile3">
          <div class="profile-inner">
            <div class="left">
              <img src="//yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png" alt="">
              <div class="info">
                <p class="nickname">13672121280</p>
                <div class="membershipLevel">
                  <span class="memberTitle0">超级会员</span>
                </div>
              </div>
            </div>
            <div class="right">
              <i class="erweima"></i>
              <transition>
                <div class="m-supermcEntrance" ref="cdwappear">
                  <i class="icon"></i>
                  <div class="word">
                    <div class="line1">普通会员</div>
                    <div class="line2">
                      <span>立即使用</span>
                      <i></i>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
      <div class="g-row1">
        <div class="m-uMenu">
          <ul class="list">
            <li class="item" v-for="item in data" >
              <a href="javascript:;" class="m-uMenuItem">
                <i class="img" :style="{backgroundPositionY:item.px+'px'}"></i>
                <span>{{item.name}}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="g-row2">
        <button class="w-button" @click="$router.push('/login')">退出登录</button>
      </div>
      <div class="footerr"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        data:[
          {px:-774,name:'我的订单'},
          {px:-886,name:'周六一起拼'},
          {px:-294,name:'售后服务'},
          {px:-714,name:'邀请返利'},
          {px:-354,name:'优惠券'},
          {px:-1066,name:'我的红包'},
          {px:-1006,name:'优先购'},
          {px:-474,name:'礼品卡'},
          {px:-946,name:'积分中心'},
          {px:-834,name:'会员俱乐部'},
          {px:-234,name:'地址管理'},
          {px:-1126,name:'帐号安全'},
          {px:-534,name:'帮助与客服'},
          {px:-414,name:'意见反馈'},
        ],
        mask:false
      }
    },
  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .profile
    width: px2rem(750)
    margin-right: auto;
    margin-left: auto;
    .profile3
      box-sizing border-box
      height: px2rem(270)
      background-image: url(//yanxuan.nosdn.127.net/d069279e5834bbca17065a9855a014bf.png);
      background-size: 100%;
      background-position: bottom center;
      padding-left:px2rem(30)
      overflow: hidden;
      .profile-inner
        width: px2rem(720)
        display: flex;
        align-items: center;
        height 100%
        .left
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: flex-start;
          padding: px2rem(64) 0;
          width:px2rem(510)
          height px2rem(270)
          box-sizing  border-box
          img
            vertical-align: middle;
            width: px2rem(142)
            height:px2rem(142)
            border-radius: 50%;
          .info
            flex: 1;
            margin-left: px2rem(30)
            line-height: 1;
            overflow: hidden;
            .nickname
              color: #fff;
              font-size:px2rem(33)
              line-height: 1.2;
              text-align: left;
              margin-bottom: px2rem(10)
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
            .membershipLevel
              .memberTitle0
                color: #fff;
                font-size: px2rem(28)
                vertical-align: middle;
        .right
          position: relative;
          width: px2rem(210)
          padding-left:px2rem(17)
          height: 100%;
          box-sizing border-box
          .erweima
            position: absolute;
            right:px2rem(14)
            top: px2rem(16)
            width: px2rem(64)
            height: px2rem(64)
            background-size: 100%;
            display: inline-block;
            vertical-align: middle;
            background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/ucenter-s4184c581c7-cc8ba9695e.png);
            background-repeat: no-repeat;
            background-position-y px2rem(-87)
          .m-supermcEntrance
            margin-top: px2rem(104)
            width: px2rem(203)
            height: px2rem(84)
            background: #444;
            border-top-left-radius:px2rem(50%)
            border-bottom-left-radius:px2rem(50%)
            overflow: hidden;
            animation: shake 1s linear 3;
            .icon
              margin: px2rem(13) px2rem(10)
              width:  px2rem(56)
              height:  px2rem(56)
              display: inline-block;
              vertical-align: middle;
              background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/ucenter-s4184c581c7-cc8ba9695e.png);
              background-repeat: no-repeat;
              background-size: px2rem(64) px2rem(1176)
              background-position: 0 px2rem(-168)
            .word
              display: inline-block;
              padding: px2rem(10) 0;
              color: #EDE7DB;
              vertical-align: middle;
              width px2rem(104)
              height px2rem(83)
              box-sizing border-box
              .line1
                font-size:  px2rem(26)
                line-height:  px2rem(36)
              .line2
                font-size:  px2rem(20)
                line-height:  px2rem(28)
                vertical-align: middle;
                i
                  width:px2rem(18)
                  height:px2rem(18)
                  background-position: 0 0;
                  display: inline-block;
                  vertical-align: middle;
                  background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/ucenter-s4184c581c7-cc8ba9695e.png);
                  background-repeat: no-repeat;
                  background-size:px2rem(64) px2rem(1176)
  .g-row1
    width:  px2rem(750)
    margin-right: auto;
    margin-left: auto;
    .m-uMenu
      margin-bottom: px2rem(40)
      background: #fff;
      .list
        clearFix()
        .item
          float: left;
          width: 33.2%;
          border-right: 0.5px solid rgba(0,0,0,.15);
          border-bottom: 0.5px solid rgba(0,0,0,.15);
          .m-uMenuItem
            display: block;
            height: px2rem(180)
            padding-top:  px2rem(45)
            text-align: center;
            box-sizing border-box
            .img
              width: px2rem(50)
              height:px2rem(50)
              vertical-align: middle;
              margin-bottom: px2rem(16)
              background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/ucenter-s4184c581c7-cc8ba9695e.png);
              background-repeat: no-repeat;
              background-size:px2rem(64) px2rem(1176)
              display: inline-block;
              background-position: 0 px2rem(-774)
            span
              display: block;
              font-size:px2rem(24)
              line-height: 1;
              color: #333;
  .g-row2
    width: px2rem(750)
    margin-right: auto;
    margin-left: auto;
    .w-button
      display: block;
      width: 100%;
      height: px2rem(94)
      line-height: px2rem(94)
      border: 1px solid #fff;
      background-color: darkred;
      color: #333;
      margin-bottom px2rem(20)
      font-size px2rem(28)
  .footerr
    width 100%
    height px2rem(99)
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to  {
    opacity: 0;
  }


</style>
