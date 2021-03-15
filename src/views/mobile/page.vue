<style>

</style>
<template>
  <Row class="the-outermost-container">
    <mt-button type="default">default</mt-button>
    <mt-button type="primary">primary</mt-button>
    <mt-button type="danger">danger</mt-button>
  </Row>
</template>

<script>
  import { Navbar, TabItem, Cell, Button} from 'mint-ui';

  export default {
    name: 'home.vue',
    data() {
      return {
      }
    },
    components: {
      Navbar,
      TabItem,
      Cell,
      Button
    },
    methods: {

    }
  }
</script>
