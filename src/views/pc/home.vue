<template>
  <Row class="the-outermost-container">
    <Col span="4">
      <Button v-clickDown="name" type="success">自定义</Button>
      <Input v-model="firstName"></Input>
      <Input v-model="lastName" ></Input>
      <Input @input="sendGet" v-model="fullName"></Input>
    </Col>
    <Col span="4">
      <Button :style="{color: inputColor}">测试绑定</Button>
    </Col>
    <Col span="4">
      <Button class="animate__animated animate__backInDown" v-on:click="getDomInfo" type="warning">全局自定义</Button>
    </Col>
    <Col span="4">
      <h1 class="animate__animated animate__bounce">An animated element</h1>
    </Col>

    <Col span="4">
      <Button type="warning" @click="change">test change</Button>
    </Col>
  </Row>
</template>

<script>
  import {GET} from '../../utils/axios';
  import footer from '../../components/footer';
  import page from '../pc/page'

  export default {
    directives: {
      clickDown: {
        inserted: function (el,binding) {
          el.onclick = function () {
            console.log(binding.value);
          }
        }
      },
    },
    name: 'home.vue',
    data() {
      return {
        test:true,
        name: "我是神仙",
        firstName: "杨",
        lastName: "吉繁",
        source: '',
        colorList: ['red','orange','yellow','green','black','blue','pink'],
        inputColor: 'red',
      }
    },
    computed: {
      fullName() {
        return this.firstName + " " + this.lastName;
      }
    },
    watch: {
      'firstName' :() => {
        console.log('变化无常');
      }
    },
    methods: {
      sendGet(e) {
        this.cancelGet();
        // 每次都生成一个 token，给这个接口
        let source = this.$axios.CancelToken.source();
        this.source = source;
        let url = "http://127.0.0.1:3000?name=" + e;
        GET(this,url,{cancelToken: source.token,timeout: 3000},function () {

        })

      },
      // 取消请求;
      cancelGet() {
        if(this.source) {
          this.source.cancel("cancel http");
        }
      },

      getDomInfo(event) {
        console.log("啥玩意");
      },

      change(){
        this.test = !this.test;
      }
    },
    components: {
      footer,
      page
    },
    created () {
      console.log(this);
    },
    mounted () {
      let _this = this;
      setInterval(function () {
        _this.inputColor = _this.colorList[Math.floor(Math.random()*7)];
      },2000)
    }
  }
</script>
