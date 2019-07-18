import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './plugins/element.js'

import './styles/normalize.css'
import './assets/iconfont/iconfont.css'

import * as filters from './filters'

// import Meta from 'vue-meta'
// Vue.use(Meta)

// 引用公用的方法
import Mixin from './mixins'
// 设置全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false
Vue.mixin(Mixin)

// router.beforeEach((to, from, next) => {
//   if (to.meta.icon) {
//     document.icon =
//       'https://maint.deeptel.com.cn/upload/M00/00/27/cWrKpVv7lQKASwaXAAEG_RLR1Ak009.png';
//   }
//   next();
// });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
