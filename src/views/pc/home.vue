<style>
@import "../../../src/assets/sass/pc/demo.scss";
</style>
<template>
  <Row class="the-outermost-container">
    <myButton type="primary">按钮</myButton>
    <Select v-model="selectNum" multiple>
      <Option value="1">1</Option>
      <Option value="2">2</Option>
      <Option value="3">3</Option>
      <Option value="4">4</Option>
    </Select>
    <Input v-bind:placeholder="message" ></Input>
    message is :{{message}}
    selectNum is :{{selectNum}}

    <div class="load">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>

  </Row>
</template>

<script>
  export default {
    name: 'home.vue',
    data() {
      return {
        message: '',
        selectNum: []
      }
    },
    computed: {
    },
    watch: {
    },
    methods: {
    },
    components: {
    },
    created () {
    },
    mounted () {
      console.log(this.$el);
    }
  }
</script>
