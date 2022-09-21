// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB52YWmHG4EIWXQ69PMzJrW1aMpJtoCkt8",
    authDomain: "instagram-clone-cd072.firebaseapp.com",
    projectId: "instagram-clone-cd072",
    storageBucket: "instagram-clone-cd072.appspot.com",
    messagingSenderId: "263856922192",
    appId: "1:263856922192:web:767347f51da3450ccfbb55"
};

// Initialize Firebase
// We need just one instance of the app - singleton pattern
// We do SINGLETON PATTERN below
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

//prepare the database
const db = getFirestore();

//prepare the storage
const storage = getStorage();

// in order to use this outside the firebase config file, we need to export it
// doing an explicit export
export { app, db, storage };

// We now have our whole connection to firebase set up
// Connection to our firebase backend