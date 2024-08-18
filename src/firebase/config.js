// src/firebase/config.js

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, isSignInWithEmailLink, signInWithEmailLink, sendSignInLinkToEmail, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDXde4K_2qFCNVtWduLwirX_7Xop1m9ei8",
  authDomain: "neocopilot.firebaseapp.com",
  projectId: "neocopilot",
  storageBucket: "neocopilot.appspot.com",
  messagingSenderId: "944699675822",
  appId: "1:944699675822:web:a888dc67696133f5da093f"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, googleProvider, isSignInWithEmailLink, signInWithEmailLink, sendSignInLinkToEmail, signInWithPopup, firebaseConfig, db };

