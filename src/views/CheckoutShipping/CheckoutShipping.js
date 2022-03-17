import { useContext } from 'react';
import Footer from '../../components/Footer/Footer';
import ShippingForm from '../../components/ShippingForm/ShippingForm';
import { ModalContext } from '../../context/Modal';

import './styles.css';

const CheckoutShipping = ({ match }) => {
	const { state, handlerUser, handlerCart } = useContext(ModalContext);
	// const paramId = match.params.id;
	// const path = match.path;

	const handlerMenu = () => {
		if (!!state.modalCart) handlerCart();
		if (!!state.modalUser) handlerUser();
	};

	return (
		<>
			<main onClick={handlerMenu} className="main_container">
				<section className="products_main_container">
					<ShippingForm />
				</section>
				<Footer />
			</main>
		</>
	);
};

export default CheckoutShipping;
