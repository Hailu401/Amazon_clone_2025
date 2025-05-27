// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKyngCIapbRZ7QMfK_14Q_wN2vCfyqmGk",
  authDomain: "clone2025-afb07.firebaseapp.com",
  projectId: "clone2025-afb07",
  storageBucket: "clone2025-afb07.firebasestorage.app",
  messagingSenderId: "69101895500",
  appId: "1:69101895500:web:6bff3e9435bc80d82d99e9"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
