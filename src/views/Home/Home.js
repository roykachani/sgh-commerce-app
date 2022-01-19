import React from 'react';
import Header from '../../components/Header/Header';
import ProductsSale from '../../components/ProductSale/ProductSale';
import Welcome from '../../components/Welcome/welcome';

import './styles.css';

const Home = () => {
	return (
		<>
			<main className="main_container">
				<Header />
				<section className="welcome_container">
					<Welcome />
				</section>
				<section className="productsSale_container">
					<ProductsSale />
				</section>
				<section className="carrousel_container">
					carrousel metodos de envio
				</section>
			</main>
			{/* <div>Footer</div> */}
		</>
	);
};

export default Home;
