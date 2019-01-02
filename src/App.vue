<template>
 <div>
   <router-view/>
   <Footer v-show="$route.meta.showFooter"/>
 </div>
</template>

<script>
import Footer from './components/Footer/Footer'
export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style>

</style>
