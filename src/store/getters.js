const getters = {
  user: state => state.user,
  userUid: state => state.user.uid,
  userError: state => state.user.error,
};

export default getters;
