import $api from '@/utils/request';
import Axios from 'axios';

export const chooseSoreApi = {
  //获取门店的信息（下拉菜单）
  selectAllShop(obj) {
    return $api.post({
      url: `/shops/background/shopSet/selectAllShop`,
      params: obj.params,
      fn: obj.fn
    });
  },

  //收银首页-刷新shopWorking
  refreshWorking(obj) {
    return $api.get({
      url: `/shops/erp/cashier/refreshWorking`,
      params: obj.params,
      fn: obj.fn
    });
  },

  //设置默认默认的门店
  setDefaultShop(obj) {
    return $api.post({
      url: `/shops/erp/cashier/setDefaultShop?shopId=` + obj.params,
      fn: obj.fn
    });
  },

  //获取机器的列表
  getAllMachine(obj) {
    return $api.get({
      url: `/shops/erp/cashier/all/normal`,
      params: obj.params,
      fn: obj.fn
    });
  },

  //收银首页-获取多粉后台链接跳转地址
  getWxmpUrl(obj) {
    return $api.get({
      url: `/shops/erp/cashier/getWxmpUrl`,
      params: obj.params,
      fn: obj.fn
    });
  },

  //获取默认门店设置
  getDefaultShopSet(obj) {
    return $api.get({
      url: `/shops/erp/basis/getDefaultShopSet`,
      params: obj.params,
      fn: obj.fn
    });
  },

  //收银首页-添加收银当班记录（选择机器号）
  setDefaultMachine(obj) {
    return $api.post({
      url: `/shops/erp/cashier/add?machineId=${obj.params}`,
      fn: obj.fn
    });
  }
};

//收银首页 - 获取默认门店
export const getDefaultShop = params => {
  return Axios.get(`/shops/erp/cashier/getDefaultShop`);
};
