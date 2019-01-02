<template>
    <div class="general">
      <GeneralHeader/>
      <div class="nav">
        <a href="javascript:;" :class="{active: tab.tabId === id}" v-for="(tab,index) in tabs" :key="index" @click="goto(tab.tabId)">
          {{tab.tabName}}
        </a>
      </div>
      <div class="content">
      <Split/>
      <TuiJian :list="list"/>
      </div>
      <GoTop/>
    </div>
</template>

<script>
  import GeneralHeader from '../../components/Generalheader/Generalheader'
  import Split from '../../components/Split/Split'
  import TuiJian from '../../components/GeneralList/TuiJian/TuiJian'
  import {reqTab, reqTuiJina} from '../../api/index'
  import GoTop from '../../components/GoTop/index'
  export default {
    name: 'General',
    data(){
      return{
      tabs:[],
        id:9,
        list:[]
      }
    },
    components:{
      Split,
      GeneralHeader,
      TuiJian,
      GoTop
    },
    mounted(){
      this.$nextTick(async ()=>{
        await  reqTab()
          .then(res =>{
            this.tabs = res.data;
          })
        await reqTuiJina()
          .then(res =>{
            this.list = res.data;
          })
      })
    },
    methods:{
      goto(id){
        this.id = id;
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .general
      .nav
        top-border-1px(#eee)
        width px2rem(750)
        height px2rem(50)
        margin-top 88px
        display flex
        position fixed
        background #fff
        a
          color #7F7F7F
          line-height px2rem(50)
          width px2rem(36)
          text-align center
          font-size px2rem(28)
          box-sizing border-box
          padding 0 px2rem(15)
          display flex
          flex 1
          justify-content center
          &.active
             border-bottom 2px solid red
             font-size px2rem(32)
          &:first-child
            margin-left 25px
      .content
        overflow hidden
        z-index -6

</style>
