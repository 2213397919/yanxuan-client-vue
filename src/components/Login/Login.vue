<template>
  <div class="personal" :class="{active:!isShow}">
    <Header></Header>
    <section class="cont" v-if="isShowmail===0">
      <div class="logo">
        <img src="../../assets/images/logo.png" alt="">
      </div>
      <div class="btns">
        <div class="btn" @click="changeShow">
          <i class="iconfont icon-shouji"></i>
          <span>手机号码登录</span>
        </div>
        <div class="btn dist" @click="mailLogin">
          <i class="iconfont icon-youxiang space"></i>
          <span>邮箱账号登录</span>
        </div>
      </div>
      <div class="quickLoign">
        <span>手机号快捷注册</span>
        <i class="iconfont icon-jiantouyou"></i>
      </div>
    </section>
    <div class="phoneLogin" v-if="isShowmail===1">
      <div class="logo">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <div class="uesBox">
        <div class="ife">
          <div class="m-cnt">
            <div class="login-form">
              <div class="m-container">
                <div class="inputbox">
                  <input type="tel" placeholder="请输入手机号"  ref="phone" @focus="focus" @blur="blur" v-model="imputValues">
                  <div class="clean" :class="{active:isClean}" @click.prevent="clean">x</div>
                </div>
                <div class="m-pccnt">
                  <div class="m-pcbox">
                    <div class="u-input">
                      <input type="tel" placeholder="请输入验证码" @focus="focus" @blur="blur" ref="yanzhengcode">
                    </div>
                    <div class="pcbtn">
                      <a href="javascript:;" class="tabfocus" @click="getPhone" ref="code">{{getShow(count)}}</a>
                    </div>
                  </div>
                </div>
                <div class="m-nerror" :class="{active:!errtype}" >
                  <div class="ferrorhead">
                    {{getPhoneText}}
                  </div>
                </div>
                <div class="text">
                  <span class="tab0">使用密码验证登录</span>
                  <span class="tab1">遇到问题?</span>

                </div>
                <div class="loginbox">
                  <a href="javascript:;" class="u-loginbtn" @click="login">登陆</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="foot">
          <a href="javascript:;" class="mintFoot" @click="other">其他登陆方式</a>
        <div class="quickLoign">
          <span>注册账号</span>
          <i class="iconfont icon-jiantouyou"></i>
        </div>
      </div>
    </div>
    <div class="phoneLogin" v-if="isShowmail===2">
      <div class="logo">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <div class="uesBox">
        <div class="ife">
          <div class="m-cnt">
            <div class="login-form">
              <div class="m-container">
                <div class="inputbox">
                  <input type="tel" placeholder="邮箱账号"  ref="phone" @focus="focus" @blur="blur" v-model="inputValue">
                  <div class="clean" :class="{active:isClean}" @click.prevent="clean">x</div>
                </div>
                <div class="m-pccnt">
                  <div class="m-pcbox" id="inputPwd">
                    <div class="u-input">
                      <input type="tel" placeholder="密码" @focus="focus" @blur="blur" ref="yanzhengcode">
                    </div>
                  </div>
                </div>
                <div class="m-nerror" :class="{active:!errtype}" >
                  <div class="ferrorhead" id="id">
                    {{getPhoneText}}
                  </div>
                </div>
                <div class="text">
                  <span class="tab0" id="pwd">忘记密码</span>
                  <span class="tab1">注册账号</span>

                </div>
                <div class="loginbox">
                  <a href="javascript:;" class="u-loginbtn" @click="login">登陆</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="foot">
        <a href="javascript:;" class="mintFoot" @click="other">其他登陆方式</a>
        <div class="quickLoign">
          <span>注册账号</span>
          <i class="iconfont icon-jiantouyou"></i>
        </div>
      </div>
    </div>
    <section class="otherLogin">
      <div class="itemOther">
        <i class="iconfont icon-weixin"></i>
        <span>微信</span>
      </div>
      <div class="itemOther">
        <i class="iconfont icon-QQ"></i>
        <span>QQ</span>
      </div>
      <div class="itemOther">
        <i class="iconfont icon-weibo"></i>
        <span>微博</span>
      </div>
    </section>
  </div>
