import Vue from 'vue';
import Router from 'vue-router';
import Welcome from '@/screens/Welcome';
import Account from '@/screens/Account';
import Logging from '@/screens/LoggingPage';
import FollowUp from '@/screens/FollowUp';


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
    {
      path: '/logging',
      name: 'Logging',
      component: Logging
    },
    {
      path: '/followup',
      name: 'FollowUp',
      component: FollowUp
    }
  ],
});