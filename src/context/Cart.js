import { createContext, useEffect, useReducer } from 'react';

import { cartReducer, inicialState } from '../reducers/cart';
import {
	ADD_ITEM_CART,
	REMOVE_ITEM_CART,
	DELETE_CART,
	ADD_PAYMENTM_CART,
	REMOVE_PAYMENTM_CART,
	ADD_ADRESS_CART,
	REMOVE_ADRESS_CART,
	ADD_CART_STORAGE,
	MESSAGES_CART,
	CHANGE_QUANTITY_CART,
	FINISHED_CART,
	SET_TOTALCART,
	LOADING_TRUE,
	LOADING_FALSE,
} from '../reducers/actions/cart';
import {
	setCartStorage,
	getCartStorage,
	removeCartStorage,
} from '../utils/cartStorage';
import { usePost } from '../hooks/usePost';

export const CartContext = createContext({
	cartState: inicialState,
	addItem: () => {},
	removeItem: () => {},
	handlerMessages: () => {},
	addAdress: () => {},
	removeAdress: () => {},
	setLoading: () => {},
	addPayMethod: () => {},
	removePayMethod: () => {},
	payCart: () => {},
	deleteCart: () => {},
});

const { Provider } = CartContext;

export const CartProvider = ({ children }) => {
	const [cartState, dispatch] = useReducer(cartReducer, inicialState);
	const { cartProducts } = cartState;

	const [postData] = usePost();

	// useEffect(() => {
	// 	const cartStorage = getCartStorage();
	// 	if (!!cartStorage) {
	// 		dispatch({ type: ADD_CART_STORAGE, payload: cartStorage });
	// 	}
	// }, []);

	const addItem = (payload) => {
		dispatch({ type: ADD_ITEM_CART, payload: payload });
		console.log(payload, 'payload additem');
		setCartStorage(cartState);
	};

	const removeItem = (payload) => {
		dispatch({ type: REMOVE_ITEM_CART, payload: payload });
	};
	const handlerQuantity = (payload) => {
		dispatch({ type: CHANGE_QUANTITY_CART, payload: payload });
	};
	const handlerMessages = (payload) => {
		dispatch({ type: MESSAGES_CART, payload: payload });
	};

	const addAdress = (payload) => {
		console.log(payload, 'payload addADRESS');
		dispatch({ type: ADD_ADRESS_CART, payload: payload });
	};

	const removeAdress = (payload) => {
		console.log(payload, 'payload removeADRESS');
		dispatch({ type: REMOVE_ADRESS_CART, payload: payload });
	};
	const totalCart = (payload) => {
		console.log(payload, 'payload totalcartsett');

		dispatch({ type: SET_TOTALCART, payload: payload });
	};
	const setLoading = () => {
		dispatch({ type: LOADING_TRUE });
		setTimeout(() => {
			dispatch({ type: LOADING_FALSE });
		}, 1000);
	};
	const addPayMethod = async (obj, config) => {
		try {
			// const data = await postData('purchase/', obj, config);
			const data = await postData('checkout', obj, config);
			console.log(data);
			dispatch({ type: ADD_PAYMENTM_CART, payload: data });
			if (data?.status === 401) {
				dispatch({ type: ADD_PAYMENTM_CART, payload: data });
			}
			if (data?.status === 201) {
				dispatch({ type: ADD_PAYMENTM_CART, payload: data });
			}
			console.log('dataok');
		} catch (e) {
			console.log(e);
		}
	};

	const removePayMethod = (payload) => {
		dispatch({ type: REMOVE_PAYMENTM_CART, payload: payload });
	};

	const payCart = () => {
		dispatch({ type: FINISHED_CART });
		removeCartStorage();
	};

	const deleteCart = () => {
		dispatch({ type: DELETE_CART });
		removeCartStorage();
	};

	return (
		<Provider
			value={{
				cartState,
				addItem,
				removeItem,
				addAdress,
				removeAdress,
				addPayMethod,
				removePayMethod,
				payCart,
				handlerMessages,
				deleteCart,
				handlerQuantity,
				totalCart,
				setLoading,
			}}
		>
			{children}
		</Provider>
	);
};
