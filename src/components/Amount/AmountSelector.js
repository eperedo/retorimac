import { useState } from 'react';
import styles from './AmountSelector.module.scss';

function AmountSelector({
	max,
	min,
	initialValue,
	interval = 100,
	onChangeAmount,
}) {
	const [value, setValue] = useState(initialValue);

	function onCalculate(operation) {
		const newValue =
			operation === 'minus' ? value - interval : value + interval;
		if (newValue >= min && newValue <= max) {
			setValue(newValue);
			onChangeAmount(newValue);
		}
	}

	return (
		<div className={styles.container}>
			<button className={styles.btn} onClick={() => onCalculate('minus')}>
				-
			</button>
			<p>${value}</p>
			<button className={styles.btn} onClick={() => onCalculate('plus')}>
				+
			</button>
		</div>
	);
}

export default AmountSelector;
