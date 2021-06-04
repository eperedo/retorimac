import { useHistory } from 'react-router-dom';
import useDataFromLs from '../../hooks/useDataFromLs';
import ThankYouScreen from './ThankYouScreen';

function ThankYouContainer() {
	const history = useHistory();
	const user = useDataFromLs('user', () => history.push('/'));

	function onClick() {
		history.push('/');
		window.localStorage.clear();
	}

	return <ThankYouScreen user={user} onClick={onClick} />;
}

export default ThankYouContainer;
