import BookList from "../../components/BookList";
import BookCreate from "../../components/BookCreate";
import { useState } from "preact/hooks";
import style from './style.css';

const Firebase = () => {
  const [authorFilter, setAuthorFilter] = useState(null)

  const changeAuthorFilter = (e) => {
    setAuthorFilter(e.target.value)
  }

  return (
    <div className={style.firebase}>
      <h1>Books</h1>
      <label>Author filter: </label>
      <input 
        name="authorFilter"
        placeholder="Type & hit enter"
        value={authorFilter}
        onChange={changeAuthorFilter}
      />
      <h2>List of books</h2>
      <BookList authorFilter={authorFilter} />
      <h2>Create a new book</h2>
      <BookCreate />
    </div>
  )
};

export default Firebase;