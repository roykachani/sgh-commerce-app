import { useContext, useEffect } from 'react';

import { ModalContext } from '../../context/Modal';
import PaymentsCheckout from '../../components/PaymentsCheckout/PaymentsCheckout';
import Footer from '../../components/Footer/Footer';

import './styles.css';

const CheckoutShipping = () => {
	const { state, handlerUser, handlerCart } = useContext(ModalContext);
	useEffect(() => {
		if (state.modalCart === true) handlerCart();
	}, [state, handlerCart]);

	const handlerMenu = () => {
		if (!!state.modalCart) handlerCart();
		if (!!state.modalUser) handlerUser();
	};

	return (
		<>
			<main onClick={handlerMenu} className="main_container">
				<section className="products_main_container">
					<PaymentsCheckout />
				</section>
				<Footer />
			</main>
		</>
	);
};

export default CheckoutShipping;
