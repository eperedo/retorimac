import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ThankYouScreen from './ThankYouScreen';

function ThankYouContainer() {
	const history = useHistory();
	const [user, setUser] = useState();

	useEffect(() => {
		const user = window.localStorage.getItem('user');
		if (user) {
			setUser(JSON.parse(user));
		} else {
			history.push('/');
		}
	}, [history]);

	function onClick() {
		history.push('/');
		window.localStorage.clear();
	}

	return <ThankYouScreen user={user} onClick={onClick} />;
}

export default ThankYouContainer;
