import React from 'react';
import Header from '../../components/Header/Header';
import ProductsList from '../../components/ProductsList/ProductsList';

import './styles.css';

const Products = () => {
	return (
		<>
			<main className="main_container">
				<Header />
				<section className="products_main_container">
					<ProductsList />
				</section>
			</main>
			{/* <div>Footer</div> */}
		</>
	);
};

export default Products;
