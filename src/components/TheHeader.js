import styles from './TheHeader.module.scss';
import Logo from './../assets/logo.png';

function TheHeader({ fixed }) {
	const cssContainer = fixed
		? `${styles.container} ${styles.fixed}`
		: styles.container;
	return (
		<div className={cssContainer}>
			<img src={Logo} height="16" width="92" alt="Rimac" />
			<div className={styles.contactContainer}>
				<p className={styles.textSmall}>¿Tienes alguna duda?</p>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M9.82987 13.3336C8.05552 10.7869 7.40599 9.33551 9.03946 8.18617C10.4443 7.19756 10.3513 7.08746 9.08784 4.63356C7.9204 2.36635 7.43407 1.78008 5.82693 3.08211C2.25266 5.57834 3.20401 9.62926 7.09164 15.209C10.9793 20.789 14.5851 23.0745 18.0461 20.6201C19.8132 19.5476 19.4314 18.8878 17.7107 17.0101C15.8483 14.9777 15.7591 14.8769 14.378 15.8489C12.7687 16.9814 11.6042 15.8802 9.82987 13.3336Z"
						fill="#6F7DFF"
					/>
				</svg>
				<a href="tel:01-411-6001">
					<span className={styles.text}>Llámanos</span>
					<span className={`${styles.text} ${styles.phoneNumber}`}>
						(01) 411 6001
					</span>
				</a>
			</div>
		</div>
	);
}

export default TheHeader;
