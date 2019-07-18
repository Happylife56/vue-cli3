import {
  commonApi
} from '@/api/common.js'

const SET_LOGIN_URL = 'setLoginUrl'

const state = {
  loginUrl: '',
  show: false
}

// mutations
const mutations = {
  [SET_LOGIN_URL](state, url) {
    state.loginUrl = url
  }
}

// getters
const getters = {}

// actions
const actions = {
  async getLogin({
    commit
  }, params) {
    try {
      // commonApi.getLoginUrl2(params).then(res => {
      //   commit(SET_LOGIN_URL, res);
      // });
      commonApi.getLoginUrl2({
        params: params,
        fn: res => {
          console.log(res)
          commit(SET_LOGIN_URL, res)
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
