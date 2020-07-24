import { findIndex, orderBy } from 'lodash';
import { TYPE_TOPICS } from '../../constants';
import { firestoreObjectToArray } from '../../helpers';
import * as fsMethods from '../../helpers/firestore';

const topics = {
  state: {
    topics: [],
  },
  actions: {
    loadTopics({ commit }) {
      fsMethods.getAllData(TYPE_TOPICS)
        .then((query) => {
          const temp = firestoreObjectToArray(query);
          commit('setLoadedTopics', temp);
        });
    },
    processTopic({ commit }, payload) {
      const key = payload['.key'];
      const newTopic = { ...payload };

      if (key === undefined) {
        fsMethods.addData(TYPE_TOPICS, newTopic)
          .then((doc) => {
            newTopic['.key'] = doc.id;
            newTopic.date = doc.data().date;
            commit('createTopic', newTopic);
          });
      } else {
        fsMethods.updateData(TYPE_TOPICS, newTopic)
          .then(() => {
            commit('updateTopic', payload);
          });
      }
    },
    removeTopic({ commit }, payload) {
      fsMethods.removeData(TYPE_TOPICS, payload)
        .then(() => {
          commit('removeTopic', payload);
        });
    },
  },
  getters: {
    loadedTopics: (state) => state.topics.sort((itemA, itemB) => itemA.date < itemB.date),
    topicsLength: (state) => state.topics.length,
    loadSingleTopic: (state) => (key) => state.topics.find((topic) => topic['.key'] === key),
    paginateTopics: (state) => (pageSize, pageNumber) => orderBy(state.topics, 'date', 'desc')
      .slice((pageNumber - 1) * pageSize, pageNumber * pageSize),
  },
  mutations: {
    setLoadedTopics(state, payload) {
      state.topics = payload;
    },
    createTopic(state, payload) {
      state.topics.splice(0, 0, payload);
    },
    updateTopic(state, payload) {
      const index = findIndex(state.topics, { '.key': payload['.key'] });
      state.topics.splice(index, 1, payload);
    },
    removeTopic(state, payload) {
      const index = findIndex(state.topics, { '.key': payload });
      state.topics.splice(index, 1);
    },
  },
};

export default topics;
