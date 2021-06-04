import styles from './BaseSelect.module.scss';

function BaseSelect({ attrs, children, label }) {
	return (
		<div className={styles.container}>
			<div className={styles.arrow}>
				<svg
					width="17"
					height="18"
					viewBox="0 0 17 18"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M13.2943 6.23411C13.6148 6.56548 13.6148 7.09692 13.2943 7.42829L9.09867 11.7659C8.76988 12.1058 8.23001 12.1058 7.90122 11.7659L3.70562 7.42829C3.38509 7.09692 3.38509 6.56548 3.70562 6.23411C4.03441 5.89419 4.57428 5.89419 4.90307 6.23411L8.49995 9.95273L12.0968 6.23411C12.4256 5.89419 12.9655 5.89419 13.2943 6.23411Z"
						fill="#EF3340"
					/>
				</svg>
			</div>
			<select aria-label={label} className={styles.select} {...attrs}>
				{children}
			</select>
		</div>
	);
}

export default BaseSelect;
