import styles from './BaseInput.module.scss';

function BaseInput({ placeholder, onChange, attrs, showError = false }) {
	const cssClasses = showError
		? `${styles.input} ${styles.error}`
		: styles.input;
	return (
		<>
			<input
				{...attrs}
				placeholder={placeholder}
				onChange={onChange}
				className={cssClasses}
			/>
			{showError && <span className={styles.textError}>Campo requerido</span>}
		</>
	);
}

export default BaseInput;
