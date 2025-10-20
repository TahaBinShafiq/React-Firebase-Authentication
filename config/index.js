// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6dsMfMbZ6nnbdQU5dzjqgHxwT__B2Buc",
  authDomain: "react-f6a9b.firebaseapp.com",
  projectId: "react-f6a9b",
  storageBucket: "react-f6a9b.firebasestorage.app",
  messagingSenderId: "428646709089",
  appId: "1:428646709089:web:ae0857a72943065929f720",
  measurementId: "G-P156YRVEB1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);