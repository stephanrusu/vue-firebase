import { findIndex, orderBy } from 'lodash';
import { database } from '../../firebase';
import { TYPE_PHARMACIES } from '../../constants';
import { firebaseObjectToArray } from '../../helpers';

const pharmacies = {
  state: {
    pharmacies: [],
  },
  actions: {
    loadPharmacies({ commit }) {
      database
        .ref(TYPE_PHARMACIES)
        .orderByChild('date')
        .once('value', (snapshot) => {
          const items = snapshot.val();
          if (items !== null) {
            const temp = firebaseObjectToArray(items);
            commit('setLoadedPharmacies', temp);
          }
        });
    },
    processPharmacy({ commit }, payload) {
      const key = payload['.key'];
      const newPharmacy = Object.assign({}, payload);

      if (key === undefined) {
        newPharmacy.date = new Date().getTime();
        database
          .ref(TYPE_PHARMACIES)
          .push(newPharmacy)
          .then((snapshot) => {
            newPharmacy['.key'] = snapshot.key;
            commit('createPharmacy', newPharmacy);
          });
      } else {
        delete newPharmacy['.key'];
        database
          .ref(TYPE_PHARMACIES)
          .child(key)
          .update(newPharmacy)
          .then(() => {
            commit('updatePharmacy', payload);
          });
      }
    },
    removePharmacy({ commit }, payload) {
      database
        .ref(TYPE_PHARMACIES)
        .child(payload)
        .remove()
        .then(() => {
          // pharmercy xD
          commit('removePharmacy', payload);
        });
    },
  },
  getters: {
    pharmaciesLength: state => state.pharmacies.length,
    loadSinglePharmacy: state => key => state.pharmacies.find(pharmacy => pharmacy['.key'] === key),
    paginatePharmacy: state => (pageSize, pageNumber) => orderBy(state.pharmacies, 'date', 'desc')
      .slice((pageNumber - 1) * pageSize, pageNumber * pageSize),
  },
  mutations: {
    setLoadedPharmacies(state, payload) {
      state.pharmacies = payload;
    },
    createPharmacy(state, payload) {
      state.pharmacies.splice(0, 0, payload);
    },
    updatePharmacy(state, payload) {
      const index = findIndex(state.pharmacies, { '.key': payload['.key'] });
      state.pharmacies.splice(index, 1, payload);
    },
    removePharmacy(state, payload) {
      const index = findIndex(state.pharmacies, { '.key': payload });
      state.pharmacies.splice(index, 1);
    },
  },
};

export default pharmacies;
