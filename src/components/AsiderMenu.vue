<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#3d3d45"
    text-color="#fff"
    active-text-color="#f4364c"
  >
    <el-menu-item index="1">
      <i class="iconfont icon-caidan1"></i>
    </el-menu-item>
    <el-menu-item index="2">
      <i class="iconfont icon-qiantai"></i> <span>收银平台</span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="iconfont icon-dingdan"></i> <span>订单</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="iconfont icon-caiwuguanli1"></i> <span>财务</span>
    </el-menu-item>
    <el-menu-item index="5" class="menu-a">
      <a :href="commonHosts.jxcUrl" target="_blank">
        <i class="iconfont icon-dingdan1"></i> <span>订单管理</span>
      </a>
    </el-menu-item>
    <el-menu-item index="6">
      <el-popover placement="right" trigger="click" v-model="visible">
        <ul class="menu-more">
          <li
            v-for="(item, index) in menuMore"
            :key="index"
            class="pointer"
            @click="jumpRouter(item.name)"
          >
            <i class="iconfont" :class="item.iconfont"></i>
            <span>{{ item.title }}</span>
          </li>
        </ul>
        <div slot="reference" class="menu-div">
          <i class="iconfont icon-daohang"></i> <span>更多</span>
        </div>
      </el-popover>
    </el-menu-item>
    <el-menu-item index="7">
      <i class="iconfont icon-shezhi1"></i> <span>设置</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  data() {
    return {
      activeIndex: '2',
      visible: false, //弹出框
      menuMore: [
        { iconfont: 'icon-inbox', title: '钱箱', name: 'cashBox' },
        { iconfont: 'icon-dayin', title: '自定义打印', name: 'customPrint' },
        {
          iconfont: 'icon-zhekou1',
          title: '自定义整单折扣',
          name: 'customDiscount'
        }
      ]
    };
  },
  mounted() {
    //判断路由的状态设置当前的选择的菜单
    this.setActiveIndex();
  },
  computed: {
    ...mapState('common', [
      'bitMenuShow', //菜单是否显示
      'commonHosts' //公用的host
    ])
  },
  methods: {
    ...mapMutations({
      setMenuShowHidden: 'common/setMenuShowHidden' //设置菜单显示或者隐藏
    }),
    handleSelect(key) {
      switch (key) {
        case '1':
          this.setMenuShowHidden(!this.bitMenuShow); //设置菜单显示或者隐藏
          break;
        case '2':
          this.loadPage('collect');
          break;
        case '3':
          this.loadPage('order');
          break;
        case '4':
          this.loadPage('financial');
          break;
        case '5':
          break;
        default:
          break;
      }
    },
    //设置菜单的选择项
    setActiveIndex() {
      let detail = this.$route.path;
      if (detail.split('/collect').length > 1) {
        this.activeIndex = '2'; //收银
      } else if (detail.split('/order').length > 1) {
        this.activeIndex = '3'; //订单
      } else if (detail.split('/financial').length > 1) {
        this.activeIndex = '4'; //财务
      } else {
      }
    },
    //跳转路由
    jumpRouter(name) {
      // this.loadPage(name);//跳转路由
      this.visible = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
