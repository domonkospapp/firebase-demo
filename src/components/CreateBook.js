import { useRef} from "preact/hooks";

const CreateBook = () => {
    const title = useRef(null);
    const author = useRef(null);

    const handleSubmit = (event) => {
        console.log(`A title was submitted: ${  title.current.value}`);
        console.log(`A author was submitted: ${  author.current.value}`);
        event.preventDefault();
    
    };

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