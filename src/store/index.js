import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

import messages from './modules/messages';
import pharmacies from './modules/pharmacies';
import sponsors from './modules/sponsors';
import topics from './modules/topics';
import notifications from './modules/notifications';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    messages,
    pharmacies,
    sponsors,
    topics,
    notifications,
  },
  state,
  getters,
  actions,
  mutations,
});
