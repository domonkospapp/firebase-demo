import { addDoc, collection } from "@firebase/firestore";
import { useRef} from "preact/hooks";
import db from "../utils/firebase";


const CreateBook = () => {
    const collectionRef = collection(db, "books")
    const title = useRef(null);
    const author = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        addDoc(collectionRef, {title: title.current.value, author: author.current.value}).then(resetForm);
    };

    const resetForm = ()=> {
        title.current.value = "";
        author.current.value = "";
    }

    return (
        <>
            <h2>Create a new book</h2>
            <form onSubmit={handleSubmit}>
                Title:<input type="title" ref={title} /><br />
                Name:<input type="author" ref={author} /><br />
                <input type="submit" value="Submit" />
            </form>
        </>
	)
};

export default CreateBook;