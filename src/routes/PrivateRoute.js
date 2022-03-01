import { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../context/Auth';

const PrivateRoute = ({ component: Component, ...rest }) => {
	const { userState } = useContext(AuthContext);

	if (!!userState.userData) return <Route {...rest} component={Component} />;

	return <Redirect to="/" />;
};

export default PrivateRoute;
