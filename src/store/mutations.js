const mutations = {
  userSignedIn(state, payload) {
    state.user = payload;
  },
  userSignedUp(state, payload) {
    state.user = payload;
  },
  userSignedOut(state) {
    state.user = '';
  },
};

export default mutations;
