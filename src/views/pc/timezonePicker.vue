<style lang="scss">
.timezone {
  width: 80%;
  margin: 30px auto;

  .filter-box {

    select {
      padding: 3px 10px;
      font-size: 16px;
      float: none;
      height: 30px;
    }

    .select2-container {
      width: 100px;
      margin: 0 0 0 20px;
      font-size: 16px;
      float: none;
    }
  }
}

.timezone-map polygon {//为了维持hover时的类权重
  fill: #BBB;
  stroke-width: .2;
  stroke: #ffffff;
}
</style>
<template>
  <div class="timezone">
    <div :options="options" v-model="timezone" @input></div>
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
        defaultValue: { value: 'America/Los_Angeles', attribute: 'zonename' },
        quickLink: [
          {
            'America/Los Angeles': 'America/Los_Angeles',
            'America/Denver': 'America/Denver',
            'America/Chicago': 'America/Chicago',
            'America/New York': 'America/New_York'
          }
        ],
        selectClass: 'Cbox',
        filterBoxClass: 'Cbox',
        mapHoverType: 'zonename',
        showHoverText: false
      }
    };
  },
  computed: {},
  methods: {
    input(data) {
      console.log(data);
    }
  },
  mounted: function () {
    var vm = this;
    var $tzp = $(this.$el).timezonePicker(this.options)
    $tzp.on('map:value:changed', function () {
      console.log($(this).data('timezonePicker').getValue());
      vm.$emit('input', $(this).data('timezonePicker').getValue())
    })
    // setTimeout(function (){
    //   $('.country-lov').empty().append('<option value="Africa/Addis_Ababa">Africa/Addis_Ababa (EAT)</option>');
    // },3000)
    if (this.value) {
      $tzp.data('timezonePicker').setValue(this.value)
    }
  }
}
</script>
