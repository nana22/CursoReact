// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyDSEXIo_OWepA18zR5QTm6niI-Ag6k2Za0",
    authDomain: "findmyrecipe-c587a.firebaseapp.com",
    databaseURL: "https://findmyrecipe-c587a-default-rtdb.firebaseio.com",
    projectId: "findmyrecipe-c587a",
    storageBucket: "findmyrecipe-c587a.appspot.com",
    messagingSenderId: "480277611540",
    appId: "1:480277611540:web:3d321095bbe688a9331301"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);