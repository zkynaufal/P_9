import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
  apiKey: "AIzaSyCS95_Imqn2_a3xeavIV9PzgoXNFRrwSvI",
  authDomain: "modul-9-b6e58.firebaseapp.com",
  projectId: "modul-9-b6e58",
  storageBucket: "modul-9-b6e58.appspot.com",
  messagingSenderId: "769376058823",
  appId: "1:769376058823:web:3bfd1d7acb7c2cf124ede2",
});

const FIREBASE = firebase;

export default FIREBASE;
