import BookList from "../../components/BookList";
import BookCreate from "../../components/BookCreate";

const Firebase = () => {
  return (
    <div>
      <h1>Home</h1>
      <h2>List of books</h2>
      <BookList />
      <BookCreate />
    </div>
  )
};

export default Firebase;