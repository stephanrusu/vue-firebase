const getters = {
  user: state => state.user,
  userUid: state => state.user.uid,
  userError: state => state.user.error,
  userRole: state => state.user.role,
};

export default getters;
