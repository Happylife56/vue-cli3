<template>
  <div class="login">
  </div>
</template>

<script>
import {
  commonApi,
  exchangeToken,
  checkLogin,
  loginAuth
} from '../api/common.js'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Login',
  data() {
    return {
      imageURL: '',
      loginUrl: '' // 统一登陆的链接
    }
  },
  computed: {
    ...mapState('common', [
      'commonHosts' // 公用的host
    ])
  },
  mounted() {
    // 获取单点登录或者授权登录
    // this.getLoginInit()
  },
  methods: {
    ...mapMutations({
      setCommonHosts: 'common/setCommonHosts', // 设置公用的链接host
      setLoginUrl: 'common/setLoginUrl', // 设置统一的登陆域名
      setToken: 'common/setToken', // 设置token
      setDoubleAndroid: 'common/setDoubleAndroid', // 设置是否为双屏
      setOemDetail: 'common/setOemDetail' // 设置OEM的详情
    }),
    // 获取单点登录或者授权登录
    getLoginInit() {
      // 获取基础数据
      commonApi.getLoginData({
        fn: res => {
          this.setCommonHosts(res) // 设置公用的链接host
          this.setLoginUrl(res.loginUrl) // 设置统一的登陆域名
          // 判断是否为双屏跳转到财务模块
          if (this.$route.query.token && this.$route.query.doubleAndroid) {
            // 用android或ios登陆后获得的token进行验证
            let params = { appToken: this.$route.query.token }
            exchangeToken(params).then(res => {
              if (res.code == 1001) {
                this.setDoubleAndroid(true) // 设置为双屏的状态
                this.setToken(this.$route.query.token) // 设置token
              } else {
                // 判断是否为双屏
                if (typeof doubleAndroid !== 'undefined') {
                  // eslint-disable-next-line no-undef
                  doubleAndroid.afreshUrl() // token过期跳转退出的双屏的登录界面
                }
              }
            })
            return
          }
          // 获取登录界面的code
          if (this.$route.query.code) {
            // 检查登录（单点登录）
            checkLogin({ code: this.$route.query.code }).then(res => {
              if (res.code == 1001) {
                const detail = res.data
                this.setToken(detail.token) // 设置token
                // 判断是否为pad或者Android
                if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
                  // 判断设置类型
                  this.validataDevice()
                  return
                }
                // 获取OEM
                commonApi.getOemData({
                  fn: res => {
                    res.bitOem = true
                    this.setOemDetail(res) // 设置OEM的详情
                    // this.setHeaderInfo(res);//设置头部信息
                  }
                })
                // 跳转到首页
                this.$router.replace({ path: '/' })
              } else {
                // 重新授权
                // 判断设置类型
                this.validataDevice()
              }
            })
          } else {
            // 判断设置类型
            this.validataDevice()
          }
        }
      })
    },
    // 判断设置类型
    validataDevice() {
      const params = {
        // reUrl: this.commonHosts.adminUrl + 'index.html#/login',//回调链接
        isIfr: '1' // 回调的url是否是wxmp内嵌的链接，内嵌链接是0，不是1
      }
      // 判断是否为pad或者Android |Android
      if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        params.reUrl = this.commonHosts.adminUrl + 'pad/index.html#/login' // 回调链接
      } else {
        params.reUrl =
          process.env.NODE_ENV == 'development'
            ? 'http://shop1.deeptel.com.cn:8086/#/login'
            : this.commonHosts.adminUrl + 'index.html#/login' // 回调链接
      }
      loginAuth(params).then(res => {
        if (res.code == 1001) {
          window.location.href = res.data.loginAuthUrl
        } else {
          this.$message.error(res.data.msg)
        }
      })
    }
  }
}
</script>
