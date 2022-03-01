import {
	ADD_ITEM_CART,
	REMOVE_ITEM_CART,
	ADD_PAYMENTM_CART,
	REMOVE_PAYMENTM_CART,
	ADD_ADRESS_CART,
	REMOVE_ADRESS_CART,
	ADD_CART_STORAGE,
	CHANGE_QUANTITY_CART,
	MESSAGES_CART,
	DELETE_CART,
	FINISHED_CART,
} from './actions/cart';

export const inicialState = {
	cartProducts: [],
	shippinAdres: null,
	paymentMethod: null,
	cartFinished: false,
	messages: null,
};

export function cartReducer(state = inicialState, action) {
	switch (action.type) {
		case ADD_CART_STORAGE:
			return {
				...inicialState,
				cartProducts: action.payload.cartProducts,
				shippinAdres: action.payload.adress,
				cartFinished: false,
			};
		case ADD_ITEM_CART:
			return {
				...state,
				cartProducts: [...state.cartProducts, action.payload],
			};
		case REMOVE_ITEM_CART:
			return {
				...state,
				cartProducts: action.payload,
			};
		case CHANGE_QUANTITY_CART:
			return {
				...state,
				cartProducts: action.payload,
			};
		case MESSAGES_CART:
			return {
				...state,
				messages: action.payload,
			};
		case ADD_ADRESS_CART:
			return {
				...state,
				shippinAdres: action.payload,
			};
		case REMOVE_ADRESS_CART:
			return {
				...state,
				shippinAdres: action.payload,
			};
		case ADD_PAYMENTM_CART:
			return {
				...state,
				shippinAdres: action.payload,
			};
		case REMOVE_PAYMENTM_CART:
			return {
				...state,
				shippinAdres: action.payload,
			};
		case FINISHED_CART:
			return {
				...state,
				FINISHED_CART: true,
			};
		case DELETE_CART:
			return {
				...inicialState,
			};
		default:
			return state;
	}
}
