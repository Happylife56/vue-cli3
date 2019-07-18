const SET_COMMON_HOSTS = 'setCommonHosts' // 设置公用的host
const SET_TOKEN = 'setToken' // 设置token
const SET_LOIGN_URL = 'setLoginUrl' // 设置统一的登录域名
const SET_DOUBLE_ANDROID = 'setDoubleAndroid' // 设置是否为双屏
const SET_OEM_DETAIL = 'setOemDetail' // 设置OEM的详情
const SET_MENU_SHOW_HIDDEN = 'setMenuShowHidden' // 设置菜单显示或者隐藏

const state = {
  commonHosts: '', // 公用的host
  token: '', // token
  loginUrl: '', // 登录的域名
  bitDoubleAndroid: false, // 是否为双屏
  oemDetail: '', // OEM的详情
  bitMenuShow: true // 菜单是否显示
}

// mutations
const mutations = {
  // 设置公用的host
  [SET_COMMON_HOSTS](state, obj) {
    state.commonHosts = obj
  },
  // 设置token
  [SET_TOKEN](state, data) {
    state.token = data
  },
  // 设置统一的登录域名
  [SET_LOIGN_URL](state, data) {
    state.loginUrl = data
  },
  // 设置是否双屏
  [SET_DOUBLE_ANDROID](state, bool) {
    state.bitDoubleAndroid = bool
  },
  // 设置OEM的详情
  [SET_OEM_DETAIL](state, obj) {
    state.oemDetail = obj
  },
  // 设置菜单显示和隐藏
  [SET_MENU_SHOW_HIDDEN](state, bool) {
    state.bitMenuShow = bool
  }
}

// getters
const getters = {}

// actions
const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
