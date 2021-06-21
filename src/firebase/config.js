import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore'

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAGTdEaSF_Wy993UorC5IxZ4vQ8flEbwDI",
    authDomain: "art-gallery-3fc8d.firebaseapp.com",
    projectId: "art-gallery-3fc8d",
    storageBucket: "art-gallery-3fc8d.appspot.com",
    messagingSenderId: "232598521234",
    appId: "1:232598521234:web:8904bdb1f92ee280336d4b"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectStorage, timeStamp };