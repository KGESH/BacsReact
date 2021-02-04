import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/functions";
import "firebase/firestore";
import "firebase/database";

const firebaseConfig = {
        apiKey: "AIzaSyBqsqxTkOV4dYtUeA983-xb16wBxFgnR40",
        authDomain: "massive-woods-302507.firebaseapp.com",
        databaseURL: "https://massive-woods-302507-default-rtdb.firebaseio.com",
        projectId: "massive-woods-302507",
        storageBucket: "massive-woods-302507.appspot.com",
        messagingSenderId: "624083996854",
        appId: "1:624083996854:web:a6b4a53b2243fba22dd617",
        measurementId: "G-593RBN7Q32"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firebaseInstance = firebase.functions();
const firestore = firebase.firestore();
const database = firebase.database();

export { auth, firestore, firebaseInstance, database };