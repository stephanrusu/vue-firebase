import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/auth';
import config from './config';

// add your firbease config here

export const firebaseApp = firebase.initializeApp(config);

export const database = firebaseApp.database();
export const storage = firebaseApp.storage();
export const auth = firebaseApp.auth();
