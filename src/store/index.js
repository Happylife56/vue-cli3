import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import chooseStore from '@/components/shopHeader/store/chooseStore'

/**
 * 读取./modules下的所有js文件并注册模块
 */

const requireModule = require.context('./modules', true, /\.js$/)
const module = {}
requireModule.keys().forEach(key => {
  const moduleName = key.replace(/(\.\/|.*\/|\.js)/g, '')
  module[moduleName] = {
    ...requireModule(key).default
  }
})

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ...module,
    chooseStore // 选择门店
  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage // 修改存储的状态
    })
  ] // 状态持久化
})
