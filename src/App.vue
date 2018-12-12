<template>
  <div id="app"><router-view></router-view></div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'app',
  computed: {
    ...mapState('common', [
      'oemDetail' //OEM的详情
    ])
  },
  mounted() {
    //设置头部的信息
    //设置头部信息
    if (this.oemDetail) {
      this.setHeaderInfo(this.oemDetail);
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
}
</style>
