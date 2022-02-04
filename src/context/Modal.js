import { createContext, useReducer } from 'react';

import { modalsReducer, inicialState } from '../reducers/modals';
import { MODAL_OPEN, MODAL_CLOSE } from '../reducers/actions/modal';

export const ModalContext = createContext({
	state: inicialState,
	handlerModal: () => {},
});

const { Provider } = ModalContext;

export const ModalsProvider = ({ children }) => {
	const [state, dispatch] = useReducer(modalsReducer, inicialState);

	const handlerUser = () => {
		if (state.modal === true) return dispatch({ type: MODAL_CLOSE });
		dispatch({ type: MODAL_OPEN });
	};
	return <Provider value={{ state, handlerUser }}>{children}</Provider>;
};
