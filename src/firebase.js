// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {firebase} from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBZbsGeSCKk9xwSnrwWUvAeNqas39GCKVA",
    authDomain: "clone-clash-coder-3d740.firebaseapp.com",
    projectId: "clone-clash-coder-3d740",
    storageBucket: "clone-clash-coder-3d740.appspot.com",
    messagingSenderId: "302347733586",
    appId: "1:302347733586:web:9dbf2b5aa8913e9c7aad8b",
    measurementId: "G-PTXHTR9RLX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();
export { db, auth };