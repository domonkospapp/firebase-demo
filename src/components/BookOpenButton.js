import { route } from 'preact-router';

const BookOpenButton = ({bookId}) => {
    const openBookDetails = () => route(`/firebase/${bookId}`)
    return <button onClick={openBookDetails}>Open</button>
};

export default BookOpenButton;