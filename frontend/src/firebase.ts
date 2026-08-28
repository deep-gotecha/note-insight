import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4JwTBnyCsjfMNQ1_D7cPH4_YY31LXSWQ",
  authDomain: "note-insight-da5e2.firebaseapp.com",
  projectId: "note-insight-da5e2",
  storageBucket: "note-insight-da5e2.firebasestorage.app",
  messagingSenderId: "731334891384",
  appId: "1:731334891384:web:95c78d14987bf449a55a8d",
  measurementId: "G-F7Q3P1YHB0"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);