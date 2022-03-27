// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCL3_w60JO4gfkZY1mOfck431bVP8SaRtU",
  authDomain: "hinata-blog-schedule.firebaseapp.com",
  projectId: "hinata-blog-schedule",
  storageBucket: "hinata-blog-schedule.appspot.com",
  messagingSenderId: "853205990363",
  appId: "1:853205990363:web:511a8372973468967785fe",
  measurementId: "G-YWVY9DYYH0"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
