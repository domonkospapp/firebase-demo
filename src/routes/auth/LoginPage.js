import { useRef} from "preact/hooks";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../utils/firebase"

const LoginPage = () => {
    const email = useRef(null);
    const password = useRef(null);

    const handleRegistration = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then(resetForm)
            .catch(onLoginError);
    };

    const resetForm = ()=> {
        email.current.value = "";
        password.current.value = "";
    }

    const onLoginError = error=> console.log(error.message);

    const handleSignOut = () => signOut(auth);

    return (
        <>
            <h2>Login</h2>
            <form onSubmit={handleRegistration}>
                Email: <input type="text" ref={email} /><br />
                Password: <input type="password" ref={password} /><br />
                <input type="submit" value="Submit" />
            </form>
            <button onClick={handleSignOut}>LogOut</button>
        </>
	)
};

export default LoginPage;