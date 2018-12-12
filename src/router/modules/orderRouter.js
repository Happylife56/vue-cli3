export default {
  path: '/order',
  name: 'order',
  meta: {
    title: '订单'
  },
  component: () => import('@/views/Order.vue') //订单
};
