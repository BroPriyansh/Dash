// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBOCjk8B01GIeQJYFoYDct-So3yvTM7d7A",

  authDomain: "dashboard-c1927.firebaseapp.com",

  projectId: "dashboard-c1927",

  storageBucket: "dashboard-c1927.firebasestorage.app",

  messagingSenderId: "351114378036",

  appId: "1:351114378036:web:db5b1e9eb79e30413c8361",

  measurementId: "G-LNY00L8WQQ"


};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
