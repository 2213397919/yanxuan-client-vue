<template>
  <div class="banner">
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(banner,index) in bannerArr" :key="index">
        <img :src="banner.picUrl"/>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {reqBanner} from '../../api/index'
  export default {
    data() {
      return {
        bannerArr:[]
      }
    },
    mounted(){
      reqBanner()
        .then(res=>{
          this.bannerArr = res.data
        })
    },



    watch:{
      bannerArr(){
        this.$nextTick(()=>{
          new Swiper ('.swiper-container', {
            loop:true,
            pagination: {
              el: '.swiper-pagination',
            },
          })
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .banner
     width px2rem(750)
     height px2rem(400)
     margin-top px2rem(150)
     img
       width px2rem(750)
       height px2rem(400)
</style>
