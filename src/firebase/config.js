// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyACUfADdo7zafbyLGp5JLnbhG6uBAgYDj0",
    authDomain: "pinterest-375be.firebaseapp.com",
    projectId: "pinterest-375be",
    storageBucket: "pinterest-375be.firebasestorage.app",
    messagingSenderId: "625949084982",
    appId: "1:625949084982:web:b4e5db7c6b890ec66df797",
    measurementId: "G-P0QMEM5F0D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
//const analytics = getAnalytics(app);
// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);