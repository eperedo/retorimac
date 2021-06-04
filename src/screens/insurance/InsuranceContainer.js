import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useDataFromLs from '../../hooks/useDataFromLs';
import InsuranceScreen from './InsuranceScreen';

function InsuranceContainer() {
	const history = useHistory();
	const user = useDataFromLs('user', () => history.push('/'));
	const [carInfo, setCarInfo] = useState({
		amount: 13500,
		brand: 'Wolkswagen',
		gas: true,
		year: 2021,
	});

	function onChangeSelect(key, e) {
		setCarInfo((prev) => {
			const newState = { ...prev };
			newState[key] = e.target.value;
			return newState;
		});
	}

	function onGasChange(e) {
		setCarInfo((prev) => {
			const newState = { ...prev };
			newState.gas = e.target.value === 'true';
			return newState;
		});
	}

	function onChangeAmount(amount) {
		setCarInfo((prev) => {
			const newState = { ...prev };
			newState.amount = amount;
			return newState;
		});
	}

	function onClick() {
		const data = {
			...carInfo,
			plate: user.plate,
		};
		window.localStorage.setItem('car', JSON.stringify(data));
		history.push('/plan');
	}

	function onBack() {
		history.push('/');
	}

	return (
		<InsuranceScreen
			carInfo={carInfo}
			onBack={onBack}
			onChangeAmount={onChangeAmount}
			onChangeSelect={onChangeSelect}
			onClick={onClick}
			onGasChange={onGasChange}
			user={user}
		/>
	);
}

export default InsuranceContainer;
