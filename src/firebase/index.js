import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyClzjPB1OEVtHxgfXp3GIuNnZTjyVFdRkw',
  authDomain: 'test-pollenwebui.firebaseapp.com',
  databaseURL: 'https://test-pollenwebui.firebaseio.com',
  projectId: 'test-pollenwebui',
  storageBucket: 'test-pollenwebui.appspot.com',
  messagingSenderId: '869181890063',
};

firebase.initializeApp(config);

export const database = firebase.database();
export const storage = firebase.storage();
export const auth = firebase.auth();
