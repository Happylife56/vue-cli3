import $api from '../utils/request'
import Axios from 'axios'

export const commonApi = {
  // 统一登录的域名
  getLoginUrl(obj) {
    return $api.get({
      url: `/shops/erp/basis/CF946E2B/getLoginUrl`,
      params: obj.params,
      fn: obj.fn
    })
  },

  // getLoginUrl2(params) {
  //   return $api.post2(`/shops/erp/order/getInstallmentOrderPage`, params);
  // },
  getLoginUrl2(obj) {
    return $api.post({
      url: `/shops/erp/order/getInstallmentOrderPage`,
      params: obj.params,
      fn: obj.fn
    })
  },

  // 授权登录链接获取（单点登录）
  loginAuth(obj) {
    return $api.get({
      url: `/shops/erp/basis/CF946E2B/loginAuth`,
      params: obj.params,
      fn: obj.fn
    })
  },

  // 获取登录基础数据
  getLoginData(obj) {
    return $api.get({
      url: `/shops/erp/basis/CF946E2B/getLoginData`,
      params: obj.params,
      fn: obj.fn
    })
  },

  // 获取oem数据
  getOemData(obj) {
    return $api.get({
      url: `/shops/erp/basis/getOemData`,
      params: obj.params,
      fn: obj.fn
    })
  }
}
// 用android或ios登陆后获得的token进行验证
export const exchangeToken = params => {
  return Axios.get(`/shops/erp/basis/CF946E2B/app/exchangeToken`, {
    params: params
  })
}

// 授权登录链接获取（单点登录）
export const loginAuth = params => {
  return Axios.get(`/shops/erp/basis/CF946E2B/loginAuth`, {
    params: params
  })
}

// 检查登录（单点登录）
export const checkLogin = params => {
  return Axios.get(`/shops/erp/basis/CF946E2B/checkLogin`, {
    params: params
  })
}
