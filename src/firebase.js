import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDnM3XJFhupUzTwQaUCMJgK109fZfLM3Mo",
    authDomain: "clone-124e6.firebaseapp.com",
    projectId: "clone-124e6",
    storageBucket: "clone-124e6.appspot.com",
    messagingSenderId: "28975802956",
    appId: "1:28975802956:web:ef8a16d8fb0f793189e2e9",
    measurementId: "G-6NZNDXQV29"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };