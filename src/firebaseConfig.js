import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
const firebaseConfig = {
  apiKey: "AIzaSyCVVWoQAO9PA0PsT5o-yrTLVb5GIxZnxgk",
  authDomain: "react-firebase-auth-89aad.firebaseapp.com",
  projectId: "react-firebase-auth-89aad",
  databaseURL: 'https://react-firebase-auth-89aad-default-rtdb.firebaseio.com/',
  storageBucket: "react-firebase-auth-89aad.appspot.com",
  messagingSenderId: "351553737356",
  appId: "1:351553737356:web:74ee52bf57612dcb2961a9"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = () => firebase.firestore(); 
export default app;



