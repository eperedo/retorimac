import TheHeader from '../../components/TheHeader';
import BaseSelect from '../../components/Base/BaseSelect';
import car from './../../assets/car.png';
import styles from './InsuranceScreen.module.scss';
import BaseButton from '../../components/Base/BaseButton';
import AmountSelector from '../../components/Amount/AmountSelector';
import BaseRadio from '../../components/Base/BaseRadio';
import ProgressHeader from '../../components/ProgressHeader/ProgressHeader';
import BackMenu from '../../components/BackMenu/BackMenu';
import StepsProgress from '../../components/StepsProgress/StepsProgress';

function InsuranceScreen({
	carInfo,
	onBack,
	onClick,
	onChangeAmount,
	onChangeSelect,
	onGasChange,
	user,
}) {
	return (
		<div>
			<TheHeader />
			<ProgressHeader onClick={onBack} value={1} />
			<div className={styles.container}>
				<StepsProgress activeStepNumber={1} />
				<div className={styles.formContainer}>
					<BackMenu onClick={onBack} />
					<p data-test-id="username" className={styles.textTitle}>
						¡Hola, <span>{user?.name}!</span>
					</p>
					<p className={styles.textSubtitle}>Completa los datos de tu auto</p>
					<div className={styles.helpContainer}>
						<div className={styles.selectsContainer}>
							<div>
								<BaseSelect
									label="Año"
									attrs={{
										defaultValue: carInfo.year,
										onChange: (e) => onChangeSelect('year', e),
									}}
								>
									<option>2021</option>
									<option>2020</option>
								</BaseSelect>
							</div>
							<div>
								<BaseSelect
									label="Marca"
									attrs={{
										defaultValue: carInfo.brand,
										onChange: (e) => onChangeSelect('brand', e),
									}}
								>
									<option value="Wolkswagen">Wolkswagen</option>
									<option value="Chevy Taxi">Chevy Taxi</option>
								</BaseSelect>
							</div>
						</div>
					</div>
					<div className={styles.infoContainer}>
						<img src={car} width="48" height="48" alt="carro de color rojo" />
						<div>
							<p className={styles.textInfo}>¿No encuentras el modelo?</p>
							<p className={styles.textLink}>CLICK AQUÍ</p>
						</div>
					</div>
					<div className={styles.gasContainer}>
						<p className={styles.textRegular}>¿Tu auto es a gas?</p>
						<div className={styles.gasForm}>
							<BaseRadio
								id="yesgas"
								label="Sí"
								attrs={{
									name: 'gas',
									value: true,
									defaultChecked: true,
									onChange: onGasChange,
								}}
							/>
							<BaseRadio
								id="nogas"
								label="No"
								attrs={{
									name: 'gas',
									value: false,
									onChange: onGasChange,
								}}
							/>
						</div>
					</div>
					<div className={styles.wat}>
						<div className={styles.amountContainer}>
							<p className={styles.textRegular}>Indica la suma asegurada</p>
							<div className={styles.pricesRangeContainer}>
								<p>MIN $12500</p>
								<div className={styles.separator}></div>
								<p>MAX $14500</p>
							</div>
						</div>
						<AmountSelector
							onChangeAmount={onChangeAmount}
							max={14500}
							min={12500}
							initialValue={carInfo.amount}
						/>
					</div>
					<div className={styles.buttonContainer}>
						<BaseButton
							attrs={{
								onClick,
							}}
						>
							CONTINUAR
						</BaseButton>
					</div>
				</div>
			</div>
			<footer>
				<p className={styles.textSmall}>
					© {new Date().getFullYear()} RIMAC Seguros y Reaseguros.
				</p>
			</footer>
		</div>
	);
}

export default InsuranceScreen;
