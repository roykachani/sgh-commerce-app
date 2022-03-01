import { useContext } from 'react';

import { ModalContext } from '../../context/Modal';
import SingleProduct from '../../components/SingleProduct/SingleProduct';
import Footer from '../../components/Footer/Footer';

import './styles.css';

const Product = ({ match }) => {
	const { state, handlerUser, handlerCart } = useContext(ModalContext);
	console.log(match);
	const paramId = match.params.id;
	const path = match.path;

	const handlerMenu = () => {
		if (!!state.modalCart) handlerCart();
		if (!!state.modalUser) handlerUser();
	};

	return (
		<>
			<main onClick={handlerMenu} className="main_container">
				<section className="products_main_container">
					<SingleProduct paramId={paramId} path={path} />
				</section>
				<Footer />
			</main>
		</>
	);
};

export default Product;
