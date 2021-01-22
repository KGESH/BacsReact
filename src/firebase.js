import firebase from "firebase/app";
import "firebase/firebase";

const firebaseConfig = {
        apiKey: "AIzaSyBqsqxTkOV4dYtUeA983-xb16wBxFgnR40",
        authDomain: "massive-woods-302507.firebaseapp.com",
        projectId: "massive-woods-302507",
        storageBucket: "massive-woods-302507.appspot.com",
        messagingSenderId: "624083996854",
        appId: "1:624083996854:web:a6b4a53b2243fba22dd617",
        measurementId: "G-593RBN7Q32"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export {firestore};