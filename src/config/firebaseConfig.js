import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

var firebaseConfig = {
    apiKey: "AIzaSyD6Jp5GY_8C-F4rx8T_X-4yOBUsyJgD3lQ",
    authDomain: "final-project-gagandhi.firebaseapp.com",
    databaseURL: "https://final-project-gagandhi.firebaseio.com",
    projectId: "final-project-gagandhi",
    storageBucket: "final-project-gagandhi.appspot.com",
    messagingSenderId: "26049823051",
    appId: "1:26049823051:web:ca5e3c4ebb2167cad3a8ce",
    measurementId: "G-NF2065S7ZB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// NOW THE firebase OBJECT CAN BE CONNECTED TO THE STORE
export default firebase;