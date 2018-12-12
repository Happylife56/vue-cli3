export default {
  path: '/financial',
  name: 'financial',
  meta: {
    title: '财务'
  },
  component: () => import('@/views/Financial.vue'),
  children: []
};
