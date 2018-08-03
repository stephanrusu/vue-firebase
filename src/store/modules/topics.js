import { findIndex, orderBy } from 'lodash';
import { database } from '../../firebase';
import { TYPE_TOPICS } from '../constants';
import { firebaseObjectToArray } from '../../helpers';

const topics = {
  state: {
    topics: [],
  },
  actions: {
    loadTopics({ commit }) {
      database
        .ref(TYPE_TOPICS)
        .orderByChild('date')
        .once('value', (snapshot) => {
          const items = snapshot.val();
          if (items !== null) {
            const temp = firebaseObjectToArray(items);
            commit('setLoadedTopics', temp);
          }
        });
    },
    processTopic({ commit }, payload) {
      const key = payload['.key'];
      const newTopic = Object.assign({}, payload);
      if (key === undefined) {
        newTopic.date = new Date().getTime();
        database
          .ref(TYPE_TOPICS)
          .push(newTopic)
          .then((snapshot) => {
            newTopic['.key'] = snapshot.key;
            commit('createTopic', newTopic);
          });
      } else {
        delete newTopic['.key'];
        database
          .ref(TYPE_TOPICS)
          .child(key)
          .update(newTopic)
          .then(() => {
            commit('updateTopic', payload);
          });
      }
    },
    removeTopic({ commit }, payload) {
      database
        .ref(TYPE_TOPICS)
        .child(payload)
        .remove()
        .then(() => {
          commit('removeTopic', payload);
        });
    },
  },
  getters: {
    topicsLength: state => state.topics.length,
    loadSingleTopic: state => key => state.topics.find(topic => topic['.key'] === key),
    paginateTopics: state => (pageSize, pageNumber) => orderBy(state.topics, 'date', 'desc')
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
