import styles from './Tab.module.scss';

function Tab({ active = false, label }) {
	const color = active ? '#EF3340' : '#494F66';
	const borderColor = active ? '#EF3340' : '#E4E8F7';
	const borderWidth = active ? 2 : 1;

	return (
		<button
			className={styles.tabItem}
			style={{ borderBottom: `${borderWidth}px solid ${borderColor}` }}
		>
			<p className={styles.text} style={{ color }}>
				{label}
			</p>
		</button>
	);
}

export default Tab;
