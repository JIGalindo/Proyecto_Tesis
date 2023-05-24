// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDA5RvlC6GniA5tzBeP1HGwdCEQQs7ejxk",
  authDomain: "tesis-6215a.firebaseapp.com",
  projectId: "tesis-6215a",
  storageBucket: "tesis-6215a.appspot.com",
  messagingSenderId: "1098882281093",
  appId: "1:1098882281093:web:81710b59547d3d5a3543ec"
};

// Initialize Firebase
export const initFirebase = initializeApp(firebaseConfig);