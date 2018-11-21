import { auth, database } from '../firebase';
import { TYPE_USERS } from '../constants';
import { USER_ROLE } from '../constants/roles';

const actions = {
  signInUser({ commit }, payload) {
    const { email, password } = payload;

    auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        commit('userSignedIn', user.user.uid);
        commit('userAuthError', '');
      }).catch((error) => {
        const { code, message } = error;
        let errorMessage = '';

        switch (code) {
          case 'auth/invalid-email':
          case 'auth/user-disabled':
          case 'auth/user-not-found':
          case 'auth/wrong-password':
            errorMessage = code.replace('auth/', '');
            break;
          default:
            errorMessage = message;
            break;
        }
        commit('userAuthError', errorMessage);
      });
  },
  signUpUser({ commit }, payload) {
    const { email, password } = payload;

    auth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        commit('userSignedIn', user.user.uid);
        commit('userAuthError', '');
      }).catch((error) => {
        const { code, message } = error;
        let errorMessage = '';

        switch (code) {
          case 'auth/invalid-email':
          case 'auth/email-already-in-use':
          case 'auth/weak-password':
            errorMessage = code.replace('auth/', '');
            break;
          default:
            errorMessage = message;
            break;
        }

        commit('userAuthError', errorMessage);
      });
  },
  signOutUser({ commit }) {
    auth.signOut().then(() => {
      commit('userSignedOut');
    });
  },
  userAlreadySignedIn({ commit }, payload) {
    commit('userSignedIn', payload);
  },
  userWasSignedOut({ commit }) {
    commit('userSignedOut');
  },
  userErrorClear({ commit }) {
    commit('userAuthError', '');
  },
  getUserRole({ commit }, payload) {
    database
      .ref(TYPE_USERS)
      .orderByChild('uid')
      .equalTo(payload)
      .once('value', (snapshot) => {
        if (snapshot.val() !== null) {
          const user = snapshot.val();
          commit('updateUserRole', user[Object.keys(user)[0]].role);
        } else {
          commit('updateUserRole', USER_ROLE);
        }
      });
  },
};

export default actions;
