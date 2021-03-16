import mybutton from './mybutton';

const components = [
  mybutton
]

const install = (Vue) => {
  for(var key in components) {
    Vue.component(components[key].name,components[key]);
  }
}

export default {
  install,
  mybutton,
}
