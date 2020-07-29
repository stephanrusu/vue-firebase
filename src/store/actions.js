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
  signUpUserTest({ commit }, payload) {
    const { email, password } = payload;
    const actionCodeSettings = {
      url: 'http://localhost:8080/passwordReset',
    };
    auth.createUserWithEmailAndPassword(email, password).then(() => {
      // commit('userSignedIn', user.user.uid);
      auth.sendPasswordResetEmail(email, actionCodeSettings).then(() => {
        commit('userForgotPassword');
        commit('userAuthError', '');
      }).catch((error) => {
        const { code, message } = error;
        let errorMessage = '';
        switch (code) {
          case 'auth/invalid-email':
            errorMessage = code.replace('auth/', '');
            break;
          default:
            errorMessage = message;
            break;
        }

        commit('userAuthError', errorMessage);
      });
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
      commit('userAuthError', '');
    });
  },
  resetPasswordUser({ commit }, payload) {
    const { newPassword, actionCode } = payload;
    auth.verifyPasswordResetCode(actionCode).then(() => {
      auth.confirmPasswordReset(actionCode, newPassword).then(() => {
        commit('userPasswordReset');
        commit('userAuthError', '');
      }).catch((error) => {
        const { code, message } = error;
        let errorMessage = '';

        switch (code) {
          case 'auth/expired-action-code':
          case 'auth/invalid-action-code':
          case 'auth/user-disabled':
          case 'auth/user-not-found':
          case 'auth/weak-password':
            errorMessage = code.replace('auth/', '');
            break;
          default:
            errorMessage = message;
            break;
        }
        commit('userAuthError', errorMessage);
      });
    }).catch((error) => {
      const { code, message } = error;
      let errorMessage = '';

      switch (code) {
        case 'auth/expired-action-code':
        case 'auth/invalid-action-code':
        case 'auth/user-disabled':
        case 'auth/user-not-found':
          errorMessage = code.replace('auth/', '');
          break;
        default:
          errorMessage = message;
          break;
      }
      commit('userAuthError', errorMessage);
    });
  },
  forgotPasswordUser({ commit }, payload) {
    const { email } = payload;
    // const actionCodeSettings = {
    //   url: '__/passwordReset',
    // };
    auth.sendPasswordResetEmail(email).then(() => {
      commit('userForgotPassword');
      commit('userAuthError', '');
    }).catch((error) => {
      const { code, message } = error;
      let errorMessage = '';
      switch (code) {
        case 'auth/invalid-email':
          errorMessage = code.replace('auth/', '');
          break;
        default:
          errorMessage = message;
          break;
      }

      commit('userAuthError', errorMessage);
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
