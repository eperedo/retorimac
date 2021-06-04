import TheHeader from '../../components/TheHeader';
import styles from './HomeScreen.module.scss';
import personHome from './../../assets/person_home_mobile.png';
import personDesktop from './../../assets/person_home_desktop.png';
import BaseInput from '../../components/Base/BaseInput';
import BaseButton from '../../components/Base/BaseButton';
import BaseSelect from '../../components/Base/BaseSelect';
import BaseCheckbox from '../../components/Base/BaseCheckbox';

function HomeScreen({ onSubmit, formState, onValidateInput, isLoading }) {
	return (
		<div>
			<TheHeader fixed />
			<div className={styles.pageContainer}>
				<div className={styles.container}>
					<img
						src={personDesktop}
						className={styles.personDesktop}
						width="320"
						height="250"
						alt="Persona con telefono"
					/>
					<div className={styles.heroContainer}>
						<p className={styles.textSmall}>¡NUEVO!</p>
						<p className={styles.textTitle}>Seguro Vehicular</p>
						<p className={styles.textTitleRed}>Tracking</p>
						<p className={styles.textSubTitle}>
							Cuentanos donde le haras seguimiento a tu seguro
						</p>
						<img
							src={personHome}
							className={styles.personMobile}
							width="112"
							height="276"
							alt="Persona con telefono"
						/>
					</div>
				</div>
				<form onSubmit={onSubmit} className={styles.formContainer}>
					<p className={styles.textTitle}>Déjanos tus datos</p>
					<div className={styles.formControl}>
						<div style={{ flex: '1 1 30%' }}>
							<BaseSelect label="Tipo Documento">
								<option>DNI</option>
								<option>CE</option>
							</BaseSelect>
						</div>
						<div style={{ flex: '1 1 70%' }}>
							<BaseInput
								placeholder="Nro. de doc"
								errorMessage={formState.dni.errorMessage}
								attrs={{
									'data-test-id': 'dni',
									'aria-label': 'Nro. de doc',
									type: 'number',
								}}
								value={formState.dni.value}
								onChange={(e) =>
									onValidateInput({ type: 'dni', value: e.target.value })
								}
								showError={formState.dni.hasError}
							/>
						</div>
					</div>
					<div>
						<BaseInput
							placeholder="Celular"
							errorMessage={formState.phone.errorMessage}
							attrs={{
								'data-test-id': 'phone',
								'aria-label': 'Celular',
								type: 'tel',
							}}
							onChange={(e) =>
								onValidateInput({ type: 'phone', value: e.target.value })
							}
							value={formState.phone.value}
							showError={formState.phone.hasError}
						/>
					</div>
					<div>
						<BaseInput
							placeholder="Placa"
							errorMessage={formState.plate.errorMessage}
							attrs={{ 'data-test-id': 'plate', 'aria-label': 'Placa' }}
							onChange={(e) =>
								onValidateInput({ type: 'plate', value: e.target.value })
							}
							value={formState.plate.value}
							showError={formState.plate.hasError}
						/>
					</div>
					<div className={styles.containerTos}>
						<BaseCheckbox
							label="Acepto la Política de Protección de Datos Personales y los
							Términos y Condiciones."
							attrs={{
								id: 'tos',
								value: formState.tos.value,
								onChange: (e) =>
									onValidateInput({ type: 'tos', value: e.target.checked }),
							}}
						/>
					</div>
					<div>
						<BaseButton
							type="submit"
							attrs={{
								'data-test-id': 'btn',
								disabled: isLoading || !formState.form.isValid,
							}}
						>
							COTIZAR
						</BaseButton>
					</div>
				</form>
			</div>
		</div>
	);
}

export default HomeScreen;
