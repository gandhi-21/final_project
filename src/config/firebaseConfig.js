import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBtUi9k8XBBEAs18aB5eqO3REdh_EXlIAA",
    authDomain: "todo3-gagandhi.firebaseapp.com",
    databaseURL: "https://todo3-gagandhi.firebaseio.com",
    projectId: "todo3-gagandhi",
    storageBucket: "todo3-gagandhi.appspot.com",
    messagingSenderId: "191878049496",
    appId: "1:191878049496:web:315448639e1e0a670ab1ad",
    measurementId: "G-S3T574N6P4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// NOW THE firebase OBJECT CAN BE CONNECTED TO THE STORE
export default firebase;