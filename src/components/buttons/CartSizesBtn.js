import { useContext } from 'react';
import { ModalContext } from '../../context/Modal';

const CartSizesBtn = ({ id, modalId, showModal }) => {
	const { state, handlerSizes } = useContext(ModalContext);
	const showModalsizes = (e) => {
		if (state.modalSizes === false) {
			showModal(e.target.id);
			handlerSizes();
		} else if (id == modalId) {
			handlerSizes();
		} else if (state.modalSizes === true) return showModal(e.target.id);
	};

	return (
		<>
			<button
				id={id}
				onClick={showModalsizes}
				className="btn_primary btn_card btn_card_primary"
			>
				comprar
			</button>
		</>
	);
};

export default CartSizesBtn;
