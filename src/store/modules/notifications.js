import { orderBy, findIndex } from 'lodash';
import { TYPE_NOTIFICATIONS } from '../../constants';
import { firestoreObjectToArray } from '../../helpers';
import * as fsMethods from '../../helpers/firestore';

const notifications = {
  state: {
    notifications: [],
  },
  actions: {
    loadNotifications({ commit }) {
      fsMethods.getAllData(TYPE_NOTIFICATIONS)
        .then((query) => {
          const temp = firestoreObjectToArray(query);
          commit('setLoadedNotifications', temp);
        });
    },
    processNotification({ commit }, payload) {
      const newNotification = Object.assign({}, payload);

      fsMethods.addData(TYPE_NOTIFICATIONS, payload)
        .then((doc) => {
          newNotification['.key'] = doc.id;
          newNotification.date = doc.data().date;
          commit('createNotification', newNotification);
        });
    },
    removeMessage({ commit }, payload) {
      fsMethods.removeData(TYPE_NOTIFICATIONS, payload)
        .then(() => {
          commit('removeNotification', payload);
        });
    },
  },
  getters: {
    notificationsLength: state => state.notifications.length,
    loadSingleNotification: state => key => state.notifications.find(notification => notification['.key'] === key),
    paginateNotifications: state => (pageSize, pageNumber) => orderBy(state.notifications, 'date', 'desc')
      .slice((pageNumber - 1) * pageSize, pageNumber * pageSize),

  },
  mutations: {
    setLoadedNotifications(state, payload) {
      state.notifications = payload;
    },
    createNotification(state, payload) {
      state.notifications.splice(0, 0, payload);
    },
    removeNotification(state, payload) {
      const index = findIndex(state.notifications, { '.key': payload });
      state.notifications.splice(index, 1);
    },
  },
};

export default notifications;
