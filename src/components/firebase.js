import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAxvjBnfzGD8zKDXhNzDNL1VYI5ZrrU3IY",
  authDomain: "valafilms-e47d1.firebaseapp.com",
  projectId: "valafilms-e47d1",
  storageBucket: "valafilms-e47d1.appspot.com",
  messagingSenderId: "428292675315",
  appId: "1:428292675315:web:7d0e9038958b19c1b8c986"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
