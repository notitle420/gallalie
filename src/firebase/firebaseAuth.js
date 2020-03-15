import { firebaseApp } from './firebase.js';
import 'firebase/auth';
import store from '@/store/index.js';

firebaseApp.auth().onAuthStateChanged(userStatus => {
  store.dispatch('fetchUser', userStatus)
});

export const firebaseauth = firebaseApp.auth();

