<template>
  <div class="lists">
  <div class="right">
    <div class="img" v-for="(cates,index) in category" :key="index">
      <img :src="cates.wapBannerUrl"/>
    </div>
    <div class="list">
      <ul class="cicle_list" v-for="(cates,index) in category" :key="index">
        <li v-for="(subCate,index) in cates.subCateList" :key="index" >
          <a href="javascript:;">
            <div class="circle">
              <img :src="subCate.wapBannerUrl"/>
            </div>
            <div class="text">{{subCate.name}}</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {

    data(){
      return {
        category:[],
      }
    },
    computed:{
      ...mapState(['categoryL1List','id']),
      getCategory(){
        let category = this.categoryL1List.filter(category => category.id === this.id)
        console.log(category)
        this.category=category;
      }
    },
    mounted(){
      new BScroll('.lists',{
        click:true,
        scrollY:true
      })
    },
    watch:{
      getCategory(){
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  .right
    float left
    width px2rem(528)
    height px2rem(1100)
    box-sizing border-box
    margin  px2rem(30) px2rem(25) px2rem(21) px2rem(20)
    .img
      width px2rem(528)
      height px2rem(192)
      margin-bottom px2rem(32)
      img
        width px2rem(528)
        height px2rem(192)
    .list
      width px2rem(528)
      height px2rem(800)
      .cicle_list
        width px2rem(528)
        height px2rem(800)
        li
          width px2rem(144)
          height px2rem(216)
          margin-right px2rem(34)
          float left
          &:nth-child(3n)
            margin-right px2rem(10)
          .circle
            width px2rem(144)
            height px2rem(144)
            img
              width px2rem(144)
              height px2rem(144)
          .text
            width px2rem(144)
            height px2rem(72)
            font-size px2rem(20)
            color #333
            text-align center
</style>
