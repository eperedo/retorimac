import { useReducer, useState } from 'react';
import { useHistory } from 'react-router-dom';
import HomeScreen from './HomeScreen';

function reducer(state, action) {
	const newState = { ...state };
	newState[action.type].value = action.value;
	newState[action.type].hasError = !Boolean(action.value);
	newState[action.type].dirty = true;

	if (
		newState.dni.dirty &&
		newState.tos.dirty &&
		newState.plate.dirty &&
		newState.phone.dirty
	) {
		newState.form.isValid =
			!newState.dni.hasError &&
			!newState.phone.hasError &&
			!newState.tos.hasError &&
			!newState.plate.hasError;
	}

	return newState;
}

function HomeContainer() {
	const history = useHistory();
	const [stateHttp, setStateHttp] = useState('idle');
	const [formState, dispatch] = useReducer(reducer, {
		dni: {
			value: '',
			hasError: false,
			dirty: false,
		},
		phone: {
			value: '',
			hasError: false,
			dirty: false,
		},
		plate: {
			value: '',
			hasError: false,
			dirty: false,
		},
		tos: {
			value: false,
			hasError: false,
			dirty: false,
		},
		form: {
			isValid: false,
		},
	});

	async function onSubmit(e) {
		setStateHttp('loading');
		e.preventDefault();
		// genero un ID aleatorio para generar
		// distinta información en cada consulta
		const id = Math.ceil(Math.random() * 10);
		const response = await fetch(
			`https://jsonplaceholder.typicode.com/users/${id}`,
		);
		const json = await response.json();
		setStateHttp('finished');
		localStorage.setItem(
			'user',
			JSON.stringify({
				// algunos nombres son muy largos así
				// que decidí solo tomar la primera palabra
				name: json.name.split(' ')[0],
				email: json.email.toLowerCase(),
				plate: formState.plate.value,
			}),
		);
		history.push('/insurance-car/step-1');
	}

	return (
		<HomeScreen
			onSubmit={onSubmit}
			formState={formState}
			isLoading={stateHttp === 'loading'}
			onValidateInput={dispatch}
		/>
	);
}

export default HomeContainer;
