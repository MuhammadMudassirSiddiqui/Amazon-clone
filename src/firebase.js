import firebase from "firebase";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCwke-LoV5fK5BUdSQKUoYAkhR58E_AkIQ",
  authDomain: "clone-697b0.firebaseapp.com",
  projectId: "clone-697b0",
  storageBucket: "clone-697b0.appspot.com",
  messagingSenderId: "993036369613",
  appId: "1:993036369613:web:6d6d73a88a131277307384",
  measurementId: "G-1WSGZYJP69",
});

const auth = firebase.auth();

export { auth };
