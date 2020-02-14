import Firebase from 'firebase/app';
import credentials from './credentials.js';
export const firebaseApp = Firebase.initializeApp(credentials.firebase);