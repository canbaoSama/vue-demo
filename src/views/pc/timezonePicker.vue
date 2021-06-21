<style lang="scss">
.timezone {
  width: 90%;
  margin: 30px auto 70px;
  background: linear-gradient(to bottom, #FCFDFE,#FAFCFF,#F8FAFF);
  overflow: hidden;
  padding-bottom: calc(38% + 130px);
  height: 0;
  position: relative;
  box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.1);

  .filter-box {
    padding: 24px 30px;
    background: #EFF2F7;
    border-radius: 6px 6px 0px 0px;
    font-size: 16px;
    color: #666666;

    * {
      float: none;
    }
    select {
      outline: none;
      width: 40%;
      min-width: 280px;
      height: 34px;
      background: #FFFFFF;
      border-radius: 4px;
      border: 1px solid #D8D8D8;
      color: #666666;
    }

    .select2-container {
      display: none;
      width: 60% !important;
      text-align: right;
      line-height: 34px;
      font-size: 16px;
      float: right;
      color: #666666;
    }

    .quick-link {
      width: 100%;
      margin-top: 24px;
      text-align: center;
      overflow: initial;
      color: #666666;

      span {
        color: #666666;
        font-size: 14px;
        border: 1px solid #999990;
        padding: 4px 10px;
        &.active {
          background-color: #5c86dd;
          color: #ffffff;
        }
        &:hover {
          background-color: #5c86dd;
          color: #ffffff;
        }
      }
    }
  }
  .timezone-map {
    z-index: 2;
    position: absolute;
  }

  .sel-timezone {
    position: absolute;
    right: 30px;
    top: 24px;
    font-size: 16px;
    color: #333333;
    line-height: 34px;
  }

  .ivu-row {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 130px;
    z-index: 1;
    .ivu-col {
      height: 100%;
      border: 1px solid #f1f4f9;
    }
  }
}

.timezone-map polygon {//为了维持hover时的类权重
  fill: #bfc2cc;
  stroke-width: .2;
  stroke: #ffffff;
}
.timezone-map polygon:hover {
  stroke: #5c86dd;
  fill: #5c86dd;
  cursor: pointer;
}
.timezone-map polygon[data-selected=true] {
  fill: #5c86dd;
  stroke: #5c86dd;
}
</style>
<template>
  <div class="timezone">
    <div :options="options" v-model="timezone" @input></div>
    <div class="sel-timezone">时区：{{timezone}}</div>
    <Row class="line-bg">
      <col span="1"></col>
      <Col span="1"></Col>
      <Col span="1"></Col>
      <Col span="1"></Col>
      <Col span="1"></Col>
      <Col span="1"></Col>
      <Col span="1"></Col>
      <Col span="1"></Col>
      <Col span="1"></Col>
      <Col span="1"></Col>
      <Col span="1"></Col>
      <Col span="1"></Col>
      <Col span="1"></Col>
      <Col span="1"></Col>
      <Col span="1"></Col>
      <Col span="1"></Col>
      <Col span="1"></Col>
      <Col span="1"></Col>
      <Col span="1"></Col>
      <Col span="1"></Col>
      <Col span="1"></Col>
      <Col span="1"></Col>
      <Col span="1"></Col>
      <Col span="1"></Col>
    </Row>
  </div>
</template>

<script>
import $ from 'jquery'
import 'timezone-picker'
import 'moment-timezone'
import 'timezone-picker/dist/styles/timezone-picker.css'

export default {
  name: 'TimezonePickerVue',
  data() {
    return {
      timezone: 'America/Chicago',
      options: {
        width: 500,
        height: 250,
        defaultValue: { value: 'Asia/Shanghai', attribute: 'timezone' },
        quickLink: [
          {
            '中国上海': 'Asia/Shanghai',
            '日本': 'Asia/Tokyo',
            '瑞典': 'Europe/Stockholm',
            '德国': 'Europe/Berlin'
          }
        ],
        selectClass: 'Cbox',
        filterBoxClass: 'Cbox',
        mapHoverType: 'zonename',
        showHoverText: false
      }
    };
  },
  computed: {
  },
  methods: {
    getZoneTime(offset) {
      debugger
      // 取本地时间
      var localtime = new Date();
      // 取本地毫秒数
      var localmesc = localtime.getTime();
      // 取本地时区与格林尼治所在时区的偏差毫秒数
      var localOffset = localtime.getTimezoneOffset() * 60000;
      // 反推得到格林尼治时间
      var utc = localOffset + localmesc;
      // 得到指定时区时间
      var calctime = utc + (3600000 * offset);
      var nd = new Date(calctime);

      return nd;
      //return nd.getFullYear()+"-"+nd.getUTCMonth()+"-"+nd.getDay() + " " + nd.toLocaleTimeString() ;
    }
  },
  mounted: function () {
    var vm = this;
    var $tzp = $(this.$el).timezonePicker(this.options);
    $tzp.on('map:value:changed', function () {
      let data = $(this).data('timezonePicker').getValue()[0]
      console.log(data);
      console.log(vm.getZoneTime(data.offset));
      vm.timezone = $(this).data('timezonePicker').getValue()[0].timezone;
      //vm.$emit('timezonePicker',vm.timezone)
    })
  }
}
</script>
