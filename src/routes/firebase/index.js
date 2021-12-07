// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection, getDocs } from "firebase/firestore"
import { useState ,useEffect} from "preact/hooks";

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
    initializeApp(firebaseConfig);
    const[books, setBooks] = useState([])
    const db = getFirestore();
    const collectionRef = collection(db, "books")

    useEffect(() => {
      getDocs(collectionRef).then(snapshot =>{
        setBooks(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})))
      })  
    }, []);
  
    return (
		<div>
			<h1>Home</h1>
			<p>List of books</p>
      {
        books.map((book, index) => {return <p key={index}>{`${book.title} ${book.author} (${book.id})`}</p>})
      }
		</div>
	)
};

export default Firebase;