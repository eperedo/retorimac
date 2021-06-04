import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PlanScreen from './PlanScreen';

function PlanContainer() {
	const history = useHistory();
	const [car, setCar] = useState();
	const [order, setOrder] = useState({
		total: 20,
		products: [],
	});

	useEffect(() => {
		const car = window.localStorage.getItem('car');
		if (car) {
			setCar(JSON.parse(car));
		} else {
			history.push('/');
		}
	}, [history]);

	function onSelectedProduct(e, product) {
		const isAdding = e.target.checked;
		const newState = { ...order };
		if (isAdding) {
			newState.products.push(product);
		} else {
			const productIndex = newState.products.findIndex(
				(i) => i.id === product.id,
			);
			newState.products.splice(productIndex, 1);
		}
		newState.total =
			newState.products.reduce((acum, item) => acum + item.price, 0) + 20;
		setOrder(newState);
	}

	function onOrder() {
		history.push('/thank-you');
	}

	function onBack() {
		history.push('/insurance-car/step-1');
	}

	return (
		<PlanScreen
			car={car}
			onBack={onBack}
			onSelectedProduct={onSelectedProduct}
			order={order}
			onOrder={onOrder}
		/>
	);
}

export default PlanContainer;
