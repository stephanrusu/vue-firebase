import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

import messages from './modules/messages';
import pharmacies from './modules/pharmacies';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    messages,
    pharmacies,
  },
  state,
  getters,
  actions,
  mutations,
});
