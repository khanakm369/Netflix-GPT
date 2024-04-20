// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjhC51tKSF3tQ4-RDn6d7zPPcTCdaNKI8",
  authDomain: "netflixgpt-6b2a2.firebaseapp.com",
  projectId: "netflixgpt-6b2a2",
  storageBucket: "netflixgpt-6b2a2.appspot.com",
  messagingSenderId: "219203137411",
  appId: "1:219203137411:web:22e1ba0d6e9c87292390b6",
  measurementId: "G-D15HPB70R4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);