import { deleteDoc, doc } from "firebase/firestore"
import { db } from "../utils/firebase";

const BookRemoveButton = ({bookId}) => {
    const deleteBook = () => {
        const docRef = doc(db, "books", bookId)
        deleteDoc(docRef);
    }
  
    return <button onClick={deleteBook}>Delete</button>
};

export default BookRemoveButton;