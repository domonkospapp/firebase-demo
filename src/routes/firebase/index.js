import BookList from "../../components/BookList";
import BookCreate from "../../components/BookCreate";

const Firebase = () => {
  return (
    <div>
      <h1>Books</h1>
      <h2>List of books</h2>
      <BookList />
      <h2>Create a new book</h2>
      <BookCreate />
    </div>
  )
};

export default Firebase;