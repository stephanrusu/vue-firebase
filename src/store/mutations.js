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
  updateUserRole(state, payload) {
    state.user.role = payload;
  },
};

export default mutations;
