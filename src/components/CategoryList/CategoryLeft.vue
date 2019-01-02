<template>
    <div class="left">
      <ul class="leftList">
        <li v-for="(list,index) in categoryL1List" :key="index" @click="active(list.id)">
          <a href="javascript:;"  :class="{active: list.id === id}">{{list.name}}</a>
        </li>
      </ul>
    </div>
</template>

<script>
  import {mapState} from 'vuex';
  import BScroll from 'better-scroll'
  export default {
    name: 'CategoryLeft',
    props:['categoryL1List'],
    data(){
      return {
        id:1022001
      }
    },
    methods:{
      active(id){
        this.id = id
        this.$store.dispatch('getId',this.id)
      }
    },
    mounted(){
      this.$nextTick(()=>{
        new BScroll('.left',{
          click:true,
          scrollY:true
        })
      })
    },
    watch: {

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .left
     width px2rem(163)
     height px2rem(600)
     float left
     border-right 1px solid #ccc
     .leftList
       width px2rem(163)
       box-sizing border-box
       padding px2rem(40) 0 px2rem(138) 0
       li
         width px2rem(163)
         height px2rem(92)
         display flex
         a
           width px2rem(162)
           height px2rem(49)
           font-size px2rem(30)
           display flex
           justify-content center
           align-items center
           color #333
           &.active
             border-left 8px solid red
             color red
             font-size px2rem(33)
</style>
