import styles from './Switch.module.scss';

function Switch({ onClick, title, value = false }) {
	const bg = value ? '#43b748' : '#e4e8f7';
	const stateClass = value ? styles.active : styles.inactive;

	return (
		<button
			onClick={onClick}
			className={styles.switchContainer}
			style={{
				backgroundColor: bg,
			}}
			title={title}
		>
			<div className={`${styles.circle} ${stateClass}`}></div>
		</button>
	);
}

export default Switch;
