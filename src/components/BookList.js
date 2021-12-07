import { collection, getDocs } from "firebase/firestore"
import { useState ,useEffect} from "preact/hooks";
import db from "../utils/firebase";
import BookRemoveButton from "./BookRemoveButton";

const BookList = () => {
    const[books, setBooks] = useState([])
    const collectionRef = collection(db, "books")

    useEffect(() => {
      getDocs(collectionRef).then(snapshot =>{
        setBooks(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})))
      })  
    }, []);

    const renderBook = (book, index) => (
        <p key={index}>
            {`${book.title} ${book.author} `}
            <BookRemoveButton bookId={book.id} />
        </p>
    )
  
    return books.map(renderBook)
};

export default BookList;