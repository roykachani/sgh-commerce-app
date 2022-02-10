import { createContext, useEffect, useReducer } from 'react';

import { usePost } from '../hooks/usePost';
import { POST_ERROR, POST_SUCCESS } from '../reducers/actions/common';
import { inicialState, userReducer } from '../reducers/user';
import {
	getAuthStorage,
	setAuthStorage,
	setRespStorage,
	getRespStorage,
	removeAuthStorage,
} from '../utils/auth';

//contexto
export const AuthContext = createContext({
	userState: inicialState,
	authenticate: () => {},
	logout: () => {},
});

//provider

const { Provider } = AuthContext;

export const AuthProvider = ({ children }) => {
	const [userState, dispatch] = useReducer(userReducer, inicialState);
	const [post] = usePost();

	useEffect(() => {
		const authenticatedData = getRespStorage();
		const tokenStorage = getAuthStorage();
		if (!!authenticatedData) {
			dispatch({ type: POST_SUCCESS, payload: authenticatedData }); //seteo la data del storage
		}
	}, []);

	const authenticate = async (endpoint, data) => {
		try {
			const response = await post(endpoint, data);

			if (!!response & (response.status === 400)) {
				dispatch({ type: POST_ERROR, payload: response });
				throw Error();
			} else if (!!response & (response.status === 401)) {
				dispatch({ type: POST_ERROR, payload: response });
				throw Error();
			} else if (!!response.userData) {
				const { JWT: token } = response.userData;
				dispatch({ type: POST_SUCCESS, payload: response.userData });
				setAuthStorage(token);
				setRespStorage(response.userData);
				return response;
			} else if (!!response & (response.status === 201)) {
				dispatch({ type: POST_SUCCESS, payload: response });
				return response;
			}
			// console.log(response);
		} catch (e) {
			console.log(e);
		}
	};

	const exit = () => {
		dispatch({ type: POST_SUCCESS, payload: null });
		removeAuthStorage();
	};

	return (
		<Provider value={{ userState, authenticate, exit }}>{children}</Provider>
	);
};
