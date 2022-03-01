import React, { useContext } from 'react';

import { ModalContext } from '../../context/Modal';
import ProductsList from '../../components/ProductsList/ProductsList';
import Footer from '../../components/Footer/Footer';

import './styles.css';

const Products = () => {
	const { state, handlerUser, handlerCart } = useContext(ModalContext);
	const handlerMenu = () => {
		if (!!state.modalCart) handlerCart();
		if (!!state.modalUser) handlerUser();
	};

	return (
		<>
			<main onClick={handlerMenu} className="main_container">
				<section className="products_main_container">
					<ProductsList />
				</section>
				<Footer />
			</main>
		</>
	);
};

export default Products;
