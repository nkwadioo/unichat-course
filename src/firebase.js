import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp = ({
    apiKey: "AIzaSyC--99s0a36RNXw3gc3Oq5nacz7IUonmwU",
    authDomain: "unichat-ef1d7.firebaseapp.com",
    projectId: "unichat-ef1d7",
    storageBucket: "unichat-ef1d7.appspot.com",
    messagingSenderId: "590063481661",
    appId: "1:590063481661:web:f136f3a51caf9983a38b54"
}).auth();
