// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";
import "firebaseui/dist/firebaseui.css";

const firebaseConfig = {
  apiKey: "AIzaSyBkH2uhlEhvg-sp_NF475C8rpwKKZ2GSE8",
  authDomain: "analytics-58fe5.firebaseapp.com",
  databaseURL: "https://analytics-58fe5.firebaseio.com",
  projectId: "analytics-58fe5",
  storageBucket: "analytics-58fe5.appspot.com",
  messagingSenderId: "957052880478",
  appId: "1:957052880478:web:b6cd14917b2a5f719756cf"
};

// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth();
let firebaseDb = firebaseApp.database();


export { firebaseAuth, firebaseDb };
