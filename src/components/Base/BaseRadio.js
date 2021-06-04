import styles from './BaseRadio.module.scss';

function BaseRadio({ id, label, attrs }) {
	return (
		<div className={styles.radio}>
			<input id={id} type="radio" {...attrs} />
			<label htmlFor={id}>{label}</label>
		</div>
	);
}

export default BaseRadio;
