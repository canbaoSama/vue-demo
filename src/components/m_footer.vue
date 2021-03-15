<template>
  <Row id="m_footer">
    <mt-tabbar v-model="selected">
      <mt-tab-item id="tab1">
        <img slot="icon" src="../assets/logo.png">
        文明
      </mt-tab-item>
      <mt-tab-item id="tab2">
        <img slot="icon" src="../assets/logo.png">
        创新
      </mt-tab-item>
      <mt-tab-item id="tab3">
        <img slot="icon" src="../assets/logo.png">
        自强
      </mt-tab-item>
      <mt-tab-item id="tab4">
        <img slot="icon" src="../assets/logo.png">
        好学
      </mt-tab-item>
    </mt-tabbar>
  </Row>
</template>

<script>
  import { Tabbar, TabItem } from "mint-ui"

  export default {
    name: 'footer.vue',
    data() {
      return {
        selected: '',
      }
    },
    components: {
      Tabbar,
      TabItem,
    },
  }
</script>
