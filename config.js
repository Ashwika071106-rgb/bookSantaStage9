import * as firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
  apiKey: "AIzaSyB8TC5eB2T562bRlYEr4XKWDflih0UtHf0",
  authDomain: "book-santa-334cb.firebaseapp.com",
  projectId: "book-santa-334cb",
  storageBucket: "book-santa-334cb.appspot.com",
  messagingSenderId: "981849239116",
  appId: "1:981849239116:web:13803d353c048aa9548ee9"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;