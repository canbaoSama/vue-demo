<template>
  <Row id="navHeader">
    <Menu mode="horizontal" :theme="theme1" active-name="1">
      <MenuItem name="1" v-for="(item,index) in getMenuList" :key="item.name">
        <MenuItem v-if="item.total_level === 1" :name="index" :to="item.children[0].path">
          <Icon type="ios-paper"></Icon>
          {{item.title}}
        </MenuItem>

        <Submenu v-else :name="index">
          <template slot="title">
            <Icon type="ios-stats"></Icon>
            {{item.title}}
          </template>
          <MenuItem v-for="(item_2,index) in item.children" :key="item_2.name" :name="item_2.name" :to="item_2.path">{{item_2.title}}</MenuItem>
        </Submenu>
      </MenuItem>
    </Menu>
  </Row>
</template>

<script>
  import {pcRouter} from '../router/index'

  export default {
    name: 'navHeader.vue',
    data() {
      return {
        theme1: "dark",
      }
    },
    computed: {
      getMenuList() {
        return pcRouter;
      }
    },
    components: {},
    methods: {

    },
    mounted () {

    }
  }
</script>

<style scoped>

</style>
