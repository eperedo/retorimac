import styles from './ProgressBar.module.scss';

function ProgressBar({ value, max = 2 }) {
	const width = value <= max ? (value / max) * 100 : 100;

	return (
		<div className={styles.container}>
			<div className={styles.progress}></div>
			<div className={styles.value} style={{ width: `${width}%` }}></div>
		</div>
	);
}

export default ProgressBar;
