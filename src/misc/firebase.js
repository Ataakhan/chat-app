import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
const config = {
  apiKey: 'AIzaSyCxrmwl4D25T51AMMPFIwWg9RYFRWZZ2Iw',
  authDomain: 'chat-web-app-db635.firebaseapp.com',
  projectId: 'chat-web-app-db635',
  storageBucket: 'chat-web-app-db635.appspot.com',
  messagingSenderId: '1084931046089',
  appId: '1:1084931046089:web:a30a0975925e8fd611eb18',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
