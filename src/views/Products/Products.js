import React from 'react';
import ProductsList from '../../components/ProductsList/ProductsList';

import './styles.css';

const Products = () => {
	return (
		<>
			<main className="main_container">
				<section className="products_main_container">
					<ProductsList />
				</section>
			</main>
			{/* <div>Footer</div> */}
		</>
	);
};

export default Products;
