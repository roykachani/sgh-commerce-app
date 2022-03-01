import {
	MODAL_USER_OPEN,
	MODAL_USER_CLOSE,
	MODAL_CART_OPEN,
	MODAL_CART_CLOSE,
	MODAL_SIZES_OPEN,
	MODAL_SIZES_CLOSE,
} from './actions/modal';
export const inicialState = {
	loading: true,
	modalUser: false,
	modalCart: false,
	modalSizes: false,
};

export function modalsReducer(state, action) {
	switch (action.type) {
		case MODAL_SIZES_OPEN:
			return {
				...inicialState,
				loading: false,
				modalUser: false,
				modalSizes: true,
			};
		case MODAL_SIZES_CLOSE:
			return { ...inicialState };
		case MODAL_USER_OPEN:
			return {
				...inicialState,
				loading: false,
				modalUser: true,
			};
		case MODAL_USER_CLOSE:
			return { ...inicialState };
		case MODAL_CART_OPEN:
			return {
				...inicialState,
				loading: false,
				modalCart: true,
			};
		case MODAL_CART_CLOSE:
			return { ...inicialState };

		default:
			return state;
	}
}
