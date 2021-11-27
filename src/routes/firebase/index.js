// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTi9TqCqjdBwoFL9BDvd6C-4iFuFJ8Fy4",
  authDomain: "demoproject-cbda8.firebaseapp.com",
  projectId: "demoproject-cbda8",
  storageBucket: "demoproject-cbda8.appspot.com",
  messagingSenderId: "880002627321",
  appId: "1:880002627321:web:0eef207a35026341525428"
};

const Firebase = () => {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    console.log(app)
	return (
		<div>
			<h1>Home</h1>
			<p>This is the Firebase component.</p>
		</div>
	)
};

export default Firebase;

