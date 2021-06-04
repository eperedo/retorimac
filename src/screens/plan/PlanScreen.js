import ProgressHeader from '../../components/ProgressHeader/ProgressHeader';
import Tab from '../../components/Tab/Tab';
import TheHeader from '../../components/TheHeader';
import employee from '././../../assets/employee_rimac.png';
import styles from './PlanScreen.module.scss';

import icon from './../../assets/icon_theft.png';
import iconDmg from './../../assets/icon_damage.png';
import iconTotal from './../../assets/icon_perdidatotal.png';
import ProductItem from '../../components/ProductItem/ProductItem';
import BaseButton from '../../components/Base/BaseButton';
import BackMenu from '../../components/BackMenu/BackMenu';
import StepsProgress from '../../components/StepsProgress/StepsProgress';
import PriceDetail from '../../components/PriceDetail/PriceDetail';

const products = [
	{
		id: 1,
		icon,
		title: 'Llanta robada',
		price: 15,
		description:
			'He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis',
	},
	{
		id: 2,
		icon: iconDmg,
		title: 'Choque y/o pasarte la luz roja',
		price: 20,
		description:
			'He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis',
	},
	{
		id: 3,
		icon: iconTotal,
		title: 'Atropello en la vía Evitamiento',
		price: 50,
		description:
			'He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis',
	},
];

function PlanScreen({ car, onBack, onSelectedProduct, order, onOrder }) {
	return (
		<div>
			<TheHeader />
			<ProgressHeader onClick={onBack} value={2} />
			<div className={styles.container}>
				<StepsProgress activeStepNumber={2} />
				<div className={styles.formContainer}>
					<div className={styles.infoContainer}>
						<BackMenu onClick={onBack} />
						<p className={styles.textBig}>Mira las coberturas</p>
						<p className={styles.textRegular}>
							Conoce las coberturas para tu plan
						</p>
						<div className={styles.carContainer}>
							<p className={styles.textSmall}>Placa: {car?.plate}</p>
							<p className={styles.textBrand}>{car?.brand}</p>
							<p className={styles.textEdit}>EDITAR</p>
							<img
								alt="Empleado de rimac sonriendo con el pulgar arriba"
								src={employee}
								className={styles.imageEmployee}
							/>
						</div>
						<PriceDetail total={order.total} onClick={onOrder} />
					</div>
					<p className={styles.textAdd}>Agrega o quita coberturas</p>
					<div className={styles.tabContainer}>
						<Tab label="PROTEGE A TU AUTO" active />
						<Tab label="PROTEGE A LOS QUE TE RODEAN" />
						<Tab label="MEJORA TU PLAN" />
					</div>
					<div className={styles.productsContainer}>
						{products.map((product) => {
							return (
								<ProductItem
									key={product.id}
									{...product}
									onChange={(e) => onSelectedProduct(e, product)}
								/>
							);
						})}
					</div>
					<div className={styles.priceContainer}>
						<div>
							<p className={styles.textPrice}>${order.total.toFixed(2)}</p>
							<p className={styles.textMonth}>MENSUAL</p>
						</div>
						<div className={styles.button}>
							<BaseButton
								attrs={{
									onClick: onOrder,
								}}
							>
								LO QUIERO
							</BaseButton>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PlanScreen;
