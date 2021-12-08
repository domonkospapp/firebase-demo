import { useState } from "preact/hooks";

const BookEdit = ({title, author, updateBook, cancelEditing}) => {
    const[newTitle, setNewTitile]=useState(title);
    const[newAuthor, setNewAuthor]=useState(author);

    const changeNewTitle = (e) => setNewTitile(e.target.value);
    const changeNewAuthor = (e) => setNewAuthor(e.target.value);

    const save = () => {
        updateBook({title: newTitle, author: newAuthor});
        cancelEditing();
    }

    return(
        <div>
            <input type="text" value={newTitle} onChange={changeNewTitle} />
            <br />
            <input type="text" value={newAuthor} onChange={changeNewAuthor} />
            <br />
            <button onClick={save}>Save</button>
            <button onClick={cancelEditing}>Cancel</button>
        </div>
    );
}

export default BookEdit;