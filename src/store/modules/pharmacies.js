import { findIndex, orderBy } from 'lodash';
import { TYPE_PHARMACIES } from '../../constants';
import { firestoreObjectToArray } from '../../helpers';
import * as fsMethods from '../../helpers/firestore';

const pharmacies = {
  state: {
    pharmacies: [],
  },
  actions: {
    loadPharmacies({ commit }) {
      fsMethods.getAllData(TYPE_PHARMACIES)
        .then((query) => {
          const temp = firestoreObjectToArray(query);
          commit('setLoadedPharmacies', temp);
        });
    },
    processPharmacy({ commit }, payload) {
      const key = payload['.key'];
      const newPharmacy = { ...payload };

      if (key === undefined) {
        fsMethods.addData(TYPE_PHARMACIES, newPharmacy)
          .then((doc) => {
            newPharmacy.key = doc.id;
            newPharmacy.date = doc.data().date;
            commit('createPharmacy', newPharmacy);
          });
      } else {
        fsMethods.updateData(TYPE_PHARMACIES, newPharmacy)
          .then(() => {
            commit('updatePharmacy', payload);
          });
      }
    },
    removePharmacy({ commit }, payload) {
      fsMethods.removeData(TYPE_PHARMACIES, payload)
        .then(() => {
          commit('remove');
          // pharmercy xD
          commit('removePharmacy', payload);
        });
    },
  },
  getters: {
    pharmaciesLength: (state) => state.pharmacies.length,
    loadSinglePharmacy: (state) => (key) => state.pharmacies.find((pharmacy) => pharmacy['.key'] === key),
    paginatePharmacy: (state) => (pageSize, pageNumber) => orderBy(state.pharmacies, 'date', 'desc')
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
