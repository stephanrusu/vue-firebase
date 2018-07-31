import { auth } from '../firebase';

const actions = {
  signInUser({ commit }, payload) {
    const { email, password } = payload;
    auth.signInWithEmailAndPassword(email, password).then((user) => {
      commit('userSignedIn', user.user.uid);
    });
  },
  signUpUser({ commit }, payload) {
    const { email, password } = payload;
    auth.createUserWithEmailAndPassword(email, password).then((user) => {
      commit('userSignedUp', user.user.uid);
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
};

export default actions;
