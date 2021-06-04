import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useDataFromLs from '../../hooks/useDataFromLs';
import PlanScreen from './PlanScreen';

function PlanContainer() {
	const history = useHistory();
	const car = useDataFromLs('car', () => history.push('/'));
	const [order, setOrder] = useState({
		total: 20,
		products: [],
	});
	const [currentTab, setCurrentTab] = useState(0);

	function onSelectedProduct(value, product) {
		const isAdding = value;
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

	function onTab(tabIndex) {
		setCurrentTab(tabIndex);
	}

	return (
		<PlanScreen
			car={car}
			currentTab={currentTab}
			onBack={onBack}
			onSelectedProduct={onSelectedProduct}
			order={order}
			onOrder={onOrder}
			onTab={onTab}
		/>
	);
}

export default PlanContainer;
