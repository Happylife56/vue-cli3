// 订单
<template>
  <div class="order">
    <h1>This is an order page</h1>
    <span>{{ money | moneyType }}</span>
  </div>
</template>

<script>
export default {
  name: 'Order',
  data() {
    return {
      money: '20'
    };
  }
};
</script>

<style lang="scss" scoped>
.order {
  border: 1px solid seagreen;
  height: 100%;
  box-sizing: border-box;
}
</style>
