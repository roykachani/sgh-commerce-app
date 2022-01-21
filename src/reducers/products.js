import {
	FETCHING,
	FETCH_ERROR,
	FETCH_SUCCESS,
	POSTING,
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
		case POSTING:
			return {
				...inicialState,
			};
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
		case FETCHING:
			return {
				loading: true,
				error: false,
				products: state,
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
