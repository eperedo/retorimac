import { useHistory } from 'react-router-dom';
import useDataFromLs from '../../hooks/useDataFromLs';
import ThankYouScreen from './ThankYouScreen';

function ThankYouContainer() {
	const history = useHistory();
	const user = useDataFromLs('user', () => history.push('/'));

	function onClick() {
		window.localStorage.clear();
		history.push('/');
	}

	return <ThankYouScreen user={user} onClick={onClick} />;
}

export default ThankYouContainer;
