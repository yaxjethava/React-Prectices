// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBwqu5Wys2GyGeheKEPnIk05NrRAdNjHkc",
    authDomain: "react-crud-9b29e.firebaseapp.com",
    projectId: "react-crud-9b29e",
    storageBucket: "react-crud-9b29e.firebasestorage.app",
    messagingSenderId: "151432129193",
    appId: "1:151432129193:web:0176b6367559a91b0657b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
