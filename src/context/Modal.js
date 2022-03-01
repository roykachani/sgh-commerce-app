import { createContext, useReducer } from 'react';

import { modalsReducer, inicialState } from '../reducers/modals';
import {
	MODAL_USER_OPEN,
	MODAL_USER_CLOSE,
	MODAL_CART_OPEN,
	MODAL_CART_CLOSE,
	MODAL_SIZES_OPEN,
	MODAL_SIZES_CLOSE,
} from '../reducers/actions/modal';

export const ModalContext = createContext({
	state: inicialState,
	handlerModal: () => {},
	handlerCart: () => {},
	handlerSizes: () => {},
});

const { Provider } = ModalContext;

export const ModalsProvider = ({ children }) => {
	const [state, dispatch] = useReducer(modalsReducer, inicialState);

	const handlerUser = () => {
		if (state.modalUser === true) return dispatch({ type: MODAL_USER_CLOSE });
		dispatch({ type: MODAL_USER_OPEN });
	};

	const handlerCart = () => {
		if (state.modalCart === true) return dispatch({ type: MODAL_CART_CLOSE });
		dispatch({ type: MODAL_CART_OPEN });
	};
	const handlerSizes = () => {
		if (state.modalSizes === true) return dispatch({ type: MODAL_SIZES_CLOSE });
		dispatch({ type: MODAL_SIZES_OPEN });
	};

	return (
		<Provider value={{ state, handlerUser, handlerCart, handlerSizes }}>
			{children}
		</Provider>
	);
};
