import { collection, getDocs } from "firebase/firestore"
import { useState ,useEffect} from "preact/hooks";
import CreateBook from "../../components/CreateBook";
import db from "../../utils/firebase";

const Firebase = () => {
    const[books, setBooks] = useState([])
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
      <CreateBook />
		</div>
	)
};

export default Firebase;