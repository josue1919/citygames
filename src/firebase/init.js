import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/firebase-storage'
import firebaseConfig from './firebase.config';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const storage = firebase.storage();

export{ db, storage }