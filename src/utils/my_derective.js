import Vue from 'vue'

Vue.directive('pin',{
  inserted: function (el) {
    el.onclick = function (){
      console.log('777');
    }
  }
})
