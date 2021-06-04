import { useHistory } from 'react-router-dom';
import useDataFromLs from '../../hooks/useDataFromLs';
import ThankYouScreen from './ThankYouScreen';

function ThankYouContainer() {
	const history = useHistory();
	const user = useDataFromLs('user', () => history.push('/'));

	return <ThankYouScreen user={user} />;
}

export default ThankYouContainer;
