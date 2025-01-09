import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC_pxk00Zlw6qeMZ_Q9I4YSxNN4lvrkaNY",
    authDomain: "ejercicio-n1-a8801.firebaseapp.com",
    databaseURL: "https://ejercicio-n1-a8801-default-rtdb.firebaseio.com",
    projectId: "ejercicio-n1-a8801",
    storageBucket: "ejercicio-n1-a8801.firebasestorage.app",
    messagingSenderId: "1048715473368",
    appId: "1:1048715473368:web:863ceb3fe5dfd26d3c82ad",
    measurementId: "G-5XYGEPK6YV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();