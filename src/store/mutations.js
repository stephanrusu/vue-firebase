const mutations = {
  userSignedIn(state, payload) {
    state.user.uid = payload;
  },
  userSignedOut(state) {
    state.user.uid = '';
  },
  userAuthError(state, payload) {
    state.user.error = payload;
  },
};

export default mutations;
