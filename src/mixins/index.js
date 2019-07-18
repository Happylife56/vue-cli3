// 公共的方法

export default {
  data() {
    return {}
  },
  methods: {
    // 跳转路由
    loadPage(routerName, params) {
      if (params) {
        this.$router.push({
          name: routerName,
          params: params
        })
      } else {
        this.$router.push({
          name: routerName
        })
      }
    }
  }
}
