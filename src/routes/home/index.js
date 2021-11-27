import { useState } from 'preact/hooks';
import style from './style.css';

const Home = () => {
	const [name, setName] = useState(null);
	const [value, setValue] = useState(null);

	const onInput = ev => {
		setValue(ev.target.value)
	}
	const onSubmit = ev => {
		ev.preventDefault();
		setName(value)
	}

	return (
		<div class={style.home}>
			<h1>Home</h1>
			<p>This is the Home component.</p>
			{name && <h1>Hello, {name}!</h1>}
			<form onSubmit={onSubmit}>
				<input type="text" value={value} onInput={onInput} />
				<button type="submit">Update</button>
			</form>
		</div>
	)
};

export default Home;
