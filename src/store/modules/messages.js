import { orderBy, findIndex } from 'lodash';
import { TYPE_MESSAGES } from '../../constants';
import { firestoreObjectToArray } from '../../helpers';
import * as fsMethods from '../../helpers/firestore';

const messages = {
  state: {
    messages: [],
  },
  actions: {
    loadMessages({ commit }) {
      fsMethods.getAllData(TYPE_MESSAGES)
        .then((query) => {
          const temp = firestoreObjectToArray(query);
          commit('setLoadedMessages', temp);
        });
    },
    processMessage({ commit }, payload) {
      const key = payload['.key'];
      const newMessage = Object.assign({}, payload);

      if (key === undefined) {
        fsMethods.addData(TYPE_MESSAGES, newMessage)
          .then((docRef) => {
            fsMethods.getDocument(TYPE_MESSAGES, docRef.id)
              .then((doc) => {
                if (doc.exists) {
                  const newDocument = Object.assign({}, doc.data());
                  newDocument['.key'] = doc.id;
                  commit('createMessage', newDocument);
                }
              });
          });
      } else {
        fsMethods.updateData(TYPE_MESSAGES, newMessage)
          .then(() => {
            commit('updateMessage', payload);
          });
      }
    },
    removeMessage({ commit }, payload) {
      fsMethods.removeData(TYPE_MESSAGES, payload)
        .then(() => {
          commit('removeMessage', payload);
        });
    },
  },
  getters: {
    messagesLength: state => state.messages.length,
    loadSingleMessage: state => key => state.messages.find(message => message['.key'] === key),
    paginateMessages: state => (pageSize, pageNumber) => orderBy(state.messages, 'date', 'desc')
      .slice((pageNumber - 1) * pageSize, pageNumber * pageSize),
  },
  mutations: {
    setLoadedMessages(state, payload) {
      state.messages = payload;
    },
    createMessage(state, payload) {
      state.messages.splice(0, 0, payload);
    },
    updateMessage(state, payload) {
      const index = findIndex(state.messages, { '.key': payload['.key'] });
      state.messages.splice(index, 1, payload);
    },
    removeMessage(state, payload) {
      const index = findIndex(state.messages, { '.key': payload });
      state.messages.splice(index, 1);
    },
  },
};

export default messages;
