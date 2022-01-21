import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';

import Home from '../views/Home/Home';
import Products from '../views/Products/Products';
import Product from '../views/Product/Product';
import Signin from '../views/SignIn/Signin';
import Signup from '../views/Signup/Signup';

const AppRouter = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/home" exact component={Home} />
				<Route path="/signin" component={Signin} />
				<Route path="/signup" component={Signup} />
				<Route path="/products" component={Products} />
				<Route path="/product/:id" component={Product} />
			</Switch>
		</Router>
	);
};

export default AppRouter;
