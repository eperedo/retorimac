import styles from './StepsProgress.module.scss';
import StepItem from './../StepItem/StepItem';

function StepsProgress({ activeStepNumber }) {
	return (
		<div className={styles.stepContainer}>
			<StepItem
				active={activeStepNumber === 1}
				value="1"
				label="Datos del auto"
			/>
			<StepItem
				active={activeStepNumber === 2}
				value="2"
				label="Arma tu plan"
			/>
		</div>
	);
}

export default StepsProgress;
