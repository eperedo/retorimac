import { useState } from 'react';
import styles from './ProductItem.module.scss';
import iconAdd from './../../assets/icon_add.png';
import iconMinus from './../../assets/icon_minus.png';
import iconUp from './../../assets/icon_arrow_up.png';
import iconDown from './../../assets/icon_arrow_down.png';
import Switch from '../Switch/Switch';

function ProductItem({ icon, title, description, onChange }) {
	const [showText, setShowText] = useState(false);
	const [btnState, setBtnState] = useState(false);
	const [label, setLabel] = useState('VER MÁS');

	const btnLabel = btnState ? 'QUITAR' : 'AGREGAR';

	function onToggle() {
		setShowText(!showText);
		setLabel(showText ? 'VER MÁS' : 'VER MENOS');
	}

	function onClick() {
		setBtnState(!btnState);
		onChange(!btnState);
	}

	return (
		<div className={styles.productItem}>
			<img src={icon} alt={title} width="40" height="40" />
			<p className={styles.textTitle}>{title}</p>
			<Switch onClick={onClick} value={btnState} />
			<img
				alt="Icono de flecha"
				className={styles.iconArrow}
				onClick={onToggle}
				height="20"
				src={showText ? iconUp : iconDown}
				width="20"
			/>
			<button onClick={onClick} className={styles.buttonToggle}>
				<img
					src={btnState ? iconMinus : iconAdd}
					height="24"
					width="24"
					alt={`Icono de ${btnLabel}`}
				/>
				{btnLabel}
			</button>
			{showText && <p className={styles.textDescription}>{description}</p>}
			<button onClick={onToggle} className={styles.textButton}>
				{label}
			</button>
		</div>
	);
}

export default ProductItem;
