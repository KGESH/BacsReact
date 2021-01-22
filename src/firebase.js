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


const FireBase = () => {
        return (
                <body>
                        <script src="https://www.gstatic.com/firebasejs/8.2.4/firebase-app.js"></script>
                        <script src="https://www.gstatic.com/firebasejs/8.2.4/firebase-analytics.js"></script>
                </body>
        );
}

firebase.initializeApp(firebaseConfig);

export default FireBase;