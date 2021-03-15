<template>
  <Row class="">
    about-componnetA
    {{dataName}}
    <slot name="hasName"></slot>
    <Button type="warning" @click="changeNameA">点击A</Button>
    <slot name="hasName2"></slot>
  </Row>
</template>

<script>
  export default {
    props:[
      'dataName'
    ],
    components: {},
    data() {
      return {};
    },
    computed: {},

    methods: {
      changeNameA() {
        this.$emit('changeName',"aaa");
      }
    },
    created() {
    }
  };
</script>
