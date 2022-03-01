import { useContext } from 'react';

import { ModalContext } from '../../context/Modal';
import Register from '../../components/Register/Register';
import Footer from '../../components/Footer/Footer';

const Signup = () => {
	const { state, handlerUser, handlerCart } = useContext(ModalContext);
	const handlerMenu = () => {
		if (!!state.modalCart) handlerCart();
		if (!!state.modalUser) handlerUser();
	};

	return (
		<>
			<main onClick={handlerMenu} className="main_container">
				<section className="form_main_container">
					<Register />
				</section>
				<Footer />
			</main>
		</>
	);
};

export default Signup;
