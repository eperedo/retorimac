import styles from './Switch.module.scss';

function Switch({ onClick, value = false }) {
	const bg = value ? '#43b748' : '#e4e8f7';
	const positionStyle = {
		left: value ? 'initial' : '2px',
		right: value ? '4px' : 'initial',
	};

	return (
		<button
			onClick={onClick}
			className={styles.switchContainer}
			style={{
				backgroundColor: bg,
			}}
		>
			<div className={styles.circle} style={positionStyle}></div>
		</button>
	);
}

export default Switch;
