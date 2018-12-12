<template>
  <div class="home">
    <transition name="fade-transformY" mode="out-in">
      <div class="left-menu" v-if="bitMenuShow"><asiderMenu></asiderMenu></div>
    </transition>
    <div class="right-view">
      <shopHeader></shopHeader>
      <transition name="fade-transform" mode="out-in">
        <keep-alive> <router-view></router-view> </keep-alive>
      </transition>
    </div>
  </div>
</template>

<script>
import asiderMenu from '../components/AsiderMenu';
import shopHeader from '../components/shopHeader';
import { mapState, mapMutations } from 'vuex';
export default {
  name: 'home',
  components: { asiderMenu, shopHeader },
  computed: {
    ...mapState('common', [
      'bitMenuShow' //菜单是否显示
    ])
  }
};
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
