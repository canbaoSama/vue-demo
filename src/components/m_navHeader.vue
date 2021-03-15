<template>
    <Row id="m_navHeader">
      <mt-header fixed :title="title">
        <router-link to="/" slot="left" v-if="btn_back_show">
          <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right" v-if="btn_more_show" @click="showNavList"></mt-button>
      </mt-header>
    </Row>
</template>

<script>
  import { Header} from "mint-ui"

  export default {
    name: 'header',
    data() {
      return {
        title: "头部名字",
        btn_back_show: false,
        btn_more_show: false,
      }
    },
    components: {
      Header,
    },
    methods: {
      showNavList() {//点击展示导航列表

      }
    }
  }
</script>
