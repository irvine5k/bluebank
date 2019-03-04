import Vue from 'vue'
import Router from 'vue-router'
import Transfer from '@/components/Transfer.vue'
import Deposit from '@/components/Deposit.vue'
import Withdraw from '@/components/Withdraw.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Transfer',
      component: Transfer
    },
    {
      path: '/deposit',
      name: 'Deposit',
      component: Deposit
    },
    {
      path: '/withdraw',
      name: 'Withdraw',
      component: Withdraw
    }
  ]
})
