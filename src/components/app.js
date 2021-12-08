import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Profile from '../routes/profile';
import Firebase from '../routes/firebase';
import BookDetailsPage from '../routes/firebase/BookDetailesPage';
import RegistrationPage from '../routes/auth/RegistrationPage';
import LoginPage from '../routes/auth/LoginPage';
import { onAuthStateChanged } from '@firebase/auth';
import { auth } from "../utils/firebase";

const App = () => {
	onAuthStateChanged(auth, user => {
        console.log(user);
    })

	return (
		<div id="app">
			<Header />
			<Router>
				<Home path="/" />
				<Profile path="/profile/" user="me" />
				<Profile path="/profile/:user" />
				<Firebase path="/firebase/" />
				<BookDetailsPage path="/firebase/:bookId" />
				<RegistrationPage path="/registration/" />
				<LoginPage path="/login/" />
			</Router>
		</div>
	)
}

export default App;
