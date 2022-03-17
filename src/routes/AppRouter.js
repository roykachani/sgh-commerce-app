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
import Header from '../components/Header/Header';
import AccounteCreate from '../views/AccounteCreate/AccounteCreate';
import Category from '../views/Products/Category';
import PrivateRoute from './PrivateRoute';
import Checkout from '../views/Checkout/Checkout';
import Loader from '../components/Loader/Loader';
import CheckoutShipping from '../views/CheckoutShipping/CheckoutShipping';
import PaymentsCheckout from '../views/Payments/Payments';

const AppRouter = () => {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/home" exact component={Home} />
				<Route path="/signin" exact component={Signin} />
				<Route path="/signup" exact component={Signup} />
				<Route path="/accounteCreate" exact component={AccounteCreate} />
				<Route
					path="/accounteCreate/:verificationCode"
					exact
					component={AccounteCreate} //desarrollar
				/>
				<Route path="/products" exact component={Products} />
				<Route
					path="/products/categories/:category"
					exact
					component={Category}
				/>
				<Route path="/products/:id/:title" exact component={Product} />
				<PrivateRoute exact path="/cvn/checkout/cart" component={Checkout} />
				<PrivateRoute
					exact
					path="/cvn/checkout/onepage"
					component={CheckoutShipping}
				/>
				<PrivateRoute
					exact
					path="/cvn/checkout/index"
					component={PaymentsCheckout}
				/>
				<PrivateRoute
					exact
					path="/user/myProfile/index"
					component={PaymentsCheckout}
				/>
				<PrivateRoute
					exact
					path="/user/lastshopping/index"
					component={PaymentsCheckout}
				/>
				<Redirect to="/" />
			</Switch>
		</Router>
	);
};

export default AppRouter;
