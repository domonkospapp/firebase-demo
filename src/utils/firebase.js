import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCTi9TqCqjdBwoFL9BDvd6C-4iFuFJ8Fy4",
    authDomain: "demoproject-cbda8.firebaseapp.com",
    projectId: "demoproject-cbda8",
    storageBucket: "demoproject-cbda8.appspot.com",
    messagingSenderId: "880002627321",
    appId: "1:880002627321:web:0eef207a35026341525428"
};
  
initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export{ 
    db, 
    auth
};