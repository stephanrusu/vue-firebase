import { orderBy } from 'lodash';
import { database } from '../../firebase';
import { TYPE_NOTIFICATIONS } from '../constants';
import { firebaseObjectToArray } from '../../helpers';

const notifications = {
  state: {
    notifications: [],
  },
  actions: {
    loadNotifications({ commit }) {
      database
        .ref(TYPE_NOTIFICATIONS)
        .orderByChild('date')
        .once('value', (snapshot) => {
          const items = snapshot.val();
          if (items !== null) {
            const temp = firebaseObjectToArray(items);
            commit('setLoadedNotifications', temp);
          }
        });
    },
    processNotification({ commit }, payload) {
      const newNotification = Object.assign({}, payload);
      newNotification.date = new Date().getTime();
      database
        .ref(TYPE_NOTIFICATIONS)
        .push(newNotification)
        .then((snapshot) => {
          newNotification['.key'] = snapshot.key;
          commit('createNotification', newNotification);
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
  },
};

export default notifications;
