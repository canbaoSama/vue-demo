import Vue from 'vue'


//全局的自定义指令

Vue.directive('ondblclick',{
  // 只调用一次，指令第一次绑定到元素时调用，用这个钩子函数可以定义一个在绑定时执行一次的初始化动作。
  bind(el,binding,vnode,oldVnode) {
    console.log( 'bind' );
  },

  // 被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于 document 中）。
  inserted: function(el,binding,vnode,oldVnode) {
    el.ondblclick = function () {
      console.log( 'inserted' );
    }
  },

  // 被绑定元素所在的模板更新时调用，而不论绑定值是否变化。
  update(el,binding,vnode,oldVnode) {
    console.log( 'update' );
  },

  // 被绑定元素所在模板完成一次更新周期时调用。
  componentUpdated ( el,binding,vnode,oldVnode) {
    console.log( 'componentUpdated' );
  },

  // 只调用一次，指令与元素解绑时调用。
  unbind ( el,binding,vnode,oldVnode) {
    console.log( 'unbind' );
  }
})
