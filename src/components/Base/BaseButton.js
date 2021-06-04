import styles from './BaseButton.module.scss';

function BaseButton({ attrs, children, type }) {
	return (
		<button className={styles.btn} type={type} {...attrs}>
			{children}
		</button>
	);
}

export default BaseButton;
