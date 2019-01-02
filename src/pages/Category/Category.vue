<template>
    <div>
      <Search/>
      <div class="content">
      <CategoryLeft :categoryL1List="categoryL1List" ref="item" ></CategoryLeft>
      <CategoryLRight :categoryL1List="categoryL1List"/>
      </div>
    </div>
</template>

<script>
  import CategoryLeft from '../../components/CategoryList/CategoryLeft'
  import Search from '../../components/CategoryList/Search'
  import CategoryLRight from '../../components/CategoryList/CategoryLRight'
  import {mapState} from 'vuex'
  export default {
    name: 'Category',
    computed:{
      ...mapState(['categoryL1List','id'])
    },
    components:{
      CategoryLeft,
      Search,
      CategoryLRight
    },
    created(){
      this.$store.dispatch('getCategoryL1List');
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .content
    overflow hidden

</style>
