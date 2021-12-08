import { doc, onSnapshot } from "@firebase/firestore";
import { useEffect, useState } from "preact/hooks";
import db from "../../utils/firebase";
import style from './style.css';
import BookDetails from "../../components/BookDetails"

const BookDetailsPage = ({bookId}) => {
    const[book, setBook] = useState(null);
    const docRef = doc(db, "books", bookId);
    
    useEffect(() => {
        onSnapshot(docRef, doc => setBook({id: doc.id, ...doc.data()}))
    },[])

    return (
        <div className={style.firebase}>
            {book ? <BookDetails {...book} /> : <p>Loading...</p>}
        </div>);
}

export default BookDetailsPage;