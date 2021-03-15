<template>
  <div class="">
    <keep-alive>
      <testa v-if="test" dataName="testa" @changeName="changeName"></testa>
      <testb v-else dataName="testb" @changeName="changeName"></testb>
    </keep-alive>

<!--    <component :is="test ? 'testa':'testb' "></component>-->

    <Button @click="change" ref="btntest">test change</Button>

    <testa>我在page页面</testa>
    <Col span="4">
      <testa>
        <template v-slot:hasName>第一个</template>
        <template v-slot:hasName2>第二个</template>
      </testa>
    </Col>
  </div>
</template>

<script>
  import testa from "../../components/com_a";
  import testb from "../../components/com_b";

  export default {
    components: { testa,testb},
    data() {
      return {
        test:true
      };
    },
    computed: {},
    methods: {
      change(){
        //this.test = !this.test;
        this.$refs.btntest.innerHTML = '已经点了';
      },
      changeName(data) {
        console.log(data);
      }
    }
  };
</script>
