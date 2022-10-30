// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDPLzT0hG5fnw01ihWfp5tw2zYTrVsab7w",
    authDomain: "pwawithfirebase.firebaseapp.com",
    databaseURL: "https://pwawithfirebase-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "pwawithfirebase",
    storageBucket: "pwawithfirebase.appspot.com",
    messagingSenderId: "591184070902",
    appId: "1:591184070902:web:86ae79d1599efa996fc4d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const functions = require("firebase-functions");
// const admin = require('firebase-admin');

// admin.initializeApp(functions.config().firebase);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
exports.sendNotifications = functions.database.ref("/notifications/{notificationId}").onWrite((event) => {
    if (event.data.previous.val()) {
        return;
    }
    if (!event.data.exists()) {

    }
});