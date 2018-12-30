<template>
  <div class="wrapper">
    <ul class="wrapper_list">
      <li v-for="(arr,index) in arr1[0]" :key="index">
        <a href="javascript:;">
          <img :src="arr.picUrl" alt="">
          <span>{{arr.text}}</span>
        </a>
      </li>
    </ul>
    <ul class="wrapper_list1">
      <li v-for="(arr,index) in arr2[0]" :key="index">
        <a href="javascript:;">
          <img :src="arr.picUrl" alt="">
          <span>{{arr.text}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import {reqkingKongModule} from '../../api/index'
  export default {
    data(){
      return {
        arr1:[],
        arr2:[]
      }
    },
    created(){
      reqkingKongModule()
        .then(res =>{
          const arr1 = res.data.kingKongList.slice(0,5)
          this.arr1.push(arr1)
          const arr2 = res.data.kingKongList.slice(5,11)
          this.arr2.push(arr2)
        })
    },
    computed:{

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  .wrapper
    width px2rem(750)
    height px2rem(393)
    .wrapper_list
      margin-left 25px
      display flex
      li
        width px2rem(110)
        height px2rem(156)
        box-sizing border-box
        display flex
        flex 1
        a
          display flex
          flex-direction column
          img
            width px2rem(110)
            height px2rem(110)
          span
           align-self center
           color #333
           font-size px2rem(28)
           margin-top px2rem(20)
    .wrapper_list1
      margin-left 25px
      display flex
      li
        width px2rem(110)
        height px2rem(156)
        box-sizing border-box
        display flex
        flex 1
        a
          display flex
          flex-direction column
          img
            width px2rem(110)
            height px2rem(110)
          span
            align-self center
            color #333
            font-size px2rem(28)
            margin-top px2rem(20)
</style>
