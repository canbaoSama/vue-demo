<template>
  <Row class="">
    about-componnetB
    {{dataName}}
    <Button type="success" @click="changeNameB">点击B</Button>
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
      changeNameB() {
        this.$emit('changeName',"bbb");
      }
    },
    created() {
    }
  };
</script>
