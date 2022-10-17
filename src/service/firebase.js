import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBOYAbZ5nEly56v3jXM7ecIBIc8D6b8DJA",
    authDomain: "mobile-ecommerce-6a551.firebaseapp.com",
    databaseURL: "https://mobile-ecommerce-6a551-default-rtdb.firebaseio.com",
    projectId: "mobile-ecommerce-6a551",
    storageBucket: "mobile-ecommerce-6a551.appspot.com",
    messagingSenderId: "337774005259",
    appId: "1:337774005259:web:4ba85064821b71d5fc8b0e",
    measurementId: "G-D0C5XZ7D9K"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)
export const auth = getAuth(app)
