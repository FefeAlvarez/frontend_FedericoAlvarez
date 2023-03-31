// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjlKgR6hkvTi-OS3V1JpOh9ql-BXz_TBg",
  authDomain: "fedeguitars-6d90e.firebaseapp.com",
  projectId: "fedeguitars-6d90e",
  storageBucket: "fedeguitars-6d90e.appspot.com",
  messagingSenderId: "583799151647",
  appId: "1:583799151647:web:b6ea09b7e20ccd85ee892a"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();
