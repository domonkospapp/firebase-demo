import { doc, onSnapshot, updateDoc } from "@firebase/firestore";
import { useEffect, useState } from "preact/hooks";
import db from "../../utils/firebase";
import style from './style.css';
import BookDetails from "../../components/BookDetails"
import BookEdit from "../../components/BookEdit";

const BookDetailsPage = ({bookId}) => {
    const[book, setBook] = useState(null);
    const[editing, setEditing]=useState(false);
    const docRef = doc(db, "books", bookId);

    const startEditing = () => setEditing(true);
    const cancelEditing = () => setEditing(false);
    const updateBook = (newBook) => updateDoc(docRef, newBook)

    useEffect(() => {
        onSnapshot(docRef, doc => setBook({id: doc.id, ...doc.data()}))
    },[])

    return (
        <div className={style.firebase}>
            {book 
                ? editing 
                    ? <BookEdit {...book} updateBook={updateBook} cancelEditing={cancelEditing} />
                    : <BookDetails {...book} startEditing={startEditing} />
                : <p>Loading...</p>
            }
        </div>
    );
}

export default BookDetailsPage;