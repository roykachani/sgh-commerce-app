import {
	FETCH_ERROR,
	FETCH_SUCCESS,
	POST_ERROR,
	POST_SUCCESS,
} from './actions/common';

export const inicialState = {
	loading: true,
	error: false,
	user: null,
};

export function userReducer(state, action) {
	switch (action.type) {
		case POST_SUCCESS:
			return {
				loading: false,
				error: false,
				user: action.payload,
			};
		case POST_ERROR:
			return {
				loading: false,
				error: true,
				user: action.payload,
			};
		case FETCH_SUCCESS:
			return {
				loading: false,
				error: false,
				user: action.payload,
			};
		case FETCH_ERROR:
			return {
				loading: false,
				error: true,
				user: null,
			};
		default:
			return state;
	}
}
