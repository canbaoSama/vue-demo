import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import * as getters from './getters';
import * as actions from './actions';
import modules from './modules';

export const store = new Vuex.Store({
  actions,
  modules,
  getters
});
