import { auth } from '../firebase';

const actions = {
  signInUser({ commit }, payload) {
    const { email, password } = payload;
    auth.signInWithEmailAndPassword(email, password).then((user) => {
      commit('userSignedIn', user.user.uid);
    }).catch((error) => {
      const { code, message } = error;
      let errorMessage = '';

      switch (code) {
        case 'auth/invalid-email':
          errorMessage = 'The email address is not valid';
          break;
        case 'auth/user-disabled':
          errorMessage = 'The user corresponding to the given email has been disabled';
          break;
        case 'auth/user-not-found':
          errorMessage = 'There is no user corresponding to the given email';
          break;
        case 'auth/wrong-password':
          errorMessage = 'The password is invalid for the given email';
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
    auth.createUserWithEmailAndPassword(email, password).then((user) => {
      commit('userSignedIn', user.user.uid);
    }).catch((error) => {
      const { code, message } = error;
      let errorMessage = '';

      switch (code) {
        case 'auth/invalid-email':
          errorMessage = 'The email address is not valid';
          break;
        case 'auth/email-already-in-use':
          errorMessage = 'There already exists an account with the given email' +
          ' addressser corresponding to the given email has been disabled';
          break;
        case 'auth/weak-password':
          errorMessage = 'The password is not strong enough';
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
  userErrorClear({ commit }) {
    commit('userAuthError', '');
  },
};

export default actions;
