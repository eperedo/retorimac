import styles from './ThankYouScreen.module.scss';
import employeeMobile from './../../assets/employee_thankyou_mobile.png';
import employeeDesktop from './../../assets/employee_thankyou_desktop.png';
import TheHeader from '../../components/TheHeader';
import BaseButton from '../../components/Base/BaseButton';

function ThankYouScreen({ onClick, user }) {
	return (
		<div>
			<TheHeader />
			<div className={styles.container}>
				<img
					src={employeeMobile}
					className={styles.imageEmployee}
					alt="Hombre feliz con las manos levantadas"
				/>
				<div className={styles.backgroundImage}>
					<img
						src={employeeDesktop}
						className={styles.imageEmployeeDesktop}
						alt="Hombre feliz con las manos levantadas"
					/>
				</div>
				<div className={styles.infoContainer}>
					<p className={styles.textLarge}>¡Te damos la bienvenida!</p>
					<p className={styles.textSubTitle}>
						Cuenta con nosotros para proteger tu vehículo
					</p>
					<p className={styles.textRegular}>
						Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a
						tu correo:
						<strong>{`  ${user?.email}`}</strong>
					</p>
					<BaseButton
						attrs={{
							onClick,
						}}
					>
						CÓMO USAR MI SEGURO
					</BaseButton>
				</div>
			</div>
		</div>
	);
}

export default ThankYouScreen;
