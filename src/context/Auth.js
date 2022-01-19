import { createContext, useState, useEffect } from 'react';

import {
	getAuthStorage,
	setAuthStorage,
	removeAuthStorage,
} from '../utils/auth';

//contexto
export const AuthContext = createContext({
	auth: null,
	authenticate: () => {},
	logout: () => {},
});

//provider

const { Provider } = AuthContext;

export const AuthProvider = ({ children }) => {
	const [auth, setAuth] = useState(null); //guardo el token

	useEffect(() => {
		const authenticatedData = getAuthStorage();
		console.log(authenticatedData, 'effect');
		if (!!authenticatedData) {
			setAuth(authenticatedData);
		}
	}, []);

	const authenticate = (response) => {
		// console.log(response);
		const { JWT: token } = response.userData;
		// console.log(token, 'tokennn');
		setAuth(token);
		setAuthStorage(token);
	};

	const exit = () => {
		setAuth(null);
		removeAuthStorage();
	};

	return <Provider value={{ auth, authenticate, exit }}>{children}</Provider>;
};
