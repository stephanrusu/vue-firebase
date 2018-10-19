import { orderBy, findIndex } from 'lodash';
import { firestore } from '../../firebase';
import { TYPE_MESSAGES } from '../../constants';
import { firestoreObjectToArray } from '../../helpers';

const messages = {
  state: {
    messages: [],
  },
  actions: {
    loadMessages({ commit }) {
      // firestore
      //   .collection(TYPE_MESSAGES)
      //   .get()
      //   .then((query) => {
      //     const temp = firestoreObjectToArray(query);
      //     commit('setLoadedMessages', temp);
      //   });
      firestore
        .collection(TYPE_MESSAGES)
        .onSnapshot((query) => {
          const temp = firestoreObjectToArray(query);
          commit('setLoadedMessages', temp);
        });
    },
    processMessage({ commit }, payload) {
      const key = payload['.key'];
      const newMessage = Object.assign({}, payload);

      if (key === undefined) {
        const now = new Date();
        newMessage.date = now;
        firestore
          .collection(TYPE_MESSAGES)
          .add(newMessage)
          .then((doc) => {
            newMessage['.key'] = doc.id;
            newMessage.date.seconds = now.getTime();
            commit('createMessage', newMessage);
          });
      } else {
        delete newMessage['.key'];
        firestore
          .collection(TYPE_MESSAGES)
          .doc(key)
          .set(newMessage)
          .then(() => {
            commit('updateMessage', payload);
          });
      }
    },
    removeMessage({ commit }, payload) {
      firestore
        .collection(TYPE_MESSAGES)
        .doc(payload)
        .delete()
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
