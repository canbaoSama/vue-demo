<style lang="scss">
  @import "../assets/sass/pc/main";
</style>
<template>
  <div class="maintain">
    <NavHeader></NavHeader>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
  import NavHeader from '../components/navHeader'
  import Footer from '../components/footer'


  export default {
    name: 'Main',
    data() {
      return {
        nameList: [],
        slotName1: '',
        slotName2: '第二个',
        slotName3: '第三个',
      }
    },
    components: {
      NavHeader,
      Footer
    },
    mounted () {
    },
  }
</script>
