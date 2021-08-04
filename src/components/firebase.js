import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBJHAOhUyDRMxG_ou8GnhlBCz7F9Uy0n0o",
    authDomain: "valafilms-b89ab.firebaseapp.com",
    databaseURL: "https://valafilms-b89ab-default-rtdb.firebaseio.com",
    projectId: "valafilms-b89ab",
    storageBucket: "valafilms-b89ab.appspot.com",
    messagingSenderId: "919566984294",
    appId: "1:919566984294:web:22c9014d3332f7d00d39a7"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
