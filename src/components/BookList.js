import { collection, getDocs } from "firebase/firestore"
import { useState ,useEffect} from "preact/hooks";
import db from "../../utils/firebase";

const BookList = () => {
    const[books, setBooks] = useState([])
    const collectionRef = collection(db, "books")

    useEffect(() => {
      getDocs(collectionRef).then(snapshot =>{
        setBooks(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})))
      })  
    }, []);
  
    return books.map((book, index) => {return <p key={index}>{`${book.title} ${book.author} (${book.id})`}</p>})
};

export default BookList;