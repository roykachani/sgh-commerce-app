import {
	FETCH_ERROR,
	FETCH_SUCCESS,
	POST_ERROR,
	POST_SUCCESS,
} from './actions/common';

export const inicialState = {
	loading: true,
	error: false,
	products: null,
};

export function productsReducer(state, action) {
	switch (action.type) {
		case POST_SUCCESS:
			return {
				loading: false,
				error: false,
				products: action.payload,
			};
		case POST_ERROR:
			return {
				loading: false,
				error: true,
				products: action.payload,
			};
		case FETCH_SUCCESS:
			return {
				loading: false,
				error: false,
				products: action.payload,
			};
		case FETCH_ERROR:
			return {
				loading: false,
				error: true,
				products: action.payload,
			};
		default:
			return state;
	}
}
