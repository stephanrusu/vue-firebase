import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/auth';
import 'firebase/firestore';

// import firebase config
import config from './config';

export const firebaseApp = firebase.initializeApp(config);

export const database = firebaseApp.database();
export const storage = firebaseApp.storage();
export const auth = firebaseApp.auth();
export const firestore = firebaseApp.firestore();

firestore.settings({
  timestampsInSnapshots: true,
});
