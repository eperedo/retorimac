import styles from './PriceDetail.module.scss';
import image from './../../assets/guarantee.png';
import BaseButton from '../Base/BaseButton';

function PriceDetail({ total = 0, onClick }) {
	return (
		<div className={styles.priceContainer}>
			<div className={styles.totalContainer}>
				<div>
					<p className={styles.textAmount}>${total.toFixed(2)}</p>
					<p className={styles.textXSmall}>mensuales</p>
				</div>
				<img src={image} width="64" height="66" alt="Vehicular Flexible" />
			</div>
			<div className={styles.separator} />
			<p className={styles.textRegular}>El precio incluye:</p>
			<div className={styles.benefitsContainer}>
				<svg
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M12.3178 3.92746C12.634 4.19502 12.6734 4.66825 12.4059 4.98446L6.90588 11.4845C6.76799 11.6474 6.56719 11.7439 6.3538 11.7497C6.14041 11.7555 5.93465 11.6702 5.78808 11.515L2.95474 8.51497C2.67033 8.21383 2.6839 7.73915 2.98503 7.45474C3.28617 7.17033 3.76085 7.18389 4.04526 7.48503L6.30263 9.87519L11.2608 4.01554C11.5284 3.69934 12.0016 3.6599 12.3178 3.92746Z"
						fill="#43B748"
					/>
				</svg>
				<p className={styles.textXSmall}>Llanta de repuesto</p>
			</div>
			<div className={styles.benefitsContainer}>
				<svg
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M12.3178 3.92746C12.634 4.19502 12.6734 4.66825 12.4059 4.98446L6.90588 11.4845C6.76799 11.6474 6.56719 11.7439 6.3538 11.7497C6.14041 11.7555 5.93465 11.6702 5.78808 11.515L2.95474 8.51497C2.67033 8.21383 2.6839 7.73915 2.98503 7.45474C3.28617 7.17033 3.76085 7.18389 4.04526 7.48503L6.30263 9.87519L11.2608 4.01554C11.5284 3.69934 12.0016 3.6599 12.3178 3.92746Z"
						fill="#43B748"
					/>
				</svg>
				<p className={styles.textXSmall}>Análisis de motor</p>
			</div>
			<div className={styles.benefitsContainer}>
				<svg
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M12.3178 3.92746C12.634 4.19502 12.6734 4.66825 12.4059 4.98446L6.90588 11.4845C6.76799 11.6474 6.56719 11.7439 6.3538 11.7497C6.14041 11.7555 5.93465 11.6702 5.78808 11.515L2.95474 8.51497C2.67033 8.21383 2.6839 7.73915 2.98503 7.45474C3.28617 7.17033 3.76085 7.18389 4.04526 7.48503L6.30263 9.87519L11.2608 4.01554C11.5284 3.69934 12.0016 3.6599 12.3178 3.92746Z"
						fill="#43B748"
					/>
				</svg>
				<p className={styles.textXSmall}>Aros gratis</p>
			</div>
			<BaseButton
				attrs={{
					onClick,
				}}
			>
				LO QUIERO
			</BaseButton>
		</div>
	);
}

export default PriceDetail;
