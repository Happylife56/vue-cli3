<template>
  <div class="home">
    <Transition
      name="fade-transformY"
      mode="out-in"
    >
      <div
        class="left-menu"
        v-if="bitMenuShow"
      >
        <AsiderMenu></AsiderMenu>
      </div>
    </Transition>
    <div class="right-view">
      <ShopHeader></ShopHeader>
      <Transition
        name="fade-transform"
        mode="out-in"
      >
        <KeepAlive>
          <RouterView></RouterView>
        </KeepAlive>
      </Transition>
    </div>
  </div>
</template>

<script>
import AsiderMenu from '../components/AsiderMenu'
import ShopHeader from '../components/shopHeader/index'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: { AsiderMenu, ShopHeader },
  computed: {
    ...mapState('common', [
      'bitMenuShow' // 菜单是否显示
    ])
  }
}
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  display: flex;
  background-color: #f6f6f6;
  overflow-x: hidden;
  .left-menu {
    width: 120px;
    height: 100%;
  }
  .right-view {
    flex: 1;
    height: 100%;
    @include flex-column();
  }
}
@keyframes slidetoright {
  from {
    width: 0%;
  }
  to {
    width: 120px;
  }
}
</style>
