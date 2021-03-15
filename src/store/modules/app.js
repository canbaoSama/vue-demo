import Vue from 'vue';
const app = {
  state: {
    menuList: [],
    debugMode: false,
  },
  nnn: {
    name: '我是谁',
  },
  mutations: {
    updateMenulist (state, menus) {
      state.menuList = menus;
      Vue.set(state,'age',15);
    },
    edit(state,obj) {
      console.log("888");
    }
  },
  getters: {
    nameInfo(state){
      return "姓名:"+state.name
    },
    fullInfo(state,getters){
      return getters.nameInfo+'年龄:'+state.age
    }
  },
  actions:{
    aEdit(context,payload){
      return new Promise((resolve, reject)=>{
        setTimeout(()=>{
          context.commit('edit',payload);
          reject();
        },2000)
      }).then(function (res) {
        console.log("成功");
      }).catch(function (err) {
        console.log("失败");
      })

    }
  }
};

export default app;
