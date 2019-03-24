import Vue from 'vue';
import Vuex from 'vuex';
import { name, version } from '../../package.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    version: `${name}@${version}`,
    fname: '',
    email: ''
  },
  getters: {},
  mutations: {
  },
  actions: {
    }
});