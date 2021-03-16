//自定义button组件
import Button from "./index.vue";

Button.install = (Vue)=>{
  Vue.component(Button.name,Button)
}

export default Button;
