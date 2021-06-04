import styles from './StepItem.module.scss';

function StepItem({ active, value, label }) {
	return (
		<div className={styles.stepContainer}>
			<div
				className={
					active ? `${styles.circle} ${styles.circleActive}` : styles.circle
				}
			>
				{value}
			</div>
			<p
				className={active ? `${styles.textActive} ${styles.text}` : styles.text}
			>
				{label}
			</p>
		</div>
	);
}

export default StepItem;
