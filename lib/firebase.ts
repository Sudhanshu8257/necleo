// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuxrEpCY1jbUZKSGYaqyvdLz7EPbrEr4E",
  authDomain: "assignment-64db0.firebaseapp.com",
  projectId: "assignment-64db0",
  storageBucket: "assignment-64db0.appspot.com",
  messagingSenderId: "188466175120",
  appId: "1:188466175120:web:ed48cbaeaf3cbe10eccc15",
  measurementId: "G-R3BPX5DL1N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
