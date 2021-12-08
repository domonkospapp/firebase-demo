
const BookDetails = ({title, author, startEditing}) => (
    <div>
        {title}
        <br />
        {author}
        <br />
        <button onClick={startEditing}>Edit</button>
    </div>
);

export default BookDetails;