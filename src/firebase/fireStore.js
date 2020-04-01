import { firebaseApp } from './firebase.js';
import 'firebase/firestore';

export const firestore = firebaseApp.firestore();
