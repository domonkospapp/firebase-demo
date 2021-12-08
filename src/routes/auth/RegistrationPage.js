import { useRef} from "preact/hooks";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase"

const RegistrationPage = () => {
    const email = useRef(null);
    const password = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then(resetForm)
            .catch(onRegistrationError);
    };

    const resetForm = ()=> {
        email.current.value = "";
        password.current.value = "";
    }

    const onRegistrationError = error=> console.log(error.message);

    return (
        <form onSubmit={handleSubmit}>
            Email: <input type="text" ref={email} /><br />
            Password: <input type="password" ref={password} /><br />
            <input type="submit" value="Submit" />
        </form>
	)
};

export default RegistrationPage;