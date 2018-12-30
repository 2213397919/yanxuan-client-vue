<template>
  <div class="wrap">
    <div class="header">
      <div class="logo"></div>
      <div class="search">
        <i class="icon"></i>
        <span class="placeholder">搜索商品, 共2019款好物</span>
      </div>
      <div class="login" @click="$router.replace('/profile')">登陆</div>
    </div>
    <div class="list">
      <ul class="arr_list">
        <li  v-for="(list,index) in listArr" :key="index" @click="changeActive(list.id)">
          <a href="javascript:;" :class="{active : current === list.id}">{{list.name}}</a>
        </li>
      </ul>
    </div>
    <span class="icon1"><i class="iconfont icon-fangkuai"></i></span>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'Home_Header',
    mounted(){
      new BScroll('.list',{
        click:true,
        scrollX:true
      })
    },
    data() {
      return {
        listArr:[
          {id:1022001,name:'推荐'},
          {id:1005000,name:'居家'},
          {id:1008000,name:'鞋包配饰'},
          {id:1010000,name:'服装'},
          {id:1043000,name:'电器'},
          {id:1013001,name:'洗护'},
          {id:1005002,name:'饮食'},
          {id:1005001,name:'餐厨'},
          {id:1011000,name:'婴童'},
          {id:1019000,name:'文体'},
          {id:1065000,name:'特色区'}
        ],
        current:1022001
      }
    },
    methods:{
      changeActive(id){
        this.curren === id;
      }
    }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .wrap
    width: 100%
    height px2rem(148)
    position fixed
    z-index 5
    top: 0
    left: 0
    .header
      box-sizing border-box
      width: 100%
      height px2rem(88)
      position: relative;
      z-index: 2;
      display: flex;
      flex-flow: row nowrap;
      -webkit-box-align: center;
      align-items: center;
      background: #fff;
      padding: px2rem(16) px2rem(30)
      .logo
        width: px2rem(138)
        height: px2rem(40)
        background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png);
        display: inline-block;
        margin-right: px2rem(20);
        background-size: cover;
        background-position: center;
      .search
        width px2rem(442)
        height:px2rem(56)
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        background-color: #ededed;
        justify-content: center;
        border-radius: 8px;
        .icon
          width px2rem(28)
          height:px2rem(28)
          background url('../../assets/images/search.png')
          display: inline-block;
          vertical-align: middle;
          background-repeat: no-repeat;
          background-size: 100% 100%;
          margin-right:px2rem(10)
        .placeholder
          font-size px2rem(28)
          color: #666;
      .login
        width: px2rem(72)
        height: px2rem(38)
        line-height: px2rem(38)
        text-align: center;
        color: #b4282d;
        border: 1px solid #b4282d;
        border-radius:px2rem(15)
        margin-left: px2rem(16)
        font-size px2rem(28)
    .list
       width px2rem(650)
       height px2rem(60)
       overflow hidden
       .arr_list
         width px2rem(1313)
         height px2rem(60)
         li
           float left
           height (60)
           box-sizing border-box
           padding px2rem(16) px2rem(16)
           font-size px2rem(28)
           a
             color: #333;
             &.active
              border-bottom 2px solid red
    .icon1
       width px2rem(30)
       height px2rem(30)
       position relative
       right px2rem(-690)
       top px2rem(-52)
      .iconfont
          font-size px2rem(40)
</style>
