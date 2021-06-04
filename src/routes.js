import React, { useEffect } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	useLocation,
} from 'react-router-dom';
import HomeContainer from './screens/home/HomeContainer';
import InsuranceContainer from './screens/insurance/InsuranceContainer';
import PlanContainer from './screens/plan/PlanContainer';
import ThankYouContainer from './screens/thankyou/ThankYouContainer';

function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
}

function RouterConfig() {
	return (
		<Router>
			<ScrollToTop />
			<Switch>
				<Route exact path="/">
					<HomeContainer />
				</Route>
				<Route path="/insurance-car/step-1" children={<InsuranceContainer />} />
				<Route path="/plan" children={<PlanContainer />} />
				<Route path="/thank-you" children={<ThankYouContainer />} />
			</Switch>
		</Router>
	);
}
export default RouterConfig;
