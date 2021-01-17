import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBiligA6xBPveyrBDYWg4OO2nOAImrAmgk",
    authDomain: "nwitter-3be5d.firebaseapp.com",
    projectId: "nwitter-3be5d",
    storageBucket: "nwitter-3be5d.appspot.com",
    messagingSenderId: "116527743756",
    appId: "1:116527743756:web:7b2a67eb1c7d01203f3f29"
  };

firebase.initializeApp(firebaseConfig);

export const firebaseInstance =firebase;
export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();