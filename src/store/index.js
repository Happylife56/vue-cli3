import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import collect from './modules/collect'
import common from './modules/common'
import chooseStore from '@/components/shopHeader/store/chooseStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    collect, // 收银
    common, // 公用
    chooseStore // 选择门店
  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage // 修改存储的状态
    })
  ] // 状态持久化
})
