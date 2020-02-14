import { firebaseApp } from './firebase.js';
import 'firebase/storage';

export const fireStorage = firebaseApp.storage();