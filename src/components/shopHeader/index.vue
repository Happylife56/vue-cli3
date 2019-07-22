// header

<template>
  <ul class="shop-header">
    <li>
      <i
        class="iconfont icon-caidan1 pointer mr20"
        @click="setMenuShowHidden(!bitMenuShow)"
        v-if="!bitMenuShow"
      >
      </i>
      <span class="shop-info">
        <img
          src="../../assets/image/logo.png"
          alt=""
        />
        <span class="ml10">
          翼店智慧商超
        </span>
      </span>
      <span class="ml20 mr20">
        <span>机器号：<span>2</span></span>
      </span>
      <span>当班时间：<span>00:00~23:59</span></span>
    </li>
    <!-- 头部的标题 -->
    <li class="font-bold">
      {{ $route.meta.title }}
    </li>
    <li>
      <i class="iconfont icon-jianpan1 pointer">
      </i>
      <ElPopover
        placement="bottom"
        trigger="hover"
        class=" ml20 mr20"
      >
        <img
          src="../../assets/image/boss.jpg"
          alt="图片无法加载"
        />
        <ul class="flex-center">
          <li class="color-33">
            boss端小程序
          </li>
          <li>扫码进入</li>
        </ul>
        <i
          class="iconfont icon-erweima1 pointer"
          slot="reference"
        >
        </i>
      </ElPopover>
      <!-- 选择门店 -->
      <ChooseStore ref="childStore">
      </ChooseStore>
      <!-- 用户信息 -->
      <ElPopover
        placement="bottom"
        trigger="hover"
        width="220"
      >
        <ul class="user-info">
          <li>
            <span>
              <i class="iconfont icon-yonghu mr10">
              </i>收银员
            </span>
            <span>65656</span>
          </li>
          <li>
            <span>
              <i class="iconfont icon-jin  mr10">
              </i>我的营收
            </span>
            <span>65656</span>
          </li>
          <li>
            <span>
              <i class="iconfont icon-shichang  mr10">
              </i>当班时长
            </span>
            <span>65656</span>
          </li>
          <li
            class="pointer"
            @click="$refs.childStore.backLogin()"
          >
            <span>
              <i class="iconfont icon-tuichu  mr10">
              </i>交班/退出
            </span>
            <span></span>
            <!-- <el-button type="text"
              ><i class="iconfont icon-tuichu  mr10"></i>交班/退出</el-button
            > -->
          </li>
        </ul>
        <i
          class="iconfont icon-yonghu pointer ml20"
          slot="reference"
        >
        </i>
      </ElPopover>
    </li>
  </ul>
</template>

<script>
import ChooseStore from './components/ChooseStore'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'ShopHeader',
  computed: {
    ...mapState('common', [
      'bitMenuShow' // 菜单是否显示
    ])
  },
  components: { ChooseStore },
  methods: {
    ...mapMutations({
      setMenuShowHidden: 'common/setMenuShowHidden' // 设置菜单显示或者隐藏
    })
  }
}
</script>

<style lang="scss" scoped>
.shop-header {
  // height: 50px;
  margin-bottom: 10px;
  background-color: #ffffff;
  padding: 0 20px;
  font-size: 18px;
  @include flex-type(space-between, center);
  flex-wrap: wrap;
  li {
    margin: 8px 0;
    @include flex-type(null, center);
    .shop-info {
      @include flex-type(null, center);
    }
    img {
      width: 30px;
      height: 30px;
    }
  }
  .font-bold {
    font-size: 20px;
    color: $color333;
    // font-weight: 600;
  }
}
</style>
