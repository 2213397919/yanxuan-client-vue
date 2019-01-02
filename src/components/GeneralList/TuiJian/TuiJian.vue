<template>
  <div>
    <!--<div v-for="(lis,index) in list" :key="index">-->
    <!--<div class="tuijian" v-for="(topic,index) in lis.topics" :key="index">-->
      <!--<a href="javascript:;">-->
        <!--<div class="top">-->
          <!--<img :src="topic.avatar"/>-->
          <!--<span>{{topic.nickname}}</span>-->
        <!--</div>-->
        <!--<div class="middle">-->
         <!--{{topic.title}}-->
        <!--</div>-->
        <!--<div class="bottom">-->
          <!--<img :src="topic.picUrl"/>-->
        <!--</div>-->
        <!--<div class="icon">-->
          <!--{{topic.readCount}}-->
        <!--</div>-->
      <!--</a>-->
      <!--<Split/>-->
    <!--</div>-->
    <!--<Split/>-->
    <!--</div>-->
    <div class="daren">
      <a href="javascript:;">
        <div class="info">
          <div class="name">
            <span><img src="https://yanxuan.nosdn.127.net/3afb99e4d185d522d32a6642c9cafb3d.png?imageView&quality=65&thumbnail=56y56"/></span>
            <span>海外组：小嗨</span>
          </div>
          <div class="title">满19元就有赠品，这份来自严选海外的新年礼物请查收</div>
          <div class="decs">严选海外超走心新年礼</div>
          <div class="see">7863人看过</div>
        </div>
        <div class="pic">
          <img src="https://yanxuan.nosdn.127.net/c6dcc217368331eee66a5de630fbe0a8.jpg?imageView&quality=65&thumbnail=272y272"/>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
  import Split from '../../Split/Split'
  export default {
    name: 'TuiJian',
    components: {Split},
    props:['list'],
    mounted(){
      this.$store.dispatch('getDaRen')
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  .tuijian
     width px2rem(750)
     height px2rem(660)
     /*background aqua*/
     margin px2rem(10) 0
     box-sizing border-box
     padding px2rem(18) px2rem(15)
     margin-top 140px
     a
       .top
         width px2rem(690)
         height px2rem(56)
         /*background red*/
         img
           width px2rem(54)
           height px2rem(54)
           border-radius 50%
           float left
         span
           width px2rem(600)
           height px2rem(54)
           font-size px2rem(30)
           display block
           float left
           /*background gold*/
           line-height px2rem(54)
           margin-left px2rem(14)
           color #333
       .middle
         width px2rem(690)
         height px2rem(100)
         color #333
         font-size px2rem(35)
         margin-top 14px
         margin-bottom 8px
       .bottom
         width px2rem(690)
         height px2rem(374)
         margin-left 10px
         img
           width px2rem(690)
           height px2rem(374)
       .icon
         width px2rem(690)
         height px2rem(40)
         /*background darkred*/
         margin-left 10px
         margin-top 15px
         font-size px2rem(20)
         color #ccc
         line-height  px2rem(40)
  .daren
    width px2rem(750)
    height px2rem(336)
    background antiquewhite
    margin-top px2rem(140)
    box-sizing border-box
    padding px2rem(16) px2rem(15)
    margin-top px2rem(10) 0
    a
      margin-top 20px
      margin-left 20px
      display inline-block
      width px2rem(690)
      height px2rem(272)
      background aqua
      .info
        width px2rem(400)
        height px2rem(272)
        background blue
        float left
        .name
          width px2rem(400)
          height px2rem(56)
          background azure
          span
            &:nth-child(1)
              width px2rem(54)
              height px2rem(54)
              display inline-block
              float left
              img
                width px2rem(54)
                height px2rem(54)
                border-radius 50%
            &:nth-child(2)
              width px2rem(300)
              height px2rem(54)
              display inline-block
              float left
              font-size px2rem(20)
              color #333
              line-height px2rem(54)
              padding-left 10px
        .title
          margin-top 20px
          width px2rem(400)
          height px2rem(88)
          background blueviolet
          font-size px2rem(30)
          color #333
        .decs
          margin-top 10px
          width px2rem(400)
          height px2rem(40)
          font-size px2rem(30)
          color #eee
        .see
          margin-top 5px
          width px2rem(400)
          height px2rem(32)
          font-size px2rem(25)
          color #eee
      .pic
        width px2rem(272)
        height px2rem(272)
        float left
        background red
        margin-left 10px
        img
          width px2rem(272)
          height px2rem(272)
</style>
