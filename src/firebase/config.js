
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDAC9SAAK5iBkSR5J-O7ZsQUggOqCajQHw",
  authDomain: "metro-movies-9f6da.firebaseapp.com",
  projectId: "metro-movies-9f6da",
  storageBucket: "metro-movies-9f6da.appspot.com",
  messagingSenderId: "908339769708",
  appId: "1:908339769708:web:ff291887f3306d19364349",
  measurementId: "G-5DSM40M0V5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const store = getStorage(app)

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: "select_account"});