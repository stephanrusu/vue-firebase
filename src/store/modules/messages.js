import _ from 'lodash';
import { database } from '../../firebase';
import { TYPE_MESSAGES } from '../constants';

const messages = {
  state: {
    messages: [],
  },
  actions: {
    loadMessages({ commit }) {
      database.ref(TYPE_MESSAGES).orderByChild('date').once('value', (snapshot) => {
        const items = snapshot.val();
        if (items !== null) {
          const temp = [];
          // eslint-disable-next-line
          for (const key in items) {
            if ({}.hasOwnProperty.call(items, key)) {
              temp.push({ '.key': key, ...items[key] });
            }
          }
          commit('setLoadedMessages', temp);
        }
      });
    },
    processMessage({ commit }, payload) {
      const key = payload['.key'];
      const newMessage = Object.assign({}, payload);
      if (key === undefined) {
        newMessage.date = new Date().getTime();
        database.ref(TYPE_MESSAGES).push(newMessage).then((snapshot) => {
          newMessage['.key'] = snapshot.key;
          commit('createMessage', newMessage);
        });
      } else {
        delete newMessage['.key'];
        database.ref(TYPE_MESSAGES).child(key).update(newMessage).then(() => {
          commit('updateMessage', payload);
        });
      }
    },
    removeMessage({ commit }, payload) {
      database.ref(TYPE_MESSAGES).child(payload).remove().then(() => {
        commit('removeMessage', payload);
      });
    },
  },
  getters: {
    loadedMessages(state) {
      return state.messages.sort((itemA, itemB) => itemA.date < itemB.date);
    },
    messagesLength(state) {
      return state.messages.length;
    },
    loadSingleMessage(state) {
      return key => state.messages.find(message => message['.key'] === key);
    },
  },
  mutations: {
    setLoadedMessages(state, payload) {
      state.messages = payload;
    },
    createMessage(state, payload) {
      state.messages.push(payload);
    },
    updateMessage(state, payload) {
      const index = _.findIndex(state.messages, { '.key': payload['.key'] });
      state.messages.splice(index, 1, payload);
    },
    removeMessage(state, payload) {
      const index = _.findIndex(state.messages, { '.key': payload });
      state.messages.splice(index, 1);
    },
  },
};

export default messages;
