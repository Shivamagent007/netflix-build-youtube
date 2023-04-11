import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCkdg_YV6SZuDn2IlNwNTJQPgp6r01w5xY",
    authDomain: "netflix-clone-8f24b.firebaseapp.com",
    projectId: "netflix-clone-8f24b",
    storageBucket: "netflix-clone-8f24b.appspot.com",
    messagingSenderId: "470990728094",
    appId: "1:470990728094:web:3e60b524c371fe1338048f"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { auth, db }