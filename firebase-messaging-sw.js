importScripts('/__/firebase/3.8.0/firebase-app.js');
importScripts('/__/firebase/3.8.0/firebase-messaging.js');
importScripts('/__/firebase/init.js');
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
function initializeApp() {
    var firebaseConfig = {
        apiKey: "AIzaSyDPLzT0hG5fnw01ihWfp5tw2zYTrVsab7w",
        authDomain: "pwawithfirebase.firebaseapp.com",
        databaseURL: "https://pwawithfirebase-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "pwawithfirebase",
        storageBucket: "pwawithfirebase.appspot.com",
        messagingSenderId: "591184070902",
        appId: "1:591184070902:web:86ae79d1599efa996fc4d7"
    };
}


// Initialize Firebase

firebase.messaging();