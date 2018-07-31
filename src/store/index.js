import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

import messages from './modules/messages';
import pharmacies from './modules/pharmacies';
import sponsors from './modules/sponsors';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    messages,
    pharmacies,
    sponsors,
  },
  state,
  getters,
  actions,
  mutations,
});
