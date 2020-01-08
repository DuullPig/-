import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 注册 Vant 组件
import './utils/register-vant'
// 加载全局样式
import './styles/index.less'
import 'normalize.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
