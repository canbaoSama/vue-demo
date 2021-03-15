<style lang="scss">
  @import "../assets/sass/mobile/main";
</style>
<template>
  <div class="maintain">
    <m_navHeader></m_navHeader>
    <router-view></router-view>
    <m_footer></m_footer>
  </div>
</template>

<script>
  import m_navHeader from '../components/m_navHeader'
  import m_footer from '../components/m_footer'

  export default {
    name: 'Main',
    data() {
      return {

      }
    },
    components: {
      m_navHeader,
      m_footer
    },
  }
</script>
