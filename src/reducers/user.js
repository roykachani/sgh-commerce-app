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
	user: null,
};

export function userReducer(state, action) {
	switch (action.type) {
		case POSTING:
			return {
				...inicialState,
			};
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
				user: null,
			};
		case FETCHING:
			return {
				loading: true,
				error: false,
				user: state,
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
