import Vue from 'vue';
import Router from 'vue-router';
import Welcome from '@/screens/Welcome';
import Account from '@/screens/Account';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    },
  ],
});