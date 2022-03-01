import { useContext } from 'react';

import { ModalContext } from '../../context/Modal';
import Footer from '../../components/Footer/Footer';
import ProductsSale from '../../components/ProductSale/ProductSale';
import Welcome from '../../components/Welcome/welcome';

import './styles.css';

const Home = () => {
	const { state, handlerUser, handlerCart } = useContext(ModalContext);
	const handlerMenu = () => {
		if (!!state.modalCart) handlerCart();
		if (!!state.modalUser) handlerUser();
	};

	return (
		<>
			<main onClick={handlerMenu} className="main_container">
				<section className="welcome_container">
					<Welcome />
				</section>
				<section className="productsSale_container">
					<ProductsSale />
				</section>

				<Footer />
			</main>
		</>
	);
};

export default Home;
