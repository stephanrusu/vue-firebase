import _ from 'lodash';
import { database } from '../../firebase';
import { TYPE_SPONSORS, TYPE_ACTIVE_SPONSOR } from '../constants';

const sponsors = {
  state: {
    sponsors: [],
    activeSponsor: {},
  },
  actions: {
    loadSponsors({ commit }) {
      database.ref(TYPE_SPONSORS).orderByChild('date').once('value', (snapshot) => {
        const items = snapshot.val();
        if (items !== null) {
          const temp = [];
          // eslint-disable-next-line
          for (const key in items) {
            if (Object.hasOwnProperty.call(items, key)) {
              temp.push({ '.key': key, ...items[key] });
            }
          }
          commit('setLoadedSponsors', temp);
        }
      });
    },
    processSponsor({ commit }, payload) {
      const key = payload['.key'];
      const newSponsor = Object.assign({}, payload);
      if (key === undefined) {
        newSponsor.date = new Date().getTime();
        database.ref(TYPE_SPONSORS).push(newSponsor).then((snapshot) => {
          newSponsor['.key'] = snapshot.key;
          commit('createSponsor', newSponsor);
        });
      } else {
        delete newSponsor['.key'];
        database.ref(TYPE_SPONSORS).child(key).update(newSponsor).then(() => {
          commit('updateSponsor', payload);
        });
      }
    },
    removeSponsor({ commit }, payload) {
      database.ref(TYPE_SPONSORS).child(payload).remove().then(() => {
        commit('removeSponsor', payload);
      });
    },
    loadActiveSponsor({ commit }) {
      database.ref(TYPE_ACTIVE_SPONSOR).once('value', (snapshot) => {
        const item = snapshot.val();
        if (item !== null) {
          commit('setActiveSponsor', item);
        }
      });
    },
    markActiveSponsor({ commit }, payload) {
      const newActiveSponsor = Object.assign({}, payload);
      newActiveSponsor.skey = newActiveSponsor['.key'];
      delete newActiveSponsor['.key'];
      database.ref(TYPE_ACTIVE_SPONSOR).set(newActiveSponsor).then(() => {
        commit('setActiveSponsor', newActiveSponsor);
      });
    },
    markInactiveSponsor({ commit }) {
      const inactiveSponsor = { skey: '' };
      database.ref(TYPE_ACTIVE_SPONSOR).set(inactiveSponsor).then(() => {
        commit('setActiveSponsor', inactiveSponsor);
      });
    },
  },
  getters: {
    loadedSponsors(state) {
      return state.sponsors.sort((itemA, itemB) => itemA.date < itemB.date);
    },
    sponsorsLength(state) {
      return state.sponsors.length;
    },
    loadSingleSponsor(state) {
      return key => state.sponsors.find(sponsor => sponsor['.key'] === key);
    },
    loadTheActiveSponsor(state) {
      return state.activeSponsor;
    },
  },
  mutations: {
    setLoadedSponsors(state, payload) {
      state.sponsors = payload;
    },
    createSponsor(state, payload) {
      state.sponsors.push(payload);
    },
    updateSponsor(state, payload) {
      const index = _.findIndex(state.sponsors, { '.key': payload['.key'] });
      state.sponsors.splice(index, 1, payload);
    },
    removeSponsor(state, payload) {
      const index = _.findIndex(state.sponsors, { '.key': payload });
      state.sponsors.splice(index, 1);
    },
    setActiveSponsor(state, payload) {
      state.activeSponsor = payload;
    },
  },
};

export default sponsors;
