import { findIndex, orderBy } from 'lodash';
import { database, storage } from '../../firebase';
import { TYPE_SPONSORS, TYPE_ACTIVE_SPONSOR } from '../../constants';
import { firebaseObjectToArray } from '../../helpers';

const sponsors = {
  state: {
    sponsors: [],
    activeSponsor: {},
  },
  actions: {
    loadSponsors({ commit }) {
      database
        .ref(TYPE_SPONSORS)
        .orderByChild('date')
        .once('value', (snapshot) => {
          const items = snapshot.val();
          if (items !== null) {
            const temp = firebaseObjectToArray(items);
            commit('setLoadedSponsors', temp);
          }
        });
    },
    processSponsor({ commit }, payload) {
      const key = payload['.key'];
      const newSponsor = Object.assign({}, payload);

      if (key === undefined) {
        newSponsor.date = new Date().getTime();
        database
          .ref(TYPE_SPONSORS)
          .push(newSponsor)
          .then((snapshot) => {
            newSponsor['.key'] = snapshot.key;
            commit('createSponsor', newSponsor);
          });
      } else {
        delete newSponsor['.key'];
        database
          .ref(TYPE_SPONSORS)
          .child(key)
          .update(newSponsor)
          .then(() => {
            commit('updateSponsor', payload);
          });
      }
    },
    removeSponsor({ commit, getters, dispatch }, payload) {
      const activeSponsor = getters.loadTheActiveSponsor;

      if (activeSponsor.skey === payload) {
        dispatch('markInactiveSponsor');
      }

      const { fileRef } = getters.loadSingleSponsor(payload);
      if (fileRef !== '') {
        const deleteTask = storage.ref().child(fileRef);
        deleteTask
          .delete()
          .then()
          .catch((error) => {
            // eslint-disable-next-line
            console.error(error.message);
          });
      }

      database
        .ref(TYPE_SPONSORS)
        .child(payload)
        .remove()
        .then(() => {
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
      database
        .ref(TYPE_ACTIVE_SPONSOR)
        .set(newActiveSponsor)
        .then(() => {
          commit('setActiveSponsor', newActiveSponsor);
        });
    },
    markInactiveSponsor({ commit }) {
      const inactiveSponsor = { skey: '' };

      database
        .ref(TYPE_ACTIVE_SPONSOR)
        .set(inactiveSponsor)
        .then(() => {
          commit('setActiveSponsor', inactiveSponsor);
        });
    },
  },
  getters: {
    sponsorsLength: state => state.sponsors.length,
    loadSingleSponsor: state => key => state.sponsors.find(sponsor => sponsor['.key'] === key),
    loadTheActiveSponsor: state => state.activeSponsor,
    paginateSponsors: state => (pageSize, pageNumber) => orderBy(state.sponsors, 'date', 'desc')
      .slice((pageNumber - 1) * pageSize, pageNumber * pageSize),
  },
  mutations: {
    setLoadedSponsors(state, payload) {
      state.sponsors = payload;
    },
    createSponsor(state, payload) {
      state.sponsors.splice(0, 0, payload);
    },
    updateSponsor(state, payload) {
      const index = findIndex(state.sponsors, { '.key': payload['.key'] });
      state.sponsors.splice(index, 1, payload);
    },
    removeSponsor(state, payload) {
      const index = findIndex(state.sponsors, { '.key': payload });
      state.sponsors.splice(index, 1);
    },
    setActiveSponsor(state, payload) {
      state.activeSponsor = payload;
    },
  },
};

export default sponsors;
