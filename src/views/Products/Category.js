import React, { useContext } from 'react';

import { ModalContext } from '../../context/Modal';

import CategoryList from '../../components/CategoryList/CategoryList';
import Footer from '../../components/Footer/Footer';

import './styles.css';

const Category = ({ match }) => {
	const { state, handlerUser, handlerCart } = useContext(ModalContext);
	const categoryParam = match.params.category;

	const handlerMenu = () => {
		if (!!state.modalCart) handlerCart();
		if (!!state.modalUser) handlerUser();
	};

	return (
		<>
			<main onClick={handlerMenu} className="main_container">
				<section className="products_main_container">
					<CategoryList categoryParam={categoryParam} />
				</section>
				<Footer />
			</main>
		</>
	);
};

export default Category;
