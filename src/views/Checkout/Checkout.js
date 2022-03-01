import { useContext } from 'react';
import Footer from '../../components/Footer/Footer';
import { AuthContext } from '../../context/Auth';
import { ModalContext } from '../../context/Modal';

const Checkout = ({ match }) => {
	const { state, handlerUser, handlerCart } = useContext(ModalContext);
	const { userState } = useContext(AuthContext);
	console.log('asddd');
	// const paramId = match.params.id;
	// const path = match.path;

	const handlerMenu = () => {
		if (!!state.modalCart) handlerCart();
		if (!!state.modalUser) handlerUser();
	};

	return (
		<>
			<main onClick={handlerMenu} className="main_container">
				<section className="products_main_container">Checkout|</section>
				<Footer />
			</main>
		</>
	);
};

export default Checkout;
