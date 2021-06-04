import { useState } from 'react';
import styles from './ProductItem.module.scss';

function ProductItem({ icon, title, description, onChange }) {
	const [showText, setShowText] = useState(false);
	const [label, setLabel] = useState('VER MÁS');

	function onToggle() {
		setShowText(!showText);
		setLabel(showText ? 'VER MÁS' : 'VER MENOS');
	}

	return (
		<div className={styles.productItem}>
			<img src={icon} alt={title} width="40" height="40" />
			<p className={styles.textTitle}>{title}</p>
			<input
				type="checkbox"
				onChange={onChange}
				aria-label="Agregar Servicio"
			/>
			{showText && <p className={styles.textDescription}>{description}</p>}
			<button onClick={onToggle} className={styles.textButton}>
				{label}
			</button>
		</div>
	);
}

export default ProductItem;
