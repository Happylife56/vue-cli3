import { chooseSoreApi } from '../api';

const SET_SHOP_WORKING_DATA = 'setShopWorkingData'; //设置shopWorking的数据
const SET_DEFAULT_STORE_SET = 'setDefaultStoreSet'; //设置默认门店的设置
const SET_SELETED_STORE_INFO = 'setSeletedStoreInfo'; //设置选择门店的信息

// 选择门店
const state = {
  shopWorkingData: '', //刷新shopWorking的数据
  defaltStoreSet: '', //默认门店的设置
  seletedStoreInfo: '' //选择门店的信息
};

// mutations
const mutations = {
  //设置shopWorking的数据
  [SET_SHOP_WORKING_DATA](state, obj) {
    state.shopWorkingData = obj;
  },
  //设置默认门店的设置
  [SET_DEFAULT_STORE_SET](state, obj) {
    state.defaltStoreSet = obj;
  },
  //设置选择门店的信息
  [SET_SELETED_STORE_INFO](state, obj) {
    state.seletedStoreInfo = obj;
  }
};

// getters
const getters = {};

// actions
const actions = {
  //获取门店的信息（下拉菜单）
  async getSelectAllShop(params) {
    try {
      return new Promise(resolve => {
        chooseSoreApi.selectAllShop({
          params: { pageIndex: 1, pageCount: 30 },
          fn: res => {
            resolve(res);
          }
        });
      });
    } catch (error) {
      console.log(error);
    }
  },
  //刷新shopWorking
  async refreshWorking({ commit }) {
    try {
      return new Promise(resolve => {
        chooseSoreApi.refreshWorking({
          fn: res => {
            commit(SET_SHOP_WORKING_DATA, res); //设置shopWorking的数据
            resolve(res);
          }
        });
      });
    } catch (error) {
      console.log(error);
    }
  },
  //设置默认的门店
  async setDefaultShop({ commit }, params) {
    try {
      return new Promise(resolve => {
        chooseSoreApi.setDefaultShop({
          params: params,
          fn: res => {
            resolve(res);
          }
        });
      });
    } catch (error) {
      console.log(error);
    }
  },
  //获取默认门店设置
  async getDefaultShopSet({ commit }, params) {
    try {
      chooseSoreApi.getDefaultShopSet({
        params: params,
        fn: res => {
          commit(SET_DEFAULT_STORE_SET, res); //默认门店的设置
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
