// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDRDz_inNdXKrwFdFcaf4Z6YQb_gt49OB0",
    authDomain: "vocal-for-local-be065.firebaseapp.com",
    projectId: "vocal-for-local-be065",
    storageBucket: "vocal-for-local-be065.appspot.com",
    messagingSenderId: "135124111373",
    appId: "1:135124111373:web:d73c2972dd53af83324544",
    measurementId: "G-54BLD6NG6R",
};

// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
