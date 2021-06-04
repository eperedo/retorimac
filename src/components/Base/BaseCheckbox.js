import styles from './BaseCheckbox.module.scss';

function BaseCheckbox({ attrs, label }) {
	return (
		<label htmlFor={attrs.id} className={styles.container}>
			{label}
			<input
				className={styles.input}
				id={attrs.id}
				type="checkbox"
				{...attrs}
			/>
			<span className={styles.checkmark}></span>
		</label>
	);
}

export default BaseCheckbox;
