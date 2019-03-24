import Vue from 'vue';
import Vuex from 'vuex';
import { name, version } from '../../package.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    version: `${name}@${version}`,
    password: '',
    email: '',
    eventexp: '',
    feel: '',
    routine: '',
    worried: '',
    actionAddress: '',
    control: '',
    helpnow: '',
    partner: ''
  },
  getters: {},
  mutations: {
  },
  actions: {
    }
});