</template>

<script>
  import Header from './Header/Header.vue'
  import {reqPhoneCode} from '../../api/index'
  export default {
    data(){
      return {
        isShow:true,
        isShowmail:0,   //显示哪种
        count:0,
        err:0,  //0 号码为空   1 号码格式有误   2没有输入验证码  3验证码格式错误
        errtype:false,   //错误类
        isSend:false,   //是否发送
        inputValue:window.localStorage.getItem('Email')|| '',
        imputValues:""
      }
    },
    computed:{
      getPhoneText(){
        if(this.isShowmail===1){
          if(this.err===0){
            return '请输入手机号'
          }else if(this.err===1){
            return '手机号格式错误'
          }else if(this.err===2){
            return '请输入验证码'
          }else if(this.err===3){
            return '验证码格式错误'
          }else if(this.err===4){
            return '请先获取验证码'
          }
        }else{
          if(this.err===0){
            return '请输入账号'
          }else if(this.err===1){
            return '账号格式错误'
          }else if(this.err===2){
            return '请输入密码'
          }else if(this.err===3){
            return '密码格式错误'
          }
        }
      },
      isClean(){
        if(this.isShowmail===1){
          return this.imputValues===''? true : false
        }else{
          return this.inputValue===''? true : false
        }
      },
    },
    methods: {
      changeShow(){
        this.isShow = !this.isShow
        this.isShowmail=1
      },
      mailLogin(){
        this.isShow=false
        this.isShowmail=2
      },
      getPhone(){
//        !(/^1(3|4|5|7|8)\d{9}$/.test(this.$refs.phone.value.trim()))
//        /^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/
        if(this.$refs.phone.value.trim()===''){
              this.err = 0
              this.errtype = true
        }else if(!(/^1(3|4|5|7|8)\d{9}$/.test(this.$refs.phone.value.trim()))){
          this.err = 1
          this.errtype = true
        } else{
          if(this.count>0){
            return
          }

          // reqPhoneCode(this.$refs.phone.value)
          //   .then(res=>{
          //     console.log(res)
          //   })
          this.count=30
          this.isSend=true
          const Interval = setInterval(()=>{
            this.count--
            if(this.count<=0){
              this.count=0
              clearInterval(Interval)
              this.isSend = true
            }
          },1000)
        }
      },
      getShow(count){
        return count===0?'获取验证码':`已发送(${count})s`
      },
      focus(){
        this.err=0  //0 号码为空   1 号码格式有误   2没有输入验证码
          this.errtype=false
      },
      blur(){
//        /^\d{6}$/.test(code)
        setTimeout(()=>{
          if(this.inputValue!==''||this.imputValues!==''){
            this._judge()
          }
        },20)

      },
      login(){
        if(this.isShowmail===1){
          if(this.$refs.phone.value.trim()===''){
            this.err = 0
            this.errtype = true
          }else if(!(/^1(3|4|5|7|8)\d{9}$/.test(this.$refs.phone.value.trim()))){
            this.err = 1
            this.errtype = true
          } else if(this.$refs.yanzhengcode.value.trim()===''){
            this.err = 2
            this.errtype = true
          }else if(!(/^\d{6}$/.test(this.$refs.yanzhengcode.value.trim()))){
            this.err = 3
            this.errtype = true
          }else if(!this.isSend){
            this.err = 4
            this.errtype = true
          }else{
            this.err=0
            this.errtype=false
            document.cookie="userId="+this.$refs.phone.value
            this.$router.replace('/userinfo')
          }
        }else{
          if(this.$refs.phone.value.trim()===''){
            this.err = 0
            this.errtype = true
          }else if(!(/^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/.test(this.$refs.phone.value.trim()))){
            this.err = 1
            this.errtype = true
          } else if(this.$refs.yanzhengcode.value.trim()===''){
            this.err = 2
            this.errtype = true
          }else{
            window.localStorage.setItem('Email',this.inputValue)
            this.$router.replace('/userinfo')
          }
        }

      },
      _judge(){
        if(this.isShowmail===1){
          if(this.$refs.phone.value.trim()===''){
            this.err = 0
            this.errtype = true
          }else if(!(/^1(3|4|5|7|8)\d{9}$/.test(this.$refs.phone.value.trim()))){
            this.err = 1
            this.errtype = true
          }
        }else{
          if(this.$refs.phone.value.trim()===''){
            this.err = 0
            this.errtype = true
          }else if(!(/^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/.test(this.$refs.phone.value.trim()))){

            this.err = 1
            this.errtype = true
          }
        }

      },
      other(){
        this.isShow=true
        this.isShowmail=0
        this.errtype=false
      },
      clean(){
        this.inputValue=''
        this.imputValues=''
        this.err=0
        this.errtype=false
//        console.log(2)
      }

    },
    components: {
      Header
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  @import '../../common/stylus/mixins.styl'
  .personal
    width 100%
    height px2rem(1333)
    box-sizing border-box
    padding-top px2rem(88)
    background #f2f5f4
    position relative
    &.active
      background white
    .phoneLogin
      width 100%
      height px2rem(840)
      /*background red*/
      margin-top px2rem(50)
      position relative
      .logo
        text-align: center;
        margin-top: px2rem(56)
        margin-bottom: 0;
        img
          width: px2rem(192)
          height: px2rem(64)

      .uesBox
        width: 750px;
        height: 570px;
        /*background green*/
        margin-top: px2rem(40)
        .ife
          width 100%
          height 100%
          /*background blue*/
          .m-cnt
            width 100%
            height 100%
            box-sizing border-box
            padding: 0 px2rem(40)
            .login-form
              width 100%
              height 100%
              /*background yellow*/
              .m-container
                margin 0 auto
                position relative
                margin-top px2rem(114)
                /*background deeppink*/
                height 100%
                box-sizing border-box
                .inputbox
                  width 100%
                  height px2rem(94)
                  background white
                  border: none;
                  padding-bottom: px2rem(2)
                  position relative
                  &:after
                    content: '';
                    position: absolute;
                    top: 90px
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background: #d9d9d9;
                  input
                    width: px2rem(590)
                    height: px2rem(43)
                    line-height: px2rem(43)
                    font-size: 27px
                    letter-spacing: normal;
                    margin: px2rem(26) 0;
                    padding-left: 0;
                    -webkit-tap-highlight-color: transparent;
                    font-weight: normal;
                    background: #fff;
                    outline: 0;
                  .clean
                    width 30px
                    height 30px
                    /*background red*/
                    position absolute
                    top: 30px
                    right: 16px
                    font-size 32px
                    text-align: center
                    line-height 30px
                    color #333
                    &.active
                      display none !important
                .m-pccnt
                  position: relative;
                  margin-top: 0;
                  width 100%
                  height px2rem(94)
                  .m-pcbox
                    position: relative;
                    font-size: 0;
                    margin-top: 32px;

                    .u-input
                      width: 100%;
                      position: relative;
                      height px2rem(94)
                      /*background red*/
                      &:after
                        content: '';
                        position: absolute;
                        top: 90px
                        left: 0;
                        width: 100%;
                        height: 2px;
                        background: #d9d9d9;
                      input
                        width: px2rem(590)
                        height: px2rem(43)
                        line-height: px2rem(43)
                        font-size: 27px
                        letter-spacing: normal;
                        margin: px2rem(26) 0;
                        padding-left: 0;
                        -webkit-tap-highlight-color: transparent;
                        font-weight: normal;
                        background: #fff;
                        outline: 0;

                  #inputPwd
                    margin-top: 0px;
                  .pcbtn
                    position: absolute;
                    right:16px
                    top: 22px
                    z-index: 100;
                    display: inline-block;
                    margin-left: 20px;
                    vertical-align: top;
                    float: left
                    /*background red*/
                    .tabfocus
                      display: block;
                      width: 164px;
                      height: 54px
                      text-align: center;
                      font-size: 28px;
                      background: #fff;
                      line-height: 54px
                      color black
                      border: 2px solid #7F7F7F;
                      border-radius: 8px;
                .m-nerror
                  top: -62px;
                  left: -2px;
                  color: #fff;
                  border-radius: 4px;
                  font-size: 0;
                  margin-bottom: 0;
                  margin-top: 16px;
                  /*background red*/
                  height 20px
                  .ferrorhead
                    width: 298px;
                    margin-top: 33px;
                    color: #b4282d;
                    font-size: 24px;
                    line-height: 20px;
                    vertical-align: top;
                    word-break: break-all;
                    margin-left: 153px;
                  #id
                    margin-top: 21px;
                    margin-left: 0px;
                  &.active
                    display none !important
                .text
                  position: absolute;
                  bottom: 283px
                  left: 444px
                  padding: 0;
                  width: 600px;
                  margin: 0 auto;
                  font-size: 28px;
                  color black
                  .tab0
                    background: none;
                    color: #666;
                    font-size: 28px;
                    height: 42px
                    padding: 0;
                    line-height: 42px
                    -webkit-tap-highlight-color: transparent;
                  #pwd
                    padding: 69px;
                  .tab1
                    position: absolute;
                    left  -441px
                    top: 0
                    background: none;
                    color: #979797;
                    font-size: 27.5px;
                    height: 42px
                    padding: 0;
                    line-height: 42px
                .loginbox
                  margin: 0;
                  position: absolute;
                  left: 0;
                  bottom: 150px;
                  width: 100%;
                  height 92px
                  /*background red*/
                  .u-loginbtn
                    display block
                    width 100%
                    height 100%
                    background #b4282d;
                    font-size 30px
                    text-align: center
                    line-height 92px
                    border-radius: 6px;
      .foot
        position absolute
        left: 0
        bottom: 112px
        padding 0 40px
        box-sizing border-box
        width 750px
        height:94px
        .mintFoot
          color: #b4282d;
          background-color: transparent;
          display block
          width 100%
          height 100%
          border 2px solid #b4282d
          font-size 30px
          text-align: center
          line-height 92px
          border-radius: 8px;
        .quickLoign
          color #333333
          font-size px2rem(28)
          width 100%
          text-align center
          margin-top 20px
          >span
            margin-left  36px
          >i
            font-size px2rem(28)
            margin-right px2rem(16)
            margin-left px2rem(4)
            color #333333
    .cont
      >.logo
        text-align center
        padding px2rem(120) 0
        >img
          width px2rem(300)
          height px2rem(104)
      >.btns
        padding 0 px2rem(42)
        >.btn
          margin-bottom px2rem(40)
          text-align center
          border-radius px2rem(6)
          width 100%
          height px2rem(86)
          line-height px2rem(86)
          vertical-align middle
          font-size px2rem(28)
          color #ffffff
          border 1px solid $main
          background-color $main
          &.dist
            background-color #f2f5f4
            color $main
          >i
            width px2rem(40)
            height px2rem(40)
            box-sizing border-box
            font-size px2rem(40)
            vertical-align inherit
            &.space
              margin-right px2rem(10)
      >.quickLoign
        color #333333
        font-size px2rem(28)
        width 100%
        text-align center
        >i
          font-size px2rem(28)
          margin-right px2rem(16)
          margin-left px2rem(4)
          color #333333
    .otherLogin
      position absolute
      width 100%
      height px2rem(60)
      left 0
      bottom px2rem(60)
      text-align center
      .itemOther
        height px2rem(26)
        border-right 1px solid #979797
        display inline-block
        text-align center
        color #979797
        padding 0 px2rem(60)
        font-size px2rem(26)
        >i
          font-size px2rem(26)
        &:last-child
          border-right none
</style>
