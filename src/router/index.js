import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'

import orderRouter from './modules/orderRouter'
import financialRouter from './modules/financialRouter'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/collect',
    children: [{
      path: '/collect',
      name: 'collect', // 收银
      meta: {
        title: '收银平台'
      },
      component: () => import('@/views/Collect.vue')
    },
    orderRouter, // 订单
    financialRouter // 财务
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/print',
    name: 'print',
    component: () => import('@/views/Print.vue')
  }
  ]
})
