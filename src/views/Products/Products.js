import React from 'react';
import ProductsList from '../../components/ProductsList/ProductsList';
import Footer from '../../components/Footer/Footer';

import './styles.css';

const Products = () => {
	return (
		<>
			<main className="main_container">
				<section className="products_main_container">
					<ProductsList />
				</section>
				<Footer />
			</main>
		</>
	);
};

export default Products;
