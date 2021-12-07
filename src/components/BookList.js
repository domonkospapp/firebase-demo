import { collection, onSnapshot, query, where } from "firebase/firestore"
import { useState } from "preact/hooks";
import db from "../utils/firebase";
import BookRemoveButton from "./BookRemoveButton";

const BookList = ({authorFilter}) => {
    const[books, setBooks] = useState([])
    const collectionRef = collection(db, "books")
    const q = authorFilter ? query(collectionRef, authorFilter && where("author", "==", authorFilter)) : collectionRef;

    const updateBooks = (snapshot) => {
        setBooks(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})))
    }

    onSnapshot(q, updateBooks)

    const renderBook = (book, index) => (
        <p key={index}>
            {`${book.title} ${book.author} `}
            <BookRemoveButton bookId={book.id} />
        </p>
    )
  
    return books.map(renderBook)
};

export default BookList;