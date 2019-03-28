import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
new Vue({
  el: '#app',
  render:h=>h(App)
})
