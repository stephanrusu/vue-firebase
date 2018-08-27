import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/auth';

// const config = {
//   apiKey: 'AIzaSyClzjPB1OEVtHxgfXp3GIuNnZTjyVFdRkw',
//   authDomain: 'test-pollenwebui.firebaseapp.com',
//   databaseURL: 'https://test-pollenwebui.firebaseio.com',
//   projectId: 'test-pollenwebui',
//   storageBucket: 'test-pollenwebui.appspot.com',
//   messagingSenderId: '869181890063',
// };

const config = {
  apiKey: 'AIzaSyAnB5O3pnjjwFeU564DfTax5kLtnMPNa-0',
  authDomain: 'pollen-1bb54.firebaseapp.com',
  databaseURL: 'https://pollen-1bb54.firebaseio.com',
  projectId: 'pollen-1bb54',
  storageBucket: 'pollen-1bb54.appspot.com',
  messagingSenderId: '809289717254',
};


export const firebaseApp = firebase.initializeApp(config);

export const database = firebaseApp.database();
export const storage = firebaseApp.storage();
export const auth = firebaseApp.auth();
