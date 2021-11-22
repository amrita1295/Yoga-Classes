import firebase from "firebase";
import 'firebase/firestore';

var firebaseApp = firebase.initializeApp({
    // Your firebase credentials
    apiKey: "AIzaSyDqEVLI-jb2swHMhDpXHDA8ph0VTUDjgng",
    authDomain: "yoga-form-e511e.firebaseapp.com",
    projectId: "yoga-form-e511e",
    storageBucket: "yoga-form-e511e.appspot.com",
    messagingSenderId: "981818241401",
    appId: "1:981818241401:web:59bc4e039c1a3cd7b03fa8",
    measurementId: "G-CG257NH8CQ"
});

var db = firebaseApp.firestore();

export { db };
