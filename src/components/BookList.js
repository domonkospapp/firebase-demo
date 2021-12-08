import { collection, onSnapshot, query, where } from "firebase/firestore"
import { useEffect, useState } from "preact/hooks";
import db from "../utils/firebase";
import BookOpenButton from "./BookOpenButton";
import BookRemoveButton from "./BookRemoveButton";

const BookList = ({authorFilter}) => {
    const[books, setBooks] = useState([])
    const collectionRef = collection(db, "books")
    const q = authorFilter ? query(collectionRef, authorFilter && where("author", "==", authorFilter)) : collectionRef;    

    const updateBooks = (snapshot) => {
        setBooks(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})))
    }
    
    useEffect(() => {
        onSnapshot(q, updateBooks)
    },[])

    const renderBook = (book, index) => (
        <p key={index}>
            {`${book.title} ${book.author} `}
            <button onClick={open}>open</button>
            <BookOpenButton bookId={book.id} />
            <BookRemoveButton bookId={book.id} />
        </p>
    )
  
    return books.map(renderBook)
};

export default BookList;