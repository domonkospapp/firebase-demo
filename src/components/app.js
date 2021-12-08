import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Profile from '../routes/profile';
import Firebase from '../routes/firebase';
import BookDetailsPage from '../routes/firebase/BookDetailesPage';

const App = () => (
	<div id="app">
		<Header />
		<Router>
			<Home path="/" />
			<Profile path="/profile/" user="me" />
			<Profile path="/profile/:user" />
			<Firebase path="/firebase/" />
			<BookDetailsPage path="/firebase/:bookId" />
		</Router>
	</div>
)

export default App;
