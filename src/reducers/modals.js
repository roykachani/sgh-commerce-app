import { MODAL_OPEN, MODAL_CLOSE } from './actions/modal';
export const inicialState = {
	loading: true,
	modal: false,
};

export function modalsReducer(state, action) {
	switch (action.type) {
		case MODAL_OPEN:
			return {
				loading: false,
				modal: true,
			};
		case MODAL_CLOSE:
			return { ...inicialState };

		default:
			return state;
	}
}
