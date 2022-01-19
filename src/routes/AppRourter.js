import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';

import Home from '../views/Home/Home';
import Products from '../views/Products/Products';
import Signin from '../views/Signin/Signin';

const AppRouter = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/Home" exact component={Home} />
				<Route path="/Signin" component={Signin} />
				<Route path="/Products" exact component={Products} />
			</Switch>
		</Router>
	);
};

export default AppRouter;
