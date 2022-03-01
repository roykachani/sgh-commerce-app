import React, { useContext } from 'react';

import { ModalContext } from '../../context/Modal';
import Login from '../../components/Login/Login';
import Footer from '../../components/Footer/Footer';

import './styles.css';

const Signin = () => {
	const { state, handlerUser, handlerCart } = useContext(ModalContext);
	const handlerMenu = () => {
		if (!!state.modalCart) handlerCart();
		if (!!state.modalUser) handlerUser();
	};

	return (
		<>
			<main onClick={handlerMenu} className="main_container">
				<section className="form_main_container">
					<Login />
				</section>
				<Footer />
			</main>
		</>
	);
};

export default Signin;
